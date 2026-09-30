/**
 * Crisis Room AIS relay.
 *
 * One Durable Object ("global") keeps a single WebSocket to aisstream.io open
 * while the dashboard is being viewed, stores the latest position per vessel in
 * memory and serves compact snapshots at GET /vessels. The API key never leaves
 * Cloudflare. When nobody has requested data for IDLE_MS, the upstream socket is
 * closed to save quota; the next request reopens it.
 */
import { AREA_IDS, AREAS, applyMessage, prune, subscription, toRows, type AreaId, type Vessel } from './ais.ts';

export interface Env {
  AIS_HUB: DurableObjectNamespace;
  AISSTREAM_API_KEY: string;
  ALLOWED_ORIGINS: string;
  /** Optional override for local testing against a mock stream. */
  AIS_UPSTREAM?: string;
}

const UPSTREAM = 'https://stream.aisstream.io/v0/stream';
const IDLE_MS = 10 * 60 * 1000;
const MAX_AGE_MS = 45 * 60 * 1000;
const TICK_MS = 60 * 1000;
const MAX_VESSELS = 8000;

function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
  return allowed.includes(origin)
    ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin', 'Access-Control-Allow-Methods': 'GET, OPTIONS' }
    : {};
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: cors });

    if (url.pathname === '/' || url.pathname === '/health') {
      return Response.json({ service: 'crisis-ais', areas: AREAS, endpoints: ['/vessels?area=gulf|red-sea|malacca|all', '/status'] }, { headers: cors });
    }
    if (url.pathname !== '/vessels' && url.pathname !== '/status') {
      return new Response('Not found', { status: 404, headers: cors });
    }

    const stub = env.AIS_HUB.get(env.AIS_HUB.idFromName('global'));
    const res = await stub.fetch(new Request(`https://hub${url.pathname}${url.search}`));
    const headers = new Headers(res.headers);
    for (const [k, v] of Object.entries(cors)) headers.set(k, v);
    headers.set('Cache-Control', 'no-store');
    return new Response(res.body, { status: res.status, headers });
  },
} satisfies ExportedHandler<Env>;

export class AisHub implements DurableObject {
  private vessels = new Map<number, Vessel>();
  private socket: WebSocket | null = null;
  private connecting: Promise<void> | null = null;
  private lastRequest = 0;
  private lastMessage = 0;
  private connectedSince = 0;
  private messages = 0;
  /** Raw frames from upstream, including ones outside the areas; for diagnostics. */
  private frames = 0;
  private frameTypes: Record<string, number> = {};
  private lastFrame = 0;
  private lastError = '';

  constructor(
    private state: DurableObjectState,
    private env: Env,
  ) {}

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    this.lastRequest = Date.now();
    await this.ensureAlarm();
    // Do not block the response on the upstream handshake.
    this.state.waitUntil(this.ensureConnected());

    if (url.pathname === '/status') return Response.json(this.status());

    const areaParam = url.searchParams.get('area') ?? 'all';
    const area = (areaParam === 'all' || (AREA_IDS as string[]).includes(areaParam) ? areaParam : 'all') as AreaId | 'all';
    const rows = toRows(this.vessels, area);
    return Response.json({
      ...this.status(),
      area,
      fields: ['mmsi', 'name', 'lat', 'lon', 'sog', 'cog', 'kind', 'ageSeconds', 'destination'],
      count: rows.length,
      vessels: rows,
    });
  }

  private status() {
    return {
      source: 'aisstream.io (terrestrial AIS receivers)',
      connected: this.socket?.readyState === WebSocket.OPEN,
      warmingUp: Date.now() - this.connectedSince < 3 * 60 * 1000,
      connectedSince: this.connectedSince ? new Date(this.connectedSince).toISOString() : null,
      lastMessage: this.lastMessage ? new Date(this.lastMessage).toISOString() : null,
      messagesReceived: this.messages,
      framesReceived: this.frames,
      frameTypes: this.frameTypes,
      lastFrame: this.lastFrame ? new Date(this.lastFrame).toISOString() : null,
      upstreamSilent: this.socket?.readyState === WebSocket.OPEN && this.frames === 0 && Date.now() - this.connectedSince > 2 * 60 * 1000,
      trackedVessels: this.vessels.size,
      lastError: this.lastError || null,
      generatedAt: new Date().toISOString(),
    };
  }

  private async ensureAlarm() {
    if ((await this.state.storage.getAlarm()) === null) {
      await this.state.storage.setAlarm(Date.now() + TICK_MS);
    }
  }

  private async ensureConnected(): Promise<void> {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) return;
    if (this.connecting) return this.connecting;
    if (!this.env.AISSTREAM_API_KEY) {
      this.lastError = 'AISSTREAM_API_KEY secret is not set';
      return;
    }
    this.connecting = (async () => {
      try {
        const resp = await fetch(this.env.AIS_UPSTREAM || UPSTREAM, { headers: { Upgrade: 'websocket' } });
        const ws = resp.webSocket;
        if (!ws) throw new Error(`upstream refused WebSocket upgrade (HTTP ${resp.status})`);
        ws.accept();
        // aisstream closes the connection if no subscription arrives within 3 seconds.
        ws.send(JSON.stringify(subscription(this.env.AISSTREAM_API_KEY)));
        ws.addEventListener('message', (event) => this.onMessage(event.data));
        ws.addEventListener('close', (event) => {
          this.lastError = event.code === 1000 ? '' : `upstream closed (${event.code} ${event.reason})`;
          if (this.socket === ws) this.socket = null;
        });
        ws.addEventListener('error', () => {
          this.lastError = 'upstream socket error';
        });
        this.socket = ws;
        this.connectedSince = Date.now();
        this.lastError = '';
      } catch (err) {
        this.lastError = err instanceof Error ? err.message : String(err);
        this.socket = null;
      } finally {
        this.connecting = null;
      }
    })();
    return this.connecting;
  }

  private onMessage(data: string | ArrayBuffer) {
    try {
      const text = typeof data === 'string' ? data : new TextDecoder().decode(data);
      const parsed = JSON.parse(text);
      this.frames++;
      this.lastFrame = Date.now();
      const t = parsed && typeof parsed === 'object' && typeof (parsed as { MessageType?: unknown }).MessageType === 'string' ? (parsed as { MessageType: string }).MessageType : 'other';
      this.frameTypes[t] = (this.frameTypes[t] ?? 0) + 1;
      if (parsed && typeof parsed === 'object' && 'error' in parsed) {
        this.lastError = `aisstream: ${String((parsed as { error: unknown }).error)}`;
        return;
      }
      if (this.vessels.size >= MAX_VESSELS) prune(this.vessels, MAX_AGE_MS / 3);
      if (applyMessage(this.vessels, parsed)) {
        this.messages++;
        this.lastMessage = Date.now();
      }
    } catch {
      // ignore malformed frames
    }
  }

  async alarm(): Promise<void> {
    const idle = Date.now() - this.lastRequest > IDLE_MS;
    if (idle) {
      // Nobody is watching: close upstream and stop ticking. Positions are kept in memory
      // only as long as the object stays resident.
      try {
        this.socket?.close(1000, 'idle');
      } catch {
        /* already closed */
      }
      this.socket = null;
      return;
    }
    prune(this.vessels, MAX_AGE_MS);
    await this.ensureConnected();
    await this.state.storage.setAlarm(Date.now() + TICK_MS);
  }
}

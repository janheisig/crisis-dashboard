import { useEffect, useState } from 'react';

export type VesselKind = 'tanker' | 'cargo' | 'passenger' | 'other' | 'unknown';

export interface LiveVessel {
  mmsi: number;
  name: string;
  lat: number;
  lon: number;
  sog: number | null;
  cog: number | null;
  kind: VesselKind;
  ageSeconds: number;
  destination: string;
}

export type LiveVesselState =
  | { status: 'off' }
  | { status: 'not-configured' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'ready';
      vessels: LiveVessel[];
      connected: boolean;
      warmingUp: boolean;
      generatedAt: string;
      lastError: string | null;
    };

const POLL_MS = 30_000;

type Row = [number, string, number, number, number | null, number | null, VesselKind, number, string];

/**
 * Polls the Cloudflare AIS relay while `enabled` is true. The relay URL is read
 * from data/ais-config.json, which the worker deploy workflow writes; if it is
 * empty the layer reports "not-configured".
 */
export function useLiveVessels(enabled: boolean): LiveVesselState {
  const [state, setState] = useState<LiveVesselState>({ status: 'off' });

  useEffect(() => {
    if (!enabled) {
      setState({ status: 'off' });
      return;
    }
    let cancelled = false;
    let timer: number | undefined;
    setState({ status: 'loading' });

    const run = async () => {
      let endpoint = '';
      try {
        const cfg = await fetch(`${import.meta.env.BASE_URL}data/ais-config.json`, { cache: 'no-cache' }).then((r) => r.json());
        endpoint = typeof cfg.endpoint === 'string' ? cfg.endpoint.replace(/\/$/, '') : '';
      } catch {
        endpoint = '';
      }
      if (cancelled) return;
      if (!endpoint) {
        setState({ status: 'not-configured' });
        return;
      }
      const poll = async () => {
        try {
          const res = await fetch(`${endpoint}/vessels?area=all`, { cache: 'no-store' });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const json = await res.json();
          if (cancelled) return;
          const vessels: LiveVessel[] = (json.vessels as Row[]).map(([mmsi, name, lat, lon, sog, cog, kind, ageSeconds, destination]) => ({
            mmsi,
            name,
            lat,
            lon,
            sog,
            cog,
            kind,
            ageSeconds,
            destination,
          }));
          setState({
            status: 'ready',
            vessels,
            connected: Boolean(json.connected),
            warmingUp: Boolean(json.warmingUp),
            generatedAt: String(json.generatedAt),
            lastError: json.lastError ?? null,
          });
        } catch (e) {
          if (!cancelled) setState({ status: 'error', message: e instanceof Error ? e.message : 'request failed' });
        } finally {
          if (!cancelled) timer = window.setTimeout(poll, POLL_MS);
        }
      };
      poll();
    };
    run();

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [enabled]);

  return state;
}

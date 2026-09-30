/**
 * Pure AIS helpers (no Workers APIs), so they can be unit-tested with Node.
 */

/** Areas relayed to the dashboard. aisstream.io expects [[lat, lon], [lat, lon]] corners. */
export const AREAS = {
  gulf: { label: 'Persian Gulf, Hormuz, Gulf of Oman', box: [[22.0, 47.5], [30.5, 60.5]] },
  'red-sea': { label: 'Red Sea, Bab el-Mandeb, Gulf of Aden', box: [[11.0, 32.0], [30.0, 51.5]] },
  malacca: { label: 'Strait of Malacca, Singapore Strait', box: [[-1.0, 95.0], [7.5, 105.0]] },
} as const;

export type AreaId = keyof typeof AREAS;

export const AREA_IDS = Object.keys(AREAS) as AreaId[];

/** Broad vessel categories derived from the AIS ship type code. */
export type VesselKind = 'tanker' | 'cargo' | 'passenger' | 'other' | 'unknown';

export function kindFromShipType(code: number | undefined): VesselKind {
  if (code === undefined || !Number.isFinite(code) || code <= 0) return 'unknown';
  if (code >= 80 && code <= 89) return 'tanker';
  if (code >= 70 && code <= 79) return 'cargo';
  if (code >= 60 && code <= 69) return 'passenger';
  return 'other';
}

export interface Vessel {
  mmsi: number;
  name: string;
  lat: number;
  lon: number;
  /** speed over ground, knots */
  sog: number | null;
  /** course over ground, degrees */
  cog: number | null;
  /** AIS ship type code, if a static data message has been received */
  type?: number;
  destination?: string;
  /** epoch ms when the last position was received */
  t: number;
}

type Json = Record<string, unknown>;

const num = (v: unknown): number | undefined => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);
const str = (v: unknown): string | undefined => (typeof v === 'string' ? v.trim() : undefined);

/** Returns the id of the relayed area that contains the position, if any. */
export function areaOf(lat: number, lon: number): AreaId | undefined {
  for (const id of AREA_IDS) {
    const [[a, b], [c, d]] = AREAS[id].box;
    const [latMin, latMax] = [Math.min(a, c), Math.max(a, c)];
    const [lonMin, lonMax] = [Math.min(b, d), Math.max(b, d)];
    if (lat >= latMin && lat <= latMax && lon >= lonMin && lon <= lonMax) return id;
  }
  return undefined;
}

/**
 * Applies one aisstream.io message to the vessel map. Returns true if the map changed.
 * Handles PositionReport (classes A/B) and ShipStaticData. Field names are read
 * case-insensitively for MetaData because the feed has used both spellings.
 */
export function applyMessage(store: Map<number, Vessel>, raw: unknown, now = Date.now()): boolean {
  if (!raw || typeof raw !== 'object') return false;
  const msg = raw as Json;
  const type = str(msg.MessageType);
  const meta = (msg.MetaData ?? {}) as Json;
  const body = (msg.Message ?? {}) as Json;
  const mmsi = num(meta.MMSI) ?? num(meta.mmsi);
  if (!mmsi) return false;

  if (type === 'PositionReport' || type === 'StandardClassBPositionReport' || type === 'ExtendedClassBPositionReport') {
    const pr = (body[type] ?? {}) as Json;
    const lat = num(meta.latitude) ?? num(meta.Latitude) ?? num(pr.Latitude);
    const lon = num(meta.longitude) ?? num(meta.Longitude) ?? num(pr.Longitude);
    if (lat === undefined || lon === undefined || Math.abs(lat) > 90 || Math.abs(lon) > 180) return false;
    if (!areaOf(lat, lon)) return false;
    const sog = num(pr.Sog);
    const cog = num(pr.Cog);
    const prev = store.get(mmsi);
    store.set(mmsi, {
      ...prev,
      mmsi,
      name: str(meta.ShipName) || prev?.name || '',
      lat,
      lon,
      // 102.3 knots and 360 degrees are the AIS "not available" values
      sog: sog !== undefined && sog < 102.3 ? sog : null,
      cog: cog !== undefined && cog < 360 ? cog : null,
      t: now,
    });
    return true;
  }

  if (type === 'ShipStaticData') {
    const sd = (body.ShipStaticData ?? {}) as Json;
    const prev = store.get(mmsi);
    if (!prev) return false; // only enrich vessels already seen in an area
    prev.type = num(sd.Type) ?? prev.type;
    prev.destination = str(sd.Destination) || prev.destination;
    prev.name = str(sd.Name) || prev.name;
    return true;
  }
  return false;
}

/** Drops vessels whose last position is older than maxAgeMs. Returns the number removed. */
export function prune(store: Map<number, Vessel>, maxAgeMs: number, now = Date.now()): number {
  let removed = 0;
  for (const [mmsi, v] of store) {
    if (now - v.t > maxAgeMs) {
      store.delete(mmsi);
      removed++;
    }
  }
  return removed;
}

/** Compact row format sent to the browser: [mmsi, name, lat, lon, sog, cog, kind, ageSeconds, destination]. */
export type VesselRow = [number, string, number, number, number | null, number | null, VesselKind, number, string];

export function toRows(store: Map<number, Vessel>, area: AreaId | 'all', now = Date.now()): VesselRow[] {
  const rows: VesselRow[] = [];
  for (const v of store.values()) {
    if (area !== 'all' && areaOf(v.lat, v.lon) !== area) continue;
    rows.push([
      v.mmsi,
      v.name,
      Math.round(v.lat * 1e4) / 1e4,
      Math.round(v.lon * 1e4) / 1e4,
      v.sog,
      v.cog,
      kindFromShipType(v.type),
      Math.round((now - v.t) / 1000),
      v.destination ?? '',
    ]);
  }
  return rows;
}

/** Subscription message for aisstream.io. */
export function subscription(apiKey: string) {
  return {
    APIKey: apiKey,
    BoundingBoxes: AREA_IDS.map((id) => AREAS[id].box),
    FilterMessageTypes: ['PositionReport', 'StandardClassBPositionReport', 'ExtendedClassBPositionReport', 'ShipStaticData'],
  };
}

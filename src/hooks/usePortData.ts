import { useEffect, useState } from 'react';

export interface PortRecord {
  id: string;
  name: string;
  iso3: string;
  /** 'focus': main ports of the covered countries; 'context': ports on the coloured routes and around Hormuz. */
  group: 'focus' | 'context';
  lat: number;
  lon: number;
  importShare: number | null;
  baseline: number;
  avg7: number;
  tankerAvg7: number;
  containerAvg7: number;
  latestDate: string;
  weekly: number[];
}
export interface PortSnapshot {
  fetchedAt: string;
  latestDate: string;
  baselineWindow: { from: string; to: string };
  source: { publisher: string; dataset: string; url: string; note: string };
  ports: PortRecord[];
}
export interface RouteNetwork {
  source: string;
  lines: [number, number][][];
}

/** Ratio above or below which a change against the baseline is flagged as possibly a data artefact. */
export const VOLATILE_HIGH = 1.5;
export const VOLATILE_LOW = 0.67;

export function portRatio(p: PortRecord): number | null {
  return p.baseline >= 1 ? p.avg7 / p.baseline : null;
}
export function isVolatile(p: PortRecord): boolean {
  const r = portRatio(p);
  return r !== null && (r > VOLATILE_HIGH || r < VOLATILE_LOW);
}

function useJson<T>(file: string): T | undefined {
  const [data, setData] = useState<T>();
  useEffect(() => {
    let off = false;
    fetch(`${import.meta.env.BASE_URL}data/${file}`, { cache: 'no-cache' })
      .then((r) => (r.ok ? (r.json() as Promise<T>) : Promise.reject(new Error(String(r.status)))))
      .then((d) => !off && setData(d))
      .catch(() => undefined);
    return () => {
      off = true;
    };
  }, [file]);
  return data;
}
export const usePortData = () => useJson<PortSnapshot>('ports.json');
export const useRouteNetwork = () => useJson<RouteNetwork>('shipping-routes.json');

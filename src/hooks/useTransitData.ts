import { useEffect, useState } from 'react';
import type { TransitSnapshot } from '../types/crisis';

export type TransitState =
  | { status: 'loading' }
  | { status: 'ready'; data: TransitSnapshot }
  | { status: 'error'; message: string };

/**
 * Loads the PortWatch snapshot that the deploy workflow refreshes daily.
 * The file is served from the same origin as the app; no external API is called
 * from the browser.
 */
export function useTransitData(): TransitState {
  const [state, setState] = useState<TransitState>({ status: 'loading' });
  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.BASE_URL}data/chokepoints.json`, { cache: 'no-cache' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<TransitSnapshot>;
      })
      .then((data) => !cancelled && setState({ status: 'ready', data }))
      .catch((e: unknown) => !cancelled && setState({ status: 'error', message: e instanceof Error ? e.message : 'unknown error' }));
    return () => {
      cancelled = true;
    };
  }, []);
  return state;
}

/** Percentage change of a value against a baseline, rounded. */
export function pctVsBaseline(value: number, baseline: number): number {
  return baseline > 0 ? Math.round(((value - baseline) / baseline) * 100) : 0;
}

#!/usr/bin/env node
/**
 * Fetches daily chokepoint transit data from IMF PortWatch (public ArcGIS
 * feature service, no API key) and writes a compact snapshot to
 * public/data/chokepoints.json, which the dashboard loads at runtime.
 *
 * Run: node scripts/fetch-portwatch.mjs
 * Exits non-zero on failure and leaves the existing snapshot untouched.
 */
import { writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const ENDPOINT =
  'https://services9.arcgis.com/weJ1QsnbMYJlCHdG/arcgis/rest/services/Daily_Chokepoints_Data/FeatureServer/0/query';
const OUT = fileURLToPath(new URL('../public/data/chokepoints.json', import.meta.url));

/** PortWatch id -> dashboard chokepoint id. */
const CHOKEPOINTS = {
  chokepoint6: 'hormuz',
  chokepoint4: 'bab-el-mandeb',
  chokepoint1: 'suez',
  chokepoint5: 'malacca',
  chokepoint7: 'cape',
};

const SERIES_START = '2025-12-01';
/** Pre-war baseline window: the eight weeks before the war began on 28 Feb 2026. */
const BASELINE = { from: '2026-01-03', to: '2026-02-27' };

async function fetchChokepoint(portid) {
  const rows = [];
  let offset = 0;
  const pageSize = 1000;
  for (;;) {
    const params = new URLSearchParams({
      where: `portid='${portid}' AND date >= DATE '${SERIES_START}'`,
      outFields: 'date,portname,n_total,n_tanker,n_container,n_dry_bulk,n_general_cargo,n_roro',
      orderByFields: 'date ASC',
      resultOffset: String(offset),
      resultRecordCount: String(pageSize),
      returnGeometry: 'false',
      f: 'json',
    });
    const res = await fetch(`${ENDPOINT}?${params}`, { headers: { 'User-Agent': 'crisis-dashboard-data-refresh' } });
    if (!res.ok) throw new Error(`${portid}: HTTP ${res.status}`);
    const json = await res.json();
    if (json.error) throw new Error(`${portid}: ${json.error.message}`);
    const features = json.features ?? [];
    rows.push(...features.map((f) => f.attributes));
    if (!json.exceededTransferLimit || features.length === 0) break;
    offset += features.length;
  }
  return rows;
}

const round1 = (n) => Math.round(n * 10) / 10;
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);

async function main() {
  const chokepoints = {};
  for (const [portid, id] of Object.entries(CHOKEPOINTS)) {
    const rows = await fetchChokepoint(portid);
    if (rows.length === 0) throw new Error(`${portid}: no rows returned`);
    const series = rows.map((r) => ({
      d: r.date,
      t: r.n_total,
      tk: r.n_tanker,
      ct: r.n_container,
    }));
    const base = series.filter((p) => p.d >= BASELINE.from && p.d <= BASELINE.to).map((p) => p.t);
    const last7 = series.slice(-7).map((p) => p.t);
    chokepoints[id] = {
      portid,
      name: rows[0].portname,
      baseline: round1(mean(base)),
      baselineDays: base.length,
      latest: series[series.length - 1],
      avg7: round1(mean(last7)),
      series,
    };
    console.log(`${rows[0].portname}: ${series.length} days, latest ${series.at(-1).d} = ${series.at(-1).t}, baseline ${round1(mean(base))}`);
  }

  const latestDate = Object.values(chokepoints)
    .map((c) => c.latest.d)
    .sort()
    .at(-1);

  const snapshot = {
    source: {
      publisher: 'IMF PortWatch (International Monetary Fund / University of Oxford)',
      dataset: 'Daily Chokepoint Transit Calls',
      url: 'https://portwatch.imf.org/',
      method: 'https://portwatch.imf.org/pages/data-and-methodology',
      terms: 'https://www.imf.org/external/terms.htm',
      note: 'Counts are estimated from satellite AIS signals; recent days may be revised.',
    },
    baselineWindow: BASELINE,
    latestDate,
    chokepoints,
  };

  // Only rewrite the file when the data changed, so scheduled runs create no empty commits.
  const body = JSON.stringify(snapshot);
  let previous = null;
  try {
    const old = JSON.parse(await readFile(OUT, 'utf8'));
    previous = JSON.stringify({ ...old, fetchedAt: undefined });
  } catch {
    /* no previous snapshot */
  }
  if (previous === JSON.stringify({ ...snapshot, fetchedAt: undefined })) {
    console.log('No change in PortWatch data.');
    return;
  }
  await writeFile(OUT, JSON.stringify({ fetchedAt: new Date().toISOString(), ...JSON.parse(body) }) + '\n');
  console.log(`Wrote ${OUT} (latest ${latestDate}).`);
}

main().catch((err) => {
  console.error(`PortWatch refresh failed: ${err.message}`);
  process.exit(1);
});

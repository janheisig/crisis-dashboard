#!/usr/bin/env node
/**
 * Fetches daily port-call data for the main ports of the covered countries from IMF PortWatch
 * (public ArcGIS feature services, no API key) and writes public/data/ports.json.
 * Run: node scripts/fetch-ports.mjs. Exits non-zero on failure and leaves the old snapshot untouched.
 */
import { writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const BASE = 'https://services9.arcgis.com/weJ1QsnbMYJlCHdG/arcgis/rest/services';
const OUT = fileURLToPath(new URL('../public/data/ports.json', import.meta.url));
/** Coastal covered countries (landlocked ones have no seaports). */
const COUNTRIES = ['IND', 'PAK', 'BGD', 'VNM', 'KHM', 'IDN', 'BRA', 'MEX', 'PER', 'COL', 'ECU'];
const PORTS_PER_COUNTRY = 4;
/**
 * Context ports on the coloured routes and around the Hormuz and El Niño themes (not covered countries):
 * Gulf and Hormuz exporters, Red Sea and Suez, East Africa and Cape, Asian hubs, European gateways, Panama and Pacific coast.
 * Entries are [ISO3, name fragment]; the busiest port of that country matching the fragment is used.
 */
const CONTEXT = [
  ['SAU', 'Ras Tanura'], ['SAU', 'Jubail'], ['SAU', 'Yanbu'], ['SAU', 'Dammam'], ['SAU', 'Jeddah'],
  ['ARE', 'Jebel Ali'], ['ARE', 'Fujairah'], ['ARE', 'Khalifa'], ['ARE', 'Ruwais'],
  ['KWT', 'Shuaiba'], ['KWT', 'Ahmadi'], ['QAT', 'Ras Laffan'], ['QAT', 'Hamad'], ['IRQ', 'Umm Qasr'], ['IRQ', 'Basra'],
  ['IRN', 'Shahid Rajaee'], ['IRN', 'Kharg'], ['OMN', 'Sohar'], ['OMN', 'Salalah'], ['BHR', 'Sitrah'],
  ['EGY', 'Port Said'], ['EGY', 'Sokhna'], ['DJI', 'Djibouti'], ['JOR', 'Aqaba'],
  ['KEN', 'Mombasa'], ['TZA', 'Dar Es Salaam'], ['ZAF', 'Durban'], ['ZAF', 'Cape Town'], ['ZAF', 'Richards Bay'],
  ['LKA', 'Colombo'], ['SGP', 'Singapore'], ['MYS', 'Port Klang'], ['MYS', 'Tanjung Pelepas'], ['THA', 'Laem Chabang'], ['PHL', 'Manila'],
  ['CHN', 'Shanghai'], ['CHN', 'Ningbo'], ['CHN', 'Qingdao'], ['CHN', 'Nansha'], ['CHN', 'Tianjin'], ['CHN', 'Shenzhen'],
  ['KOR', 'Busan'], ['KOR', 'Ulsan'], ['JPN', 'Yokohama'], ['JPN', 'Chiba'], ['TWN', 'Kaohsiung'],
  ['NLD', 'Rotterdam'], ['BEL', 'Antwerp'], ['DEU', 'Hamburg'], ['FRA', 'Le Havre'], ['ESP', 'Algeciras'], ['ITA', 'Genova'], ['GRC', 'Piraeus'], ['MAR', 'Tangier'],
  ['PAN', 'Balboa'], ['PAN', 'Colon'], ['CHL', 'San Antonio'], ['ARG', 'Rosario'],
];
const SERIES_START = '2026-01-03';
const BASELINE = { from: '2026-01-03', to: '2026-02-27' };

async function query(service, params) {
  const rows = [];
  let offset = 0;
  for (;;) {
    const p = new URLSearchParams({ ...params, resultOffset: String(offset), resultRecordCount: '1000', f: 'json' });
    const res = await fetch(`${BASE}/${service}/FeatureServer/0/query?${p}`, { headers: { 'User-Agent': 'crisis-dashboard-data-refresh' } });
    if (!res.ok) throw new Error(`${service}: HTTP ${res.status}`);
    const json = await res.json();
    if (json.error) throw new Error(`${service}: ${json.error.message}`);
    const f = json.features ?? [];
    rows.push(...f.map((x) => x.attributes));
    if (!json.exceededTransferLimit || f.length === 0) break;
    offset += f.length;
  }
  return rows;
}
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const r1 = (n) => Math.round(n * 10) / 10;

async function main() {
  const meta = await query('PortWatch_ports_database', {
    where: `ISO3 in (${COUNTRIES.map((c) => `'${c}'`).join(',')})`,
    outFields: 'portid,portname,ISO3,lat,lon,vessel_count_total,share_country_maritime_import',
    orderByFields: 'vessel_count_total DESC',
    returnGeometry: 'false',
  });
  const chosen = [];
  for (const iso of COUNTRIES) chosen.push(...meta.filter((m) => m.ISO3 === iso).slice(0, PORTS_PER_COUNTRY).map((m) => ({ ...m, group: 'focus' })));
  for (const [iso, frag] of CONTEXT) {
    const found = await query('PortWatch_ports_database', {
      where: `ISO3='${iso}' AND portname LIKE '%${frag}%'`,
      outFields: 'portid,portname,ISO3,lat,lon,vessel_count_total,share_country_maritime_import',
      orderByFields: 'vessel_count_total DESC',
      returnGeometry: 'false',
    });
    if (found.length === 0) { console.warn(`context port not found: ${iso} ${frag}`); continue; }
    if (!chosen.some((c) => c.portid === found[0].portid)) chosen.push({ ...found[0], group: 'context' });
  }
  const ports = [];
  let latest = '';
  for (const m of chosen) {
    const rows = await query('Daily_Ports_Data', {
      where: `portid='${m.portid}' AND date >= DATE '${SERIES_START}'`,
      outFields: 'date,portcalls,portcalls_container,portcalls_tanker,portcalls_dry_bulk',
      orderByFields: 'date ASC',
      returnGeometry: 'false',
    });
    if (rows.length < 30) { console.warn(`skip ${m.portname}: only ${rows.length} rows`); continue; }
    const base = rows.filter((r) => r.date >= BASELINE.from && r.date <= BASELINE.to).map((r) => r.portcalls);
    const last7 = rows.slice(-7);
    const d = rows.at(-1).date;
    if (d > latest) latest = d;
    // weekly means of the last 12 weeks for a small trend line
    const weekly = [];
    for (let i = rows.length; i > 0 && weekly.length < 12; i -= 7) weekly.unshift(r1(mean(rows.slice(Math.max(0, i - 7), i).map((r) => r.portcalls))));
    ports.push({
      id: m.portid, name: m.portname, iso3: m.ISO3, group: m.group, lat: m.lat, lon: m.lon,
      importShare: m.share_country_maritime_import ? r1(m.share_country_maritime_import) : null,
      baseline: r1(mean(base)), avg7: r1(mean(last7.map((r) => r.portcalls))),
      tankerAvg7: r1(mean(last7.map((r) => r.portcalls_tanker))), containerAvg7: r1(mean(last7.map((r) => r.portcalls_container))),
      latestDate: d, weekly,
    });
    console.log(`${m.ISO3} ${m.portname}: base ${r1(mean(base))} last7 ${r1(mean(last7.map((r) => r.portcalls)))} to ${d}`);
  }
  if (ports.length === 0) throw new Error('no ports');
  const snapshot = {
    source: { publisher: 'IMF PortWatch (International Monetary Fund / University of Oxford)', dataset: 'Daily Ports Data', url: 'https://portwatch.imf.org/', note: 'Port calls are estimated from satellite AIS signals; recent days may be revised.' },
    baselineWindow: BASELINE, latestDate: latest, ports,
  };
  let previous = null;
  try { previous = JSON.stringify({ ...JSON.parse(await readFile(OUT, 'utf8')), fetchedAt: undefined }); } catch { /* none */ }
  if (previous === JSON.stringify({ ...snapshot, fetchedAt: undefined })) return console.log('No change in port data.');
  await writeFile(OUT, JSON.stringify({ fetchedAt: new Date().toISOString(), ...snapshot }) + '\n');
  console.log(`Wrote ${OUT} (latest ${latest}).`);
}
main().catch((e) => { console.error(`Port refresh failed: ${e.message}`); process.exit(1); });

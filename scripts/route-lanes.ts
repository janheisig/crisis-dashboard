/**
 * Snaps the schematic trade and energy lanes to the IMF Global_Shipping_Routes network.
 * Builds a graph from public/data/shipping-routes.json (consecutive vertices plus links between
 * vertices closer than LINK_KM, since the CAD layer has no shared nodes at crossings), snaps the
 * via points of each lane to the nearest vertex and joins them by shortest paths.
 * Output: src/data/routedLanes.json { laneId: [lon,lat][] }. Run: npx tsx scripts/route-lanes.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { tradeLanes } from '../src/data/tradeLanes';
import { crisisData } from '../src/data/crisisData';

type P = [number, number];
const LINK_KM = 60;
const net = JSON.parse(readFileSync(new URL('../public/data/shipping-routes.json', import.meta.url), 'utf8')) as { lines: P[][] };
const hav = (a: P, b: P) => {
  const t = Math.PI / 180;
  const dl = (b[0] - a[0]) * t, dp = (b[1] - a[1]) * t;
  const x = Math.sin(dp / 2) ** 2 + Math.cos(a[1] * t) * Math.cos(b[1] * t) * Math.sin(dl / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(x));
};
const nodes = new Map<string, number>();
const pts: P[] = [];
const adj: [number, number][][] = [];
const nid = (p: P) => {
  const k = p[0].toFixed(2) + ',' + p[1].toFixed(2);
  if (!nodes.has(k)) { nodes.set(k, pts.length); pts.push(p); adj.push([]); }
  return nodes.get(k)!;
};
const link = (a: number, b: number) => { if (a === b) return; const d = hav(pts[a], pts[b]); adj[a].push([b, d]); adj[b].push([a, d]); };
for (const l of net.lines) for (let i = 0; i < l.length - 1; i++) link(nid(l[i]), nid(l[i + 1]));
const CELL = 0.8;
const grid = new Map<string, number[]>();
pts.forEach((p, i) => { const k = `${Math.floor(p[0] / CELL)},${Math.floor(p[1] / CELL)}`; (grid.get(k) ?? grid.set(k, []).get(k)!).push(i); });
const seen = new Set<string>();
adj.forEach((a, i) => a.forEach(([j]) => seen.add(`${i}-${j}`)));
pts.forEach((p, i) => {
  const gx = Math.floor(p[0] / CELL), gy = Math.floor(p[1] / CELL);
  for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++)
    for (const j of grid.get(`${gx + dx},${gy + dy}`) ?? []) {
      if (j <= i || seen.has(`${i}-${j}`)) continue;
      if (hav(p, pts[j]) <= LINK_KM) { link(i, j); seen.add(`${i}-${j}`); }
    }
});
// date-line wrap
pts.forEach((p, i) => { if (p[0] > 179.5) pts.forEach((q, j) => { if (q[0] < -179.5 && Math.abs(p[1] - q[1]) < 0.6) link(i, j); }); });

const nearest = (p: P) => { let b = -1, bd = Infinity; pts.forEach((q, i) => { const d = hav(p, q); if (d < bd) { bd = d; b = i; } }); return [b, bd] as const; };
function dijkstra(s: number, t: number, allowed?: Uint8Array): number[] | null {
  const dist = new Float64Array(pts.length).fill(Infinity); const prev = new Int32Array(pts.length).fill(-1);
  const heap: [number, number][] = [[0, s]]; dist[s] = 0;
  const push = (x: [number, number]) => { heap.push(x); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0]; const last = heap.pop()!; if (heap.length) { heap[0] = last; let i = 0; for (;;) { let m = i; const l = 2 * i + 1, r = l + 1; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  while (heap.length) {
    const [d, u] = pop();
    if (d > dist[u]) continue;
    if (u === t) break;
    for (const [v, w] of adj[u]) if ((!allowed || allowed[v]) && d + w < dist[v]) { dist[v] = d + w; prev[v] = u; push([d + w, v]); }
  }
  if (!isFinite(dist[t])) return null;
  const path: number[] = []; for (let u = t; u !== -1; u = prev[u]) path.push(u);
  return path.reverse();
}
function thin(path: P[], tolKm = 6): P[] {
  const out: P[] = [path[0]];
  for (let i = 1; i < path.length - 1; i++) { if (hav(out[out.length - 1], path[i]) >= tolKm) out.push(path[i]); }
  out.push(path[path.length - 1]);
  return out;
}

const dense = (wp: P[], stepKm = 80): P[] => {
  const out: P[] = [];
  for (let i = 0; i < wp.length - 1; i++) {
    const n = Math.max(1, Math.ceil(hav(wp[i], wp[i + 1]) / stepKm));
    for (let k = 0; k < n; k++) out.push([wp[i][0] + ((wp[i + 1][0] - wp[i][0]) * k) / n, wp[i][1] + ((wp[i + 1][1] - wp[i][1]) * k) / n]);
  }
  out.push(wp[wp.length - 1]);
  return out;
};
const corridor = (wp: P[], km: number) => {
  const d = dense(wp);
  const ok = new Uint8Array(pts.length);
  pts.forEach((q, i) => { for (const c of d) { if (Math.abs(q[1] - c[1]) < km / 100 && hav(q, c) <= km) { ok[i] = 1; break; } } });
  return ok;
};
const CORRIDOR_KM = Number(process.env.CORRIDOR_KM ?? 1500);
const MAX_RATIO = 1.25;
const MAX_TAIL_KM = 700;
interface Lane { id: string; wp: P[]; hops: number[] }
const lanes: Lane[] = [];
for (const l of tradeLanes) lanes.push({ id: l.id, wp: l.waypoints as P[], hops: [] });
const rt = (id: string) => crisisData.routes.find((x) => x.id === id)!.coordinates as P[];
for (const id of ['gulf-lane', 'asia-lane', 'red-sea-lane', 'cape-lane', 'mombasa-lane']) lanes.push({ id: `e-${id}`, wp: rt(id), hops: [] });
const out: Record<string, P[]> = {};
const len = (a: P[]) => a.reduce((k, p, j) => (j ? k + hav(a[j - 1], p) : 0), 0);
for (const L of lanes) {
  const start = L.wp[0], end = L.wp[L.wp.length - 1];
  const [s, ds] = nearest(start), [t, dt] = nearest(end);
  const allowed = corridor(L.wp, CORRIDOR_KM);
  const path = allowed[s] && allowed[t] ? dijkstra(s, t, allowed) : null;
  const base = len(L.wp);
  if (!path) { console.log(`${L.id}: REJECT no path inside corridor (snap ${Math.round(ds)}/${Math.round(dt)} km)`); continue; }
  const routed = path.map((n) => pts[n]);
  const full = [start, ...routed, end];
  const ratio = len(full) / base;
  const ok = ratio <= MAX_RATIO && ds <= MAX_TAIL_KM && dt <= MAX_TAIL_KM;
  console.log(`${L.id}: ${ok ? 'ACCEPT' : 'REJECT'} ratio ${ratio.toFixed(2)} tails ${Math.round(ds)}/${Math.round(dt)} km, ${routed.length} pts`);
  if (ok) out[L.id] = thin(full);
}
writeFileSync(new URL('../src/data/routedLanes.json', import.meta.url), JSON.stringify(out));
console.log('accepted', Object.keys(out).length, 'of', lanes.length);

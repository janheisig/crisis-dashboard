import { useMemo } from 'react';
import { geoInterpolate, type GeoProjection } from 'd3-geo';
import type { ShipClass } from '../data/tradeLanes';

export const SHIP_COLOR: Record<ShipClass, string> = {
  container: '#4cc9f0',
  bulk: '#f4c95d',
  tanker: '#ef8354',
  car: '#b79cf0',
};
export const SHIP_LABEL: Record<ShipClass, string> = {
  container: 'Container ship',
  bulk: 'Bulk carrier',
  tanker: 'Tanker',
  car: 'Car carrier',
};

export interface ShipLaneInput {
  id: string;
  name: string;
  waypoints: [number, number][];
  ships: number;
  mix: Partial<Record<ShipClass, number>>;
  color: string;
  note: string;
  onHover: (e: React.MouseEvent, title: string, lines: string[], color: string) => void;
}

/** Projects a geographic polyline into one or more continuous screen segments (split at the date line). */
export function projectSegments(wp: [number, number][], projection: GeoProjection, step = 6): [number, number][][] {
  const segs: [number, number][][] = [];
  let cur: [number, number][] = [];
  for (let i = 0; i < wp.length - 1; i++) {
    const interp = geoInterpolate(wp[i], wp[i + 1]);
    const dist = Math.hypot(wp[i + 1][0] - wp[i][0], wp[i + 1][1] - wp[i][1]);
    const n = Math.max(2, Math.ceil(Math.min(dist, 360) / step));
    for (let j = i === 0 ? 0 : 1; j <= n; j++) {
      const p = projection(interp(j / n));
      if (!p) continue;
      const prev = cur[cur.length - 1];
      if (prev && Math.abs(p[0] - prev[0]) > 300) {
        if (cur.length > 1) segs.push(cur);
        cur = [];
      }
      cur.push(p);
    }
  }
  if (cur.length > 1) segs.push(cur);
  return segs;
}

const toPath = (pts: [number, number][]) => 'M' + pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('L');

function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** Schematic lane lines and symbolic ships that glide along them. Purely illustrative, not tracked vessels. */
export default function ShipLayer({
  lanes,
  projection,
  k,
  showShips,
  showLines,
}: {
  lanes: ShipLaneInput[];
  projection: GeoProjection;
  k: number;
  showShips: boolean;
  showLines: boolean;
}) {
  const prepared = useMemo(
    () =>
      lanes.map((l) => {
        const segs = projectSegments(l.waypoints, projection);
        const lengths = segs.map((s) => s.reduce((a, p, i) => (i ? a + Math.hypot(p[0] - s[i - 1][0], p[1] - s[i - 1][1]) : 0), 0));
        const total = lengths.reduce((a, b) => a + b, 0) || 1;
        const classes = (Object.entries(l.mix) as [ShipClass, number][]).filter(([, w]) => w > 0);
        const wsum = classes.reduce((a, [, w]) => a + w, 0) || 1;
        const ships = Array.from({ length: l.ships }, (_, i) => {
          // pick segment proportional to length
          let r = ((i + 0.5) / Math.max(1, l.ships)) * total;
          let si = 0;
          while (si < segs.length - 1 && r > lengths[si]) {
            r -= lengths[si];
            si++;
          }
          const seed = i * 7.31 + l.id.length * 3.7 + l.id.charCodeAt(l.id.length - 1);
          let acc = ((i + 0.5) / Math.max(1, l.ships)) * wsum;
          let cls: ShipClass = classes[0]?.[0] ?? 'container';
          for (const [c, w] of classes) {
            if (acc <= w) {
              cls = c;
              break;
            }
            acc -= w;
          }
          const reverse = rand(seed + 1) > 0.5;
          const dur = 160 + rand(seed + 2) * 140;
          const offset = (rand(seed + 3) - 0.5) * 1.6;
          return { key: i, seg: si, cls, reverse, dur, begin: -rand(seed + 4) * dur, offset };
        });
        return { l, segs, ships };
      }),
    [lanes, projection],
  );

  return (
    <g>
      {showLines &&
        prepared.map(({ l, segs }) =>
          segs.map((s, i) => (
            <g key={`${l.id}-${i}`}>
              <path
                d={toPath(s)}
                fill="none"
                stroke="transparent"
                strokeWidth={6 / k}
                className="cursor-help"
                onMouseMove={(e) =>
                  l.onHover(e, l.name, [`Schematic trade lane · ${l.ships} symbolic ships`, l.note], l.color)
                }
              />
              <path d={toPath(s)} fill="none" stroke={l.color} strokeOpacity={0.14} strokeWidth={3.6 / k} strokeLinecap="round" pointerEvents="none" />
              <path
                d={toPath(s)}
                fill="none"
                stroke={l.color}
                strokeOpacity={0.75}
                strokeWidth={1 / k}
                strokeDasharray={`${1.5 / k} ${3 / k}`}
                strokeLinecap="round"
                pointerEvents="none"
              />
            </g>
          )),
        )}
      {showShips &&
        prepared.map(({ l, segs, ships }) =>
          ships.map((s) => {
            const seg = segs[s.seg];
            if (!seg) return null;
            const d = toPath(s.reverse ? [...seg].reverse() : seg);
            return (
              <g key={`${l.id}-s${s.key}`} pointerEvents="none">
                <g transform={`translate(0,${(s.offset / k).toFixed(3)})`}>
                  <g>
                    <animateMotion path={d} dur={`${s.dur.toFixed(0)}s`} begin={`${s.begin.toFixed(1)}s`} repeatCount="indefinite" rotate="auto" />
                    <g transform={`scale(${(1 / k).toFixed(4)})`}>
                      <path d="M4.6,0 L1.6,1.9 L-3.8,1.9 L-3.8,-1.9 L1.6,-1.9 Z" fill={SHIP_COLOR[s.cls]} stroke="#07090d" strokeWidth={0.5} />
                    </g>
                  </g>
                </g>
              </g>
            );
          }),
        )}
    </g>
  );
}

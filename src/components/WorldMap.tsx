import { useEffect, useMemo, useRef, useState } from 'react';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo';
import { zoom as d3zoom, zoomIdentity, type ZoomBehavior, type ZoomTransform } from 'd3-zoom';
import { select } from 'd3-selection';
import 'd3-transition';
import { feature } from 'topojson-client';
import type { Feature, FeatureCollection, Geometry, LineString } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import worldTopo from 'world-atlas/countries-50m.json';
import { Layers, Minus, Plus, RotateCcw } from 'lucide-react';
import { crisisData, NUMERIC_TO_ISO3 } from '../data/crisisData';
import {
  RISK_LABEL,
  ROUTE_STATUS_LABEL,
  STATUS_LABEL,
  type ImpactStatus,
  type Iso3,
  type RegionId,
  type RouteStatus,
  type TransitSnapshot,
} from '../types/crisis';

const WIDTH = 1000;
const HEIGHT = 520;

export const STATUS_COLOR: Record<ImpactStatus, string> = {
  elnino: '#f59e0b',
  hormuz: '#ef4444',
  dual: '#be123c',
  minimal: '#64748b',
};
const NOT_ASSESSED = '#1c2430';

const ROUTE_COLOR: Record<RouteStatus, string> = {
  blocked: '#ef4444',
  disrupted: '#fb923c',
  diverted: '#22d3ee',
  operating: '#34d399',
};

type CountryProps = { name: string };
type CountryFeature = Feature<Geometry, CountryProps> & { id?: string };

interface TooltipState {
  x: number;
  y: number;
  title: string;
  lines: string[];
  accent: string;
}

export interface WorldMapProps {
  selected: Iso3 | null;
  onCountrySelect: (iso3: Iso3 | null) => void;
  highlightRegion?: RegionId | null;
  /** Optional PortWatch snapshot used to enrich chokepoint tooltips. */
  transits?: TransitSnapshot;
}

/** Somaliland has no ISO code in Natural Earth; it is shown as part of Somalia (UN practice). */
function resolveIso3(f: CountryFeature): Iso3 | undefined {
  if (f.id && NUMERIC_TO_ISO3[f.id]) return NUMERIC_TO_ISO3[f.id];
  if (!f.id && f.properties?.name === 'Somaliland') return 'SOM';
  return undefined;
}

export default function WorldMap({ selected, onCountrySelect, highlightRegion, transits }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const [transform, setTransform] = useState<ZoomTransform>(zoomIdentity);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [showRoutes, setShowRoutes] = useState(true);
  const [showLegend, setShowLegend] = useState(() => typeof window === 'undefined' || window.innerWidth >= 768);

  const { countries, projection, path, graticule } = useMemo(() => {
    const topo = worldTopo as unknown as Topology<{ countries: GeometryCollection<CountryProps> }>;
    const fc = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, CountryProps>;
    const features = (fc.features as CountryFeature[]).filter((f) => f.properties?.name !== 'Antarctica');
    const proj = geoNaturalEarth1().fitExtent(
      [
        [6, 6],
        [WIDTH - 6, HEIGHT - 6],
      ],
      { type: 'FeatureCollection', features } as FeatureCollection,
    );
    return { countries: features, projection: proj, path: geoPath(proj), graticule: geoGraticule10() };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = select(svgRef.current);
    const z = d3zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 12])
      .translateExtent([
        [0, 0],
        [WIDTH, HEIGHT],
      ])
      .on('zoom', (event) => setTransform(event.transform));
    svg.call(z);
    svg.on('dblclick.zoom', null);
    zoomRef.current = z;
    return () => {
      svg.on('.zoom', null);
    };
  }, []);

  // Zoom smoothly to the selected country.
  useEffect(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = select(svgRef.current);
    if (!selected) return;
    const f = countries.find((c) => resolveIso3(c) === selected && c.id);
    if (!f) return;
    const [[x0, y0], [x1, y1]] = path.bounds(f);
    const k = Math.min(6, Math.max(1.6, 0.35 / Math.max((x1 - x0) / WIDTH, (y1 - y0) / HEIGHT)));
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    svg
      .transition()
      .duration(650)
      .call(zoomRef.current.transform as never, zoomIdentity.translate(WIDTH / 2 - k * cx, HEIGHT / 2 - k * cy).scale(k));
  }, [selected, countries, path]);

  const zoomBy = (factor: number) => {
    if (!svgRef.current || !zoomRef.current) return;
    select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy as never, factor);
  };
  const resetZoom = () => {
    if (!svgRef.current || !zoomRef.current) return;
    select(svgRef.current).transition().duration(500).call(zoomRef.current.transform as never, zoomIdentity);
    onCountrySelect(null);
  };

  const showTip = (evt: React.MouseEvent, t: Omit<TooltipState, 'x' | 'y'>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({ ...t, x: evt.clientX - rect.left, y: evt.clientY - rect.top });
  };

  const k = transform.k;

  return (
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden rounded-xl border border-room-700 bg-room-900">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full cursor-grab touch-none select-none active:cursor-grabbing"
        role="img"
        aria-label="World map of country exposure to El Niño and the Strait of Hormuz crisis"
        onMouseLeave={() => setTooltip(null)}
      >
        <defs>
          <radialGradient id="ocean" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="#0f1520" />
            <stop offset="100%" stopColor="#080b10" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width={WIDTH} height={HEIGHT} fill="url(#ocean)" onClick={() => onCountrySelect(null)} />

        <g transform={transform.toString()}>
          <path d={path(graticule) ?? ''} fill="none" stroke="#1a2230" strokeWidth={0.5 / k} />

          {countries.map((f, i) => {
            const iso3 = resolveIso3(f);
            const profile = iso3 ? crisisData.countries[iso3] : undefined;
            const isSelected = !!iso3 && iso3 === selected;
            const dimmed = !!highlightRegion && profile?.region !== highlightRegion;
            const fill = profile ? STATUS_COLOR[profile.status] : NOT_ASSESSED;
            return (
              <path
                key={`${f.id ?? f.properties?.name}-${i}`}
                d={path(f) ?? ''}
                fill={fill}
                fillOpacity={profile ? (dimmed ? 0.28 : isSelected ? 1 : 0.82) : 1}
                stroke={isSelected ? '#ffffff' : profile ? '#0a0d12' : '#2a3441'}
                strokeWidth={(isSelected ? 1.6 : 0.4) / k}
                className={profile ? 'cursor-pointer transition-[fill-opacity] duration-150 hover:fill-opacity-100' : ''}
                style={isSelected ? { filter: 'url(#glow)' } : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  if (profile) onCountrySelect(profile.iso3);
                }}
                onMouseMove={(e) =>
                  showTip(e, {
                    title: profile?.name ?? f.properties?.name ?? 'Unknown',
                    accent: fill,
                    lines: profile
                      ? [`${STATUS_LABEL[profile.status]} · Risk: ${RISK_LABEL[profile.risk]}`, profile.headline]
                      : ['Not assessed in this dataset'],
                  })
                }
              />
            );
          })}

          {showRoutes && (
            <g>
              {crisisData.routes.map((r) => {
                const line: LineString = { type: 'LineString', coordinates: r.coordinates };
                const d = path(line) ?? '';
                const color = ROUTE_COLOR[r.status];
                const isPipe = r.kind === 'pipeline';
                return (
                  <g key={r.id}>
                    {/* wide invisible hit area */}
                    <path
                      d={d}
                      fill="none"
                      stroke="transparent"
                      strokeWidth={10 / k}
                      className="cursor-help"
                      onMouseMove={(e) =>
                        showTip(e, {
                          title: r.name,
                          accent: color,
                          lines: [`${isPipe ? 'Pipeline' : 'Sea lane'} · ${ROUTE_STATUS_LABEL[r.status]}`, r.note],
                        })
                      }
                    />
                    <path d={d} fill="none" stroke={color} strokeOpacity={0.18} strokeWidth={(isPipe ? 5 : 4) / k} strokeLinecap="round" />
                    <path
                      d={d}
                      fill="none"
                      stroke={color}
                      strokeWidth={(isPipe ? 2 : 1.4) / k}
                      strokeDasharray={isPipe ? `${3 / k} ${2 / k}` : `${6 / k} ${6 / k}`}
                      strokeLinecap="round"
                      pointerEvents="none"
                      className={r.status === 'blocked' ? 'animate-flow-slow' : 'animate-flow'}
                    />
                  </g>
                );
              })}

              {crisisData.chokepoints.map((c) => {
                const p = projection(c.coordinates);
                if (!p) return null;
                const color = ROUTE_COLOR[c.status];
                return (
                  <g
                    key={c.id}
                    transform={`translate(${p[0]},${p[1]})`}
                    className="cursor-help"
                    onMouseMove={(e) =>
                      showTip(e, {
                        title: c.name,
                        accent: color,
                        lines: [
                          `Chokepoint · ${ROUTE_STATUS_LABEL[c.status]}`,
                          ...(transits?.chokepoints[c.id]
                            ? [
                                `IMF PortWatch: ${transits.chokepoints[c.id].avg7} transits/day (7-day avg. to ${transits.chokepoints[c.id].latest.d}) vs. ${transits.chokepoints[c.id].baseline} pre-war.`,
                              ]
                            : []),
                          c.note,
                        ],
                      })
                    }
                  >
                    {c.status === 'blocked' && (
                      <circle r={4 / k} fill="none" stroke={color} strokeWidth={1.2 / k}>
                        <animate attributeName="r" from={4 / k} to={16 / k} dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.9" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle r={4.2 / k} fill="#0b0f15" stroke={color} strokeWidth={1.8 / k} />
                    <circle r={1.6 / k} fill={color} />
                    {k >= 1.8 && (
                      <text
                        x={7 / k}
                        y={3 / k}
                        fontSize={9 / k}
                        fill="#cdd3dc"
                        stroke="#07090d"
                        strokeWidth={2.5 / k}
                        paintOrder="stroke"
                        pointerEvents="none"
                      >
                        {c.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          )}
        </g>
      </svg>

      {/* Controls */}
      <div className="absolute right-3 top-3 flex flex-col gap-1.5">
        <MapButton label="Zoom in" onClick={() => zoomBy(1.6)}>
          <Plus size={16} />
        </MapButton>
        <MapButton label="Zoom out" onClick={() => zoomBy(1 / 1.6)}>
          <Minus size={16} />
        </MapButton>
        <MapButton label="Reset view" onClick={resetZoom}>
          <RotateCcw size={15} />
        </MapButton>
        <MapButton label={showRoutes ? 'Hide energy routes' : 'Show energy routes'} active={showRoutes} onClick={() => setShowRoutes((v) => !v)}>
          <Layers size={15} />
        </MapButton>
      </div>

      {/* Legend */}
      <button
        type="button"
        onClick={() => setShowLegend((v) => !v)}
        className="absolute bottom-3 left-3 z-10 rounded-md border border-room-700 bg-room-950/85 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-room-300 hover:text-white"
        aria-expanded={showLegend}
      >
        {showLegend ? 'Hide legend' : 'Legend'}
      </button>
      {showLegend && (
      <div className="pointer-events-none absolute bottom-11 left-3 max-w-[calc(100%-1.5rem)] rounded-lg border border-room-700/80 bg-room-950/85 px-3 py-2.5 text-[11px] backdrop-blur">
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-room-400">Country status</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {(Object.keys(STATUS_COLOR) as ImpactStatus[]).map((s) => (
            <LegendSwatch key={s} color={STATUS_COLOR[s]} label={STATUS_LABEL[s]} />
          ))}
          <LegendSwatch color={NOT_ASSESSED} label="Not assessed" border />
        </div>
        {showRoutes && (
          <>
            <div className="mb-1.5 mt-2.5 font-mono text-[10px] uppercase tracking-widest text-room-400">Energy flows</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {(['blocked', 'disrupted', 'diverted', 'operating'] as RouteStatus[]).map((s) => (
                <span key={s} className="flex items-center gap-2 text-room-200">
                  <svg width="22" height="6" aria-hidden>
                    <line x1="1" y1="3" x2="21" y2="3" stroke={ROUTE_COLOR[s]} strokeWidth="2" strokeDasharray="4 3" />
                  </svg>
                  {ROUTE_STATUS_LABEL[s]}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      )}

      <div className="pointer-events-none absolute bottom-3 right-3 hidden max-w-[260px] text-right text-[10px] leading-snug text-room-500 md:block">
        Boundaries from Natural Earth; they do not imply official endorsement. Scroll or pinch to zoom, drag to pan.
      </div>

      {tooltip && (
        <div
          className="pointer-events-none absolute z-20 w-64 rounded-lg border border-room-600 bg-room-950/95 px-3 py-2 text-xs shadow-2xl"
          style={{
            left: Math.min(tooltip.x + 14, (wrapRef.current?.clientWidth ?? 0) - 270),
            top: Math.max(8, tooltip.y - 10),
          }}
        >
          <div className="mb-1 flex items-center gap-2 font-semibold text-room-100">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: tooltip.accent }} />
            {tooltip.title}
          </div>
          {tooltip.lines.map((l, i) => (
            <p key={i} className={i === 0 ? 'font-mono text-[10px] uppercase tracking-wide text-room-400' : 'mt-1 leading-snug text-room-200'}>
              {l}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function MapButton({ children, label, onClick, active }: { children: React.ReactNode; label: string; onClick: () => void; active?: boolean }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-md border text-room-200 transition hover:border-room-500 hover:text-white ${
        active ? 'border-signal-cyan/50 bg-room-800' : 'border-room-700 bg-room-900/90'
      }`}
    >
      {children}
    </button>
  );
}

function LegendSwatch({ color, label, border }: { color: string; label: string; border?: boolean }) {
  return (
    <span className="flex items-center gap-2 text-room-200">
      <span className={`inline-block h-2.5 w-3.5 rounded-sm ${border ? 'border border-room-600' : ''}`} style={{ background: color }} />
      {label}
    </span>
  );
}

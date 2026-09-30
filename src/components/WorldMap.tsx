import { useEffect, useMemo, useRef, useState } from 'react';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo';
import { zoom as d3zoom, zoomIdentity, type ZoomBehavior, type ZoomTransform } from 'd3-zoom';
import { select } from 'd3-selection';
import 'd3-transition';
import { feature } from 'topojson-client';
import type { Feature, FeatureCollection, Geometry, LineString } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import worldTopo from 'world-atlas/countries-50m.json';
import { Layers, Minus, Plus, RotateCcw, Ship } from 'lucide-react';
import type { LiveVessel, LiveVesselState, VesselKind } from '../hooks/useLiveVessels';
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
  insufficient: '#3a4454',
};
const NOT_ASSESSED = '#1c2430';
/** Countries smaller than this projected area (px^2 at zoom 1) get a marker so they stay clickable. */
const SMALL_AREA = 14;

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
  /** Live AIS layer state (Cloudflare relay). */
  vessels?: LiveVesselState;
  showVessels?: boolean;
  onToggleVessels?: () => void;
}

/** Validated for the dark surface (dataviz validator: CVD dE 17.3). Other types use neutral grey. */
const VESSEL_COLOR: Record<VesselKind, string> = {
  tanker: '#9085e9',
  cargo: '#199e70',
  passenger: '#7a8597',
  other: '#7a8597',
  unknown: '#7a8597',
};
const VESSEL_LABEL: Record<VesselKind, string> = {
  tanker: 'Tanker',
  cargo: 'Cargo',
  passenger: 'Passenger',
  other: 'Other type',
  unknown: 'Type not yet reported',
};

function formatAge(seconds: number): string {
  if (seconds < 90) return `${seconds} s ago`;
  return `${Math.round(seconds / 60)} min ago`;
}

/** Somaliland has no ISO code in Natural Earth; it is shown as part of Somalia (UN practice). */
function resolveIso3(f: CountryFeature): Iso3 | undefined {
  if (f.id && NUMERIC_TO_ISO3[f.id]) return NUMERIC_TO_ISO3[f.id];
  if (!f.id && f.properties?.name === 'Somaliland') return 'SOM';
  return undefined;
}

export default function WorldMap({
  selected,
  onCountrySelect,
  highlightRegion,
  transits,
  vessels,
  showVessels = false,
  onToggleVessels,
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const [transform, setTransform] = useState<ZoomTransform>(zoomIdentity);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [showRoutes, setShowRoutes] = useState(true);

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
    <div ref={wrapRef} className="relative w-full overflow-hidden rounded-xl border border-room-700 bg-room-900">
      <div className="relative aspect-[1000/520] w-full">
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

          {/* Markers for small island and city states that are hard to click at world scale */}
          {countries.map((f, i) => {
            const iso3 = resolveIso3(f);
            const profile = iso3 ? crisisData.countries[iso3] : undefined;
            if (!profile || !f.id || path.area(f) > SMALL_AREA) return null;
            const c = path.centroid(f);
            if (!Number.isFinite(c[0])) return null;
            const isSelected = iso3 === selected;
            const dimmed = !!highlightRegion && profile.region !== highlightRegion;
            return (
              <circle
                key={`m-${f.id}-${i}`}
                cx={c[0]}
                cy={c[1]}
                r={(isSelected ? 4 : 2.8) / k}
                fill={STATUS_COLOR[profile.status]}
                fillOpacity={dimmed ? 0.3 : 0.95}
                stroke={isSelected ? '#ffffff' : '#0a0d12'}
                strokeWidth={0.8 / k}
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onCountrySelect(profile.iso3);
                }}
                onMouseMove={(e) =>
                  showTip(e, {
                    title: profile.name,
                    accent: STATUS_COLOR[profile.status],
                    lines: [`${STATUS_LABEL[profile.status]} · Risk: ${RISK_LABEL[profile.risk]}`, profile.headline],
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
          {showVessels && vessels?.status === 'ready' && (
            <g>
              {vessels.vessels.map((v: LiveVessel) => {
                const p = projection([v.lon, v.lat]);
                if (!p) return null;
                const color = VESSEL_COLOR[v.kind];
                const moving = v.sog !== null && v.sog >= 0.5 && v.cog !== null;
                const size = (v.kind === 'tanker' ? 3.4 : 2.6) / k;
                const tip = (e: React.MouseEvent) =>
                  showTip(e, {
                    title: v.name || `MMSI ${v.mmsi}`,
                    accent: color,
                    lines: [
                      `${VESSEL_LABEL[v.kind]} · MMSI ${v.mmsi}`,
                      [
                        v.sog !== null ? `${v.sog.toFixed(1)} kn` : 'speed n/a',
                        v.cog !== null ? `course ${Math.round(v.cog)}\u00b0` : null,
                        v.destination ? `to ${v.destination}` : null,
                        `position ${formatAge(v.ageSeconds)}`,
                      ]
                        .filter(Boolean)
                        .join(' · '),
                    ],
                  });
                return moving ? (
                  <path
                    key={v.mmsi}
                    d={`M0,${-size * 1.6} L${size},${size} L${-size},${size} Z`}
                    transform={`translate(${p[0]},${p[1]}) rotate(${v.cog})`}
                    fill={color}
                    stroke="#0b0f15"
                    strokeWidth={0.4 / k}
                    onMouseMove={tip}
                  />
                ) : (
                  <circle key={v.mmsi} cx={p[0]} cy={p[1]} r={size * 0.8} fill={color} stroke="#0b0f15" strokeWidth={0.4 / k} onMouseMove={tip} />
                );
              })}
            </g>
          )}
        </g>
      </svg>

      {/* Live AIS status */}
      {showVessels && vessels && (
        <div className="pointer-events-none absolute left-3 top-3 max-w-[70%] rounded-md border border-room-700 bg-room-950/85 px-2.5 py-1.5 text-[11px] text-room-200">
          <span className="font-mono text-[10px] uppercase tracking-widest text-room-400">Live AIS · </span>
          {vessels.status === 'loading' && 'connecting…'}
          {vessels.status === 'not-configured' && 'relay not configured yet (see README)'}
          {vessels.status === 'error' && `relay unreachable (${vessels.message})`}
          {vessels.status === 'ready' &&
            (vessels.vessels.length === 0 && vessels.warmingUp
              ? 'warming up, first positions arrive within a few minutes'
              : `${vessels.vessels.length.toLocaleString('en-GB')} vessels in Gulf, Red Sea, Malacca · updated ${new Date(vessels.generatedAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`)}
          {vessels.status === 'ready' && vessels.lastError && <span className="text-rose-300"> · {vessels.lastError}</span>}
        </div>
      )}

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
        {onToggleVessels && (
          <MapButton label={showVessels ? 'Hide live vessels' : 'Show live vessels (AIS)'} active={showVessels} onClick={onToggleVessels}>
            <Ship size={15} />
          </MapButton>
        )}
      </div>

      <div className="pointer-events-none absolute bottom-3 right-3 hidden max-w-[260px] text-right text-[10px] leading-snug text-room-500 md:block">
        Boundaries from Natural Earth; they do not imply official endorsement. Scroll or pinch to zoom, drag to pan.
      </div>
      </div>

      {/* Legend strip below the map, so it never covers countries */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-room-700 bg-room-950/60 px-3 py-2 text-[11px] text-room-200">
        <span className="font-mono text-[10px] uppercase tracking-widest text-room-400">Status</span>
        {(Object.keys(STATUS_COLOR) as ImpactStatus[]).map((st) => (
          <LegendSwatch key={st} color={STATUS_COLOR[st]} label={STATUS_LABEL[st]} />
        ))}
        <LegendSwatch color={NOT_ASSESSED} label="Not assessed" border />
        {showRoutes && (
          <>
            <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-room-400">Flows</span>
            {(['blocked', 'disrupted', 'diverted', 'operating'] as RouteStatus[]).map((st) => (
              <span key={st} className="flex items-center gap-1.5">
                <svg width="20" height="6" aria-hidden>
                  <line x1="1" y1="3" x2="19" y2="3" stroke={ROUTE_COLOR[st]} strokeWidth="2" strokeDasharray="4 3" />
                </svg>
                {ROUTE_STATUS_LABEL[st]}
              </span>
            ))}
          </>
        )}
        {showVessels && (
          <>
            <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-room-400">Vessels</span>
            <LegendSwatch color={VESSEL_COLOR.tanker} label="Tanker" />
            <LegendSwatch color={VESSEL_COLOR.cargo} label="Cargo" />
            <LegendSwatch color={VESSEL_COLOR.other} label="Other / not yet reported" />
            <span className="text-room-500">Triangles point along the course. Ships with transponders off are not shown.</span>
          </>
        )}
        <span className="text-room-500">Dots mark small island and city states.</span>
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

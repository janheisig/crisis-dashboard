import { useMemo, useRef, useState } from 'react';
import { Ship, ExternalLink, TrendingDown, TrendingUp } from 'lucide-react';
import { crisisData } from '../data/crisisData';
import { AbbrText } from './AbbrText';
import { pctVsBaseline, type TransitState } from '../hooks/useTransitData';
import { ROUTE_STATUS_LABEL, type ChokepointTransits, type RouteStatus } from '../types/crisis';

const ORDER = ['hormuz', 'bab-el-mandeb', 'suez', 'malacca', 'cape'] as const;
const WAR_START = '2026-02-28';
const SERIES_FROM = '2026-01-01';

const STATUS_DOT: Record<RouteStatus, string> = {
  blocked: '#ef4444',
  disrupted: '#fb923c',
  diverted: '#22d3ee',
  operating: '#34d399',
};

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

export default function ChokepointMonitor({ state }: { state: TransitState }) {
  return (
    <section className="rounded-xl border border-room-700 bg-room-900 p-4">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-room-400">
            <Ship size={12} /> Chokepoint monitor · daily transits
          </div>
          <p className="mt-1 text-xs text-room-400">
            Seven-day average against the pre-war baseline. Hover a chart for daily values.
          </p>
        </div>
        {state.status === 'ready' && (
          <div className="text-right font-mono text-[10px] leading-relaxed text-room-500">
            Data to {fmtDate(state.data.latestDate)} {state.data.latestDate.slice(0, 4)} · refreshed{' '}
            {new Date(state.data.fetchedAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
          </div>
        )}
      </div>

      {state.status === 'loading' && <p className="py-6 text-center text-xs text-room-400">Loading PortWatch data…</p>}
      {state.status === 'error' && (
        <p className="py-6 text-center text-xs text-rose-300">
          Transit data could not be loaded ({state.message}). Map and country profiles remain available.
        </p>
      )}

      {state.status === 'ready' && (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            {ORDER.map((id) => {
              const cp = state.data.chokepoints[id];
              const meta = crisisData.chokepoints.find((c) => c.id === id);
              if (!cp || !meta) return null;
              return <ChokepointCard key={id} cp={cp} label={meta.name} status={meta.status} />;
            })}
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-room-500">
            Source:{' '}
            <a href={state.data.source.url} target="_blank" rel="noreferrer noopener" className="text-room-300 hover:underline">
              {state.data.source.publisher}, {state.data.source.dataset}
              <ExternalLink size={10} className="ml-1 inline" />
            </a>
            . Baseline: mean daily transits {fmtDate(state.data.baselineWindow.from)} to {fmtDate(state.data.baselineWindow.to)} 2026, the
            eight weeks before the war. {state.data.source.note}{' '}
            <AbbrText text="Counts derive from AIS signals, which ships can switch off and which are subject to GNSS interference in the Gulf." />
          </p>
        </>
      )}
    </section>
  );
}

function ChokepointCard({ cp, label, status }: { cp: ChokepointTransits; label: string; status: RouteStatus }) {
  const pct = pctVsBaseline(cp.avg7, cp.baseline);
  const down = pct < 0;
  return (
    <article className="flex flex-col rounded-lg border border-room-700 bg-room-850 p-3">
      <header>
        <h3 className="text-[13px] font-semibold leading-tight text-room-100">{label}</h3>
        <span className="mt-1 flex items-center gap-1.5 text-[10px] text-room-400">
          <span className="h-2 w-2 rounded-full" style={{ background: STATUS_DOT[status] }} />
          {ROUTE_STATUS_LABEL[status]}
        </span>
      </header>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-mono text-2xl font-semibold text-white">{cp.avg7.toLocaleString('en-GB')}</span>
        <span className="text-[11px] text-room-400">per day, 7-day avg.</span>
      </div>
      <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-room-300">
        {down ? <TrendingDown size={13} className="text-rose-400" /> : <TrendingUp size={13} className="text-emerald-400" />}
        <span className="font-mono font-semibold text-room-100">
          {pct > 0 ? '+' : ''}
          {pct}%
        </span>
        <span className="text-room-400">vs. {cp.baseline} baseline</span>
      </div>
      <Sparkline cp={cp} />
      {cp.portid === 'chokepoint6' && (
        <p className="mt-2 text-[10px] leading-snug text-amber-300/90">
          <AbbrText text="AIS count only. Many tankers transit with transponders off; Kpler put September crude flows at about half the pre-war level." />
        </p>
      )}
    </article>
  );
}

const W = 240;
const H = 64;
const PAD = { t: 6, r: 4, b: 12, l: 4 };

function Sparkline({ cp }: { cp: ChokepointTransits }) {
  const ref = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const { pts, path, baseY, warX, max, x } = useMemo(() => {
    const pts = cp.series.filter((p) => p.d >= SERIES_FROM);
    const max = Math.max(cp.baseline, ...pts.map((p) => p.t)) * 1.08 || 1;
    const x = (i: number) => PAD.l + (i / Math.max(1, pts.length - 1)) * (W - PAD.l - PAD.r);
    const y = (v: number) => PAD.t + (1 - v / max) * (H - PAD.t - PAD.b);
    const path = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.t).toFixed(1)}`).join('');
    const warIdx = pts.findIndex((p) => p.d >= WAR_START);
    return { pts, path, baseY: y(cp.baseline), warX: warIdx >= 0 ? x(warIdx) : null, max, x };
  }, [cp]);

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || pts.length === 0) return;
    const rel = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((rel - PAD.l) / (W - PAD.l - PAD.r)) * (pts.length - 1));
    setHover(Math.max(0, Math.min(pts.length - 1, i)));
  };

  const hp = hover != null ? pts[hover] : null;
  const hy = hp ? PAD.t + (1 - hp.t / max) * (H - PAD.t - PAD.b) : 0;

  return (
    <div className="relative mt-2">
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className="h-16 w-full cursor-crosshair"
        preserveAspectRatio="none"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
        role="img"
        aria-label={`Daily transits through ${cp.name} since January 2026`}
      >
        <line x1={PAD.l} x2={W - PAD.r} y1={baseY} y2={baseY} stroke="#7a8597" strokeWidth={1} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
        {warX != null && (
          <>
            <line x1={warX} x2={warX} y1={PAD.t - 4} y2={H - PAD.b} stroke="#ef4444" strokeOpacity={0.6} strokeWidth={1} vectorEffect="non-scaling-stroke" />
          </>
        )}
        <path d={path} fill="none" stroke="#22d3ee" strokeWidth={1.6} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        {hp && hover != null && (
          <>
            <line x1={x(hover)} x2={x(hover)} y1={PAD.t} y2={H - PAD.b} stroke="#cdd3dc" strokeOpacity={0.5} strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <circle cx={x(hover)} cy={hy} r={2.6} fill="#22d3ee" stroke="#11161e" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
          </>
        )}
      </svg>
      <div className="mt-0.5 flex justify-between font-mono text-[9px] text-room-500">
        <span>Jan</span>
        <span className="text-rose-400/80">war 28 Feb</span>
        <span>{fmtDate(pts[pts.length - 1]?.d ?? '')}</span>
      </div>
      {hp && hover != null && (
        <div
          className="pointer-events-none absolute top-full z-10 mt-1 whitespace-nowrap rounded-md border border-room-600 bg-room-950/95 px-2 py-1 text-[10px] shadow-xl"
          style={{ left: `${Math.min(70, Math.max(0, (x(hover) / W) * 100 - 15))}%` }}
        >
          <div className="font-mono text-room-400">{fmtDate(hp.d)} {hp.d.slice(0, 4)}</div>
          <div className="text-room-100">
            <span className="font-semibold">{hp.t}</span> transits · {hp.tk} tankers · {hp.ct} container
          </div>
        </div>
      )}
    </div>
  );
}

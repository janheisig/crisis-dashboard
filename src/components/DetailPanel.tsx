import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  ChevronDown,
  ChevronsUpDown,
  CloudRain,
  ExternalLink,
  Fuel,
  Globe2,
  Landmark,
  X,
} from 'lucide-react';
import { isVolatile, portRatio, usePortData, type PortRecord } from '../hooks/usePortData';
import { collectSources, crisisData } from '../data/crisisData';
import { STATUS_COLOR } from './WorldMap';
import { AbbrText } from './AbbrText';
import NewsPanel from './NewsPanel';
import {
  RISK_LABEL,
  STATUS_LABEL,
  type Confidence,
  type CountryProfile,
  type Finding,
  type Iso3,
  type RiskLevel,
} from '../types/crisis';

export const RISK_STYLE: Record<RiskLevel, string> = {
  moderate: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  elevated: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  high: 'bg-orange-500/15 text-orange-300 border-orange-500/40',
  critical: 'bg-rose-600/20 text-rose-300 border-rose-500/50',
};

const CONFIDENCE_STYLE: Record<Confidence, string> = {
  confirmed: 'text-emerald-300 border-emerald-500/40',
  reported: 'text-sky-300 border-sky-500/40',
  preliminary: 'text-amber-300 border-amber-500/40',
};

interface DetailPanelProps {
  iso3: Iso3 | null;
  onClose: () => void;
}

export default function DetailPanel({ iso3, onClose }: DetailPanelProps) {
  const country = iso3 ? crisisData.countries[iso3] : null;
  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-xl border border-room-700 bg-room-900">
      {country ? <CountryView country={country} onClose={onClose} /> : <GlobalView />}
    </aside>
  );
}

function CountryView({ country, onClose }: { country: CountryProfile; onClose: () => void }) {
  const allItems = [...country.environmental, ...country.energy, ...country.policy, ...country.metrics];
  const sources = collectSources(allItems);
  const sourceIndex = new Map(sources.map((s, i) => [s.id, i + 1]));
  const [open, setOpen] = useState({ env: false, energy: false, policy: false });
  // Reset to collapsed when another country is selected.
  useEffect(() => setOpen({ env: false, energy: false, policy: false }), [country.iso3]);
  const allOpen = open.env && open.energy && open.policy;
  const [tab, setTab] = useState<'news' | 'lens'>('news');

  return (
    <>
      <header className="border-b border-room-700 px-5 pb-4 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-room-400">
              {crisisData.regions[country.region].name} · {country.iso3}
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">{country.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close country view"
            className="rounded-md border border-room-700 p-1.5 text-room-300 hover:border-room-500 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-room-600 bg-room-800 px-2.5 py-1 text-xs font-medium text-room-100"
          >
            <span className="h-2 w-2 rounded-full" style={{ background: STATUS_COLOR[country.status] }} />
            {STATUS_LABEL[country.status]}
          </span>
          <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${RISK_STYLE[country.risk]}`}>
            <AlertTriangle size={12} /> Risk: {RISK_LABEL[country.risk]}
          </span>
          {country.tier === 'basic' && (
            <span
              className="rounded-full border border-room-600 px-2.5 py-1 text-[11px] text-room-300"
              title="Status plus one or two sourced findings, often from subregional assessments"
            >
              Basic profile
            </span>
          )}
        </div>
        <p className="mt-3 text-sm font-medium leading-snug text-room-100">
          <AbbrText text={country.headline} />
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-room-400">
          <span className="font-semibold text-room-300">Rating rationale: </span>
          <AbbrText text={country.riskRationale} />
        </p>
      </header>

      <div className="flex border-b border-room-700 px-5" role="tablist">
        {([['news', 'Weekly news'], ['lens', 'Crisis lens']] as const).map(([k, l]) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`-mb-px border-b-2 px-3 py-2 text-xs font-semibold ${tab === k ? 'border-signal-cyan text-white' : 'border-transparent text-room-400 hover:text-room-100'}`}
          >
            {l}
          </button>
        ))}
      </div>
      {tab === 'news' ? (
        <NewsPanel iso3={country.iso3} name={country.name} />
      ) : (
      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-4">
        {country.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {country.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-room-700 bg-room-850 px-3 py-2.5">
                <div className="font-mono text-lg font-semibold text-white">{m.value}</div>
                <div className="mt-0.5 text-[11px] leading-snug text-room-400">
                  <AbbrText text={m.label} />
                </div>
                <div className="mt-1 font-mono text-[10px] text-room-500">
                  as of {m.asOf} <Refs ids={m.sourceIds} index={sourceIndex} />
                </div>
              </div>
            ))}
          </div>
        )}

        <PortsPanel iso3={country.iso3} />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setOpen({ env: !allOpen, energy: !allOpen, policy: !allOpen })}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-signal-cyan hover:underline"
          >
            <ChevronsUpDown size={12} />
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        <Section
          icon={<CloudRain size={15} />}
          title="Macro Environmental Shock Factors"
          accent="#f59e0b"
          findings={country.environmental}
          index={sourceIndex}
          empty="No sourced El Niño impact recorded for this country in the dataset."
          open={open.env}
          onToggle={() => setOpen((o) => ({ ...o, env: !o.env }))}
        />
        <Section
          icon={<Fuel size={15} />}
          title="Energy Vulnerability Metrics"
          accent="#ef4444"
          findings={country.energy}
          index={sourceIndex}
          empty="No sourced energy finding recorded for this country."
          open={open.energy}
          onToggle={() => setOpen((o) => ({ ...o, energy: !o.energy }))}
        />
        <Section
          icon={<Landmark size={15} />}
          title="Active Policy & Political Responses"
          accent="#22d3ee"
          findings={country.policy}
          index={sourceIndex}
          empty="No sourced policy response recorded in the dataset."
          open={open.policy}
          onToggle={() => setOpen((o) => ({ ...o, policy: !o.policy }))}
        />

        <SourceList sources={sources} />
        <p className="font-mono text-[10px] text-room-500">Last reviewed {country.lastReviewed}</p>
      </div>
      )}
    </>
  );
}

function GlobalView() {
  const { global, meta } = crisisData;
  const sources = collectSources([...global.elNino, ...global.hormuz]);
  const sourceIndex = new Map(sources.map((s, i) => [s.id, i + 1]));
  const [showLimits, setShowLimits] = useState(false);

  return (
    <>
      <header className="border-b border-room-700 px-5 pb-4 pt-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-room-400">
          <Globe2 size={12} /> Global situation · {meta.asOf}
        </div>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">Two concurrent shocks</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-room-300">
          Select a country on the map for its profile. Colours show which shock dominates; dashed lines show energy flows and
          their current status.
        </p>
      </header>
      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-4">
        <Section icon={<CloudRain size={15} />} title="El Niño 2026-27" accent="#f59e0b" findings={global.elNino} index={sourceIndex} empty="" />
        <Section icon={<Fuel size={15} />} title="Strait of Hormuz" accent="#ef4444" findings={global.hormuz} index={sourceIndex} empty="" />
        <div className="rounded-lg border border-room-700 bg-room-850 p-3 text-xs leading-relaxed text-room-300">
          <div className="mb-1 font-semibold text-room-100">Method</div>
          <AbbrText text={meta.methodology} />
          <button type="button" onClick={() => setShowLimits((v) => !v)} className="mt-2 block font-medium text-signal-cyan hover:underline">
            {showLimits ? 'Hide limitations' : 'Show limitations'}
          </button>
          {showLimits && (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-room-400">
              {meta.limitations.map((l) => (
                <li key={l}>
                  <AbbrText text={l} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <SourceList sources={sources} />
      </div>
    </>
  );
}

function Section({
  icon,
  title,
  accent,
  findings,
  index,
  empty,
  open,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  accent: string;
  findings: Finding[];
  index: Map<string, number>;
  empty: string;
  /** When omitted the section is always expanded (global view). */
  open?: boolean;
  onToggle?: () => void;
}) {
  const collapsible = onToggle !== undefined;
  const expanded = !collapsible || open;
  const heading = (
    <>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md" style={{ background: `${accent}22`, color: accent }}>
        {icon}
      </span>
      <span className="flex-1 text-left">{title}</span>
      {collapsible && (
        <>
          <span className="rounded-full border border-room-600 px-1.5 font-mono text-[10px] font-normal text-room-300">{findings.length}</span>
          <ChevronDown size={15} className={`text-room-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </>
      )}
    </>
  );
  return (
    <section className={collapsible ? 'rounded-lg border border-room-700/70 bg-room-900' : ''}>
      {collapsible ? (
        <h3>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-bold uppercase tracking-wide text-room-100 hover:bg-room-850"
          >
            {heading}
          </button>
        </h3>
      ) : (
        <h3 className="mb-2 flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-room-100">{heading}</h3>
      )}
      {expanded && (
        <div className={collapsible ? 'px-2.5 pb-2.5' : ''}>
          {findings.length === 0 ? (
            <p className="text-xs italic text-room-500">{empty}</p>
          ) : (
            <ul className="space-y-2">
              {findings.map((f, i) => (
                <li
                  key={i}
                  className="rounded-md border-l-2 bg-room-850/60 py-2 pl-3 pr-2 text-[13px] leading-relaxed text-room-200"
                  style={{ borderColor: accent }}
                >
                  <AbbrText text={f.text} /> <Refs ids={f.sourceIds} index={index} />
                  <span
                    className={`ml-1.5 inline-block rounded border px-1 py-px align-middle font-mono text-[9px] uppercase tracking-wide ${CONFIDENCE_STYLE[f.confidence]}`}
                  >
                    {f.confidence}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}

function Refs({ ids, index }: { ids: string[]; index: Map<string, number> }) {
  return (
    <span className="font-mono text-[10px] text-signal-cyan">
      {ids.map((id) => {
        const s = crisisData.sources[id];
        return (
          <a
            key={id}
            href={s?.url ?? `#src-${id}`}
            target={s ? '_blank' : undefined}
            rel="noreferrer noopener"
            title={s ? `${s.tag} ${s.title} (opens in new tab)` : undefined}
            className="hover:underline"
          >
            [{index.get(id)}]
          </a>
        );
      })}
    </span>
  );
}

function SourceList({ sources }: { sources: ReturnType<typeof collectSources> }) {
  if (sources.length === 0) return null;
  return (
    <section>
      <h3 className="mb-2 flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-room-100">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-room-700 text-room-200">
          <BookOpen size={14} />
        </span>
        Verified Sources & Citations
      </h3>
      <ol className="space-y-1.5">
        {sources.map((s, i) => (
          <li key={s.id} id={`src-${s.id}`} className="flex gap-2 text-[11px] leading-snug text-room-300">
            <span className="font-mono text-signal-cyan">[{i + 1}]</span>
            <span>
              <span className="font-mono text-room-400">
                <AbbrText text={s.tag} />
              </span>{' '}
              <a href={s.url} target="_blank" rel="noreferrer noopener" className="text-room-200 hover:text-white hover:underline">
                {s.title}
                <ExternalLink size={10} className="ml-1 inline align-baseline" />
              </a>
              <span className="text-room-500"> · {s.publisher}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}


function Spark({ values, color }: { values: number[]; color: string }) {
  if (values.length < 2) return null;
  const max = Math.max(...values, 1);
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * 56},${16 - (v / max) * 14}`).join(' ');
  return (
    <svg width="58" height="18" viewBox="0 0 58 18" aria-hidden>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/** Main seaports of the country with port calls against the pre-war baseline (IMF PortWatch). */
function PortsPanel({ iso3 }: { iso3: string }) {
  const data = usePortData();
  const ports: PortRecord[] = data?.ports.filter((p) => p.iso3 === iso3) ?? [];
  if (!data || ports.length === 0) return null;
  return (
    <div className="rounded-lg border border-room-700 bg-room-850 px-3 py-2.5">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-room-300">Main seaports (port calls per day)</h3>
        <span className="font-mono text-[10px] text-room-500">to {data.latestDate}</span>
      </div>
      <ul className="mt-2 divide-y divide-room-700/60">
        {ports.map((p) => {
          const r = portRatio(p);
          const vol = isVolatile(p);
          const color = r === null ? '#9aa5b5' : r < 0.8 ? '#f4c95d' : r > 1.25 ? '#6ea8fe' : '#5eead4';
          return (
            <li key={p.id} className="flex items-center gap-3 py-1.5 text-xs">
              <span className="min-w-0 flex-1 truncate text-room-100" title={p.name}>
                {p.name}
                {p.importShare ? <span className="text-room-500"> · {p.importShare}% of imports</span> : null}
              </span>
              <Spark values={p.weekly} color={color} />
              <span className="w-24 text-right font-mono text-[11px]" style={{ color }}>
                {p.avg7} vs. {p.baseline}
                {r !== null && <span className="text-room-400"> ({r >= 1 ? '+' : ''}{Math.round((r - 1) * 100)}%)</span>}
                {vol && <span title="Large change, possibly a data artefact">{' '}⚠</span>}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-[10px] leading-snug text-room-500">
        7-day average against the mean of 3 Jan to 27 Feb 2026. Sparkline: weekly means of the last 12 weeks. Satellite AIS estimate, not customs data.
        ⚠ marks changes above +50% or below -33%, which can come from changes in AIS coverage or method and need checking before use.{' '}
        <a className="text-signal-cyan hover:underline" href={data.source.url} target="_blank" rel="noreferrer">IMF PortWatch</a>
      </p>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { ExternalLink, Languages, Newspaper } from 'lucide-react';
import { useCountryNews, type NewsCategory, type NewsItem, type NewsSourceType } from '../hooks/useCountryNews';

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  politics: 'Politics',
  economy: 'Economy & trade',
  society: 'Society',
  diplomacy: 'Diplomacy',
  'climate-energy': 'Climate & energy',
  security: 'Security',
  cooperation: 'Cooperation & finance',
};

const CATEGORY_COLOR: Record<NewsCategory, string> = {
  politics: '#a78bfa',
  economy: '#34d399',
  society: '#f472b6',
  diplomacy: '#22d3ee',
  'climate-energy': '#f59e0b',
  security: '#f87171',
  cooperation: '#60a5fa',
};

const TYPE_LABEL: Record<NewsSourceType, string> = {
  official: 'Official',
  state: 'State media',
  national: 'National press',
  regional: 'Regional press',
  international: 'International',
  research: 'Research',
};

const TYPE_STYLE: Record<NewsSourceType, string> = {
  official: 'border-emerald-500/40 text-emerald-300',
  state: 'border-amber-500/40 text-amber-300',
  national: 'border-room-600 text-room-300',
  regional: 'border-room-600 text-room-300',
  international: 'border-sky-500/40 text-sky-300',
  research: 'border-violet-500/40 text-violet-300',
};

const fmtDate = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export default function NewsPanel({ iso3, name }: { iso3: string; name: string }) {
  const state = useCountryNews(iso3);
  const [cat, setCat] = useState<NewsCategory | 'all'>('all');
  const [topic, setTopic] = useState<string | null>(null);
  useEffect(() => {
    setCat('all');
    setTopic(null);
  }, [iso3]);

  const items = state.status === 'ready' ? state.news.items : [];
  const cats = useMemo(() => {
    const m = new Map<NewsCategory, number>();
    items.forEach((i) => m.set(i.category, (m.get(i.category) ?? 0) + 1));
    return m;
  }, [items]);
  const topics = useMemo(() => [...new Set(items.flatMap((i) => i.topics))].sort(), [items]);

  if (state.status === 'loading') return <div className="px-5 py-6 text-sm text-room-400">Loading the weekly digest…</div>;
  if (state.status === 'none')
    return (
      <div className="px-5 py-6 text-sm leading-relaxed text-room-300">
        <Newspaper size={18} className="mb-2 text-room-500" />
        No weekly digest for {name} yet.
      </div>
    );

  const { news } = state;
  const shown = items.filter((i) => (cat === 'all' || i.category === cat) && (!topic || i.topics.includes(topic)));
  const lead = cat === 'all' && !topic ? shown[0] : undefined;
  const rest = lead ? shown.slice(1) : shown;

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
      <div className="rounded-lg border border-room-700 bg-room-850 px-3 py-2 text-[11px] leading-relaxed text-room-400">
        <span className="font-semibold text-room-200">Week {fmtDate(news.period.from)} to {fmtDate(news.period.to)}.</span>{' '}
        {news.method} Texts are neutral summaries, not quotations; always check the linked sources.
      </div>

      <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter by category">
        <Chip active={cat === 'all'} onClick={() => setCat('all')}>
          All ({items.length})
        </Chip>
        {(Object.keys(CATEGORY_LABEL) as NewsCategory[])
          .filter((c) => cats.has(c))
          .map((c) => (
            <Chip key={c} active={cat === c} color={CATEGORY_COLOR[c]} onClick={() => setCat(cat === c ? 'all' : c)}>
              {CATEGORY_LABEL[c]} ({cats.get(c)})
            </Chip>
          ))}
      </div>
      {topics.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-room-500">Focus topics</span>
          {topics.map((t) => (
            <Chip key={t} small active={topic === t} onClick={() => setTopic(topic === t ? null : t)}>
              {t}
            </Chip>
          ))}
        </div>
      )}

      {shown.length === 0 && <p className="text-sm text-room-400">No items for this filter.</p>}
      {lead && <Story item={lead} lead />}
      {rest.map((i) => (
        <Story key={i.id} item={i} />
      ))}
      <p className="font-mono text-[10px] text-room-500">Digest generated {news.generatedAt}</p>
    </div>
  );
}

function Chip({ active, onClick, children, color, small }: { active: boolean; onClick: () => void; children: React.ReactNode; color?: string; small?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-2.5 py-1 ${small ? 'text-[10px]' : 'text-[11px]'} font-medium transition-colors ${
        active ? 'border-white/70 bg-room-700 text-white' : 'border-room-600 text-room-300 hover:border-room-400 hover:text-white'
      }`}
    >
      {color && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: color }} />}
      {children}
    </button>
  );
}

function Story({ item, lead }: { item: NewsItem; lead?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`rounded-lg border bg-room-850 p-3.5 ${lead ? 'border-room-500' : 'border-room-700'}`}>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-widest">
        <span style={{ color: CATEGORY_COLOR[item.category] }}>{CATEGORY_LABEL[item.category]}</span>
        <span className="text-room-500">{fmtDate(item.date)}</span>
        {item.translated && (
          <span className="inline-flex items-center gap-1 text-room-400" title="At least one source is not in English; the summary is a translation">
            <Languages size={10} /> translated
          </span>
        )}
      </div>
      <h3 className={`mt-1.5 font-semibold leading-snug text-white ${lead ? 'text-base' : 'text-sm'}`}>{item.headline}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-room-200">{item.summary}</p>
      {item.note && <p className="mt-1.5 text-xs leading-relaxed text-amber-200/80">Note: {item.note}</p>}
      {item.topics.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.topics.map((t) => (
            <span key={t} className="rounded border border-signal-cyan/40 px-1.5 py-0.5 text-[10px] text-signal-cyan">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {item.sources.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${s.title} (${s.language.toUpperCase()}, ${s.date}), opens in new tab`}
            className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] hover:text-white ${TYPE_STYLE[s.type]}`}
          >
            {s.publisher} · {TYPE_LABEL[s.type]} <ExternalLink size={9} />
          </a>
        ))}
      </div>
      <button type="button" onClick={() => setOpen(!open)} className="mt-2 text-[11px] font-medium text-signal-cyan hover:underline">
        {open ? 'Hide evidence' : 'Show evidence'}
      </button>
      {open && (
        <ul className="mt-1.5 space-y-1.5 text-[11px] leading-relaxed text-room-400">
          {item.sources.map((s) => (
            <li key={s.url}>
              <span className="font-semibold text-room-300">{s.publisher}</span> ({s.language.toUpperCase()}, {s.date}): "{s.evidence}"
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

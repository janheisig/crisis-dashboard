import { useMemo, useState } from 'react';
import { Activity, Anchor, CloudRain, Radio } from 'lucide-react';
import WorldMap from './components/WorldMap';
import DetailPanel from './components/DetailPanel';
import ReportHub from './components/ReportHub';
import { crisisData } from './data/crisisData';
import type { ImpactStatus, Iso3, RegionId } from './types/crisis';

export default function App() {
  const [selected, setSelected] = useState<Iso3 | null>(null);
  const [region, setRegion] = useState<RegionId | null>(null);

  const counts = useMemo(() => {
    const c: Record<ImpactStatus, number> = { elnino: 0, hormuz: 0, dual: 0, minimal: 0 };
    Object.values(crisisData.countries).forEach((p) => (c[p.status] += 1));
    return c;
  }, []);

  const handleRegion = (r: RegionId | null) => {
    setRegion(r);
    if (selected && r && crisisData.countries[selected]?.region !== r) setSelected(null);
  };

  const handleSelect = (iso3: Iso3 | null) => {
    setSelected(iso3);
    if (iso3 && region && crisisData.countries[iso3]?.region !== region) setRegion(null);
  };

  return (
    <div className="min-h-screen bg-room-950 text-room-100">
      <header className="border-b border-room-800 bg-room-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-rose-500/40 bg-rose-500/10">
              <Radio size={18} className="text-rose-400" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full bg-rose-500" />
            </div>
            <div>
              <h1 className="text-base font-semibold tracking-tight text-white md:text-lg">
                Crisis Room <span className="text-room-400">·</span> El Niño × Hormuz
              </h1>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-room-400">
                Concurrent shock monitor · data as of {crisisData.meta.asOf}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Kpi icon={<CloudRain size={14} />} label="El Niño" value="Very strong event >90%" tone="amber" />
            <Kpi icon={<Anchor size={14} />} label="Hormuz transits" value="1/day vs. 85 baseline" tone="red" />
            <Kpi icon={<Activity size={14} />} label="Dual-shock countries" value={`${counts.dual} of ${Object.keys(crisisData.countries).length}`} tone="crimson" />
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1600px] gap-4 px-4 py-4 md:px-6 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="aspect-[1000/520] w-full min-h-[300px]">
            <WorldMap selected={selected} onCountrySelect={handleSelect} highlightRegion={region} />
          </div>
          <ReportHub region={region} onRegionChange={handleRegion} onCountrySelect={(iso) => handleSelect(iso)} />
        </div>
        <div className="xl:sticky xl:top-4 xl:h-[calc(100vh-2rem)] h-[720px]">
          <DetailPanel iso3={selected} onClose={() => setSelected(null)} />
        </div>
      </main>

      <footer className="mx-auto max-w-[1600px] px-4 pb-6 text-[11px] leading-relaxed text-room-500 md:px-6">
        This is for informational purposes only. For professional risk management, consult an analyst. AI responses may include
        mistakes. Status and risk ratings are editorial judgements based on the cited sources, not a computed index.
      </footer>
    </div>
  );
}

function Kpi({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: 'amber' | 'red' | 'crimson' }) {
  const toneCls = {
    amber: 'border-amber-500/30 text-amber-300',
    red: 'border-red-500/30 text-red-300',
    crimson: 'border-rose-600/40 text-rose-300',
  }[tone];
  return (
    <div className={`flex items-center gap-2 rounded-lg border bg-room-850 px-3 py-1.5 ${toneCls}`}>
      {icon}
      <div className="leading-tight">
        <div className="font-mono text-[9px] uppercase tracking-widest text-room-400">{label}</div>
        <div className="text-xs font-semibold text-room-100">{value}</div>
      </div>
    </div>
  );
}

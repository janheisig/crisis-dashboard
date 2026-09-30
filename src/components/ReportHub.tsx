import { useState } from 'react';
import { ChevronDown, FileDown, Loader2 } from 'lucide-react';
import { countriesInRegion, crisisData } from '../data/crisisData';
import { RISK_LABEL, type Iso3, type RegionId, type TransitSnapshot } from '../types/crisis';
import { RISK_STYLE } from './DetailPanel';
import { STATUS_COLOR } from './WorldMap';
import { AbbrText } from './AbbrText';

interface ReportHubProps {
  region: RegionId | null;
  onRegionChange: (region: RegionId | null) => void;
  onCountrySelect: (iso3: Iso3) => void;
  transits?: TransitSnapshot;
}

export default function ReportHub({ region, onRegionChange, onCountrySelect, transits }: ReportHubProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const regionIds = Object.keys(crisisData.regions) as RegionId[];
  const profile = region ? crisisData.regions[region] : null;
  const members = region ? countriesInRegion(region) : [];

  const generate = async () => {
    if (!region) return;
    setBusy(true);
    setError(null);
    try {
      // Loaded on demand so the PDF engine does not slow down the first paint.
      const { downloadRegionalReport } = await import('../utils/pdfGenerator');
      downloadRegionalReport(region, transits);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'PDF generation failed.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="rounded-xl border border-room-700 bg-room-900 p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label htmlFor="region-select" className="font-mono text-[10px] uppercase tracking-[0.2em] text-room-400">
            Report hub · sub-region
          </label>
          <div className="relative mt-1.5">
            <select
              id="region-select"
              value={region ?? ''}
              onChange={(e) => onRegionChange((e.target.value || null) as RegionId | null)}
              className="w-full appearance-none rounded-lg border border-room-600 bg-room-850 py-2.5 pl-3 pr-9 text-sm font-medium text-room-100 outline-none focus:border-signal-cyan"
            >
              <option value="">All regions (no filter)</option>
              {regionIds.map((id) => (
                <option key={id} value={id}>
                  {crisisData.regions[id].name}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-room-400" />
          </div>
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={!region || busy}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:bg-room-700 disabled:text-room-400 disabled:shadow-none"
        >
          {busy ? <Loader2 size={16} className="animate-spin" /> : <FileDown size={16} />}
          Generate executive summary (PDF)
        </button>
      </div>

      {profile ? (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto]">
          <p className="text-[13px] leading-relaxed text-room-300">
            <AbbrText text={profile.outlook} />
          </p>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${RISK_STYLE[profile.risk]}`}>
              Regional risk: {RISK_LABEL[profile.risk]}
            </span>
            <div className="flex max-w-xs flex-wrap gap-1.5 lg:justify-end">
              {members.map((c) => (
                <button
                  key={c.iso3}
                  type="button"
                  onClick={() => onCountrySelect(c.iso3)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-room-700 bg-room-850 px-2 py-1 text-xs text-room-200 hover:border-room-500 hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: STATUS_COLOR[c.status] }} />
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="mt-3 text-xs text-room-400">
          Choose a sub-region to highlight it on the map and compile a downloadable executive summary. The PDF is generated
          entirely in your browser from the dataset in this repository.
        </p>
      )}
      {error && <p className="mt-2 text-xs text-rose-400">{error}</p>}
    </section>
  );
}

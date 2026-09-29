# Crisis Room: El Niño × Strait of Hormuz

Interactive dashboard on the concurrent 2026-27 El Niño and the Strait of Hormuz energy crisis.
Country polygons act as selectable nodes, maritime energy lanes and bypass pipelines are drawn as
live vectors, and every statement in the dataset links to its source. Regional executive summaries
are compiled as PDF entirely in the browser.

**Data as of 29 September 2026.** This is for informational purposes only. For professional risk
management, consult an analyst. AI responses may include mistakes.

## Stack

React 18 + Vite 5 + TypeScript (strict) + Tailwind CSS 3 · d3-geo / d3-zoom with Natural Earth
1:50m boundaries from `world-atlas` (bundled, no runtime API calls) · jsPDF + jspdf-autotable ·
lucide-react icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to ./dist
npm run preview    # serve ./dist
```

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: it installs dependencies, runs
`npm run build` and publishes `./dist` to the `gh-pages` branch with the built-in `GITHUB_TOKEN`.
One-time setup: **Settings → Pages → Build and deployment → Deploy from a branch → `gh-pages` / root**.

## Structure

```
src/
  types/crisis.ts        Types for countries, findings, sources, routes, regions
  data/crisisData.ts     Dataset core: sources, reference countries, routes, regional outlooks
  data/countriesAsia.ts  South, Southeast, East and Central Asia profiles and sources
  data/countriesLac.ts   Latin America and Caribbean profiles and sources
  components/WorldMap.tsx    Zoomable SVG map, status colouring, energy-flow overlay, tooltips
  components/DetailPanel.tsx Country analytics with citations and confidence flags
  components/ReportHub.tsx   Sub-region filter and PDF trigger
  utils/pdfGenerator.ts  Executive summary layout (header, risk badge, grid, outlook, recommendations, sources)
```

## Editing the data

Each finding needs `text`, at least one `sourceIds` entry and a `confidence` level
(`confirmed`, `reported`, `preliminary`). Status and risk levels are editorial judgements with a
written rationale, not a computed index. Countries not in the dataset appear as "not assessed".

### Known limitations

- Coverage: all 30 states of South, Southeast, East and Central Asia and all 33 states of Latin America and
  the Caribbean, plus reference countries in the Gulf, the Horn of Africa and the EU (73 in total).
  Basic profiles rest on one or two sources, often subregional (CEPAL, CIMH, IFRC); six countries are
  listed as "insufficient data".
- IMF PortWatch counts only AIS-visible transits; for Hormuz they understate traffic because many tankers
  sail dark (Kpler put September crude flows at about half the pre-war level).
- Some values are in-season or single-source figures (flagged `preliminary`), e.g. India's monsoon
  deficit before the IMD end-of-season statement.
- Two Wikipedia pages serve as secondary compilations for timeline facts; check their primary
  references before external use.
- The Hormuz situation changes daily; update `crisisData.ts` and `meta.asOf` when refreshing.

## Chokepoint transit data (IMF PortWatch)

`scripts/fetch-portwatch.mjs` pulls daily transit counts for Hormuz, Bab el-Mandeb, Suez, Malacca and
the Cape of Good Hope from the public IMF PortWatch ArcGIS service (no API key) and writes
`public/data/chokepoints.json`. The deploy workflow runs it on every push and daily at 06:17 UTC,
commits a changed snapshot and redeploys; if PortWatch is unreachable, the committed snapshot is used.
The browser only loads this same-origin JSON file. Baseline = mean daily transits 3 Jan to 27 Feb 2026.
PortWatch counts are satellite-AIS estimates; recent days may be revised.

```bash
node scripts/fetch-portwatch.mjs   # refresh locally
```

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
  data/crisisData.ts     Dataset (ISO alpha-3 keyed), sources, routes, regional outlooks
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

- 19 archetype countries; Latin America and the Caribbean are not yet covered.
- Some values are in-season or single-source figures (flagged `preliminary`), e.g. India's monsoon
  deficit before the IMD end-of-season statement.
- Two Wikipedia pages serve as secondary compilations for timeline facts; check their primary
  references before external use.
- The Hormuz situation changes daily; update `crisisData.ts` and `meta.asOf` when refreshing.

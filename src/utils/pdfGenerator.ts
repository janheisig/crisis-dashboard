import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { collectSources, countriesInRegion, crisisData } from '../data/crisisData';
import {
  RISK_LABEL,
  STATUS_LABEL,
  type Finding,
  type RegionId,
  type RiskLevel,
  type ImpactStatus,
  type TransitSnapshot,
} from '../types/crisis';

/** Mandatory regulatory footnote printed on every page. */
export const REGULATORY_FOOTNOTE =
  'This is for informational purposes only. For professional risk management, consult an analyst. AI responses may include mistakes.';

type RGB = [number, number, number];

const INK: RGB = [22, 27, 36];
const MUTED: RGB = [96, 106, 122];
const RULE: RGB = [214, 219, 226];
const BAND: RGB = [12, 16, 22];

const RISK_RGB: Record<RiskLevel, RGB> = {
  moderate: [16, 150, 100],
  elevated: [217, 140, 6],
  high: [234, 88, 12],
  critical: [190, 18, 60],
};

const STATUS_RGB: Record<ImpactStatus, RGB> = {
  elnino: [245, 158, 11],
  hormuz: [239, 68, 68],
  dual: [190, 18, 60],
  minimal: [100, 116, 139],
  insufficient: [110, 118, 130],
};

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 16;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const FOOTER_H = 16;

/**
 * The built-in PDF fonts use WinAnsi encoding. Map typographic characters that
 * fall outside it to safe equivalents so nothing renders as garbage.
 */
function pdfSafe(text: string): string {
  return text
    .replace(/[‘’‛]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...')
    .replace(/ /g, ' ')
    .replace(/[^\x00-\xFF]/g, '');
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function findingsCell(findings: Finding[], refs: Map<string, number>, emptyText: string): string {
  if (findings.length === 0) return emptyText;
  return findings
    .map((f) => {
      const cite = f.sourceIds.map((id) => `[${refs.get(id)}]`).join('');
      const flag = f.confidence === 'preliminary' ? ' (preliminary)' : '';
      return pdfSafe(`- ${f.text} ${cite}${flag}`);
    })
    .join('\n');
}

export interface ReportOptions {
  region: RegionId;
  compiledAt?: Date;
  transits?: TransitSnapshot;
}

/** Build the executive summary document for a sub-region. Returns the jsPDF instance. */
export function buildRegionalReport({ region, compiledAt = new Date(), transits }: ReportOptions): jsPDF {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const profile = crisisData.regions[region];
  const countries = countriesInRegion(region);

  const allFindings = countries.flatMap((c) => [...c.environmental, ...c.energy, ...c.policy, ...c.metrics]);
  const sources = collectSources(allFindings);
  const refs = new Map(sources.map((s, i) => [s.id, i + 1]));

  doc.setProperties({
    title: `Crisis Room Executive Summary: ${profile.name}`,
    subject: 'El Niño 2026-27 and Strait of Hormuz energy crisis',
    creator: 'Crisis Room dashboard',
  });

  // 1. Header band
  doc.setFillColor(...BAND);
  doc.rect(0, 0, PAGE_W, 40, 'F');
  doc.setFillColor(...RISK_RGB[profile.risk]);
  doc.rect(0, 40, PAGE_W, 1.2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(150, 160, 175);
  doc.text('CRISIS ROOM  |  EXECUTIVE SUMMARY', MARGIN, 12, { charSpace: 0.6 });

  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text(pdfSafe(profile.name), MARGIN, 23);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(190, 198, 210);
  doc.text(pdfSafe('Concurrent shocks: El Niño 2026-27 and the Strait of Hormuz energy crisis'), MARGIN, 30);
  doc.text(`Compiled ${formatDate(compiledAt)}  |  Data as of ${crisisData.meta.asOf}`, MARGIN, 35);

  // Risk badge
  const badgeLabel = `REGIONAL RISK: ${RISK_LABEL[profile.risk].toUpperCase()}`;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  const bw = doc.getTextWidth(badgeLabel) + 10;
  const bx = PAGE_W - MARGIN - bw;
  doc.setFillColor(...RISK_RGB[profile.risk]);
  doc.roundedRect(bx, 16, bw, 9, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.text(badgeLabel, bx + 5, 21.9);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(150, 160, 175);
  doc.text('Editorial rating, not a computed index', PAGE_W - MARGIN, 30, { align: 'right' });

  let y = 50;

  // Global context line
  y = sectionHeading(doc, 'Global context', y);
  const contextFindings = [...crisisData.global.elNino.slice(0, 1), ...crisisData.global.hormuz.slice(1, 2)];
  y = paragraph(doc, contextFindings.map((f) => pdfSafe(f.text)).join(' '), y, 9);
  const contextSources = collectSources(contextFindings)
    .map((s) => `${s.publisher} (${s.date})`)
    .join('; ');
  y = paragraph(doc, pdfSafe(`Sources: ${contextSources}.`), y, 7.4, MUTED);
  y += 2;

  if (transits) {
    y = transitTable(doc, transits, y);
  }
  y += 2;

  // 2. Data grid
  y = sectionHeading(doc, 'Impact grid: El Niño climate effects vs. Hormuz energy supply effects', y);
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN, bottom: FOOTER_H + 6 },
    head: [['Country', 'Status / risk', 'El Niño climate effects', 'Hormuz energy supply effects']],
    body: countries.map((c) => [
      pdfSafe(c.name),
      `${STATUS_LABEL[c.status]}\nRisk: ${RISK_LABEL[c.risk]}`,
      findingsCell(c.environmental, refs, 'No sourced finding in dataset.'),
      findingsCell(c.energy, refs, 'No sourced finding in dataset.'),
    ]),
    theme: 'grid',
    styles: { font: 'helvetica', fontSize: 7.6, cellPadding: 2, textColor: INK, lineColor: RULE, lineWidth: 0.2, valign: 'top' },
    headStyles: { fillColor: [34, 42, 54], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8 },
    alternateRowStyles: { fillColor: [247, 248, 250] },
    columnStyles: {
      0: { cellWidth: 24, fontStyle: 'bold' },
      1: { cellWidth: 25 },
      2: { cellWidth: (CONTENT_W - 49) / 2 },
      3: { cellWidth: (CONTENT_W - 49) / 2 },
    },
    didParseCell: (data) => {
      if (data.section === 'body' && data.column.index === 1) {
        const c = countries[data.row.index];
        data.cell.styles.textColor = STATUS_RGB[c.status];
        data.cell.styles.fontStyle = 'bold';
      }
    },
  });
  y = lastY(doc) + 8;

  // 3. Policy outlook
  y = ensureSpace(doc, y, 40);
  y = sectionHeading(doc, 'Regional policy outlook and stability trends', y);
  y = paragraph(doc, pdfSafe(profile.outlook), y, 9.5);
  y += 3;

  const withPolicy = countries.filter((c) => c.policy.length > 0);
  if (withPolicy.length > 0) {
    y = ensureSpace(doc, y, 30);
    y = subHeading(doc, 'Active policy and political responses', y);
    autoTable(doc, {
      startY: y,
      margin: { left: MARGIN, right: MARGIN, bottom: FOOTER_H + 6 },
      head: [['Country', 'Response']],
      body: withPolicy.map((c) => [pdfSafe(c.name), findingsCell(c.policy, refs, '')]),
      theme: 'plain',
      styles: { font: 'helvetica', fontSize: 7.8, cellPadding: { top: 1.6, bottom: 1.6, left: 2, right: 2 }, textColor: INK, valign: 'top' },
      headStyles: { textColor: MUTED, fontStyle: 'bold', fontSize: 7.5, lineWidth: { bottom: 0.3 }, lineColor: RULE },
      bodyStyles: { lineWidth: { bottom: 0.15 }, lineColor: RULE },
      columnStyles: { 0: { cellWidth: 28, fontStyle: 'bold' } },
    });
    y = lastY(doc) + 8;
  }

  // 4. Recommendations
  y = ensureSpace(doc, y, 45);
  y = sectionHeading(doc, 'Strategic recommendations', y);
  y = bulletBlock(doc, 'For regional policy stakeholders', profile.stakeholderRecommendations, y);
  y += 2;
  y = bulletBlock(doc, 'For institutional analysts', profile.analystRecommendations, y);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(...MUTED);
  y = ensureSpace(doc, y, 8);
  doc.text('Recommendations are analytical suggestions derived from the findings above, not official positions.', MARGIN, y);
  y += 8;

  // Sources
  y = ensureSpace(doc, y, 30);
  y = sectionHeading(doc, 'Sources', y);
  doc.setFontSize(7.4);
  for (const [i, s] of sources.entries()) {
    const line = pdfSafe(`[${i + 1}] ${s.publisher}: ${s.title} (${s.date}).`);
    const lines = doc.splitTextToSize(line, CONTENT_W - 2) as string[];
    const h = lines.length * 3.2 + 3.4;
    y = ensureSpace(doc, y, h);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...INK);
    doc.text(lines, MARGIN, y);
    y += lines.length * 3.2;
    doc.setTextColor(30, 100, 180);
    doc.textWithLink(pdfSafe(s.url.length > 115 ? `${s.url.slice(0, 112)}...` : s.url), MARGIN + 4, y, { url: s.url });
    y += 4.4;
  }
  y += 3;

  // Method and limitations
  y = ensureSpace(doc, y, 30);
  y = subHeading(doc, 'Method and limitations', y);
  y = paragraph(doc, pdfSafe(crisisData.meta.methodology), y, 7.8, MUTED);
  for (const l of crisisData.meta.limitations) {
    const lines = doc.splitTextToSize(pdfSafe(l), CONTENT_W - 5) as string[];
    y = ensureSpace(doc, y, lines.length * 3.4 + 1);
    doc.setFontSize(7.8);
    doc.setTextColor(...MUTED);
    doc.text('-', MARGIN + 1, y);
    doc.text(lines, MARGIN + 5, y);
    y += lines.length * 3.4 + 1;
  }

  drawFooters(doc);
  return doc;
}

/** Build and download the report. */
export function downloadRegionalReport(region: RegionId, transits?: TransitSnapshot): void {
  const now = new Date();
  const doc = buildRegionalReport({ region, compiledAt: now, transits });
  const stamp = now.toISOString().slice(0, 10);
  doc.save(`CrisisRoom_Executive-Summary_${region}_${stamp}.pdf`);
}

// Layout helpers

const CHOKEPOINT_ORDER: [string, string][] = [
  ['hormuz', 'Strait of Hormuz'],
  ['bab-el-mandeb', 'Bab el-Mandeb'],
  ['suez', 'Suez Canal'],
  ['malacca', 'Strait of Malacca'],
  ['cape', 'Cape of Good Hope'],
];

function transitTable(doc: jsPDF, t: TransitSnapshot, y: number): number {
  y = ensureSpace(doc, y, 40);
  y = subHeading(doc, `Chokepoint transits (IMF PortWatch, data to ${t.latestDate})`, y);
  const rows = CHOKEPOINT_ORDER.filter(([id]) => t.chokepoints[id]).map(([id, name]) => {
    const c = t.chokepoints[id];
    const pct = c.baseline > 0 ? Math.round(((c.avg7 - c.baseline) / c.baseline) * 100) : 0;
    return [name, String(c.baseline), String(c.avg7), `${pct > 0 ? '+' : ''}${pct}%`, String(c.latest.t)];
  });
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN, bottom: FOOTER_H + 6 },
    head: [['Chokepoint', 'Pre-war baseline / day', '7-day average / day', 'Change', `Latest day (${t.latestDate})`]],
    body: rows,
    theme: 'plain',
    styles: { font: 'helvetica', fontSize: 8, cellPadding: { top: 1.4, bottom: 1.4, left: 2, right: 2 }, textColor: INK },
    headStyles: { textColor: MUTED, fontStyle: 'bold', fontSize: 7.5, lineWidth: { bottom: 0.3 }, lineColor: RULE },
    bodyStyles: { lineWidth: { bottom: 0.15 }, lineColor: RULE },
    columnStyles: { 0: { fontStyle: 'bold' }, 1: { halign: 'right' }, 2: { halign: 'right' }, 3: { halign: 'right' }, 4: { halign: 'right' } },
    didParseCell: (data) => {
      if (data.section === 'body' && data.column.index === 3 && String(data.cell.raw).startsWith('-')) {
        data.cell.styles.textColor = RISK_RGB.critical;
        data.cell.styles.fontStyle = 'bold';
      }
    },
  });
  y = lastY(doc) + 3;
  return paragraph(
    doc,
    pdfSafe(
      `Baseline: mean daily transits ${t.baselineWindow.from} to ${t.baselineWindow.to}, the eight weeks before the war. Counts are satellite AIS estimates and recent days may be revised.`,
    ),
    y,
    7.4,
    MUTED,
  );
}

function lastY(doc: jsPDF): number {
  return (doc as unknown as { lastAutoTable?: { finalY?: number } }).lastAutoTable?.finalY ?? 40;
}

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > PAGE_H - FOOTER_H - 6) {
    doc.addPage();
    return 20;
  }
  return y;
}

function sectionHeading(doc: jsPDF, text: string, y: number): number {
  y = ensureSpace(doc, y, 14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...INK);
  doc.text(pdfSafe(text), MARGIN, y);
  doc.setDrawColor(...RULE);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y + 1.8, PAGE_W - MARGIN, y + 1.8);
  return y + 7;
}

function subHeading(doc: jsPDF, text: string, y: number): number {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...INK);
  doc.text(pdfSafe(text), MARGIN, y);
  return y + 4.5;
}

function paragraph(doc: jsPDF, text: string, y: number, size: number, color: RGB = INK): number {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(size);
  doc.setTextColor(...color);
  const lh = size * 0.46;
  const lines = doc.splitTextToSize(text, CONTENT_W) as string[];
  for (const line of lines) {
    y = ensureSpace(doc, y, lh);
    doc.text(line, MARGIN, y);
    y += lh;
  }
  return y + 1.5;
}

function bulletBlock(doc: jsPDF, title: string, items: string[], y: number): number {
  y = ensureSpace(doc, y, 12);
  y = subHeading(doc, title, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  for (const item of items) {
    const lines = doc.splitTextToSize(pdfSafe(item), CONTENT_W - 7) as string[];
    const h = lines.length * 4.2 + 1.2;
    y = ensureSpace(doc, y, h);
    doc.setFillColor(...INK);
    doc.circle(MARGIN + 2, y - 1.2, 0.7, 'F');
    doc.setTextColor(...INK);
    doc.text(lines, MARGIN + 6, y);
    y += h;
  }
  return y;
}

function drawFooters(doc: jsPDF): void {
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    const top = PAGE_H - FOOTER_H + 2;
    doc.setDrawColor(...RULE);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, top, PAGE_W - MARGIN, top);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.4);
    doc.setTextColor(...INK);
    doc.text('Regulatory note:', MARGIN, top + 5);
    const w = doc.getTextWidth('Regulatory note:') + 2;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...MUTED);
    const lines = doc.splitTextToSize(REGULATORY_FOOTNOTE, CONTENT_W - w - 18) as string[];
    doc.text(lines, MARGIN + w, top + 5);
    doc.text(`${p} / ${pages}`, PAGE_W - MARGIN, top + 5, { align: 'right' });
  }
}


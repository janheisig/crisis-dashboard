/**
 * Core type definitions for the Crisis Room dashboard.
 *
 * Every factual statement in the dataset is a `Finding` that must point to at
 * least one `Source` by id. Statements without a source are not permitted; where
 * the evidence is thin, a finding carries `confidence: 'preliminary'`.
 */

/** ISO 3166-1 alpha-3 code, e.g. "VNM". */
export type Iso3 = string;

/** Which shock dominates a country's current exposure. */
export type ImpactStatus = 'elnino' | 'hormuz' | 'dual' | 'minimal' | 'insufficient';

/**
 * Editorial risk rating. This is a qualitative analyst judgement derived from
 * the cited findings, not a computed index. The rationale is stored alongside.
 */
export type RiskLevel = 'moderate' | 'elevated' | 'high' | 'critical';

export type RegionId =
  | 'southeast-asia'
  | 'south-asia'
  | 'east-asia'
  | 'central-asia'
  | 'south-america'
  | 'central-america'
  | 'caribbean'
  | 'horn-of-africa'
  | 'european-union'
  | 'gulf';

export type SourceType =
  | 'official'
  | 'intergovernmental'
  | 'research'
  | 'news'
  | 'industry'
  | 'reference';

export interface Source {
  id: string;
  /** Short citation tag shown in the UI, e.g. "[NOAA CPC, Sep 2026]". */
  tag: string;
  publisher: string;
  title: string;
  url: string;
  /** Publication or last-update date as stated by the source (ISO date). */
  date: string;
  type: SourceType;
}

export type Confidence = 'confirmed' | 'reported' | 'preliminary';

export interface Finding {
  text: string;
  sourceIds: string[];
  /**
   * confirmed: primary or official source.
   * reported: reputable secondary reporting.
   * preliminary: in-season value, single source, or awaiting official revision.
   */
  confidence: Confidence;
}

export interface Metric {
  label: string;
  value: string;
  sourceIds: string[];
  asOf: string;
}

export interface CountryProfile {
  iso3: Iso3;
  /** ISO 3166-1 numeric code as used by the Natural Earth / world-atlas topology. */
  isoNumeric: string;
  name: string;
  region: RegionId;
  /** full: all three sections researched; basic: status plus one or two sourced findings. */
  tier?: 'full' | 'basic';
  status: ImpactStatus;
  risk: RiskLevel;
  riskRationale: string;
  headline: string;
  /** Macro environmental shock factors (predominantly El Niño). */
  environmental: Finding[];
  /** Energy vulnerability (predominantly Hormuz). */
  energy: Finding[];
  /** Active policy and political responses. */
  policy: Finding[];
  metrics: Metric[];
  lastReviewed: string;
}

export interface RegionProfile {
  id: RegionId;
  name: string;
  risk: RiskLevel;
  outlook: string;
  stakeholderRecommendations: string[];
  analystRecommendations: string[];
}

export type RouteStatus = 'blocked' | 'disrupted' | 'diverted' | 'operating';

export interface MaritimeRoute {
  id: string;
  name: string;
  kind: 'sea-lane' | 'pipeline';
  status: RouteStatus;
  /** [longitude, latitude] pairs, drawn as a great-circle-free polyline. */
  coordinates: [number, number][];
  note: string;
  sourceIds: string[];
}

export interface Chokepoint {
  id: string;
  name: string;
  coordinates: [number, number];
  status: RouteStatus;
  note: string;
  sourceIds: string[];
}

export interface GlobalContext {
  asOf: string;
  elNino: Finding[];
  hormuz: Finding[];
}

export interface CrisisDataset {
  meta: {
    title: string;
    asOf: string;
    methodology: string;
    limitations: string[];
  };
  sources: Record<string, Source>;
  global: GlobalContext;
  regions: Record<RegionId, RegionProfile>;
  countries: Record<Iso3, CountryProfile>;
  routes: MaritimeRoute[];
  chokepoints: Chokepoint[];
}

export const STATUS_LABEL: Record<ImpactStatus, string> = {
  elnino: 'El Niño dominant',
  hormuz: 'Gulf war / Hormuz dominant',
  dual: 'Dual shock',
  minimal: 'Minimal direct impact',
  insufficient: 'Insufficient data',
};

export const RISK_LABEL: Record<RiskLevel, string> = {
  moderate: 'Moderate',
  elevated: 'Elevated',
  high: 'High',
  critical: 'Critical',
};

export const ROUTE_STATUS_LABEL: Record<RouteStatus, string> = {
  blocked: 'Effectively closed',
  disrupted: 'Disrupted',
  diverted: 'Diversion route',
  operating: 'Operating',
};

/** Snapshot produced by scripts/fetch-portwatch.mjs (public/data/chokepoints.json). */
export interface TransitPoint {
  /** ISO date */
  d: string;
  /** all vessel types */
  t: number;
  /** tankers */
  tk: number;
  /** container ships */
  ct: number;
}

export interface ChokepointTransits {
  portid: string;
  name: string;
  /** mean daily transits in the pre-war baseline window */
  baseline: number;
  baselineDays: number;
  latest: TransitPoint;
  avg7: number;
  series: TransitPoint[];
}

export interface TransitSnapshot {
  fetchedAt: string;
  latestDate: string;
  baselineWindow: { from: string; to: string };
  source: { publisher: string; dataset: string; url: string; method: string; terms: string; note: string };
  chokepoints: Record<string, ChokepointTransits>;
}

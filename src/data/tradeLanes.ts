/**
 * Schematic main trade lanes between Asia, Europe and Latin America and the Caribbean (LAC).
 * The waypoints are hand-set approximations of common liner and bulk routings. They are NOT survey
 * data and not AIS tracks: no global open shipping-lane geodata exists on ArcGIS (the NOAA layers
 * cover US waters only). The lanes therefore illustrate corridors, not exact courses.
 */
export type ShipClass = 'container' | 'bulk' | 'tanker' | 'car';

export interface TradeLane {
  id: string;
  name: string;
  group: 'asia-lac' | 'europe-lac' | 'link';
  /** [longitude, latitude] waypoints, all on open water (canal crossings excepted). */
  waypoints: [number, number][];
  /** Symbolic ship count under normal conditions. */
  baseShips: number;
  /** Share of ship classes shown on this lane (weights). */
  mix: Partial<Record<ShipClass, number>>;
  /** Chokepoint whose current PortWatch transit ratio scales the symbolic ship count. */
  gate?: string;
  note: string;
}

const SHANGHAI: [number, number] = [122.6, 30.6];
const SINGAPORE: [number, number] = [104.0, 1.2];
const PANAMA_PAC: [number, number] = [-79.5, 8.6];
const COLON: [number, number] = [-79.9, 9.6];

export const tradeLanes: TradeLane[] = [
  {
    id: 'asia-pacific-andes',
    name: 'East Asia to the Pacific coast of South America (Ecuador, Peru, Chile)',
    group: 'asia-lac',
    waypoints: [SHANGHAI, [127, 28], [145, 26], [-175, 22], [-150, 10], [-120, -2], [-95, -6], [-81.2, -3.0]],
    baseShips: 9,
    mix: { container: 5, bulk: 3, car: 1 },
    note: 'Trans-Pacific corridor for Chinese, Korean and Japanese exports (machinery, vehicles, consumer goods) and for copper, fishmeal and fruit on the return leg.',
  },
  {
    id: 'peru-chile-coast',
    name: 'Pacific coast of South America (Guayaquil to Callao and San Antonio)',
    group: 'asia-lac',
    waypoints: [[-81.2, -3.0], [-82, -6], [-80, -9.5], [-77.5, -12.1], [-76.5, -18], [-73.5, -30], [-72.0, -33.4]],
    baseShips: 5,
    mix: { container: 3, bulk: 2 },
    note: 'Coastal feeder corridor along Ecuador, Peru and Chile.',
  },
  {
    id: 'asia-mexico-pacific',
    name: 'East Asia to the Mexican Pacific coast (Manzanillo, Lázaro Cárdenas)',
    group: 'asia-lac',
    waypoints: [SHANGHAI, [127, 28], [145, 26], [-175, 22], [-140, 17], [-110, 14], [-103.4, 17.6]],
    baseShips: 6,
    mix: { container: 5, car: 2, bulk: 1 },
    note: 'Main entry for Asian consumer goods, components and vehicles into Mexico.',
  },
  {
    id: 'asia-panama',
    name: 'East Asia via the Panama Canal to the Caribbean and Gulf of Mexico',
    group: 'asia-lac',
    waypoints: [
      SHANGHAI, [127, 28], [145, 26], [-175, 22], [-140, 12], [-110, 6], [-90, 6.5], PANAMA_PAC, COLON,
      [-76.0, 10.7],
    ],
    baseShips: 6,
    mix: { container: 4, tanker: 2, bulk: 1 },
    gate: 'panama',
    note: 'Panama Canal route to Colombia’s Caribbean ports and onward. The symbolic ship count follows the current PortWatch transit ratio of the canal.',
  },
  {
    id: 'asia-brazil-cape',
    name: 'East Asia to Brazil via Malacca and the Cape of Good Hope',
    group: 'asia-lac',
    waypoints: [
      SHANGHAI, [122, 26.5], [119.5, 23.5], [117, 18], [112, 10], SINGAPORE, [102.5, 2.0], [100, 3.6], [97.5, 5.8],
      [93, 3.5], [85, -2], [70, -15], [50, -28], [30, -36.5], [18, -37.5], [0, -34], [-25, -30], [-40, -26], [-45.5, -24.6],
    ],
    baseShips: 11,
    mix: { bulk: 6, tanker: 3, container: 2 },
    gate: 'malacca',
    note: 'Iron ore, soy and crude oil from Brazil to China; manufactured goods on the return leg. Passes the Malacca Strait.',
  },
  {
    id: 'europe-brazil',
    name: 'Europe to Brazil (Rotterdam to Santos)',
    group: 'europe-lac',
    waypoints: [
      [4.0, 52.0], [1.8, 51.0], [-2, 49.5], [-6.5, 47.5], [-10.5, 43.5], [-12.5, 37], [-20, 27], [-28, 11], [-31, -2],
      [-33, -8], [-36, -15], [-40, -22], [-45.5, -24.6],
    ],
    baseShips: 9,
    mix: { container: 5, tanker: 2, bulk: 2 },
    note: 'Main Atlantic corridor; relevant for the EU-Mercosur trade relationship, agricultural goods, chemicals and machinery.',
  },
  {
    id: 'europe-caribbean',
    name: 'Europe to the Caribbean and Colombia (Rotterdam to Cartagena)',
    group: 'europe-lac',
    waypoints: [
      [4.0, 52.0], [1.8, 51.0], [-2, 49.5], [-7, 46.5], [-25, 39], [-45, 28], [-62, 20], [-63.9, 18.0], [-68, 15.5], [-73, 13],
      [-76.0, 10.7],
    ],
    baseShips: 7,
    mix: { container: 4, tanker: 2, bulk: 1 },
    note: 'North Atlantic route to Caribbean ports; links to the Panama Canal at Colón.',
  },
  {
    id: 'europe-mexico-gulf',
    name: 'Europe to the Gulf of Mexico (Veracruz)',
    group: 'europe-lac',
    waypoints: [
      [4.0, 52.0], [1.8, 51.0], [-2, 49.5], [-7, 46.5], [-25, 40], [-50, 33], [-70, 29.5], [-79.4, 27.0], [-79.8, 24.8], [-81.5, 23.8],
      [-85, 24.2], [-88, 23], [-92, 21.8], [-95.7, 19.7],
    ],
    baseShips: 4,
    mix: { container: 3, tanker: 2, car: 1 },
    note: 'Via the Straits of Florida into the Gulf of Mexico.',
  },
  {
    id: 'europe-panama-pacific',
    name: 'Europe via the Panama Canal to the Pacific coast of South America',
    group: 'europe-lac',
    waypoints: [
      [-76.0, 10.7], COLON, PANAMA_PAC, [-80.8, 5.5], [-82, -1], [-81.2, -3.0],
    ],
    baseShips: 4,
    mix: { container: 3, tanker: 2 },
    gate: 'panama',
    note: 'Transit from the Atlantic to Ecuador and Peru through the Panama Canal; the ship count follows the PortWatch ratio.',
  },
];

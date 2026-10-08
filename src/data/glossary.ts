/**
 * Glossary of abbreviations used in the dashboard. Each entry: full name and a
 * one-sentence explanation. Matching is case-sensitive and on whole words, so
 * add entries exactly as they appear in the texts.
 */
export interface GlossaryEntry {
  full: string;
  note?: string;
}

export const GLOSSARY: Record<string, GlossaryEntry> = {
  // Media and other names that appear in citations
  AFP: { full: 'Agence France-Presse', note: 'French news agency.' },
  AP: { full: 'Associated Press', note: 'US news agency.' },
  CNBC: { full: 'Consumer News and Business Channel', note: 'US business news network.' },
  CNN: { full: 'Cable News Network' },
  EFE: { full: 'Agencia EFE', note: 'Spanish international news agency.' },
  PBS: { full: 'Public Broadcasting Service', note: 'US public broadcaster.' },
  RPP: { full: 'Radioprogramas del Perú', note: 'Peruvian broadcaster.' },
  'RFE/RL': { full: 'Radio Free Europe/Radio Liberty', note: 'US-funded broadcaster covering Eastern Europe and Central Asia.' },
  'S&P': { full: 'S&P Global', note: 'Financial data and commodity price reporting company.' },
  MUFG: { full: 'Mitsubishi UFJ Financial Group', note: 'Japanese bank; its research unit publishes economic analysis.' },
  DGAC: { full: 'Dirección General de Aeronáutica Civil (Chile)', note: 'Chilean civil aviation authority, to which the weather service DMC belongs.' },
  ACH: { full: 'Acción contra el Hambre', note: 'Action Against Hunger, humanitarian NGO.' },
  SEA: { full: 'Southeast Asia' },
  AI: { full: 'Artificial intelligence' },
  QR: { full: 'Quick Response code', note: 'Scannable code; used in fuel rationing systems to track quotas per vehicle.' },
  TTF: { full: 'Title Transfer Facility', note: 'Dutch gas trading hub whose price is the European benchmark.' },
  NE: { full: 'North-eastern' },
  Q2: { full: 'Second quarter of the year' },

  CGTN: { full: 'China Global Television Network', note: 'Chinese state broadcaster.' },
  UNB: { full: 'United News of Bangladesh', note: 'Bangladeshi news agency.' },
  UNI: { full: 'United News of India', note: 'Indian news agency.' },
  AIR: { full: 'All India Radio', note: 'Indian public radio broadcaster.' },
  DW: { full: 'Deutsche Welle', note: 'German international broadcaster.' },

  // Organisations
  ADB: { full: 'Asian Development Bank', note: 'Multilateral development bank for Asia and the Pacific, based in Manila.' },
  ADNOC: { full: 'Abu Dhabi National Oil Company', note: 'State oil and gas company of the UAE.' },
  ASEAN: { full: 'Association of Southeast Asian Nations', note: 'Regional organisation of eleven Southeast Asian states.' },
  CASE: { full: 'Clean, Affordable and Secure Energy for Southeast Asia', note: 'Regional energy transition programme; publishes the CASE for Southeast Asia analyses.' },
  CEPAL: { full: 'Comisión Económica para América Latina y el Caribe (ECLAC)', note: 'UN Economic Commission for Latin America and the Caribbean, based in Santiago de Chile.' },
  ECLAC: { full: 'Economic Commission for Latin America and the Caribbean', note: 'English name of CEPAL.' },
  CIMH: { full: 'Caribbean Institute for Meteorology and Hydrology', note: 'Regional climate centre for the Caribbean; issues drought bulletins and seasonal outlooks.' },
  CPC: { full: 'Climate Prediction Center', note: 'NOAA centre that issues the official US El Niño advisories.' },
  CSIS: { full: 'Center for Strategic and International Studies', note: 'Think tank in Washington, D.C.' },
  DMC: { full: 'Dirección Meteorológica de Chile', note: 'Chilean national weather service.' },
  DOST: { full: 'Department of Science and Technology (Philippines)', note: 'Parent department of the weather service PAGASA.' },
  ENFEN: { full: 'Estudio Nacional del Fenómeno El Niño', note: 'Peruvian multisectoral commission that monitors and forecasts the coastal El Niño.' },
  EPRA: { full: 'Energy and Petroleum Regulatory Authority (Kenya)', note: 'Sets maximum fuel pump prices in Kenya every month.' },
  EU: { full: 'European Union' },
  FAO: { full: 'Food and Agriculture Organization of the United Nations', note: 'UN agency for food security and agriculture, based in Rome.' },
  'FEWS NET': { full: 'Famine Early Warning Systems Network', note: 'USAID-funded early warning network for food insecurity.' },
  GFDL: { full: 'Geophysical Fluid Dynamics Laboratory', note: 'NOAA laboratory that runs climate forecast models.' },
  GHACOF: { full: 'Greater Horn of Africa Climate Outlook Forum', note: 'Regional forum where ICPAC and national services agree the seasonal outlook.' },
  GIZ: { full: 'Deutsche Gesellschaft für Internationale Zusammenarbeit', note: 'German federal enterprise for international cooperation.' },
  ICPAC: { full: 'IGAD Climate Prediction and Applications Centre', note: 'Regional climate centre for the Greater Horn of Africa, based in Nairobi.' },
  IEA: { full: 'International Energy Agency', note: 'Paris-based agency of 32 member countries; coordinates emergency oil stock releases.' },
  IFPRI: { full: 'International Food Policy Research Institute', note: 'Research institute on food policy, based in Washington, D.C.' },
  IFRC: { full: 'International Federation of Red Cross and Red Crescent Societies' },
  IGAD: { full: 'Intergovernmental Authority on Development', note: 'Regional organisation of eight East African states.' },
  IMD: { full: 'India Meteorological Department', note: 'National weather service of India; issues the monsoon forecasts.' },
  IMF: { full: 'International Monetary Fund' },
  IMO: { full: 'International Maritime Organization', note: 'UN agency for shipping safety and seafarers.' },
  INAMHI: { full: 'Instituto Nacional de Meteorología e Hidrología (Ecuador)', note: 'Ecuadorian national weather and hydrology service.' },
  INFORM: { full: 'INFORM Risk Index', note: 'Quantitative humanitarian risk index by the EU Joint Research Centre and partners.' },
  IRGC: { full: 'Islamic Revolutionary Guard Corps', note: "Branch of Iran's armed forces; its navy controls transit in the strait." },
  IRI: { full: 'International Research Institute for Climate and Society', note: 'Climate research institute at Columbia University; publishes ENSO forecasts.' },
  JMIC: { full: 'Joint Maritime Information Center', note: 'US Navy-led centre that issues maritime security advisories for the region.' },
  NOAA: { full: 'National Oceanic and Atmospheric Administration', note: 'US agency for weather, oceans and climate.' },
  OECD: { full: 'Organisation for Economic Co-operation and Development' },
  OPEC: { full: 'Organization of the Petroleum Exporting Countries', note: 'OPEC+ also includes Russia and other producers.' },
  PAGASA: { full: 'Philippine Atmospheric, Geophysical and Astronomical Services Administration', note: 'National weather service of the Philippines.' },
  SMN: { full: 'Servicio Meteorológico Nacional (Argentina)', note: 'Argentine national weather service.' },
  STO: { full: 'State Trading Organisation (Maldives)', note: 'State company that imports and sells fuel in the Maldives.' },
  UKMTO: { full: 'United Kingdom Maritime Trade Operations', note: 'Royal Navy centre that receives reports of incidents against shipping.' },
  UN: { full: 'United Nations' },
  UNDP: { full: 'United Nations Development Programme' },
  WFP: { full: 'World Food Programme', note: 'UN agency for food assistance.' },
  WMO: { full: 'World Meteorological Organization', note: 'UN agency for weather, climate and water.' },
  XM: { full: 'XM S.A. E.S.P.', note: "Operator of Colombia's power grid and wholesale electricity market." },

  // Countries and groupings
  GCC: { full: 'Gulf Cooperation Council', note: 'Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the United Arab Emirates.' },
  UAE: { full: 'United Arab Emirates' },
  US: { full: 'United States' },
  PDR: { full: "People's Democratic Republic", note: 'Part of the official name of Lao PDR.' },
  ABC: { full: 'Aruba, Bonaire and Curaçao', note: 'The "ABC Islands" in the southern Caribbean.' },

  UNHCR: { full: 'United Nations High Commissioner for Refugees' },
  USDA: { full: 'United States Department of Agriculture' },
  GIEWS: { full: 'Global Information and Early Warning System on Food and Agriculture', note: 'FAO monitoring system for food supply and crop conditions.' },
  IDEAM: { full: 'Instituto de Hidrología, Meteorología y Estudios Ambientales', note: 'Colombia’s national weather and environmental agency.' },
  SENAMHI: { full: 'Servicio Nacional de Meteorología e Hidrología', note: 'National weather and hydrology service of Peru and Bolivia.' },
  ONS: { full: 'Operador Nacional do Sistema Elétrico', note: 'Brazil’s national electricity system operator.' },
  UPME: { full: 'Unidad de Planeación Minero Energética', note: 'Colombia’s mining and energy planning unit.' },
  CREG: { full: 'Comisión de Regulación de Energía y Gas', note: 'Colombia’s energy and gas regulator.' },
  ONGC: { full: 'Oil and Natural Gas Corporation', note: 'India’s state-owned oil and gas producer.' },
  AMRO: { full: 'ASEAN+3 Macroeconomic Research Office', note: 'Regional macroeconomic surveillance institution of the ASEAN member states plus China, Japan and Korea.' },
  EBRD: { full: 'European Bank for Reconstruction and Development' },
  YPFB: { full: 'Yacimientos Petrolíferos Fiscales Bolivianos', note: 'Bolivian state oil and gas company.' },
  ACPM: { full: 'Aceite Combustible para Motores', note: 'Colombian term for diesel fuel.' },
  Andesco: { full: 'Asociación Nacional de Empresas de Servicios Públicos y Comunicaciones', note: 'Colombian association of utility and communications companies.' },
  BTU: { full: 'British thermal unit', note: 'Energy unit used to price LNG (per million BTU).' },
  'AI-92': { full: 'Gasoline grade with octane rating 92', note: 'Russian and Central Asian designation for 92-octane gasoline.' },
  Rs: { full: 'Rupees', note: 'Currency of Nepal, Pakistan, India and Sri Lanka; the country is given by the text.' },
  Tk: { full: 'Bangladeshi taka' },
  MNT: { full: 'Mongolian tugrik' },
  COP: { full: 'Colombian peso' },
  KPL: { full: 'Lao News Agency (Khaosan Pathet Lao)', note: 'State news agency of Lao PDR.' },

  BMKG: { full: 'Badan Meteorologi, Klimatologi, dan Geofisika', note: 'Indonesian meteorological, climatological and geophysical agency.' },
  PTT: { full: 'PTT Public Company Limited', note: 'Thai state-controlled energy company.' },
  PTTEP: { full: 'PTT Exploration and Production', note: 'Oil and gas exploration subsidiary of PTT.' },
  MMBtu: { full: 'Million British thermal units', note: 'Price unit for LNG.' },
  G7: { full: 'Group of Seven', note: 'Canada, France, Germany, Italy, Japan, the United Kingdom and the United States.' },
  'POWERR Asia': { full: 'Partnership On Wide Energy and Resources Resilience for Asia', note: 'Japanese-led energy security initiative for Asia.' },
  SDR: { full: 'Special Drawing Rights', note: 'International reserve asset of the IMF.' },
  BUDI95: { full: 'Budi Madani RON95', note: 'Malaysian targeted RON95 petrol subsidy programme at RM1.99 per litre.' },
  CBSL: { full: 'Central Bank of Sri Lanka' },
  MetMalaysia: { full: 'Malaysian Meteorological Department' },
  INMET: { full: 'Instituto Nacional de Meteorologia', note: 'Brazilian national meteorological institute.' },
  COPECO: { full: 'Comisión Permanente de Contingencias', note: 'Honduran national risk and contingency agency.' },
  INSMET: { full: 'Instituto de Meteorología de Cuba', note: 'Cuban national meteorological institute.' },
  UNE: { full: 'Unión Eléctrica', note: 'Cuban state electricity utility.' },
  'OPEC+': { full: 'OPEC and allied producers', note: 'OPEC members plus Russia and other producers.' },
  WAM: { full: 'Emirates News Agency', note: 'State news agency of the UAE.' },
  SAR: { full: 'Saudi riyal' },
  QAR: { full: 'Qatari riyal' },
  KD: { full: 'Kuwaiti dinar' },
  ENOC: { full: 'Emirates National Oil Company', note: 'Dubai-based state oil company.' },
  INES: { full: 'Initiative Energien Speichern', note: 'German association of gas storage operators.' },
  Rp: { full: 'Indonesian rupiah' },
  'R$': { full: 'Brazilian real' },

  // Climate
  ENSO: { full: 'El Niño-Southern Oscillation', note: 'Natural climate cycle of the tropical Pacific with warm (El Niño) and cold (La Niña) phases.' },
  RONI: { full: 'Relative Oceanic Niño Index', note: "NOAA's official El Niño index since 2026; removes the general ocean warming trend." },
  SOI: { full: 'Southern Oscillation Index', note: 'Air pressure difference between Tahiti and Darwin; strongly negative values indicate El Niño.' },
  SST: { full: 'Sea surface temperature' },
  LPA: { full: 'Long period average', note: 'Reference rainfall average used by IMD (1971-2020, about 869 mm for the monsoon).' },
  OND: { full: 'October-November-December', note: 'The "short rains" season in East Africa.' },
  Boro: { full: 'Boro rice season', note: 'Main irrigated dry-season rice crop in Bangladesh.' },
  IPC: { full: 'Integrated Food Security Phase Classification', note: 'Five-phase scale of food insecurity; Phase 3 = crisis, 4 = emergency, 5 = famine.' },

  // Energy and shipping
  AIS: { full: 'Automatic Identification System', note: 'Radio transponder system through which ships broadcast position and identity; can be switched off.' },
  GNSS: { full: 'Global Navigation Satellite System', note: 'GPS and similar systems; jamming or spoofing makes reported positions unreliable.' },
  LNG: { full: 'Liquefied natural gas', note: 'Natural gas cooled to liquid form for shipping by tanker.' },
  LPG: { full: 'Liquefied petroleum gas', note: 'Propane and butane, widely used for cooking.' },
  VLCC: { full: 'Very large crude carrier', note: 'Tanker carrying about two million barrels of crude oil.' },
  TEU: { full: 'Twenty-foot equivalent unit', note: 'Standard measure of container volume.' },
  MMSI: { full: 'Maritime Mobile Service Identity', note: 'Nine-digit number that identifies a ship in AIS.' },
  'mb/d': { full: 'Million barrels per day' },
  kb: { full: 'Thousand barrels' },
  bcm: { full: 'Billion cubic metres', note: 'Unit for natural gas volumes.' },
  kn: { full: 'Knots', note: 'Nautical miles per hour (1 kn = 1.852 km/h).' },
  MW: { full: 'Megawatt' },
  GWh: { full: 'Gigawatt hour' },
  RON95: { full: 'Research Octane Number 95', note: 'Standard petrol grade; subsidised in Malaysia.' },
  B50: { full: 'Biodiesel blend with 50 percent biodiesel', note: "Indonesia's palm-oil-based blending mandate." },
  E10: { full: 'Petrol with 10 percent ethanol' },
  IEPS: { full: 'Impuesto Especial sobre Producción y Servicios', note: 'Mexican excise tax on fuels, reduced to cap pump prices.' },
  FEPC: { full: 'Fondo de Estabilización de Precios de los Combustibles', note: 'Fuel price stabilisation fund (Colombia, Peru).' },
  PortWatch: { full: 'IMF PortWatch', note: 'IMF and University of Oxford platform estimating port calls and chokepoint transits from satellite AIS data.' },

  // Economics
  GDP: { full: 'Gross domestic product' },
  VAT: { full: 'Value added tax' },
  pp: { full: 'Percentage points' },
  USD: { full: 'US dollar' },
  EUR: { full: 'Euro' },
  KSh: { full: 'Kenyan shilling' },
  NPR: { full: 'Nepalese rupee' },
  KHR: { full: 'Cambodian riel' },
  LAK: { full: 'Lao kip' },
  MVR: { full: 'Maldivian rufiyaa' },
  RD$: { full: 'Dominican peso' },
  RM: { full: 'Malaysian ringgit' },
  'J$': { full: 'Jamaican dollar' },
};

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Longest keys first so "FEWS NET" wins over shorter overlaps. */
const KEYS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

/**
 * Whole-word matcher. Word boundaries are emulated with lookarounds because
 * some keys contain "$" or "/", where \b does not work. A following digit is
 * allowed so that amounts such as "RM24" or "USD 4" still match the currency.
 */
export const GLOSSARY_PATTERN = new RegExp(`(?<![A-Za-z0-9])(${KEYS.map(escape).join('|')})(?![A-Za-z])`, 'g');

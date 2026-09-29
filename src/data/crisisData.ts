import type { CrisisDataset, CountryProfile, Iso3, RegionId } from '../types/crisis';

/**
 * Crisis Room dataset.
 *
 * Status: 29 September 2026. Every finding references at least one entry in
 * `sources`. Values marked `preliminary` are in-season figures, single-source
 * reports or figures awaiting official revision. Risk levels are editorial
 * judgements derived from the cited findings, not a computed index.
 *
 * Countries that are not listed are shown on the map as "not assessed". This is
 * deliberately distinct from "minimal direct impact", which is only assigned
 * when a sourced assessment supports it.
 */

const sources: CrisisDataset['sources'] = {
  // Climate: El Niño 2026-27
  'noaa-cpc': {
    id: 'noaa-cpc',
    tag: '[NOAA CPC, Sep 2026]',
    publisher: 'NOAA Climate Prediction Center',
    title: 'ENSO Diagnostic Discussion (El Niño Advisory), 10 September 2026',
    url: 'https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml',
    date: '2026-09-10',
    type: 'official',
  },
  iri: {
    id: 'iri',
    tag: '[IRI Columbia, Sep 2026]',
    publisher: 'International Research Institute for Climate and Society',
    title: 'ENSO Forecast: September 2026 Quick Look',
    url: 'https://iri.columbia.edu/our-expertise/climate/forecasts/enso/current/',
    date: '2026-09-19',
    type: 'research',
  },
  'ap-asia': {
    id: 'ap-asia',
    tag: '[AP / PBS, Sep 2026]',
    publisher: 'Associated Press via PBS NewsHour',
    title: 'Worsening El Niño threatens Asia with severe drought, potentially threatening global food security',
    url: 'https://www.pbs.org/newshour/science/worsening-el-nino-threatens-asia-with-severe-drought-potentially-threatening-global-food-security',
    date: '2026-09-26',
    type: 'news',
  },
  helios: {
    id: 'helios',
    tag: '[Helios AI, Sep 2026]',
    publisher: 'Helios AI (commercial crop-risk analytics)',
    title: "El Niño and Asia's rice supply: what the 2026 season looks like from the field",
    url: 'https://www.helios.sc/blog/el-nio-and-asias-rice-supply-what-the-2026-season-looks-like-from-the-field',
    date: '2026-09-04',
    type: 'industry',
  },
  'pagasa-225': {
    id: 'pagasa-225',
    tag: '[DOST-PAGASA, 23 Sep 2026]',
    publisher: 'DOST-PAGASA',
    title: "Climate Advisory: DOST-PAGASA warns of intensifying 'very strong' El Niño persisting into first half of 2027",
    url: 'https://pagasa.dost.gov.ph/press-release/225',
    date: '2026-09-23',
    type: 'official',
  },
  'inquirer-pagasa': {
    id: 'inquirer-pagasa',
    tag: '[Inquirer, Sep 2026]',
    publisher: 'Philippine Daily Inquirer',
    title: "'Very strong El Niño' to persist in PH until early 2027 – Pagasa",
    url: 'https://newsinfo.inquirer.net/2310447/very-strong-el-nino-to-persist-in-ph-until-early-2027-pagasa',
    date: '2026-09-24',
    type: 'news',
  },
  'bworld-85': {
    id: 'bworld-85',
    tag: '[BusinessWorld, 24 Sep 2026]',
    publisher: 'BusinessWorld',
    title: 'Drought, dry spell likely to hit 85 provinces until March 2027 amid El Niño – PAGASA',
    url: 'https://bworldonline.com/economy/2026/09/24/781121/drought-dry-spell-likely-to-hit-85-provinces-until-march-2027-amid-el-nino-pagasa/',
    date: '2026-09-24',
    type: 'news',
  },
  'bloomberg-idn': {
    id: 'bloomberg-idn',
    tag: '[Bloomberg, Sep 2026]',
    publisher: 'Bloomberg',
    title: "Indonesia's worst wildfires in years tested by Prabowo budget cuts and El Niño",
    url: 'https://www.bloomberg.com/graphics/2026-indonesia-wildfires-el-nino/',
    date: '2026-09-28',
    type: 'news',
  },
  'imd-dte': {
    id: 'imd-dte',
    tag: '[IMD via Down To Earth, May 2026]',
    publisher: 'Down To Earth (reporting IMD long-range forecast)',
    title: 'IMD revises monsoon forecast to 90% of LPA, 60% chance of deficient rainfall',
    url: 'https://www.downtoearth.org.in/climate-change/imd-revises-monsoon-forecast-to-90-of-lpa-60-chance-of-deficient-rainfall',
    date: '2026-05-29',
    type: 'news',
  },
  'india-deficit': {
    id: 'india-deficit',
    tag: '[Indian Masterminds, Aug 2026]',
    publisher: 'Indian Masterminds (reporting IMD data submitted to Parliament)',
    title: 'El Niño impacts 2026: southwest monsoon rainfall deficit reaches 12%',
    url: 'https://indianmasterminds.com/news/el-nino-2026-southwest-monsoon-rainfall-deficit-imd-forecast-223672/',
    date: '2026-08-12',
    type: 'news',
  },
  icpac: {
    id: 'icpac',
    tag: '[ICPAC GHACOF74, Aug 2026]',
    publisher: 'IGAD Climate Prediction and Applications Centre',
    title: 'Summary for Decision Makers: October to December 2026 season',
    url: 'https://www.icpac.net/publications/summary-for-decision-makers-october-to-december-2026-season/',
    date: '2026-08-18',
    type: 'intergovernmental',
  },
  'wmo-gha': {
    id: 'wmo-gha',
    tag: '[WMO, Aug 2026]',
    publisher: 'World Meteorological Organization',
    title: 'El Niño impacts Greater Horn of Africa',
    url: 'https://wmo.int/media/news/el-nino-impacts-greater-horn-of-africa',
    date: '2026-08-19',
    type: 'intergovernmental',
  },
  fewsnet: {
    id: 'fewsnet',
    tag: '[FEWS NET, Sep 2026]',
    publisher: 'Famine Early Warning Systems Network',
    title: 'East Africa Seasonal Monitor, September 2026',
    url: 'https://fews.net/east-africa/seasonal-monitor/september-2026',
    date: '2026-09-10',
    type: 'official',
  },
  'nation-ke': {
    id: 'nation-ke',
    tag: '[Daily Nation, Aug 2026]',
    publisher: 'Daily Nation (Nairobi)',
    title: 'Super El Niño: Kenya, Somalia, Ethiopia brace for torrential rains',
    url: 'https://nation.africa/kenya/climate/super-el-ni%C3%B1o-kenya-somalia-ethiopia-brace-for-torrential-rains-5564280',
    date: '2026-08-20',
    type: 'news',
  },

  // Energy: Strait of Hormuz crisis
  'wiki-hormuz': {
    id: 'wiki-hormuz',
    tag: '[Wikipedia compilation, Sep 2026]',
    publisher: 'Wikipedia (secondary compilation; primary references listed on page)',
    title: '2026 Strait of Hormuz crisis',
    url: 'https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis',
    date: '2026-09-29',
    type: 'reference',
  },
  'straits-0928': {
    id: 'straits-0928',
    tag: '[Straits / IMF PortWatch, 28 Sep 2026]',
    publisher: 'Straits daily brief (aggregating IMF PortWatch transit data)',
    title: 'Strait of Hormuz status: September 28, 2026',
    url: 'https://straits.live/briefs/2026-09-28',
    date: '2026-09-28',
    type: 'industry',
  },
  portwatch: {
    id: 'portwatch',
    tag: '[IMF PortWatch, daily]',
    publisher: 'IMF PortWatch (International Monetary Fund / University of Oxford)',
    title: 'Daily Chokepoint Transit Calls (satellite AIS estimates)',
    url: 'https://portwatch.imf.org/',
    date: '2026-09-27',
    type: 'intergovernmental',
  },
  'iea-release': {
    id: 'iea-release',
    tag: '[IEA, 11 Mar 2026]',
    publisher: 'International Energy Agency',
    title: 'IEA Member countries to carry out largest ever oil stock release amid market disruptions from Middle East conflict',
    url: 'https://www.iea.org/news/iea-member-countries-to-carry-out-largest-ever-oil-stock-release-amid-market-disruptions-from-middle-east-conflict',
    date: '2026-03-11',
    type: 'intergovernmental',
  },
  'iea-me': {
    id: 'iea-me',
    tag: '[IEA, Aug 2026]',
    publisher: 'International Energy Agency',
    title: 'The Middle East and Global Energy Markets',
    url: 'https://www.iea.org/topics/the-middle-east-and-global-energy-markets',
    date: '2026-08-12',
    type: 'intergovernmental',
  },
  'oilprice-qatar': {
    id: 'oilprice-qatar',
    tag: '[OilPrice.com / Reuters, Sep 2026]',
    publisher: 'OilPrice.com (citing Reuters and ICIS)',
    title: 'Qatar extends LNG force majeure as Hormuz crisis drags on',
    url: 'https://oilprice.com/Latest-Energy-News/World-News/Qatar-Extends-LNG-Force-Majeure-as-Hormuz-Crisis-Drags-On.html',
    date: '2026-09-28',
    type: 'news',
  },
  'aj-ewp': {
    id: 'aj-ewp',
    tag: '[Al Jazeera, 12 Sep 2026]',
    publisher: 'Al Jazeera',
    title: 'Saudi Arabia shuts critical oil pipeline after drone attack: What it means',
    url: 'https://www.aljazeera.com/news/2026/9/12/saudi-arabia-shuts-critical-oil-pipeline-after-drone-attack-what-happened',
    date: '2026-09-12',
    type: 'news',
  },
  'cnn-ewp': {
    id: 'cnn-ewp',
    tag: '[CNN, 14 Sep 2026]',
    publisher: 'CNN Business',
    title: 'Saudi Arabia has shut the East-West crude oil pipeline. Why does this matter?',
    url: 'https://www.cnn.com/2026/09/14/economy/saudi-east-west-pipeline-shut-oil-market',
    date: '2026-09-14',
    type: 'news',
  },
  'cdm-ewp': {
    id: 'cdm-ewp',
    tag: '[CDM citing Reuters, 22 Sep 2026]',
    publisher: 'CDM (citing Reuters sources)',
    title: 'Saudi Arabia restarts East-West oil pipeline; Yanbu exports set to resume',
    url: 'https://cdm.press/news/middle-east/2026/09/22/saudi-arabia-restarts-east-west-oil-pipeline-after-houthi-strikes-yanbu-exports-set-to-resume-tuesday/',
    date: '2026-09-22',
    type: 'news',
  },
  'fox-vn': {
    id: 'fox-vn',
    tag: '[Reuters via Fox News, 10 Mar 2026]',
    publisher: 'Fox News (Reuters wire, Petrolimex data)',
    title: 'Vietnam urges work from home amid fuel supply, price crunch',
    url: 'https://www.foxnews.com/world/vietnam-urges-work-from-home-amid-fuel-supply-price-crunch-mideast',
    date: '2026-03-10',
    type: 'news',
  },
  'mufg-vn': {
    id: 'mufg-vn',
    tag: '[MUFG Research, Mar 2026]',
    publisher: 'MUFG Research',
    title: 'Vietnam: Strait of Hormuz closure, oil and energy shortages key for VND',
    url: 'https://www.mufgresearch.com/fx/vietnam-strait-of-hormuz-closure-oil-and-energy-shortages-key-for-vnd-18-march-2026/',
    date: '2026-03-18',
    type: 'research',
  },
  caseforsea: {
    id: 'caseforsea',
    tag: '[CASE for SEA, Apr 2026]',
    publisher: 'CASE for Southeast Asia',
    title: 'Energy security in the shadow of geopolitical conflict: how CASE countries are navigating the 2026 fuel crisis',
    url: 'https://caseforsea.org/energy-security-in-the-shadow-of-war-how-case-countries-are-navigating-the-2026-fuel-crisis/',
    date: '2026-04-07',
    type: 'research',
  },
  'spg-thai': {
    id: 'spg-thai',
    tag: '[S&P Global, 2 Mar 2026]',
    publisher: 'S&P Global Commodity Insights',
    title: 'Thailand suspends oil exports, tightens monitoring amid Middle East conflict',
    url: 'https://www.spglobal.com/energy/en/news-research/latest-news/agriculture/030226-thailand-suspends-oil-exports-tightens-monitoring-amid-middle-east-conflict',
    date: '2026-03-02',
    type: 'industry',
  },
  'aj-sea': {
    id: 'aj-sea',
    tag: '[Al Jazeera, 12 Mar 2026]',
    publisher: 'Al Jazeera',
    title: 'Southeast Asia shuts offices, limits travel as oil crisis deepens',
    url: 'https://www.aljazeera.com/news/2026/3/12/southeast-asia-shuts-offices-limits-travel-as-oil-crisis-deepens',
    date: '2026-03-12',
    type: 'news',
  },
  'malaymail-thai': {
    id: 'malaymail-thai',
    tag: '[AFP via Malay Mail, 28 Mar 2026]',
    publisher: 'Malay Mail (AFP wire)',
    title: 'Thai PM says reached deal with Iran for vessels to transit Hormuz Strait',
    url: 'https://www.malaymail.com/news/world/2026/03/28/thai-pm-says-reached-deal-with-iran-for-vessels-to-transit-hormuz-strait/214222',
    date: '2026-03-28',
    type: 'news',
  },
  'wiki-ph': {
    id: 'wiki-ph',
    tag: '[Wikipedia compilation, Sep 2026]',
    publisher: 'Wikipedia (secondary compilation; primary references listed on page)',
    title: '2026 Philippine energy crisis',
    url: 'https://en.wikipedia.org/wiki/2026_Philippine_energy_crisis',
    date: '2026-09-29',
    type: 'reference',
  },
  'mongabay-idn': {
    id: 'mongabay-idn',
    tag: '[Mongabay, Apr 2026]',
    publisher: 'Mongabay',
    title: 'Oil surge sharpens calls for Indonesia to shift away from fossil fuels',
    url: 'https://news.mongabay.com/2026/04/oil-surge-sharpens-calls-for-indonesia-to-shift-away-from-fossil-fuels/',
    date: '2026-04-01',
    type: 'news',
  },
  'fortune-asia': {
    id: 'fortune-asia',
    tag: '[Fortune, 11 Mar 2026]',
    publisher: 'Fortune',
    title: 'Asia rolls out four-day weeks and work-from-home as emergency measures to solve a fuel crisis caused by Iran war',
    url: 'https://fortune.com/2026/03/11/iran-war-fuel-crisis-asia-work-from-home-closed-schools-price-caps',
    date: '2026-03-11',
    type: 'news',
  },
  'kws-may': {
    id: 'kws-may',
    tag: '[Kenyan Wallstreet, 14 May 2026]',
    publisher: 'The Kenyan Wallstreet (reporting EPRA pricing review)',
    title: 'Diesel hits record KSh 242.92 in Kenya May-June 2026 cycle',
    url: 'https://kenyanwallstreet.com/fuel-price-may-cycle-epra-2026',
    date: '2026-05-14',
    type: 'news',
  },
  'kws-apr': {
    id: 'kws-apr',
    tag: '[Kenyan Wallstreet, 16 Apr 2026]',
    publisher: 'The Kenyan Wallstreet (reporting EPRA pricing review)',
    title: 'Kenya fuel prices rise: petrol KSh 206.97, diesel KSh 206.84',
    url: 'https://kenyanwallstreet.com/diesel-rises-highest-price-in-history',
    date: '2026-04-16',
    type: 'news',
  },
  'ifo-autumn': {
    id: 'ifo-autumn',
    tag: '[ifo Institute, 3 Sep 2026]',
    publisher: 'ifo Institute',
    title: 'ifo Economic Forecast Autumn 2026: Recovery forces gain the upper hand',
    url: 'https://www.ifo.de/en/facts/2026-09-03/ifo-economic-forecast-autumn-2026-recovery-forces-gain-upper-hand',
    date: '2026-09-03',
    type: 'research',
  },
  'cnbc-de': {
    id: 'cnbc-de',
    tag: '[CNBC, 24 Apr 2026]',
    publisher: 'CNBC',
    title: "Germany's economy was set to rebound. But soaring energy prices have derailed Europe's biggest comeback",
    url: 'https://www.cnbc.com/2026/04/24/germany-iran-defense-war-energy-oil-price-shock-industry-fiscal-stimulus-middle-east-europe-inflation-growth.html',
    date: '2026-04-24',
    type: 'news',
  },
};

const countryList: CountryProfile[] = [
  // Southeast Asia
  {
    iso3: 'VNM',
    isoNumeric: '704',
    name: 'Viet Nam',
    region: 'southeast-asia',
    status: 'dual',
    risk: 'high',
    riskRationale:
      'Import dependence on Gulf energy produced an early and sharp fuel price shock; a record planting-period drought now threatens a major rice export crop.',
    headline: 'Fuel price shock since March meets record planting-season drought in the rice sector.',
    environmental: [
      {
        text: 'Viet Nam is among the three largest rice exporters named as most likely to be hit hard by the 2026 El Niño.',
        sourceIds: ['ap-asia'],
        confidence: 'reported',
      },
      {
        text: 'Commercial crop monitoring reports the worst planting-period drought on record for Vietnamese rice this season (100th historical percentile).',
        sourceIds: ['helios'],
        confidence: 'preliminary',
      },
    ],
    energy: [
      {
        text: 'By 10 March, Petrolimex data showed gasoline prices up 32 percent, diesel up 56 percent and kerosene up 80 percent since the end of February.',
        sourceIds: ['fox-vn'],
        confidence: 'reported',
      },
      {
        text: 'MUFG estimated in March that the fuel price stabilisation fund would last only around 15 to 30 days at the then subsidy run-rate.',
        sourceIds: ['mufg-vn'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'The trade ministry urged businesses to let employees work from home and removed import tariffs on fuel through the end of April.',
        sourceIds: ['fox-vn'],
        confidence: 'reported',
      },
      {
        text: 'The government drew on its fuel price stabilisation fund and accelerated the E10 ethanol blending rollout.',
        sourceIds: ['aj-sea', 'caseforsea'],
        confidence: 'reported',
      },
    ],
    metrics: [
      { label: 'Diesel retail price change (end Feb to 10 Mar)', value: '+56%', sourceIds: ['fox-vn'], asOf: '2026-03-10' },
      { label: 'Kerosene retail price change (same period)', value: '+80%', sourceIds: ['fox-vn'], asOf: '2026-03-10' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'THA',
    isoNumeric: '764',
    name: 'Thailand',
    region: 'southeast-asia',
    status: 'dual',
    risk: 'high',
    riskRationale:
      'More than half of crude imports came from the Middle East at the start of the crisis; the main rice-growing north-east recorded its worst planting drought in eight seasons.',
    headline: 'Majority Middle East crude dependence and drought in the north-eastern rice belt.',
    environmental: [
      {
        text: 'Thailand is among the three largest rice exporters named as most likely to be hit hard by the 2026 El Niño.',
        sourceIds: ['ap-asia'],
        confidence: 'reported',
      },
      {
        text: 'North-eastern Thailand, about half of national rice output, recorded planting drought at the 100th percentile, the worst in eight seasons.',
        sourceIds: ['helios'],
        confidence: 'preliminary',
      },
    ],
    energy: [
      {
        text: 'The Middle East accounted for more than 51 percent of crude and condensate imports in early 2026; domestic oil reserves stood at about 38 days of consumption on 1 March.',
        sourceIds: ['spg-thai'],
        confidence: 'confirmed',
      },
    ],
    policy: [
      {
        text: 'The energy ministry suspended crude and product exports on 1 March, later allowing exports only to Cambodia and Laos.',
        sourceIds: ['spg-thai', 'aj-sea'],
        confidence: 'confirmed',
      },
      {
        text: 'The government introduced a temporary diesel price cap and on 28 March reported an agreement with Iran on safe passage for Thai oil vessels.',
        sourceIds: ['aj-sea', 'malaymail-thai'],
        confidence: 'reported',
      },
    ],
    metrics: [
      { label: 'Middle East share of crude imports (early 2026)', value: '>51%', sourceIds: ['spg-thai'], asOf: '2026-03-02' },
      { label: 'Domestic oil reserve cover', value: '~38 days', sourceIds: ['spg-thai'], asOf: '2026-03-01' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'PHL',
    isoNumeric: '608',
    name: 'Philippines',
    region: 'southeast-asia',
    status: 'dual',
    risk: 'critical',
    riskRationale:
      'Near-total oil dependence on the Middle East triggered the first national energy emergency of the crisis; PAGASA now expects drought or dry spells in most provinces until March 2027.',
    headline: 'First national energy emergency of the crisis, followed by a very strong El Niño drought outlook.',
    environmental: [
      {
        text: 'PAGASA expects a very strong El Niño between September and December 2026, persisting through the first half of 2027.',
        sourceIds: ['pagasa-225'],
        confidence: 'confirmed',
      },
      {
        text: 'Rainfall deficits were observed in 45 provinces by September; drought or dry spells are likely in 85 provinces until March 2027.',
        sourceIds: ['inquirer-pagasa', 'bworld-85'],
        confidence: 'reported',
      },
    ],
    energy: [
      {
        text: 'The Philippines imports about 98 percent of its oil from the Middle East.',
        sourceIds: ['wiki-ph'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'A state of national energy emergency was declared by executive order in late March 2026, the first such declaration by any country in this crisis.',
        sourceIds: ['wiki-ph'],
        confidence: 'reported',
      },
    ],
    metrics: [
      { label: 'Oil imports from the Middle East', value: '~98%', sourceIds: ['wiki-ph'], asOf: '2026-03-24' },
      { label: 'Provinces with drought or dry-spell outlook', value: '85', sourceIds: ['bworld-85'], asOf: '2026-09-24' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'IDN',
    isoNumeric: '360',
    name: 'Indonesia',
    region: 'southeast-asia',
    status: 'dual',
    risk: 'elevated',
    riskRationale:
      'Domestic production cushions the oil shock, but El Niño-driven peat fires and pressure on palm oil collide with the B50 biodiesel strategy chosen to cut import costs.',
    headline: 'Biodiesel response to the oil shock is exposed to El Niño pressure on palm oil.',
    environmental: [
      {
        text: 'The 2026 fire season is described as the worst in years, with transboundary haze reaching neighbouring countries.',
        sourceIds: ['bloomberg-idn'],
        confidence: 'reported',
      },
      {
        text: 'Indonesia and Malaysia supply about 85 percent of global palm oil, and both are exposed to the current El Niño.',
        sourceIds: ['ap-asia'],
        confidence: 'reported',
      },
    ],
    energy: [
      {
        text: 'Despite domestic production, Indonesia relies on imports for more than one third of its crude needs.',
        sourceIds: ['caseforsea'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'On 30 March the President confirmed the B50 biodiesel mandate to reduce fuel import costs; analysts warn El Niño may limit palm oil feedstock.',
        sourceIds: ['mongabay-idn'],
        confidence: 'reported',
      },
    ],
    metrics: [],
    lastReviewed: '2026-09-29',
  },

  // South Asia
  {
    iso3: 'IND',
    isoNumeric: '356',
    name: 'India',
    region: 'south-asia',
    status: 'dual',
    risk: 'high',
    riskRationale:
      'A below-normal monsoon affects rain-fed agriculture while seafarer casualties and supply insecurity drew India into naval escort operations.',
    headline: 'Below-normal monsoon and direct maritime exposure in the Gulf.',
    environmental: [
      {
        text: 'IMD revised its monsoon forecast in May to 90 percent of the long period average, with a 60 percent probability of a deficient season.',
        sourceIds: ['imd-dte'],
        confidence: 'confirmed',
      },
      {
        text: 'The cumulative monsoon deficit stood at about 12 percent in mid-August; the official end-of-season assessment is due in early October.',
        sourceIds: ['india-deficit'],
        confidence: 'preliminary',
      },
    ],
    energy: [
      {
        text: 'Indian seafarers are among the dead and injured in attacks on commercial ships near the strait.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
      {
        text: 'India was among five countries whose ships Iran announced would be allowed to transit on 26 March.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'The Indian Navy deployed warships under Operation Urja Suraksha to escort Indian-flagged vessels in the Gulf of Oman.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    metrics: [
      { label: 'IMD seasonal forecast', value: '90% of LPA', sourceIds: ['imd-dte'], asOf: '2026-05-29' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'PAK',
    isoNumeric: '586',
    name: 'Pakistan',
    region: 'south-asia',
    status: 'hormuz',
    risk: 'high',
    riskRationale:
      'High price sensitivity and limited fiscal space; demand-side rationing measures were adopted within the first two weeks.',
    headline: 'Early demand rationing and search for routes bypassing the strait.',
    environmental: [],
    energy: [
      {
        text: 'Pakistan asked Saudi Arabia on 4 March to reroute oil supplies through the Red Sea port of Yanbu.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'The government introduced a four-day week for government offices and closed schools to save fuel.',
        sourceIds: ['fortune-asia'],
        confidence: 'reported',
      },
    ],
    metrics: [],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'BGD',
    isoNumeric: '050',
    name: 'Bangladesh',
    region: 'south-asia',
    status: 'hormuz',
    risk: 'high',
    riskRationale: 'High price sensitivity; the government resorted to fuel rationing and closures early in the crisis.',
    headline: 'Fuel rationing and early closure of universities.',
    environmental: [],
    energy: [
      {
        text: 'The IEA lists Bangladesh among importers that are especially price sensitive to the LNG disruption.',
        sourceIds: ['iea-me'],
        confidence: 'preliminary',
      },
    ],
    policy: [
      {
        text: 'Bangladesh brought forward the Eid holiday, closed universities early and rationed fuel for most vehicles.',
        sourceIds: ['fortune-asia'],
        confidence: 'reported',
      },
    ],
    metrics: [],
    lastReviewed: '2026-09-29',
  },

  // East Asia
  {
    iso3: 'CHN',
    isoNumeric: '156',
    name: 'China',
    region: 'east-asia',
    status: 'hormuz',
    risk: 'elevated',
    riskRationale:
      'Large import exposure is partly buffered by substantial reserves and by selective transit permissions granted by Iran.',
    headline: 'Large exposure buffered by reserves and selective transit access.',
    environmental: [],
    energy: [
      {
        text: 'China received about one third of its oil via the strait and holds about one billion barrels in reserve, equal to a few months of supply.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'Iran announced on 26 March that ships owned by China, among others, would be allowed to transit.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    metrics: [],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'JPN',
    isoNumeric: '392',
    name: 'Japan',
    region: 'east-asia',
    status: 'hormuz',
    risk: 'elevated',
    riskRationale:
      'Very high structural dependence on Gulf crude, mitigated by IEA-coordinated stock releases.',
    headline: 'Very high Gulf crude dependence, mitigated by strategic stocks.',
    environmental: [],
    energy: [
      {
        text: 'Japanese refiners obtain about 95 percent of their crude from Saudi Arabia, Kuwait, the UAE and Qatar; about 70 percent of it passes the strait.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'Japan took part in the IEA collective action of 11 March to make 400 million barrels of emergency stocks available.',
        sourceIds: ['iea-release'],
        confidence: 'confirmed',
      },
    ],
    metrics: [],
    lastReviewed: '2026-09-29',
  },

  // Horn of Africa
  {
    iso3: 'KEN',
    isoNumeric: '404',
    name: 'Kenya',
    region: 'horn-of-africa',
    status: 'dual',
    risk: 'high',
    riskRationale:
      'Kenya imports all refined fuel and saw record pump prices; an above-normal short-rains season raises the risk of floods cutting transport links.',
    headline: 'Record fuel prices and a wetter-than-normal short-rains season.',
    environmental: [
      {
        text: 'ICPAC forecasts a 90 percent chance of enhanced October-December rainfall over north-eastern Kenya; totals above 400 mm are likely in parts of central Kenya and the Lake Victoria Basin.',
        sourceIds: ['icpac', 'wmo-gha'],
        confidence: 'confirmed',
      },
      {
        text: 'The government classified 18 counties as most vulnerable to above-normal rainfall.',
        sourceIds: ['nation-ke'],
        confidence: 'reported',
      },
    ],
    energy: [
      {
        text: 'Diesel reached a record KSh 242.92 per litre in Nairobi in the 15 May to 14 June pricing cycle, after a record KSh 40.30 monthly increase in April.',
        sourceIds: ['kws-may', 'kws-apr'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'VAT on petroleum products was cut from 16 to 13 percent in April and about KSh 6.2 billion from the Petroleum Development Levy Fund was used to stabilise pump prices.',
        sourceIds: ['kws-apr'],
        confidence: 'reported',
      },
      {
        text: 'The IMF lowered Kenya’s 2026 growth forecast to about 4.4 to 4.5 percent, citing fuel import costs.',
        sourceIds: ['kws-may'],
        confidence: 'reported',
      },
    ],
    metrics: [
      { label: 'Diesel, Nairobi (record, May cycle)', value: 'KSh 242.92/l', sourceIds: ['kws-may'], asOf: '2026-05-14' },
      { label: 'Probability of enhanced OND rain, NE Kenya', value: '90%', sourceIds: ['icpac'], asOf: '2026-08-18' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'SOM',
    isoNumeric: '706',
    name: 'Somalia',
    region: 'horn-of-africa',
    status: 'elnino',
    risk: 'high',
    riskRationale:
      'A very high probability of enhanced rains follows extreme deficits in the 2025 Deyr season, raising both flood risk and humanitarian pressure in a fragile context.',
    headline: 'Very high probability of enhanced Deyr rains after a failed 2025 season.',
    environmental: [
      {
        text: 'ICPAC gives a 90 percent chance of enhanced rainfall over central to southern Somalia; totals above 400 mm are likely in parts of the region.',
        sourceIds: ['icpac'],
        confidence: 'confirmed',
      },
      {
        text: 'FEWS NET expects an early onset in parts of southern Somalia, following extreme deficits in the October-December 2025 season.',
        sourceIds: ['fewsnet'],
        confidence: 'confirmed',
      },
    ],
    energy: [],
    policy: [],
    metrics: [
      { label: 'Probability of enhanced OND rain, C/S Somalia', value: '90%', sourceIds: ['icpac'], asOf: '2026-08-18' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'ETH',
    isoNumeric: '231',
    name: 'Ethiopia',
    region: 'horn-of-africa',
    status: 'elnino',
    risk: 'elevated',
    riskRationale:
      'Southern pastoral areas face flood risk, while enhanced rains may also regenerate pasture and water after a dry year.',
    headline: 'Enhanced rains in the south with both flood risk and pasture recovery.',
    environmental: [
      {
        text: 'ICPAC gives a 90 percent chance of enhanced October-December rainfall over southern Ethiopia.',
        sourceIds: ['icpac'],
        confidence: 'confirmed',
      },
      {
        text: 'FEWS NET expects the rains to support an early regeneration of deteriorating pasture and surface water.',
        sourceIds: ['fewsnet'],
        confidence: 'confirmed',
      },
    ],
    energy: [],
    policy: [],
    metrics: [],
    lastReviewed: '2026-09-29',
  },

  // European Union
  {
    iso3: 'DEU',
    isoNumeric: '276',
    name: 'Germany',
    region: 'european-union',
    status: 'hormuz',
    risk: 'elevated',
    riskRationale:
      'No material direct El Niño damage; exposure runs through energy import prices, inflation and energy-intensive industry, cushioned by fiscal expansion.',
    headline: 'Energy price shock absorbed by fiscal expansion; renewed pressure since July.',
    environmental: [
      {
        text: 'Rivers in Germany reached record low levels this summer, likely disrupting production in waterway-dependent sectors. The ifo Institute does not attribute this to El Niño.',
        sourceIds: ['ifo-autumn'],
        confidence: 'confirmed',
      },
    ],
    energy: [
      {
        text: 'Energy prices rose sharply again after the Iran war ceasefire ended in July; ifo names energy prices as the most significant forecast risk.',
        sourceIds: ['ifo-autumn'],
        confidence: 'confirmed',
      },
      {
        text: 'About 6 percent of German energy imports come from the Middle East; energy-intensive industries account for about 17 percent of industrial gross value added.',
        sourceIds: ['cnbc-de'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'The coalition agreed a two-month tax relief on petrol and diesel worth about EUR 1.6 billion in April.',
        sourceIds: ['cnbc-de'],
        confidence: 'reported',
      },
      {
        text: 'Germany ruled out military involvement in securing the strait in March and joined the 19 March joint statement of readiness to support efforts to reopen it.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    metrics: [
      { label: 'GDP growth forecast 2026 (ifo)', value: '1.4%', sourceIds: ['ifo-autumn'], asOf: '2026-09-03' },
      { label: 'Headline inflation 2026 / 2027 (ifo)', value: '2.8% / 3.0%', sourceIds: ['ifo-autumn'], asOf: '2026-09-03' },
    ],
    lastReviewed: '2026-09-29',
  },

  // Gulf
  {
    iso3: 'SAU',
    isoNumeric: '682',
    name: 'Saudi Arabia',
    region: 'gulf',
    status: 'hormuz',
    risk: 'high',
    riskRationale:
      'The East-West pipeline, the main bypass around the strait, was itself shut after drone strikes in September.',
    headline: 'Main bypass pipeline shut after drone strikes; partial restart reported.',
    environmental: [],
    energy: [
      {
        text: 'Saudi Arabia cut production from 10 to 8 million barrels per day on 13 March after two offshore fields were shut.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
      {
        text: 'The East-West pipeline to Yanbu was shut as a precaution on 11 September after drone strikes on pump stations.',
        sourceIds: ['aj-ewp', 'cnn-ewp'],
        confidence: 'confirmed',
      },
      {
        text: 'Flows reportedly resumed at a reduced rate around 22 September.',
        sourceIds: ['cdm-ewp'],
        confidence: 'preliminary',
      },
    ],
    policy: [],
    metrics: [],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'ARE',
    isoNumeric: '784',
    name: 'United Arab Emirates',
    region: 'gulf',
    status: 'hormuz',
    risk: 'high',
    riskRationale:
      'The Fujairah pipeline provides partial crude bypass, but container trade through Jebel Ali has collapsed.',
    headline: 'Partial crude bypass via Fujairah; container hub largely idle.',
    environmental: [],
    energy: [
      {
        text: 'The UAE diverted crude via the Abu Dhabi Crude Oil Pipeline to Fujairah on the Gulf of Oman.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
      {
        text: 'Jebel Ali handled 374,000 TEU in the second quarter of 2026, down 90.1 percent year on year.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [],
    metrics: [
      { label: 'Jebel Ali throughput Q2 2026 (y/y)', value: '-90.1%', sourceIds: ['wiki-hormuz'], asOf: '2026-08-01' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'QAT',
    isoNumeric: '634',
    name: 'Qatar',
    region: 'gulf',
    status: 'hormuz',
    risk: 'critical',
    riskRationale: 'LNG exports have almost ceased and force majeure has been extended repeatedly.',
    headline: 'LNG exports near standstill under extended force majeure.',
    environmental: [],
    energy: [
      {
        text: 'QatarEnergy declared force majeure in early March and has extended it for deliveries to Asia and Europe through the end of November.',
        sourceIds: ['oilprice-qatar', 'wiki-hormuz'],
        confidence: 'reported',
      },
      {
        text: 'Reuters calculated lost sales of USD 24 billion and export declines of up to 96 percent; 18 cargoes left against 509 a year earlier.',
        sourceIds: ['oilprice-qatar'],
        confidence: 'reported',
      },
    ],
    policy: [],
    metrics: [
      { label: 'LNG cargoes exported vs. prior-year period', value: '18 vs. 509', sourceIds: ['oilprice-qatar'], asOf: '2026-08-31' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'KWT',
    isoNumeric: '414',
    name: 'Kuwait',
    region: 'gulf',
    status: 'hormuz',
    risk: 'high',
    riskRationale: 'No bypass route exists; exports depend entirely on the strait.',
    headline: 'Force majeure and production cuts without a bypass route.',
    environmental: [],
    energy: [
      {
        text: 'Kuwait Petroleum Corporation declared force majeure on 7 March and cut production.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [],
    metrics: [],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'IRQ',
    isoNumeric: '368',
    name: 'Iraq',
    region: 'gulf',
    status: 'hormuz',
    risk: 'critical',
    riskRationale:
      'Southern production collapsed within days for lack of storage and export routes; the state budget depends on oil revenue.',
    headline: 'Southern oil output collapsed within the first week.',
    environmental: [],
    energy: [
      {
        text: 'Production at the three main southern fields fell from 4.3 to 1.3 million barrels per day by 8 March.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
      {
        text: 'Iraq declared force majeure on oilfields developed by foreign companies on 17 March.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [],
    metrics: [
      { label: 'Southern field output (pre-war to 8 Mar)', value: '4.3 to 1.3 mb/d', sourceIds: ['wiki-hormuz'], asOf: '2026-03-08' },
    ],
    lastReviewed: '2026-09-29',
  },
  {
    iso3: 'IRN',
    isoNumeric: '364',
    name: 'Iran',
    region: 'gulf',
    status: 'hormuz',
    risk: 'critical',
    riskRationale: 'Party to the armed conflict; controls transit through the strait under its own conditions.',
    headline: 'Party to the conflict; transit conditioned on its demands.',
    environmental: [],
    energy: [
      {
        text: 'Iran established a Persian Gulf Strait Authority on 5 May to authorise and regulate transit.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
    ],
    policy: [
      {
        text: 'A seven-day roadmap for a phased reopening in exchange for sanctions relief was reported rejected by the US President on 28 September; no agreement is in place.',
        sourceIds: ['straits-0928'],
        confidence: 'reported',
      },
    ],
    metrics: [],
    lastReviewed: '2026-09-29',
  },
];

const countries = Object.fromEntries(countryList.map((c) => [c.iso3, c])) as Record<Iso3, CountryProfile>;

const regions: CrisisDataset['regions'] = {
  'southeast-asia': {
    id: 'southeast-asia',
    name: 'Southeast Asia',
    risk: 'critical',
    outlook:
      'Southeast Asia faces both shocks at full strength. The fuel crisis since March has drawn down stabilisation funds and fiscal buffers, and governments now meet a very strong El Niño with less room to cushion food and water stress. Rice and palm oil are the transmission channels to global markets: Viet Nam and Thailand report record planting-period drought, while Indonesian peat fires and haze strain regional relations. The Philippines combines near-total Middle East oil dependence with a drought outlook for most provinces into March 2027. Stability risks rise where fuel and food inflation coincide, especially for households that depend on rain-fed farming or fuel-intensive transport. The outlook depends on whether the strait reopens before the El Niño peak expected around December.',
    stakeholderRecommendations: [
      'Pre-position drought response in rain-fed rice and maize areas before the expected El Niño peak in December.',
      'Coordinate rice export policy regionally to avoid simultaneous export restrictions, as seen in earlier supply shocks.',
      'Protect targeted fuel and transport support for low-income households instead of broad price caps that deplete stabilisation funds.',
      'Accelerate demand-side efficiency and domestic renewable generation that reduce exposure to imported fuel.',
    ],
    analystRecommendations: [
      'Track rice export prices and official export policy statements from Viet Nam and Thailand weekly.',
      'Monitor fuel stabilisation fund balances and subsidy costs as early indicators of fiscal stress.',
      'Verify commercial crop-monitoring figures against national statistics before external use.',
    ],
  },
  'south-asia': {
    id: 'south-asia',
    name: 'South Asia',
    risk: 'high',
    outlook:
      'South Asia is exposed through energy prices and, in India, through a below-normal monsoon. Pakistan and Bangladesh responded early with demand rationing, which signals limited fiscal room. India combines partial transit access with naval escort operations and a monsoon deficit whose final extent will be confirmed by IMD in early October. Food price pressure is the main channel through which the two shocks interact.',
    stakeholderRecommendations: [
      'Prepare contingency support for rain-fed farmers in monsoon-deficit districts once IMD publishes its final assessment.',
      'Link fuel support measures to transport and agricultural inputs, where price increases feed directly into food prices.',
      'Maintain fertiliser availability, as a large share of internationally traded fertiliser normally passes the strait.',
    ],
    analystRecommendations: [
      'Replace the preliminary monsoon deficit figure with the official IMD end-of-season value.',
      'Monitor transit permissions for South Asian flagged ships as an indicator of diplomatic exposure.',
    ],
  },
  'east-asia': {
    id: 'east-asia',
    name: 'East Asia',
    risk: 'elevated',
    outlook:
      'China and Japan carry large import exposure but have deeper buffers than most importers, through strategic stocks and, in China’s case, selective transit permissions. The regional risk lies less in physical shortage than in prolonged price pressure and in competition for alternative supply, which raises costs for more vulnerable importers elsewhere in Asia.',
    stakeholderRecommendations: [
      'Coordinate stock release timing with IEA partners to avoid depleting reserves before the winter heating season.',
      'Support diversification of LNG supply contracts, given the extended Qatari force majeure.',
    ],
    analystRecommendations: [
      'Track remaining strategic stock levels and the pace of IEA collective action deliveries.',
      'Assess how selective transit permissions change relative competitiveness in Asian refining.',
    ],
  },
  'horn-of-africa': {
    id: 'horn-of-africa',
    name: 'Horn of Africa',
    risk: 'high',
    outlook:
      'The Horn of Africa enters an October-December season with a high probability of enhanced rainfall, which brings both flood risk and relief after the failed 2025 Deyr season. Kenya adds an energy price dimension: it imports all refined fuel and saw record diesel prices in May. Floods that cut transport corridors would compound fuel-driven transport and food costs. Somalia remains the most fragile context covered here.',
    stakeholderRecommendations: [
      'Activate flood early warning and anticipatory action in counties and districts flagged as most vulnerable.',
      'Secure critical transport corridors and fuel supply for relief logistics before the peak of the rains.',
      'Use the rains for water harvesting and pasture recovery in areas where flood risk is lower.',
    ],
    analystRecommendations: [
      'Follow ICPAC and national weekly updates, since seasonal forecasts must be combined with shorter-range products.',
      'Monitor EPRA monthly pricing reviews for Kenya and exchange-rate pressure on fuel import costs.',
    ],
  },
  'european-union': {
    id: 'european-union',
    name: 'European Union (Germany)',
    risk: 'elevated',
    outlook:
      'For the EU, and Germany as the case covered here, the crisis is an energy price shock rather than a physical climate shock. Fiscal expansion has absorbed much of the impact, and ifo raised its 2026 growth forecast in September. Energy prices rose again after the ceasefire ended in July, and the extended Qatari LNG force majeure, which also covers European buyers, can weigh on storage refill before winter. Stability risks are economic and political: inflation of about 3 percent in 2027 and pressure on energy-intensive industry.',
    stakeholderRecommendations: [
      'Secure gas storage refill and diversified LNG contracts ahead of winter.',
      'Target energy relief at households and firms most exposed, rather than broad tax cuts.',
      'Support partner countries in Asia and Africa whose ability to absorb both shocks is far lower.',
    ],
    analystRecommendations: [
      'Track TTF gas prices and storage levels against the ifo risk scenario.',
      'Separate El Niño attribution from domestic drought and low-water events, which ifo does not link to El Niño.',
    ],
  },
  gulf: {
    id: 'gulf',
    name: 'Persian Gulf / GCC',
    risk: 'critical',
    outlook:
      'The Gulf is the centre of the energy shock. IMF PortWatch counts about 4 transits per day through the strait in September, against about 68 per day in the eight weeks before the war. Bypass capacity is limited and itself under attack, as the September strikes on the Saudi East-West pipeline showed. Qatar and Kuwait have no bypass, and Iraq’s southern output collapsed in the first week. Diplomatic efforts continue, but the latest Iranian proposal was reported rejected on 28 September. The outlook remains binary: a negotiated reopening would ease prices quickly, while further escalation would push more infrastructure out of service.',
    stakeholderRecommendations: [
      'Support multilateral diplomacy and seafarer protection, including evacuation of stranded crews.',
      'Protect bypass infrastructure and coordinate its use to prioritise the most vulnerable importing countries.',
      'Prepare for a rapid restart of exports and shipping, including mine clearance and insurance arrangements.',
    ],
    analystRecommendations: [
      'Use daily transit counts (IMF PortWatch) rather than political statements to assess reopening.',
      'Treat claims by conflict parties as unverified until independently confirmed.',
    ],
  },
};

export const crisisData: CrisisDataset = {
  meta: {
    title: 'Crisis Room: El Niño 2026-27 x Strait of Hormuz',
    asOf: '2026-09-29',
    methodology:
      'Findings are compiled from official, intergovernmental, research and news sources with links. Each finding carries a confidence level. Status and risk ratings are editorial judgements based on these findings, not a computed index. Countries not listed are not assessed.',
    limitations: [
      'Coverage is limited to 19 archetype countries and does not include Latin America and the Caribbean, which is also strongly affected by El Niño.',
      'Several values are in-season or single-source figures (marked preliminary) and must be updated once official data are released.',
      'Two Wikipedia pages are used as secondary compilations for timeline facts; their primary references should be checked before external use.',
      'Risk ratings are qualitative and not comparable to quantitative indices such as INFORM.',
      'The situation in the Strait of Hormuz changes daily; the dataset reflects the state as of 29 September 2026.',
    ],
  },
  sources,
  global: {
    asOf: '2026-09-29',
    elNino: [
      {
        text: 'NOAA maintains an El Niño Advisory and gives a greater than 90 percent chance of a very strong event in the northern hemisphere fall and winter 2026-27, and a 75 percent chance of a historic event in October-December.',
        sourceIds: ['noaa-cpc'],
        confidence: 'confirmed',
      },
      {
        text: 'The weekly Niño 3.4 index reached +3.0°C in mid-September; strong-to-moderate conditions are expected to persist through spring 2027.',
        sourceIds: ['iri'],
        confidence: 'confirmed',
      },
    ],
    hormuz: [
      {
        text: 'Commercial traffic has been largely blocked since 28 February. Before the war, about a quarter of seaborne oil trade and a fifth of LNG trade passed the strait.',
        sourceIds: ['wiki-hormuz'],
        confidence: 'reported',
      },
      {
        text: 'IMF PortWatch counts about 4 transits per day through the strait in September 2026 (to 27 September), against about 68 per day in the eight weeks before the war. Brent traded at USD 106.31 on 28 September.',
        sourceIds: ['portwatch', 'straits-0928'],
        confidence: 'reported',
      },
      {
        text: 'IEA member countries agreed on 11 March to make 400 million barrels of emergency stocks available, the largest collective action in IEA history.',
        sourceIds: ['iea-release'],
        confidence: 'confirmed',
      },
      {
        text: 'Almost 90 percent of LNG shipped through the strait in 2025 went to Asia, more than a quarter of the region’s LNG imports.',
        sourceIds: ['iea-me'],
        confidence: 'confirmed',
      },
    ],
  },
  regions,
  countries,
  routes: [
    {
      id: 'gulf-lane',
      name: 'Persian Gulf to Arabian Sea via Hormuz',
      kind: 'sea-lane',
      status: 'blocked',
      coordinates: [
        [48.8, 29.3], [50.4, 27.4], [52.4, 26.4], [54.8, 26.1], [56.4, 26.55], [57.2, 25.8], [58.8, 24.2], [61.0, 21.5],
      ],
      note: 'Core export lane for Saudi, Iraqi, Kuwaiti, Qatari and Emirati oil and LNG. Effectively closed to commercial traffic.',
      sourceIds: ['straits-0928', 'wiki-hormuz'],
    },
    {
      id: 'asia-lane',
      name: 'Arabian Sea to East Asia via Malacca',
      kind: 'sea-lane',
      status: 'disrupted',
      coordinates: [
        [61.0, 21.5], [66.0, 16.0], [72.0, 10.0], [78.5, 5.4], [88.0, 5.6], [95.0, 6.0], [98.5, 4.8], [101.5, 2.6], [104.0, 1.2],
        [107.0, 5.0], [110.5, 11.0], [114.5, 17.0], [120.5, 22.0], [124.5, 27.0], [129.5, 31.5], [135.0, 33.6], [139.8, 35.0],
      ],
      note: 'About 84 percent of crude and condensate shipped through the strait in 2024 went to Asian markets. Supply along this lane is largely cut off at source.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'red-sea-lane',
      name: 'Arabian Sea to Europe via Bab el-Mandeb and Suez',
      kind: 'sea-lane',
      status: 'disrupted',
      coordinates: [
        [61.0, 21.5], [56.0, 15.0], [51.0, 12.6], [45.5, 12.4], [43.4, 12.6], [41.0, 16.0], [38.2, 20.5], [35.0, 25.5], [33.6, 28.0],
        [32.55, 29.95], [32.3, 31.3], [28.0, 33.5], [20.0, 35.0], [12.0, 37.4], [5.0, 37.8], [-5.6, 36.0], [-9.6, 38.5], [-9.6, 43.2],
        [-5.0, 48.0], [2.0, 50.6], [4.2, 52.0],
      ],
      note: 'Houthi forces announced renewed attacks on shipping on 28 February; major container lines suspended Red Sea transits and rerouted around the Cape.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'cape-lane',
      name: 'Cape of Good Hope diversion to Europe',
      kind: 'sea-lane',
      status: 'diverted',
      coordinates: [
        [61.0, 21.5], [56.0, 6.0], [49.0, -10.0], [42.0, -25.0], [33.0, -34.0], [18.5, -35.2], [10.0, -25.0], [-4.0, -5.0],
        [-18.0, 14.0], [-15.0, 30.0], [-10.5, 43.0], [-5.0, 48.0], [2.0, 50.6], [4.2, 52.0],
      ],
      note: 'Diversion route used instead of the Red Sea, adding weeks to transit times and raising freight costs.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'mombasa-lane',
      name: 'Gulf of Oman to Mombasa',
      kind: 'sea-lane',
      status: 'disrupted',
      coordinates: [
        [58.8, 24.2], [58.0, 18.0], [54.0, 10.0], [49.0, 3.0], [44.0, -2.0], [39.7, -4.05],
      ],
      note: 'Kenya imports all of its refined fuel; landed costs follow Gulf prices and freight rates.',
      sourceIds: ['kws-may'],
    },
    {
      id: 'east-west-pipeline',
      name: 'Saudi East-West Pipeline (Abqaiq to Yanbu)',
      kind: 'pipeline',
      status: 'disrupted',
      coordinates: [
        [49.67, 25.94], [47.5, 25.1], [45.0, 24.6], [42.0, 24.4], [39.8, 24.2], [38.06, 24.09],
      ],
      note: 'Main bypass to the Red Sea. Shut on 11 September after drone strikes; reduced flows reportedly resumed around 22 September.',
      sourceIds: ['aj-ewp', 'cdm-ewp'],
    },
    {
      id: 'habshan-fujairah',
      name: 'Abu Dhabi Crude Oil Pipeline (Habshan to Fujairah)',
      kind: 'pipeline',
      status: 'diverted',
      coordinates: [
        [53.6, 23.75], [54.7, 24.3], [55.6, 24.8], [56.33, 25.12],
      ],
      note: 'Used to divert Emirati crude to the Gulf of Oman, outside the strait.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'kirkuk-ceyhan',
      name: 'Kirkuk to Ceyhan Pipeline',
      kind: 'pipeline',
      status: 'diverted',
      coordinates: [
        [44.39, 35.47], [43.1, 36.4], [41.2, 37.1], [38.5, 37.1], [35.8, 36.88],
      ],
      note: 'Named as an alternative route to the Mediterranean; current throughput not verified for this dataset.',
      sourceIds: ['wiki-hormuz'],
    },
  ],
  chokepoints: [
    {
      id: 'hormuz',
      name: 'Strait of Hormuz',
      coordinates: [56.45, 26.45],
      status: 'blocked',
      note: 'Commercial traffic effectively halted since 28 February; see the chokepoint monitor for daily counts.',
      sourceIds: ['portwatch', 'straits-0928'],
    },
    {
      id: 'bab-el-mandeb',
      name: 'Bab el-Mandeb',
      coordinates: [43.4, 12.6],
      status: 'disrupted',
      note: 'Renewed Houthi threats against shipping since 28 February; daily transits are below the January-February 2026 level.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'suez',
      name: 'Suez Canal',
      coordinates: [32.55, 29.95],
      status: 'disrupted',
      note: 'Daily transits are close to the January-February 2026 level; that level was already reduced by the Red Sea crisis that began in late 2023.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'malacca',
      name: 'Strait of Malacca',
      coordinates: [100.5, 3.3],
      status: 'operating',
      note: 'Open, but volumes from the Gulf are largely cut off at source.',
      sourceIds: ['wiki-hormuz'],
    },
    {
      id: 'cape',
      name: 'Cape of Good Hope',
      coordinates: [18.5, -34.8],
      status: 'diverted',
      note: 'Main diversion for Europe-bound traffic since the Red Sea crisis; daily transits are close to the January-February 2026 level.',
      sourceIds: ['wiki-hormuz'],
    },
  ],
};

/** Countries of a region, sorted by risk (critical first). */
const RISK_ORDER = { critical: 0, high: 1, elevated: 2, moderate: 3 } as const;

export function countriesInRegion(region: RegionId): CountryProfile[] {
  return Object.values(crisisData.countries)
    .filter((c) => c.region === region)
    .sort((a, b) => RISK_ORDER[a.risk] - RISK_ORDER[b.risk] || a.name.localeCompare(b.name));
}

/** Lookup from ISO numeric (world-atlas feature id) to ISO alpha-3. */
export const NUMERIC_TO_ISO3: Record<string, Iso3> = Object.fromEntries(
  Object.values(crisisData.countries).map((c) => [c.isoNumeric, c.iso3]),
);

/** Unique sources referenced by a list of findings/metrics, in first-seen order. */
export function collectSources(items: { sourceIds: string[] }[]) {
  const seen = new Set<string>();
  const out = [];
  for (const item of items) {
    for (const id of item.sourceIds) {
      if (!seen.has(id) && crisisData.sources[id]) {
        seen.add(id);
        out.push(crisisData.sources[id]);
      }
    }
  }
  return out;
}

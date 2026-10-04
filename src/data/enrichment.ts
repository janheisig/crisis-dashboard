import type { Finding, Metric, Source, Iso3 } from '../types/crisis';

/**
 * Additional verified findings and metrics for the BMZ partner countries, merged into the base profiles
 * in crisisData.ts. Every source URL was opened when the entry was written (4 Oct 2026).
 */
export const enrichmentSources: Record<string, Source> = {
  "bgd-kathmandupost-elnino": { id: "bgd-kathmandupost-elnino", tag: "[Kathmandu Post, 5 Jun 2026]", publisher: "Kathmandu Post (syndicated)", title: "Bangladesh may feel El Nino's heat, but not its full force", url: "https://kathmandupost.com/world/2026/06/05/bangladesh-may-feel-el-nino-s-heat-but-not-its-full-force", date: "2026-06-05", type: "news" },
  "bgd-gpn-lng": { id: "bgd-gpn-lng", tag: "[Gas Processing News, 6 Jul 2026]", publisher: "Gas Processing News", title: "QatarEnergy halves 2026 scheduled deliveries of LNG to Bangladesh", url: "https://gasprocessingnews.com/news/2026/07/qatarenergy-halves-2026-scheduled-deliveries-of-lng-to-bangladesh/", date: "2026-07-06", type: "industry" },
  "bgd-ittefaq-power": { id: "bgd-ittefaq-power", tag: "[Daily Ittefaq, 1 Sep 2026]", publisher: "Daily Ittefaq", title: "Fuel shortages fuel Bangladesh's power crisis", url: "https://en.ittefaq.com.bd/17940/fuel-shortages-fuel-bangladesh%E2%80%99s-power-crisis", date: "2026-09-01", type: "news" },
  "bgd-unb-fuelprices": { id: "bgd-unb-fuelprices", tag: "[UNB, 21 Sep 2026]", publisher: "United News of Bangladesh", title: "Fuel prices rise up to nearly 36% between January and September 2026", url: "https://www.unb.com.bd/category/Bangladesh/fuel-prices-rise-up-to-nearly-36-between-january-and-september-2026/195927", date: "2026-09-21", type: "news" },
  "bgd-ittefaq-june": { id: "bgd-ittefaq-june", tag: "[Daily Ittefaq, 1 Jun 2026]", publisher: "Daily Ittefaq", title: "Govt raises octane, petrol prices by Tk 5 per litre", url: "https://en.ittefaq.com.bd/16775/govt-raises-octane-petrol-prices-by-tk-5-per", date: "2026-06-01", type: "news" },
  "bgd-dhakatribune-oct": { id: "bgd-dhakatribune-oct", tag: "[Dhaka Tribune, 30 Sep 2026]", publisher: "Dhaka Tribune", title: "Fuel prices unchanged for October", url: "https://www.dhakatribune.com/bangladesh/power-energy/421056/fuel-prices-unchanged-for-october", date: "2026-09-30", type: "news" },
  "bgd-fexp-remit": { id: "bgd-fexp-remit", tag: "[Financial Express, 27 Aug 2026]", publisher: "The Financial Express (Bangladesh)", title: "Bangladesh receives $2.45b in remittances in 26 days of August", url: "https://thefinancialexpress.com.bd/economy/bangladesh-receives-245b-in-remittances-in-26-days-of-august", date: "2026-08-27", type: "news" },
  "pak-propakistani-pmd": { id: "pak-propakistani-pmd", tag: "[ProPakistani, 16 Jun 2026]", publisher: "ProPakistani", title: "PMD Predicts Less Rain, Higher Temperatures Until September", url: "https://propakistani.pk/2026/06/16/pmd-predicts-less-rain-higher-temperatures-until-september/amp/", date: "2026-06-16", type: "news" },
  "pak-propakistani-superelnino": { id: "pak-propakistani-superelnino", tag: "[ProPakistani, 8 Sep 2026]", publisher: "ProPakistani", title: "Super El Nino Raises Fresh Weather Risks for Pakistan", url: "https://propakistani.pk/2026/09/08/super-el-nino-raises-fresh-weather-risks-for-pakistan/", date: "2026-09-08", type: "news" },
  "pak-thenews-lng": { id: "pak-thenews-lng", tag: "[The News, 9 Jul 2026]", publisher: "The News International", title: "Govt seeks emergency LNG cargo after Qatari shipment aborted amid Hormuz tensions", url: "https://www.thenews.pk/story/1424958-govt-seeks-emergency-lng-cargo-after-qatari-shipment-aborted-amid-hormuz-tensions", date: "2026-07-09", type: "news" },
  "pak-propakistani-cargo": { id: "pak-propakistani-cargo", tag: "[ProPakistani, 11 Aug 2026]", publisher: "ProPakistani", title: "Pakistan receives Qatar LNG cargo after weeks-long Hormuz disruption", url: "https://propakistani.pk/2026/08/11/pakistan-receives-qatar-lng-cargo-after-weeks-long-hormuz-disruption/", date: "2026-08-11", type: "news" },
  "pak-gulfnews-remit": { id: "pak-gulfnews-remit", tag: "[Gulf News, 10 Aug 2026]", publisher: "Gulf News", title: "Pakistan remittances jump 13% to $3.6 billion in July", url: "https://gulfnews.com/world/asia/pakistan/pakistan-remittances-jump-13-to-3-6-billion-in-july-1.500636368", date: "2026-08-10", type: "news" },
  "pak-pakobserver-fuel": { id: "pak-pakobserver-fuel", tag: "[Pakistan Observer, 21 Sep 2026]", publisher: "Pakistan Observer", title: "Petrol Price rises to Rs393.75; Diesel Falls to Rs422.08 for September 22", url: "https://pakobserver.net/?p=777646", date: "2026-09-21", type: "news" },
  "pak-propakistani-imf": { id: "pak-propakistani-imf", tag: "[ProPakistani, 4 Aug 2026]", publisher: "ProPakistani", title: "Pakistan wants IMF to allow flexible fuel tax to ease price shocks", url: "https://propakistani.pk/2026/08/04/pakistan-wants-imf-to-allow-flexible-fuel-tax-to-ease-price-shocks/", date: "2026-08-04", type: "news" },
  "npl-himalpress-monsoon": { id: "npl-himalpress-monsoon", tag: "[Himal Press, 8 May 2026]", publisher: "Himalayan Press", title: "Below-average rainfall, higher temperatures expected this monsoon: DoHM", url: "https://en.himalpress.com/below-average-rainfall-higher-temperatures-expected-this-monsoon-dohm/", date: "2026-05-08", type: "news" },
  "npl-ekantipur-remit": { id: "npl-ekantipur-remit", tag: "[Ekantipur, 30 Mar 2026]", publisher: "Ekantipur", title: "Gulf War puts 40 percent of Nepal's remittances at risk", url: "https://ekantipur.com/business/2026/03/30/en/west-asia-tensions-put-40-percent-of-remittances-at-risk-15-35.html", date: "2026-03-30", type: "news" },
  "npl-kp-lpg": { id: "npl-kp-lpg", tag: "[The Kathmandu Post, 11 Aug 2026]", publisher: "The Kathmandu Post", title: "LPG imports are up. Why are consumers still queuing for it?", url: "https://kathmandupost.com/money/2026/08/11/lpg-imports-are-up-why-are-consumers-still-queuing-for-it", date: "2026-08-11", type: "news" },
  "npl-kp-noc": { id: "npl-kp-noc", tag: "[The Kathmandu Post, 29 Jun 2026]", publisher: "The Kathmandu Post", title: "Global oil prices tumble but Nepal unlikely to see major fuel price cuts soon", url: "https://kathmandupost.com/money/2026/06/29/global-oil-prices-tumble-but-nepal-unlikely-to-see-major-fuel-price-cuts-soon", date: "2026-06-29", type: "news" },
  "npl-aljazeera-weekend": { id: "npl-aljazeera-weekend", tag: "[Al Jazeera, 5 Apr 2026]", publisher: "Al Jazeera", title: "Nepal announces two-day weekends as fuel crisis caused by Iran war deepens", url: "https://www.aljazeera.com/news/2026/4/5/nepal-announces-two-day-weekends-as-fuel-crisis-caused-by-iran-war-deepens", date: "2026-04-05", type: "news" },
  "npl-ekantipur-falgun": { id: "npl-ekantipur-falgun", tag: "[Ekantipur, 3 Apr 2026]", publisher: "Ekantipur", title: "Remittances start to decline, only 188 billion rupees were received in Falgun", url: "https://ekantipur.com/Other/2026/04/03/en/remittances-start-to-decline-only-188-billion-rupees-were-received-in-falgun-48-08.html", date: "2026-04-03", type: "news" },
  "khm-cambodianess-drought": { id: "khm-cambodianess-drought", tag: "[Cambodianess, 23 Jul 2026]", publisher: "Cambodianess", title: "Authorities Race to Save Rice Crops as El Niño Drought Hits Seven Provinces", url: "https://www.cambodianess.com/article/authorities-race-to-save-rice-crops-as-el-nino-drought-hits-seven-provinces", date: "2026-07-23", type: "news" },
  "khm-star-imf": { id: "khm-star-imf", tag: "[The Star, 30 Sep 2026]", publisher: "The Star", title: "Cambodia's economic growth projected to slow to 3% in 2026 amid rising costs: IMF", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/30/cambodia039s-economic-growth-projected-to-slow-to-3-in-2026-amid-rising-costs-imf", date: "2026-09-30", type: "news" },
  "khm-star-pm": { id: "khm-star-pm", tag: "[The Star, 17 Sep 2026]", publisher: "The Star", title: "Cambodian PM highlights 'hundreds of millions' spent to cushion economic impact of Iran conflict", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/17/cambodian-pm-highlights-hundreds-of-millions-spent-to-cushion-economic-impact-of-iran-conflict", date: "2026-09-17", type: "news" },
  "khm-vnews-energy": { id: "khm-vnews-energy", tag: "[Viet Nam News, 24 Mar 2026]", publisher: "Viet Nam News", title: "Cambodia introduces energy-saving measures amid Middle East conflict", url: "https://vietnamnews.vn/world/1777979/cambodia-introduces-energy-saving-measures-amid-middle-east-conflict.html", date: "2026-03-24", type: "news" },
  "lao-afp-queues": { id: "lao-afp-queues", tag: "[Thai PBS World, 18 Mar 2026]", publisher: "Thai PBS World (AFP)", title: "Hours-long fuel queues in Laos capital Vientiane", url: "https://www.thaipbsworld.com/energy-crisis/hours-long-fuel-queues-in-laos-capital-vientiane", date: "2026-03-18", type: "news" },
  "lao-kpl-eln": { id: "lao-kpl-eln", tag: "[KPL, 11 May 2026]", publisher: "Lao News Agency (KPL)", title: "Laos Warns of El Niño Impact During 2026 Rainy Season", url: "https://kpl.gov.la/detail.aspx?id=100102", date: "2026-05-11", type: "official" },
  "lao-wb-lem": { id: "lao-wb-lem", tag: "[World Bank, 6 Jul 2026]", publisher: "World Bank", title: "Lao Economic Monitor June 2026: Consolidating Reform Momentum Amid Volatility, Key Findings", url: "https://www.worldbank.org/en/country/lao/publication/lao-economic-monitor-jun-2026-consolidating-reform-momentum-amid-volatility-key-findings", date: "2026-07-06", type: "intergovernmental" },
  "lao-amro": { id: "lao-amro", tag: "[AMRO, 17 Jul 2026]", publisher: "AMRO", title: "Lao PDR: Preserve Stability and Sustain Reforms Amid Higher Energy Prices", url: "https://kpl.gov.la/detail.aspx?id=102236", date: "2026-07-17", type: "intergovernmental" },
  "uzb-timesca-fuel": { id: "uzb-timesca-fuel", tag: "[The Times of Central Asia, 7 Jul 2026]", publisher: "The Times of Central Asia", title: "Uzbekistan Faces Fuel Shortage Pressure as Imports Rise", url: "https://timesca.com/uzbekistan-faces-fuel-shortage-pressure-as-imports-rise/", date: "2026-07-07", type: "news" },
  "uzb-kun-iran": { id: "uzb-kun-iran", tag: "[Kun.uz, 17 Aug 2026]", publisher: "Kun.uz", title: "Middle East tensions could cost Uzbekistan up to $1.5bn as Iran transit faces disruption", url: "https://kun.uz/en/news/2026/08/17/middle-east-tensions-could-cost-uzbekistan-up-to-15bn-as-iran-transit-faces-disruption", date: "2026-08-17", type: "news" },
  "uzb-kun-remit": { id: "uzb-kun-remit", tag: "[Kun.uz, 3 Jul 2026]", publisher: "Kun.uz", title: "Remittances to Uzbekistan hit $3.8 billion in Q1 as geographic reliance shifts away from Russia", url: "https://kun.uz/en/news/2026/07/02/remittances-to-uzbekistan-hit-38-billion-in-q1-as-geographic-reliance-shifts-away-from-russia-f4edf2", date: "2026-07-03", type: "news" },
  "uzb-kun-gasoline": { id: "uzb-kun-gasoline", tag: "[Kun.uz, 17 Mar 2026]", publisher: "Kun.uz", title: "Middle East tensions drive gasoline prices up in Uzbekistan", url: "https://kun.uz/en/news/2026/03/17/middle-east-tensions-drive-gasoline-prices-up-in-uzbekistan", date: "2026-03-17", type: "news" },
  "uzb-aljazeera-petrol": { id: "uzb-aljazeera-petrol", tag: "[Al Jazeera, 24 Aug 2026]", publisher: "Al Jazeera", title: "Ukraine's offensive against Russia causes petrol panic across Central Asia", url: "https://www.aljazeera.com/news/2026/8/24/ukraines-offensive-against-russia-causes-petrol-panic-across-central-asia", date: "2026-08-24", type: "news" },
  "uzb-adb-outlook": { id: "uzb-adb-outlook", tag: "[ADB, 10 Apr 2026]", publisher: "ADB", title: "ADB: Uzbekistan's Economic Growth to Remain Strong in 2026-2027, Supported by Reforms and Investment", url: "https://www.adb.org/news/adb-uzbekistan-economic-growth-remain-strong-2026-2027-supported-reforms-and-investment", date: "2026-04-10", type: "intergovernmental" },
  "uzb-timesca-water": { id: "uzb-timesca-water", tag: "[The Times of Central Asia, 17 Apr 2026]", publisher: "The Times of Central Asia", title: "Water Stress: Will the Summer of 2026 Become a Turning Point for Central Asia?", url: "https://timesca.com/water-stress-will-the-summer-of-2026-become-a-turning-point-for-central-asia/", date: "2026-04-17", type: "news" },
  "uzb-hydromet-summer": { id: "uzb-hydromet-summer", tag: "[Uzhydromet, 26 May 2026]", publisher: "Uzhydromet", title: "ИЮНЬ И ЛЕТО 2026 ГОДА", url: "https://gov.uz/ru/hydromet/news/view/170057", date: "2026-05-26", type: "official" },
  "mng-star-reuters": { id: "mng-star-reuters", tag: "[The Star (Reuters), 3 Sep 2026]", publisher: "The Star (Reuters)", title: "Mongolia bears brunt of Russia's fuel crunch, official says", url: "https://www.thestar.com.my/news/world/2026/09/03/mongolia-bears-brunt-of-russia039s-fuel-crunch-official-says", date: "2026-09-03", type: "news" },
  "mng-eaf-fuel": { id: "mng-eaf-fuel", tag: "[East Asia Forum, 25 Jun 2026]", publisher: "East Asia Forum", title: "Mongolia's risky fuel strategy gamble", url: "https://eastasiaforum.org/2026/06/24/mongolias-risky-fuel-strategy-gamble/", date: "2026-06-25", type: "research" },
  "mng-weekly-prices": { id: "mng-weekly-prices", tag: "[Mongolia Weekly, 18 Aug 2026]", publisher: "Mongolia Weekly", title: "Mongolia's fuel crisis shows the cost of managing prices", url: "https://www.mongoliaweekly.org/post/mongolia-s-fuel-crisis-shows-the-cost-of-managing-prices", date: "2026-08-18", type: "news" },
  "mng-ann-fuel": { id: "mng-ann-fuel", tag: "[Asia News Network, 18 Aug 2026]", publisher: "Asia News Network", title: "Mongolia's fuel supply returns to normal, restrictions on licence plates and purchase limits lifted", url: "https://asianews.network/?p=295018", date: "2026-08-18", type: "news" },
  "mng-imf-art4": { id: "mng-imf-art4", tag: "[IMF, 6 Aug 2026]", publisher: "IMF", title: "IMF Executive Board Concludes 2026 Article IV Consultation with Mongolia", url: "https://www.imf.org/en/news/articles/2026/08/06/pr26274-mongolia-imf-executive-board-concludes-2026-article-iv-consultation", date: "2026-08-06", type: "intergovernmental" },
  "bol-mongabay-sequia": { id: "bol-mongabay-sequia", tag: "[Mongabay Latam, 28 Aug 2026]", publisher: "Mongabay Latam", title: "Bolivia declara emergencia por sequía extrema y pronostican incendios en la Amazonía", url: "http://es.mongabay.com/2026/08/bolivia-declaran-emergencia-sequia-extrema-pronostican-incendios-amazonia/", date: "2026-08-28", type: "news" },
  "bol-spglobal-import": { id: "bol-spglobal-import", tag: "[S&P Global, 2 Jul 2026]", publisher: "S&P Global Commodity Insights", title: "Bolivia allows private sector to import, sell refined products", url: "https://www.spglobal.com/energy/en/news-research/latest-news/refined-products/070226-bolivia-allows-private-sector-to-import-sell-refined-products", date: "2026-07-02", type: "industry" },
  "bol-afp-intervention": { id: "bol-afp-intervention", tag: "[AFP, 2 Sep 2026]", publisher: "AFP", title: "Bolivia orders state intervention as fuel crisis bites", url: "https://www.nampa.org/text/23005910", date: "2026-09-02", type: "news" },
  "col-portafolio-andesco": { id: "col-portafolio-andesco", tag: "[Portafolio, 21 May 2026]", publisher: "Portafolio", title: "El Niño acelera alerta energética en Colombia: Andesco advierte riesgo de racionamiento y crisis de gas", url: "https://www.portafolio.co/energia/el-nino-acelera-alerta-energetica-en-colombia-andesco-advierte-riesgo-de-racionamiento-y-crisis-de-gas-494473", date: "2026-05-21", type: "news" },
  "col-colombiano-pico": { id: "col-colombiano-pico", tag: "[El Colombiano, 3 Jun 2026]", publisher: "El Colombiano", title: "Colombia registra pico histórico de consumo energía por ola de calor; hay alarma por racionamiento", url: "https://www.elcolombiano.com/negocios/pico-consumo-energia-colombia-olas-calor-riesgo-racionamiento-2026-MG37316318", date: "2026-06-03", type: "news" },
  "col-eldiario-precios": { id: "col-eldiario-precios", tag: "[El Diario, 30 Apr 2026]", publisher: "El Diario (Ecuador)", title: "Gobierno de Colombia anuncia incremento en el precio de los combustibles por conflicto en Irán", url: "https://www.eldiario.ec/centro/gobierno-de-colombia-anuncia-incremento-en-el-precio-de-los-combustibles-por-conflicto-en-iran-30042026/", date: "2026-04-30", type: "news" },
  "ecu-primicias-diesel": { id: "ecu-primicias-diesel", tag: "[Primicias, 15 Sep 2026]", publisher: "Primicias", title: "Subsidio al diésel en Ecuador y gasolina Extra y Ecopaís: incremento de precios por guerra en Irán", url: "https://www.primicias.ec/economia/subsidio-diesel-ecuador-gasolina-extra-ecopais-incremento-precios-guerra-iran-132578/", date: "2026-09-15", type: "news" },
  "ecu-expreso-subsidio": { id: "ecu-expreso-subsidio", tag: "[Expreso, 12 May 2026]", publisher: "Expreso", title: "Ecuador subsidiará hasta $1,93 por galón de diésel pese al alza de combustibles", url: "https://www.expreso.ec/economia-y-negocios/ecuador-pagara-1-93-galon-subsidiar-combustibles-mayo-junio-2026-281869.html", date: "2026-05-12", type: "news" },
  "ecu-primicias-alerta": { id: "ecu-primicias-alerta", tag: "[Primicias, 1 Sep 2026]", publisher: "Primicias", title: "Ecuador alerta roja Fenómeno de El Niño: riesgo energético y sequías hidroeléctricas", url: "https://www.primicias.ec/economia/ecuador-alerta-roja-fenomeno-nino-riesgo-energetico-sequias-hidroelectricas-estiaje-cuencas-rios-amazonia-austro-131504/", date: "2026-09-01", type: "news" },
  "ecu-expreso-cortes": { id: "ecu-expreso-cortes", tag: "[Expreso, 29 May 2026]", publisher: "Expreso", title: "Cortes de luz regresan a Ecuador ante amenaza del fenómeno de El Niño", url: "https://www.expreso.ec/economia-y-negocios/cortes-luz-regresan-ecuador-amenaza-fenomeno-nino-283718.html", date: "2026-05-29", type: "news" },
  "ecu-primicias-blum": { id: "ecu-primicias-blum", tag: "[Primicias, 13 Jul 2026]", publisher: "Primicias", title: "\"No existe riesgo de apagones ni cortes de luz en las condiciones actuales\", dice Ministro de Energía", url: "https://www.primicias.ec/economia/fenomeno-nino-apagones-cortes-luz-ministro-blum-estiaje-127802/", date: "2026-07-13", type: "news" },
};

export interface Enrichment {
  environmental?: Finding[];
  energy?: Finding[];
  policy?: Finding[];
  metrics?: Metric[];
}

export const enrichments: Partial<Record<Iso3, Enrichment>> = {
  BGD: {
    environmental: [
      { text: "In June 2026 the Bangladesh Meteorological Department forecast eight to ten heatwaves over three months and less monsoon rainfall because of El Niño, with risks of reduced Ganges-Brahmaputra-Meghna flows and salinity intrusion in the delta.", sourceIds: ["bgd-kathmandupost-elnino"], confidence: "reported" },
    ],
    energy: [
      { text: "In July 2026 Petrobangla reported that QatarEnergy had halved its scheduled 2026 LNG deliveries to Bangladesh; since the war began on 28 February no cargoes loaded at Qatar's Ras Laffan terminal had reached the country.", sourceIds: ["bgd-gpn-lng"], confidence: "reported" },
      { text: "At the end of August 2026 gas supply to the grid was about 39 percent below demand, and on 31 August demand of 16,242 megawatts met supply of 13,338 megawatts, a shortfall of about 2,900 megawatts.", sourceIds: ["bgd-ittefaq-power"], confidence: "reported" },
      { text: "By September 2026 administered fuel prices were between 32 and 36 percent above January levels, with diesel up Tk 33 per litre and octane up Tk 43 per litre.", sourceIds: ["bgd-unb-fuelprices"], confidence: "reported" },
    ],
    policy: [
      { text: "On 1 June 2026 the government raised octane and petrol by Tk 5 per litre under its automatic fuel pricing mechanism, which adjusts domestic prices to global fuel price movements.", sourceIds: ["bgd-ittefaq-june"], confidence: "reported" },
      { text: "On 30 September 2026 the Energy and Mineral Resources Division kept October fuel prices unchanged after a Tk 20 per litre increase on 20 September, with diesel at Tk 135 and octane at Tk 165.", sourceIds: ["bgd-dhakatribune-oct"], confidence: "reported" },
      { text: "In July 2026 Bangladesh was pursuing spot-market purchases and government-to-government agreements with alternative suppliers to offset the shortfall in Qatari LNG.", sourceIds: ["bgd-gpn-lng"], confidence: "reported" },
    ],
    metrics: [
      { label: "Diesel price change, Jan to Sep 2026", value: "+32.35%", sourceIds: ["bgd-unb-fuelprices"], asOf: "2026-09" },
      { label: "Gas supply shortfall vs demand, late Aug 2026", value: "39%", sourceIds: ["bgd-ittefaq-power"], asOf: "2026-08" },
      { label: "Remittance inflow growth, 1 Jul to 26 Aug 2026 (year on year)", value: "+18.5%", sourceIds: ["bgd-fexp-remit"], asOf: "2026-08" },
    ],
  },
  BOL: {
    environmental: [
      { text: "As of 24 August 2026, 26 Bolivian municipalities were in emergency or red alert because of drought, with six of nine departments affected and fires active in the Chiquitania.", sourceIds: ["bol-mongabay-sequia"], confidence: "reported" },
    ],
    energy: [
      { text: "On 1 July 2026, Bolivia issued Supreme Decree 5644, allowing private distributors to import diesel and gasoline, while state YPFB committed 72 million litres of diesel to agriculture for July.", sourceIds: ["bol-spglobal-import"], confidence: "reported" },
      { text: "On 2 September 2026 AFP reported that long queues of drivers waiting for scarce fuel had become a regular sight in Bolivia.", sourceIds: ["bol-afp-intervention"], confidence: "reported" },
    ],
    policy: [
      { text: "On 2 September 2026, the government of President Rodrigo Paz ordered an intervention of the state oil company YPFB in response to severe diesel shortages.", sourceIds: ["bol-afp-intervention"], confidence: "reported" },
    ],
    metrics: [
      { label: "Municipalities in drought emergency or red alert, 24 Aug 2026", value: "26", sourceIds: ["bol-mongabay-sequia"], asOf: "2026-08" },
    ],
  },
  COL: {
    environmental: [
      { text: "In May 2026, Andesco reported that the probability of El Niño had risen from 62 to 82 percent for May to July, and that hydropower makes up 65 to 70 percent of Colombia's electricity matrix.", sourceIds: ["col-portafolio-andesco"], confidence: "preliminary" },
    ],
    energy: [
      { text: "In May 2026, Colombia imported about 23 percent of the natural gas it consumed, according to the utilities association Andesco.", sourceIds: ["col-portafolio-andesco"], confidence: "reported" },
      { text: "In June 2026, El Colombiano reported a natural gas deficit of 24 percent for 2026-2027 and a record daily electricity demand of 259.92 GWh on 15 May.", sourceIds: ["col-colombiano-pico"], confidence: "reported" },
    ],
    policy: [
      { text: "Effective 1 May 2026, Colombia raised gasoline and ACPM diesel prices by 400 pesos per gallon, citing the Iran conflict and Strait of Hormuz tensions, after a rise of about 375 pesos on 1 April.", sourceIds: ["col-eldiario-precios"], confidence: "reported" },
    ],
    metrics: [
      { label: "Gasoline price rise, 1 May 2026 (COP per gallon)", value: "+400 pesos", sourceIds: ["col-eldiario-precios"], asOf: "2026-05" },
      { label: "Share of natural gas consumption imported, May 2026", value: "about 23%", sourceIds: ["col-portafolio-andesco"], asOf: "2026-05" },
    ],
  },
  ECU: {
    energy: [
      { text: "In September 2026, Ecuador's diesel subsidy stood at USD 1.22 per gallon, against an international price of USD 4.83 on 9 September, and about 75 percent of diesel consumption is imported.", sourceIds: ["ecu-primicias-diesel"], confidence: "reported" },
      { text: "In May 2026, the projected diesel subsidy rose from USD 1.60 to USD 1.93 per gallon, costing about USD 193 million per month.", sourceIds: ["ecu-expreso-subsidio"], confidence: "reported" },
      { text: "Primicias reported on 1 September 2026 that a drop in hydropower to about 3,000 MW would, with 1,000 MW of thermal capacity, leave Ecuador with 4,000 MW, a clear deficit, as drought is projected from September 2026 to March 2027.", sourceIds: ["ecu-primicias-alerta"], confidence: "preliminary" },
    ],
    policy: [
      { text: "Ecuador declared a yellow alert for El Niño on 18 May 2026 and scheduled power cuts of up to four hours in 55 cantons from 30 May, reportedly blamed on maintenance and repowering works.", sourceIds: ["ecu-expreso-cortes"], confidence: "reported" },
      { text: "On 13 July 2026, Energy Minister Juan Carlos Blum said there was no risk of blackouts under current conditions but that it could not be ensured El Niño would not hit strongly.", sourceIds: ["ecu-primicias-blum"], confidence: "reported" },
    ],
    metrics: [
      { label: "Share of diesel consumption imported, Sep 2026", value: "about 75%", sourceIds: ["ecu-primicias-diesel"], asOf: "2026-09" },
      { label: "Diesel subsidy per gallon, 12 Sep to 11 Oct 2026", value: "USD 1.22", sourceIds: ["ecu-primicias-diesel"], asOf: "2026-09" },
    ],
  },
  KHM: {
    environmental: [
      { text: "By July 2026, El Niño drought had hit rice fields in seven Cambodian provinces, and the Ministry of Water Resources deployed about 115 large water pumps and nearly 400 intervention machines.", sourceIds: ["khm-cambodianess-drought"], confidence: "reported" },
    ],
    energy: [
      { text: "The IMF projected Cambodian growth to slow to 3 percent in 2026 from 5.3 percent in 2025 and inflation to stay elevated at 5.6 percent, citing higher energy costs, weaker tourism and remittances.", sourceIds: ["khm-star-imf"], confidence: "reported" },
    ],
    policy: [
      { text: "In September 2026, Prime Minister Hun Manet said the state had spent more than US$360 million on fuel costs and tax reductions for fuel importers, and US$50 million on electricity subsidies through Electricité du Cambodge.", sourceIds: ["khm-star-pm"], confidence: "reported" },
      { text: "On 24 March 2026, Cambodia asked ministries to limit in-person meetings and long-distance travel to save energy, while stating that fuel and electricity supply remained stable.", sourceIds: ["khm-vnews-energy"], confidence: "reported" },
    ],
    metrics: [
      { label: "Fuel and tax-cut spending to mid-Sep 2026", value: "> US$360 million", sourceIds: ["khm-star-pm"], asOf: "2026-09" },
      { label: "IMF projected GDP growth 2026", value: "3%", sourceIds: ["khm-star-imf"], asOf: "2026-09" },
      { label: "IMF projected inflation 2026", value: "5.6%", sourceIds: ["khm-star-imf"], asOf: "2026-09" },
    ],
  },
  LAO: {
    environmental: [
      { text: "On 11 May 2026, Laos warned that El Niño would bring below-average rainfall, prolonged dry spells and temperatures of 35 to 38 degrees Celsius in some areas between May and July, with drought and water scarcity risks.", sourceIds: ["lao-kpl-eln"], confidence: "reported" },
    ],
    energy: [
      { text: "In March 2026, more than 40 percent of Laos's 2,538 filling stations were closed; the country imports almost all its fuel from Thailand, whose export suspension in late February triggered panic buying.", sourceIds: ["lao-afp-queues"], confidence: "reported" },
      { text: "The World Bank reported that fuel prices in Laos remained 38 to 40 percent above pre-crisis levels in early June 2026, after gasoline and diesel nearly doubled at their peak.", sourceIds: ["lao-wb-lem"], confidence: "confirmed" },
    ],
    policy: [
      { text: "AMRO noted in July 2026 that Lao authorities temporarily reduced fuel excise taxes; on 19 March the government had also tasked trade officials with daily fuel supply reports and a committee for state support funds.", sourceIds: ["lao-amro"], confidence: "reported" },
    ],
    metrics: [
      { label: "Fuel prices vs pre-crisis, early Jun 2026", value: "+38 to 40%", sourceIds: ["lao-wb-lem"], asOf: "2026-06" },
      { label: "Debt service, 2026 estimate", value: "13% of GDP", sourceIds: ["lao-wb-lem"], asOf: "2026" },
      { label: "International reserves, March 2026", value: "US$4.2 billion (3.8 months of imports)", sourceIds: ["lao-wb-lem"], asOf: "2026-03" },
    ],
  },
  MNG: {
    energy: [
      { text: "Fuel is Mongolia's largest import at roughly one third of total imports, with 95 percent of transport fuel coming from Russia and the remainder from China.", sourceIds: ["mng-eaf-fuel"], confidence: "reported" },
      { text: "In January to July 2026 Russian jet fuel supplies to Mongolia fell 40 percent to 32,000 tonnes, while motor fuel deliveries dropped from 186,400 tons in June to 173,000 tons in July.", sourceIds: ["mng-star-reuters"], confidence: "reported" },
      { text: "Inflation reached 12.0 percent year on year in June 2026, driven by meat and energy costs, and the IMF expects about 10 percent by year-end.", sourceIds: ["mng-imf-art4"], confidence: "confirmed" },
    ],
    policy: [
      { text: "On 4 August 2026 Ulaanbaatar introduced alternate-day fuel sales by licence plate and a cap of MNT 50,000 per purchase; the government also waived import duties on petroleum products until February 2027.", sourceIds: ["mng-weekly-prices"], confidence: "reported" },
      { text: "The restrictions were lifted on 15 August 2026 after Russian supply recovered, while Mongolia negotiates imports of 71,000 tons of petroleum products per month from China.", sourceIds: ["mng-ann-fuel"], confidence: "reported" },
      { text: "Mongolia agreed a 15-year aviation fuel deal with Russia in April 2026 and opened talks with Kazakhstan in March; the government seeks to hold the AI-92 price stable.", sourceIds: ["mng-eaf-fuel"], confidence: "reported" },
      { text: "The IMF Article IV of August 2026 projects growth of 5.8 percent, names coal exports to China as a downside risk, and urges temporary, well-targeted fuel price responses and a supplementary budget.", sourceIds: ["mng-imf-art4"], confidence: "confirmed" },
    ],
    metrics: [
      { label: "Inflation, June 2026 (y/y)", value: "12.0%", sourceIds: ["mng-imf-art4"], asOf: "2026-06" },
      { label: "Share of transport fuel from Russia", value: "95%", sourceIds: ["mng-eaf-fuel"], asOf: "2026" },
      { label: "Russian jet fuel supply Jan-Jul 2026", value: "-40%", sourceIds: ["mng-star-reuters"], asOf: "2026-07" },
      { label: "IMF real GDP growth projection 2026", value: "5.8%", sourceIds: ["mng-imf-art4"], asOf: "2026" },
    ],
  },
  NPL: {
    environmental: [
      { text: "In May 2026, Nepal's Department of Hydrology and Meteorology forecast below-average June to September monsoon rainfall for most regions, citing the Pacific moving towards El Niño conditions associated with reduced rainfall in Nepal.", sourceIds: ["npl-himalpress-monsoon"], confidence: "reported" },
    ],
    energy: [
      { text: "In March 2026, Ekantipur reported that about 1.9 million Nepali workers in the Gulf were under stress from the war and that 40 percent of Nepal's remittances were at risk.", sourceIds: ["npl-ekantipur-remit"], confidence: "reported" },
      { text: "Nepal's monthly LPG consumption is 45,000 to 50,000 tonnes, but storage capacity is only about 10,500 tonnes; in August 2026 queues persisted despite higher imports, a half-filled cylinder rule applied from 13 March until 15 July.", sourceIds: ["npl-kp-lpg"], confidence: "reported" },
      { text: "In June 2026, Nepal Oil Corporation lost Rs1,174 on every LPG cylinder sold, about Rs36 billion a month, while Indian Oil Corporation dispatched 80 to 85 LPG bullets daily against a Nepali need of at least 100.", sourceIds: ["npl-kp-noc"], confidence: "reported" },
      { text: "Remittance inflows fell in Falgun (mid-February to mid-March 2026) to Rs188.64 billion, lower than in the preceding month of Magh.", sourceIds: ["npl-ekantipur-falgun"], confidence: "reported" },
    ],
    policy: [
      { text: "On 5 April 2026, Nepal's cabinet extended the weekend for government offices and schools to Saturday and Sunday to conserve fuel, after earlier introducing half-filled LPG cylinders to discourage hoarding.", sourceIds: ["npl-aljazeera-weekend"], confidence: "reported" },
    ],
    metrics: [
      { label: "LPG cylinder price after supply-crisis increase, June 2026", value: "Rs2,160 (+13%)", sourceIds: ["npl-kp-noc"], asOf: "2026-06" },
      { label: "Nepali workers in the Gulf, March 2026", value: "1.9 million", sourceIds: ["npl-ekantipur-remit"], asOf: "2026-03" },
      { label: "Remittances received in Falgun (Feb-Mar 2026)", value: "Rs188.64 billion", sourceIds: ["npl-ekantipur-falgun"], asOf: "2026-03" },
    ],
  },
  PAK: {
    environmental: [
      { text: "In June 2026 the Pakistan Meteorological Department said warming Pacific waters indicated El Niño development and forecast normal to below-normal rainfall in Punjab, Sindh, southern Khyber Pakhtunkhwa and much of Balochistan, with strain on irrigation for rice, cotton and sugarcane.", sourceIds: ["pak-propakistani-pmd"], confidence: "reported" },
      { text: "In September 2026 a Pakistani outlet citing the World Meteorological Organization reported that El Niño was firmly established and expected to persist through February 2027, and noted that strong El Niño years are generally linked to reduced summer monsoon rainfall in Pakistan.", sourceIds: ["pak-propakistani-superelnino"], confidence: "reported" },
    ],
    energy: [
      { text: "Pakistan sources nearly all its LNG from Qatar; in July 2026 it launched an emergency spot tender after a scheduled Qatari cargo was cancelled, having bought a spot cargo at USD 17.37 per million BTU.", sourceIds: ["pak-thenews-lng"], confidence: "reported" },
      { text: "A long-term Qatari cargo that had turned back from the Strait of Hormuz on 31 July berthed on 10 August; Pakistan had received 14 cargoes since March, after QatarEnergy declared force majeure on 4 March.", sourceIds: ["pak-propakistani-cargo"], confidence: "reported" },
      { text: "Pakistani workers sent USD 3.6 billion home in July 2026, up 13 percent year on year, with Saudi Arabia and the UAE together supplying about 46 percent of the total.", sourceIds: ["pak-gulfnews-remit"], confidence: "reported" },
      { text: "From 22 September 2026 the petrol price rose by Rs 4.61 to Rs 393.75 per litre, while high-speed diesel fell by Rs 1.96 to Rs 422.08 per litre.", sourceIds: ["pak-pakobserver-fuel"], confidence: "reported" },
    ],
    policy: [
      { text: "In August 2026 Petroleum Minister Ali Pervaiz Malik proposed that the IMF allow a dynamic petroleum development levy and a fuel price stabilisation fund, saying programme commitments leave little room for universal fuel subsidies.", sourceIds: ["pak-propakistani-imf"], confidence: "reported" },
    ],
    metrics: [
      { label: "Workers' remittances, July 2026 (year on year)", value: "+13%", sourceIds: ["pak-gulfnews-remit"], asOf: "2026-07" },
      { label: "Share of Saudi Arabia and UAE in remittances, July 2026", value: "about 46%", sourceIds: ["pak-gulfnews-remit"], asOf: "2026-07" },
      { label: "Petrol price per litre, 22 Sep 2026", value: "Rs 393.75", sourceIds: ["pak-pakobserver-fuel"], asOf: "2026-09" },
    ],
  },
  UZB: {
    environmental: [
      { text: "An analysis published in April 2026 projected the Amu Darya flow to fall to 65 percent of its historical norm in the 2026 season, with canal water losses of up to 40 percent.", sourceIds: ["uzb-timesca-water"], confidence: "preliminary" },
      { text: "The national hydrometeorological service forecast in May 2026 that average summer temperatures could exceed the climatic norm, with peaks of 42 to 44 degrees Celsius and more frequent dust storms.", sourceIds: ["uzb-hydromet-summer"], confidence: "confirmed" },
    ],
    energy: [
      { text: "Gasoline imports in January to May 2026 reached 642 million litres worth USD 373 million, 84 percent more than a year earlier, and now cover nearly half of domestic demand.", sourceIds: ["uzb-timesca-fuel"], confidence: "reported" },
      { text: "The exchange price of AI-92 gasoline rose 5.1 percent between 27 February and 13 March 2026 as Hormuz shipping slowed, and reached a record 13.919 million soums per ton in late June.", sourceIds: ["uzb-kun-gasoline"], confidence: "reported" },
      { text: "In 2025, goods worth USD 3.9 billion, about 9 percent of total imports, entered Uzbekistan via Iran; the Ministry of Economy and Finance estimates losses of USD 1 to 1.5 billion (0.7 to 1 percent of GDP) if Middle East tensions disrupt trade.", sourceIds: ["uzb-kun-iran"], confidence: "reported" },
      { text: "Remittances reached USD 3.8 billion in the first quarter of 2026, with Russia's share falling to 72.4 percent from 77.6 percent a year earlier.", sourceIds: ["uzb-kun-remit"], confidence: "reported" },
    ],
    policy: [
      { text: "The government plans a 120,000-ton gasoline reserve before winter and has discussed supplies with Russian companies including Gazprom and Rosneft (July 2026).", sourceIds: ["uzb-timesca-fuel"], confidence: "reported" },
      { text: "In early August 2026 the Deputy Energy Minister stated that reserves for the autumn and winter plan would last two to three months.", sourceIds: ["uzb-aljazeera-petrol"], confidence: "reported" },
      { text: "In April 2026 ADB projected Uzbekistan's growth at 6.7 percent for 2026, adding that its assumption of an early stabilisation of the Middle East conflict had since given way to a higher likelihood of more persistent disruptions.", sourceIds: ["uzb-adb-outlook"], confidence: "confirmed" },
    ],
    metrics: [
      { label: "Gasoline imports Jan-May 2026 vs prior year", value: "+84%", sourceIds: ["uzb-timesca-fuel"], asOf: "2026-05" },
      { label: "Iran-transit share of total imports, 2025", value: "about 9%", sourceIds: ["uzb-kun-iran"], asOf: "2025" },
      { label: "Russia share of remittances, Q1 2026", value: "72.4%", sourceIds: ["uzb-kun-remit"], asOf: "2026-03" },
      { label: "Amu Darya projected flow, 2026 season", value: "65% of norm", sourceIds: ["uzb-timesca-water"], asOf: "2026-04" },
    ],
  },
};

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
  "vnm-vietnamnews-elnino": { id: "vnm-vietnamnews-elnino", tag: "[Viet Nam News, 23 Jul 2026]", publisher: "Viet Nam News", title: "El Niño warning raises concerns over Mekong Delta rice, hydropower and water security", url: "https://vietnamnews.vn/environment/1795959/el-ni-o-warning-raises-concerns-over-mekong-delta-rice-hydropower-and-water-security.html", date: "2026-07-23", type: "news" },
  "vnm-reuters-heat": { id: "vnm-reuters-heat", tag: "[Reuters, 27 May 2026]", publisher: "Reuters (via WHBL)", title: "Heatwave strain on Vietnam power grid could get worse, industry ministry says", url: "https://whbl.com/2026/05/27/heatwave-strain-on-vietnam-power-grid-could-get-worse-industry-ministry-says/", date: "2026-05-27", type: "news" },
  "vnm-vietnamnews-power": { id: "vnm-vietnamnews-power", tag: "[Viet Nam News, 12 May 2026]", publisher: "Viet Nam News", title: "Việt Nam prepares contingency plans for 2026 dry-season power shortages", url: "https://vietnamnews.vn/economy/1781173/viet-nam-prepares-contingency-plans-for-2026-dry-season-power-shortages.html", date: "2026-05-12", type: "news" },
  "vnm-tuoitre-supply": { id: "vnm-tuoitre-supply", tag: "[Tuoi Tre News, 28 Jul 2026]", publisher: "Tuoi Tre News", title: "Vietnam fuel retailers report supply shortages as Petrolimex wholesalers cite supply difficulties", url: "https://news.tuoitre.vn/vietnam-fuel-retailers-report-supply-shortages-as-petrolimex-wholesalers-cite-supply-difficulties-10326072811394177.htm", date: "2026-07-28", type: "news" },
  "vnm-vietnamnews-e10": { id: "vnm-vietnamnews-e10", tag: "[Viet Nam News, 2 Jun 2026]", publisher: "Viet Nam News", title: "E10 biofuel rolled out nationwide", url: "https://vietnamnews.vn/economy/1782527/e10-biofuel-rolled-out-nationwide.html", date: "2026-06-02", type: "news" },
  "tha-nation-elnino": { id: "tha-nation-elnino", tag: "[The Nation Thailand, 29 Jul 2026]", publisher: "The Nation Thailand", title: "Thailand Braces for Severe El Niño as Water Office Warns of Dry Spells into 2027", url: "https://www.nationthailand.com/news/policy/40069161", date: "2026-07-29", type: "news" },
  "tha-tbn-lng": { id: "tha-tbn-lng", tag: "[Thailand Business News, 23 Sep 2026]", publisher: "Thailand Business News", title: "Thailand faces a fresh LNG squeeze as Hormuz crisis pushes prices toward US$28/MMBtu", url: "https://www.thailand-business-news.com/markets/commodities/330458-thailand-faces-a-fresh-lng-squeeze-as-hormuz-crisis-pushes-prices-toward-us28-mmbtu", date: "2026-09-23", type: "news" },
  "tha-prd-wfh": { id: "tha-prd-wfh", tag: "[Public Relations Department Thailand, 11 Mar 2026]", publisher: "Government of Thailand, PRD", title: "Government Starts Measures on Work from Home and Overseas Trip Suspension to Cope with Middle East Conflict", url: "https://thailand.prd.go.th/en/content/category/detail/id/48/iid/484293", date: "2026-03-11", type: "official" },
  "phl-hro-4day": { id: "phl-hro-4day", tag: "[Human Resources Online, 6 Mar 2026]", publisher: "Human Resources Online", title: "Philippines adopts four-day work week for selected executive offices amidst Middle East crisis", url: "https://www.humanresourcesonline.net/philippines-adopts-four-day-work-week-for-selected-executive-offices-amidst-middle-east-crisis", date: "2026-03-06", type: "news" },
  "phl-philstar-fuel": { id: "phl-philstar-fuel", tag: "[Philstar, 14 Jul 2026]", publisher: "Philstar", title: "Fuel pressure returns to pump prices", url: "https://www.philstar.com/business/2026/07/14/2542090/fuel-pressure-returns-pump-prices", date: "2026-07-14", type: "news" },
  "idn-ibp-elnino": { id: "idn-ibp-elnino", tag: "[Indonesia Business Post, 6 Jul 2026]", publisher: "Indonesia Business Post", title: "Strong El Niño raises risks to Indonesia's food supply, inflation", url: "https://indonesiabusinesspost.com/6844/environment/strong-el-nino-raises-risks-to-indonesia-s-food-supply-inflation", date: "2026-07-06", type: "news" },
  "idn-jp-subsidy": { id: "idn-jp-subsidy", tag: "[The Jakarta Post, 2 Apr 2026]", publisher: "The Jakarta Post", title: "Indonesia estimates up to $5.9b needed for extra energy subsidies due to Iran war", url: "https://www.thejakartapost.com/business/2026/04/02/indonesia-estimates-up-to-59b-needed-for-extra-energy-subsidies-due-to-iran-war.html", date: "2026-04-02", type: "news" },
  "idn-jp-russia": { id: "idn-jp-russia", tag: "[The Jakarta Post, 17 Apr 2026]", publisher: "The Jakarta Post", title: "RI secures Russian crude imports, minister says", url: "https://www.thejakartapost.com/business/2026/04/17/ri-secures-russian-crude-imports-minister-says.html", date: "2026-04-17", type: "news" },
  "ind-ruralvoice-deficit": { id: "ind-ruralvoice-deficit", tag: "[Rural Voice, 30 Aug 2026]", publisher: "Rural Voice", title: "Monsoon Deficit Reaches 14 pc by August End; Nearly Half of India’s Districts See Below-Normal Rainfall", url: "https://eng.ruralvoice.in/monsoon-deficit-reaches-14-pc-by-august-end-nearly-half-of-india-districts-see-below-normal-rainfall", date: "2026-08-30", type: "news" },
  "ind-uni-monsoon-final": { id: "ind-uni-monsoon-final", tag: "[UNI India, 30 Sep 2026]", publisher: "UNI India", title: "Weather: monsoon deficit (final outcome of 2026 southwest monsoon)", url: "https://www.uniindia.com/national/weather-monsoon-deficit/198635", date: "2026-09-30", type: "news" },
  "ind-theprint-russia": { id: "ind-theprint-russia", tag: "[ThePrint, 16 Jul 2026]", publisher: "ThePrint", title: "Russian crude continues to make up 50% of India's oil imports in July as Hormuz risks persist", url: "https://theprint.in/economy/russian-crude-continues-to-make-up-50-of-indias-oil-imports-in-july-as-hormuz-risks-persist/2987567/", date: "2026-07-16", type: "news" },
  "ind-outlookbusiness-russia": { id: "ind-outlookbusiness-russia", tag: "[Outlook Business, 1 Apr 2026]", publisher: "Outlook Business", title: "As Hormuz Shuts, India Turns Back to Russian Oil in Big Way", url: "https://www.outlookbusiness.com/economy-and-policy/as-hormuz-shuts-india-turns-back-to-russian-oil-in-big-way", date: "2026-04-01", type: "news" },
  "ind-kuwaittimes-lpg": { id: "ind-kuwaittimes-lpg", tag: "[Kuwait Times, 27 Jun 2026]", publisher: "Kuwait Times", title: "India ends curbs on commercial gas supply", url: "https://kuwaittimes.com/article/45558/business/india-ends-curbs-on-commercial-gas-supply/", date: "2026-06-27", type: "news" },
  "ind-businesstoday-excise": { id: "ind-businesstoday-excise", tag: "[Business Today, 27 Mar 2026]", publisher: "Business Today", title: "Govt slashes excise duty on petrol and diesel; check new rates", url: "https://www.businesstoday.in/india/story/govt-slashes-excise-duty-on-petrol-and-diesel-check-new-rates-522590-2026-03-27", date: "2026-03-27", type: "news" },
  "ind-air-exportduty": { id: "ind-air-exportduty", tag: "[All India Radio (News on AIR), 27 Mar 2026]", publisher: "All India Radio (News on AIR)", title: "Government reduces central excise duty on Petrol and Diesel by 10 rupees per liter", url: "https://www.newsonair.gov.in/central-government-announces-duty-cut-on-fuel-export-taxes-to-ensure-domestic-supply", date: "2026-03-27", type: "official" },
  "chn-cgtn-elnino": { id: "chn-cgtn-elnino", tag: "[CGTN, 30 Sep 2026]", publisher: "CGTN", title: "Strongest super El Nino Event on record expected around November", url: "https://news.cgtn.com/news/2026-09-30/Strongest-super-El-Nino-Event-on-record-expected-around-November-1QRH09pTytW/p.html", date: "2026-09-30", type: "news" },
  "chn-chinadaily-summer": { id: "chn-chinadaily-summer", tag: "[China Daily, 12 May 2026]", publisher: "China Daily", title: "Meteorologists warn of hotter, wetter summer ahead", url: "https://global.chinadaily.com.cn/a/202605/12/WS6a029b68a310d6866eb4821e.html", date: "2026-05-12", type: "news" },
  "chn-globallnghub-lng": { id: "chn-globallnghub-lng", tag: "[Global LNG Hub, 2 Sep 2026]", publisher: "Global LNG Hub", title: "China LNG imports fall as supply mix shifts", url: "https://globallnghub.com/china-lng-imports-fall-as-supply-mix-shifts/", date: "2026-09-02", type: "industry" },
  "chn-hcp-stocks": { id: "chn-hcp-stocks", tag: "[Hydrocarbon Processing, 2 Jun 2026]", publisher: "Hydrocarbon Processing", title: "China seen tapping deeper into oil stockpiles as imports hit decade-low", url: "https://hydrocarbonprocessing.com/news/2026/06/china-seen-tapping-deeper-into-oil-stockpiles-as-imports-hit-decade-low/", date: "2026-06-02", type: "industry" },
  "chn-tankterminals-exports": { id: "chn-tankterminals-exports", tag: "[Tank Terminals, 5 Mar 2026]", publisher: "Tank Terminals", title: "China Halts Fuel Exports Amid Global Market Squeeze", url: "https://tankterminals.com/news/china-halts-fuel-exports-amid-global-market-squeeze", date: "2026-03-05", type: "industry" },
  "chn-hsn-sulphuric": { id: "chn-hsn-sulphuric", tag: "[Hellenic Shipping News (Kpler), 4 Jun 2026]", publisher: "Hellenic Shipping News (Kpler)", title: "Sulphur & sulphuric acid in 2026: The feedstock crisis cascading through copper, nickel & fertilisers", url: "https://hellenicshippingnews.com/sulphur-sulphuric-acid-in-2026-the-feedstock-crisis-cascading-through-copper-nickel-fertilisers", date: "2026-06-04", type: "industry" },
  "jpn-jwa-outlook": { id: "jpn-jwa-outlook", tag: "[Japan Weather Association, 26 Mar 2026]", publisher: "Japan Weather Association", title: "Seasonal outlook for 2026 (El Niño transition and summer temperatures)", url: "https://weather-jwa.jp/en/news/articles/post11584", date: "2026-03-26", type: "research" },
  "jpn-tankterminals-imports": { id: "jpn-tankterminals-imports", tag: "[Tank Terminals, 22 May 2026]", publisher: "Tank Terminals", title: "Japan's Crude Imports from Middle East Slump to Lowest on Record", url: "https://tankterminals.com/news/japans-crude-imports-from-middle-east-slump-to-lowest-on-record/", date: "2026-05-22", type: "industry" },
  "jpn-hcp-diversify": { id: "jpn-hcp-diversify", tag: "[Hydrocarbon Processing, 26 Aug 2026]", publisher: "Hydrocarbon Processing", title: "Japan to diversify crude supplies, back pipelines that bypass Hormuz", url: "https://hydrocarbonprocessing.com/news/2026/08/japan-to-diversify-crude-supplies-back-pipelines-that-bypass-hormuz/", date: "2026-08-26", type: "industry" },
  "jpn-adnkronos-subsidy": { id: "jpn-adnkronos-subsidy", tag: "[Adnkronos, 19 Mar 2026]", publisher: "Adnkronos", title: "Japan Resumes Gasoline Subsidies amid Middle East Tensions", url: "https://english.adnkronos.com/2026/03/19/japan-resumes-gasoline-subsidies-amid-middle-east-tensions/", date: "2026-03-19", type: "news" },
  "jpn-b360-powerr": { id: "jpn-b360-powerr", tag: "[B360 Nepal, 17 Jun 2026]", publisher: "B360 Nepal", title: "G7 Evian: Japan introduces POWERR Asia initiative, receives support on strengthening global oil stockpiles", url: "https://www.b360nepal.com/detail/29003/g7-evian-japan-introduces-powerr-asia-initiative-receives-support-on-strengthening-global-oil-stockpiles", date: "2026-06-17", type: "news" },
  "kor-joongang-elnino": { id: "kor-joongang-elnino", tag: "[Korea JoongAng Daily, 20 Aug 2026]", publisher: "Korea JoongAng Daily", title: "A storm is brewing: 'Super El Niño' could put Korea right in the crosshairs", url: "https://www.koreajoongangdaily.com/korea/a-storm-is-brewing-super-el-nino-could-put-korea-right-in-the-crosshairs/12828471", date: "2026-08-20", type: "news" },
  "kor-baird-lng": { id: "kor-baird-lng", tag: "[Baird Maritime, 20 Mar 2026]", publisher: "Baird Maritime", title: "South Korea downplays LNG supply risk after Qatar plant damage", url: "https://www.bairdmaritime.com/shipping/tankers/gas/south-korea-downplays-lng-supply-risk-after-qatar-plant-damage", date: "2026-03-20", type: "news" },
  "kor-keia-energy": { id: "kor-keia-energy", tag: "[Korea Economic Institute of America, 25 Mar 2026]", publisher: "Korea Economic Institute of America", title: "The Iran War Is Stress-Testing South Korea's Energy Model", url: "https://keia.org/analysis/the-iran-war-is-stress-testing-south-koreas-energy-model/", date: "2026-03-25", type: "research" },
  "kor-khan-measures": { id: "kor-khan-measures", tag: "[The Kyunghyang Shinmun, 26 Mar 2026]", publisher: "The Kyunghyang Shinmun", title: "South Korea emergency response to Middle East crisis (fuel tax cut expansion, naphtha export controls)", url: "https://www.khan.co.kr/en/article/202603261729027", date: "2026-03-26", type: "news" },
  "lka-malaymail-fuel": { id: "lka-malaymail-fuel", tag: "[Malay Mail, 22 Mar 2026]", publisher: "Malay Mail", title: "Sri Lanka lifts fuel prices 25pc as Hormuz closure hits imports from Malaysia and other countries", url: "https://www.malaymail.com/news/money/2026/03/22/sri-lanka-lifts-fuel-prices-25pc-as-hormuz-closure-hits-imports-from-malaysia-and-other-countries/213484", date: "2026-03-22", type: "news" },
  "lka-cbsl-external-apr": { id: "lka-cbsl-external-apr", tag: "[CBSL, 29 May 2026]", publisher: "Central Bank of Sri Lanka", title: "External Sector Performance - April 2026", url: "https://www.cbsl.gov.lk/en/node/20409", date: "2026-05-29", type: "official" },
  "lka-cbsl-imf-review": { id: "lka-cbsl-imf-review", tag: "[CBSL/IMF, 28 May 2026]", publisher: "Central Bank of Sri Lanka", title: "IMF Executive Board Completes the Combined Fifth and Sixth Reviews Under the Extended Fund Facility for Sri Lanka", url: "https://www.cbsl.gov.lk/en/node/20395", date: "2026-05-28", type: "official" },
  "lka-newsfirst-may": { id: "lka-newsfirst-may", tag: "[Newsfirst, 30 May 2026]", publisher: "Newsfirst", title: "CPC Raises Prices Of Diesel, Petrol, Kerosene", url: "https://english.newsfirst.lk/2026/05/30/sri-lanka-s-cpc-raises-prices-of-diesel-petrol-kerosene", date: "2026-05-30", type: "news" },
  "mys-vibes-elnino-aug": { id: "mys-vibes-elnino-aug", tag: "[The Vibes, 17 Aug 2026]", publisher: "The Vibes", title: "Strong El Nino threatens Malaysia with severe dry spells, haze and extreme heat", url: "https://www.thevibes.com/articles/news/126252/strong-el-nino-threatens-malaysia-with-severe-dry-spells-haze-and-extreme-heat", date: "2026-08-17", type: "news" },
  "mys-nst-haze": { id: "mys-nst-haze", tag: "[New Straits Times, 14 Aug 2026]", publisher: "New Straits Times", title: "High chance of haze persisting until late September", url: "https://www.nst.com.my/amp/news/nation/2026/08/1511084/high-chance-haze-persisting-until-late-september", date: "2026-08-14", type: "news" },
  "mys-vibes-elnino-sep": { id: "mys-vibes-elnino-sep", tag: "[The Vibes, 30 Sep 2026]", publisher: "The Vibes", title: "El Nino to bring drier weather, higher temperatures and greater haze risk in Malaysia", url: "https://www.thevibes.com/articles/news/127819/el-nino-to-bring-drier-weather-higher-temperatures-and-greater-haze-risk-in-malaysia", date: "2026-09-30", type: "news" },
  "mys-star-subsidy-jul": { id: "mys-star-subsidy-jul", tag: "[The Star, 16 Jul 2026]", publisher: "The Star", title: "No plans to reduce existing fuel subsidies", url: "https://www.thestar.com.my/news/nation/2026/07/16/no-plans-to-reduce-existing-fuel-subsidies", date: "2026-07-16", type: "news" },
  "mys-star-subsidy-sep": { id: "mys-star-subsidy-sep", tag: "[The Star, 2 Sep 2026]", publisher: "The Star", title: "Marginal impact seen on revised subsidy bill", url: "https://www.thestar.com.my/business/business-news/2026/09/02/marginal-impact-seen-on-revised-subsidy-bill", date: "2026-09-02", type: "news" },
  "per-star-emergency": { id: "per-star-emergency", tag: "[The Star/Reuters, 2 Jul 2026]", publisher: "The Star (Reuters)", title: "Peru declares state of emergency in 40% of districts ahead of El Niño rains", url: "https://www.thestar.com.my/news/world/2026/07/02/peru-declares-state-of-emergency-in-40-of-districts-ahead-of-el-nio-rains", date: "2026-07-02", type: "news" },
  "per-infobae-anchoveta": { id: "per-infobae-anchoveta", tag: "[Infobae, 17 Apr 2026]", publisher: "Infobae", title: "Cuota de anchoveta para la primera temporada de 2026 es la más baja en una década", url: "https://www.infobae.com/peru/2026/04/17/cuota-de-anchoveta-para-la-primera-temporada-de-2026-es-la-mas-baja-en-una-decada/", date: "2026-04-17", type: "news" },
  "per-economia-diesel": { id: "per-economia-diesel", tag: "[Revista Economía, 12 Aug 2026]", publisher: "Revista Economía", title: "Combustibles en Perú: diésel B5 supera los S/24 y duplica su precio en seis meses", url: "https://www.revistaeconomia.com/combustibles-en-peru-diesel-b5-supera-los-s-24-y-duplica-su-precio-en-seis-meses/", date: "2026-08-12", type: "news" },
  "per-larepublica-emergencia": { id: "per-larepublica-emergencia", tag: "[La República, 23 May 2026]", publisher: "La República (Colombia)", title: "Perú declarará en emergencia el mercado de combustibles, ¿qué llevó al país a decidirlo?", url: "https://www.larepublica.co/globoeconomia/peru-declarara-en-emergencia-el-mercado-de-combustibles-que-llevo-al-pais-a-decidirlo-4399125", date: "2026-05-23", type: "news" },
  "per-lpderecho-du003": { id: "per-lpderecho-du003", tag: "[LP Derecho, 11 May 2026]", publisher: "LP Derecho", title: "Petroperú recibirá apoyo financiero de $2000 millones para evitar desabastecimiento de combustibles [DU 003-2026]", url: "https://lpderecho.pe/petroperu-recibira-apoyo-financiero-evitar-desabastecimiento-combustibles-decreto-urgencia-003-2026/", date: "2026-05-11", type: "news" },
  "bra-inmet-primavera": { id: "bra-inmet-primavera", tag: "[INMET, Sep 2026]", publisher: "INMET", title: "Prognóstico Primavera 2026", url: "https://portal.inmet.gov.br/uploads/notastecnicas/Prognostico_Primavera_2026.pdf", date: "2026-09", type: "official" },
  "bra-datamar-gap": { id: "bra-datamar-gap", tag: "[Datamar News, 4 Mar 2026]", publisher: "Datamar News", title: "War-driven oil rally widens Brazil's fuel price gap with imports", url: "https://datamarnews.com/noticias/war-driven-oil-rally-widens-brazils-fuel-price-gap-with-imports/", date: "2026-03-04", type: "industry" },
  "bra-noticiasagricolas-rabobank": { id: "bra-noticiasagricolas-rabobank", tag: "[Notícias Agrícolas/Rabobank, 13 Apr 2026]", publisher: "Notícias Agrícolas", title: "Consumo de fertilizantes no Brasil deve cair em 2026 em meio a preços mais altos por guerra, diz Rabobank", url: "https://www.noticiasagricolas.com.br/noticia/418893", date: "2026-04-13", type: "news" },
  "bra-poder360-subsidio": { id: "bra-poder360-subsidio", tag: "[Poder360, 30 May 2026]", publisher: "Poder360", title: "Governo Lula dá novo subsídio ao diesel, de R$ 0,35 por litro", url: "https://www.poder360.com.br/poder-energia/governo-lula-da-novo-subsidio-ao-diesel-de-r-035-por-litro/", date: "2026-05-30", type: "news" },
  "bra-cenario-petrobras": { id: "bra-cenario-petrobras", tag: "[Cenário Energia, 1 Jun 2026]", publisher: "Cenário Energia", title: "Petrobras reduz preço do diesel A para R$ 3,30 e avalia nova subvenção do governo federal", url: "https://cenarioenergia.com.br/2026/06/01/petrobras-reduz-preco-do-diesel-a-para-r-330-e-avalia-nova-subvencao-do-governo-federal/", date: "2026-06-01", type: "news" },
  "mex-imparcial-smn": { id: "mex-imparcial-smn", tag: "[El Imparcial/SMN, 11 Jul 2026]", publisher: "El Imparcial", title: "El Niño alcanzará su mayor intensidad entre octubre y diciembre de 2026, advierte el SMN", url: "https://elimparcial.com/mexico/2026/07/11/el-nino-alcanzara-su-mayor-intensidad-entre-octubre-y-diciembre-de-2026-advierte-el-smn-preven-mas-sequias-cambios-en-las-lluvias-y-97-de-probabilidad-de-que-continue-hasta-2027/", date: "2026-07-11", type: "news" },
  "mex-imparcial-diesel": { id: "mex-imparcial-diesel", tag: "[El Imparcial, 3 Apr 2026]", publisher: "El Imparcial", title: "Hacienda eleva el estímulo al diésel al 81.20% para frenar el aumento de precios tras el bloqueo del Estrecho de Ormuz que elevó el petróleo a 107 dólares", url: "https://www.elimparcial.com/dinero/2026/04/03/hacienda-eleva-el-estimulo-al-diesel-al-8120-para-frenar-el-aumento-de-precios-tras-el-bloqueo-del-estrecho-de-ormuz-que-elevo-el-petroleo-a-107-dolares/", date: "2026-04-03", type: "news" },
  "mex-imparcial-mayo": { id: "mex-imparcial-mayo", tag: "[El Imparcial, 23 May 2026]", publisher: "El Imparcial", title: "Hacienda eleva los subsidios a la gasolina Magna, Premium y diésel para mantener los precios máximos en las estaciones de servicio", url: "https://www.elimparcial.com/dinero/2026/05/23/hacienda-eleva-los-subsidios-a-la-gasolina-magna-premium-y-diesel-para-mantener-los-precios-maximos-en-las-estaciones-de-servicio/", date: "2026-05-23", type: "news" },
  "mex-imparcial-pacto": { id: "mex-imparcial-pacto", tag: "[El Imparcial, 11 Mar 2026]", publisher: "El Imparcial", title: "México topa la gasolina magna en 24 pesos hasta septiembre de 2026 tras renovar pacto con gasolineros", url: "https://www.elimparcial.com/dinero/2026/03/11/mexico-topa-la-gasolina-magna-en-24-pesos-hasta-septiembre-de-2026-tras-renovar-pacto-con-gasolineros/", date: "2026-03-11", type: "news" },
  "gtm-ipc": { id: "gtm-ipc", tag: "[IPC, 5 Aug 2026]", publisher: "IPC", title: "Guatemala: Análisis de Inseguridad Alimentaria Aguda CIF, abril 2026 a febrero 2027", url: "https://www.foodsecurityportal.org/sites/default/files/2026-08/IPC_Guatemala_Acute_Food_Insecurity_Apr2026_Feb2027_Report_Spanish.pdf", date: "2026-08-05", type: "intergovernmental" },
  "gtm-emisoras-canicula": { id: "gtm-emisoras-canicula", tag: "[Emisoras Unidas, 25 May 2026]", publisher: "Emisoras Unidas", title: "Advierten impacto crítico en Guatemala por déficit de lluvias y posible canícula prolongada", url: "https://emisorasunidas.com/nacional/2026/05/25/alerta-amarilla-guatemala-deficit-lluvias-canicula-agricultura-sequia/", date: "2026-05-25", type: "news" },
  "gtm-prensalatina-fuel": { id: "gtm-prensalatina-fuel", tag: "[Prensa Latina, 18 Mar 2026]", publisher: "Prensa Latina", title: "Precios de los combustibles con nuevo aumento en Guatemala", url: "https://www.prensa-latina.cu/2026/03/18/precios-de-los-combustibles-con-nuevo-aumento-en-guatemala/", date: "2026-03-18", type: "news" },
  "hnd-eyn-red": { id: "hnd-eyn-red", tag: "[Revista Estrategia y Negocios, 19 Aug 2026]", publisher: "Revista Estrategia y Negocios", title: "Gobierno de Honduras apoyará a 75 municipios en alerta roja por sequía", url: "https://www.revistaeyn.com/centroamericaymundo/gobierno-de-honduras-apoyara-a-75-municipios-en-alerta-roja-por-sequia-JD31763587", date: "2026-08-19", type: "news" },
  "hnd-eyn-un": { id: "hnd-eyn-un", tag: "[Revista Estrategia y Negocios, 20 Aug 2026]", publisher: "Revista Estrategia y Negocios", title: "Honduras recibirá donativo de US$20 millones para enfrentar sequía", url: "https://www.revistaeyn.com/centroamericaymundo/honduras-recibira-donativo-de-us-20-millones-para-enfrentar-sequia-NC31774854", date: "2026-08-20", type: "news" },
  "hnd-elheraldo-sub": { id: "hnd-elheraldo-sub", tag: "[El Heraldo, 15 Mar 2026]", publisher: "El Heraldo", title: "Gobierno anuncia subsidio del 50% al alza de dos combustibles ante aumento internacional", url: "https://www.elheraldo.hn/economia/gobierno-nasry-asfura-anuncia-subsidio-50-alza-combustibles-aumento-internacional-crisis-medio-oriente-iran-IP29738257", date: "2026-03-15", type: "news" },
  "hnd-laprensa-sub": { id: "hnd-laprensa-sub", tag: "[La Prensa, 30 Apr 2026]", publisher: "La Prensa (Honduras)", title: "Gobierno anuncia continuidad de subsidios a energía eléctrica, combustibles y gas LPG", url: "https://www.laprensa.hn/honduras/gobierno-anuncia-continuidad-subsidios-energia-electrica-combustibles-gas-lpg-NG30418014", date: "2026-04-30", type: "news" },
  "slv-eyn-agosto": { id: "slv-eyn-agosto", tag: "[Revista Estrategia y Negocios, 3 Sep 2026]", publisher: "Revista Estrategia y Negocios", title: "El Salvador vivió el agosto 'más seco' desde 1971 con temperaturas récords", url: "https://www.revistaeyn.com/centroamericaymundo/el-salvador-vivio-el-agosto-mas-seco-desde-1971-con-temperaturas-records-NK31911149", date: "2026-09-03", type: "news" },
  "slv-elmundo-alerta": { id: "slv-elmundo-alerta", tag: "[Diario El Mundo, 25 Aug 2026]", publisher: "Diario El Mundo (El Salvador)", title: "Protección Civil declara alerta roja nacional por sequía en El Salvador", url: "https://diario.elmundo.sv/nacionales/proteccion-civil-declara-alerta-roja-nacional-por-sequia-en-el-salvador", date: "2026-08-25", type: "news" },
  "slv-elsalvador-fuel": { id: "slv-elsalvador-fuel", tag: "[elsalvador.com, 25 May 2026]", publisher: "elsalvador.com", title: "Freno al alza de gasolina y diésel en El Salvador", url: "https://www.elsalvador.com/noticias/nacional/freno-al-alza-de-gasolina-y-diesel-en-el-salvador/1275597/2026/", date: "2026-05-25", type: "news" },
  "hti-wfp-apr": { id: "hti-wfp-apr", tag: "[WFP, 17 Apr 2026]", publisher: "WFP", title: "WFP urges support to protect gains in fight against entrenched food insecurity in Haiti", url: "https://www.wfp.org/news/wfp-urges-support-protect-gains-fight-against-entrenched-food-insecurity-haiti", date: "2026-04-17", type: "intergovernmental" },
  "hti-africanews-fuel": { id: "hti-africanews-fuel", tag: "[Africanews, 16 Apr 2026]", publisher: "Africanews", title: "Haiti: High fuel, food prices pile new pressure on families", url: "https://www.africanews.com/amp/2026/04/16/haiti-high-fuel-food-prices-pile-new-pressure-on-families/", date: "2026-04-16", type: "news" },
  "dom-revistamercado-sep": { id: "dom-revistamercado-sep", tag: "[Revista Mercado, 11 Sep 2026]", publisher: "Revista Mercado", title: "República Dominicana mantiene sin cambios los precios de los combustibles: este es el costo del subsidio", url: "https://revistamercado.do/money-invest/daily-news/precios-combustibles-republica-dominicana-subsidio-septiembre/", date: "2026-09-11", type: "news" },
  "dom-acento-eficiencia": { id: "dom-acento-eficiencia", tag: "[Acento, 25 Mar 2026]", publisher: "Acento", title: "Gobierno pasa de monitorear la crisis en Medio Oriente a impulsar ley de eficiencia energética", url: "https://acento.com.do/economia/gobierno-pasa-del-monitoreo-a-impulsar-ley-de-eficiencia-energetica-ante-crisis-en-medio-oriente-9647398.html", date: "2026-03-25", type: "news" },
  "dom-acento-900": { id: "dom-acento-900", tag: "[Acento, 26 May 2026]", publisher: "Acento", title: "El costo de una guerra que no es nuestra: cómo el conflicto Irán-Israel le quita US$ 900 millones al bolsillo dominicano", url: "https://acento.com.do/economia/el-costo-de-una-guerra-que-no-es-nuestra-como-el-conflicto-iran-israel-le-quita-us-900-millones-al-bolsillo-dominicano-9685481.html", date: "2026-05-26", type: "news" },
  "dom-dominicantoday-plan": { id: "dom-dominicantoday-plan", tag: "[Dominican Today, 19 Jun 2026]", publisher: "Dominican Today", title: "Dominican Republic activates emergency plan as El Niño increases drought threat", url: "https://dominicantoday.com/dominican-republic-activates-emergency-plan-as-el-nino-increases-drought-threat/", date: "2026-06-19", type: "news" },
  "cub-directorio-elnino": { id: "cub-directorio-elnino", tag: "[Directorio Cubano, 18 Aug 2026]", publisher: "Directorio Cubano", title: "El Niño en Cuba eleva riesgos de sequía, calor e invierno severo", url: "https://www.directoriocubano.info/acontecer/el-nino-cuba-sequia-calor-invierno/", date: "2026-08-18", type: "news" },
  "cub-directorio-deficit": { id: "cub-directorio-deficit", tag: "[Directorio Cubano, 12 Sep 2026]", publisher: "Directorio Cubano", title: "Cuba vuelve a enfrentar una fuerte falta de electricidad este sábado", url: "https://www.directoriocubano.info/?p=150971", date: "2026-09-12", type: "news" },
  "cub-emol-apagon7": { id: "cub-emol-apagon7", tag: "[Emol, 18 Sep 2026]", publisher: "Emol", title: "Cuba sufre su séptimo apagón masivo de 2026", url: "https://www.emol.com/noticias/Internacional/2026/09/18/1211850/cuba-septimo-apagon-masivo-2026.html", date: "2026-09-18", type: "news" },
  "cub-bloomberglinea-apagon6": { id: "cub-bloomberglinea-apagon6", tag: "[Bloomberg Línea, 3 Aug 2026]", publisher: "Bloomberg Línea", title: "Cuba padece su sexto apagón eléctrico nacional en 2026, ¿cómo avanza la reconexión?", url: "https://www.bloomberglinea.com/2026/08/03/cuba-padece-su-sexto-apagon-electrico-nacional-en-2026-como-avanza-la-reconexion/", date: "2026-08-03", type: "news" },
  "cub-swissinfo-medidas": { id: "cub-swissinfo-medidas", tag: "[Swissinfo, 7 Feb 2026]", publisher: "Swissinfo (EFE)", title: "Cuba confirma sus primeras medidas anticrisis: racionamiento de combustible y teletrabajo", url: "https://www.swissinfo.ch/spa/cuba-confirma-sus-primeras-medidas-anticrisis:-racionamiento-de-combustible-y-teletrabajo/90904260", date: "2026-02-07", type: "news" },
  "sau-bt-sepship": { id: "sau-bt-sepship", tag: "[Business Today, 24 Sep 2026]", publisher: "Business Today", title: "Saudi Arabia boosts crude shipments through Strait of Hormuz", url: "https://www.businesstoday.in/world/story/saudi-arabia-boosts-crude-shipments-through-strait-of-hormuz-557675-2026-09-24", date: "2026-09-24", type: "news" },
  "sau-agbi-sukuk": { id: "sau-agbi-sukuk", tag: "[AGBI, Sep 2026]", publisher: "AGBI", title: "Saudi Arabia raises $3bn with new two-tranche sukuk", url: "https://agbi.com/markets/2026/09/saudi-arabia-raises-3bn-with-new-two-tranche-sukuk", date: "2026-09", type: "news" },
  "sau-arabnews-q2": { id: "sau-arabnews-q2", tag: "[Arab News, 30 Jul 2026]", publisher: "Arab News", title: "Saudi Arabia posts $9.12bn deficit in Q2", url: "https://www.arabnews.pk/business/saudi-arabia-posts-912bn-deficit-in-q2-2652820", date: "2026-07-30", type: "news" },
  "sau-eam-gdp": { id: "sau-eam-gdp", tag: "[Enterprise, 2 Aug 2026]", publisher: "Enterprise", title: "Conflict dents Saudi GDP, but oil price shrinks 2Q deficit", url: "https://enterpriseam.com/ksa/2026/08/02/conflict-dents-saudi-gdp-but-oil-price-shrinks-2q-deficit/", date: "2026-08-02", type: "news" },
  "gcc-eam-sts": { id: "gcc-eam-sts", tag: "[Enterprise, 29 Sep 2026]", publisher: "Enterprise", title: "Aramco weighs discounts on Oman ship-to-ship crude as exports climb", url: "https://enterpriseam.com/ksa/2026/09/29/aramco-weighs-discounts-on-oman-ship-to-ship-crude-as-exports-climb/", date: "2026-09-29", type: "news" },
  "sau-oedigital-yanbu": { id: "sau-oedigital-yanbu", tag: "[Offshore Engineer, 24 Mar 2026]", publisher: "Offshore Engineer", title: "Saudi Aramco Increases Crude Oil Exports from Yanbu Sea to Compensate for Hormuz Closure", url: "https://www.oedigital.com/amp/news/537250-saudi-aramco-increases-crude-oil-exports-from-yanbu-sea-to-compensate-for-hormuz-closure", date: "2026-03-24", type: "news" },
  "gcc-air-opecplus": { id: "gcc-air-opecplus", tag: "[All India Radio News, 7 Sep 2026]", publisher: "All India Radio News", title: "OPEC+ countries decide to keep oil production target for October unchanged", url: "https://newsonair.gov.in/opec-maintains-oil-output-levels-for-october-amid-global-uncertainty/", date: "2026-09-07", type: "news" },
  "are-ap-opec": { id: "are-ap-opec", tag: "[AP via ABC News, 28 Apr 2026]", publisher: "AP via ABC News", title: "United Arab Emirates says it will leave OPEC effective May 1", url: "https://abcnews.com/Business/wireStory/united-arab-emirates-leave-opec-effective-1-132450136", date: "2026-04-28", type: "news" },
  "are-maritime-pipe": { id: "are-maritime-pipe", tag: "[The Maritime Executive, 15 May 2026]", publisher: "The Maritime Executive", title: "UAE Instructs ADNOC to Accelerate Pipeline Construction to Bypass Hormuz", url: "https://maritime-executive.com/article/uae-instructs-adnoc-to-accelerate-pipeline-construction-to-bypass-hormuz", date: "2026-05-15", type: "news" },
  "are-eam-sp": { id: "are-eam-sp", tag: "[Enterprise, 24 Jun 2026]", publisher: "Enterprise", title: "S&P puts numbers on the UAE's worst year in recent memory", url: "https://enterpriseam.com/uae/2026/06/24/sp-puts-numbers-on-the-uaes-worst-year-in-recent-memory-2/", date: "2026-06-24", type: "news" },
  "qat-agbi-fm": { id: "qat-agbi-fm", tag: "[AGBI, Jul 2026]", publisher: "AGBI", title: "Force majeure on QatarEnergy LNG extends to fourth month", url: "https://www.agbi.com/oil-and-gas/2026/07/force-majeure-on-qatarenergy-lng-extends-to-fourth-month/", date: "2026-07", type: "news" },
  "qat-agbi-gdp": { id: "qat-agbi-gdp", tag: "[AGBI, Aug 2026]", publisher: "AGBI", title: "Qatar economy shrinks after disruption to LNG exports", url: "https://www.agbi.com/economy/2026/08/qatar-economy-shrinks-after-disruption-to-lng-exports/", date: "2026-08", type: "news" },
  "qat-euronews-q2": { id: "qat-euronews-q2", tag: "[Euronews, 9 Sep 2026]", publisher: "Euronews", title: "Qatar's budget deficit more than doubles to 5bn in second quarter amid LNG disruption", url: "https://www.euronews.com/business/2026/09/09/qatars-budget-deficit-more-than-doubles-to-5bn-in-second-quarter-amid-lng-disruption", date: "2026-09-09", type: "news" },
  "kwt-arabnews-crisis": { id: "kwt-arabnews-crisis", tag: "[Arab News, 14 Aug 2026]", publisher: "Arab News", title: "'Biggest crisis for oil sector': Kuwait's future tied to Hormuz fate", url: "https://www.arabnews.pk/middle-east/biggest-crisis-for-oil-sector-kuwaits-future-tied-to-hormuz-fate-2654606", date: "2026-08-14", type: "news" },
  "kwt-agbi-debt": { id: "kwt-agbi-debt", tag: "[AGBI, May 2026]", publisher: "AGBI", title: "Kuwait turns to debt markets as Hormuz disruption hits revenue", url: "https://www.agbi.com/markets/2026/05/kuwait-turns-to-debt-markets-as-hormuz-disruption-hits-revenue/", date: "2026-05", type: "news" },
  "irq-agbi-reserves": { id: "irq-agbi-reserves", tag: "[AGBI, Sep 2026]", publisher: "AGBI", title: "Iraq drains $16bn from reserves after oil revenues slump", url: "https://www.agbi.com/economy/2026/09/iraq-drains-16bn-from-reserves-after-oil-revenues-slump/", date: "2026-09", type: "news" },
  "irq-agbi-salary": { id: "irq-agbi-salary", tag: "[AGBI, Jul 2026]", publisher: "AGBI", title: "Expect salary delays with Iraq in liquidity crisis, says official", url: "https://agbi.com/economy/2026/07/expect-salary-delays-with-iraq-in-liquidity-crisis-says-official", date: "2026-07", type: "news" },
  "irq-annahar-ceyhan": { id: "irq-annahar-ceyhan", tag: "[Annahar, 18 Mar 2026]", publisher: "Annahar", title: "Iraq finds a way around strait of Hormuz, restarts oil exports through Turkey", url: "https://en.annahar.com/en/region/middle-east/289033/iraq-finds-a-way-around-strait-of-hormuz-restarts-oil-exports-through-turkey", date: "2026-03-18", type: "news" },
  "irn-national-petrol": { id: "irn-national-petrol", tag: "[The National, 7 Sep 2026]", publisher: "The National", title: "Petrol prices to double under Iran's war economy", url: "https://www.thenationalnews.com/news/gulf/2026/09/07/petrol-prices-to-double-under-irans-war-economy/", date: "2026-09-07", type: "news" },
  "irn-euronews-econ": { id: "irn-euronews-econ", tag: "[Euronews, 10 Sep 2026]", publisher: "Euronews", title: "'The country is falling apart': Iranians tell Euronews how war emptied their wallets", url: "https://www.euronews.com/2026/09/10/the-country-is-falling-apart-iranians-tell-euronews-how-war-emptied-their-wallets", date: "2026-09-10", type: "news" },
  "irn-khaleej-talks": { id: "irn-khaleej-talks", tag: "[Khaleej Times, 8 Apr 2026]", publisher: "Khaleej Times", title: "Pakistan to host US-Iran ceasefire talks", url: "https://www.khaleejtimes.com/world/pakistan-to-host-us-iran-ceasefire-talks-april-10-2026", date: "2026-04-08", type: "news" },
  "ken-capitalfm-rains": { id: "ken-capitalfm-rains", tag: "[Capital FM, 26 Aug 2026]", publisher: "Capital FM", title: "80pc of Kenya faces above-average rains, prolonged wet spells", url: "https://capitalfm.africa/80pc-of-kenya-faces-above-average-rains-prolonged-wet-spells/", date: "2026-08-26", type: "news" },
  "ken-kmd-ncof13": { id: "ken-kmd-ncof13", tag: "[Kenya Meteorological Department, 26 Aug 2026]", publisher: "Kenya Meteorological Department", title: "NCOF 13 Statement 26th Aug 2026", url: "https://meteo.go.ke/documents/4755/NCOF_13_Statement_26th_Aug_2026_Final.pdf", date: "2026-08-26", type: "official" },
  "ken-citizen-epra": { id: "ken-citizen-epra", tag: "[Citizen Digital, 14 Sep 2026]", publisher: "Citizen Digital", title: "Petrol, diesel, kerosene prices remain unchanged in latest EPRA review", url: "https://citizen.digital/article/petrol-diesel-kerosene-prices-remain-unchanged-in-latest-epra-review-1-n390158", date: "2026-09-14", type: "news" },
  "ken-kenyatimes-g2g": { id: "ken-kenyatimes-g2g", tag: "[The Kenya Times, 20 Sep 2026]", publisher: "The Kenya Times", title: "Govt breaks silence on Kenya's G-to-G oil deal after fresh controversy", url: "https://thekenyatimes.com/breaking-news/govt-breaks-silence-on-kenyas-g-to-g-oil-deal-after-fresh-controversy/", date: "2026-09-20", type: "news" },
  "ken-star-subsidy": { id: "ken-star-subsidy", tag: "[The Star (Kenya), 16 Jul 2026]", publisher: "The Star (Kenya)", title: "Fuel subsidy deficit pressure denies consumers price relief", url: "https://www.the-star.co.ke/business/markets/2026-07-16-fuel-subsidy-deficit-pressure-denies-consumers-price-relief-1", date: "2026-07-16", type: "news" },
  "som-fao-flood": { id: "som-fao-flood", tag: "[FAO, 2 Jun 2026]", publisher: "FAO", title: "FAO warns Somalia to prepare now for potential El Niño-linked flooding later in 2026", url: "https://www.fao.org/somalia/news/details/fao-warns-somalia-to-prepare-now-for-potential-el-ni%C3%B1o-linked-flooding-later-in-2026/en", date: "2026-06-02", type: "intergovernmental" },
  "som-allafrica-sodma": { id: "som-allafrica-sodma", tag: "[AllAfrica, 23 Sep 2026]", publisher: "AllAfrica", title: "Somalia Disaster Agency Urges Early Action Ahead of El Niño Flood Risks", url: "https://allafrica.com/stories/202609230290.html", date: "2026-09-23", type: "news" },
  "som-ungeneva-hunger": { id: "som-ungeneva-hunger", tag: "[UN Geneva (UN News), 8 May 2026]", publisher: "UN Geneva (UN News)", title: "Somalia teeters on the brink of catastrophe as hunger crisis deepens", url: "https://www.ungeneva.org/en/news-media/news/2026/05/118467/somalia-teeters-brink-catastrophe-hunger-crisis-deepens", date: "2026-05-08", type: "intergovernmental" },
  "som-reuters-tuktuk": { id: "som-reuters-tuktuk", tag: "[Reuters (via Internazionale), 26 Mar 2026]", publisher: "Reuters (via Internazionale)", title: "Somalia's tuk-tuks stall as Iran war drives fuel price spike", url: "https://www.internazionale.it/ultime-notizie-reuters/2026/03/26/somalia-s-tuk-tuks-stall-as-iran-war-drives-fuel-price-spike", date: "2026-03-26", type: "news" },
  "som-wb-update": { id: "som-wb-update", tag: "[World Bank, 13 May 2026]", publisher: "World Bank", title: "Somalia growth continues but shocks and aid cuts intensify risks to jobs and livelihoods", url: "https://www.worldbank.org/en/news/press-release/2026/05/13/somalia-growth-continues-but-shocks-and-aid-cuts-intensify-risks-to-jobs-and-livelihoods", date: "2026-05-13", type: "intergovernmental" },
  "eth-allafrica-fao": { id: "eth-allafrica-fao", tag: "[AllAfrica, 11 Aug 2026]", publisher: "AllAfrica", title: "Ethiopia: FAO Seeks $50m to Help 4.66 Million Ethiopians As El Niño Raises Drought, Flood Risks", url: "https://allafrica.com/stories/202608120410.html", date: "2026-08-11", type: "news" },
  "eth-capital-crop": { id: "eth-capital-crop", tag: "[Capital Ethiopia, 12 Aug 2026]", publisher: "Capital Ethiopia", title: "El Niño threatens over 70% of national crop production in impending agricultural crisis", url: "https://capitalethiopia.com/2026/08/12/el-nino-threatens-over-70-of-national-crop-production-in-impending-agricultural-crisis/", date: "2026-08-12", type: "news" },
  "eth-capital-price": { id: "eth-capital-price", tag: "[Capital Ethiopia, 2 Apr 2026]", publisher: "Capital Ethiopia", title: "Govt raises fuel prices by 16.6% as subsidy burden reaches 272 billion birr", url: "https://capitalethiopia.com/2026/04/02/govt-raises-fuel-prices-by-16-6-as-subsidy-burden-reaches-272-billion-birr/", date: "2026-04-02", type: "news" },
  "eth-geeska-ration": { id: "eth-geeska-ration", tag: "[Geeska Afrika, 18 Mar 2026]", publisher: "Geeska Afrika", title: "Ethiopia imposes fuel rationing as global oil disruptions bite", url: "https://www.geeska.com/en/ethiopia-imposes-fuel-rationing-global-oil-disruptions-bite", date: "2026-03-18", type: "news" },
  "eth-fews-mar": { id: "eth-fews-mar", tag: "[FEWS NET, 31 Mar 2026]", publisher: "FEWS NET", title: "Ethiopia Key Message Update, March 2026", url: "https://fews.net/east-africa/ethiopia/key-message-update/march-2026", date: "2026-03-31", type: "intergovernmental" },
  "deu-vsr-kaub": { id: "deu-vsr-kaub", tag: "[Verkehrs-Rundschau, 14 Aug 2026]", publisher: "Verkehrs-Rundschau", title: "Rhein-Niedrigwasser: Pegel Kaub erreicht historischen Tiefstand", url: "https://www.verkehrsrundschau.de/nachrichten/transport-logistik/rhein-niedrigwasser-pegel-kaub-erreicht-historischen-tiefstand-3891008", date: "2026-08-14", type: "news" },
  "deu-cyprus-gas": { id: "deu-cyprus-gas", tag: "[Cyprus Shipping News (DW), 28 Sep 2026]", publisher: "Cyprus Shipping News (DW)", title: "Will Germany have enough gas this winter?", url: "https://cyprusshippingnews.com/2026/09/28/will-germany-have-enough-gas-this-winter/", date: "2026-09-28", type: "news" },
  "deu-fuelprices-eu": { id: "deu-fuelprices-eu", tag: "[fuel-prices.eu, 21 Sep 2026]", publisher: "fuel-prices.eu", title: "Fuel prices in Germany, 14 – 21 September 2026", url: "https://www.fuel-prices.eu/news/germany-fuel-prices-weekly-recap-2026-09-21/", date: "2026-09-21", type: "industry" },
  "deu-zdf-oelreserve": { id: "deu-zdf-oelreserve", tag: "[ZDFheute, 11 Mar 2026]", publisher: "ZDFheute", title: "Reaktion auf hohe Spritpreise: Deutschland gibt Ölreserven frei - Tankregelung geplant", url: "https://www.zdfheute.de/politik/deutschland/deutschland-gibt-oelreserven-frei-100.html", date: "2026-03-11", type: "news" },
};

export interface Enrichment {
  environmental?: Finding[];
  energy?: Finding[];
  policy?: Finding[];
  metrics?: Metric[];
}

export const enrichments: Partial<Record<Iso3, Enrichment>> = {
  ARE: {
    energy: [
      { text: "Fujairah crude exports averaged 1.62 million barrels per day in March 2026 as the UAE rerouted barrels around Hormuz, and the Habshan-Fujairah pipeline was running at 1.7 to 1.8 million barrels per day against a rated 1.5 million in May.", sourceIds: ["are-maritime-pipe"], confidence: "reported" },
      { text: "In September 2026 the UAE exported about 3.2 million barrels per day of crude, while most barrels moved ship to ship off Fujairah and Sohar, a process that now takes nearly ten days instead of five to seven.", sourceIds: ["gcc-eam-sts"], confidence: "reported" },
      { text: "S&P projected in June 2026 that UAE real GDP would shrink 2.7 percent in 2026 and oil output fall from 3.14 million to 2.5 to 2.6 million barrels per day, with Abu Dhabi contracting 9 percent.", sourceIds: ["are-eam-sp"], confidence: "preliminary" },
    ],
    policy: [
      { text: "The UAE announced on 28 April 2026 that it would leave OPEC effective 1 May 2026, citing its long-term strategic and economic vision and evolving energy profile, according to state agency WAM.", sourceIds: ["are-ap-opec"], confidence: "reported" },
      { text: "On 15 May 2026 ADNOC's Executive Committee directed the company to accelerate a new West-East pipeline to Fujairah of about 1.5 million barrels per day capacity, expected to be operational in 2027.", sourceIds: ["are-maritime-pipe"], confidence: "reported" },
    ],
    metrics: [
      { label: "Real GDP growth forecast, 2026 (S&P)", value: "-2.7%", sourceIds: ["are-eam-sp"], asOf: "2026-06" },
      { label: "Existing Habshan-Fujairah flow, May 2026 (mb/d)", value: "1.7 to 1.8 million bpd", sourceIds: ["are-maritime-pipe"], asOf: "2026-05" },
    ],
  },
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
  BRA: {
    environmental: [
      { text: "INMET's spring 2026 outlook gives a 98 percent probability of very strong El Niño conditions in October to December, with rainfall deficits across the North and Northeast and up to 200 mm above normal in Rio Grande do Sul and Santa Catarina.", sourceIds: ["bra-inmet-primavera"], confidence: "confirmed" },
    ],
    energy: [
      { text: "On 3 March 2026 Petrobras diesel was more than 20 percent below import parity, and Abicom put the gap at R$1.31 per litre, or 40 percent, as Brent closed at 81.40 dollars.", sourceIds: ["bra-datamar-gap"], confidence: "reported" },
      { text: "Rabobank expects Brazilian fertiliser consumption to fall from a record 49.1 million tonnes in 2025 to 47.2 million in 2026; urea prices at Brazilian ports rose close to 76 percent between early January and 19 March.", sourceIds: ["bra-noticiasagricolas-rabobank"], confidence: "preliminary" },
    ],
    policy: [
      { text: "A ministerial decree of 29 May 2026 grants producers and importers R$0.3515 per litre of diesel A for two months from 1 June, to offset the end of a federal tax relief on 31 May.", sourceIds: ["bra-poder360-subsidio"], confidence: "reported" },
      { text: "On 1 June 2026 Petrobras cut its average diesel price at refineries from R$3.65 to R$3.30 per litre and said it was assessing a further federal subsidy under Provisional Measure 1,363/2026.", sourceIds: ["bra-cenario-petrobras"], confidence: "reported" },
    ],
    metrics: [
      { label: "Urea price at Brazilian ports, early Jan to 19 Mar 2026", value: "+76%", sourceIds: ["bra-noticiasagricolas-rabobank"], asOf: "2026-03" },
    ],
  },
  CHN: {
    environmental: [
      { text: "On 30 September 2026 China's National Climate Center forecast the strongest El Niño since records began, peaking around November with sea surface temperature indices of 3.2 to 3.5 degrees Celsius.", sourceIds: ["chn-cgtn-elnino"], confidence: "preliminary" },
      { text: "The National Climate Center warned of risks to late-season rice harvesting this autumn, waterlogging next spring and stronger heat waves and rainfall in summer 2027.", sourceIds: ["chn-cgtn-elnino"], confidence: "preliminary" },
      { text: "In May 2026 the National Climate Center forecast 20 to 50 percent above-normal rain in northern and coastal provinces such as Hebei and Liaoning, and drought in Hubei, Hunan, Chongqing and Xinjiang.", sourceIds: ["chn-chinadaily-summer"], confidence: "preliminary" },
    ],
    energy: [
      { text: "China's LNG imports fell 2.5 percent to 35.3 million tonnes in January to July 2026, while Qatari volumes dropped 57.6 percent after the Hormuz closure halted most Qatari exports from March.", sourceIds: ["chn-globallnghub-lng"], confidence: "reported" },
      { text: "China's crude imports in May 2026 were estimated by Kpler at 6.45 million barrels per day, the lowest in a decade, and April imports were about 9.3 million barrels per day, down 20 percent year on year.", sourceIds: ["chn-hcp-stocks"], confidence: "preliminary" },
      { text: "Refiners drew about one million barrels per day from commercial crude inventories over three weeks from early May 2026, when stocks peaked at about 1.25 billion barrels.", sourceIds: ["chn-hcp-stocks"], confidence: "preliminary" },
    ],
    policy: [
      { text: "On 5 March 2026 China told energy companies to suspend new fuel export contracts and try to cancel arranged shipments, excluding international jet fuel and bunker fuel.", sourceIds: ["chn-tankterminals-exports"], confidence: "reported" },
      { text: "China announced in April 2026 a full sulphuric acid export ban through August 2026, replacing an annual quota of 700,000 tonnes, and exports fell about 99.7 percent year on year in June.", sourceIds: ["chn-hsn-sulphuric"], confidence: "reported" },
      { text: "Government retail price caps shielded Chinese consumers from global price swings in 2026, leaving refiners with losses of 600 to 1,300 yuan per tonne of crude processed.", sourceIds: ["chn-hcp-stocks"], confidence: "reported" },
    ],
    metrics: [
      { label: "LNG imports Jan-Jul 2026, year on year", value: "-2.5% (35.3 Mt)", sourceIds: ["chn-globallnghub-lng"], asOf: "2026-07" },
      { label: "Qatari LNG volumes Jan-Jul 2026, year on year", value: "-57.6%", sourceIds: ["chn-globallnghub-lng"], asOf: "2026-07" },
      { label: "Crude imports May 2026 (Kpler)", value: "6.451 million bpd", sourceIds: ["chn-hcp-stocks"], asOf: "2026-05" },
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
  CUB: {
    environmental: [
      { text: "In August 2026 INSMET warned of possible meteorological drought and water stress in Cuba, and NOAA gave a 63 percent probability of very strong El Niño between November 2026 and January 2027.", sourceIds: ["cub-directorio-elnino"], confidence: "reported" },
      { text: "INSMET anticipated more frequent and intense cold fronts and heavy rainfall in winter 2026-27, particularly in western and central Cuba, with flooding risk.", sourceIds: ["cub-directorio-elnino"], confidence: "preliminary" },
    ],
    energy: [
      { text: "On 12 September 2026 Cuba's UNE projected a peak deficit of about 2,000 MW (1,322 MW available against 3,300 MW demand), with 106 distributed generation plants offline for lack of fuel.", sourceIds: ["cub-directorio-deficit"], confidence: "reported" },
      { text: "Cuba suffered its seventh nationwide grid collapse of 2026 on 18 September; the sixth had occurred in early August.", sourceIds: ["cub-emol-apagon7"], confidence: "reported" },
    ],
    policy: [
      { text: "In February 2026 Cuba announced fuel rationing, telework, hybrid university classes, solar panels for essential services and reduced rail service as first anti-crisis measures.", sourceIds: ["cub-swissinfo-medidas"], confidence: "reported" },
      { text: "In August 2026 Cuba's energy ministry restarted units at Santa Cruz, Mariel and Céspedes power plants after the sixth national blackout.", sourceIds: ["cub-bloomberglinea-apagon6"], confidence: "reported" },
    ],
    metrics: [
      { label: "Peak-hour generation deficit, 12 Sep 2026", value: "about 2,000 MW", sourceIds: ["cub-directorio-deficit"], asOf: "2026-09" },
      { label: "Nationwide grid collapses in 2026 to 18 Sep", value: "7", sourceIds: ["cub-emol-apagon7"], asOf: "2026-09" },
    ],
  },
  DEU: {
    environmental: [
      { text: "On 14 August 2026 the Rhine gauge at Kaub fell to 8 centimetres, the first single-digit reading since records began in 1856, and the waterways authority expected very heavily restricted shipping.", sourceIds: ["deu-vsr-kaub"], confidence: "reported" },
    ],
    energy: [
      { text: "As of mid-September 2026 German gas storage held about 141 terawatt-hours, around 57 percent of capacity, and the Federal Network Agency stated that security of supply was currently guaranteed.", sourceIds: ["deu-cyprus-gas"], confidence: "reported" },
      { text: "The INES storage association expected German storage to reach only about 65 percent by 1 November 2026 at current filling rates, and said gas prices rose from about EUR 46 to over EUR 80 per megawatt-hour since the second quarter.", sourceIds: ["deu-cyprus-gas"], confidence: "reported" },
      { text: "In the week to 21 September 2026 the average German diesel price was EUR 2.46 per litre and Super E10 EUR 2.35, based on European Commission Weekly Oil Bulletin data.", sourceIds: ["deu-fuelprices-eu"], confidence: "preliminary" },
    ],
    policy: [
      { text: "On 11 March 2026 the Federal Government set Germany's share of the IEA's coordinated release of 400 million barrels at 19.5 million barrels from its strategic reserves, about one fifth of its stocks.", sourceIds: ["deu-zdf-oelreserve"], confidence: "reported" },
      { text: "On 11 March 2026 the Federal Government set Germany's share of the IEA's coordinated release of 400 million barrels at 19.5 million barrels from its strategic reserves, about one fifth of its stocks.", sourceIds: ["deu-zdf-oelreserve"], confidence: "reported" },
    ],
    metrics: [
      { label: "Gas storage fill level, mid-Sep 2026", value: "about 57%", sourceIds: ["deu-cyprus-gas"], asOf: "2026-09" },
    ],
  },
  DOM: {
    environmental: [
      { text: "In June 2026 Dominican main dams held about 73 percent of capacity, officials warned levels could fall quickly under prolonged dry conditions, and water rationing was already being implemented.", sourceIds: ["dom-dominicantoday-plan"], confidence: "reported" },
    ],
    energy: [
      { text: "The Dominican government allocated RD$1,631.5 million for fuel subsidies in the week of 12 to 18 September 2026, up 26 percent in a week, with year-to-date spending above RD$32 billion and prices frozen.", sourceIds: ["dom-revistamercado-sep"], confidence: "reported" },
      { text: "The Central Bank estimated in May 2026 that the Middle East conflict would add about USD 900 million to the 2026 Dominican energy bill, and annual inflation reached 5.11 percent in April.", sourceIds: ["dom-acento-900"], confidence: "reported" },
      { text: "The 2026 budget provided RD$12 billion for fuel subsidies with a further RD$10 billion reassigned by March, as weekly subsidy costs rose from RD$544.8 million to RD$1.70 billion within three weeks.", sourceIds: ["dom-acento-eficiencia"], confidence: "reported" },
    ],
    policy: [
      { text: "In March 2026 the government announced a push for an energy efficiency law and plans for 300 MW of battery storage in response to the Middle East crisis.", sourceIds: ["dom-acento-eficiencia"], confidence: "reported" },
    ],
    metrics: [
      { label: "Weekly fuel subsidy, 12-18 Sep 2026", value: "RD$1,631.5 million", sourceIds: ["dom-revistamercado-sep"], asOf: "2026-09" },
      { label: "Central Bank estimate of added 2026 energy bill", value: "USD 900 million", sourceIds: ["dom-acento-900"], asOf: "2026-05" },
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
  ETH: {
    environmental: [
      { text: "In August 2026 FAO appealed for USD 50 million to assist 4.66 million people in Ethiopia facing El Niño-related drought during the June-September kiremt season and increased flood risk from October to December.", sourceIds: ["eth-allafrica-fao"], confidence: "reported" },
      { text: "FAO warned in August 2026 that over 70 percent of Ethiopia's national crop production depends on the kiremt rains, and identified 114 woredas with about 9.3 million people needing anticipatory action.", sourceIds: ["eth-capital-crop"], confidence: "reported" },
    ],
    energy: [
      { text: "Ethiopia's fuel subsidy reached nearly 272 billion birr by April 2026, and the minister said spot-market premiums for emergency purchases were USD 92.88 per barrel against USD 9.25 under long-term contracts.", sourceIds: ["eth-capital-price"], confidence: "reported" },
      { text: "In March 2026 Ethiopia's fuel was constrained by supply disruption, and FEWS NET reported domestic diesel prices up nearly 8.4 percent month on month, with Tigray parallel-market fuel prices three to four times higher.", sourceIds: ["eth-fews-mar"], confidence: "reported" },
    ],
    policy: [
      { text: "On 17 March 2026 the Ethiopian Petroleum and Energy Authority issued a nationwide directive to conserve fuel and to prioritise supplies for health care, agriculture and public transport.", sourceIds: ["eth-geeska-ration"], confidence: "reported" },
      { text: "Effective 1 April 2026 Ethiopia raised white diesel prices by 16.6 percent to 163.09 birr per litre, heavy black diesel by 20.4 percent and gasoline by 7.7 percent to 142.41 birr.", sourceIds: ["eth-capital-price"], confidence: "reported" },
    ],
    metrics: [
      { label: "White diesel retail price from 1 Apr 2026 (birr/litre)", value: "163.09 birr (+16.6%)", sourceIds: ["eth-capital-price"], asOf: "2026-04" },
    ],
  },
  GTM: {
    environmental: [
      { text: "The IPC analysis of August 2026 projects about 3.2 million people (17 percent) in Phase 3 or above in July to September 2026, up from about 2.5 million (14 percent) in April to June, with El Niño possibly intensifying drought.", sourceIds: ["gtm-ipc"], confidence: "confirmed" },
      { text: "In May 2026 authorities identified 123 municipalities as most vulnerable to rainfall deficits, a number that could reach 160, and warned that the July and August dry spell could last about 50 days instead of 10.", sourceIds: ["gtm-emisoras-canicula"], confidence: "reported" },
    ],
    energy: [
      { text: "On 18 March 2026 pump prices in Guatemala reached 37.19 quetzales per gallon for regular gasoline, 38.19 for premium and 40.19 for diesel, a rise attributed by analysts to the Middle East conflict.", sourceIds: ["gtm-prensalatina-fuel"], confidence: "reported" },
    ],
    metrics: [
      { label: "People in IPC Phase 3+, Jul to Sep 2026 (projection)", value: "3.2 million (17%)", sourceIds: ["gtm-ipc"], asOf: "2026-08" },
    ],
  },
  HND: {
    environmental: [
      { text: "In August 2026 COPECO declared red alert for drought in 75 municipalities in the centre and south of Honduras and yellow alert in a further 71, linked to El Niño.", sourceIds: ["hnd-eyn-un"], confidence: "reported" },
      { text: "Rainfall deficits of 100 to 200 millimetres were reported in August 2026 owing to a delayed rainy season, and the national atmospheric research centre described conditions as hotter and drier than normal, linked to a strong El Niño.", sourceIds: ["hnd-eyn-red"], confidence: "reported" },
      { text: "The UN Resident Coordinator announced about USD 20 million in new drought aid in August 2026, bringing UN resources mobilised for the climate emergency in Honduras to USD 86 million.", sourceIds: ["hnd-eyn-un"], confidence: "reported" },
    ],
    energy: [
      { text: "From mid-March 2026 the Honduran government absorbed 50 percent of international price increases for regular gasoline and diesel, at about L49.8 million a week, citing Middle East tensions.", sourceIds: ["hnd-elheraldo-sub"], confidence: "reported" },
      { text: "Honduras kept a 100 percent electricity subsidy for households consuming 1 to 150 kWh a month, and LPG subsidies run through 31 December 2026.", sourceIds: ["hnd-laprensa-sub"], confidence: "reported" },
    ],
    policy: [
      { text: "On 30 April 2026 the government extended the 50 percent fuel price subsidy from 1 May to 2 August 2026 and continued electricity and LPG support.", sourceIds: ["hnd-laprensa-sub"], confidence: "reported" },
    ],
    metrics: [
      { label: "Fuel subsidy share of price increase, from Mar 2026", value: "50%", sourceIds: ["hnd-elheraldo-sub"], asOf: "2026-03" },
    ],
  },
  HTI: {
    environmental: [
      { text: "WFP reported that 1.8 million people in Haiti faced emergency levels of food insecurity (IPC Phase 4) between March and June 2026, within a total of 5.8 million in crisis or worse.", sourceIds: ["hti-wfp-apr"], confidence: "confirmed" },
    ],
    energy: [
      { text: "WFP said in April 2026 that rising fuel prices linked to the Middle East conflict were increasing transport and food costs in Haiti and threatened to reverse recent gains.", sourceIds: ["hti-wfp-apr"], confidence: "reported" },
      { text: "Following the April 2026 fuel price rise, protests took place on 6 April and again the following week in Haiti, amid inflation of 32 percent at the end of fiscal year 2025.", sourceIds: ["hti-africanews-fuel"], confidence: "reported" },
    ],
    policy: [
      { text: "WFP stated it needed USD 332 million over the next 12 months from April 2026 to reach 2.7 million people in Haiti.", sourceIds: ["hti-wfp-apr"], confidence: "confirmed" },
    ],
    metrics: [
      { label: "Population in IPC Phase 3+, Mar-Jun 2026", value: "5.8 million", sourceIds: ["hti-wfp-apr"], asOf: "2026-04" },
    ],
  },
  IDN: {
    environmental: [
      { text: "In July 2026 BMKG forecast a 98 percent probability of a strong El Niño lasting 9 to 12 months, with below-normal rainfall from July to October in Java, Bali, Nusa Tenggara and southern Sumatra and Kalimantan.", sourceIds: ["idn-ibp-elnino"], confidence: "reported" },
    ],
    energy: [
      { text: "In April 2026 the Finance Minister estimated about Rp 100 trillion (US$5.9 billion) in additional energy subsidies for 2026, on top of a Rp 381.3 trillion budget that assumed crude at US$70 per barrel.", sourceIds: ["idn-jp-subsidy"], confidence: "reported" },
      { text: "Indonesia's domestic LPG output is 1.6 million tonnes a year against projected 2026 consumption of 10 million tonnes, and talks on Russian LPG supply were in final stages in April 2026.", sourceIds: ["idn-jp-russia"], confidence: "reported" },
    ],
    policy: [
      { text: "On 17 April 2026 the Energy Minister said after meeting Russian officials that Indonesia would purchase crude oil from Russia; volumes and prices were not disclosed.", sourceIds: ["idn-jp-russia"], confidence: "reported" },
      { text: "The government identified about Rp 130 trillion in budget savings in 2026 as a buffer against Iran war shocks, to be funded by spending cuts at agencies, with the deficit projected at 2.9 percent of GDP.", sourceIds: ["idn-jp-subsidy"], confidence: "reported" },
    ],
  },
  IND: {
    environmental: [
      { text: "The India Meteorological Department data showed a 14 percent cumulative monsoon deficit between 1 June and 29 August 2026, with about 47 percent of 741 tracked districts recording below-normal rainfall.", sourceIds: ["ind-ruralvoice-deficit"], confidence: "reported" },
      { text: "The 2026 southwest monsoon ended on 30 September with a rainfall deficit of 12.6 percent for the June to September period, according to the India Meteorological Department.", sourceIds: ["ind-uni-monsoon-final"], confidence: "reported" },
    ],
    energy: [
      { text: "West Asia accounted for nearly 59 percent of India's crude imports in February 2026, the highest share since August 2022, just before the Hormuz disruption began.", sourceIds: ["ind-outlookbusiness-russia"], confidence: "reported" },
      { text: "Russian crude made up about 50 percent of India's oil imports in July 2026, at about 2.5 million barrels per day through mid-July, after Hormuz disruptions pushed refiners back to Russian supply.", sourceIds: ["ind-theprint-russia"], confidence: "preliminary" },
      { text: "During the 2026 supply disruption India prioritised domestic LPG for household cooking and curtailed supplies to some industrial and commercial consumers.", sourceIds: ["ind-kuwaittimes-lpg"], confidence: "reported" },
    ],
    policy: [
      { text: "On 27 March 2026 the government cut central excise duty on petrol from Rs 13 to Rs 3 per litre and on diesel from Rs 10 to zero, while state retailers left pump prices unchanged.", sourceIds: ["ind-businesstoday-excise"], confidence: "reported" },
      { text: "Alongside the excise cut of 27 March 2026, the government imposed export duties of Rs 21.5 per litre on diesel and Rs 29.5 per litre on aviation turbine fuel to protect domestic supply.", sourceIds: ["ind-air-exportduty"], confidence: "reported" },
      { text: "On 27 June 2026 the petroleum ministry lifted restrictions on commercial LPG and restored non-domestic packed supplies to pre-crisis levels after the LPG supply situation improved.", sourceIds: ["ind-kuwaittimes-lpg"], confidence: "reported" },
    ],
    metrics: [
      { label: "Monsoon rainfall deficit, 1 Jun to 30 Sep 2026", value: "-12.6%", sourceIds: ["ind-uni-monsoon-final"], asOf: "2026-09" },
      { label: "Russian share of crude imports, July 2026", value: "about 50%", sourceIds: ["ind-theprint-russia"], asOf: "2026-07" },
      { label: "West Asia share of crude imports, Feb 2026", value: "nearly 59%", sourceIds: ["ind-outlookbusiness-russia"], asOf: "2026-02" },
      { label: "Petrol excise duty after cut, 27 Mar 2026", value: "Rs 3 per litre (from Rs 13)", sourceIds: ["ind-businesstoday-excise"], asOf: "2026-03" },
    ],
  },
  IRN: {
    energy: [
      { text: "Iran faces a daily fuel shortage of 14 to 15 million litres, and a senior official indicated about two months of petrol supply remained, according to The National in September 2026.", sourceIds: ["irn-national-petrol"], confidence: "reported" },
      { text: "The rial fell from about 1.45 million per dollar in March 2026 to 2.34 million in early September, a loss of 63 percent in value, according to Euronews.", sourceIds: ["irn-euronews-econ"], confidence: "reported" },
    ],
    policy: [
      { text: "From 8 September 2026 Iran doubled the petrol price to 100,000 rials per litre for consumption above 110 litres a month; the government said the subsidised allocation meets the needs of 85 percent of Iranians.", sourceIds: ["irn-national-petrol"], confidence: "reported" },
      { text: "On 8 April 2026 Pakistan announced that US and Iranian delegations would meet in Islamabad on 10 April for talks following a two-week ceasefire that Pakistan had helped mediate.", sourceIds: ["irn-khaleej-talks"], confidence: "reported" },
    ],
    metrics: [
      { label: "Rial per USD, early Sep 2026", value: "2.34 million", sourceIds: ["irn-euronews-econ"], asOf: "2026-09" },
      { label: "Daily fuel shortfall (litres)", value: "14 to 15 million", sourceIds: ["irn-national-petrol"], asOf: "2026-09" },
    ],
  },
  IRQ: {
    energy: [
      { text: "Iraq exported 268 million barrels in the first half of 2026, about 1.5 million barrels per day against 3.4 million before the conflict, earning USD 18.6 billion.", sourceIds: ["irq-agbi-reserves"], confidence: "reported" },
      { text: "Iraq resumed crude exports of 250,000 barrels per day through Ceyhan in March 2026 after Baghdad and the Kurdistan Regional Government reached an agreement on the pipeline route.", sourceIds: ["irq-annahar-ceyhan"], confidence: "reported" },
    ],
    policy: [
      { text: "Central Bank of Iraq reserves fell from about USD 102 billion on 28 February to about USD 86 billion on 30 June 2026, and the government borrowed from the central bank and local markets to pay salaries.", sourceIds: ["irq-agbi-reserves"], confidence: "reported" },
      { text: "In July 2026 a government spokesman acknowledged a liquidity crisis, saying there was a very large gap between revenues and monthly spending, and officials proposed domestic borrowing while hoping to avoid international debt.", sourceIds: ["irq-agbi-salary"], confidence: "reported" },
    ],
    metrics: [
      { label: "Oil exports, H1 2026 (million bbl)", value: "268 million", sourceIds: ["irq-agbi-reserves"], asOf: "2026-06" },
      { label: "Central bank reserves, 30 Jun 2026", value: "about USD 86 billion", sourceIds: ["irq-agbi-reserves"], asOf: "2026-06" },
    ],
  },
  JPN: {
    environmental: [
      { text: "A seasonal outlook published in March 2026 expected the tropical Pacific to shift towards El Niño-like conditions by summer and temperatures in Japan to be above normal nationwide.", sourceIds: ["jpn-jwa-outlook"], confidence: "preliminary" },
    ],
    energy: [
      { text: "Japan's crude imports from the Middle East fell 67.2 percent year on year to 3.843 million kilolitres in April 2026, the lowest since records began in 1979.", sourceIds: ["jpn-tankterminals-imports"], confidence: "reported" },
      { text: "Japan's LNG imports fell 76.1 percent year on year in April 2026 as the Hormuz closure trapped about 20 percent of global daily LNG flows.", sourceIds: ["jpn-tankterminals-imports"], confidence: "reported" },
      { text: "The Middle East supplied 94 percent of Japan's crude oil in 2025, and 93 percent of those imports passed through the Strait of Hormuz.", sourceIds: ["jpn-hcp-diversify"], confidence: "reported" },
    ],
    policy: [
      { text: "On 19 March 2026 Japan resumed gasoline subsidies of 30.20 yen per litre to wholesalers, targeting a retail price of about 170 yen after prices hit a record 190.8 yen.", sourceIds: ["jpn-adnkronos-subsidy"], confidence: "reported" },
      { text: "At the G7 summit in Evian on 17 June 2026 Prime Minister Takaichi presented the POWERR Asia initiative and proposed strengthening oil stockpiles with the IEA, which received G7 support.", sourceIds: ["jpn-b360-powerr"], confidence: "reported" },
      { text: "In August 2026 Prime Minister Takaichi ordered a package to diversify crude supplies, including state financing for Hormuz bypass pipelines, a reinsurance scheme and national naphtha reserves, with details due by year end.", sourceIds: ["jpn-hcp-diversify"], confidence: "reported" },
    ],
    metrics: [
      { label: "Crude imports from Middle East, Apr 2026, year on year", value: "-67.2%", sourceIds: ["jpn-tankterminals-imports"], asOf: "2026-04" },
      { label: "LNG imports, Apr 2026, year on year", value: "-76.1%", sourceIds: ["jpn-tankterminals-imports"], asOf: "2026-04" },
      { label: "Gasoline subsidy to wholesalers from 19 Mar 2026", value: "30.20 yen per litre", sourceIds: ["jpn-adnkronos-subsidy"], asOf: "2026-03" },
      { label: "Middle East share of crude imports, 2025", value: "94%", sourceIds: ["jpn-hcp-diversify"], asOf: "2025" },
    ],
  },
  KEN: {
    environmental: [
      { text: "In August 2026 the Kenya Meteorological Service forecast above-average October-December rainfall for 80 percent of the country, with prolonged wet spells, citing a strengthening El Niño and an expected positive Indian Ocean Dipole.", sourceIds: ["ken-capitalfm-rains"], confidence: "reported" },
      { text: "The 26 August 2026 national climate outlook stated that the drought probability is low over most of Kenya, with a 15 to 20 percent chance of a mild drought event in Turkana, while El Niño evolves toward a very strong event.", sourceIds: ["ken-kmd-ncof13"], confidence: "confirmed" },
    ],
    energy: [
      { text: "For the 15 September to 14 October 2026 cycle EPRA kept Nairobi pump prices unchanged at KSh 214.03 per litre for super petrol and KSh 217.86 for diesel, below the May record for diesel.", sourceIds: ["ken-citizen-epra"], confidence: "reported" },
      { text: "Kenya imports its refined fuel under a government-to-government arrangement with Saudi Aramco, ADNOC and ENOC, and as of September 2026 the scheme remained active, extended to early 2028.", sourceIds: ["ken-kenyatimes-g2g"], confidence: "reported" },
    ],
    policy: [
      { text: "The government injected about KSh 17 billion into price stabilisation in April, cumulative subsidy and tax relief exceeded KSh 28 billion by May, and arrears owed to oil marketing companies passed KSh 20 billion by June 2026.", sourceIds: ["ken-star-subsidy"], confidence: "reported" },
      { text: "The government-to-government fuel supply arrangement with three Gulf state oil companies was extended in 2026 to cover supplies into early 2028, with Kenyan banks participating in financing the imports.", sourceIds: ["ken-kenyatimes-g2g"], confidence: "reported" },
    ],
    metrics: [
      { label: "Nairobi diesel pump price, 15 Sep-14 Oct 2026 (KSh/litre)", value: "KSh 217.86", sourceIds: ["ken-citizen-epra"], asOf: "2026-09" },
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
  KOR: {
    environmental: [
      { text: "In August 2026 NOAA put the chance of a very strong El Niño in the 2026-27 northern winter above 90 percent, and Korean experts warned of stronger typhoons and food price risks given low food self-sufficiency.", sourceIds: ["kor-joongang-elnino"], confidence: "preliminary" },
    ],
    energy: [
      { text: "As of March 2026 the Industry Ministry put Qatar's share of South Korea's LNG imports at about 14 percent, with gas-fired plants generating 27 percent of electricity.", sourceIds: ["kor-baird-lng"], confidence: "reported" },
      { text: "Nuclear power supplied more than 31 percent of South Korea's electricity in 2024, and the country imports about 94 percent of its energy resources.", sourceIds: ["kor-keia-energy"], confidence: "reported" },
    ],
    policy: [
      { text: "Effective 27 March 2026 South Korea raised its gasoline tax cut from 7 to 15 percent and its diesel tax cut from 10 to 25 percent, lowering prices by 65 and 87 won per litre.", sourceIds: ["kor-khan-measures"], confidence: "reported" },
      { text: "From 27 March 2026 South Korea imposed controls on naphtha exports to prioritise domestic petrochemical supply and banned hoarding of urea solution.", sourceIds: ["kor-khan-measures"], confidence: "reported" },
      { text: "In March 2026 South Korea raised nuclear plant operating rates from 70 percent to over 80 percent and postponed coal plant shutdowns to ease gas demand.", sourceIds: ["kor-khan-measures"], confidence: "reported" },
    ],
    metrics: [
      { label: "Gasoline tax cut from 27 Mar 2026", value: "15% (from 7%)", sourceIds: ["kor-khan-measures"], asOf: "2026-03" },
      { label: "Qatar share of LNG imports, as of Mar 2026", value: "about 14%", sourceIds: ["kor-baird-lng"], asOf: "2026-03" },
      { label: "Nuclear share of electricity, 2024", value: "more than 31%", sourceIds: ["kor-keia-energy"], asOf: "2024" },
    ],
  },
  KWT: {
    energy: [
      { text: "Kuwait lacks pipelines that bypass Hormuz, and its economy contracted 4.6 percent year on year in the first quarter of 2026, with oil-sector GDP down 12.5 percent, reported Arab News in August 2026.", sourceIds: ["kwt-arabnews-crisis"], confidence: "reported" },
      { text: "Oil made up about 80 percent of Kuwait's budgeted revenue for fiscal year 2026-27, and the projected deficit of KD 9.8 billion is nearly 55 percent above the previous year's.", sourceIds: ["kwt-agbi-debt"], confidence: "reported" },
      { text: "The headquarters of Kuwait Petroleum Corporation was hit by a drone strike in April 2026, and experts expect output to return to pre-war levels within two to three months once the strait reopens.", sourceIds: ["kwt-arabnews-crisis"], confidence: "reported" },
    ],
    policy: [
      { text: "In May 2026 the Central Bank of Kuwait issued KD 150 million in bonds that were nearly four times oversubscribed, as the government stepped up borrowing to cover the fiscal gap.", sourceIds: ["kwt-agbi-debt"], confidence: "reported" },
    ],
    metrics: [
      { label: "Real GDP, Q1 2026 (y/y)", value: "-4.6%", sourceIds: ["kwt-arabnews-crisis"], asOf: "2026-03" },
      { label: "Projected deficit FY2026-27", value: "KD 9.8 billion", sourceIds: ["kwt-agbi-debt"], asOf: "2026-05" },
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
  LKA: {
    energy: [
      { text: "In March 2026, Sri Lanka raised the petrol price to 398 rupees per litre and diesel by 79 rupees to 382 rupees, the second increase in two weeks, after the effective closure of the Strait of Hormuz.", sourceIds: ["lka-malaymail-fuel"], confidence: "reported" },
      { text: "Sri Lanka's fuel import expenditure rose by 149.9 percent year on year to USD 886 million in April 2026, driven by global fuel price surges amid the conflict in the Middle East.", sourceIds: ["lka-cbsl-external-apr"], confidence: "confirmed" },
    ],
    policy: [
      { text: "On 28 May 2026, the IMF Executive Board completed the combined fifth and sixth reviews of Sri Lanka's Extended Fund Facility, granting immediate access to SDR 508 million (about USD 695 million).", sourceIds: ["lka-cbsl-imf-review"], confidence: "confirmed" },
      { text: "The Ceylon Petroleum Corporation raised retail fuel prices again from midnight on 30 May 2026, lifting Lanka Auto Diesel by 15 rupees to 407 rupees and 95 octane petrol by 25 rupees to 495 rupees per litre.", sourceIds: ["lka-newsfirst-may"], confidence: "reported" },
    ],
    metrics: [
      { label: "Fuel import expenditure, Apr 2026, year on year", value: "+149.9%", sourceIds: ["lka-cbsl-external-apr"], asOf: "2026-04" },
    ],
  },
  MEX: {
    environmental: [
      { text: "Mexico's national weather service SMN gave a 97 percent probability that El Niño continues until spring 2027 and an 81 percent probability of very strong intensity in October to December 2026.", sourceIds: ["mex-imparcial-smn"], confidence: "reported" },
    ],
    energy: [
      { text: "For 4 to 10 April 2026 the Finance Ministry raised the diesel IEPS stimulus to 81.20 percent from 70.28 percent, about 5.97 pesos per litre, with crude at 107 dollars per barrel after the Hormuz blockage.", sourceIds: ["mex-imparcial-diesel"], confidence: "reported" },
      { text: "For 23 to 29 May 2026 the IEPS stimulus was 3.4347 pesos per litre for Magna and 4.7352 pesos for diesel, so consumers paid 48.74 and 35.69 percent of the full tax respectively.", sourceIds: ["mex-imparcial-mayo"], confidence: "reported" },
    ],
    policy: [
      { text: "In March 2026 the government and fuel retailers renewed the agreement capping Magna gasoline at 24 pesos per litre until September 2026; 96 percent of service stations had joined.", sourceIds: ["mex-imparcial-pacto"], confidence: "reported" },
      { text: "In May 2026 diesel was capped at 27 pesos per litre under a voluntary agreement with distributors, while regular gasoline had been sold at the 24 peso ceiling for more than a year.", sourceIds: ["mex-imparcial-mayo"], confidence: "reported" },
    ],
    metrics: [
      { label: "SMN probability of El Niño lasting to spring 2027 (Jul 2026)", value: "97%", sourceIds: ["mex-imparcial-smn"], asOf: "2026-07" },
      { label: "Diesel IEPS stimulus, week of 4 Apr 2026", value: "81.20%", sourceIds: ["mex-imparcial-diesel"], asOf: "2026-04" },
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
  MYS: {
    environmental: [
      { text: "In August 2026, MetMalaysia reported an 81 percent chance of El Niño reaching strong to extremely strong levels from October, with rainfall deficits in some areas possibly exceeding 35 percent over three to six months.", sourceIds: ["mys-vibes-elnino-aug"], confidence: "preliminary" },
      { text: "In August 2026, the Malaysian Meteorological Department expected haze to persist until late September, with Serian in Sarawak recording an Air Pollutant Index reading of 182, the highest that day.", sourceIds: ["mys-nst-haze"], confidence: "reported" },
      { text: "On 30 September 2026 MetMalaysia warned that El Niño would affect the country through March 2027 and that prolonged dry conditions could increase risks of water shortages, peatland fires and haze.", sourceIds: ["mys-vibes-elnino-sep"], confidence: "reported" },
    ],
    energy: [
      { text: "Malaysia's monthly petroleum subsidy cost rose from RM800 million in January and February 2026 to RM5 billion in March and April, easing to RM4 billion in May and June, according to the Deputy Finance Minister.", sourceIds: ["mys-star-subsidy-jul"], confidence: "reported" },
      { text: "In September 2026 analysts expected Malaysia's 2026 fiscal deficit at 3.5 to 3.6 percent of GDP, against a government target of 3.5 percent and a petroleum subsidy allocation of RM40 billion.", sourceIds: ["mys-star-subsidy-sep"], confidence: "preliminary" },
    ],
    policy: [
      { text: "In July 2026, the Deputy Finance Minister stated that the government had no plans to reduce fuel subsidies, keeping BUDI95 RON95 at RM1.99 per litre while market prices reached RM5 in March and April.", sourceIds: ["mys-star-subsidy-jul"], confidence: "reported" },
      { text: "In September 2026 analysts expected the revised BUDI95 RON95 quota to have a marginal fiscal impact, since only about 1 percent of registered users bought more than 200 litres a month.", sourceIds: ["mys-star-subsidy-sep"], confidence: "reported" },
    ],
    metrics: [
      { label: "Petroleum subsidy allocation 2026", value: "RM40 billion", sourceIds: ["mys-star-subsidy-sep"], asOf: "2026-07" },
      { label: "MetMalaysia chance of strong to extremely strong El Niño from October", value: "81%", sourceIds: ["mys-vibes-elnino-aug"], asOf: "2026-08" },
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
  PER: {
    environmental: [
      { text: "On 2 July 2026 Peru declared a 60-day state of emergency in 796 districts, about 40 percent of the country's total, ahead of expected severe El Niño rainfall.", sourceIds: ["per-star-emergency"], confidence: "reported" },
      { text: "In April 2026 the fishing authority set the first-season anchovy catch limit for the north-centre zone at 1.9 million tonnes, the lowest in a decade, as warm coastal El Niño waters altered anchovy distribution.", sourceIds: ["per-infobae-anchoveta"], confidence: "reported" },
    ],
    energy: [
      { text: "Petroperú's diesel B5 UV price rose from S/12.14 per gallon on 24 February to S/23.09 on 11 August 2026, an increase of 90.2 percent; regular gasohol rose 52.9 percent.", sourceIds: ["per-economia-diesel"], confidence: "reported" },
      { text: "Peru consumes about 240,000 barrels of crude per day but produces only 30,000 to 40,000, according to a vice minister cited in May 2026; LPG prices had risen 43 percent since the war began.", sourceIds: ["per-larepublica-emergencia"], confidence: "reported" },
    ],
    policy: [
      { text: "In May 2026 the government announced that it would declare an emergency for the fuel market, with essential fuel products to be designated by supreme decree and oversight by Osinergmin and Indecopi against speculation.", sourceIds: ["per-larepublica-emergencia"], confidence: "reported" },
      { text: "Emergency Decree 003-2026 provides Petroperú with financial support of 2 billion US dollars to prevent fuel shortages, as reported in May 2026.", sourceIds: ["per-lpderecho-du003"], confidence: "reported" },
    ],
    metrics: [
      { label: "Petroperú diesel B5 UV price, 24 Feb to 11 Aug 2026", value: "+90.2%", sourceIds: ["per-economia-diesel"], asOf: "2026-08" },
    ],
  },
  PHL: {
    energy: [
      { text: "As of 10 July 2026 Philippine local petroleum inventory cover stood at 47.84 days, and the Department of Energy projected diesel increases of P2.62 to P4.62 per litre.", sourceIds: ["phl-philstar-fuel"], confidence: "reported" },
      { text: "In early March 2026 projected pump price increases were P7.48 per litre for gasoline, P17.28 for diesel and P32.35 for kerosene.", sourceIds: ["phl-hro-4day"], confidence: "reported" },
    ],
    policy: [
      { text: "From 9 March 2026 selected executive offices moved to a four-day work week, and all agencies were directed to cut electricity use and petroleum costs by 10 to 20 percent.", sourceIds: ["phl-hro-4day"], confidence: "reported" },
    ],
  },
  QAT: {
    energy: [
      { text: "QatarEnergy has cancelled 21 LNG shipments due to Italy's Edison between April and September 2026, and about 17 percent of Qatar's LNG capacity, 12.8 million tonnes a year, remains offline for up to five years.", sourceIds: ["qat-agbi-fm"], confidence: "reported" },
      { text: "Qatar's GDP fell 7 percent year on year in the first quarter of 2026, with mining and quarrying, including energy, down 26 percent, while non-mining activity grew 3.5 percent.", sourceIds: ["qat-agbi-gdp"], confidence: "reported" },
      { text: "Qatar's second-quarter 2026 budget deficit reached QAR 21.2 billion, and the first-half shortfall of QAR 31.5 billion already exceeded the full-year projection of QAR 21.8 billion.", sourceIds: ["qat-euronews-q2"], confidence: "reported" },
    ],
    policy: [
      { text: "Qatar's foreign ministry said in September 2026 that reported spending cuts of up to 30 percent apply only to operating expenses, excluding salaries and capital projects, and are temporary crisis measures.", sourceIds: ["qat-euronews-q2"], confidence: "reported" },
    ],
    metrics: [
      { label: "GDP, Q1 2026 (y/y)", value: "-7%", sourceIds: ["qat-agbi-gdp"], asOf: "2026-03" },
      { label: "Budget deficit, Q2 2026", value: "QAR 21.2 billion", sourceIds: ["qat-euronews-q2"], asOf: "2026-06" },
      { label: "LNG capacity offline", value: "about 17%", sourceIds: ["qat-agbi-fm"], asOf: "2026-07" },
    ],
  },
  SAU: {
    energy: [
      { text: "Saudi crude shipments averaged 5.28 million barrels per day in September 2026, the highest since February, according to Bloomberg tanker-tracking data, after the East-West pipeline attack forced larger flows back through Hormuz.", sourceIds: ["sau-bt-sepship"], confidence: "reported" },
      { text: "Exports from Yanbu on the Red Sea reached nearly 4 million barrels per day in the week from 16 March 2026, up from an average of 770,000 in January and February, with the East-West pipeline able to pump up to 7 million.", sourceIds: ["sau-oedigital-yanbu"], confidence: "reported" },
      { text: "Saudi real GDP contracted 4.8 percent year on year in the second quarter of 2026, driven by a 24.7 percent fall in crude production; the first-half budget deficit of SAR 160 billion already equalled 97 percent of the full-year target.", sourceIds: ["sau-eam-gdp"], confidence: "reported" },
    ],
    policy: [
      { text: "Saudi Arabia raised USD 3.25 billion in September 2026 through a two-tranche sukuk that was five times oversubscribed, under a 2026 borrowing plan of SAR 217 billion, 56 percent above 2025.", sourceIds: ["sau-agbi-sukuk"], confidence: "reported" },
      { text: "On 6 September 2026 seven core OPEC+ members including Saudi Arabia kept the October output target unchanged, after the September increase of about 188,000 barrels per day completed the unwinding of a 1.65 million barrel cut.", sourceIds: ["gcc-air-opecplus"], confidence: "reported" },
      { text: "Saudi Arabia financed its entire first-half 2026 budget deficit of SAR 160 billion through borrowing rather than by drawing down reserves, according to Ministry of Finance data reported in July 2026.", sourceIds: ["sau-arabnews-q2"], confidence: "reported" },
    ],
    metrics: [
      { label: "Crude shipments, Sep 2026 (mb/d)", value: "5.28 million bpd", sourceIds: ["sau-bt-sepship"], asOf: "2026-09" },
      { label: "Real GDP growth, Q2 2026 (y/y)", value: "-4.8%", sourceIds: ["sau-eam-gdp"], asOf: "2026-06" },
      { label: "Budget deficit, H1 2026", value: "SAR 160 billion", sourceIds: ["sau-arabnews-q2"], asOf: "2026-06" },
    ],
  },
  SLV: {
    environmental: [
      { text: "August 2026 was the driest August in El Salvador since records began in 1971, with rainfall 57 percent below normal (134.9 mm against 313.6 mm) and a maximum temperature of 44.2 degrees Celsius.", sourceIds: ["slv-eyn-agosto"], confidence: "reported" },
      { text: "Hydropower generation in El Salvador was 72.7 percent lower in July 2026 than in July 2025, and losses of 6.9 million quintals of corn, beans and sorghum were feared for August-September plantings.", sourceIds: ["slv-eyn-agosto"], confidence: "reported" },
      { text: "The Ministry of Environment projected a 70 to 90 percent probability of deficient rainfall in the east-central zones of El Salvador from August to October 2026.", sourceIds: ["slv-elmundo-alerta"], confidence: "reported" },
    ],
    energy: [
      { text: "El Salvador held reference fuel prices stable from 26 May to 8 June 2026 (regular gasoline USD 4.41 to 4.42, diesel USD 4.44), the first period without increases after weeks of rises.", sourceIds: ["slv-elsalvador-fuel"], confidence: "reported" },
    ],
    policy: [
      { text: "On 25 August 2026 Civil Protection declared a national red alert for meteorological and agricultural drought in El Salvador, with water reserves, agricultural assistance and temporary cash transfers to vulnerable families.", sourceIds: ["slv-elmundo-alerta"], confidence: "reported" },
    ],
    metrics: [
      { label: "August 2026 rainfall vs normal", value: "-57%", sourceIds: ["slv-eyn-agosto"], asOf: "2026-08" },
      { label: "Hydropower generation, July 2026 vs July 2025", value: "-72.7%", sourceIds: ["slv-eyn-agosto"], asOf: "2026-07" },
    ],
  },
  SOM: {
    environmental: [
      { text: "In June 2026 FAO assessed a greater than 90 percent likelihood of El Niño conditions during the October-December Deyr season and urged flood preparedness in the Juba and Shabelle river basins.", sourceIds: ["som-fao-flood"], confidence: "confirmed" },
    ],
    energy: [
      { text: "In May 2026 the UN reported that fuel prices in Somalia had risen 150 percent and food prices by as much as 70 percent in some areas.", sourceIds: ["som-ungeneva-hunger"], confidence: "reported" },
      { text: "In March 2026 Reuters reported that fuel prices in some parts of Somalia had more than doubled after the Iran war halted shipments through the Strait of Hormuz.", sourceIds: ["som-reuters-tuktuk"], confidence: "reported" },
      { text: "The World Bank projected Somali inflation to rise to 6 percent in 2026, noting that diesel-based power generation passes fuel price increases quickly into costs.", sourceIds: ["som-wb-update"], confidence: "reported" },
    ],
    policy: [
      { text: "On 23 September 2026 the head of the Somali Disaster Management Agency called for El Niño flood plans covering evacuation, shelter, health and cash assistance, guided by forecasts and Jubba and Shabelle river levels.", sourceIds: ["som-allafrica-sodma"], confidence: "reported" },
    ],
    metrics: [
      { label: "Fuel price increase in some areas, as of May 2026", value: "+150%", sourceIds: ["som-ungeneva-hunger"], asOf: "2026-05" },
    ],
  },
  THA: {
    environmental: [
      { text: "In July 2026 Thailand's water office warned that El Niño would intensify sharply between October and December 2026, with a high probability of becoming a very strong event, while cumulative rainfall ran 10 percent below average.", sourceIds: ["tha-nation-elnino"], confidence: "reported" },
      { text: "Projected usable dam reserves for 1 November 2026 were 12,105 million cubic metres against 17,245 million a year earlier, still above the 4,247 million recorded at the 2015 drought peak.", sourceIds: ["tha-nation-elnino"], confidence: "preliminary" },
    ],
    energy: [
      { text: "In September 2026 LNG prices approached US$28 per MMBtu; imported LNG supplies roughly 30 percent of gas for Thai power generation, and PTTEP estimates each US$3 rise lifts electricity prices by about 5 percent.", sourceIds: ["tha-tbn-lng"], confidence: "reported" },
    ],
    policy: [
      { text: "On 10 March 2026 the Cabinet ordered government officials and state enterprise staff to work from home, suspended overseas trips and cut air-conditioning use to save energy.", sourceIds: ["tha-prd-wfh"], confidence: "confirmed" },
      { text: "In September 2026 the Energy Ministry was pursuing longer-term LNG contracts and supplier diversification, with PTT examining sources in Oman, North America and West Africa.", sourceIds: ["tha-tbn-lng"], confidence: "reported" },
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
  VNM: {
    environmental: [
      { text: "In July 2026 Viet Nam's weather service reported a probability of more than 95 percent that El Niño persists through the second half of 2026 into 2027, with risks to hydropower generation on the Đà River system.", sourceIds: ["vnm-vietnamnews-elnino"], confidence: "reported" },
      { text: "In late May 2026 a heatwave with temperatures of about 40 degrees Celsius in northern Viet Nam set new daily electricity demand records and caused repeated evening power cuts in Hanoi, according to Reuters.", sourceIds: ["vnm-reuters-heat"], confidence: "reported" },
    ],
    energy: [
      { text: "In July 2026 Petrolimex diesel sales rose 41.9 percent year on year, while private wholesalers were reported to meet only 50 to 60 percent of demand and one distributor received 40 percent of contracted diesel.", sourceIds: ["vnm-tuoitre-supply"], confidence: "reported" },
      { text: "From 1 June 2026 all unleaded petrol sold in Viet Nam must be blended as E10; monthly ethanol demand is 92,000 to 100,000 cubic metres against initial domestic supply of about 25,000 cubic metres.", sourceIds: ["vnm-vietnamnews-e10"], confidence: "reported" },
    ],
    policy: [
      { text: "In May 2026 the power sector planned for electricity demand growth of 8.5 percent in the base case and up to 14.1 percent in an extreme dry-season case, with a 10 percent consumption reduction target for April to July.", sourceIds: ["vnm-vietnamnews-power"], confidence: "reported" },
    ],
  },
};

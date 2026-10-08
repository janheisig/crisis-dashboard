#!/usr/bin/env node
/** One-off download of the IMF "Global_Shipping_Routes" network (public ArcGIS layer) to public/data/shipping-routes.json. Coordinates are rounded to 2 decimals. */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const URL_ = 'https://services9.arcgis.com/weJ1QsnbMYJlCHdG/arcgis/rest/services/Global_Shipping_Routes/FeatureServer/15/query?where=1%3D1&outFields=RefName&f=geojson';
const res = await fetch(URL_);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const j = await res.json();
const lines = j.features.flatMap((f) => (f.geometry.type === 'MultiLineString' ? f.geometry.coordinates : [f.geometry.coordinates]));
const out = lines.map((l) => l.map(([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100]));
await writeFile(fileURLToPath(new URL('../public/data/shipping-routes.json', import.meta.url)), JSON.stringify({ source: 'IMF PortWatch / ArcGIS layer Global_Shipping_Routes', lines: out }));
console.log(out.length, 'lines');

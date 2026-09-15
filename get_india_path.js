const fs = require('fs');
const topojson = require('topojson-client');
const world = require('world-atlas/countries-110m.json');

async function run() {
  const { geoMercator, geoPath } = await import('d3-geo');

  const countries = topojson.feature(world, world.objects.countries);
  const india = countries.features.find(f => f.id === '356');

  const projection = geoMercator().fitSize([400, 450], india);
  const path = geoPath().projection(projection);

  const svgPathString = path(india);
  fs.writeFileSync('india_path.txt', svgPathString);
}
run();

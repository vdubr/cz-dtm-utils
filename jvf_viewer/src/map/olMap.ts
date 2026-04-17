import proj4 from 'proj4';
import { register } from 'ol/proj/proj4.js';
import { get as getProjection } from 'ol/proj.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';

// S-JTSK bez towgs84 — shodné s ESRI:102067, jak ČÚZK AGS server renderuje tiles
// towgs84 záměrně vynecháno: ČÚZK tiles neprošly datum shiftem, vektorová data
// z JVF musí být v témže "falešném" CRS aby seděla na podklad
proj4.defs(
  'EPSG:5514',
  '+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +units=m +no_defs +type=crs'
);
register(proj4);

const proj5514 = getProjection('EPSG:5514');
if (proj5514) {
  proj5514.setExtent([-925000, -1444353, -400645, -920000]);
}

export function createOlMap(targetId: string): Map {
  const view = new View({
    projection: 'EPSG:5514',
    center: [-641127, -1042466],
    zoom: 8,
    minZoom: 5,
    maxZoom: 20,
  });

  const map = new Map({
    target: targetId,
    view,
    layers: [],
    controls: [],
  });

  return map;
}

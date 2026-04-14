import proj4 from 'proj4';
import { register } from 'ol/proj/proj4.js';
import { get as getProjection } from 'ol/proj.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';

proj4.defs(
  'EPSG:5514',
  '+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=542.5,89.2,456.9,5.517,2.275,5.516,6.96 +units=m +no_defs'
);
register(proj4);

const proj5514 = getProjection('EPSG:5514');
if (proj5514) {
  proj5514.setExtent([-925000, -1444353, -400645, -920000]);
}

export function createOlMap(targetId: string): Map {
  const view = new View({
    projection: 'EPSG:5514',
    center: [-600000, -1160000],
    zoom: 7,
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

import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import type Map from 'ol/Map.js';
import type { Geometry as OlGeometry } from 'ol/geom.js';
import OlPoint from 'ol/geom/Point.js';

const HIGHLIGHT_COLOR = '#39ff14';
const HIGHLIGHT_COLOR_FILL = 'rgba(57,255,20,0.08)';

const highlightSource = new VectorSource();

const highlightLayer = new VectorLayer({
  source: highlightSource,
  style: (feature) => {
    const geom = feature.getGeometry();
    if (!geom) return undefined;
    const type = geom.getType();
    if (type === 'Point') {
      return new Style({
        image: new CircleStyle({
          radius: 10,
          fill: new Fill({ color: 'transparent' }),
          stroke: new Stroke({ color: HIGHLIGHT_COLOR, width: 2.5 }),
        }),
      });
    }
    if (type === 'Polygon' || type === 'MultiPolygon') {
      return new Style({
        fill: new Fill({ color: HIGHLIGHT_COLOR_FILL }),
        stroke: new Stroke({ color: HIGHLIGHT_COLOR, width: 3 }),
      });
    }
    // LineString, MultiLineString
    return new Style({
      stroke: new Stroke({ color: HIGHLIGHT_COLOR, width: 5 }),
    });
  },
  zIndex: 9999,
});

export function initHighlightLayer(map: Map): void {
  map.addLayer(highlightLayer);
}

export function highlightFeature(feature: Feature): void {
  highlightSource.clear();
  // Clone the feature's geometry into a new feature for the highlight layer
  const geom = feature.getGeometry() as OlGeometry | undefined;
  if (!geom) return;
  const clone = new Feature(geom.clone());
  highlightSource.addFeature(clone);
}

export function clearHighlight(): void {
  highlightSource.clear();
}

/**
 * Zoom map to a feature. For Point geometries uses animate (no zero-extent fit).
 */
export function zoomToFeature(map: Map, feature: Feature): void {
  const geom = feature.getGeometry();
  if (!geom) return;

  if (geom instanceof OlPoint) {
    map.getView().animate({
      center: geom.getCoordinates(),
      zoom: 19,
      duration: 500,
    });
    return;
  }

  const extent = geom.getExtent();
  if (!extent) return;
  map.getView().fit(extent, {
    padding: [80, 80, 80, 80],
    maxZoom: 19,
    duration: 500,
  });
}

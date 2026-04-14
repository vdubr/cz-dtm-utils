import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import OlPoint from 'ol/geom/Point.js';
import OlLineString from 'ol/geom/LineString.js';
import OlPolygon from 'ol/geom/Polygon.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { extend, createEmpty } from 'ol/extent.js';
import type { Extent } from 'ol/extent.js';
import type Map from 'ol/Map.js';
import type { ObjektovyTyp, Geometry, GmlPolygon } from 'jvf-parser';

export const LAYER_COLORS: Record<string, string> = {
  ZPS: '#64b5f6',
  TI: '#ff9800',
  DI: '#ffeb3b',
  GAD: '#66bb6a',
  OPL: '#ce93d8',
};

const DEFAULT_COLOR = '#90a4ae';

function getColor(obsahovaCast: string): string {
  return LAYER_COLORS[obsahovaCast] ?? DEFAULT_COLOR;
}

function flatCoordsToRing(flat: number[], dim: number): number[][] {
  const ring: number[][] = [];
  for (let i = 0; i < flat.length; i += dim) {
    ring.push([flat[i]!, flat[i + 1]!]);
  }
  return ring;
}

function buildPolygonRings(poly: GmlPolygon): number[][][] {
  const dim = poly.srsDimension > 0 ? poly.srsDimension : 2;
  const rings: number[][][] = [flatCoordsToRing(poly.exterior, dim)];
  for (const interior of poly.interiors) {
    rings.push(flatCoordsToRing(interior, dim));
  }
  return rings;
}

function createStyleForGeom(geomType: Geometry['type'], color: string): Style {
  switch (geomType) {
    case 'Point':
      return new Style({
        image: new CircleStyle({
          radius: 4,
          fill: new Fill({ color }),
          stroke: new Stroke({ color: 'rgba(0,0,0,0.4)', width: 1 }),
        }),
      });
    case 'LineString':
    case 'MultiCurve':
      return new Style({
        stroke: new Stroke({ color, width: 2 }),
      });
    case 'Polygon':
      return new Style({
        fill: new Fill({ color: color + '33' }),
        stroke: new Stroke({ color, width: 1.5 }),
      });
  }
}

export interface JvfVectorLayer {
  olLayer: VectorLayer;
  objektovyTyp: ObjektovyTyp;
  featureCount: number;
}

export function buildJvfLayers(objekty: ObjektovyTyp[]): {
  layers: JvfVectorLayer[];
  extent: Extent;
} {
  const layers: JvfVectorLayer[] = [];
  const totalExtent = createEmpty();

  for (const ot of objekty) {
    const color = getColor(ot.obsahovaCast);
    const features: Feature[] = [];

    for (const zaznam of ot.zaznamy) {
      for (const geom of zaznam.geometrie) {
        let feature: Feature | null = null;

        switch (geom.type) {
          case 'Point': {
            const coords = geom.data.coordinates;
            feature = new Feature({
              geometry: new OlPoint([coords[0]!, coords[1]!]),
            });
            break;
          }
          case 'LineString': {
            const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
            const coords = flatCoordsToRing(geom.data.coordinates, dim);
            if (coords.length >= 2) {
              feature = new Feature({ geometry: new OlLineString(coords) });
            }
            break;
          }
          case 'Polygon': {
            const rings = buildPolygonRings(geom.data);
            if (rings[0] && rings[0].length >= 3) {
              feature = new Feature({ geometry: new OlPolygon(rings) });
            }
            break;
          }
          case 'MultiCurve': {
            for (const curve of geom.data.curves) {
              const dim = curve.srsDimension > 0 ? curve.srsDimension : 2;
              const coords = flatCoordsToRing(curve.coordinates, dim);
              if (coords.length >= 2) {
                features.push(
                  new Feature({
                    geometry: new OlLineString(coords),
                    style: createStyleForGeom('LineString', color),
                  })
                );
              }
            }
            break;
          }
        }

        if (feature) {
          feature.set('style', createStyleForGeom(geom.type, color));
          features.push(feature);
        }
      }
    }

    if (features.length === 0) continue;

    const source = new VectorSource({ features });
    const layerExtent = source.getExtent();
    if (layerExtent) extend(totalExtent, layerExtent);

    const style = createStyleForGeom(
      ot.zaznamy[0]?.geometrie[0]?.type ?? 'Point',
      color
    );

    const olLayer = new VectorLayer({
      source,
      style: (feature) => {
        return (feature.get('style') as Style | undefined) ?? style;
      },
    });

    olLayer.set('jvfNazev', ot.nazev);
    olLayer.set('jvfObsahova', ot.obsahovaCast);

    layers.push({ olLayer, objektovyTyp: ot, featureCount: features.length });
  }

  return { layers, extent: totalExtent };
}

export function addJvfLayersToMap(map: Map, layers: JvfVectorLayer[]): void {
  for (const { olLayer } of layers) {
    map.addLayer(olLayer);
  }
}

export function removeJvfLayersFromMap(map: Map, layers: JvfVectorLayer[]): void {
  for (const { olLayer } of layers) {
    map.removeLayer(olLayer);
  }
}

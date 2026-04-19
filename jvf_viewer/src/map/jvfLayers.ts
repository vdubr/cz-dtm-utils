import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import OlPoint from 'ol/geom/Point.js';
import OlLineString from 'ol/geom/LineString.js';
import OlPolygon from 'ol/geom/Polygon.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import IconStyle from 'ol/style/Icon.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { extend, createEmpty } from 'ol/extent.js';
import type { Extent } from 'ol/extent.js';
import type Map from 'ol/Map.js';
import type { ObjektovyTyp, Geometry, GmlPolygon } from 'jvf-parser';
import { getSymbology, FALLBACK_COLORS, DEFAULT_COLOR } from './symbology.js';

// Re-export for consumers that previously imported LAYER_COLORS from here
export { FALLBACK_COLORS as LAYER_COLORS } from './symbology.js';

/** Base path for SVG symbols served from public/symboly/ */
const SVG_BASE = './symboly/';

function flatCoordsToRing(flat: number[], dim: number): number[][] {
  const ring: number[][] = [];
  for (let i = 0; i + 1 < flat.length; i += dim) {
    const x = flat[i];
    const y = flat[i + 1];
    if (x === undefined || y === undefined) continue;
    ring.push([x, y]);
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

/** Resolve pixel stroke width from katalog mm value (1mm ≈ 3.78px at 96dpi, scale for screen legibility) */
function mmToPx(mm: number): number {
  return Math.max(1, mm * 3.78);
}

export interface ResolvedStyle {
  fillColor: string;
  strokeColor: string;
  strokeWidthPx: number;
  /** SVG filename for point symbol, if available */
  pointSvg?: string;
}

/**
 * Resolve style for an ObjektovyTyp from its codeBase.
 * Exported so threeScene.ts can use the same logic.
 */
export function resolveStyle(ot: ObjektovyTyp): ResolvedStyle {
  const sym = getSymbology(ot.codeBase);
  if (sym) {
    const fill = sym.fillColor ?? (FALLBACK_COLORS[ot.obsahovaCast] ?? DEFAULT_COLOR) + '55';
    const stroke = sym.strokeColor ?? (FALLBACK_COLORS[ot.obsahovaCast] ?? DEFAULT_COLOR);
    const width = sym.strokeWidth != null ? mmToPx(sym.strokeWidth) : 1.5;
    return { fillColor: fill, strokeColor: stroke, strokeWidthPx: width, pointSvg: sym.pointSvg };
  }
  const fallback = FALLBACK_COLORS[ot.obsahovaCast] ?? DEFAULT_COLOR;
  return { fillColor: fallback + '33', strokeColor: fallback, strokeWidthPx: 1.5 };
}

function createStyleForGeom(
  geomType: Geometry['type'],
  s: ResolvedStyle,
): Style {
  switch (geomType) {
    case 'Point':
      if (s.pointSvg) {
        return new Style({
          image: new IconStyle({
            src: SVG_BASE + s.pointSvg,
            scale: 0.25,
          }),
        });
      }
      return new Style({
        image: new CircleStyle({
          radius: 4,
          fill: new Fill({ color: s.strokeColor }),
          stroke: new Stroke({ color: s.strokeColor, width: 1 }),
        }),
      });
    case 'LineString':
    case 'MultiCurve':
      return new Style({
        stroke: new Stroke({ color: s.strokeColor, width: s.strokeWidthPx }),
      });
    case 'Polygon':
      return new Style({
        fill: new Fill({ color: s.fillColor }),
        stroke: new Stroke({ color: s.strokeColor, width: Math.max(1, s.strokeWidthPx * 0.5) }),
      });
    default:
      return new Style({
        stroke: new Stroke({ color: s.strokeColor, width: s.strokeWidthPx }),
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
    const s = resolveStyle(ot);
    const features: Feature[] = [];

    for (const zaznam of ot.zaznamy) {
      for (const geom of zaznam.geometrie) {
        let feature: Feature | null = null;

        switch (geom.type) {
          case 'Point': {
            const coords = geom.data.coordinates;
            const x = coords[0];
            const y = coords[1];
            if (x === undefined || y === undefined) break;
            feature = new Feature({
              geometry: new OlPoint([x, y]),
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
                const mcFeature = new Feature({
                  geometry: new OlLineString(coords),
                });
                mcFeature.set('style', createStyleForGeom('LineString', s));
                mcFeature.set('jvfElementName', ot.elementName);
                mcFeature.set('jvfObjectId', zaznam.commonAttributes?.id ?? null);
                features.push(mcFeature);
              }
            }
            break;
          }
        }

        if (feature) {
          feature.set('style', createStyleForGeom(geom.type, s));
          feature.set('jvfElementName', ot.elementName);
          feature.set('jvfObjectId', zaznam.commonAttributes?.id ?? null);
          features.push(feature);
        }
      }
    }

    if (features.length === 0) continue;

    const source = new VectorSource({ features });
    const layerExtent = source.getExtent();
    if (layerExtent) extend(totalExtent, layerExtent);

    // Každá feature má individuálně nastavený style (viz feature.set('style', …)
    // výše). Fallback nepotřebujeme — source je statický, style propojení se dědí
    // z feature property.
    const olLayer = new VectorLayer({
      source,
      style: (feature) => feature.get('style') as Style | undefined,
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

/**
 * Find the first OL Feature matching elementName + objectId across all JVF layers.
 * Returns null if not found.
 */
export function findFeature(
  layers: JvfVectorLayer[],
  elementName: string,
  objectId: string,
): Feature | null {
  for (const { olLayer } of layers) {
    const source = olLayer.getSource();
    if (!source) continue;
    const found = source.getFeatures().find(
      (f) =>
        f.get('jvfElementName') === elementName &&
        f.get('jvfObjectId') === objectId,
    );
    if (found) return found;
  }
  return null;
}

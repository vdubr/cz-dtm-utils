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
import type { ObjektovyTyp, ZaznamObjektu, Geometry, GmlPolygon } from 'jvf-parser';
import {
  getSymbology,
  FALLBACK_COLORS,
  DEFAULT_COLOR,
  type ObjectSymbology,
  type SymbolVariant,
} from './symbology.js';
import { VARIANT_ATTR } from './variantAttrMap.js';

// Re-export for consumers that previously imported LAYER_COLORS from here
export { FALLBACK_COLORS as LAYER_COLORS } from './symbology.js';

/** Base path for SVG symbols served from public/symboly/ */
const SVG_BASE = './symboly/';

/**
 * Referenční měřítko pro převod mm (papírová velikost v katalogu) na metry
 * v terénu. 1:500 znamená, že 1 mm na papíře = 0,5 m v terénu.
 */
const REFERENCE_SCALE = 500;
const MM_TO_METERS = 0.001;
/** Kolik metrů v terénu odpovídá 1 mm v katalogu. */
const MM_TO_MAP_METERS = MM_TO_METERS * REFERENCE_SCALE;

/**
 * Referenční resolution mapy [m/px], při které je SVG symbol v normální
 * velikosti (`scale = REFERENCE_ICON_SCALE`). Přibližně odpovídá měřítku
 * 1:500 na běžné obrazovce (96 dpi). Při větší resolution (oddálení) se
 * symbol zmenšuje, při menší (přiblížení) zvětšuje, vše v rozmezí
 * `[MIN_ICON_SCALE, MAX_ICON_SCALE]`.
 *
 * Nad `HIDE_ICON_RESOLUTION` se SVG nerenderují vůbec — místo nich se
 * zobrazí malý barevný puntík (CircleStyle), aby mapa zůstala čitelná.
 */
const REFERENCE_ICON_RESOLUTION = 0.5;
const REFERENCE_ICON_SCALE = 0.25;
const MIN_ICON_SCALE = 0.08;
const MAX_ICON_SCALE = 0.35;
const HIDE_ICON_RESOLUTION = 4.0;

/**
 * Vypočítá adaptivní scale pro IconStyle podle aktuální resolution mapy.
 * Pokud je resolution nad threshold, vrátí `null` (volající má místo SVG
 * nakreslit jen tečku).
 */
function adaptiveIconScale(resolution: number): number | null {
  if (resolution <= 0) return REFERENCE_ICON_SCALE;
  if (resolution >= HIDE_ICON_RESOLUTION) return null;
  const scale = REFERENCE_ICON_SCALE * (REFERENCE_ICON_RESOLUTION / resolution);
  return Math.max(MIN_ICON_SCALE, Math.min(MAX_ICON_SCALE, scale));
}

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

/**
 * Parse lineStyle string from catalog into dash pattern in mm.
 *
 * Examples:
 *   'plná'                            → undefined
 *   'čárkovaná 60,0 6,0 [68]'          → [60, 6]
 *   'čárkovaná 2,0 1,5 /\n3,5 7,0'     → [2, 1.5, 3.5, 7]
 *
 * CZ decimal comma is normalized to dot. The `[NN]` suffix (pattern number
 * from the catalog) is ignored. Forward slashes / newlines separate segments
 * but are flattened into a single dash array.
 */
export function parseLineStyle(lineStyle: string | undefined): number[] | undefined {
  if (!lineStyle) return undefined;
  const trimmed = lineStyle.trim();
  if (trimmed === 'plná' || trimmed === '') return undefined;
  // Strip leading keyword ("čárkovaná") and trailing [NN]
  const body = trimmed
    .replace(/^čárkovaná\s+/i, '')
    .replace(/\s*\[\d+\]\s*$/, '');
  // Split on whitespace / slashes / newlines, keep numeric tokens
  const tokens = body.split(/[\s/\n]+/).filter(Boolean);
  const nums: number[] = [];
  for (const t of tokens) {
    const n = parseFloat(t.replace(',', '.'));
    if (Number.isFinite(n) && n > 0) nums.push(n);
  }
  if (nums.length === 0) return undefined;
  // OL requires even-length dash array (dash, gap, dash, gap, …)
  if (nums.length % 2 === 1) nums.push(nums[nums.length - 1]!);
  return nums;
}

/**
 * Convert dash pattern from mm (on paper at REFERENCE_SCALE) to px on screen
 * at the given map resolution. Zoom-dependent — dash grows/shrinks with zoom.
 */
function dashMmToPx(dashMm: number[], resolution: number): number[] {
  if (resolution <= 0) return dashMm;
  return dashMm.map((mm) => {
    const meters = mm * MM_TO_MAP_METERS;
    const px = meters / resolution;
    return Math.max(2, px);
  });
}

export interface ResolvedStyle {
  fillColor: string;
  strokeColor: string;
  strokeWidthPx: number;
  /** Dash pattern in mm (paper units), converted to px per zoom in style fn. */
  lineDashMm?: number[];
  /** SVG filename for point symbol, if available */
  pointSvg?: string;
}

/**
 * Merge base symbology + matching variant (if any) into a flat style source.
 * Variant fields override base fields only when defined.
 */
function mergeSymbologyWithVariant(
  base: ObjectSymbology,
  variant: SymbolVariant | undefined,
): {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  lineStyle?: string;
  pointSvg?: string;
} {
  return {
    fillColor: variant?.fillColor ?? base.fillColor,
    strokeColor: variant?.strokeColor ?? base.strokeColor,
    strokeWidth: variant?.strokeWidth ?? base.strokeWidth,
    lineStyle: variant?.lineStyle ?? base.lineStyle,
    pointSvg: base.pointSvg,
  };
}

/**
 * Build ResolvedStyle from merged symbology fields. Falls back to content-part
 * default color when catalog is silent. For lines & polygons: if strokeColor
 * is not set, fillColor is used as stroke (catalog convention — most line
 * entries carry their color in `fillColor`).
 */
function buildResolvedStyle(
  merged: ReturnType<typeof mergeSymbologyWithVariant>,
  obsahovaCast: string,
): ResolvedStyle {
  const fallback = FALLBACK_COLORS[obsahovaCast] ?? DEFAULT_COLOR;
  const primary = merged.fillColor ?? fallback;
  const fill = merged.fillColor ?? fallback + '55';
  // Pro linie / obrysy: když chybí strokeColor, použij fillColor (katalog
  // u linií ukládá barvu do fillColor).
  const stroke = merged.strokeColor ?? primary;
  const width = merged.strokeWidth != null ? mmToPx(merged.strokeWidth) : 1.5;
  const lineDashMm = parseLineStyle(merged.lineStyle);
  return {
    fillColor: fill,
    strokeColor: stroke,
    strokeWidthPx: width,
    lineDashMm,
    pointSvg: merged.pointSvg,
  };
}

/**
 * Resolve style for an ObjektovyTyp from its codeBase (base style, no variant).
 * Exported so threeScene.ts can use the same logic.
 */
export function resolveStyle(ot: ObjektovyTyp): ResolvedStyle {
  const sym = getSymbology(ot.codeBase);
  if (sym) {
    return buildResolvedStyle(mergeSymbologyWithVariant(sym, undefined), ot.obsahovaCast);
  }
  const fallback = FALLBACK_COLORS[ot.obsahovaCast] ?? DEFAULT_COLOR;
  return { fillColor: fallback + '33', strokeColor: fallback, strokeWidthPx: 1.5 };
}

/**
 * Resolve style for a single záznam, applying variant lookup based on
 * VARIANT_ATTR map. Falls back to base style when no variant matches.
 */
export function resolveStyleForZaznam(
  ot: ObjektovyTyp,
  zaznam: ZaznamObjektu,
): ResolvedStyle {
  const sym = getSymbology(ot.codeBase);
  if (!sym) return resolveStyle(ot);

  const variantMap = VARIANT_ATTR[ot.codeBase];
  let variant: SymbolVariant | undefined;
  if (variantMap && sym.variants && sym.variants.length > 0) {
    const raw = zaznam.attributes?.[variantMap.attrName];
    if (raw !== undefined && raw !== null) {
      const key = String(raw);
      const idx = variantMap.valueToVariantIndex[key];
      if (idx !== undefined && sym.variants[idx]) {
        variant = sym.variants[idx];
      }
    }
  }

  return buildResolvedStyle(mergeSymbologyWithVariant(sym, variant), ot.obsahovaCast);
}

/**
 * Build OL Style for a given geometry type from a ResolvedStyle. When the
 * style carries a dash pattern, it must be resolved per frame using the
 * current map resolution (hence `resolution` param).
 */
function createStyleForGeom(
  geomType: Geometry['type'],
  s: ResolvedStyle,
  resolution: number,
): Style {
  const dashPx = s.lineDashMm ? dashMmToPx(s.lineDashMm, resolution) : undefined;
  switch (geomType) {
    case 'Point': {
      // Při velkém oddálení nahradíme SVG ikonu malou barevnou tečkou —
      // jinak se symboly překrývají a mapa je nepřehledná.
      const iconScale = s.pointSvg ? adaptiveIconScale(resolution) : null;
      if (s.pointSvg && iconScale !== null) {
        return new Style({
          image: new IconStyle({
            src: SVG_BASE + s.pointSvg,
            scale: iconScale,
          }),
        });
      }
      // Tečka — buď fallback (žádné SVG), nebo příliš oddálené.
      const dotRadius = s.pointSvg ? 2 : 4;
      return new Style({
        image: new CircleStyle({
          radius: dotRadius,
          fill: new Fill({ color: s.strokeColor }),
          stroke: new Stroke({ color: s.strokeColor, width: 1 }),
        }),
      });
    }
    case 'LineString':
    case 'MultiCurve':
      return new Style({
        stroke: new Stroke({
          color: s.strokeColor,
          width: s.strokeWidthPx,
          lineDash: dashPx,
        }),
      });
    case 'Polygon':
      return new Style({
        fill: new Fill({ color: s.fillColor }),
        stroke: new Stroke({
          color: s.strokeColor,
          width: Math.max(1, s.strokeWidthPx * 0.5),
          lineDash: dashPx,
        }),
      });
    default:
      return new Style({
        stroke: new Stroke({
          color: s.strokeColor,
          width: s.strokeWidthPx,
          lineDash: dashPx,
        }),
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
    const features: Feature[] = [];

    for (const zaznam of ot.zaznamy) {
      const sFeature = resolveStyleForZaznam(ot, zaznam);
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
                mcFeature.set('jvfResolvedStyle', sFeature);
                mcFeature.set('jvfGeomType', 'LineString');
                mcFeature.set('jvfElementName', ot.elementName);
                mcFeature.set('jvfObjectId', zaznam.commonAttributes?.id ?? null);
                features.push(mcFeature);
              }
            }
            break;
          }
        }

        if (feature) {
          feature.set('jvfResolvedStyle', sFeature);
          feature.set('jvfGeomType', geom.type);
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

    // Dynamická style function — dash závisí na resolution (zoom-dependent).
    // Feature si nese svůj ResolvedStyle v property; styl se buduje per frame.
    const olLayer = new VectorLayer({
      source,
      style: (feature, resolution) => {
        const s = feature.get('jvfResolvedStyle') as ResolvedStyle | undefined;
        const geomType = feature.get('jvfGeomType') as Geometry['type'] | undefined;
        if (!s || !geomType) return undefined;
        return createStyleForGeom(geomType, s, resolution);
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

/**
 * Parsování geometrie JVF DTM 1.5.0.1 (R6 — defenzivní).
 *
 * 1.5.0.1 obaluje GML primitivy verzními wrappery:
 *   - `Bod2D`/`Bod3D`     → `pointProperty` → `Point`
 *   - `Linie2D`/`Linie3D` → `curveProperty` → `LineString`
 *   - `Plocha2D`/`Plocha3D`:
 *       - ZPS:     `Polygon` **přímo** (bez `surfaceProperty`)
 *       - DTI/PSPI: `surfaceProperty` → `Polygon`
 *   - `Obvod3D`           → jeden či více `LineString` → `MultiCurve`
 *
 * Primitivy se reusují z 1.4.3 (`geometry-primitives.ts`) — sdílené, ne
 * kopírované. Uvnitř wrapperu se primitiv hledá přímo i přes volitelný
 * `*Property`, aby parser zvládl obě varianty ZPS vs DTI/PSPI.
 */
import type { Geometry, GmlLineString, GmlMultiCurve } from './types.js';
import {
  parseLineString,
  parsePoint,
  parsePolygon,
} from '../1.4.3/geometry-primitives.js';
import { pickChild } from '../1.4.3/xml-helpers.js';

/** Varianty názvu (bez / s `gml:` prefixem — obranně). */
function nameVariants(names: readonly string[]): string[] {
  return names.flatMap((n) => [n, `gml:${n}`]);
}

/**
 * Najde GML primitiv uvnitř wrapperu — buď přes `*Property` obal, nebo přímo.
 */
function findPrimitive(
  wrapper: Record<string, unknown>,
  propertyKey: string,
  primitiveNames: readonly string[]
): Record<string, unknown> | undefined {
  const prop = wrapper[propertyKey];
  if (prop != null && typeof prop === 'object') {
    const viaProp = pickChild(prop as Record<string, unknown>, nameVariants(primitiveNames));
    if (viaProp) return viaProp;
  }
  return pickChild(wrapper, nameVariants(primitiveNames));
}

/** `Obvod3D` (jeden či více `LineString`) → `MultiCurve`. */
function parseObvod3D(obvod: Record<string, unknown>): GmlMultiCurve | undefined {
  const raw = obvod['LineString'] ?? obvod['gml:LineString'];
  if (raw == null) return undefined;
  const list = Array.isArray(raw) ? raw : [raw];
  const curves: GmlLineString[] = [];
  for (const ls of list) {
    if (ls != null && typeof ls === 'object') {
      curves.push(parseLineString(ls as Record<string, unknown>));
    }
  }
  if (curves.length === 0) return undefined;
  const first = curves[0];
  return {
    id: undefined,
    srsName: first?.srsName ?? '',
    srsDimension: first?.srsDimension ?? 3,
    curves,
  };
}

/**
 * Parse geometrií z `GeometrieObjektu` (1.5.0.1). Vrací pole — jedna plocha
 * ZPS má `Polygon` (Plocha2D) i `MultiCurve` (Obvod3D), stejně jako 1.4.3
 * (surfaceProperty + multiCurveProperty).
 */
export function parseGeometrieObjektu1501(
  geomObj: Record<string, unknown> | undefined | null
): Geometry[] {
  if (geomObj == null || typeof geomObj !== 'object') return [];

  const geometries: Geometry[] = [];

  // Bod2D / Bod3D → Point
  for (const key of ['Bod2D', 'Bod3D']) {
    const wrapper = geomObj[key];
    if (wrapper != null && typeof wrapper === 'object') {
      const el = findPrimitive(wrapper as Record<string, unknown>, 'pointProperty', ['Point']);
      if (el) geometries.push({ type: 'Point', data: parsePoint(el) });
    }
  }

  // Linie2D / Linie3D → LineString
  for (const key of ['Linie2D', 'Linie3D']) {
    const wrapper = geomObj[key];
    if (wrapper != null && typeof wrapper === 'object') {
      const el = findPrimitive(wrapper as Record<string, unknown>, 'curveProperty', ['LineString']);
      if (el) geometries.push({ type: 'LineString', data: parseLineString(el) });
    }
  }

  // Plocha2D / Plocha3D → Polygon (přímo u ZPS, přes surfaceProperty u DTI/PSPI)
  for (const key of ['Plocha2D', 'Plocha3D']) {
    const wrapper = geomObj[key];
    if (wrapper != null && typeof wrapper === 'object') {
      const el = findPrimitive(wrapper as Record<string, unknown>, 'surfaceProperty', ['Polygon']);
      if (el) geometries.push({ type: 'Polygon', data: parsePolygon(el) });
    }
  }

  // Obvod3D → MultiCurve
  const obvod = geomObj['Obvod3D'];
  if (obvod != null && typeof obvod === 'object') {
    const mc = parseObvod3D(obvod as Record<string, unknown>);
    if (mc) geometries.push({ type: 'MultiCurve', data: mc });
  }

  return geometries;
}

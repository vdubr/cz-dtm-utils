import type { Geometry, GmlPolygon } from './types.js';
import {
  parsePoint,
  parseLineString,
  parsePolygon,
  parseMultiCurve,
} from './geometry-primitives.js';
import { pickChild } from './xml-helpers.js';

/**
 * Parse all geometries from a `GeometrieObjektu` parsed element.
 * Returns an array because one element can contain multiple geometry properties
 * (e.g. surfaceProperty AND multiCurveProperty).
 */
export function parseGeometrieObjektu(
  geomObj: Record<string, unknown> | undefined | null
): Geometry[] {
  if (geomObj == null || typeof geomObj !== 'object') return [];

  const geometries: Geometry[] = [];

  // pointProperty
  const pointProp = geomObj['pointProperty'];
  if (pointProp != null && typeof pointProp === 'object') {
    const ppObj = pointProp as Record<string, unknown>;
    const pointEl = ppObj['Point'];
    if (pointEl != null && typeof pointEl === 'object') {
      geometries.push({ type: 'Point', data: parsePoint(pointEl as Record<string, unknown>) });
    }
  }

  // curveProperty → LineString (plain or gml: prefixed)
  const curveProp = geomObj['curveProperty'];
  if (curveProp != null && typeof curveProp === 'object') {
    const lsEl = pickChild(curveProp as Record<string, unknown>, ['LineString', 'gml:LineString']);
    if (lsEl != null) {
      geometries.push({ type: 'LineString', data: parseLineString(lsEl) });
    }
  }

  // surfaceProperty → Polygon
  const surfaceProp = geomObj['surfaceProperty'];
  if (surfaceProp != null && typeof surfaceProp === 'object') {
    const polygonEl = pickChild(surfaceProp as Record<string, unknown>, [
      'Polygon',
      'gml:Polygon',
    ]);
    if (polygonEl != null) {
      geometries.push({ type: 'Polygon', data: parsePolygon(polygonEl) });
    }
  }

  // multiCurveProperty → MultiCurve
  const multiCurveProp = geomObj['multiCurveProperty'];
  if (multiCurveProp != null && typeof multiCurveProp === 'object') {
    const mcEl = pickChild(multiCurveProp as Record<string, unknown>, [
      'MultiCurve',
      'gml:MultiCurve',
    ]);
    if (mcEl != null) {
      geometries.push({ type: 'MultiCurve', data: parseMultiCurve(mcEl) });
    }
  }

  return geometries;
}

/**
 * Parse OblastObjektuKI which contains a surfaceProperty/Polygon.
 */
export function parseOblastObjektuKI(
  oblastObj: Record<string, unknown> | undefined | null
): GmlPolygon | undefined {
  if (oblastObj == null || typeof oblastObj !== 'object') return undefined;

  const surfaceProp = oblastObj['surfaceProperty'];
  if (surfaceProp != null && typeof surfaceProp === 'object') {
    const polygonEl = pickChild(surfaceProp as Record<string, unknown>, [
      'Polygon',
      'gml:Polygon',
    ]);
    if (polygonEl != null) return parsePolygon(polygonEl);
  }

  return undefined;
}

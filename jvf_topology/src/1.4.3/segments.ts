/**
 * Kontroly 3.4, 3.5 a 3.10 — Validace jednotlivých segmentů linie (IS DTM).
 *
 * - 3.4 Self-intersection liniových prvků
 * - 3.5 Nulová délka segmentu
 * - 3.10 Minimální délka segmentu (> 0, < MIN_DISTANCE_TOLERANCE)
 */

import type { GmlLineString, JvfDtm } from 'jvf-dtm-types';
import type { ErrorCtx, TopologyError } from './types.js';
import { MIN_DISTANCE_TOLERANCE } from './constants.js';
import { dist3D, mkError, segmentsIntersect, toPoints } from './geometry-math.js';

/**
 * Kontrola 3.4: Liniové objekty (LineString, segmenty MultiCurve) se nesmí samy
 * křížit ani překrývat. Kontrola ve 2D.
 *
 * Kód chyby: `LINE_SELF_INTERSECTION`
 *
 * Pozn.: Uzavření (start == end) je povoleno — to není křížení.
 */
export function checkLineSelfIntersection(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        if (geom.type === 'LineString') {
          if (lineStringHasSelfIntersection(geom.data)) {
            errors.push(
              mkError(ctx, 'error', 'LINE_SELF_INTERSECTION',
                'LineString se kříží nebo překrývá sám se sebou (2D).')
            );
          }
        } else if (geom.type === 'MultiCurve') {
          for (const curve of geom.data.curves) {
            if (lineStringHasSelfIntersection(curve)) {
              errors.push(
                mkError(ctx, 'error', 'LINE_SELF_INTERSECTION',
                  'Segment MultiCurve se kříží nebo překrývá sám se sebou (2D).')
              );
              break;
            }
          }
        }
      }
    }
  }

  return errors;
}

function lineStringHasSelfIntersection(geom: GmlLineString): boolean {
  const pts = toPoints(geom.coordinates, geom.srsDimension);
  if (pts.length < 4) return false;
  // LineString: otevřená polyčára — úsečky i→i+1, žádná "uzavírací" hrana
  const n = pts.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 2; j < n - 1; j++) {
      const pi = pts[i];
      const pi1 = pts[i + 1];
      const pj = pts[j];
      const pj1 = pts[j + 1];
      if (
        pi === undefined || pi1 === undefined ||
        pj === undefined || pj1 === undefined
      ) continue;
      if (segmentsIntersect(pi.x, pi.y, pi1.x, pi1.y, pj.x, pj.y, pj1.x, pj1.y)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Kontrola 3.5: Délka každého segmentu linie ve 3D nesmí být 0.
 *
 * Kód chyby: `SEGMENT_ZERO_LENGTH`
 */
export function checkZeroLengthSegments(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        if (geom.type === 'LineString') {
          const err = findZeroSegment(geom.data.coordinates, geom.data.srsDimension, ctx);
          if (err !== undefined) errors.push(err);
        } else if (geom.type === 'MultiCurve') {
          for (const curve of geom.data.curves) {
            const err = findZeroSegment(curve.coordinates, curve.srsDimension, ctx);
            if (err !== undefined) { errors.push(err); break; }
          }
        }
      }
    }
  }

  return errors;
}

function findZeroSegment(coords: number[], dim: number, ctx: ErrorCtx): TopologyError | undefined {
  for (let i = 0; i + dim < coords.length; i += dim) {
    const x1 = coords[i], y1 = coords[i + 1], z1 = dim >= 3 ? coords[i + 2] : undefined;
    const x2 = coords[i + dim], y2 = coords[i + dim + 1], z2 = dim >= 3 ? coords[i + dim + 2] : undefined;
    if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) continue;
    if (dist3D(x1, y1, z1, x2, y2, z2) === 0) {
      return mkError(
        ctx, 'error', 'SEGMENT_ZERO_LENGTH',
        `Segment linie mezi body (${x1}, ${y1}) a (${x2}, ${y2}) má nulovou délku.`
      );
    }
  }
  return undefined;
}

/**
 * Kontrola 3.10: Délka segmentu linie > 0, ale < MIN_DISTANCE_TOLERANCE (3D).
 * Výstup: varování.
 *
 * Kód: `SEGMENT_TOO_SHORT`
 */
export function checkMinSegmentLength(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        if (geom.type === 'LineString') {
          const err = findShortSegment(geom.data.coordinates, geom.data.srsDimension, ctx);
          if (err !== undefined) errors.push(err);
        } else if (geom.type === 'MultiCurve') {
          for (const curve of geom.data.curves) {
            const err = findShortSegment(curve.coordinates, curve.srsDimension, ctx);
            if (err !== undefined) { errors.push(err); break; }
          }
        }
      }
    }
  }

  return errors;
}

function findShortSegment(coords: number[], dim: number, ctx: ErrorCtx): TopologyError | undefined {
  for (let i = 0; i + dim < coords.length; i += dim) {
    const x1 = coords[i], y1 = coords[i + 1], z1 = dim >= 3 ? coords[i + 2] : undefined;
    const x2 = coords[i + dim], y2 = coords[i + dim + 1], z2 = dim >= 3 ? coords[i + dim + 2] : undefined;
    if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) continue;
    const d = dist3D(x1, y1, z1, x2, y2, z2);
    if (d > 0 && d < MIN_DISTANCE_TOLERANCE) {
      return mkError(
        ctx, 'warning', 'SEGMENT_TOO_SHORT',
        `Segment linie délky ${d.toFixed(4)} m je kratší než tolerance ${MIN_DISTANCE_TOLERANCE} m (3D).`
      );
    }
  }
  return undefined;
}

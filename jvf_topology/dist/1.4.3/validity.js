/**
 * Vrstva 1 — Geometrická validita (bez závislostí mezi objekty).
 *
 * Kontroly:
 * - `INVALID_COORDINATE` — NaN nebo Infinity v souřadnicích
 * - `SRS_DIMENSION_MISMATCH` — počet souřadnic % srsDimension ≠ 0
 * - `LINESTRING_TOO_FEW_POINTS` — méně než 2 body
 * - `RING_TOO_FEW_POINTS` — ring s méně než 4 body
 * - `RING_NOT_CLOSED` — první ≠ poslední bod (XY)
 * - `RING_SELF_INTERSECTION` — self-intersection exterioru
 */
import { hasSelfIntersection, mkError, toPoints } from './geometry-math.js';
function checkNaNInfinity(coords, ctx) {
    for (let i = 0; i < coords.length; i++) {
        const v = coords[i];
        if (v === undefined || !isFinite(v) || isNaN(v)) {
            return [
                mkError(ctx, 'error', 'INVALID_COORDINATE', `Souřadnice na indexu ${i} je NaN nebo Infinity (hodnota: ${String(v)}).`),
            ];
        }
    }
    return [];
}
function checkSrsDimension(coords, dim, ctx) {
    if (coords.length % dim !== 0) {
        return [
            mkError(ctx, 'error', 'SRS_DIMENSION_MISMATCH', `Počet koordinát (${coords.length}) není dělitelný srsDimension (${dim}).`),
        ];
    }
    return [];
}
function checkRing(coords, dim, ringLabel, ctx) {
    const errors = [];
    const pointCount = coords.length / dim;
    if (pointCount < 4) {
        errors.push(mkError(ctx, 'error', 'RING_TOO_FEW_POINTS', `${ringLabel} má pouze ${pointCount} bod(y); minimálně jsou potřeba 4 (3 unikátní + uzavírací).`));
        return errors;
    }
    // Uzavřenost: první bod XY == poslední bod XY
    const x0 = coords[0];
    const y0 = coords[1];
    const xN = coords[coords.length - dim];
    const yN = coords[coords.length - dim + 1];
    if (x0 === undefined || y0 === undefined ||
        xN === undefined || yN === undefined) {
        errors.push(mkError(ctx, 'error', 'INVALID_COORDINATE', `${ringLabel}: chybí souřadnice prvního nebo posledního bodu.`));
        return errors;
    }
    if (x0 !== xN || y0 !== yN) {
        errors.push(mkError(ctx, 'error', 'RING_NOT_CLOSED', `${ringLabel} není uzavřen: první bod (${x0}, ${y0}) ≠ poslední bod (${xN}, ${yN}).`));
    }
    // Self-intersection exterioru
    const pts = toPoints(coords, dim);
    // Otevřený ring (bez uzavíracího bodu pro algoritmus)
    const ptsOpen = pts.length > 1 &&
        pts[0] !== undefined &&
        pts[pts.length - 1] !== undefined &&
        pts[0].x === pts[pts.length - 1].x &&
        pts[0].y === pts[pts.length - 1].y
        ? pts.slice(0, -1)
        : pts;
    if (hasSelfIntersection(ptsOpen)) {
        errors.push(mkError(ctx, 'error', 'RING_SELF_INTERSECTION', `${ringLabel} obsahuje self-intersection (úsečky se kříží).`));
    }
    return errors;
}
function checkPoint(geom, ctx) {
    const errors = [];
    errors.push(...checkNaNInfinity(geom.coordinates, ctx));
    errors.push(...checkSrsDimension(geom.coordinates, geom.srsDimension, ctx));
    return errors;
}
function checkLineString(geom, ctx) {
    const errors = [];
    errors.push(...checkNaNInfinity(geom.coordinates, ctx));
    errors.push(...checkSrsDimension(geom.coordinates, geom.srsDimension, ctx));
    const pointCount = geom.coordinates.length / geom.srsDimension;
    if (pointCount < 2) {
        errors.push(mkError(ctx, 'error', 'LINESTRING_TOO_FEW_POINTS', `LineString má pouze ${pointCount} bod(y); minimálně jsou potřeba 2.`));
    }
    return errors;
}
function checkPolygon(geom, ctx) {
    const errors = [];
    const dim = geom.srsDimension;
    errors.push(...checkNaNInfinity(geom.exterior, ctx));
    errors.push(...checkSrsDimension(geom.exterior, dim, ctx));
    errors.push(...checkRing(geom.exterior, dim, 'Polygon exterior', ctx));
    for (let i = 0; i < geom.interiors.length; i++) {
        const interior = geom.interiors[i];
        if (interior === undefined)
            continue;
        errors.push(...checkNaNInfinity(interior, ctx));
        errors.push(...checkSrsDimension(interior, dim, ctx));
        errors.push(...checkRing(interior, dim, `Polygon interior[${i}]`, ctx));
    }
    return errors;
}
function checkMultiCurve(geom, ctx) {
    const errors = [];
    for (const curve of geom.curves) {
        errors.push(...checkLineString(curve, ctx));
    }
    return errors;
}
/**
 * Vrstva 1: Geometrická validita.
 *
 * Zkontroluje každou geometrii každého záznamu:
 * - Žádné NaN / Infinity souřadnice
 * - srsDimension konzistence (coords.length % dim === 0)
 * - LineString: min. 2 body
 * - Polygon ring: min. 4 body, uzavřenost, self-intersection
 */
export function checkGeometricValidity(dtm) {
    const errors = [];
    for (const objTyp of dtm.objekty) {
        for (const zaznam of objTyp.zaznamy) {
            const objectId = zaznam.commonAttributes.id;
            const ctxBase = {
                objektovyTyp: objTyp.elementName,
                ...(objectId !== undefined ? { objectId } : {}),
                geometryIndex: 0,
            };
            for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
                const geom = zaznam.geometrie[gi];
                if (geom === undefined)
                    continue;
                const ctx = { ...ctxBase, geometryIndex: gi };
                switch (geom.type) {
                    case 'Point':
                        errors.push(...checkPoint(geom.data, ctx));
                        break;
                    case 'LineString':
                        errors.push(...checkLineString(geom.data, ctx));
                        break;
                    case 'Polygon':
                        errors.push(...checkPolygon(geom.data, ctx));
                        break;
                    case 'MultiCurve':
                        errors.push(...checkMultiCurve(geom.data, ctx));
                        break;
                }
            }
            // oblastObjektuKI (pokud existuje)
            if (zaznam.oblastObjektuKI !== undefined) {
                const ctx = { ...ctxBase, geometryIndex: -1 };
                errors.push(...checkPolygon(zaznam.oblastObjektuKI, ctx));
            }
        }
    }
    return errors;
}
//# sourceMappingURL=validity.js.map
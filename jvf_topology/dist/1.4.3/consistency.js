/**
 * Vrstva 2 — Konzistence záznamu: Polygon ↔ MultiCurve.
 *
 * Pro záznamy, které mají současně Polygon i MultiCurve, ověří shodu XY
 * souřadnic exterioru Polygonu se souřadnicemi MultiCurve (po sloučení
 * segmentů a deduplikaci sousedů).
 *
 * Kontroly:
 * - `POLYGON_MULTICURVE_POINT_COUNT_MISMATCH`
 * - `POLYGON_MULTICURVE_COORDS_MISMATCH`
 */
import { mkError, toPoints } from './geometry-math.js';
/**
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve uvnitř záznamu.
 *
 * Kontroluje:
 * - Počet XY bodů exterioru Polygonu == počet XY bodů MultiCurve (po dedup.)
 * - Souřadnice jsou shodné (přípustný jiný počátek nebo opačné pořadí)
 */
export function checkPolygonMultiCurveConsistency(dtm) {
    const errors = [];
    for (const objTyp of dtm.objekty) {
        for (const zaznam of objTyp.zaznamy) {
            const objectId = zaznam.commonAttributes.id;
            const polygonEntries = zaznam.geometrie
                .map((g, i) => ({ g, i }))
                .filter((e) => e.g.type === 'Polygon');
            const multiCurveEntries = zaznam.geometrie
                .map((g, i) => ({ g, i }))
                .filter((e) => e.g.type === 'MultiCurve');
            if (polygonEntries.length === 0 || multiCurveEntries.length === 0)
                continue;
            // Předpokládáme 1:1 párování
            const polyEntry = polygonEntries[0];
            const mcEntry = multiCurveEntries[0];
            if (polyEntry === undefined || mcEntry === undefined)
                continue;
            const ctx = {
                objektovyTyp: objTyp.elementName,
                ...(objectId !== undefined ? { objectId } : {}),
                geometryIndex: polyEntry.i,
            };
            const polyDim = polyEntry.g.data.srsDimension;
            const mcDim = mcEntry.g.data.srsDimension;
            // XY body exterioru polygonu (jako Point2D[])
            const polyPtsAll = toPoints(polyEntry.g.data.exterior, polyDim);
            // Odstranit uzavírací bod
            const firstPoly = polyPtsAll[0];
            const lastPoly = polyPtsAll[polyPtsAll.length - 1];
            const polyPts = polyPtsAll.length > 1 &&
                firstPoly !== undefined &&
                lastPoly !== undefined &&
                firstPoly.x === lastPoly.x &&
                firstPoly.y === lastPoly.y
                ? polyPtsAll.slice(0, -1)
                : polyPtsAll;
            // XY body MultiCurve — sloučit všechny segmenty
            const mcAllCoords = [];
            for (const curve of mcEntry.g.data.curves) {
                mcAllCoords.push(...curve.coordinates);
            }
            const mcPtsRaw = toPoints(mcAllCoords, mcDim);
            // Deduplikace sousedních bodů
            const mcPtsDe = [];
            for (const pt of mcPtsRaw) {
                const prev = mcPtsDe[mcPtsDe.length - 1];
                if (prev === undefined || prev.x !== pt.x || prev.y !== pt.y) {
                    mcPtsDe.push(pt);
                }
            }
            // Odstranit uzavírací bod
            const firstMc = mcPtsDe[0];
            const lastMc = mcPtsDe[mcPtsDe.length - 1];
            const mcPts = mcPtsDe.length > 1 &&
                firstMc !== undefined &&
                lastMc !== undefined &&
                firstMc.x === lastMc.x &&
                firstMc.y === lastMc.y
                ? mcPtsDe.slice(0, -1)
                : mcPtsDe;
            if (polyPts.length !== mcPts.length) {
                errors.push(mkError(ctx, 'error', 'POLYGON_MULTICURVE_POINT_COUNT_MISMATCH', `Polygon exterior má ${polyPts.length} XY bodů, MultiCurve má ${mcPts.length} XY bodů (po deduplikaci).`));
                continue;
            }
            const n = polyPts.length;
            // Hledat shodný offset (normální pořadí)
            const matchesForward = findMatchingOffset(polyPts, mcPts, n);
            // Zkusit opačné pořadí
            const matchesReverse = matchesForward === -1
                ? findMatchingOffset(polyPts, [...mcPts].reverse(), n)
                : 0;
            if (matchesForward === -1 && matchesReverse === -1) {
                errors.push(mkError(ctx, 'error', 'POLYGON_MULTICURVE_COORDS_MISMATCH', 'XY souřadnice exterioru Polygonu a MultiCurve se neshodují ' +
                    '(ani při různém počátku nebo opačném pořadí bodů).'));
            }
        }
    }
    return errors;
}
/**
 * Vrátí nalezený offset (0..n-1) nebo -1 pokud žádný nesedí.
 */
function findMatchingOffset(polyPts, mcPts, n) {
    for (let offset = 0; offset < n; offset++) {
        let match = true;
        for (let k = 0; k < n; k++) {
            const pp = polyPts[k];
            const mp = mcPts[(k + offset) % n];
            if (pp === undefined || mp === undefined || pp.x !== mp.x || pp.y !== mp.y) {
                match = false;
                break;
            }
        }
        if (match)
            return offset;
    }
    return -1;
}
//# sourceMappingURL=consistency.js.map
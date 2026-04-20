/**
 * Kontroly 1.5 a 1.6 — Rozsah a přesnost souřadnic (IS DTM).
 *
 * - Kontrola 1.5: souřadnice musí ležet v rozsahu S-JTSK pro území ČR.
 *   Pro ZPS objekty navíc i rozsah Z (výška m n. m.).
 * - Kontrola 1.6: souřadnice nesmí mít více než 2 desetinná místa (přesnost na cm).
 *
 * Kódy chyb:
 * - `COORD_OUT_OF_BOUNDS_XY`
 * - `COORD_OUT_OF_BOUNDS_Z`
 * - `COORD_PRECISION_EXCEEDED`
 */
import { SJTSK_BOUNDS, Z_BOUNDS_DEFBOD, Z_BOUNDS_ZPS } from './constants.js';
import { collectCoordSets, isDefBodElementName, mkError } from './geometry-math.js';
/**
 * Kontrola 1.5: Souřadnice XY musí ležet v rozsahu S-JTSK pro území ČR.
 * Pro objekty ZPS (obsahovaCast === 'ZPS') se kontroluje i rozsah Z.
 *
 * Kódy chyb:
 * - `COORD_OUT_OF_BOUNDS_XY`  — X nebo Y mimo rozsah S-JTSK
 * - `COORD_OUT_OF_BOUNDS_Z`   — Z mimo povolený výškový rozsah
 */
export function checkCoordinateBounds(dtm) {
    const errors = [];
    for (const objTyp of dtm.objekty) {
        const isZps = objTyp.obsahovaCast === 'ZPS';
        const isDefBod = isDefBodElementName(objTyp.elementName);
        const zBounds = isDefBod ? Z_BOUNDS_DEFBOD : Z_BOUNDS_ZPS;
        for (const zaznam of objTyp.zaznamy) {
            const objectId = zaznam.commonAttributes.id;
            for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
                const geom = zaznam.geometrie[gi];
                if (geom === undefined)
                    continue;
                const ctx = {
                    objektovyTyp: objTyp.elementName,
                    ...(objectId !== undefined ? { objectId } : {}),
                    geometryIndex: gi,
                };
                const coordSets = collectCoordSets(geom);
                for (const { coords, dim } of coordSets) {
                    errors.push(...validateCoordsRange(coords, dim, isZps, zBounds, ctx));
                }
            }
        }
    }
    return errors;
}
function validateCoordsRange(coords, dim, checkZ, zBounds, ctx) {
    const errors = [];
    for (let i = 0; i + 1 < coords.length; i += dim) {
        const x = coords[i];
        const y = coords[i + 1];
        if (x === undefined || y === undefined)
            continue;
        if (x < SJTSK_BOUNDS.xMin || x > SJTSK_BOUNDS.xMax ||
            y < SJTSK_BOUNDS.yMin || y > SJTSK_BOUNDS.yMax) {
            errors.push(mkError(ctx, 'error', 'COORD_OUT_OF_BOUNDS_XY', `Souřadnice (${x}, ${y}) leží mimo povolený rozsah S-JTSK ` +
                `(X: ${SJTSK_BOUNDS.xMin}..${SJTSK_BOUNDS.xMax}, Y: ${SJTSK_BOUNDS.yMin}..${SJTSK_BOUNDS.yMax}).`));
            break; // jedna chyba na geometrii stačí
        }
        if (checkZ && dim >= 3) {
            const z = coords[i + 2];
            if (z !== undefined && (z < zBounds.min || z > zBounds.max)) {
                errors.push(mkError(ctx, 'error', 'COORD_OUT_OF_BOUNDS_Z', `Výška Z=${z} m leží mimo povolený rozsah (${zBounds.min}–${zBounds.max} m n. m.).`));
                break;
            }
        }
    }
    return errors;
}
/**
 * Kontrola 1.6: Souřadnice nesmí mít více než 2 desetinná místa (přesnost na cm).
 * Vyšší přesnost (mm a menší) je zakázána.
 *
 * Kód chyby: `COORD_PRECISION_EXCEEDED`
 */
export function checkCoordinatePrecision(dtm) {
    const errors = [];
    for (const objTyp of dtm.objekty) {
        for (const zaznam of objTyp.zaznamy) {
            const objectId = zaznam.commonAttributes.id;
            for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
                const geom = zaznam.geometrie[gi];
                if (geom === undefined)
                    continue;
                const ctx = {
                    objektovyTyp: objTyp.elementName,
                    ...(objectId !== undefined ? { objectId } : {}),
                    geometryIndex: gi,
                };
                const coordSets = collectCoordSets(geom);
                for (const { coords } of coordSets) {
                    const bad = findPrecisionViolation(coords);
                    if (bad !== undefined) {
                        errors.push(mkError(ctx, 'error', 'COORD_PRECISION_EXCEEDED', `Souřadnice ${bad} má více než 2 desetinná místa (povolena přesnost max. na cm).`));
                        break;
                    }
                }
            }
        }
    }
    return errors;
}
/**
 * Vrátí první souřadnici s více než 2 desetinnými místy, nebo undefined.
 * Porovnává s verzí zaokrouhlenou na 2 desetinná místa — odolné vůči
 * exponenciálnímu zápisu (např. 1e-7 nemá '.', ale přesnost porušuje)
 * i float artefaktům (epsilon 1e-9 tlumí jitter typu 0.1+0.2=0.30000000000000004).
 */
function findPrecisionViolation(coords) {
    for (const v of coords) {
        if (v === undefined)
            continue;
        const rounded = Math.round(v * 100) / 100;
        if (Math.abs(v - rounded) > 1e-9) {
            return v;
        }
    }
    return undefined;
}
//# sourceMappingURL=bounds.js.map
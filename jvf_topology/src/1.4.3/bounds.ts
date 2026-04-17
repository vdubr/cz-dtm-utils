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

import type { JvfDtm } from 'jvf-dtm-types';
import type { ErrorCtx, TopologyError } from './types.js';
import { SJTSK_BOUNDS, Z_BOUNDS_DEFBOD, Z_BOUNDS_ZPS } from './constants.js';
import { collectCoordSets, mkError } from './geometry-math.js';

/**
 * Kontrola 1.5: Souřadnice XY musí ležet v rozsahu S-JTSK pro území ČR.
 * Pro objekty ZPS (obsahovaCast === 'ZPS') se kontroluje i rozsah Z.
 *
 * Kódy chyb:
 * - `COORD_OUT_OF_BOUNDS_XY`  — X nebo Y mimo rozsah S-JTSK
 * - `COORD_OUT_OF_BOUNDS_Z`   — Z mimo povolený výškový rozsah
 */
export function checkCoordinateBounds(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    const isZps = objTyp.obsahovaCast === 'ZPS';
    const isDefBod = objTyp.elementName.toLowerCase().includes('defbod');
    const zBounds = isDefBod ? Z_BOUNDS_DEFBOD : Z_BOUNDS_ZPS;

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

        const coordSets = collectCoordSets(geom);
        for (const { coords, dim } of coordSets) {
          errors.push(...validateCoordsRange(coords, dim, isZps, zBounds, ctx));
        }
      }
    }
  }

  return errors;
}

function validateCoordsRange(
  coords: number[],
  dim: number,
  checkZ: boolean,
  zBounds: { min: number; max: number },
  ctx: ErrorCtx
): TopologyError[] {
  const errors: TopologyError[] = [];
  for (let i = 0; i + 1 < coords.length; i += dim) {
    const x = coords[i];
    const y = coords[i + 1];
    if (x === undefined || y === undefined) continue;
    if (
      x < SJTSK_BOUNDS.xMin || x > SJTSK_BOUNDS.xMax ||
      y < SJTSK_BOUNDS.yMin || y > SJTSK_BOUNDS.yMax
    ) {
      errors.push(
        mkError(
          ctx,
          'error',
          'COORD_OUT_OF_BOUNDS_XY',
          `Souřadnice (${x}, ${y}) leží mimo povolený rozsah S-JTSK ` +
          `(X: ${SJTSK_BOUNDS.xMin}..${SJTSK_BOUNDS.xMax}, Y: ${SJTSK_BOUNDS.yMin}..${SJTSK_BOUNDS.yMax}).`
        )
      );
      break; // jedna chyba na geometrii stačí
    }
    if (checkZ && dim >= 3) {
      const z = coords[i + 2];
      if (z !== undefined && (z < zBounds.min || z > zBounds.max)) {
        errors.push(
          mkError(
            ctx,
            'error',
            'COORD_OUT_OF_BOUNDS_Z',
            `Výška Z=${z} m leží mimo povolený rozsah (${zBounds.min}–${zBounds.max} m n. m.).`
          )
        );
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
export function checkCoordinatePrecision(dtm: JvfDtm): TopologyError[] {
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

        const coordSets = collectCoordSets(geom);
        for (const { coords } of coordSets) {
          const bad = findPrecisionViolation(coords);
          if (bad !== undefined) {
            errors.push(
              mkError(
                ctx,
                'error',
                'COORD_PRECISION_EXCEEDED',
                `Souřadnice ${bad} má více než 2 desetinná místa (povolena přesnost max. na cm).`
              )
            );
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
 * Používá přísné desetinné počítání (string-based), aby se vyhnul float zaokrouhlování.
 */
function findPrecisionViolation(coords: number[]): number | undefined {
  for (const v of coords) {
    if (v === undefined) continue;
    const s = v.toString();
    const dot = s.indexOf('.');
    if (dot !== -1 && s.length - dot - 1 > 2) {
      return v;
    }
  }
  return undefined;
}

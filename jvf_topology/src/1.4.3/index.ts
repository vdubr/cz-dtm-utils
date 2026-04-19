/**
 * Topologická validace JVF DTM objektů — barrel modul.
 *
 * Tři vrstvy kontrol (viz CLAUDE.md):
 *  - Vrstva 1: Geometrická validita (bez závislostí mezi objekty)   → `validity.ts`
 *  - Vrstva 2: Konzistence uvnitř záznamu (Polygon ↔ MultiCurve)    → `consistency.ts`
 *  - Vrstva 3: Meziobjektová topologie                              → `relations.ts`
 *
 * IS DTM 1.5+1.6 (rozsah a přesnost souřadnic)                      → `bounds.ts`
 * IS DTM 3.4+3.5+3.10 (self-intersection, nulový/krátký segment)    → `segments.ts`
 * IS DTM 3.6+3.8+3.9 (duplicitní linie/body, blízkost bodů)         → `duplicates.ts`
 */

import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyCheck, TopologyError } from './types.js';

import { checkGeometricValidity } from './validity.js';
import { checkPolygonMultiCurveConsistency } from './consistency.js';
import { checkCoordinateBounds, checkCoordinatePrecision } from './bounds.js';
import {
  checkLineSelfIntersection,
  checkMinSegmentLength,
  checkZeroLengthSegments,
} from './segments.js';
import {
  checkDuplicateLines,
  checkDuplicatePoints,
  checkPointProximity,
} from './duplicates.js';
import {
  checkDanglingEnds,
  checkDefBodInPlocha,
  checkOsaInObvod,
} from './relations.js';
import { checkDelAreaContainsDefBodPlocha } from './del-areas.js';

// ---------------------------------------------------------------------------
// Re-exporty
// ---------------------------------------------------------------------------

export type { TopologyCheck, TopologyError, TopologyErrorSeverity } from './types.js';

export {
  DEFBOD_PLOCHA_PAIRS,
  DUPLICATE_Z_TOLERANCE,
  MIN_DISTANCE_TOLERANCE,
  OSA_OBVOD_PAIRS,
  SJTSK_BOUNDS,
  SNAP_TOLERANCE,
  Z_BOUNDS_DEFBOD,
  Z_BOUNDS_ZPS,
} from './constants.js';

export { checkGeometricValidity } from './validity.js';
export { checkPolygonMultiCurveConsistency } from './consistency.js';
export { checkCoordinateBounds, checkCoordinatePrecision } from './bounds.js';
export {
  checkLineSelfIntersection,
  checkMinSegmentLength,
  checkZeroLengthSegments,
} from './segments.js';
export {
  checkDuplicateLines,
  checkDuplicatePoints,
  checkPointProximity,
} from './duplicates.js';
export {
  checkDanglingEnds,
  checkDefBodInPlocha,
  checkOsaInObvod,
} from './relations.js';
export { checkDelAreaContainsDefBodPlocha } from './del-areas.js';

// ---------------------------------------------------------------------------
// Hlavní vstupní body
// ---------------------------------------------------------------------------

/**
 * Režim validace — určuje, které kontroly jsou smysluplné.
 *
 * - `'complete'`: kompletní JVF soubor obsahující celou ZPS v rámci území.
 *   Lze spouštět všechny kontroly včetně meziobjektové topologie.
 * - `'changeset'`: změnový JVF (TypZapisu="změnové věty") obsahující jen
 *   insert/update/delete záznamy. Meziobjektové kontroly (Vrstva 3) by
 *   generovaly false positives, protože sousední objekty jsou v databázi
 *   ZPS, kterou náš balíček nevidí.
 * - `'auto'`: detekce z `dtm.typZapisu`.
 */
export type ValidationMode = 'complete' | 'changeset' | 'auto';

/**
 * Rozhodne výsledný režim na základě `mode` a obsahu dokumentu.
 */
function resolveMode(dtm: JvfDtm, mode: ValidationMode): 'complete' | 'changeset' {
  if (mode !== 'auto') return mode;
  return dtm.typZapisu === 'změnové věty' ? 'changeset' : 'complete';
}

/**
 * Spustí zadané kontroly nad DTM dokumentem a vrátí souhrnný seznam chyb.
 */
export function runTopologyChecks(
  dtm: JvfDtm,
  checks: TopologyCheck[]
): TopologyError[] {
  return checks.flatMap((check) => check(dtm));
}

/**
 * Kontroly bezpečné pro kompletní i změnový režim.
 * Ověřují validitu geometrie jednotlivých záznamů a vztahy uvnitř záznamu,
 * bez závislosti na referenční databázi.
 */
const BASE_CHECKS: TopologyCheck[] = [
  checkGeometricValidity,
  checkPolygonMultiCurveConsistency,
  checkCoordinateBounds,
  checkCoordinatePrecision,
  checkLineSelfIntersection,
  checkZeroLengthSegments,
  checkDuplicateLines,
  checkDuplicatePoints,
  checkPointProximity,
  checkMinSegmentLength,
  checkDelAreaContainsDefBodPlocha,
];

/**
 * Meziobjektové kontroly (Vrstva 3) — vyžadují kompletní ZPS v dokumentu.
 * V režimu `'changeset'` se neprovádějí, protože sousední geometrie,
 * plochy a obvody mohou existovat v referenční databázi mimo JVF soubor.
 */
const CROSS_OBJECT_CHECKS: TopologyCheck[] = [
  checkDefBodInPlocha,
  checkOsaInObvod,
  checkDanglingEnds,
];

/**
 * Spustí všechny implementované kontroly.
 *
 * @param dtm  Parsovaný JVF DTM dokument.
 * @param mode Režim validace:
 *   - `'complete'` — kompletní ZPS, běží všechny vrstvy (default pro starší volající).
 *   - `'changeset'` — jen změnový soubor, Vrstva 3 se přeskočí.
 *   - `'auto'` — detekce z `dtm.typZapisu` (doporučeno).
 *
 * Vrstva 1: Geometrická validita
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve
 * IS DTM 1.5: Rozsah souřadnic S-JTSK
 * IS DTM 1.6: Přesnost souřadnic na cm
 * IS DTM 3.4: Self-intersection liniových prvků
 * IS DTM 3.5: Nulová délka segmentu
 * IS DTM 3.6: Duplicity liniových prvků (v rámci JVF)
 * IS DTM 3.8: Duplicita bodů (v rámci JVF)
 * IS DTM 3.9: Blízkost bodů
 * IS DTM 3.10: Minimální délka segmentu
 * DEL oblasti: Definiční bod uvnitř DEL oblasti kompletní ZPS (warning)
 * Vrstva 3A: Definiční bod leží v odpovídající ploše   (pouze 'complete')
 * Vrstva 3B: Osa PK leží uvnitř Obvodu PK              (pouze 'complete')
 * Vrstva 3C: Volné konce liniových prvků               (pouze 'complete')
 */
export function runAllChecks(
  dtm: JvfDtm,
  mode: ValidationMode = 'auto'
): TopologyError[] {
  const resolved = resolveMode(dtm, mode);
  const checks =
    resolved === 'complete' ? [...BASE_CHECKS, ...CROSS_OBJECT_CHECKS] : BASE_CHECKS;
  return runTopologyChecks(dtm, checks);
}

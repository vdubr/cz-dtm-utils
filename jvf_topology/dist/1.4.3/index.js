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
import { TYP_DATOVE_SADY_VYDEJ_PSPI } from 'jvf-dtm-types';
import { DEFBOD_PLOCHA_PAIRS_1501, OSA_OBVOD_PAIRS_1501 } from './constants.js';
import { checkGeometricValidity } from './validity.js';
import { checkPolygonMultiCurveConsistency } from './consistency.js';
import { checkCoordinateBounds, checkCoordinatePrecision } from './bounds.js';
import { checkLineSelfIntersection, checkMinSegmentLength, checkZeroLengthSegments, } from './segments.js';
import { checkDuplicateLines, checkDuplicatePoints, checkPointProximity, } from './duplicates.js';
import { checkDanglingEnds, checkDefBodInPlocha, checkOsaInObvod, } from './relations.js';
import { checkDelAreaContainsDefBodPlocha } from './del-areas.js';
export { DEFBOD_PLOCHA_PAIRS, DEFBOD_PLOCHA_PAIRS_1501, DUPLICATE_Z_TOLERANCE, MIN_DISTANCE_TOLERANCE, OSA_OBVOD_PAIRS, OSA_OBVOD_PAIRS_1501, SJTSK_BOUNDS, SNAP_TOLERANCE, Z_BOUNDS_DEFBOD, Z_BOUNDS_ZPS, } from './constants.js';
export { checkGeometricValidity } from './validity.js';
export { checkPolygonMultiCurveConsistency } from './consistency.js';
export { checkCoordinateBounds, checkCoordinatePrecision } from './bounds.js';
export { checkLineSelfIntersection, checkMinSegmentLength, checkZeroLengthSegments, } from './segments.js';
export { checkDuplicateLines, checkDuplicatePoints, checkPointProximity, } from './duplicates.js';
export { checkDanglingEnds, checkDefBodInPlocha, checkOsaInObvod, } from './relations.js';
export { checkDelAreaContainsDefBodPlocha } from './del-areas.js';
/**
 * Rozhodne výsledný režim na základě `mode` a obsahu dokumentu.
 *
 * `TypDatoveSady=11` („Výdej PSPI", 1.5.0.1) se chová jako `complete` — jde
 * o kompletní výdej PSPI; ZPS meziobjektové kontroly se PSPI objektů netýkají
 * (nejsou v párech), takže complete nevytváří false positives.
 */
function resolveMode(dtm, mode) {
    if (mode !== 'auto')
        return mode;
    if (dtm.typDatoveSady === TYP_DATOVE_SADY_VYDEJ_PSPI)
        return 'complete';
    return dtm.typZapisu === 'změnové věty' ? 'changeset' : 'complete';
}
/**
 * Sestaví meziobjektové (Vrstva 3) kontroly pro danou verzi. Pro neznámou
 * (nepodporovanou) verzi vrací prázdné pole — spustí se jen generické checky
 * (R7: bezpečný default, žádné false positives).
 */
function crossObjectChecksForVersion(version) {
    if (version === '1.5.0.1') {
        return [
            (dtm) => checkDefBodInPlocha(dtm, DEFBOD_PLOCHA_PAIRS_1501),
            (dtm) => checkOsaInObvod(dtm, OSA_OBVOD_PAIRS_1501),
            checkDanglingEnds,
        ];
    }
    // Prázdná/chybějící verze → DEFAULT_VERSION (1.4.3) — zpětná kompatibilita.
    if (!version || version === '1.4.3') {
        return CROSS_OBJECT_CHECKS;
    }
    // Známá, ale nepodporovaná verze (např. „9.9.9") — jen generické checky (R7).
    return [];
}
/**
 * Spustí zadané kontroly nad DTM dokumentem a vrátí souhrnný seznam chyb.
 */
export function runTopologyChecks(dtm, checks) {
    return checks.flatMap((check) => check(dtm));
}
/**
 * Kontroly bezpečné pro kompletní i změnový režim.
 * Ověřují validitu geometrie jednotlivých záznamů a vztahy uvnitř záznamu,
 * bez závislosti na referenční databázi.
 */
const BASE_CHECKS = [
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
const CROSS_OBJECT_CHECKS = [
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
export function runAllChecks(dtm, modeOrOptions = 'auto') {
    const options = typeof modeOrOptions === 'string' ? { mode: modeOrOptions } : modeOrOptions;
    const mode = options.mode ?? 'auto';
    const version = options.version ?? dtm.verze;
    const resolved = resolveMode(dtm, mode);
    const crossChecks = resolved === 'complete' ? crossObjectChecksForVersion(version) : [];
    return runTopologyChecks(dtm, [...BASE_CHECKS, ...crossChecks]);
}
//# sourceMappingURL=index.js.map
/**
 * Doprovodné informace + `TypDatoveSady` pro JVF DTM 1.5.0.1.
 *
 * TODO(T4): plná implementace `DoprovodneInformace{GAD,KAD,DTI,VydejZPS,
 * VydejDTI}` + extrakce `OblastiKompletniZPS` a `TypDatoveSady`. Zatím
 * (T3) seam vracející prázdný výsledek, aby parser kompiloval a fungovala
 * část záznamy + geometrie.
 */
import type { DoprovodneInformace, TypDatoveSady } from './types.js';
export interface DoprovodneResult {
    doprovodneInformace?: DoprovodneInformace;
    typDatoveSady?: TypDatoveSady;
}
export declare function parseDoprovodneInformace1501(_dataJvfDtm: Record<string, unknown>): DoprovodneResult;
//# sourceMappingURL=doprovodne-informace.d.ts.map
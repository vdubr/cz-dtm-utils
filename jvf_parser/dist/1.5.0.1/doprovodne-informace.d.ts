/**
 * Doprovodné informace + `TypDatoveSady` pro JVF DTM 1.5.0.1.
 *
 * 1.5.0.1 rozděluje `DoprovodneInformace` na varianty
 * `…{GAD,KAD,DTI,VydejZPS,VydejDTI,VydejPSPI}` (a bázi `DoprovodneInformace`).
 * Všechny jsou sourozenci `Data` uvnitř `DataJVFDTM`. Extrahujeme z nich:
 *   - `OblastiKompletniZPS > ZaznamOKZPS[]` → `OblastKompletniZPSZaznam`
 *     (typ z `TypZaznamuOKZPS`, plocha z `PlochaZPS > surfaceProperty`),
 *   - `UdajeOVydeji > TypDatoveSady` → `typDatoveSady`.
 *
 * KI (`OblastObjektuKI`) je v 1.5.0.1 zrušeno — neparsuje se (změna #8).
 *
 * XSD: `docs/1.5.0.1/xsd/common/doprovodne_informace.xsd`.
 */
import type { DoprovodneInformace, TypDatoveSady } from './types.js';
export interface DoprovodneResult {
    doprovodneInformace?: DoprovodneInformace;
    typDatoveSady?: TypDatoveSady;
}
/**
 * Projde všechny sourozence `DoprovodneInformace*` v `DataJVFDTM` a sesbírá
 * oblasti kompletní ZPS + typ datové sady.
 */
export declare function parseDoprovodneInformace1501(dataJvfDtm: Record<string, unknown>): DoprovodneResult;
//# sourceMappingURL=doprovodne-informace.d.ts.map
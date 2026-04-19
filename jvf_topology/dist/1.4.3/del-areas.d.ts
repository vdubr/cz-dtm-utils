/**
 * DEL oblasti — kontrola obsahující definiční body ploch.
 *
 * Pokud JVF soubor obsahuje `DoprovodneInformace/OblastiKompletniZPS` se
 * záznamem typu `DEL` (tj. oblast, která se z kompletní ZPS odstraňuje),
 * a uvnitř polygonu takové DEL oblasti leží definiční bod některé ze
 * ZPS ploch (viz `DEFBOD_PLOCHA_PAIRS`), znamená to, že po přijetí souboru
 * dojde ke zmenšení oblasti kompletní ZPS. Referenční program IS DMVS
 * takové případy vydává jako varování:
 *
 *     "Oblast DEL obsahuje plochu def.bodu: {ID} - dojde ke zmenšení
 *      oblasti kompletní ZPS"
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
/**
 * Vrací warning pro každý definiční bod, jehož souřadnice leží uvnitř
 * exterioru jakéhokoliv polygonu DEL oblasti v `DoprovodneInformace`.
 *
 * Kód: `DEL_AREA_CONTAINS_DEFBOD_PLOCHA`
 */
export declare function checkDelAreaContainsDefBodPlocha(dtm: JvfDtm): TopologyError[];
//# sourceMappingURL=del-areas.d.ts.map
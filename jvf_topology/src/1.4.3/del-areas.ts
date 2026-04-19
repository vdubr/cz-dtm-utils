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
import { DEFBOD_PLOCHA_PAIRS } from './constants.js';
import { buildIndex, mkError, pointInPolygon } from './geometry-math.js';

/**
 * Vrací warning pro každý definiční bod, jehož souřadnice leží uvnitř
 * exterioru jakéhokoliv polygonu DEL oblasti v `DoprovodneInformace`.
 *
 * Kód: `DEL_AREA_CONTAINS_DEFBOD_PLOCHA`
 */
export function checkDelAreaContainsDefBodPlocha(dtm: JvfDtm): TopologyError[] {
  const delOblasti = dtm.doprovodneInformace?.oblastiKompletniZPS.filter(
    (o) => o.typ === 'DEL' && o.plocha !== undefined
  );
  if (delOblasti === undefined || delOblasti.length === 0) return [];

  const errors: TopologyError[] = [];
  const index = buildIndex(dtm);

  // Pro každý DefBod typ z páru najít def. body a otestovat proti DEL polygonům
  const defbodTypes = new Set(DEFBOD_PLOCHA_PAIRS.map((p) => p.defbod));

  for (const defbodElementName of defbodTypes) {
    const defbodTyp = index.get(defbodElementName);
    if (defbodTyp === undefined || defbodTyp.zaznamy.length === 0) continue;

    for (const zaznam of defbodTyp.zaznamy) {
      // Insert záznamy ještě nemají přidělené ID v DB; referenční IS DMVS
      // je nehlásí. Reportujeme jen existující (d/u/r) záznamy s ID.
      if (zaznam.zapisObjektu === 'i') continue;

      const ptGeom = zaznam.geometrie.find((g) => g.type === 'Point');
      if (ptGeom?.type !== 'Point') continue;

      const coords = ptGeom.data.coordinates;
      const px = coords[0];
      const py = coords[1];
      if (px === undefined || py === undefined) continue;

      const insideDelArea = delOblasti.some(({ plocha }) => {
        if (plocha === undefined) return false;
        return pointInPolygon(px, py, plocha.exterior, plocha.srsDimension);
      });

      if (!insideDelArea) continue;

      const objectId = zaznam.commonAttributes.id;
      errors.push(
        mkError(
          {
            objektovyTyp: defbodElementName,
            ...(objectId !== undefined ? { objectId } : {}),
            geometryIndex: 0,
          },
          'warning',
          'DEL_AREA_CONTAINS_DEFBOD_PLOCHA',
          `Definiční bod leží uvnitř oblasti DEL — po přijetí dojde ke zmenšení oblasti kompletní ZPS.`
        )
      );
    }
  }

  return errors;
}

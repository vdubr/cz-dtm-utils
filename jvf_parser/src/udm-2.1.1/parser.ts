/**
 * Parser UDM 2.1.1 (Univerzální datový model ČKZ).
 *
 * UDM je nadmnožina JVF DTM 1.5.0.x: stejný kořen `JVFDTM`, stejné záznamy
 * (`ZaznamObjektuIns/Upd/Del/RefV`) i geometrické wrappery, navíc hlavička
 * `<cmn:VerzeJVFUDM>`, objekty nad rámec DTM (`code_base` 94…, obsahové
 * části `ZPSUDM/DIUDM/TIUDM/OST`) a zploštělé atributy. Jádro parsování se
 * proto reusuje z 1.5.0.1, liší se jen parser atributů (`attributes.ts`).
 *
 * Výsledné `verze` = id `udm-<VerzeJVFUDM>`; surové hodnoty hlavičky jsou
 * v `verzeJvfDtm` a `verzeUdm`.
 */
import { dialectVersionId } from 'jvf-dtm-types';
import { parseJvfDtm1501 } from '../1.5.0.1/parser.js';
import { parseAtributyObjektuUdm } from './attributes.js';
import { detectHeaderElement } from '../dialects/types.js';
import type { JvfDtm } from './types.js';

/** Přečte hodnotu `<VerzeJVFUDM>` z raw XML (bez plného parsování). */
export function detectUdmVersionString(xml: string): string | null {
  return detectHeaderElement(xml, 'VerzeJVFUDM');
}

/**
 * Naparsuje UDM soubor. `verzeUdm` je hodnota `<VerzeJVFUDM>`; pokud chybí,
 * přečte se ze souboru (a když ani tam není, předpokládá se `2.1.1`).
 */
export function parseUdm(xml: string, verzeUdm?: string): JvfDtm {
  const udm = verzeUdm ?? detectUdmVersionString(xml) ?? '2.1.1';
  const dtm = parseJvfDtm1501(xml, {
    parseAttributes: parseAtributyObjektuUdm,
    // VerzeJVFDTM v UDM (např. 1.5.0.2) neodpovídá podporované JVF verzi —
    // u UDM je směrodatná VerzeJVFUDM, varování by bylo zavádějící.
    warnUnsupportedVersion: false,
  });
  return {
    ...dtm,
    verze: dialectVersionId('udm', udm),
    verzeJvfDtm: dtm.verze,
    dialect: { id: 'udm', version: udm },
    verzeUdm: udm,
  };
}

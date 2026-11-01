/**
 * Dialekt ŽXML — výměnný formát dat DTMŽ Správy železnic.
 *
 * ŽXML je JVF DTM rozšířené o objekty SŽ (`objekty_sz`, `code_base 999…`,
 * obsahové části ZDT/ZDD/H3D/ODSZ/SKLEP), atributy SŽ (`atributy_sz.xsd`)
 * a hlavičku `<cmn:VerzeZXML>`. Objekty SŽ jsou v instanci přímo pod `Data`
 * (substituční skupina `ObjektSZ`), takže je zpracují jádra parserů JVF:
 *
 * - ŽXML 1.4.2.1 → jádro 1.4.3 (atributy `atrsz:*` jsou přímé potomky
 *   `AtributyObjektu` a zploští se),
 * - ŽXML 1.5.1.6 → jádro 1.5.0.1 (bloky `SpolecneAtributyObjektu…SZ` se
 *   zploští, `cmn:StaniceniData` → `ext.staniceni`).
 */
import { type StaniceniInfo } from 'jvf-dtm-types';
import { type ParserDialect } from './types.js';
/** `cmn:StaniceniData` (ŽXML 1.5.x) → seznam staničení objektů. */
export declare function parseStaniceniData(dataJvfDtm: Record<string, unknown>): StaniceniInfo[] | undefined;
export declare const ZXML_DIALECT: ParserDialect;
//# sourceMappingURL=zxml.d.ts.map
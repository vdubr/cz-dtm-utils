/**
 * Textové objekty UDM („Bod (text)") a výška písma dle doporučení UDM
 * (Popis struktury UDM 2.1.1, kap. 15.2; velikosti pro tisk 1:500):
 *   3 m základní, 4 m čísla a názvy objektů / kóty vrcholů,
 *   6 m ulice, silnice, vodní plochy a toky a všechny směry,
 *   8 m osady, oblasti, místní a pomístní názvy, obecné poznámky,
 *   12 m čtvrti, města, obce, katastrální území.
 * Text objektu je v atributu `PopisObjektu`.
 */
import type { ZaznamObjektu } from 'jvf-dtm-types';
export declare function isTextObject(elementName: string): boolean;
export declare function textHeightFor(elementName: string, zaznam: ZaznamObjektu): number;
//# sourceMappingURL=text.d.ts.map
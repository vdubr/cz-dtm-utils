import type { JvfDtm } from './types.js';
/** Přečte hodnotu `<VerzeJVFUDM>` z raw XML (bez plného parsování). */
export declare function detectUdmVersionString(xml: string): string | null;
/**
 * Naparsuje UDM soubor. `verzeUdm` je hodnota `<VerzeJVFUDM>`; pokud chybí,
 * přečte se ze souboru (a když ani tam není, předpokládá se `2.1.1`).
 */
export declare function parseUdm(xml: string, verzeUdm?: string): JvfDtm;
//# sourceMappingURL=parser.d.ts.map
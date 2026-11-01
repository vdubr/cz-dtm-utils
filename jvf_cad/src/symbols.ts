/**
 * Geometrie symbolů dialektů (UDM, ŽXML) pro bloky v CAD.
 *
 * Primitiva jsou v metrech (měřítko 1:500), vkládací bod = střed symbolu,
 * osa Y nahoru. Data generuje `scripts/udm/build-udm-cad-symbols.py`
 * z knihovny symbolů ČKZ (`jvf_parser/docs/udm-2.1.1/knihovny/SVG`).
 */
export type CadSymbolPrimitive =
  /** Polylinie: uzavřená, vyplněná, [x, y, bulge, …]. */
  | ['p', 0 | 1, 0 | 1, number[]]
  /** Kružnice: x, y, poloměr, vyplněná. */
  | ['c', number, number, number, 0 | 1]
  /** Elipsa: x, y, poloosa podél natočené osy X, druhá poloosa, natočení [°]. */
  | ['e', number, number, number, number, number]
  /** Text zarovnaný na střed: x, y, výška, natočení [°], text, kurzíva. */
  | ['t', number, number, number, number, string, 0 | 1];

import { UDM_CAD_SYMBOLS } from './generated/symbols.js';
import { ZXML_CAD_SYMBOLS } from './generated/symbols-zxml.js';

export { UDM_CAD_SYMBOLS, ZXML_CAD_SYMBOLS };

/**
 * Všechny symboly pro bloky CAD podle id symbolu — UDM (`AAAA-B[-CCC]`)
 * i ŽXML (`sz-…`, vektorizované z fotokatalogu MOZeK). Id se nepřekrývají.
 */
export const CAD_SYMBOLS: Readonly<Record<string, CadSymbolPrimitive[]>> = {
  ...UDM_CAD_SYMBOLS,
  ...ZXML_CAD_SYMBOLS,
};

/** Název bloku pro id symbolu (`UDM_…`, ŽXML `SZ_…`). */
export function blockNameFor(symbol: string): string {
  return symbol.startsWith('sz-') ? `SZ_${symbol.slice(3)}` : `UDM_${symbol}`;
}

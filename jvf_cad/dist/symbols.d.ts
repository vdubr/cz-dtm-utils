/**
 * Geometrie symbolů pro bloky v CAD — UDM (knihovna ČKZ), ŽXML (znaky SŽ)
 * a čisté JVF DTM (Katalog DTM ČR, kartografický balíček ČÚZK).
 *
 * Primitiva jsou v metrech (měřítko 1:500), vkládací bod = střed symbolu,
 * osa Y nahoru. Data generuje `scripts/cad/build-cad-symbols.py --profile
 * udm|zxml|jvf`.
 */
export type CadSymbolPrimitive = 
/** Polylinie: uzavřená, vyplněná, [x, y, bulge, …]. */
['p', 0 | 1, 0 | 1, number[]]
/** Kružnice: x, y, poloměr, vyplněná. */
 | ['c', number, number, number, 0 | 1]
/** Elipsa: x, y, poloosa podél natočené osy X, druhá poloosa, natočení [°]. */
 | ['e', number, number, number, number, number]
/** Text zarovnaný na střed: x, y, výška, natočení [°], text, kurzíva. */
 | ['t', number, number, number, number, string, 0 | 1];
import { UDM_CAD_SYMBOLS } from './generated/symbols.js';
import { ZXML_CAD_SYMBOLS } from './generated/symbols-zxml.js';
import { DTM_CAD_SYMBOLS } from './generated/symbols-dtm.js';
export { UDM_CAD_SYMBOLS, ZXML_CAD_SYMBOLS, DTM_CAD_SYMBOLS };
/**
 * Všechny symboly pro bloky CAD podle id symbolu — UDM (`AAAA-B[-CCC]`),
 * ŽXML (`sz-…`, vektorizované z fotokatalogu MOZeK) a Katalog DTM ČR
 * (`dtm-<soubor SVG>`). Id se nepřekrývají.
 */
export declare const CAD_SYMBOLS: Readonly<Record<string, CadSymbolPrimitive[]>>;
/**
 * Vlastní barva symbolu (`#rrggbb`), nebo `undefined` = barva objektu.
 * Značky Katalogu DTM ČR mají barvu danou v SVG (viewer je kreslí beze
 * změny), UDM a ŽXML se barví barvou objektu / položky číselníku.
 */
export declare function symbolColorFor(symbol: string): string | undefined;
/** Název bloku pro id symbolu (`UDM_…`, ŽXML `SZ_…`, Katalog DTM ČR `DTM_…`). */
export declare function blockNameFor(symbol: string): string;
//# sourceMappingURL=symbols.d.ts.map
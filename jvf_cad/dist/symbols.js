import { UDM_CAD_SYMBOLS } from './generated/symbols.js';
import { ZXML_CAD_SYMBOLS, ZXML_CAD_SYMBOL_COLORS } from './generated/symbols-zxml.js';
import { DTM_CAD_SYMBOLS, DTM_CAD_SYMBOL_COLORS } from './generated/symbols-dtm.js';
export { UDM_CAD_SYMBOLS, ZXML_CAD_SYMBOLS, DTM_CAD_SYMBOLS };
/**
 * Všechny symboly pro bloky CAD podle id symbolu — UDM (`AAAA-B[-CCC]`),
 * ŽXML (`sz-…`, styly SLD Správy železnic) a Katalog DTM ČR
 * (`dtm-<soubor SVG>`). Id se nepřekrývají.
 */
export const CAD_SYMBOLS = {
    ...UDM_CAD_SYMBOLS,
    ...ZXML_CAD_SYMBOLS,
    ...DTM_CAD_SYMBOLS,
};
/**
 * Vlastní barva symbolu (`#rrggbb`), nebo `undefined` = barva objektu.
 * Značky Katalogu DTM ČR a ŽXML (SLD) mají barvu danou v SVG (viewer je
 * kreslí beze změny), UDM se barví barvou objektu / položky číselníku.
 */
export function symbolColorFor(symbol) {
    return DTM_CAD_SYMBOL_COLORS[symbol] ?? ZXML_CAD_SYMBOL_COLORS[symbol];
}
/** Název bloku pro id symbolu (`UDM_…`, ŽXML `SZ_…`, Katalog DTM ČR `DTM_…`). */
export function blockNameFor(symbol) {
    if (symbol.startsWith('sz-'))
        return `SZ_${symbol.slice(3)}`;
    if (symbol.startsWith('dtm-'))
        return `DTM_${symbol.slice(4)}`;
    return `UDM_${symbol}`;
}
//# sourceMappingURL=symbols.js.map
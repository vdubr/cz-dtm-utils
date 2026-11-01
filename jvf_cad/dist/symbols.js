import { UDM_CAD_SYMBOLS } from './generated/symbols.js';
import { ZXML_CAD_SYMBOLS } from './generated/symbols-zxml.js';
export { UDM_CAD_SYMBOLS, ZXML_CAD_SYMBOLS };
/**
 * Všechny symboly pro bloky CAD podle id symbolu — UDM (`AAAA-B[-CCC]`)
 * i ŽXML (`sz-…`, vektorizované z fotokatalogu MOZeK). Id se nepřekrývají.
 */
export const CAD_SYMBOLS = {
    ...UDM_CAD_SYMBOLS,
    ...ZXML_CAD_SYMBOLS,
};
/** Název bloku pro id symbolu (`UDM_…`, ŽXML `SZ_…`). */
export function blockNameFor(symbol) {
    return symbol.startsWith('sz-') ? `SZ_${symbol.slice(3)}` : `UDM_${symbol}`;
}
//# sourceMappingURL=symbols.js.map
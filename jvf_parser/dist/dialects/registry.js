import { UDM_DIALECT } from './udm.js';
import { ZXML_DIALECT } from './zxml.js';
export const PARSER_DIALECTS = [UDM_DIALECT, ZXML_DIALECT];
export function getParserDialect(id) {
    const d = PARSER_DIALECTS.find((x) => x.def.id === id);
    if (!d)
        throw new Error(`jvf-parser: neznámý dialekt "${id}"`);
    return d;
}
//# sourceMappingURL=registry.js.map
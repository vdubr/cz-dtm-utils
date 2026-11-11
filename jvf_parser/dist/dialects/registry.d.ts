/**
 * Dialekty JVF DTM známé parseru. Pořadí = priorita detekce v routeru
 * (dialekt se pozná podle vlastního elementu verze v hlavičce, takže se
 * navzájem nepřekrývají).
 */
import type { DialectId } from 'jvf-dtm-types';
import type { ParserDialect } from './types.js';
export declare const PARSER_DIALECTS: readonly ParserDialect[];
export declare function getParserDialect(id: DialectId): ParserDialect;
export type { ParserDialect };
//# sourceMappingURL=registry.d.ts.map
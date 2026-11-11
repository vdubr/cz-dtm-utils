/**
 * Dialekty JVF DTM známé parseru. Pořadí = priorita detekce v routeru
 * (dialekt se pozná podle vlastního elementu verze v hlavičce, takže se
 * navzájem nepřekrývají).
 */
import type { DialectId } from 'jvf-dtm-types';
import type { ParserDialect } from './types.js';
import { UDM_DIALECT } from './udm.js';
import { ZXML_DIALECT } from './zxml.js';

export const PARSER_DIALECTS: readonly ParserDialect[] = [UDM_DIALECT, ZXML_DIALECT];

export function getParserDialect(id: DialectId): ParserDialect {
  const d = PARSER_DIALECTS.find((x) => x.def.id === id);
  if (!d) throw new Error(`jvf-parser: neznámý dialekt "${id}"`);
  return d;
}

export type { ParserDialect };

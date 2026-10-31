import { parseAtributyObjektu1501 } from './attributes.js';
import type { JvfDtm } from './types.js';
type AttributeParser = typeof parseAtributyObjektu1501;
/**
 * Volby jádra parseru 1.5.0.1 — používá je dialekt UDM (`udm-2.1.1/parser.ts`),
 * který má stejnou strukturu záznamů/geometrie, ale zploštělé atributy.
 */
export interface ParseOptions1501 {
    /** Parser `AtributyObjektu` (default `parseAtributyObjektu1501`). */
    parseAttributes?: AttributeParser;
    /** Varovat při nepodporované `VerzeJVFDTM` (default `true`). */
    warnUnsupportedVersion?: boolean;
}
export declare function parseJvfDtm1501(xml: string, options?: ParseOptions1501): JvfDtm;
export {};
//# sourceMappingURL=parser.d.ts.map
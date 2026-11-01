import type { JvfDtm } from './types.js';
/** Volby parseru 1.4.3 — používá je router a dialekt ŽXML 1.4.2.1. */
export interface ParseOptions143 {
    /** Varovat při nepodporované `VerzeJVFDTM` (default `true`). */
    warnUnsupportedVersion?: boolean;
}
export declare function parseJvfDtm(xml: string, options?: ParseOptions143): JvfDtm;
//# sourceMappingURL=parser.d.ts.map
import type { CommonAttributes } from './types.js';
/**
 * Parse an `AtributyObjektu` element:
 *   - Extract `commonAttributes` from SpolecneAtributyVsechObjektu
 *   - Flatten shared sub-blocks and direct children into `attributes`
 */
export declare function parseAtributyObjektu(atributyEl: unknown): {
    commonAttributes: CommonAttributes;
    attributes: Record<string, string | number | boolean | null>;
};
//# sourceMappingURL=attributes.d.ts.map
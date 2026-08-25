/**
 * Parsování `AtributyObjektu` pro JVF DTM 1.5.0.1.
 *
 * Shodné s 1.4.3 (data-driven flatten), navíc sdílená skupina
 * **`SpolecneAtributyObjektuPSPI`** (změna #4/#6). Low-level helpery se
 * reusují z 1.4.3 (`xml-helpers.ts`); 1.4.3 `attributes.ts` se nemění (R1).
 */
import type { CommonAttributes } from './types.js';
export declare function parseAtributyObjektu1501(atributyEl: unknown): {
    commonAttributes: CommonAttributes;
    attributes: Record<string, string | number | boolean | null>;
};
//# sourceMappingURL=attributes.d.ts.map
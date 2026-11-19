import type { Extent } from 'ol/extent.js';

/**
 * Extenty načtených projektů (S-JTSK, metry) podle id projektu — plní je
 * `rebuildAll()` v `main.ts` při každém přestavění vieweru. Používá se pro
 * zoom na projekt a pro měření (extent načtených dat v `analytics.ts`).
 */
export const projectExtents = new Map<string, Extent>();

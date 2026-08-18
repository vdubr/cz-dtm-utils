/**
 * Mapování druhu záznamu JVF DTM 1.5.0.1 (R2).
 *
 * V 1.5.0.1 je operace součástí **názvu elementu** pod `ZaznamyObjektu`
 * (`<ZaznamObjektuIns>`, `<ZaznamObjektuRefV>`, …), nikoli hodnotou atributu
 * `ZapisObjektu` jako ve 1.4.3. `RECORD_KIND_MAP` je bezztrátová převodní
 * tabulka z názvu elementu na normalizovaný `zapisObjektu` (`i/u/d/r`) +
 * surový `recordKind` + odvozené `visibility`/`context`.
 */
import type { RecordContext, RecordKind, RecordVisibility, ZapisObjektuType } from './types.js';
export interface RecordKindInfo {
    /** Normalizovaná operace pro downstream (stejná jako 1.4.3). */
    zapisObjektu: ZapisObjektuType;
    /** Surový druh záznamu (název elementu bez prefixu `ZaznamObjektu`). */
    recordKind: RecordKind;
    /** Viditelnost (jen u referenčních vět V/N). */
    visibility?: RecordVisibility;
    /** Kontext záznamu. */
    context: RecordContext;
}
/** Prefix názvu záznamových elementů. */
export declare const RECORD_ELEMENT_PREFIX = "ZaznamObjektu";
/**
 * Kompletní mapa 14 druhů záznamu 1.5.0.1. Klíč = název elementu (po
 * `removeNSPrefix`), hodnota = normalizovaný popis záznamu.
 */
export declare const RECORD_KIND_MAP: Record<string, RecordKindInfo>;
/** Vrací `true`, pokud je klíč elementu záznamovou větou. */
export declare function isRecordElementName(key: string): boolean;
/**
 * Přeloží název záznamového elementu na `RecordKindInfo`. Neznámé (budoucí)
 * varianty se odvodí defenzivně z koncovky (`…Ins/…Upd/…Del` → i/u/d,
 * jinak `r`), aby parser nikdy nespadl.
 */
export declare function resolveRecordKind(key: string): RecordKindInfo;
//# sourceMappingURL=records.d.ts.map
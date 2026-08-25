/**
 * Mapování druhu záznamu JVF DTM 1.5.0.1 (R2).
 *
 * V 1.5.0.1 je operace součástí **názvu elementu** pod `ZaznamyObjektu`
 * (`<ZaznamObjektuIns>`, `<ZaznamObjektuRefV>`, …), nikoli hodnotou atributu
 * `ZapisObjektu` jako ve 1.4.3. `RECORD_KIND_MAP` je bezztrátová převodní
 * tabulka z názvu elementu na normalizovaný `zapisObjektu` (`i/u/d/r`) +
 * surový `recordKind` + odvozené `visibility`/`context`.
 */
import type {
  RecordContext,
  RecordKind,
  RecordVisibility,
  ZapisObjektuType,
} from './types.js';

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
export const RECORD_ELEMENT_PREFIX = 'ZaznamObjektu';

/**
 * Kompletní mapa 14 druhů záznamu 1.5.0.1. Klíč = název elementu (po
 * `removeNSPrefix`), hodnota = normalizovaný popis záznamu.
 */
export const RECORD_KIND_MAP: Record<string, RecordKindInfo> = {
  // Vstupní data
  ZaznamObjektuIns: { zapisObjektu: 'i', recordKind: 'Ins', context: 'input' },
  ZaznamObjektuUpd: { zapisObjektu: 'u', recordKind: 'Upd', context: 'input' },
  ZaznamObjektuDel: { zapisObjektu: 'd', recordKind: 'Del', context: 'input' },
  // Referenční stav (V = veřejný, N = neveřejný) — bez operace → 'r'
  ZaznamObjektuRefV: {
    zapisObjektu: 'r',
    recordKind: 'RefV',
    visibility: 'public',
    context: 'refState',
  },
  ZaznamObjektuRefN: {
    zapisObjektu: 'r',
    recordKind: 'RefN',
    visibility: 'nonpublic',
    context: 'refState',
  },
  // Referenční změnové věty — veřejná varianta
  ZaznamObjektuRefVIns: {
    zapisObjektu: 'i',
    recordKind: 'RefVIns',
    visibility: 'public',
    context: 'refChange',
  },
  ZaznamObjektuRefVUpd: {
    zapisObjektu: 'u',
    recordKind: 'RefVUpd',
    visibility: 'public',
    context: 'refChange',
  },
  ZaznamObjektuRefVDel: {
    zapisObjektu: 'd',
    recordKind: 'RefVDel',
    visibility: 'public',
    context: 'refChange',
  },
  // Referenční změnové věty — neveřejná varianta
  ZaznamObjektuRefNIns: {
    zapisObjektu: 'i',
    recordKind: 'RefNIns',
    visibility: 'nonpublic',
    context: 'refChange',
  },
  ZaznamObjektuRefNUpd: {
    zapisObjektu: 'u',
    recordKind: 'RefNUpd',
    visibility: 'nonpublic',
    context: 'refChange',
  },
  ZaznamObjektuRefNDel: {
    zapisObjektu: 'd',
    recordKind: 'RefNDel',
    visibility: 'nonpublic',
    context: 'refChange',
  },
  // Přeshraniční (peer) věty — jen ZPS
  ZaznamObjektuPeIns: { zapisObjektu: 'i', recordKind: 'PeIns', context: 'peer' },
  ZaznamObjektuPeUpd: { zapisObjektu: 'u', recordKind: 'PeUpd', context: 'peer' },
  ZaznamObjektuPeDel: { zapisObjektu: 'd', recordKind: 'PeDel', context: 'peer' },
};

/** Vrací `true`, pokud je klíč elementu záznamovou větou. */
export function isRecordElementName(key: string): boolean {
  return key.startsWith(RECORD_ELEMENT_PREFIX);
}

/**
 * Přeloží název záznamového elementu na `RecordKindInfo`. Neznámé (budoucí)
 * varianty se odvodí defenzivně z koncovky (`…Ins/…Upd/…Del` → i/u/d,
 * jinak `r`), aby parser nikdy nespadl.
 */
export function resolveRecordKind(key: string): RecordKindInfo {
  const known = RECORD_KIND_MAP[key];
  if (known) return known;

  const suffix = key.startsWith(RECORD_ELEMENT_PREFIX)
    ? key.slice(RECORD_ELEMENT_PREFIX.length)
    : key;
  let zapisObjektu: ZapisObjektuType = 'r';
  if (suffix.endsWith('Ins')) zapisObjektu = 'i';
  else if (suffix.endsWith('Upd')) zapisObjektu = 'u';
  else if (suffix.endsWith('Del')) zapisObjektu = 'd';

  const visibility: RecordVisibility | undefined = suffix.includes('RefV')
    ? 'public'
    : suffix.includes('RefN')
      ? 'nonpublic'
      : undefined;
  const context: RecordContext = suffix.startsWith('Pe')
    ? 'peer'
    : suffix.startsWith('Ref') && (suffix === 'RefV' || suffix === 'RefN')
      ? 'refState'
      : suffix.startsWith('Ref')
        ? 'refChange'
        : 'input';

  return {
    zapisObjektu,
    recordKind: (suffix || 'Ins') as RecordKind,
    ...(visibility ? { visibility } : {}),
    context,
  };
}

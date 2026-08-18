/** Prefix názvu záznamových elementů. */
export const RECORD_ELEMENT_PREFIX = 'ZaznamObjektu';
/**
 * Kompletní mapa 14 druhů záznamu 1.5.0.1. Klíč = název elementu (po
 * `removeNSPrefix`), hodnota = normalizovaný popis záznamu.
 */
export const RECORD_KIND_MAP = {
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
export function isRecordElementName(key) {
    return key.startsWith(RECORD_ELEMENT_PREFIX);
}
/**
 * Přeloží název záznamového elementu na `RecordKindInfo`. Neznámé (budoucí)
 * varianty se odvodí defenzivně z koncovky (`…Ins/…Upd/…Del` → i/u/d,
 * jinak `r`), aby parser nikdy nespadl.
 */
export function resolveRecordKind(key) {
    const known = RECORD_KIND_MAP[key];
    if (known)
        return known;
    const suffix = key.startsWith(RECORD_ELEMENT_PREFIX)
        ? key.slice(RECORD_ELEMENT_PREFIX.length)
        : key;
    let zapisObjektu = 'r';
    if (suffix.endsWith('Ins'))
        zapisObjektu = 'i';
    else if (suffix.endsWith('Upd'))
        zapisObjektu = 'u';
    else if (suffix.endsWith('Del'))
        zapisObjektu = 'd';
    const visibility = suffix.includes('RefV')
        ? 'public'
        : suffix.includes('RefN')
            ? 'nonpublic'
            : undefined;
    const context = suffix.startsWith('Pe')
        ? 'peer'
        : suffix.startsWith('Ref') && (suffix === 'RefV' || suffix === 'RefN')
            ? 'refState'
            : suffix.startsWith('Ref')
                ? 'refChange'
                : 'input';
    return {
        zapisObjektu,
        recordKind: (suffix || 'Ins'),
        ...(visibility ? { visibility } : {}),
        context,
    };
}
//# sourceMappingURL=records.js.map
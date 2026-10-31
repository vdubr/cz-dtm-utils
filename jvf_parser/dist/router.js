/**
 * Verzní router parseru JVF DTM (R3, R4).
 *
 * `parseJvfDtm(xml)` má **stejnou signaturu** jako dřív (R3) a podle obsahu
 * souboru nasměruje na parser správné verze. Detekce (R4):
 *   1. kořen `ServisJVFDTM` → protokol chyb (není datový soubor) → chyba
 *      s odkazem na `parseErrorProtocol` (T6),
 *   2. `<VerzeJVFUDM>` přítomna → **UDM** (`udm-<verze>`; neznámá verze UDM
 *      se strukturou 1.5.0.x → nejnovější podporované UDM + warn),
 *   3. `VerzeJVFDTM` ∈ `SUPPORTED_VERSIONS` → daná větev,
 *   4. neznámá/chybějící verze → **strukturní sniff** (druh `ZaznamObjektu`),
 *   5. jinak `DEFAULT_VERSION` + warn.
 * Router nikdy nespadne na detekci — vždy zvolí nějakou větev.
 */
import { DEFAULT_VERSION, LATEST_UDM_VERSION, isSupportedVersion, isUdmVersion, udmVersionId, } from 'jvf-dtm-types';
import { parseJvfDtm as parseJvfDtm143 } from './1.4.3/parser.js';
import { parseJvfDtm1501 } from './1.5.0.1/parser.js';
import { detectUdmVersionString, parseUdm } from './udm-2.1.1/parser.js';
import { ENTITY_CATALOG as CATALOG_143 } from './1.4.3/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_1501 } from './1.5.0.1/generated/entities.js';
import { ENUM_LABELS as LABELS_143, BOOLEAN_ATTRS as BOOL_ATTRS_143, } from './1.4.3/generated/enum-labels.js';
import { ENUM_LABELS as LABELS_1501, BOOLEAN_ATTRS as BOOL_ATTRS_1501, } from './1.5.0.1/generated/enum-labels.js';
// `EntityMeta` z UDM — jeho union `obsahovaCast` je nadmnožinou JVF verzí.
import { ENTITY_CATALOG as CATALOG_UDM_211, } from './udm-2.1.1/generated/entities.js';
import { ENUM_LABELS as LABELS_UDM_211, BOOLEAN_ATTRS as BOOL_ATTRS_UDM_211, } from './udm-2.1.1/generated/enum-labels.js';
/** Katalogy entit podle verze — každá podporovaná verze musí mít záznam. */
const CATALOGS = {
    '1.4.3': CATALOG_143,
    '1.5.0.1': CATALOG_1501,
    'udm-2.1.1': CATALOG_UDM_211,
};
const ENUM_LABELS_BY_VERSION = {
    '1.4.3': LABELS_143,
    '1.5.0.1': LABELS_1501,
    'udm-2.1.1': LABELS_UDM_211,
};
const BOOLEAN_ATTRS_BY_VERSION = {
    '1.4.3': new Set(BOOL_ATTRS_143),
    '1.5.0.1': new Set(BOOL_ATTRS_1501),
    'udm-2.1.1': new Set(BOOL_ATTRS_UDM_211),
};
/** Neznámá verze (mimo `JvfVersion`) → `DEFAULT_VERSION` (graceful). */
function knownVersion(version) {
    return isSupportedVersion(version) ? version : DEFAULT_VERSION;
}
/** Přečte hodnotu `<VerzeJVFDTM>` z raw XML (bez plného parsování). */
export function detectVersionString(xml) {
    const m = xml.match(/<(?:[A-Za-z0-9_]+:)?VerzeJVFDTM>\s*([^<\s]+)/);
    return m?.[1]?.trim() ?? null;
}
/** Kořen `ServisJVFDTM` = protokol chyb, ne datový soubor. */
export function isErrorProtocolXml(xml) {
    return /<(?:[A-Za-z0-9_]+:)?ServisJVFDTM[\s>]/.test(xml);
}
/**
 * Strukturní sniff verze podle druhu záznamu:
 * `ZaznamObjektu{Ins,Upd,Del,RefV,RefN,Pe…}` → 1.5.0.1; holé `ZaznamObjektu`
 * → 1.4.3; jinak `DEFAULT_VERSION`.
 */
export function sniffVersionByStructure(xml) {
    if (/<(?:[A-Za-z0-9_]+:)?ZaznamObjektu(?:Ins|Upd|Del|RefV|RefN|Pe[A-Za-z]+)[\s>/]/.test(xml)) {
        return '1.5.0.1';
    }
    if (/<(?:[A-Za-z0-9_]+:)?ZaznamObjektu[\s>]/.test(xml)) {
        return '1.4.3';
    }
    return DEFAULT_VERSION;
}
/**
 * Vyřeší UDM verzi souboru z `<VerzeJVFUDM>`, nebo `null` u čistého JVF.
 * Neznámá verze UDM se strukturou 1.5.0.x → nejnovější podporované UDM
 * (+ warn); jiná struktura (UDM 1.x nad JVF 1.4.3) → `null` (parsuje se
 * jako JVF).
 */
export function resolveUdmVersion(xml) {
    const declared = detectUdmVersionString(xml);
    if (declared == null)
        return null;
    const id = udmVersionId(declared);
    if (isUdmVersion(id))
        return id;
    if (sniffVersionByStructure(xml) === '1.5.0.1') {
        console.warn(`jvf-parser: nepodporovaná verze UDM "${declared}" — použije se ${LATEST_UDM_VERSION}.`);
        return LATEST_UDM_VERSION;
    }
    console.warn(`jvf-parser: nepodporovaná verze UDM "${declared}" (struktura JVF 1.4.3) — parsuje se jako JVF DTM bez rozšíření UDM.`);
    return null;
}
/** Vyřeší verzi souboru dle R4 (bez ohledu na ServisJVFDTM). */
export function resolveDtmVersion(xml) {
    const udm = resolveUdmVersion(xml);
    if (udm)
        return udm;
    const declared = detectVersionString(xml);
    if (declared && isSupportedVersion(declared))
        return declared;
    const sniffed = sniffVersionByStructure(xml);
    if (declared) {
        console.warn(`jvf-parser: nepodporovaná verze JVF DTM "${declared}" — použije se strukturně odhadnutá větev "${sniffed}".`);
    }
    return sniffed;
}
/**
 * Naparsuje JVF DTM datový soubor (1.4.3, 1.5.0.1) nebo UDM (udm-2.1.1) —
 * verzní router (R3/R4).
 * Pro protokol chyb (`ServisJVFDTM`) použij `parseErrorProtocol`.
 */
export function parseJvfDtm(xml) {
    if (isErrorProtocolXml(xml)) {
        throw new Error('jvf-parser: soubor je protokol chyb (ServisJVFDTM), ne datový JVF DTM — použij parseErrorProtocol().');
    }
    const version = resolveDtmVersion(xml);
    if (isUdmVersion(version)) {
        const dtm = parseUdm(xml);
        // Neznámá verze UDM namapovaná na nejnovější — katalog dle `version`.
        return { ...dtm, verze: version };
    }
    return version === '1.5.0.1' ? parseJvfDtm1501(xml) : parseJvfDtm143(xml);
}
/**
 * Katalog entit pro danou verzi (R3). `ENTITY_CATALOG` (bez argumentu, =1.4.3)
 * zůstává exportován pro zpětnou kompatibilitu.
 */
export function getEntityCatalog(version) {
    return CATALOGS[knownVersion(version)];
}
/** Tabulka číselníků `název atributu → { kód → popisek }` pro danou verzi. */
export function getEnumLabels(version) {
    return ENUM_LABELS_BY_VERSION[knownVersion(version)];
}
/** Množina názvů `xs:boolean` atributů (v XML 0/1) pro danou verzi. */
export function getBooleanAttrs(version) {
    return BOOLEAN_ATTRS_BY_VERSION[knownVersion(version)];
}
/**
 * Vrátí český popisek hodnoty atributu (`kód → text`) pro daný atribut,
 * nebo `undefined` u neznámého atributu/kódu (graceful degradation, A3).
 * `value` se porovnává jako string (číselný i řetězcový kód shodně).
 *
 * Pokrývá dva druhy kódovaných atributů:
 *  1. **číselníky** (`xs:enumeration`) přes `ENUM_LABELS`,
 *  2. **booleany** (`xs:boolean`, v XML `0`/`1` příp. `false`/`true`) →
 *     `ne`/`ano`. Booleany nejsou číselníky (nemají popisky po hodnotách),
 *     kontext dává název atributu (např. `NeuplnaData: 1 — ano`).
 */
export function labelForAttribute(attrName, value, version = DEFAULT_VERSION) {
    const enumLabel = getEnumLabels(version)[attrName]?.[String(value)];
    if (enumLabel !== undefined)
        return enumLabel;
    if (getBooleanAttrs(version).has(attrName)) {
        const s = String(value).trim().toLowerCase();
        if (s === '1' || s === 'true')
            return 'ano';
        if (s === '0' || s === 'false')
            return 'ne';
    }
    return undefined;
}
//# sourceMappingURL=router.js.map
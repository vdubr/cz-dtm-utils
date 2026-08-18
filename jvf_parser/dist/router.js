/**
 * Verzní router parseru JVF DTM (R3, R4).
 *
 * `parseJvfDtm(xml)` má **stejnou signaturu** jako dřív (R3) a podle obsahu
 * souboru nasměruje na parser správné verze. Detekce (R4):
 *   1. kořen `ServisJVFDTM` → protokol chyb (není datový soubor) → chyba
 *      s odkazem na `parseErrorProtocol` (T6),
 *   2. `VerzeJVFDTM` ∈ `SUPPORTED_VERSIONS` → daná větev,
 *   3. neznámá/chybějící verze → **strukturní sniff** (druh `ZaznamObjektu`),
 *   4. jinak `DEFAULT_VERSION` + warn.
 * Router nikdy nespadne na detekci — vždy zvolí nějakou větev.
 */
import { DEFAULT_VERSION, isSupportedVersion, } from 'jvf-dtm-types';
import { parseJvfDtm as parseJvfDtm143 } from './1.4.3/parser.js';
import { parseJvfDtm1501 } from './1.5.0.1/parser.js';
import { ENTITY_CATALOG as CATALOG_143 } from './1.4.3/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_1501, } from './1.5.0.1/generated/entities.js';
import { ENUM_LABELS as LABELS_143 } from './1.4.3/generated/enum-labels.js';
import { ENUM_LABELS as LABELS_1501 } from './1.5.0.1/generated/enum-labels.js';
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
/** Vyřeší verzi souboru dle R4 (bez ohledu na ServisJVFDTM). */
export function resolveDtmVersion(xml) {
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
 * Naparsuje JVF DTM datový soubor (1.4.3 nebo 1.5.0.1) — verzní router (R3/R4).
 * Pro protokol chyb (`ServisJVFDTM`) použij `parseErrorProtocol`.
 */
export function parseJvfDtm(xml) {
    if (isErrorProtocolXml(xml)) {
        throw new Error('jvf-parser: soubor je protokol chyb (ServisJVFDTM), ne datový JVF DTM — použij parseErrorProtocol().');
    }
    const version = resolveDtmVersion(xml);
    return version === '1.5.0.1' ? parseJvfDtm1501(xml) : parseJvfDtm143(xml);
}
/**
 * Katalog entit pro danou verzi (R3). `ENTITY_CATALOG` (bez argumentu, =1.4.3)
 * zůstává exportován pro zpětnou kompatibilitu.
 */
export function getEntityCatalog(version) {
    return version === '1.5.0.1' ? CATALOG_1501 : CATALOG_143;
}
/** Tabulka číselníků `název atributu → { kód → popisek }` pro danou verzi. */
export function getEnumLabels(version) {
    return version === '1.5.0.1' ? LABELS_1501 : LABELS_143;
}
/**
 * Vrátí český popisek číselníkové hodnoty (`kód → text`) pro daný atribut,
 * nebo `undefined` u neznámého atributu/kódu (graceful degradation, A3).
 * `value` se porovnává jako string (číselný i řetězcový kód shodně).
 */
export function labelForAttribute(attrName, value, version = DEFAULT_VERSION) {
    return getEnumLabels(version)[attrName]?.[String(value)];
}
//# sourceMappingURL=router.js.map
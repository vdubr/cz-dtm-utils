/**
 * Verzní router parseru JVF DTM (R3, R4).
 *
 * `parseJvfDtm(xml)` má **stejnou signaturu** jako dřív (R3) a podle obsahu
 * souboru nasměruje na parser správné verze. Detekce (R4):
 *   1. kořen `ServisJVFDTM` → protokol chyb (není datový soubor) → chyba
 *      s odkazem na `parseErrorProtocol` (T6),
 *   2. **dialekt** (registr `PARSER_DIALECTS`): element verze dialektu
 *      v hlavičce (`VerzeJVFUDM`, `VerzeZXML`) → `<dialekt>-<verze>`;
 *      neznámá verze dialektu → nejnovější verze téhož dialektu se stejnou
 *      strukturou XSD (+ warn), jinak se soubor čte jako čisté JVF DTM,
 *   3. `VerzeJVFDTM` ∈ `JVF_VERSIONS` → daná verze,
 *   4. neznámá/chybějící verze → **strukturní sniff** (druh `ZaznamObjektu`),
 *   5. jinak `DEFAULT_VERSION`.
 * Router nikdy nespadne na detekci — vždy zvolí nějakou větev.
 *
 * Výsledné `JvfDtm.verze` je vždy vyřešené id (viz `jvf-dtm-types`).
 */
import { type DialectVersion, type JvfDtm, type JvfVersion } from 'jvf-dtm-types';
import type { EntityCatalog } from './catalog.js';
/** Přečte hodnotu `<VerzeJVFDTM>` z raw XML (bez plného parsování). */
export declare function detectVersionString(xml: string): string | null;
/** Kořen `ServisJVFDTM` = protokol chyb, ne datový soubor. */
export declare function isErrorProtocolXml(xml: string): boolean;
/**
 * Strukturní sniff verze podle druhu záznamu:
 * `ZaznamObjektu{Ins,Upd,Del,RefV,RefN,Pe…}` → 1.5.0.1; holé `ZaznamObjektu`
 * → 1.4.3; jinak `DEFAULT_VERSION`.
 */
export declare function sniffVersionByStructure(xml: string): JvfVersion;
/**
 * Vyřeší verzi dialektu souboru, nebo `null` u čistého JVF DTM.
 * Neznámá verze dialektu → nejnovější verze téhož dialektu se stejnou
 * strukturou XSD (+ warn); jiná struktura → `null` (čte se jako JVF DTM).
 */
export declare function resolveDialectVersion(xml: string): DialectVersion | null;
/**
 * Vyřeší verzi UDM souboru z `<VerzeJVFUDM>`, nebo `null`.
 * @deprecated použij `resolveDialectVersion` (pokrývá všechny dialekty).
 */
export declare function resolveUdmVersion(xml: string): JvfVersion | null;
/** Vyřeší verzi souboru dle R4 (bez ohledu na ServisJVFDTM). */
export declare function resolveDtmVersion(xml: string): JvfVersion;
/**
 * Naparsuje datový soubor JVF DTM (1.4.3, 1.5.0.1, 1.5.0.2) nebo dialektu
 * (UDM, ŽXML) — verzní router (R3/R4). `verze` výsledku je vždy vyřešené id.
 * Pro protokol chyb (`ServisJVFDTM`) použij `parseErrorProtocol`.
 */
export declare function parseJvfDtm(xml: string): JvfDtm;
/**
 * Katalog entit pro danou verzi (R3). `ENTITY_CATALOG` (bez argumentu, =1.4.3)
 * zůstává exportován pro zpětnou kompatibilitu.
 */
export declare function getEntityCatalog(version: JvfVersion | string): EntityCatalog;
/** Tabulka číselníků `název atributu → { kód → popisek }` pro danou verzi. */
export declare function getEnumLabels(version: JvfVersion | string): Readonly<Record<string, Record<string, string>>>;
/** Množina názvů `xs:boolean` atributů (v XML 0/1) pro danou verzi. */
export declare function getBooleanAttrs(version: JvfVersion | string): ReadonlySet<string>;
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
export declare function labelForAttribute(attrName: string, value: unknown, version?: JvfVersion | string): string | undefined;
//# sourceMappingURL=router.d.ts.map
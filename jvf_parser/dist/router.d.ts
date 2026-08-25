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
import { type JvfDtm, type JvfVersion } from 'jvf-dtm-types';
import { type EntityMeta } from './1.5.0.1/generated/entities.js';
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
/** Vyřeší verzi souboru dle R4 (bez ohledu na ServisJVFDTM). */
export declare function resolveDtmVersion(xml: string): JvfVersion;
/**
 * Naparsuje JVF DTM datový soubor (1.4.3 nebo 1.5.0.1) — verzní router (R3/R4).
 * Pro protokol chyb (`ServisJVFDTM`) použij `parseErrorProtocol`.
 */
export declare function parseJvfDtm(xml: string): JvfDtm;
/**
 * Katalog entit pro danou verzi (R3). `ENTITY_CATALOG` (bez argumentu, =1.4.3)
 * zůstává exportován pro zpětnou kompatibilitu.
 */
export declare function getEntityCatalog(version: JvfVersion): Readonly<Record<string, EntityMeta>>;
/** Tabulka číselníků `název atributu → { kód → popisek }` pro danou verzi. */
export declare function getEnumLabels(version: JvfVersion): Readonly<Record<string, Record<string, string>>>;
/** Množina názvů `xs:boolean` atributů (v XML 0/1) pro danou verzi. */
export declare function getBooleanAttrs(version: JvfVersion): ReadonlySet<string>;
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
export declare function labelForAttribute(attrName: string, value: unknown, version?: JvfVersion): string | undefined;
//# sourceMappingURL=router.d.ts.map
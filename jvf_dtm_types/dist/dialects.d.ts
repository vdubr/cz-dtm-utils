/**
 * Registr **dialektů JVF DTM** — datových modelů, které jsou nadmnožinou
 * některé verze JVF DTM a v hlavičce souboru nesou vlastní číslo verze:
 *
 * - **UDM** (Univerzální datový model ČKZ) — `<cmn:VerzeJVFUDM>`, objekty `94…`,
 * - **ŽXML** (železniční XML Správy železnic, data DTMŽ) — `<cmn:VerzeZXML>`,
 *   objekty SŽ `999…` (`objekty_sz`) a atributy SŽ (`atributy_sz.xsd`).
 *
 * Id verze dialektu má tvar `<id>-<verze>` (`udm-2.1.1`, `zxml-1.5.1.6`).
 * Přidání dalšího dialektu = nová položka v {@link DIALECTS} + verze v
 * `*_VERSIONS`; zbytek monorepa (router parseru, popisky, topologie, viewer)
 * se řídí tímto registrem.
 */
import type { JvfBaseVersion } from './versions.js';
/** Podporované verze UDM (id `udm-<VerzeJVFUDM>`). */
export declare const UDM_VERSIONS: readonly ["udm-2.1.1"];
export type UdmVersion = (typeof UDM_VERSIONS)[number];
/**
 * Podporované verze ŽXML (id `zxml-<VerzeZXML>`).
 * `1.4.2.1` platí od 1. 2. 2025 (nad JVF 1.4.3), `1.5.1.6` od 23. 11. 2026
 * (nad JVF 1.5.0.2, datový model DTMŽ 1.5.0.2 V23).
 */
export declare const ZXML_VERSIONS: readonly ["zxml-1.4.2.1", "zxml-1.5.1.6"];
export type ZxmlVersion = (typeof ZXML_VERSIONS)[number];
export type DialectVersion = UdmVersion | ZxmlVersion;
export type DialectId = 'udm' | 'zxml';
export interface DialectDef {
    id: DialectId;
    /** Krátký popisek verze v UI (`UDM 2.1.1`, `ŽXML 1.5.1.6`). */
    label: string;
    /** Plný název datového modelu. */
    title: string;
    /** Element hlavičky (`cmn:…`) s číslem verze dialektu. */
    headerElement: string;
    /** Podporované verze (vzestupně), id `<id>-<verze>`. */
    versions: readonly DialectVersion[];
    /** Nejnovější podporovaná verze — fallback pro neznámou verzi dialektu. */
    latest: DialectVersion;
    /** Verze JVF DTM, nad kterou je daná verze dialektu postavena. */
    baseJvfVersion: Readonly<Partial<Record<DialectVersion, JvfBaseVersion>>>;
}
export declare const DIALECTS: readonly DialectDef[];
/** Definice dialektu podle id. */
export declare function getDialect(id: DialectId): DialectDef;
/** Dialekt, do kterého patří id verze (`udm-2.1.1` → UDM), jinak `undefined` (čisté JVF). */
export declare function dialectOf(version: string): DialectDef | undefined;
/** Id verze dialektu ze surové hodnoty hlavičky (`'udm'`, `'2.1.1'` → `udm-2.1.1`). */
export declare function dialectVersionId(id: DialectId, raw: string): string;
/** Surové číslo verze dialektu (`zxml-1.5.1.6` → `1.5.1.6`). */
export declare function rawDialectVersion(version: string): string;
/** Je id podporovaná verze některého dialektu? */
export declare function isDialectVersion(v: string): v is DialectVersion;
/** Je id verze UDM (`udm-…`)? */
export declare function isUdmVersion(v: string): v is UdmVersion;
/** Je id verze ŽXML (`zxml-…`)? */
export declare function isZxmlVersion(v: string): v is ZxmlVersion;
/** Nejnovější podporovaná verze UDM (fallback pro neznámou `VerzeJVFUDM`). */
export declare const LATEST_UDM_VERSION: UdmVersion;
/** Nejnovější podporovaná verze ŽXML. */
export declare const LATEST_ZXML_VERSION: ZxmlVersion;
/**
 * Id verze UDM z hodnoty `<VerzeJVFUDM>` (např. `2.1.1` → `udm-2.1.1`).
 * @deprecated použij `dialectVersionId('udm', raw)`.
 */
export declare function udmVersionId(verzeJvfUdm: string): string;
//# sourceMappingURL=dialects.d.ts.map
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
export const UDM_VERSIONS = ['udm-2.1.1'] as const;
export type UdmVersion = (typeof UDM_VERSIONS)[number];

/**
 * Podporované verze ŽXML (id `zxml-<VerzeZXML>`).
 * `1.4.2.1` platí od 1. 2. 2025 (nad JVF 1.4.3), `1.5.1.6` od 23. 11. 2026
 * (nad JVF 1.5.0.2, datový model DTMŽ 1.5.0.2 V23).
 */
export const ZXML_VERSIONS = ['zxml-1.4.2.1', 'zxml-1.5.1.6'] as const;
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

export const DIALECTS: readonly DialectDef[] = [
  {
    id: 'udm',
    label: 'UDM',
    title: 'UDM — Univerzální datový model ČKZ',
    headerElement: 'VerzeJVFUDM',
    versions: UDM_VERSIONS,
    latest: 'udm-2.1.1',
    baseJvfVersion: { 'udm-2.1.1': '1.5.0.2' },
  },
  {
    id: 'zxml',
    label: 'ŽXML',
    title: 'ŽXML — železniční XML Správy železnic (DTMŽ)',
    headerElement: 'VerzeZXML',
    versions: ZXML_VERSIONS,
    latest: 'zxml-1.5.1.6',
    baseJvfVersion: { 'zxml-1.4.2.1': '1.4.3', 'zxml-1.5.1.6': '1.5.0.2' },
  },
];

/** Definice dialektu podle id. */
export function getDialect(id: DialectId): DialectDef {
  const d = DIALECTS.find((x) => x.id === id);
  if (!d) throw new Error(`jvf-dtm-types: neznámý dialekt "${id}"`);
  return d;
}

/** Dialekt, do kterého patří id verze (`udm-2.1.1` → UDM), jinak `undefined` (čisté JVF). */
export function dialectOf(version: string): DialectDef | undefined {
  return DIALECTS.find((d) => version.startsWith(`${d.id}-`));
}

/** Id verze dialektu ze surové hodnoty hlavičky (`'udm'`, `'2.1.1'` → `udm-2.1.1`). */
export function dialectVersionId(id: DialectId, raw: string): string {
  return `${id}-${raw.trim()}`;
}

/** Surové číslo verze dialektu (`zxml-1.5.1.6` → `1.5.1.6`). */
export function rawDialectVersion(version: string): string {
  const d = dialectOf(version);
  return d ? version.slice(d.id.length + 1) : version;
}

/** Je id podporovaná verze některého dialektu? */
export function isDialectVersion(v: string): v is DialectVersion {
  return DIALECTS.some((d) => (d.versions as readonly string[]).includes(v));
}

/** Je id verze UDM (`udm-…`)? */
export function isUdmVersion(v: string): v is UdmVersion {
  return (UDM_VERSIONS as readonly string[]).includes(v);
}

/** Je id verze ŽXML (`zxml-…`)? */
export function isZxmlVersion(v: string): v is ZxmlVersion {
  return (ZXML_VERSIONS as readonly string[]).includes(v);
}

/** Nejnovější podporovaná verze UDM (fallback pro neznámou `VerzeJVFUDM`). */
export const LATEST_UDM_VERSION: UdmVersion = 'udm-2.1.1';

/** Nejnovější podporovaná verze ŽXML. */
export const LATEST_ZXML_VERSION: ZxmlVersion = 'zxml-1.5.1.6';

/**
 * Id verze UDM z hodnoty `<VerzeJVFUDM>` (např. `2.1.1` → `udm-2.1.1`).
 * @deprecated použij `dialectVersionId('udm', raw)`.
 */
export function udmVersionId(verzeJvfUdm: string): string {
  return dialectVersionId('udm', verzeJvfUdm);
}

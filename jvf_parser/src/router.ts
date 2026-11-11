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
import {
  DEFAULT_VERSION,
  baseJvfVersionOf,
  dialectOf,
  dialectVersionId,
  isJvfBaseVersion,
  isSupportedVersion,
  type DialectVersion,
  type JvfDtm,
  type JvfVersion,
} from 'jvf-dtm-types';
import { parseJvfDtm as parseJvfDtm143 } from './1.4.3/parser.js';
import { parseJvfDtm1501 } from './1.5.0.1/parser.js';
import { PARSER_DIALECTS, getParserDialect } from './dialects/registry.js';
import type { EntityCatalog } from './catalog.js';
import { ENTITY_CATALOG as CATALOG_143 } from './1.4.3/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_1501 } from './1.5.0.1/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_1502 } from './1.5.0.2/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_UDM_211 } from './udm-2.1.1/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_ZXML_1421 } from './zxml-1.4.2.1/generated/entities.js';
import { ENTITY_CATALOG as CATALOG_ZXML_1516 } from './zxml-1.5.1.6/generated/entities.js';
import * as L143 from './1.4.3/generated/enum-labels.js';
import * as L1501 from './1.5.0.1/generated/enum-labels.js';
import * as L1502 from './1.5.0.2/generated/enum-labels.js';
import * as LUDM211 from './udm-2.1.1/generated/enum-labels.js';
import * as LZXML1421 from './zxml-1.4.2.1/generated/enum-labels.js';
import * as LZXML1516 from './zxml-1.5.1.6/generated/enum-labels.js';

/** Katalogy entit podle verze — každá podporovaná verze musí mít záznam. */
const CATALOGS: Readonly<Record<JvfVersion, EntityCatalog>> = {
  '1.4.3': CATALOG_143,
  '1.5.0.1': CATALOG_1501,
  '1.5.0.2': CATALOG_1502,
  'udm-2.1.1': CATALOG_UDM_211,
  'zxml-1.4.2.1': CATALOG_ZXML_1421,
  'zxml-1.5.1.6': CATALOG_ZXML_1516,
};

interface LabelModule {
  ENUM_LABELS: Record<string, Record<string, string>>;
  BOOLEAN_ATTRS: readonly string[];
}

const LABELS: Readonly<Record<JvfVersion, LabelModule>> = {
  '1.4.3': L143,
  '1.5.0.1': L1501,
  '1.5.0.2': L1502,
  'udm-2.1.1': LUDM211,
  'zxml-1.4.2.1': LZXML1421,
  'zxml-1.5.1.6': LZXML1516,
};

const BOOLEAN_ATTRS_BY_VERSION = new Map<JvfVersion, ReadonlySet<string>>(
  (Object.keys(LABELS) as JvfVersion[]).map((v) => [v, new Set(LABELS[v].BOOLEAN_ATTRS)])
);

/**
 * Neznámá verze → nejnovější verze téhož dialektu, u JVF `DEFAULT_VERSION`
 * (graceful — volající může mít v ruce surové id ze staršího/novějšího souboru).
 */
function knownVersion(version: string): JvfVersion {
  if (isSupportedVersion(version)) return version;
  return dialectOf(version)?.latest ?? DEFAULT_VERSION;
}

/** Přečte hodnotu `<VerzeJVFDTM>` z raw XML (bez plného parsování). */
export function detectVersionString(xml: string): string | null {
  const m = xml.match(/<(?:[A-Za-z0-9_]+:)?VerzeJVFDTM>\s*([^<\s]+)/);
  return m?.[1]?.trim() ?? null;
}

/** Kořen `ServisJVFDTM` = protokol chyb, ne datový soubor. */
export function isErrorProtocolXml(xml: string): boolean {
  return /<(?:[A-Za-z0-9_]+:)?ServisJVFDTM[\s>]/.test(xml);
}

/**
 * Strukturní sniff verze podle druhu záznamu:
 * `ZaznamObjektu{Ins,Upd,Del,RefV,RefN,Pe…}` → 1.5.0.1; holé `ZaznamObjektu`
 * → 1.4.3; jinak `DEFAULT_VERSION`.
 */
export function sniffVersionByStructure(xml: string): JvfVersion {
  if (/<(?:[A-Za-z0-9_]+:)?ZaznamObjektu(?:Ins|Upd|Del|RefV|RefN|Pe[A-Za-z]+)[\s>/]/.test(xml)) {
    return '1.5.0.1';
  }
  if (/<(?:[A-Za-z0-9_]+:)?ZaznamObjektu[\s>]/.test(xml)) {
    return '1.4.3';
  }
  return DEFAULT_VERSION;
}

/** Struktura XSD verze: `1.4` (jeden ZaznamObjektu) nebo `1.5` (Ins/Upd/…). */
function structureFamily(version: string): '1.4' | '1.5' | undefined {
  const base = baseJvfVersionOf(version);
  if (!base) return undefined;
  return base.startsWith('1.5') ? '1.5' : '1.4';
}

/**
 * Vyřeší verzi dialektu souboru, nebo `null` u čistého JVF DTM.
 * Neznámá verze dialektu → nejnovější verze téhož dialektu se stejnou
 * strukturou XSD (+ warn); jiná struktura → `null` (čte se jako JVF DTM).
 */
export function resolveDialectVersion(xml: string): DialectVersion | null {
  for (const dialect of PARSER_DIALECTS) {
    const declared = dialect.detect(xml);
    if (declared == null) continue;
    const id = dialectVersionId(dialect.def.id, declared);
    if ((dialect.def.versions as readonly string[]).includes(id)) return id as DialectVersion;
    const family = structureFamily(sniffVersionByStructure(xml));
    const candidate = [...dialect.def.versions].reverse().find((v) => structureFamily(v) === family);
    if (candidate) {
      console.warn(
        `jvf-parser: nepodporovaná verze ${dialect.def.label} "${declared}" — použije se ${candidate}.`
      );
      return candidate;
    }
    console.warn(
      `jvf-parser: nepodporovaná verze ${dialect.def.label} "${declared}" — parsuje se jako JVF DTM bez rozšíření.`
    );
    return null;
  }
  return null;
}

/**
 * Vyřeší verzi UDM souboru z `<VerzeJVFUDM>`, nebo `null`.
 * @deprecated použij `resolveDialectVersion` (pokrývá všechny dialekty).
 */
export function resolveUdmVersion(xml: string): JvfVersion | null {
  const v = resolveDialectVersion(xml);
  return v && dialectOf(v)?.id === 'udm' ? v : null;
}

/** Vyřeší verzi souboru dle R4 (bez ohledu na ServisJVFDTM). */
export function resolveDtmVersion(xml: string): JvfVersion {
  const dialect = resolveDialectVersion(xml);
  if (dialect) return dialect;
  const declared = detectVersionString(xml);
  if (declared && isJvfBaseVersion(declared)) return declared;
  const sniffed = sniffVersionByStructure(xml);
  if (declared) {
    console.warn(
      `jvf-parser: nepodporovaná verze JVF DTM "${declared}" — použije se strukturně odhadnutá větev "${sniffed}".`
    );
  }
  return sniffed;
}

/**
 * Naparsuje datový soubor JVF DTM (1.4.3, 1.5.0.1, 1.5.0.2) nebo dialektu
 * (UDM, ŽXML) — verzní router (R3/R4). `verze` výsledku je vždy vyřešené id.
 * Pro protokol chyb (`ServisJVFDTM`) použij `parseErrorProtocol`.
 */
export function parseJvfDtm(xml: string): JvfDtm {
  if (isErrorProtocolXml(xml)) {
    throw new Error(
      'jvf-parser: soubor je protokol chyb (ServisJVFDTM), ne datový JVF DTM — použij parseErrorProtocol().'
    );
  }
  const version = resolveDtmVersion(xml);
  const dialect = dialectOf(version);
  if (dialect) return getParserDialect(dialect.id).parse(xml, version as DialectVersion);
  // Varování o verzi už vydal resolveDtmVersion — jádra parserů mlčí.
  const dtm =
    version === '1.4.3'
      ? parseJvfDtm143(xml, { warnUnsupportedVersion: false })
      : parseJvfDtm1501(xml, { warnUnsupportedVersion: false });
  return { ...dtm, verze: version };
}

/**
 * Katalog entit pro danou verzi (R3). `ENTITY_CATALOG` (bez argumentu, =1.4.3)
 * zůstává exportován pro zpětnou kompatibilitu.
 */
export function getEntityCatalog(version: JvfVersion | string): EntityCatalog {
  return CATALOGS[knownVersion(version)];
}

/** Tabulka číselníků `název atributu → { kód → popisek }` pro danou verzi. */
export function getEnumLabels(
  version: JvfVersion | string
): Readonly<Record<string, Record<string, string>>> {
  return LABELS[knownVersion(version)].ENUM_LABELS;
}

/** Množina názvů `xs:boolean` atributů (v XML 0/1) pro danou verzi. */
export function getBooleanAttrs(version: JvfVersion | string): ReadonlySet<string> {
  return BOOLEAN_ATTRS_BY_VERSION.get(knownVersion(version)) ?? new Set();
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
export function labelForAttribute(
  attrName: string,
  value: unknown,
  version: JvfVersion | string = DEFAULT_VERSION
): string | undefined {
  const enumLabel = getEnumLabels(version)[attrName]?.[String(value)];
  if (enumLabel !== undefined) return enumLabel;

  if (getBooleanAttrs(version).has(attrName)) {
    const s = String(value).trim().toLowerCase();
    if (s === '1' || s === 'true') return 'ano';
    if (s === '0' || s === 'false') return 'ne';
  }
  return undefined;
}

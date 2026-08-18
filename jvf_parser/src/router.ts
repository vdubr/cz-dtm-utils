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
import {
  DEFAULT_VERSION,
  isSupportedVersion,
  type JvfDtm,
  type JvfVersion,
} from 'jvf-dtm-types';
import { parseJvfDtm as parseJvfDtm143 } from './1.4.3/parser.js';
import { parseJvfDtm1501 } from './1.5.0.1/parser.js';
import { ENTITY_CATALOG as CATALOG_143 } from './1.4.3/generated/entities.js';
import {
  ENTITY_CATALOG as CATALOG_1501,
  type EntityMeta,
} from './1.5.0.1/generated/entities.js';

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

/** Vyřeší verzi souboru dle R4 (bez ohledu na ServisJVFDTM). */
export function resolveDtmVersion(xml: string): JvfVersion {
  const declared = detectVersionString(xml);
  if (declared && isSupportedVersion(declared)) return declared;
  const sniffed = sniffVersionByStructure(xml);
  if (declared) {
    console.warn(
      `jvf-parser: nepodporovaná verze JVF DTM "${declared}" — použije se strukturně odhadnutá větev "${sniffed}".`
    );
  }
  return sniffed;
}

/**
 * Naparsuje JVF DTM datový soubor (1.4.3 nebo 1.5.0.1) — verzní router (R3/R4).
 * Pro protokol chyb (`ServisJVFDTM`) použij `parseErrorProtocol`.
 */
export function parseJvfDtm(xml: string): JvfDtm {
  if (isErrorProtocolXml(xml)) {
    throw new Error(
      'jvf-parser: soubor je protokol chyb (ServisJVFDTM), ne datový JVF DTM — použij parseErrorProtocol().'
    );
  }
  const version = resolveDtmVersion(xml);
  return version === '1.5.0.1' ? parseJvfDtm1501(xml) : parseJvfDtm143(xml);
}

/**
 * Katalog entit pro danou verzi (R3). `ENTITY_CATALOG` (bez argumentu, =1.4.3)
 * zůstává exportován pro zpětnou kompatibilitu.
 */
export function getEntityCatalog(version: JvfVersion): Readonly<Record<string, EntityMeta>> {
  return version === '1.5.0.1' ? CATALOG_1501 : CATALOG_143;
}

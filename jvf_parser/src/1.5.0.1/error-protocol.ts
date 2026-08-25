/**
 * Parser integrovaného protokolu chyb JVF DTM 1.5.0.1 (R5).
 *
 * Struktura: `JVFDTM > ServisJVFDTM > ProtokolChyb >
 * {ProtokolChybDTI, ProtokolChybZPS} > Kontroly > Kontrola > SeznamChyb >
 * Chyba`. Protokol je samostatný artefakt oddělený od `JvfDtm` — viewer ho
 * zobrazí jako report, ne mapovou vrstvu.
 *
 * XSD: `docs/1.5.0.1/xsd/common/servis.xsd`.
 */
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import type { ErrorProtocol, ProtokolChyba, ProtokolKontrola } from './types.js';
import { extractText, extractAttributeValue } from '../1.4.3/xml-helpers.js';

function createParser(): XMLParser {
  return new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    removeNSPrefix: true,
    isArray: (name) => ['Kontrola', 'Chyba'].includes(name),
    parseTagValue: true,
    parseAttributeValue: true,
    trimValues: true,
  });
}

/** Posbírá skalární potomky do attributes, s výjimkou `skip` klíčů. */
function collectScalarAttrs(
  el: Record<string, unknown>,
  skip: ReadonlySet<string>
): Record<string, string | number | boolean | null> {
  const out: Record<string, string | number | boolean | null> = {};
  for (const [key, val] of Object.entries(el)) {
    if (key.startsWith('@_') || skip.has(key)) continue;
    const scalar = extractAttributeValue(val);
    if (scalar !== null) out[key] = scalar;
  }
  return out;
}

const CHYBA_SKIP = new Set(['PopisChyby', 'IDObjekt', 'LokalizaceChyby']);
const KONTROLA_SKIP = new Set(['SeznamChyb', 'KodKontroly']);

function parseChyba(el: Record<string, unknown>): ProtokolChyba {
  const chyba: ProtokolChyba = {
    attributes: collectScalarAttrs(el, CHYBA_SKIP),
  };
  const popis = extractText(el['PopisChyby']);
  if (popis != null) chyba.popis = popis;
  const objektId = extractText(el['IDObjekt']);
  if (objektId != null) chyba.objektId = objektId;
  return chyba;
}

function parseKontrola(el: Record<string, unknown>): ProtokolKontrola {
  const chyby: ProtokolChyba[] = [];
  const seznam = el['SeznamChyb'];
  if (seznam != null && typeof seznam === 'object') {
    const raw = (seznam as Record<string, unknown>)['Chyba'];
    const items = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
    for (const item of items) {
      if (typeof item === 'object' && item !== null) {
        chyby.push(parseChyba(item as Record<string, unknown>));
      }
    }
  }

  const kontrola: ProtokolKontrola = {
    chyby,
    attributes: collectScalarAttrs(el, KONTROLA_SKIP),
  };
  const kod = extractText(el['KodKontroly']);
  if (kod != null) kontrola.kod = kod;
  return kontrola;
}

function parseKontroly(sekce: Record<string, unknown> | undefined): ProtokolKontrola[] {
  if (sekce == null || typeof sekce !== 'object') return [];
  const kontrolyEl = sekce['Kontroly'];
  if (kontrolyEl == null || typeof kontrolyEl !== 'object') return [];
  const raw = (kontrolyEl as Record<string, unknown>)['Kontrola'];
  const items = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
  const out: ProtokolKontrola[] = [];
  for (const item of items) {
    if (typeof item === 'object' && item !== null) {
      out.push(parseKontrola(item as Record<string, unknown>));
    }
  }
  return out;
}

/**
 * Naparsuje protokol chyb (`ServisJVFDTM/ProtokolChyb`) na model
 * `ErrorProtocol` s oddělenými seznamy kontrol DTI a ZPS.
 */
export function parseErrorProtocol(xml: string): ErrorProtocol {
  const validation = XMLValidator.validate(xml);
  if (validation !== true) {
    const { msg, line, col } = validation.err;
    throw new Error(`Neplatný XML soubor: ${msg} (řádek ${line}, sloupec ${col})`);
  }

  const parsed = createParser().parse(xml) as Record<string, unknown>;

  // Kořen může být přímo ServisJVFDTM, nebo obalený v JVFDTM.
  let servis = parsed['ServisJVFDTM'] as Record<string, unknown> | undefined;
  if (servis == null) {
    const jvf = parsed['JVFDTM'] as Record<string, unknown> | undefined;
    if (jvf != null && typeof jvf === 'object') {
      servis = jvf['ServisJVFDTM'] as Record<string, unknown> | undefined;
    }
  }
  if (servis == null || typeof servis !== 'object') {
    throw new Error('Neplatný protokol chyb: chybí element <ServisJVFDTM>.');
  }

  const protokol = servis['ProtokolChyb'] as Record<string, unknown> | undefined;
  const verze = extractText(servis['VerzeJVFDTM']) ?? undefined;

  const dti = parseKontroly(protokol?.['ProtokolChybDTI'] as Record<string, unknown> | undefined);
  const zps = parseKontroly(protokol?.['ProtokolChybZPS'] as Record<string, unknown> | undefined);

  return {
    ...(verze !== undefined ? { verze } : {}),
    dti,
    zps,
  };
}

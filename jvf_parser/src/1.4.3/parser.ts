import { XMLParser } from 'fast-xml-parser';
import { parseGeometrieObjektu, parseOblastObjektuKI } from './geometry.js';
import { parseAtributyObjektu } from './attributes.js';
import { parseDoprovodneInformace } from './doprovodne-informace.js';
import { extractText } from './xml-helpers.js';
import type {
  JvfDtm,
  ObjektovyTyp,
  TypZapisu,
  ZaznamObjektu,
  ZapisObjektuType,
} from './types.js';

function createParser(): XMLParser {
  return new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    removeNSPrefix: true,
    isArray: (name) => ['ZaznamObjektu', 'ZaznamZPS', 'curveMember'].includes(name),
    // Preserve text content of elements that may be pure numbers
    parseTagValue: true,
    parseAttributeValue: true,
    trimValues: true,
  });
}

function parseZaznamObjektu(zaznamEl: Record<string, unknown>): ZaznamObjektu {
  const zapisRaw = zaznamEl['ZapisObjektu'];
  const zapisObjektu = (extractText(zapisRaw) ?? 'r') as ZapisObjektuType;

  const { commonAttributes, attributes } = parseAtributyObjektu(zaznamEl['AtributyObjektu']);

  const geometrie = parseGeometrieObjektu(
    zaznamEl['GeometrieObjektu'] as Record<string, unknown> | undefined
  );

  const oblastRaw = zaznamEl['OblastObjektuKI'];
  const oblastObjektuKI =
    oblastRaw != null && typeof oblastRaw === 'object'
      ? parseOblastObjektuKI(oblastRaw as Record<string, unknown>)
      : undefined;

  const result: ZaznamObjektu = {
    zapisObjektu,
    commonAttributes,
    attributes,
    geometrie,
  };

  if (oblastObjektuKI !== undefined) {
    result.oblastObjektuKI = oblastObjektuKI;
  }

  return result;
}

function parseObjektovyTyp(elementName: string, typEl: Record<string, unknown>): ObjektovyTyp {
  const nazevEl = typEl['ObjektovyTypNazev'];
  let nazev = '';
  let codeBase = '';
  let codeSuffix = '';

  if (nazevEl != null && typeof nazevEl === 'object') {
    const nazevObj = nazevEl as Record<string, unknown>;
    const textContent = nazevObj['#text'];
    if (textContent != null) nazev = String(textContent);
    // code_base and code_suffix may be parsed as numbers by fast-xml-parser
    const cb = nazevObj['@_code_base'];
    if (cb != null) codeBase = String(cb).padStart(10, '0');
    const cs = nazevObj['@_code_suffix'];
    if (cs != null) codeSuffix = String(cs).padStart(2, '0');
  } else {
    nazev = extractText(nazevEl) ?? '';
  }

  // These elements also have xmlns wrapper: {#text: ..., @_xmlns: ...}
  const kategorieObjektu = extractText(typEl['KategorieObjektu']) ?? '';
  const skupinaObjektu = extractText(typEl['SkupinaObjektu']) ?? '';
  const obsahovaCast = extractText(typEl['ObsahovaCast']) ?? '';

  const zaznamy: ZaznamObjektu[] = [];
  const zaznamyEl = typEl['ZaznamyObjektu'];
  if (zaznamyEl != null && typeof zaznamyEl === 'object') {
    const zaznamyObj = zaznamyEl as Record<string, unknown>;
    const zaznamList = zaznamyObj['ZaznamObjektu'];
    if (Array.isArray(zaznamList)) {
      for (const zaznam of zaznamList) {
        if (typeof zaznam === 'object' && zaznam !== null) {
          zaznamy.push(parseZaznamObjektu(zaznam as Record<string, unknown>));
        }
      }
    }
  }

  return {
    elementName,
    nazev,
    codeBase,
    codeSuffix,
    kategorieObjektu,
    skupinaObjektu,
    obsahovaCast,
    zaznamy,
  };
}

export function parseJvfDtm(xml: string): JvfDtm {
  const parser = createParser();
  const parsed = parser.parse(xml) as Record<string, unknown>;

  const jvfDtm = parsed['JVFDTM'] as Record<string, unknown> | undefined;
  if (jvfDtm == null) {
    throw new Error('Invalid JVF DTM XML: missing root element <JVFDTM>');
  }

  const dataJvfDtm = jvfDtm['DataJVFDTM'] as Record<string, unknown> | undefined;
  if (dataJvfDtm == null) {
    throw new Error('Invalid JVF DTM XML: missing <DataJVFDTM> element');
  }

  const verze = extractText(dataJvfDtm['VerzeJVFDTM']) ?? '';
  const datumZapisu = extractText(dataJvfDtm['DatumZapisu']) ?? '';
  const typZapisuRaw = extractText(dataJvfDtm['TypZapisu']) ?? '';
  const typZapisu = typZapisuRaw as TypZapisu;

  const dataEl = dataJvfDtm['Data'] as Record<string, unknown> | undefined;
  const objekty: ObjektovyTyp[] = [];

  if (dataEl != null && typeof dataEl === 'object') {
    for (const [key, val] of Object.entries(dataEl)) {
      if (key.startsWith('@_')) continue;
      if (typeof val !== 'object' || val === null) continue;
      // When the same element name appears multiple times, fast-xml-parser
      // produces an array instead of a single object.
      if (Array.isArray(val)) {
        for (const item of val) {
          if (typeof item === 'object' && item !== null) {
            objekty.push(parseObjektovyTyp(key, item as Record<string, unknown>));
          }
        }
      } else {
        objekty.push(parseObjektovyTyp(key, val as Record<string, unknown>));
      }
    }
  }

  const doprovodneInformace = parseDoprovodneInformace(
    dataJvfDtm['DoprovodneInformace'] as Record<string, unknown> | undefined
  );

  return {
    verze,
    datumZapisu,
    typZapisu,
    objekty,
    ...(doprovodneInformace !== undefined ? { doprovodneInformace } : {}),
  };
}

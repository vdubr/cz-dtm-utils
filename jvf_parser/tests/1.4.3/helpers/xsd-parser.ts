import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { XMLParser } from 'fast-xml-parser';

export const XSD_OBJ_DIR = join(import.meta.dirname ?? '.', '../../../docs/1.4.3/xsd/objekty');

export const xsdParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) =>
    ['xs:enumeration', 'xs:element', 'xs:sequence', 'xs:import', 'xs:attribute'].includes(name),
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
});

export const SHARED_ATTR_NAMES = new Set([
  'SpolecneAtributyVsechObjektu',
  'SpolecneAtributyObjektuZPS',
  'SpolecneAtributyObjektuDefinicnichBodu',
  'SpolecneAtributyObjektuTI',
  'SpolecneAtributyObjektuPasemTI',
  'SpolecneAtributyObjektuZPS_TI',
  'SpolecneAtributyObjektuDI',
  'SpolecneAtributyObjektuPasemDI',
  'SpolecneAtributyObjektuZameru',
]);

export interface XsdEntityInfo {
  elementName: string;
  nazev: string;
  codeBase: string;
  codeSuffix: string;
  kategorieObjektu: string;
  skupinaObjektu: string;
  obsahovaCast: string;
  sharedAttrGroup: string | null;
  specificAttrs: string[];
  hasPointGeom: boolean;
  hasCurveGeom: boolean;
  hasSurfaceGeom: boolean;
  hasMultiCurveGeom: boolean;
  geomOptional: boolean;
  hasOblastKI: boolean;
}

/** Recursively collect all xs:element items from nested XSD structures */
export function collectElements(node: Record<string, unknown>): Record<string, unknown>[] {
  const result: Record<string, unknown>[] = [];

  // Collect xs:element children
  const elements = node['xs:element'];
  if (Array.isArray(elements)) {
    for (const el of elements) {
      if (typeof el === 'object' && el !== null) {
        const elObj = el as Record<string, unknown>;
        result.push(elObj);
        // Descend into inline complexType inside this element
        const ct = elObj['xs:complexType'] as Record<string, unknown> | undefined;
        if (ct) {
          result.push(...collectElements(ct));
        }
      }
    }
  }

  // Recurse into xs:sequence children
  const seqs = node['xs:sequence'];
  if (Array.isArray(seqs)) {
    for (const s of seqs) {
      if (typeof s === 'object' && s !== null) {
        result.push(...collectElements(s as Record<string, unknown>));
      }
    }
  }

  return result;
}

export function parseXsdEntity(filePath: string): XsdEntityInfo | null {
  const xml = readFileSync(filePath, 'utf-8');
  const parsed = xsdParser.parse(xml) as Record<string, unknown>;
  const schema = parsed['xs:schema'] as Record<string, unknown>;
  if (!schema) return null;

  const topElements = schema['xs:element'];
  if (!Array.isArray(topElements) || topElements.length === 0) return null;

  const rootEl = topElements[0] as Record<string, unknown>;
  const elementName = rootEl['@_name'] as string;
  if (!elementName) return null;

  const namedTypes = schema['xs:complexType'];
  const complexType = Array.isArray(namedTypes)
    ? (namedTypes[0] as Record<string, unknown>)
    : (namedTypes as Record<string, unknown> | undefined);
  if (!complexType) return null;

  const allElements = collectElements(complexType);

  let nazev = '';
  let codeBase = '';
  let codeSuffix = '';
  let kategorieObjektu = '';
  let skupinaObjektu = '';
  let obsahovaCast = '';
  let sharedAttrGroup: string | null = null;
  const specificAttrs: string[] = [];
  let hasPointGeom = false;
  let hasCurveGeom = false;
  let hasSurfaceGeom = false;
  let hasMultiCurveGeom = false;
  let geomOptional = false;
  let hasOblastKI = false;

  for (const el of allElements) {
    const name = (el['@_name'] ?? '') as string;
    const ref = (el['@_ref'] ?? '') as string;
    const fixed = (el['@_fixed'] ?? '') as string;

    if (name === 'ObjektovyTypNazev') {
      nazev = fixed;
      const ct = el['xs:complexType'] as Record<string, unknown> | undefined;
      const sc = ct?.['xs:simpleContent'] as Record<string, unknown> | undefined;
      const ext = sc?.['xs:extension'] as Record<string, unknown> | undefined;
      if (ext) {
        const attrs = ext['xs:attribute'];
        const attrList = Array.isArray(attrs) ? attrs : attrs ? [attrs] : [];
        for (const a of attrList as Record<string, unknown>[]) {
          if (a['@_name'] === 'code_base') codeBase = (a['@_fixed'] ?? '') as string;
          if (a['@_name'] === 'code_suffix') codeSuffix = (a['@_fixed'] ?? '') as string;
        }
      }
    } else if (name === 'KategorieObjektu' && fixed) {
      kategorieObjektu = fixed;
    } else if (name === 'SkupinaObjektu' && fixed) {
      skupinaObjektu = fixed;
    } else if (name === 'ObsahovaCast' && fixed) {
      obsahovaCast = fixed;
    } else if (name === 'AtributyObjektu') {
      // Parse xs:all inside complexType
      const ct = el['xs:complexType'] as Record<string, unknown> | undefined;
      const all = ct?.['xs:all'] as Record<string, unknown> | undefined;
      if (all) {
        const attrEls = all['xs:element'];
        if (Array.isArray(attrEls)) {
          for (const a of attrEls as Record<string, unknown>[]) {
            const aRef = ((a['@_ref'] ?? '') as string).replace('atr:', '');
            if (aRef === 'SpolecneAtributyVsechObjektu') continue;
            if (SHARED_ATTR_NAMES.has(aRef)) {
              sharedAttrGroup = aRef;
            } else if (aRef) {
              specificAttrs.push(aRef);
            }
          }
        }
      }
    } else if (name === 'GeometrieObjektu') {
      geomOptional = el['@_minOccurs'] === '0';
      const geomJson = JSON.stringify(el);
      hasPointGeom = geomJson.includes('pointProperty');
      hasCurveGeom = geomJson.includes('curveProperty') && !geomJson.includes('multiCurveProperty');
      hasSurfaceGeom = geomJson.includes('surfaceProperty');
      hasMultiCurveGeom = geomJson.includes('multiCurveProperty');
    } else if (ref === 'atr:OblastObjektuKI') {
      hasOblastKI = true;
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
    sharedAttrGroup,
    specificAttrs,
    hasPointGeom,
    hasCurveGeom,
    hasSurfaceGeom,
    hasMultiCurveGeom,
    geomOptional,
    hasOblastKI,
  };
}

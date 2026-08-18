/**
 * XSD → TypeScript code generator for JVF DTM.
 *
 * Verze se předává argumentem: `tsx scripts/generate-types.ts [version]`
 * (default `1.4.3`). Podporováno `1.4.3` i `1.5.0.1`.
 *
 * Reads all XSD files in `docs/<version>/xsd/objekty/` and the common
 * schemas, then generates:
 *   src/<version>/generated/enums.ts         – all integer enum types
 *   src/<version>/generated/shared-attrs.ts  – shared attribute group ifaces
 *   src/<version>/generated/entities.ts      – per-entity interfaces + catalog
 *
 * 1.5.0.1 má oproti 1.4.3 jinou strukturu objektových XSD (abstraktní
 * `ZaznamObjektu` + substituční skupina `Ins/Upd/Del/RefV…`, geometrie
 * odkazovaná typem `cmn:GeometrieObjektu…Type`, sdílené skupiny přes
 * `type=` místo `ref=`). 1.4.3 větev zůstává beze změny (R1).
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const VERSION = process.argv[2] ?? '1.4.3';
const ROOT = resolve(import.meta.dirname ?? '.', '..');
const XSD_DIR = join(ROOT, `docs/${VERSION}/xsd`);
const OUT_DIR = join(ROOT, `src/${VERSION}/generated`);
/** Struktura objektových XSD 1.5.0.1 (abstraktní ZaznamObjektu). */
const IS_1501 = VERSION === '1.5.0.1';

// ---------------------------------------------------------------------------
// XSD parser
// ---------------------------------------------------------------------------

const xsdParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) =>
    [
      'xs:enumeration',
      'xs:element',
      'xs:sequence',
      'xs:import',
    ].includes(name),
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
});

function parseXsd(path: string): Record<string, unknown> {
  const xml = readFileSync(path, 'utf-8');
  return xsdParser.parse(xml) as Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// 1. Extract enums from atributy.xsd
// ---------------------------------------------------------------------------

interface EnumValue {
  value: string;
  doc: string;
}

interface EnumDef {
  name: string;
  baseType: string;
  values: EnumValue[];
}

interface ElementTypeDef {
  name: string;
  type: string; // 'string' | 'integer' | 'nonNegativeInteger' | 'boolean' | 'dateTime' | 'date' | 'enum'
  enumName?: string;
}

function extractEnumsAndElements(): {
  enums: EnumDef[];
  elements: Map<string, ElementTypeDef>;
} {
  const xml = readFileSync(join(XSD_DIR, 'common/atributy.xsd'), 'utf-8');
  const parsed = xsdParser.parse(xml) as Record<string, unknown>;
  const schema = parsed['xs:schema'] as Record<string, unknown>;
  const topElements = schema['xs:element'];

  const enums: EnumDef[] = [];
  const elements = new Map<string, ElementTypeDef>();

  if (!Array.isArray(topElements)) return { enums, elements };

  for (const el of topElements) {
    const elObj = el as Record<string, unknown>;
    const name = elObj['@_name'] as string;
    if (!name) continue;

    // Check if it's a complexType (shared attr group) - skip those
    if (elObj['xs:complexType']) {
      continue;
    }

    // Check for inline simpleType with restriction/enumeration
    const simpleType = elObj['xs:simpleType'] as Record<string, unknown> | undefined;
    if (simpleType) {
      const restriction = simpleType['xs:restriction'] as Record<string, unknown> | undefined;
      if (restriction) {
        const baseType = (restriction['@_base'] as string) ?? 'xs:string';
        const enumerations = restriction['xs:enumeration'];
        if (Array.isArray(enumerations) && enumerations.length > 0) {
          const values: EnumValue[] = [];
          for (const en of enumerations) {
            const enObj = en as Record<string, unknown>;
            const value = String(enObj['@_value'] ?? '');
            const annotation = enObj['xs:annotation'] as Record<string, unknown> | undefined;
            const docEl = annotation?.['xs:documentation'];
            const doc = typeof docEl === 'string' ? docEl : '';
            values.push({ value, doc });
          }
          enums.push({ name, baseType: baseType.replace('xs:', ''), values });
          elements.set(name, { name, type: 'enum', enumName: name });
          continue;
        }
        // simpleType with restriction but no enumeration (e.g. length restriction)
        elements.set(name, { name, type: baseType.replace('xs:', '') });
        continue;
      }
    }

    // Plain typed element
    const type = (elObj['@_type'] as string) ?? 'xs:string';
    elements.set(name, { name, type: type.replace('xs:', '') });
  }

  return { enums, elements };
}

// ---------------------------------------------------------------------------
// 2. Extract entity definitions from objekty/*.xsd
// ---------------------------------------------------------------------------

type GeomType = 'point' | 'curve' | 'surface' | 'surface+multiCurve';

interface SharedAttrGroup {
  name: string;
  tsName: string;
}

const SHARED_ATTR_GROUPS: SharedAttrGroup[] = [
  { name: 'SpolecneAtributyObjektuZPS', tsName: 'SharedAttrsZPS' },
  { name: 'SpolecneAtributyObjektuDefinicnichBodu', tsName: 'SharedAttrsDefBod' },
  { name: 'SpolecneAtributyObjektuTI', tsName: 'SharedAttrsTI' },
  { name: 'SpolecneAtributyObjektuPasemTI', tsName: 'SharedAttrsPasemTI' },
  { name: 'SpolecneAtributyObjektuZPS_TI', tsName: 'SharedAttrsZPS_TI' },
  { name: 'SpolecneAtributyObjektuDI', tsName: 'SharedAttrsDI' },
  { name: 'SpolecneAtributyObjektuPasemDI', tsName: 'SharedAttrsPasemDI' },
  { name: 'SpolecneAtributyObjektuZameru', tsName: 'SharedAttrsZameru' },
  // 1.5.0.1 (PSPI) — pro 1.4.3 se v objektech nevyskytuje, je tedy neškodné
  { name: 'SpolecneAtributyObjektuPSPI', tsName: 'SharedAttrsPSPI' },
];

/**
 * Mapování názvu geometrického typu (`cmn:GeometrieObjektu…Type`, 1.5.0.1)
 * na `GeomType`. `PlochaZPSType` = Plocha2D (Polygon) + Obvod3D (MultiCurve).
 */
const GEOM_TYPE_MAP_1501: Record<string, GeomType> = {
  GeometrieObjektuBod2DType: 'point',
  GeometrieObjektuBod3DType: 'point',
  GeometrieObjektuLinie2DType: 'curve',
  GeometrieObjektuLinie3DType: 'curve',
  GeometrieObjektuPlocha2DDTIType: 'surface',
  GeometrieObjektuPlocha3DDTIType: 'surface',
  GeometrieObjektuPlochaZPSType: 'surface+multiCurve',
};

const SHARED_ATTR_NAMES = new Set(SHARED_ATTR_GROUPS.map((g) => g.name));

interface EntityDef {
  elementName: string;
  nazev: string;
  codeBase: string;
  codeSuffix: string;
  kategorieObjektu: string;
  skupinaObjektu: string;
  obsahovaCast: string;
  sharedAttrGroup: string | null;
  specificAttrs: string[];
  geomType: GeomType;
  geomOptional: boolean;
  hasOblastKI: boolean;
}

function extractEntity(xsdPath: string): EntityDef | null {
  try {
    const parsed = parseXsd(xsdPath);
    const schema = parsed['xs:schema'] as Record<string, unknown>;
    if (!schema) return null;

    // Find the root element
    const topElements = schema['xs:element'];
    if (!Array.isArray(topElements) || topElements.length === 0) return null;

    const rootEl = topElements[0] as Record<string, unknown>;
    const elementName = rootEl['@_name'] as string;
    if (!elementName) return null;

    // Get the complexType (inline or named)
    let complexType: Record<string, unknown> | null = null;

    // Check for named complexType
    const namedTypes = schema['xs:complexType'];
    if (namedTypes) {
      const types = Array.isArray(namedTypes) ? namedTypes : [namedTypes];
      complexType = types[0] as Record<string, unknown>;
    }

    if (!complexType) return null;

    // Navigate into the sequence to find fixed elements
    const seqItems = flattenSequence(complexType);

    let nazev = '';
    let codeBase = '';
    let codeSuffix = '';
    let kategorieObjektu = '';
    let skupinaObjektu = '';
    let obsahovaCast = '';
    let sharedAttrGroup: string | null = null;
    const specificAttrs: string[] = [];
    let geomType: GeomType = 'point';
    let geomOptional = false;
    let hasOblastKI = false;

    for (const item of seqItems) {
      const itemObj = item as Record<string, unknown>;
      const itemName = (itemObj['@_name'] ?? itemObj['@_ref'] ?? '') as string;
      const fixed = itemObj['@_fixed'] as string | undefined;

      if (itemName === 'ObjektovyTypNazev') {
        // Extract fixed text, code_base, code_suffix from the complexType/simpleContent
        nazev = (fixed ?? '') as string;
        const ct = itemObj['xs:complexType'] as Record<string, unknown> | undefined;
        if (ct) {
          const sc = ct['xs:simpleContent'] as Record<string, unknown> | undefined;
          const ext = sc?.['xs:extension'] as Record<string, unknown> | undefined;
          if (ext) {
            const attrs = ext['xs:attribute'];
            const attrList = Array.isArray(attrs) ? attrs : attrs ? [attrs] : [];
            for (const a of attrList) {
              const aObj = a as Record<string, unknown>;
              if (aObj['@_name'] === 'code_base') codeBase = (aObj['@_fixed'] ?? '') as string;
              if (aObj['@_name'] === 'code_suffix') codeSuffix = (aObj['@_fixed'] ?? '') as string;
            }
          }
        }
      } else if (itemName === 'KategorieObjektu' && fixed) {
        kategorieObjektu = fixed;
      } else if (itemName === 'SkupinaObjektu' && fixed) {
        skupinaObjektu = fixed;
      } else if (itemName === 'ObsahovaCast' && fixed) {
        obsahovaCast = fixed;
      } else if (itemName === 'ZaznamyObjektu') {
        // Dive into ZaznamyObjektu > ZaznamObjektu > AtributyObjektu / GeometrieObjektu
        const zaznamItems = deepFindZaznamObjektuItems(itemObj);
        for (const zi of zaznamItems) {
          const ziObj = zi as Record<string, unknown>;
          const ziName = (ziObj['@_name'] ?? ziObj['@_ref'] ?? '') as string;
          const ziRef = (ziObj['@_ref'] ?? '') as string;

          if (ziName === 'AtributyObjektu') {
            // Parse the xs:all inside
            const attrItems = flattenAll(ziObj);
            for (const ai of attrItems) {
              const aiObj = ai as Record<string, unknown>;
              const aiRef = ((aiObj['@_ref'] ?? '') as string).replace('atr:', '');
              if (aiRef === 'SpolecneAtributyVsechObjektu') continue;
              if (SHARED_ATTR_NAMES.has(aiRef)) {
                sharedAttrGroup = aiRef;
              } else if (aiRef) {
                specificAttrs.push(aiRef);
              }
            }
          } else if (ziName === 'GeometrieObjektu') {
            geomOptional = ziObj['@_minOccurs'] === '0';
            geomType = detectGeomType(ziObj);
          } else if (ziRef === 'atr:OblastObjektuKI') {
            hasOblastKI = true;
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
      sharedAttrGroup,
      specificAttrs,
      geomType,
      geomOptional,
      hasOblastKI,
    };
  } catch {
    return null;
  }
}

function flattenSequence(obj: Record<string, unknown>): unknown[] {
  const result: unknown[] = [];

  function collect(node: Record<string, unknown>): void {
    // Collect any xs:element children
    const elements = node['xs:element'];
    if (Array.isArray(elements)) {
      for (const el of elements) {
        if (typeof el === 'object' && el !== null) {
          result.push(el);
        }
      }
    }

    // Recurse into xs:sequence children
    const seqs = node['xs:sequence'];
    if (Array.isArray(seqs)) {
      for (const s of seqs) {
        if (typeof s === 'object' && s !== null) {
          collect(s as Record<string, unknown>);
        }
      }
    }
  }

  collect(obj);
  return result;
}

function flattenAll(obj: Record<string, unknown>): unknown[] {
  const result: unknown[] = [];
  const ct = obj['xs:complexType'] as Record<string, unknown> | undefined;
  if (ct) {
    const all = ct['xs:all'] as Record<string, unknown> | undefined;
    if (all) {
      const elements = all['xs:element'];
      if (Array.isArray(elements)) return elements;
    }
  }
  return result;
}

function deepFindZaznamObjektuItems(zaznamyEl: Record<string, unknown>): unknown[] {
  // Navigate: ZaznamyObjektu > complexType > sequence > ZaznamObjektu > complexType > sequence > items
  const ct1 = zaznamyEl['xs:complexType'] as Record<string, unknown> | undefined;
  if (!ct1) return [];
  const seq1Items = flattenSequence(ct1);
  for (const item of seq1Items) {
    const itemObj = item as Record<string, unknown>;
    if ((itemObj['@_name'] ?? '') === 'ZaznamObjektu') {
      const ct2 = itemObj['xs:complexType'] as Record<string, unknown> | undefined;
      if (ct2) {
        return flattenSequence(ct2);
      }
    }
  }
  return [];
}

function detectGeomType(geomEl: Record<string, unknown>): GeomType {
  const json = JSON.stringify(geomEl);
  const hasSurface = json.includes('surfaceProperty');
  const hasMultiCurve = json.includes('multiCurveProperty');
  const hasCurve = json.includes('curveProperty') && !hasMultiCurve;
  const hasPoint = json.includes('pointProperty');

  if (hasSurface && hasMultiCurve) return 'surface+multiCurve';
  if (hasSurface) return 'surface';
  if (hasCurve) return 'curve';
  return 'point';
}

// ---------------------------------------------------------------------------
// 2b. Entity extraction — JVF DTM 1.5.0.1 structure
// ---------------------------------------------------------------------------

/** Vrátí mapu named complexType → uzel z `xs:schema`. */
function complexTypesByName(schema: Record<string, unknown>): Map<string, Record<string, unknown>> {
  const cts = schema['xs:complexType'];
  const arr = Array.isArray(cts) ? cts : cts ? [cts] : [];
  const map = new Map<string, Record<string, unknown>>();
  for (const t of arr) {
    const o = t as Record<string, unknown>;
    const n = o['@_name'] as string | undefined;
    if (n) map.set(n, o);
  }
  return map;
}

/**
 * Extrakce entity z objektového XSD 1.5.0.1.
 *
 * Metadata (nazev/code_base/…/ObsahovaCast) se čtou z hlavního typu
 * (`<root> type="…Type"`). Atributy a geometrie z kanonického záznamového
 * typu `Ins` (existuje u všech 393 objektů; fallback `RefV`).
 */
function extractEntity1501(xsdPath: string): EntityDef | null {
  try {
    const parsed = parseXsd(xsdPath);
    const schema = parsed['xs:schema'] as Record<string, unknown>;
    if (!schema) return null;

    const topElements = schema['xs:element'];
    if (!Array.isArray(topElements) || topElements.length === 0) return null;
    const rootEl = topElements[0] as Record<string, unknown>;
    const elementName = rootEl['@_name'] as string;
    if (!elementName) return null;

    const typeByName = complexTypesByName(schema);
    const rootTypeName = ((rootEl['@_type'] as string | undefined) ?? '').replace(/^[a-z]+:/, '');
    const mainType = rootTypeName ? typeByName.get(rootTypeName) : undefined;
    if (!mainType) return null;

    let nazev = '';
    let codeBase = '';
    let codeSuffix = '';
    let kategorieObjektu = '';
    let skupinaObjektu = '';
    let obsahovaCast = '';

    for (const item of flattenSequence(mainType)) {
      const itemObj = item as Record<string, unknown>;
      const itemName = (itemObj['@_name'] ?? '') as string;
      const fixed = itemObj['@_fixed'] as string | undefined;
      if (itemName === 'ObjektovyTypNazev') {
        nazev = (fixed ?? '') as string;
        const ct = itemObj['xs:complexType'] as Record<string, unknown> | undefined;
        const sc = ct?.['xs:simpleContent'] as Record<string, unknown> | undefined;
        const ext = sc?.['xs:extension'] as Record<string, unknown> | undefined;
        if (ext) {
          const attrs = ext['xs:attribute'];
          const attrList = Array.isArray(attrs) ? attrs : attrs ? [attrs] : [];
          for (const a of attrList) {
            const aObj = a as Record<string, unknown>;
            if (aObj['@_name'] === 'code_base') codeBase = (aObj['@_fixed'] ?? '') as string;
            if (aObj['@_name'] === 'code_suffix') codeSuffix = (aObj['@_fixed'] ?? '') as string;
          }
        }
      } else if (itemName === 'KategorieObjektu' && fixed) {
        kategorieObjektu = fixed;
      } else if (itemName === 'SkupinaObjektu' && fixed) {
        skupinaObjektu = fixed;
      } else if (itemName === 'ObsahovaCast' && fixed) {
        obsahovaCast = fixed;
      }
    }

    // Kanonický záznamový typ: Ins (u všech objektů), fallback RefV.
    const recordType = typeByName.get('Ins') ?? typeByName.get('RefV') ?? null;
    let sharedAttrGroup: string | null = null;
    const specificAttrs: string[] = [];
    let geomType: GeomType = 'point';
    let geomOptional = true;

    if (recordType) {
      for (const ri of flattenSequence(recordType)) {
        const riObj = ri as Record<string, unknown>;
        const riName = (riObj['@_name'] ?? '') as string;
        if (riName === 'AtributyObjektu') {
          for (const ai of flattenAll(riObj)) {
            const aiObj = ai as Record<string, unknown>;
            const aiName = (aiObj['@_name'] ?? '') as string;
            const aiRef = ((aiObj['@_ref'] ?? '') as string).replace('atr:', '');
            if (aiName === 'SpolecneAtributyVsechObjektu' || aiRef === 'SpolecneAtributyVsechObjektu') {
              continue;
            }
            // 1.5.0.1: sdílená skupina přes `name=` (+ type=); specifické atr. přes `ref=`.
            if (SHARED_ATTR_NAMES.has(aiName)) {
              sharedAttrGroup = aiName;
            } else if (SHARED_ATTR_NAMES.has(aiRef)) {
              sharedAttrGroup = aiRef;
            } else if (aiRef) {
              specificAttrs.push(aiRef);
            }
          }
        } else if (riName === 'GeometrieObjektu') {
          geomOptional = riObj['@_minOccurs'] === '0';
          const gt = ((riObj['@_type'] ?? '') as string).replace(/^[a-z]+:/, '');
          geomType = GEOM_TYPE_MAP_1501[gt] ?? 'point';
        }
      }
    }

    // PSPI normalizace — objekty s code_base 0200000* patří do obsahové části PSPI
    // (v XSD mají fixed ObsahovaCast DI/TI, ale downstream je řadí do PSPI).
    if (codeBase.startsWith('0200000')) obsahovaCast = 'PSPI';

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
      geomType,
      geomOptional,
      hasOblastKI: false, // KI zrušeno v 1.5.0.1
    };
  } catch {
    return null;
  }
}

/**
 * Extrakce polí sdílených skupin z `common/atributy.xsd` (1.5.0.1).
 *
 * Skupiny existují jako kontextové varianty complexType (`…RefType`,
 * `…InsType`, `…UpdType`, `…DelType`, …). Pole se sjednotí přes všechny
 * varianty dané skupiny; type-level jsou všechna volitelná (napříč kontexty
 * se povinnost liší a parser je stejně data-driven).
 */
function extractSharedGroups1501(): Record<string, string[]> {
  const xml = readFileSync(join(XSD_DIR, 'common/atributy.xsd'), 'utf-8');
  const parsed = xsdParser.parse(xml) as Record<string, unknown>;
  const schema = parsed['xs:schema'] as Record<string, unknown>;
  const cts = schema['xs:complexType'];
  const arr = Array.isArray(cts) ? cts : cts ? [cts] : [];

  const result: Record<string, string[]> = {};
  for (const g of SHARED_ATTR_GROUPS) {
    const fields = new Set<string>();
    for (const t of arr) {
      const o = t as Record<string, unknown>;
      const n = (o['@_name'] ?? '') as string;
      // Kontextové varianty: název = jméno skupiny + kontext (Ref/Ins/Upd/Del…)
      // + "Type". Pozor: `…ZPS` je prefixem `…ZPS_TI` → po jménu skupiny nesmí
      // následovat `_` (jinak by ZPS pohltilo pole skupiny ZPS_TI).
      if (!n.startsWith(g.name) || !n.endsWith('Type')) continue;
      if (n.charAt(g.name.length) === '_') continue;
      const container =
        (o['xs:all'] as Record<string, unknown> | undefined) ??
        (o['xs:sequence'] as Record<string, unknown> | undefined);
      const els = container?.['xs:element'];
      const elArr = Array.isArray(els) ? els : els ? [els] : [];
      for (const e of elArr) {
        const eObj = e as Record<string, unknown>;
        const name = (((eObj['@_ref'] ?? eObj['@_name']) ?? '') as string).replace('atr:', '');
        if (name) fields.add(name);
      }
    }
    if (fields.size > 0) result[g.tsName] = [...fields];
  }
  return result;
}

// ---------------------------------------------------------------------------
// 3. Code generation
// ---------------------------------------------------------------------------

function toTsEnumName(name: string): string {
  return name;
}

function xsdTypeToTs(type: string): string {
  switch (type) {
    case 'string':
      return 'string';
    case 'integer':
    case 'nonNegativeInteger':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'dateTime':
    case 'date':
      return 'string';
    default:
      return 'string';
  }
}

function generateEnumsFile(enums: EnumDef[]): string {
  const lines: string[] = [
    `// Auto-generated from JVF DTM ${VERSION} XSD — DO NOT EDIT`,
    '// Run: npx tsx scripts/generate-types.ts <version>',
    '',
  ];

  for (const e of enums) {
    lines.push(`/** ${e.name} */`);
    lines.push(`export const ${toTsEnumName(e.name)} = {`);
    for (const v of e.values) {
      const key = makeEnumKey(v.value, v.doc);
      const val = e.baseType === 'integer' ? v.value : `'${v.value}'`;
      const comment = v.doc ? ` // ${v.doc}` : '';
      lines.push(`  ${key}: ${val},${comment}`);
    }
    lines.push('} as const;');
    lines.push(
      `export type ${toTsEnumName(e.name)}Value = (typeof ${toTsEnumName(e.name)})[keyof typeof ${toTsEnumName(e.name)}];`
    );
    lines.push('');
  }

  return lines.join('\n');
}

function makeEnumKey(value: string, doc: string): string {
  // Use the doc to derive a readable key; fall back to VALUE_<n>
  if (doc) {
    const key = doc
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // strip diacritics
      .replace(/[^a-zA-Z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .toUpperCase();
    if (key && /^[A-Z]/.test(key)) return key;
  }
  return `VALUE_${value.replace('-', 'MINUS_')}`;
}

/**
 * Runtime tabulka `kód → český popisek` pro číselníkové atributy (A1).
 *
 * Na rozdíl od `enums.ts` (SLUG → kód) drží `ENUM_LABELS` mapu
 * `název atributu → { kód → text }` z `xs:documentation`. Používá viewer
 * k doplnění popisků číselníkových atributů v panelu prvku.
 * Escaping přes `JSON.stringify` (A4 — české popisky s apostrofy/uvozovkami).
 */
function generateEnumLabelsFile(enums: EnumDef[]): string {
  const lines: string[] = [
    `// Auto-generated from JVF DTM ${VERSION} XSD — DO NOT EDIT`,
    '// Run: npx tsx scripts/generate-types.ts <version>',
    '//',
    '// Mapa: název číselníkového atributu → { kód → český popisek }.',
    '',
    'export const ENUM_LABELS: Record<string, Record<string, string>> = {',
  ];

  const seen = new Set<string>();
  for (const e of enums) {
    if (seen.has(e.name)) {
      console.warn(`  WARN: duplicitní číselník v ENUM_LABELS: ${e.name}`);
      continue;
    }
    seen.add(e.name);
    lines.push(`  ${JSON.stringify(e.name)}: {`);
    for (const v of e.values) {
      if (!v.doc) continue; // hodnoty bez popisku přeskočit (graceful, A3)
      lines.push(`    ${JSON.stringify(v.value)}: ${JSON.stringify(v.doc)},`);
    }
    lines.push('  },');
  }

  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

function generateSharedAttrsFile(
  elements: Map<string, ElementTypeDef>,
  enums: EnumDef[]
): string {
  const enumNames = new Set(enums.map((e) => e.name));
  const lines: string[] = [
    '// Auto-generated from JVF DTM 1.4.3 XSD — DO NOT EDIT',
    '',
    "import type { CommonAttributes } from '../types.js';",
    '',
  ];

  // Shared attribute groups - hardcoded structure from XSD analysis
  const groups: Record<string, { fields: Array<{ name: string; optional: boolean }> }> = {
    SharedAttrsZPS: {
      fields: [
        { name: 'UrovenUmisteniObjektuZPS', optional: false },
        { name: 'TridaPresnostiPoloha', optional: false },
        { name: 'TridaPresnostiVyska', optional: false },
        { name: 'ZpusobPorizeniZPS', optional: false },
        { name: 'ICS', optional: true },
      ],
    },
    SharedAttrsDefBod: {
      fields: [
        { name: 'UrovenUmisteniObjektuZPS', optional: false },
        { name: 'ICS', optional: true },
      ],
    },
    SharedAttrsTI: {
      fields: [
        { name: 'IDVlastnika', optional: true },
        { name: 'IDProvozovateleZeZakona', optional: true },
        { name: 'IDSpravce', optional: true },
        { name: 'IDProvozovatele', optional: true },
        { name: 'IDExterni', optional: true },
        { name: 'NeuplnaData', optional: false },
        { name: 'UrovenUmisteniObjektuTI', optional: false },
        { name: 'TridaPresnostiPoloha', optional: false },
        { name: 'TridaPresnostiVyska', optional: false },
        { name: 'ZpusobPorizeniTI', optional: false },
        { name: 'EvidencniCisloObjektu', optional: true },
        { name: 'ICS', optional: true },
        { name: 'KritickaTI', optional: true },
      ],
    },
    SharedAttrsPasemTI: {
      fields: [
        { name: 'IDVlastnika', optional: true },
        { name: 'IDProvozovateleZeZakona', optional: true },
        { name: 'IDSpravce', optional: true },
        { name: 'IDProvozovatele', optional: true },
        { name: 'IDExterni', optional: true },
        { name: 'NeuplnaData', optional: false },
        { name: 'UrovenUmisteniObjektuTI', optional: false },
        { name: 'TridaPresnostiPoloha', optional: false },
        { name: 'ZpusobPorizeniTI', optional: false },
        { name: 'EvidencniCisloObjektu', optional: true },
        { name: 'KritickaTI', optional: true },
      ],
    },
    SharedAttrsZPS_TI: {
      fields: [
        { name: 'UrovenUmisteniObjektuTI', optional: false },
        { name: 'TridaPresnostiPoloha', optional: false },
        { name: 'TridaPresnostiVyska', optional: false },
        { name: 'ZpusobPorizeniTI', optional: false },
        { name: 'StavObjektu', optional: false },
        { name: 'ICS', optional: true },
      ],
    },
    SharedAttrsDI: {
      fields: [
        { name: 'IDVlastnika', optional: true },
        { name: 'IDSpravce', optional: true },
        { name: 'IDProvozovatele', optional: true },
        { name: 'IDExterni', optional: true },
        { name: 'NeuplnaData', optional: false },
        { name: 'UrovenUmisteniObjektuDI', optional: false },
        { name: 'TridaPresnostiPoloha', optional: false },
        { name: 'TridaPresnostiVyska', optional: false },
        { name: 'ZpusobPorizeniDI', optional: false },
        { name: 'EvidencniCisloObjektu', optional: true },
        { name: 'ICS', optional: true },
      ],
    },
    SharedAttrsPasemDI: {
      fields: [
        { name: 'IDVlastnika', optional: true },
        { name: 'IDSpravce', optional: true },
        { name: 'IDProvozovatele', optional: true },
        { name: 'IDExterni', optional: true },
        { name: 'NeuplnaData', optional: false },
        { name: 'UrovenUmisteniObjektuDI', optional: false },
        { name: 'TridaPresnostiPoloha', optional: false },
        { name: 'ZpusobPorizeniDI', optional: false },
        { name: 'EvidencniCisloObjektu', optional: true },
      ],
    },
    SharedAttrsZameru: {
      fields: [
        { name: 'IDVlastnika', optional: true },
        { name: 'IDSpravce', optional: true },
        { name: 'IDProvozovatele', optional: true },
        { name: 'IDExterni', optional: true },
        { name: 'EvidencniCisloObjektu', optional: true },
      ],
    },
  };

  for (const [tsName, group] of Object.entries(groups)) {
    lines.push(`export interface ${tsName} {`);
    for (const field of group.fields) {
      const elDef = elements.get(field.name);
      let tsType: string;
      if (elDef?.type === 'enum' && enumNames.has(field.name)) {
        tsType = 'number';
      } else if (elDef) {
        tsType = xsdTypeToTs(elDef.type);
      } else {
        tsType = 'string';
      }
      const opt = field.optional ? '?' : '';
      lines.push(`  ${field.name}${opt}: ${tsType};`);
    }
    lines.push('}');
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * shared-attrs.ts pro 1.5.0.1 — pole se berou z `extractSharedGroups1501`
 * (sjednocení kontextových variant), všechna type-level volitelná.
 */
function generateSharedAttrsFile1501(
  elements: Map<string, ElementTypeDef>,
  enums: EnumDef[],
  groupFields: Record<string, string[]>
): string {
  const enumNames = new Set(enums.map((e) => e.name));
  const lines: string[] = [
    `// Auto-generated from JVF DTM ${VERSION} XSD — DO NOT EDIT`,
    '',
    "import type { CommonAttributes } from '../types.js';",
    '',
  ];

  for (const g of SHARED_ATTR_GROUPS) {
    const fields = groupFields[g.tsName];
    if (!fields || fields.length === 0) continue;
    lines.push(`export interface ${g.tsName} {`);
    for (const field of fields) {
      const elDef = elements.get(field);
      let tsType: string;
      if (elDef?.type === 'enum' && enumNames.has(field)) {
        tsType = 'number';
      } else if (elDef) {
        tsType = xsdTypeToTs(elDef.type);
      } else {
        tsType = 'string';
      }
      lines.push(`  ${field}?: ${tsType};`);
    }
    lines.push('}');
    lines.push('');
  }

  // `CommonAttributes` je re-exportováno pro symetrii s 1.4.3 shared-attrs.
  lines.push('export type { CommonAttributes };');
  lines.push('');

  return lines.join('\n');
}

function generateEntitiesFile(
  entities: EntityDef[],
  elements: Map<string, ElementTypeDef>,
  enums: EnumDef[]
): string {
  const enumNames = new Set(enums.map((e) => e.name));
  // 1.5.0.1 přidává obsahovou část PSPI (code_base 0200000*).
  const castUnion = IS_1501 ? "'ZPS' | 'TI' | 'DI' | 'PSPI' | ''" : "'ZPS' | 'TI' | 'DI' | ''";
  const lines: string[] = [
    `// Auto-generated from JVF DTM ${VERSION} XSD — DO NOT EDIT`,
    '// Run: npx tsx scripts/generate-types.ts <version>',
    '',
    "import type { Geometry, GmlPolygon, CommonAttributes } from '../types.js';",
    "import type {",
  ];

  // Import shared attr types actually used
  const usedSharedGroups = new Set<string>();
  for (const e of entities) {
    if (e.sharedAttrGroup) {
      const g = SHARED_ATTR_GROUPS.find((g) => g.name === e.sharedAttrGroup);
      if (g) usedSharedGroups.add(g.tsName);
    }
  }
  if (usedSharedGroups.size > 0) {
    lines.push(`  ${[...usedSharedGroups].join(',\n  ')},`);
    lines.push("} from './shared-attrs.js';");
  } else {
    // Remove the dangling import type {
    lines.pop();
  }
  lines.push('');

  // GeomType
  lines.push("export type GeomKind = 'point' | 'curve' | 'surface' | 'surface+multiCurve';");
  lines.push('');

  // Entity metadata interface
  lines.push('export interface EntityMeta {');
  lines.push('  elementName: string;');
  lines.push('  nazev: string;');
  lines.push('  codeBase: string;');
  lines.push('  codeSuffix: string;');
  lines.push('  kategorieObjektu: string;');
  lines.push('  skupinaObjektu: string;');
  lines.push(`  obsahovaCast: ${castUnion};`);
  lines.push('  sharedAttrGroup: string | null;');
  lines.push('  specificAttrs: readonly string[];');
  lines.push('  geomType: GeomKind;');
  lines.push('  geomOptional: boolean;');
  lines.push('  hasOblastKI: boolean;');
  lines.push('}');
  lines.push('');

  // Generate per-entity attribute interface
  for (const entity of entities) {
    if (entity.specificAttrs.length === 0) continue;

    const ifaceName = `${entity.elementName}Attrs`;
    lines.push(`export interface ${ifaceName} {`);
    for (const attrName of entity.specificAttrs) {
      const elDef = elements.get(attrName);
      let tsType: string;
      if (elDef?.type === 'enum' && enumNames.has(attrName)) {
        tsType = 'number';
      } else if (elDef) {
        tsType = xsdTypeToTs(elDef.type);
      } else {
        tsType = 'string | number | boolean | null';
      }
      lines.push(`  ${attrName}?: ${tsType};`);
    }
    lines.push('}');
    lines.push('');
  }

  // Generate the catalog
  lines.push(
    `/** Catalog of all ${entities.length} JVF DTM entity types, keyed by XML element name */`
  );
  lines.push('export const ENTITY_CATALOG: Record<string, EntityMeta> = {');
  for (const entity of entities) {
    lines.push(`  ${JSON.stringify(entity.elementName)}: {`);
    lines.push(`    elementName: ${JSON.stringify(entity.elementName)},`);
    lines.push(`    nazev: ${JSON.stringify(entity.nazev)},`);
    lines.push(`    codeBase: ${JSON.stringify(entity.codeBase)},`);
    lines.push(`    codeSuffix: ${JSON.stringify(entity.codeSuffix)},`);
    lines.push(`    kategorieObjektu: ${JSON.stringify(entity.kategorieObjektu)},`);
    lines.push(`    skupinaObjektu: ${JSON.stringify(entity.skupinaObjektu)},`);
    lines.push(`    obsahovaCast: ${JSON.stringify(entity.obsahovaCast)} as ${castUnion},`);
    lines.push(`    sharedAttrGroup: ${JSON.stringify(entity.sharedAttrGroup)},`);
    lines.push(`    specificAttrs: ${JSON.stringify(entity.specificAttrs)},`);
    lines.push(`    geomType: ${JSON.stringify(entity.geomType)},`);
    lines.push(`    geomOptional: ${entity.geomOptional},`);
    lines.push(`    hasOblastKI: ${entity.hasOblastKI},`);
    lines.push('  },');
  }
  lines.push('};');
  lines.push('');

  // Helper type: look up entity attrs by element name
  lines.push('/** Map of element names to their specific attribute interface types */');
  lines.push('export type EntityAttrsMap = {');
  for (const entity of entities) {
    if (entity.specificAttrs.length > 0) {
      lines.push(`  ${JSON.stringify(entity.elementName)}: ${entity.elementName}Attrs;`);
    } else {
      lines.push(
        `  ${JSON.stringify(entity.elementName)}: Record<string, never>;`
      );
    }
  }
  lines.push('};');
  lines.push('');

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  console.log(`Generating JVF DTM ${VERSION} types (structure: ${IS_1501 ? '1.5.0.1' : '1.4.3'})`);
  console.log('Extracting enums and element types from atributy.xsd...');
  const { enums, elements } = extractEnumsAndElements();
  console.log(`  Found ${enums.length} enums, ${elements.size} elements`);

  console.log('Extracting entity definitions from objekty/*.xsd...');
  const objDir = join(XSD_DIR, 'objekty');
  const xsdFiles = readdirSync(objDir)
    .filter((f) => f.endsWith('.xsd'))
    .sort();

  const entities: EntityDef[] = [];
  let failed = 0;
  for (const file of xsdFiles) {
    const entity = IS_1501
      ? extractEntity1501(join(objDir, file))
      : extractEntity(join(objDir, file));
    if (entity) {
      entities.push(entity);
    } else {
      console.warn(`  WARN: failed to parse ${file}`);
      failed++;
    }
  }
  console.log(`  Extracted ${entities.length} entities (${failed} failed)`);

  // Write output
  mkdirSync(OUT_DIR, { recursive: true });

  const enumsCode = generateEnumsFile(enums);
  writeFileSync(join(OUT_DIR, 'enums.ts'), enumsCode, 'utf-8');
  console.log(`  Written ${OUT_DIR}/enums.ts`);

  const enumLabelsCode = generateEnumLabelsFile(enums);
  writeFileSync(join(OUT_DIR, 'enum-labels.ts'), enumLabelsCode, 'utf-8');
  console.log(`  Written ${OUT_DIR}/enum-labels.ts`);

  const sharedAttrsCode = IS_1501
    ? generateSharedAttrsFile1501(elements, enums, extractSharedGroups1501())
    : generateSharedAttrsFile(elements, enums);
  writeFileSync(join(OUT_DIR, 'shared-attrs.ts'), sharedAttrsCode, 'utf-8');
  console.log(`  Written ${OUT_DIR}/shared-attrs.ts`);

  const entitiesCode = generateEntitiesFile(entities, elements, enums);
  writeFileSync(join(OUT_DIR, 'entities.ts'), entitiesCode, 'utf-8');
  console.log(`  Written ${OUT_DIR}/entities.ts`);

  console.log('Done.');
}

main();

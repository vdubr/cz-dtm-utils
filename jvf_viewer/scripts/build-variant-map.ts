/**
 * Generátor variantAttrMap.ts
 *
 * Prochází SYMBOLOGY (z jvf_viewer/src/map/symbology.ts), pro každý záznam
 * s `variants` najde odpovídající entitu v ENTITY_CATALOG (jvf-parser) a
 * pro každý její specifický atribut zkusí najít enum v ENUMS (jvf-parser),
 * jehož labely (z komentářů) odpovídají `variant.attrValue` stringům.
 *
 * Výstupem je mapa:
 *   codeBase → { attrName, valueToVariantIndex: { stringValueFromData → indexToSymbology.variants } }
 *
 * Spuštění:
 *   npx tsx jvf_viewer/scripts/build-variant-map.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import { SYMBOLOGY, type ObjectSymbology, type SymbolVariant } from '../src/map/symbology.js';
// jvf-parser generované moduly
import { ENTITY_CATALOG } from 'jvf-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Načíst enums.ts jako text a parsovat (komentáře s CZ labely nejsou runtime
// dostupné — jsou jen ve zdrojovém komentáři). Jdeme přes AST-lite regex.
const ENUMS_PATH = resolve(__dirname, '../../jvf_parser/src/1.4.3/generated/enums.ts');
const enumsSource = readFileSync(ENUMS_PATH, 'utf8');

interface EnumDef {
  name: string;
  /** label (z komentáře) → numeric value */
  byLabel: Record<string, number>;
  /** numeric value → label */
  byValue: Record<number, string>;
}

/** Parse enums.ts source into { enumName → { KEY: value, … }, with label comments } */
function parseEnums(src: string): Record<string, EnumDef> {
  const out: Record<string, EnumDef> = {};
  // Match: export const Name = { … } as const;
  const re = /export const (\w+) = \{([\s\S]*?)\n\} as const;/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    const name = m[1]!;
    const body = m[2]!;
    const def: EnumDef = { name, byLabel: {}, byValue: {} };
    // Každý řádek: KEY: 123, // label text
    const lineRe = /^\s*([A-Z0-9_]+)\s*:\s*(-?\d+)\s*,?\s*(?:\/\/\s*(.*))?$/gm;
    let lm: RegExpExecArray | null;
    while ((lm = lineRe.exec(body)) !== null) {
      const value = parseInt(lm[2]!, 10);
      const label = (lm[3] ?? '').trim();
      if (label) {
        def.byLabel[normalizeLabel(label)] = value;
        def.byValue[value] = label;
      }
    }
    if (Object.keys(def.byLabel).length > 0) {
      out[name] = def;
    }
  }
  return out;
}

/** Normalize label for robust matching: lowercase, strip diacritics, collapse whitespace. */
function normalizeLabel(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\//g, ' ')
    .trim();
}

const ENUMS = parseEnums(enumsSource);

/** Normalizace kódu: některé symbology entries mají 9 znaků místo 10 (leading zero se ztratilo). */
function normalizeCode(code: string): string {
  return code.padStart(10, '0');
}

/** Najdi ENTITY_CATALOG entry podle codeBase (normalizováno na 10 znaků). */
function findEntityByCode(codeBase: string): { key: string; specificAttrs: string[] } | null {
  const target = normalizeCode(codeBase);
  for (const [key, meta] of Object.entries(ENTITY_CATALOG)) {
    if (normalizeCode((meta as { codeBase: string }).codeBase) === target) {
      const specificAttrs = (meta as { specificAttrs?: string[] }).specificAttrs ?? [];
      return { key, specificAttrs };
    }
  }
  return null;
}

/**
 * Pokus se najít enum, který dokáže namapovat všechny (nebo většinu)
 * variant.attrValue na své labely. Zkoušíme enumy, jejichž název začíná
 * stejně jako atribut nebo obsahuje atribut jako podřetězec.
 */
interface VariantMatchResult {
  attrName: string;
  enumName: string;
  valueToVariantIndex: Record<string, number>;
  matched: number;
  total: number;
}

function tryMatchVariants(
  variants: SymbolVariant[],
  specificAttrs: string[],
): VariantMatchResult | null {
  const variantLabels = variants.map((v) => normalizeLabel(v.attrValue));
  let best: VariantMatchResult | null = null;

  // Kandidátní enumy: ty, jejichž name matchuje jeden ze specificAttrs,
  // nebo obsahují substring shodný. Fallback: všechny enumy, ale zvolíme
  // ten s nejvyšším pokrytím.
  const candidates: Array<{ attrName: string; enumName: string; def: EnumDef }> = [];
  for (const attr of specificAttrs) {
    // 1. Přímá shoda jména enumu s atributem
    if (ENUMS[attr]) {
      candidates.push({ attrName: attr, enumName: attr, def: ENUMS[attr]! });
    }
    // 2. Enumy obsahující atribut jako substring (např. "KategoriePozemniKomunikace" ~ atribut "KategoriePozemniKomunikace")
    for (const [eName, def] of Object.entries(ENUMS)) {
      if (eName === attr) continue;
      if (eName.includes(attr) || attr.includes(eName)) {
        candidates.push({ attrName: attr, enumName: eName, def });
      }
    }
  }
  // Fallback — zkus všechny enumy pro všechny atributy (pro případ nepřesného pojmenování)
  if (candidates.length === 0) {
    for (const attr of specificAttrs) {
      for (const [eName, def] of Object.entries(ENUMS)) {
        candidates.push({ attrName: attr, enumName: eName, def });
      }
    }
  }

  for (const cand of candidates) {
    const valueToVariantIndex: Record<string, number> = {};
    const matchedVariantIndices = new Set<number>();
    let matched = 0;
    for (let i = 0; i < variantLabels.length; i++) {
      const vLabel = variantLabels[i]!;
      // 1. Exact match
      let num: number | undefined = cand.def.byLabel[vLabel];
      // 2. Substring match (jedna strana obsahuje druhou)
      if (num === undefined) {
        for (const [enumLabel, enumVal] of Object.entries(cand.def.byLabel)) {
          if (enumLabel.includes(vLabel) || vLabel.includes(enumLabel)) {
            num = enumVal;
            break;
          }
        }
      }
      if (num !== undefined) {
        const key = String(num);
        // Nepřepisuj už namapovanou hodnotu (první variant vítězí)
        if (!(key in valueToVariantIndex)) {
          valueToVariantIndex[key] = i;
        }
        matchedVariantIndices.add(i);
        matched++;
      }
    }
    if (matched === 0) continue;
    const result: VariantMatchResult = {
      attrName: cand.attrName,
      enumName: cand.enumName,
      valueToVariantIndex,
      matched,
      total: variantLabels.length,
    };
    if (!best || result.matched > best.matched) {
      best = result;
    }
    // Kompletní shoda → hotovo
    if (matched === variantLabels.length) break;
  }

  return best;
}

interface ReportEntry {
  code: string;
  objectType: string;
  status: 'matched' | 'partial' | 'no-entity' | 'no-match';
  attrName?: string;
  enumName?: string;
  matched?: number;
  total?: number;
  missingValues?: string[];
}

const mapEntries: Record<string, { attrName: string; valueToVariantIndex: Record<string, number> }> = {};
const report: ReportEntry[] = [];

for (const [code, sym] of Object.entries(SYMBOLOGY) as Array<[string, ObjectSymbology]>) {
  if (!sym.variants || sym.variants.length === 0) continue;
  const entity = findEntityByCode(code);
  if (!entity) {
    report.push({ code, objectType: sym.objectType, status: 'no-entity' });
    continue;
  }
  if (entity.specificAttrs.length === 0) {
    report.push({ code, objectType: sym.objectType, status: 'no-entity' });
    continue;
  }
  const match = tryMatchVariants(sym.variants, entity.specificAttrs);
  if (!match) {
    report.push({
      code,
      objectType: sym.objectType,
      status: 'no-match',
      missingValues: sym.variants.map((v) => v.attrValue),
    });
    continue;
  }
  mapEntries[code] = {
    attrName: match.attrName,
    valueToVariantIndex: match.valueToVariantIndex,
  };
  const mappedIndices = new Set(Object.values(match.valueToVariantIndex));
  const missingValues =
    match.matched < match.total
      ? sym.variants
          .map((v, i) => (!mappedIndices.has(i) ? v.attrValue : null))
          .filter((x): x is string => x !== null)
      : undefined;
  report.push({
    code,
    objectType: sym.objectType,
    status: match.matched === match.total ? 'matched' : 'partial',
    attrName: match.attrName,
    enumName: match.enumName,
    matched: match.matched,
    total: match.total,
    missingValues,
  });
}

// Generate TS file
const header = `// Auto-generated by jvf_viewer/scripts/build-variant-map.ts
// Do not edit manually — run the script to regenerate.
//
// Maps ObjectSymbology codeBase → attribute name + value→variant index.
// At render time, jvfLayers.ts reads zaznam.attributes[attrName], coerces
// it to string, looks up valueToVariantIndex, and picks SYMBOLOGY[code].variants[idx].
`;

const sortedCodes = Object.keys(mapEntries).sort();
let body = 'export interface VariantAttrMapEntry {\n';
body += '  attrName: string;\n';
body += '  /** String representation of attribute value → index into SYMBOLOGY[code].variants */\n';
body += '  valueToVariantIndex: Record<string, number>;\n';
body += '}\n\n';
body += 'export const VARIANT_ATTR: Record<string, VariantAttrMapEntry> = {\n';
for (const code of sortedCodes) {
  const e = mapEntries[code]!;
  body += `  '${code}': {\n`;
  body += `    attrName: '${e.attrName}',\n`;
  body += `    valueToVariantIndex: {\n`;
  for (const [k, idx] of Object.entries(e.valueToVariantIndex)) {
    body += `      '${k}': ${idx},\n`;
  }
  body += `    },\n`;
  body += `  },\n`;
}
body += '};\n';

const out = header + '\n' + body;
const OUT_PATH = resolve(__dirname, '../src/map/variantAttrMap.ts');
writeFileSync(OUT_PATH, out, 'utf8');

// Print report
const matched = report.filter((r) => r.status === 'matched').length;
const partial = report.filter((r) => r.status === 'partial').length;
const noEntity = report.filter((r) => r.status === 'no-entity').length;
const noMatch = report.filter((r) => r.status === 'no-match').length;
const totalWithVariants = report.length;

console.log(`\n=== Variant mapping report ===`);
console.log(`Total SYMBOLOGY entries with variants: ${totalWithVariants}`);
console.log(`  Fully matched:   ${matched}`);
console.log(`  Partially:       ${partial}`);
console.log(`  No entity/attrs: ${noEntity}`);
console.log(`  No enum match:   ${noMatch}`);
console.log(`\nWritten: ${OUT_PATH}`);

if (partial > 0 || noMatch > 0) {
  console.log(`\n--- Partial / unmatched entries ---`);
  for (const r of report) {
    if (r.status === 'partial') {
      console.log(
        `  [partial] ${r.code} ${r.objectType} (${r.attrName} / ${r.enumName}): ${r.matched}/${r.total} — missing: ${JSON.stringify(r.missingValues)}`,
      );
    } else if (r.status === 'no-match') {
      console.log(
        `  [no-match] ${r.code} ${r.objectType} — values: ${JSON.stringify(r.missingValues)}`,
      );
    } else if (r.status === 'no-entity') {
      console.log(`  [no-entity] ${r.code} ${r.objectType}`);
    }
  }
}

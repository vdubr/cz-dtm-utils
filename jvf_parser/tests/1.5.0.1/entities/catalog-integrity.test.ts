import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { ENTITY_CATALOG } from '../../../src/1.5.0.1/generated/entities.js';

/**
 * Integritní test codegenu 1.5.0.1 (R8).
 *
 * Nezávisle (regexem, nikoli přes generátorovou XML cestu) re-derivuje
 * fakta přímo z objektových XSD a porovná je s vygenerovaným
 * `ENTITY_CATALOG`. Chytí drift mezi distribucí a generovaným katalogem.
 */

const XSD_OBJ_DIR = resolve(import.meta.dirname, '../../../docs/1.5.0.1/xsd/objekty');

const xsdFiles = readdirSync(XSD_OBJ_DIR)
  .filter((f) => f.endsWith('.xsd'))
  .sort();

/** Přímá extrakce faktů z XSD textu (nezávislá na generátoru). */
function parseXsdFacts(text: string): {
  elementName: string;
  codeBase: string;
  codeSuffix: string;
  geomTypeName: string | null;
} | null {
  // Root element = první <xs:element name="X" type="XType"/>
  const rootMatch = text.match(/<xs:element\s+name="([^"]+)"\s+type="[^"]+"\s*\/>/);
  const codeBaseMatch = text.match(/name="code_base"[^>]*fixed="([^"]+)"/);
  const codeSuffixMatch = text.match(/name="code_suffix"[^>]*fixed="([^"]+)"/);
  // Geometrie: type na elementu GeometrieObjektu (bereme první výskyt = Ins).
  const geomMatch = text.match(/name="GeometrieObjektu"\s+type="cmn:([^"]+)"/);
  if (!rootMatch || !codeBaseMatch) return null;
  return {
    elementName: rootMatch[1],
    codeBase: codeBaseMatch[1],
    codeSuffix: codeSuffixMatch ? codeSuffixMatch[1] : '',
    geomTypeName: geomMatch ? geomMatch[1] : null,
  };
}

const GEOM_TYPE_TO_KIND: Record<string, string> = {
  GeometrieObjektuBod2DType: 'point',
  GeometrieObjektuBod3DType: 'point',
  GeometrieObjektuLinie2DType: 'curve',
  GeometrieObjektuLinie3DType: 'curve',
  GeometrieObjektuPlocha2DDTIType: 'surface',
  GeometrieObjektuPlocha3DDTIType: 'surface',
  GeometrieObjektuPlochaZPSType: 'surface+multiCurve',
};

describe('JVF DTM 1.5.0.1 — ENTITY_CATALOG integrita (R8)', () => {
  it('katalog má tolik položek, kolik je objektových XSD (393)', () => {
    expect(Object.keys(ENTITY_CATALOG).length).toBe(xsdFiles.length);
    expect(xsdFiles.length).toBe(393);
  });

  it('každý objekt: codeBase/codeSuffix/geomType v katalogu odpovídá XSD', () => {
    const mismatches: string[] = [];
    for (const file of xsdFiles) {
      const facts = parseXsdFacts(readFileSync(join(XSD_OBJ_DIR, file), 'utf-8'));
      if (!facts) {
        mismatches.push(`${file}: nešlo naparsovat`);
        continue;
      }
      const entry = ENTITY_CATALOG[facts.elementName];
      if (!entry) {
        mismatches.push(`${file}: chybí v katalogu (${facts.elementName})`);
        continue;
      }
      if (entry.codeBase !== facts.codeBase) {
        mismatches.push(`${facts.elementName}: codeBase ${entry.codeBase} ≠ ${facts.codeBase}`);
      }
      if (entry.codeSuffix !== facts.codeSuffix) {
        mismatches.push(`${facts.elementName}: codeSuffix ${entry.codeSuffix} ≠ ${facts.codeSuffix}`);
      }
      const expectedGeom = facts.geomTypeName ? GEOM_TYPE_TO_KIND[facts.geomTypeName] : undefined;
      if (expectedGeom && entry.geomType !== expectedGeom) {
        mismatches.push(`${facts.elementName}: geomType ${entry.geomType} ≠ ${expectedGeom}`);
      }
    }
    expect(mismatches).toEqual([]);
  });

  it('akceptace: PSPI 0200000001–0200000021 jsou v katalogu', () => {
    const pspiCodes = new Set(
      Object.values(ENTITY_CATALOG)
        .map((e) => e.codeBase)
        .filter((c) => c.startsWith('0200000'))
    );
    for (let i = 1; i <= 21; i++) {
      const code = `02000000${String(i).padStart(2, '0')}`;
      expect(pspiCodes.has(code), `chybí PSPI kód ${code}`).toBe(true);
    }
  });

  it('akceptace: nové DTM objekty (0100000372–388) přítomny, 0100000185 odstraněn', () => {
    const codes = new Set(Object.values(ENTITY_CATALOG).map((e) => e.codeBase));
    // Reprezentativní nové kódy z rozsahu 372–388 (ne všechny jsou přiděleny).
    for (const code of ['0100000372', '0100000381', '0100000388']) {
      expect(codes.has(code), `chybí nový kód ${code}`).toBe(true);
    }
    expect(codes.has('0100000185'), '0100000185 měl být odstraněn').toBe(false);
  });

  it('PSPI objekty: obsahovaCast=PSPI a skupina SpolecneAtributyObjektuPSPI', () => {
    const pspi = Object.values(ENTITY_CATALOG).filter((e) => e.codeBase.startsWith('0200000'));
    expect(pspi.length).toBe(21);
    for (const e of pspi) {
      expect(e.obsahovaCast, e.elementName).toBe('PSPI');
      expect(e.sharedAttrGroup, e.elementName).toBe('SpolecneAtributyObjektuPSPI');
    }
  });

  it('žádná entita nemá reliktní OblastKI (KI zrušeno v 1.5.0.1)', () => {
    const withKI = Object.values(ENTITY_CATALOG).filter((e) => e.hasOblastKI);
    expect(withKI.map((e) => e.elementName)).toEqual([]);
  });

  it('každá entita má platný geomType a obsahovaCast', () => {
    const validGeom = new Set(['point', 'curve', 'surface', 'surface+multiCurve']);
    const validCast = new Set(['ZPS', 'TI', 'DI', 'PSPI', '']);
    for (const e of Object.values(ENTITY_CATALOG)) {
      expect(validGeom.has(e.geomType), `${e.elementName}: geomType ${e.geomType}`).toBe(true);
      expect(validCast.has(e.obsahovaCast), `${e.elementName}: obsahovaCast ${e.obsahovaCast}`).toBe(
        true
      );
    }
  });
});

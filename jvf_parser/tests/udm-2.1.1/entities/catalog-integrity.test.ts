import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { ENTITY_CATALOG } from '../../../src/udm-2.1.1/generated/entities.js';
import { ENUM_LABELS, BOOLEAN_ATTRS } from '../../../src/udm-2.1.1/generated/enum-labels.js';
import { ENTITY_CATALOG as CATALOG_1501 } from '../../../src/1.5.0.1/generated/entities.js';

/**
 * Integritní test codegenu UDM 2.1.1.
 *
 * Nezávisle (regexem, nikoli přes generátorovou XML cestu) re-derivuje
 * fakta z objektových XSD UDM a porovná je s vygenerovaným katalogem.
 */

const XSD_OBJ_DIR = resolve(import.meta.dirname, '../../../docs/udm-2.1.1/xsd/objekty');
const xsdFiles = readdirSync(XSD_OBJ_DIR)
  .filter((f) => f.endsWith('.xsd'))
  .sort();

function parseXsdFacts(text: string) {
  const root = text.match(/<xs:element\s+name="([^"]+)"\s+type="[^"]+"\s*\/>/);
  const codeBase = text.match(/name="code_base"[^>]*fixed="([^"]+)"/);
  const codeSuffix = text.match(/name="code_suffix"[^>]*fixed="([^"]+)"/);
  const cast = text.match(/name="ObsahovaCast"[^>]*fixed="([^"]+)"/);
  // Geometrie: první wrapper (Bod/Linie/Plocha 2D/3D) v záznamovém typu Ins.
  const ins = text.slice(text.indexOf('<xs:complexType name="Ins">'));
  const wrapper = ins.match(/<xs:element name="((?:Bod|Linie|Plocha)[23]D)">/);
  if (!root || !codeBase) return null;
  return {
    elementName: root[1],
    codeBase: codeBase[1],
    codeSuffix: codeSuffix?.[1] ?? '',
    obsahovaCast: cast?.[1] ?? '',
    wrapper: wrapper?.[1] ?? null,
  };
}

const WRAPPER_TO_KIND = (w: string): string =>
  w.startsWith('Plocha') ? 'surface' : w.startsWith('Linie') ? 'curve' : 'point';

describe('UDM 2.1.1 — ENTITY_CATALOG integrita', () => {
  it('katalog má položku pro každé objektové XSD (470 = 393 JVF + 77 UDM)', () => {
    expect(xsdFiles.length).toBe(470);
    expect(Object.keys(ENTITY_CATALOG).length).toBe(470);
    const udmOnly = Object.values(ENTITY_CATALOG).filter((e) => e.codeBase.startsWith('94'));
    expect(udmOnly.length).toBe(77);
  });

  it('každý objekt: codeBase/codeSuffix/obsahovaCast/geomType odpovídá XSD', () => {
    const mismatches: string[] = [];
    for (const file of xsdFiles) {
      const f = parseXsdFacts(readFileSync(join(XSD_OBJ_DIR, file), 'utf-8'));
      if (!f) {
        mismatches.push(`${file}: nešlo naparsovat`);
        continue;
      }
      const e = ENTITY_CATALOG[f.elementName];
      if (!e) {
        mismatches.push(`${file}: chybí v katalogu (${f.elementName})`);
        continue;
      }
      if (e.codeBase !== f.codeBase) mismatches.push(`${f.elementName}: codeBase`);
      if (e.codeSuffix !== f.codeSuffix) mismatches.push(`${f.elementName}: codeSuffix`);
      // PSPI normalizace (code_base 02…) jako u 1.5.0.1.
      const cast = f.codeBase.startsWith('0200000') ? 'PSPI' : f.obsahovaCast;
      if (e.obsahovaCast !== cast) mismatches.push(`${f.elementName}: obsahovaCast ${e.obsahovaCast} ≠ ${cast}`);
      if (f.wrapper && e.geomType !== WRAPPER_TO_KIND(f.wrapper)) {
        mismatches.push(`${f.elementName}: geomType ${e.geomType} ≠ ${WRAPPER_TO_KIND(f.wrapper)}`);
      }
    }
    expect(mismatches).toEqual([]);
  });

  it('obsahuje všechny objekty JVF 1.5.0.1 se stejným kódem', () => {
    const missing = Object.values(CATALOG_1501)
      .filter((e) => ENTITY_CATALOG[e.elementName]?.codeBase !== e.codeBase)
      .map((e) => e.elementName);
    expect(missing).toEqual([]);
  });

  it('objekty UDM mají obsahové části ZPSUDM/DIUDM/TIUDM/OST', () => {
    const casts = new Set(
      Object.values(ENTITY_CATALOG)
        .filter((e) => e.codeBase.startsWith('94'))
        .map((e) => e.obsahovaCast)
    );
    expect([...casts].sort()).toEqual(['DIUDM', 'OST', 'TIUDM', 'ZPSUDM']);
  });

  it('systémové atributy (ID, PopisObjektu, …) nejsou mezi specificAttrs', () => {
    const strom = ENTITY_CATALOG['Strom'];
    expect(strom.specificAttrs).toContain('StavStromu');
    expect(strom.specificAttrs).not.toContain('ID');
    expect(strom.specificAttrs).not.toContain('PopisObjektu');
  });

  it('číselníky UDM (ckz_*) jsou v ENUM_LABELS pod názvem atributu', () => {
    expect(ENUM_LABELS['StavStromu']?.['500']).toBe('dobrý');
    expect(ENUM_LABELS['MaterialUDM']?.['501']).toBe('cihla');
    // Rozšíření DTM číselníku o položky nad rámec DTM (ID 200–399, 400–402).
    expect(Object.keys(ENUM_LABELS['DruhElektrickehoProudu'] ?? {})).toContain('400');
    expect(BOOLEAN_ATTRS).toContain('VstupDoDTM');
    expect(BOOLEAN_ATTRS).toContain('Okrasny');
  });
});

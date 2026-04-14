import { describe, it, expect } from 'vitest';
import { ENTITY_CATALOG } from '../../../src/1.4.3/generated/entities.js';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import { loadSample } from '../helpers/fixtures.js';
import { getSharedAttrNames } from '../helpers/shared-attr-names.js';

describe('Parsed sample data matches catalog definitions', () => {
  const samples = [
    'ukazka_DI.xml',
    'ukazka_KI.xml',
    'ukazka_ZPS.xml',
    'ukazka_OPL.xml',
    'ukazka_GAD.xml',
  ];

  for (const filename of samples) {
    describe(filename, () => {
      let parsed: ReturnType<typeof parseJvfDtm>;

      try {
        const xml = loadSample(filename);
        parsed = parseJvfDtm(xml);
      } catch {
        it('can be parsed', () => {
          expect.fail(`Failed to parse ${filename}`);
        });
        return;
      }

      it('has valid verze', () => {
        expect(parsed.verze).toBe('1.4.3');
      });

      it('all object types have a catalog entry', () => {
        const missing: string[] = [];
        for (const ot of parsed.objekty) {
          if (!ENTITY_CATALOG[ot.elementName]) {
            missing.push(ot.elementName);
          }
        }
        expect(missing).toEqual([]);
      });

      it('all object types match catalog metadata', () => {
        for (const ot of parsed.objekty) {
          const meta = ENTITY_CATALOG[ot.elementName];
          if (!meta) continue;

          expect(ot.codeBase).toBe(meta.codeBase);
          expect(ot.codeSuffix).toBe(meta.codeSuffix);
          expect(ot.nazev).toBe(meta.nazev);
        }
      });

      it('all records have valid zapisObjektu', () => {
        for (const ot of parsed.objekty) {
          for (const z of ot.zaznamy) {
            expect(['i', 'u', 'd', 'r']).toContain(z.zapisObjektu);
          }
        }
      });

      it('all records have geometry matching catalog geomType', () => {
        for (const ot of parsed.objekty) {
          const meta = ENTITY_CATALOG[ot.elementName];
          if (!meta) continue;

          for (const z of ot.zaznamy) {
            if (meta.geomOptional && z.geometrie.length === 0) continue;

            for (const g of z.geometrie) {
              switch (meta.geomType) {
                case 'point':
                  expect(g.type).toBe('Point');
                  break;
                case 'curve':
                  expect(['LineString', 'MultiCurve']).toContain(g.type);
                  break;
                case 'surface':
                  expect(['Polygon', 'LineString', 'MultiCurve']).toContain(g.type);
                  break;
                case 'surface+multiCurve':
                  expect(['Polygon', 'LineString', 'MultiCurve']).toContain(g.type);
                  break;
              }
            }
          }
        }
      });

      it('shared attributes are parsed for all records', () => {
        for (const ot of parsed.objekty) {
          const meta = ENTITY_CATALOG[ot.elementName];
          if (!meta || !meta.sharedAttrGroup) continue;

          for (const z of ot.zaznamy) {
            const attrKeys = Object.keys(z.attributes);
            expect(attrKeys.length).toBeGreaterThan(0);
          }
        }
      });

      it('specific attributes use known attribute names', () => {
        for (const ot of parsed.objekty) {
          const meta = ENTITY_CATALOG[ot.elementName];
          if (!meta) continue;

          const knownSharedAttrs = getSharedAttrNames(meta.sharedAttrGroup);
          const knownSpecific = new Set(meta.specificAttrs);
          const allKnown = new Set([...knownSharedAttrs, ...knownSpecific]);

          for (const z of ot.zaznamy) {
            for (const key of Object.keys(z.attributes)) {
              expect(allKnown.has(key)).toBe(true);
            }
          }
        }
      });
    });
  }
});

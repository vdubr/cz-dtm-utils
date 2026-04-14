import { describe, it, expect } from 'vitest';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { ENTITY_CATALOG } from '../../../src/1.4.3/generated/entities.js';
import { XSD_OBJ_DIR, parseXsdEntity } from '../helpers/xsd-parser.js';

describe('ENTITY_CATALOG vs XSD cross-validation', () => {
  const xsdFiles = readdirSync(XSD_OBJ_DIR)
    .filter((f) => f.endsWith('.xsd'))
    .sort();

  const xsdEntities = xsdFiles
    .map((f) => parseXsdEntity(join(XSD_OBJ_DIR, f)))
    .filter((x): x is NonNullable<typeof x> => x !== null);

  for (const xsd of xsdEntities) {
    describe(`${xsd.elementName}`, () => {
      const catalog = ENTITY_CATALOG[xsd.elementName];

      it('exists in catalog', () => {
        expect(catalog).toBeDefined();
      });

      if (!catalog) return;

      it('nazev matches XSD', () => {
        expect(catalog.nazev).toBe(xsd.nazev);
      });

      it('codeBase matches XSD', () => {
        expect(catalog.codeBase).toBe(xsd.codeBase);
      });

      it('codeSuffix matches XSD', () => {
        expect(catalog.codeSuffix).toBe(xsd.codeSuffix);
      });

      it('kategorieObjektu matches XSD', () => {
        expect(catalog.kategorieObjektu).toBe(xsd.kategorieObjektu);
      });

      it('skupinaObjektu matches XSD', () => {
        expect(catalog.skupinaObjektu).toBe(xsd.skupinaObjektu);
      });

      it('obsahovaCast matches XSD', () => {
        expect(catalog.obsahovaCast).toBe(xsd.obsahovaCast);
      });

      it('sharedAttrGroup matches XSD', () => {
        expect(catalog.sharedAttrGroup).toBe(xsd.sharedAttrGroup);
      });

      it('specificAttrs match XSD', () => {
        expect([...catalog.specificAttrs].sort()).toEqual([...xsd.specificAttrs].sort());
      });

      it('geomOptional matches XSD', () => {
        expect(catalog.geomOptional).toBe(xsd.geomOptional);
      });

      it('hasOblastKI matches XSD', () => {
        expect(catalog.hasOblastKI).toBe(xsd.hasOblastKI);
      });

      it('geomType matches XSD geometry elements', () => {
        if (xsd.hasSurfaceGeom && xsd.hasMultiCurveGeom) {
          expect(catalog.geomType).toBe('surface+multiCurve');
        } else if (xsd.hasSurfaceGeom) {
          expect(catalog.geomType).toBe('surface');
        } else if (xsd.hasCurveGeom) {
          expect(catalog.geomType).toBe('curve');
        } else if (xsd.hasPointGeom) {
          expect(catalog.geomType).toBe('point');
        }
      });
    });
  }
});

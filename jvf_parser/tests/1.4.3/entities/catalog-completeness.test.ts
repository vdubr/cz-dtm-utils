import { describe, it, expect } from 'vitest';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { ENTITY_CATALOG } from '../../../src/1.4.3/generated/entities.js';
import { XSD_OBJ_DIR, parseXsdEntity } from '../helpers/xsd-parser.js';

describe('ENTITY_CATALOG completeness', () => {
  const xsdFiles = readdirSync(XSD_OBJ_DIR)
    .filter((f) => f.endsWith('.xsd'))
    .sort();

  it('catalog has exactly as many entries as XSD files', () => {
    const catalogCount = Object.keys(ENTITY_CATALOG).length;
    expect(catalogCount).toBe(xsdFiles.length);
  });

  it('every XSD file has a corresponding catalog entry', () => {
    const missing: string[] = [];
    for (const file of xsdFiles) {
      const info = parseXsdEntity(join(XSD_OBJ_DIR, file));
      if (info && !ENTITY_CATALOG[info.elementName]) {
        missing.push(`${file} → ${info.elementName}`);
      }
    }
    expect(missing).toEqual([]);
  });
});

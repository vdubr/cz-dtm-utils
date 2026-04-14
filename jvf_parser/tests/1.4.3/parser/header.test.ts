import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

describe('Header parsing (ukazka_ZPS.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_ZPS.xml'));
  });

  it('parses VerzeJVFDTM', () => {
    expect(doc.verze).toBe('1.4.3');
  });

  it('parses DatumZapisu', () => {
    expect(doc.datumZapisu).toBe('2023-12-14T08:25:00');
  });

  it('parses TypZapisu as kompletní zápis', () => {
    expect(doc.typZapisu).toBe('kompletní zápis');
  });
});

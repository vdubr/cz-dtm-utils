import { describe, expect, it, beforeAll, vi } from 'vitest';
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

describe('XML validation (malformed input)', () => {
  it('throws a readable error for an unclosed tag', () => {
    const valid = loadSample('ukazka_ZPS.xml');
    // Corrupt the XML by removing the closing tag of the root element,
    // simulating a truncated/malformed file.
    const malformed = valid.replace('</JVFDTM>', '');

    expect(() => parseJvfDtm(malformed)).toThrow(/Neplatný XML soubor/);
  });

  it('throws for a mismatched (non-well-formed) tag pair', () => {
    const valid = loadSample('ukazka_ZPS.xml');
    const malformed = valid.replace('</DatumZapisu>', '</DatumZapis>');

    expect(() => parseJvfDtm(malformed)).toThrow(/Neplatný XML soubor/);
  });

  it('still parses a valid, unmodified sample without throwing', () => {
    const valid = loadSample('ukazka_ZPS.xml');
    expect(() => parseJvfDtm(valid)).not.toThrow();
  });
});

describe('TypZapisu / verze validation (warnings)', () => {
  it('warns on unexpected TypZapisu value but still parses', () => {
    const valid = loadSample('ukazka_ZPS.xml');
    const modified = valid.replace('kompletní zápis</TypZapisu>', 'neznámý typ</TypZapisu>');

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const doc = parseJvfDtm(modified);
    expect(doc.typZapisu as string).toBe('neznámý typ');
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('TypZapisu'));
    warnSpy.mockRestore();
  });

  it('warns on unsupported verze value but still parses', () => {
    const valid = loadSample('ukazka_ZPS.xml');
    const modified = valid.replace('>1.4.3</VerzeJVFDTM>', '>9.9.9</VerzeJVFDTM>');

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const doc = parseJvfDtm(modified);
    expect(doc.verze).toBe('9.9.9');
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('verze'));
    warnSpy.mockRestore();
  });
});

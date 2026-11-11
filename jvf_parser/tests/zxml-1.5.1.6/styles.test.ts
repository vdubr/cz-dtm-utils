import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import type { ZaznamObjektu } from 'jvf-dtm-types';
import { ZXML_JVF_EXTENSIONS, ZXML_STYLES } from '../../src/zxml-1.5.1.6/generated/styles.js';
import { ZXML_STYLES as ZXML_STYLES_1421 } from '../../src/zxml-1.4.2.1/generated/styles.js';
import {
  getExtensionTable,
  resolveAppearance,
  resolveExtensionAppearance,
  resolveRepresentativeAppearance,
  usesDialectStyle,
} from '../../src/index.js';

const SYMBOL_DIR = resolve(import.meta.dirname, '../../../jvf_viewer/public/symboly/zxml');

const zaznam = (attributes: Record<string, string>) => ({ attributes }) as unknown as ZaznamObjektu;
const ot = (codeBase: string, codeSuffix: string) => ({ codeBase, codeSuffix });

/**
 * Regrese symbologie ŽXML (scripts/zxml/build-zxml-styles.py): styly SLD
 * objektů SŽ z exportu LDM DTMŽ 1.5.0.2 (ISTEM), pravidla podle číselníků.
 */
describe('ZXML_STYLES — symbologie ŽXML (styly SLD SŽ)', () => {
  const entries = Object.entries(ZXML_STYLES);
  const apps = entries.flatMap(([, s]) => [
    s.base,
    ...(s.rules ?? []).flatMap((r) => Object.values(r.values)),
    ...(s.cases ?? []).map((c) => c.app),
  ]);

  it('pokrývá jen objekty SŽ (999…) s klíčem <codeBase>-<suffix>', () => {
    expect(entries.length).toBeGreaterThan(130);
    expect(entries.every(([k]) => /^999\d{7}-0[123]$/.test(k))).toBe(true);
    expect(entries.every(([, s]) => /^#[0-9a-f]{6}$/.test(s.base.color ?? ''))).toBe(true);
  });

  it('1.4.2.1 a 1.5.1.6 sdílí stejnou tabulku', () => {
    expect(ZXML_STYLES_1421).toEqual(ZXML_STYLES);
  });

  it('každá značka má SVG ve vieweru v barvě svého vzhledu', () => {
    const withSymbol = apps.filter((a) => a.symbol);
    expect(new Set(withSymbol.map((a) => a.symbol)).size).toBeGreaterThan(200);
    for (const a of withSymbol) {
      expect(a.symbol).toMatch(/^sz-[0-9a-f]{8}$/);
      const file = `${a.symbol}_${a.color!.slice(1)}.svg`;
      expect(existsSync(resolve(SYMBOL_DIR, file)), file).toBe(true);
    }
  });

  it('všechna čárkování a příčky mají sudý počet prvků a kladné délky', () => {
    for (const p of apps.flatMap((a) => [a.dashMm, a.ticksMm]).filter((p): p is number[] => !!p)) {
      expect(p.length % 2).toBe(0);
      expect(p.every((v) => v > 0)).toBe(true);
    }
  });

  it('trasa drátovodu (SŽ-ZDT): barva a čárkování podle TypDratovodu ze SLD', () => {
    const s = ZXML_STYLES['9990000150-02'];
    expect(s?.base.color).toBe('#d200d2');
    const rule = s?.rules?.find((r) => r.attr === 'TypDratovodu');
    expect(rule?.values['100694']?.dashMm).toEqual([5, 1, 0.5, 1]);
    expect(rule?.values['100693']?.dashMm?.length).toBe(8);
  });

  it('úhelník: příčky (ticksMm) a barva podle typu', () => {
    const v = 'zxml-1.5.1.6';
    const app = resolveAppearance(ZXML_STYLES, ot('9990000456', '02'), zaznam({ TypUhelniku: '100161' }));
    expect(app?.ticksMm).toEqual([0.3, 10]);
    expect(app?.color).toBe('#ffb3ff');
    expect(usesDialectStyle(v, ot('9990000456', '02'))).toBe(true);
  });

  it('zařízení sítě EK SŽ: značka podle kombinace využití × typu (cases)', () => {
    const s = ZXML_STYLES['9990000585-01']!;
    expect(s.cases!.length).toBeGreaterThan(100);
    const c = s.cases![0]!;
    const app = resolveAppearance(ZXML_STYLES, ot('9990000585', '01'), zaznam(c.when));
    expect(app?.symbol).toBe(c.app.symbol);
    expect(app?.rotationAttr).toBe('Natoceni');
    // Jen jedna z hodnot nestačí.
    const [attr, val] = Object.entries(c.when)[0]!;
    expect(resolveAppearance(ZXML_STYLES, ot('9990000585', '01'), zaznam({ [attr]: val }))?.symbol).toBeUndefined();
    expect(resolveRepresentativeAppearance(ZXML_STYLES, ot('9990000585', '01'))?.symbol).toMatch(/^sz-/);
  });

  it('usesDialectStyle: objekty SŽ dialektem, objekty JVF Katalogem DTM ČR', () => {
    const v = 'zxml-1.5.1.6';
    expect(usesDialectStyle(v, ot('9990000487', '01'))).toBe(true); // návěstidlo SŽ
    expect(usesDialectStyle(v, ot('0100000218', '01'))).toBe(false); // podrobný bod
    expect(usesDialectStyle(v, ot('0100000019', '03'))).toBe(false); // obvod dráhy
    expect(usesDialectStyle('1.5.0.2', ot('9990000487', '01'))).toBe(false); // čisté JVF
  });

  it('brzda: jen souběžné čáry (vlevo / vpravo / obě) bez osy', () => {
    const app = (v: string) => resolveAppearance(ZXML_STYLES, ot('9990000461', '02'), zaznam({ TypBrzdy: v }));
    expect(app('100165')?.lines).toEqual([{ color: '#000000', widthMm: 0.3, offsetMm: -4 }]);
    expect(app('100165')?.axis).toBe(false);
    expect(app('100167')?.lines?.map((l) => l.offsetMm)).toEqual([4, -4]);
  });

  it('izolovaná kolejnice: souběžná čára spojená s osou na koncích', () => {
    const app = resolveAppearance(ZXML_STYLES, ot('9990000460', '02'), zaznam({ TypIzolovaneKolejnice: '100162' }));
    expect(app?.lines).toEqual([{ color: '#ff00ff', widthMm: 0.3, offsetMm: -2.5, endTicks: true }]);
  });

  it('MIB a příkop se zpevněným dnem: osa + souběžné čáry (i čárkovaná)', () => {
    expect(ZXML_STYLES['9990000446-02']!.base.lines).toEqual([{ color: '#b4b4b4', widthMm: 0.3, offsetMm: 6 }]);
    const zlab = ZXML_STYLES['9990000558-02']!.base;
    expect(zlab.axis).toBeUndefined();
    expect(zlab.lines?.map((l) => [l.offsetMm, l.dashMm])).toEqual([[2, [0.3, 4]], [4, undefined]]);
  });

  it('zábradlí: značka opakovaná podél linie místo čáry, SVG ve vieweru', () => {
    const base = ZXML_STYLES['9990000277-02']!.base;
    expect(base.axis).toBe(false);
    expect(base.lineSymbol?.intervalMm).toBeGreaterThan(18);
    const all = [...Object.values(ZXML_STYLES), ...Object.values(ZXML_JVF_EXTENSIONS)].flatMap((st) => [
      st.base,
      ...(st.rules ?? []).flatMap((r) => Object.values(r.values)),
      ...(st.cases ?? []).map((c) => c.app),
    ]);
    const withLs = all.filter((a) => a.lineSymbol);
    expect(withLs.length).toBeGreaterThan(20);
    for (const { lineSymbol: ls } of withLs) {
      expect(existsSync(resolve(SYMBOL_DIR, `${ls!.symbol}_${ls!.color.slice(1)}.svg`))).toBe(true);
    }
  });

  it('rozšíření číselníků SŽ u objektů JVF: jen hodnoty SŽ, jen v ŽXML', () => {
    expect(getExtensionTable('zxml-1.5.1.6')).toBe(ZXML_JVF_EXTENSIONS);
    expect(getExtensionTable('1.5.0.2')).toBeUndefined();
    const el = ot('0100000101', '01');
    // kabelová rezerva (rozšíření SŽ) → značka SLD; hodnota JVF (1) → Katalog.
    const rule = ZXML_JVF_EXTENSIONS['0100000101-01']!.rules![0]!;
    const sz = Object.keys(rule.values)[0]!;
    expect(resolveExtensionAppearance(ZXML_JVF_EXTENSIONS, el, zaznam({ [rule.attr]: sz }))?.symbol).toMatch(/^sz-/);
    expect(resolveExtensionAppearance(ZXML_JVF_EXTENSIONS, el, zaznam({ [rule.attr]: '1' }))).toBeUndefined();
    expect(usesDialectStyle('zxml-1.5.1.6', el)).toBe(false);
    // Plot s rozšířením SŽ: čára i příčky (pravidlo bez filtru + GraphicStroke).
    const plot = resolveExtensionAppearance(ZXML_JVF_EXTENSIONS, ot('0100000162', '02'), zaznam({ DruhPlotu: '100112' }));
    expect(plot?.widthMm).toBe(0.25);
    expect(plot?.lineSymbol).toBeDefined();
  });

  it('pravidla na neplatné hodnoty číselníků SLD se nepřebírají (prahová vpust do 8/2025)', () => {
    expect(JSON.stringify(ZXML_JVF_EXTENSIONS)).not.toContain('101135');
  });

  it('návěstidlo tabulka (SŽ-ZDD): barevná značka podle TypNavestidlaTabulka s natočením', () => {
    const rule = ZXML_STYLES['9990000487-01']?.rules?.find((r) => r.attr === 'TypNavestidlaTabulka');
    const values = Object.values(rule?.values ?? {});
    expect(values.length).toBeGreaterThan(30);
    expect(values.every((a) => a.symbol && a.rotationAttr === 'Natoceni')).toBe(true);
    expect(new Set(values.map((a) => a.color)).size).toBeGreaterThan(1);
  });
});

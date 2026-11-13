/**
 * Symbologie dialektů JVF DTM ve vieweru — UDM (ČKZ) a ŽXML (SŽ).
 *
 * Objektové typy načtené ze souboru dialektu se kreslí dle tabulky vzhledů
 * dialektu (`getStyleTable(verze)` z jvf-parser) místo katalogu symbolů ČÚZK.
 * Která tabulka k typu patří, se eviduje přes `markDialectObjekty` podle
 * **verze projektu** (WeakMap nad `ObjektovyTyp` — stejné instance tečou do
 * 2D vrstev, 3D scény i panelů).
 *
 * UDM pokrývá všechny objekty DTM i nad rámec DTM. ŽXML (styly SLD SŽ) má
 * vzhled u objektů SŽ (`999…`); objekty JVF se kreslí symbologií ČÚZK, jen
 * záznamy s hodnotou z rozšíření číselníku SŽ (např. kabelová rezerva
 * u zařízení elektrické sítě) podle SLD — `getExtensionTable`.
 */
import {
  dialectOf,
  getExtensionTable,
  getObjectStyle,
  getStyleTable,
  labelForAttribute,
  resolveAppearance,
  resolveExtensionAppearance,
  resolveRepresentativeAppearance,
  resolveRotationDeg,
  usesDialectStyle,
  type Appearance,
  type ObjectStyle,
  type ObjektovyTyp,
  type StyleTable,
  type ZaznamObjektu,
} from 'jvf-parser';

interface DialectBinding {
  /** Adresář předbarvených SVG v `public/symboly/` (= id dialektu). */
  symbolDir: string;
  styles: StyleTable;
  /** Verze projektu (popisky hodnot číselníků ve variantách legendy). */
  version: string;
}

const bindings = new WeakMap<ObjektovyTyp, DialectBinding>();
/** Objekty JVF v souboru dialektu s rozšířením číselníku (vzhled jen u záznamů s ním). */
const extensionBindings = new WeakMap<ObjektovyTyp, DialectBinding>();

/**
 * Označit objektové typy projektu dané verze — kreslit symbologií dialektu.
 * U čistého JVF DTM nic nedělá.
 */
export function markDialectObjekty(objekty: readonly ObjektovyTyp[], version: string): void {
  const dialect = dialectOf(version);
  const styles = getStyleTable(version);
  if (!dialect || !styles) return;
  const extensions = getExtensionTable(version);
  for (const ot of objekty) {
    // ŽXML: objekty JVF zůstávají v symbologii ČÚZK (sdílené pravidlo
    // s exportem do CAD — `usesDialectStyle`), kromě rozšíření číselníků SŽ.
    if (usesDialectStyle(version, ot)) bindings.set(ot, { symbolDir: dialect.id, styles, version });
    else if (extensions?.[`${ot.codeBase}-${ot.codeSuffix}`]) {
      extensionBindings.set(ot, { symbolDir: dialect.id, styles: extensions, version });
    }
  }
}

/** Kreslí se daný objektový typ symbologií dialektu? */
export function isDialectStyled(ot: ObjektovyTyp): boolean {
  return bindings.has(ot);
}

export interface DialectLook {
  appearance: Appearance;
  /** Cesta k SVG symbolu (relativně k `public/symboly/`) v barvě vzhledu. */
  symbolPath: string | undefined;
  /** Natočení symbolu ve stupních (atribut `rotationAttr`), jinak `undefined`. */
  rotationDeg: number | undefined;
  /** Cesta k SVG značky opakované podél linie (`appearance.lineSymbol`). */
  lineSymbolPath: string | undefined;
}

function svgPath(dir: string, symbol: string, color: string): string {
  return `${dir}/${symbol}_${color.replace('#', '').toLowerCase()}.svg`;
}

function look(binding: DialectBinding, app: Appearance | undefined, zaznam?: ZaznamObjektu): DialectLook | undefined {
  if (!app) return undefined;
  const color = app.color ?? '#000000';
  return {
    appearance: app,
    symbolPath: app.symbol ? svgPath(binding.symbolDir, app.symbol, color) : undefined,
    rotationDeg: resolveRotationDeg(app, zaznam),
    lineSymbolPath: app.lineSymbol
      ? svgPath(binding.symbolDir, app.lineSymbol.symbol, app.lineSymbol.color)
      : undefined,
  };
}

/**
 * Vzhled typu / záznamu dle dialektu, nebo `undefined` (typ není označen;
 * u objektu JVF záznam bez hodnoty z rozšíření číselníku dialektu).
 */
export function resolveDialectLook(ot: ObjektovyTyp, zaznam?: ZaznamObjektu): DialectLook | undefined {
  const b = bindings.get(ot);
  if (b) return look(b, resolveAppearance(b.styles, ot, zaznam), zaznam);
  const e = zaznam && extensionBindings.get(ot);
  return e ? look(e, resolveExtensionAppearance(e.styles, ot, zaznam), zaznam) : undefined;
}

/** Reprezentativní vzhled typu (legenda, panel vrstev). */
export function resolveDialectRepresentativeLook(ot: ObjektovyTyp): DialectLook | undefined {
  const b = bindings.get(ot);
  return b ? look(b, resolveRepresentativeAppearance(b.styles, ot)) : undefined;
}

/** Popisek dlaždice se vzhledem pro hodnoty bez vlastního pravidla (legenda). */
export const OTHER_VALUES_LABEL = 'ostatní hodnoty';

/** Jedna hodnota (nebo kombinace hodnot) číselníku ve stylu dialektu. */
export interface StyleVariant {
  /** Atribut(y) — u složených pravidel spojené „ + ". */
  attr: string;
  /** Kód hodnoty — u složených pravidel spojené „ + ". */
  value: string;
  /** Český popisek z číselníku (u složených „ · "), chybí-li v číselníku, `undefined`. */
  label: string | undefined;
  /** Vzhled hodnoty — u stylu dialektu sloučený se základem, u rozšíření sám. */
  app: Appearance;
}

/**
 * Varianty stylu objektu podle hodnot číselníků (pravidla `rules` a složená
 * `cases`) — jediný výčet pro Legendu DTM i balík znaků (ui/symbolZip.ts).
 * Rozšíření číselníků (`mergeBase: false`) se se základem neslučuje — stejně
 * jako v mapě (`resolveExtensionAppearance`).
 */
export function listStyleVariants(style: ObjectStyle, version: string, mergeBase: boolean): StyleVariant[] {
  const merge = (app: Appearance): Appearance => (mergeBase ? { ...style.base, ...app } : app);
  const out: StyleVariant[] = [];
  for (const rule of style.rules ?? []) {
    for (const [value, app] of Object.entries(rule.values)) {
      out.push({ attr: rule.attr, value, label: labelForAttribute(rule.attr, value, version), app: merge(app) });
    }
  }
  for (const c of style.cases ?? []) {
    const when = Object.entries(c.when);
    out.push({
      attr: when.map(([attr]) => attr).join(' + '),
      value: when.map(([, value]) => value).join(' + '),
      label: when.map(([attr, value]) => labelForAttribute(attr, value, version) ?? value).join(' · '),
      app: merge(c.app),
    });
  }
  return out;
}

/** Vzhled jedné hodnoty (nebo kombinace hodnot) číselníku — dlaždice legendy. */
export interface DialectVariantLook {
  /** Popisek hodnoty („přepínatelná", „sdělovací · kabelová rezerva"…). */
  value: string;
  look: DialectLook;
}

/** Má vzhled vlastní kresbu (značku, souběžné čáry, značky podél linie)? */
function hasOwnDrawing(app: Appearance): boolean {
  return Boolean(app.symbol || app.lineSymbol || app.lines?.length || app.axis === false || app.ticksMm);
}

/** Varianty jsou statické (styly dialektu) — výpočet jednou na verzi a kód. */
const variantLookCache = new Map<string, DialectVariantLook[]>();

/**
 * Vzhledy objektového typu podle hodnot číselníků dle stylů dialektu —
 * Legenda DTM ukáže dlaždici pro každou, stejně jako mapa. Základní vzhled
 * jen s vlastní kresbou (značka, souběžné čáry), jinak by legendu zaplnily
 * obecné tečky a čáry.
 *
 * U objektů JVF v souboru dialektu jen hodnoty z rozšíření číselníků
 * (ostatní hodnoty kreslí Katalog DTM ČR). Prázdné = jediný vzhled.
 */
export function resolveDialectVariantLooks(ot: ObjektovyTyp): DialectVariantLook[] {
  const extension = !bindings.has(ot);
  const b = bindings.get(ot) ?? extensionBindings.get(ot);
  if (!b) return [];
  const key = `${b.version}|${extension ? 'ext' : 'style'}|${ot.codeBase}-${ot.codeSuffix}`;
  let looks = variantLookCache.get(key);
  if (!looks) {
    looks = computeVariantLooks(b, getObjectStyle(b.styles, ot), extension);
    variantLookCache.set(key, looks);
  }
  return looks;
}

function computeVariantLooks(b: DialectBinding, style: ObjectStyle | undefined, extension: boolean): DialectVariantLook[] {
  if (!style) return [];
  const out = listStyleVariants(style, b.version, !extension).flatMap((v) => {
    const l = look(b, v.app);
    return l ? [{ value: v.label ?? v.value, look: l }] : [];
  });
  if (out.length === 0) return [];
  // Základ (ostatní hodnoty) první, má-li vlastní kresbu.
  const base = !extension && hasOwnDrawing(style.base) ? look(b, style.base) : undefined;
  return base ? [{ value: OTHER_VALUES_LABEL, look: base }, ...out] : out;
}

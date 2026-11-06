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
  getStyleTable,
  resolveAppearance,
  resolveExtensionAppearance,
  resolveRepresentativeAppearance,
  resolveRotationDeg,
  usesDialectStyle,
  type Appearance,
  type ObjektovyTyp,
  type StyleTable,
  type ZaznamObjektu,
} from 'jvf-parser';

interface DialectBinding {
  /** Adresář předbarvených SVG v `public/symboly/` (= id dialektu). */
  symbolDir: string;
  styles: StyleTable;
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
    if (usesDialectStyle(version, ot)) bindings.set(ot, { symbolDir: dialect.id, styles });
    else if (extensions?.[`${ot.codeBase}-${ot.codeSuffix}`]) {
      extensionBindings.set(ot, { symbolDir: dialect.id, styles: extensions });
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

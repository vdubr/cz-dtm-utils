/**
 * Symbologie dialektů JVF DTM ve vieweru — UDM (ČKZ) a ŽXML (SŽ).
 *
 * Objektové typy načtené ze souboru dialektu se kreslí dle tabulky vzhledů
 * dialektu (`getStyleTable(verze)` z jvf-parser) místo katalogu symbolů ČÚZK.
 * Která tabulka k typu patří, se eviduje přes `markDialectObjekty` podle
 * **verze projektu** (WeakMap nad `ObjektovyTyp` — stejné instance tečou do
 * 2D vrstev, 3D scény i panelů).
 *
 * UDM pokrývá všechny objekty DTM i nad rámec DTM. ŽXML (fotokatalog MOZeK)
 * má vlastní vzhled hlavně u objektů SŽ (`999…`); objekty JVF bez vlastní
 * značky / čárkování se kreslí dál symbologií ČÚZK.
 */
import {
  dialectOf,
  getStyleTable,
  resolveAppearance,
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

/**
 * Označit objektové typy projektu dané verze — kreslit symbologií dialektu.
 * U čistého JVF DTM nic nedělá.
 */
export function markDialectObjekty(objekty: readonly ObjektovyTyp[], version: string): void {
  const dialect = dialectOf(version);
  const styles = getStyleTable(version);
  if (!dialect || !styles) return;
  for (const ot of objekty) {
    // ŽXML: objekty JVF bez vlastní značky zůstávají v symbologii ČÚZK
    // (sdílené pravidlo s exportem do CAD — `usesDialectStyle`).
    if (!usesDialectStyle(version, ot)) continue;
    bindings.set(ot, { symbolDir: dialect.id, styles });
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
}

function look(binding: DialectBinding, app: Appearance | undefined, zaznam?: ZaznamObjektu): DialectLook | undefined {
  if (!app) return undefined;
  const color = app.color ?? '#000000';
  return {
    appearance: app,
    symbolPath: app.symbol
      ? `${binding.symbolDir}/${app.symbol}_${color.replace('#', '').toLowerCase()}.svg`
      : undefined,
    rotationDeg: resolveRotationDeg(app, zaznam),
  };
}

/** Vzhled typu / záznamu dle dialektu, nebo `undefined` (typ není označen). */
export function resolveDialectLook(ot: ObjektovyTyp, zaznam?: ZaznamObjektu): DialectLook | undefined {
  const b = bindings.get(ot);
  return b ? look(b, resolveAppearance(b.styles, ot, zaznam), zaznam) : undefined;
}

/** Reprezentativní vzhled typu (legenda, panel vrstev). */
export function resolveDialectRepresentativeLook(ot: ObjektovyTyp): DialectLook | undefined {
  const b = bindings.get(ot);
  return b ? look(b, resolveRepresentativeAppearance(b.styles, ot)) : undefined;
}

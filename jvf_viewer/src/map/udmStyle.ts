/**
 * Symbologie UDM (Univerzální datový model ČKZ) ve vieweru.
 *
 * Objektové typy načtené ze souboru UDM se kreslí dle vzhledů UDM
 * (`UDM_STYLES`, generováno z tabulky ČKZ) místo katalogu symbolů ČÚZK —
 * týká se všech objektů souboru (DTM i nad rámec DTM `94…`). Které typy
 * patří do UDM projektu, se eviduje přes `markUdmObjekty` (WeakSet nad
 * `ObjektovyTyp` — stejné instance tečou do 2D vrstev, 3D scény i panelů).
 */
import type { ObjektovyTyp, ZaznamObjektu } from 'jvf-parser';
import { UDM_STYLES, type UdmAppearance, type UdmObjectStyle } from './udmStyles.js';

const udmTypes = new WeakSet<ObjektovyTyp>();

/** Označit objektové typy jako UDM (kreslit symbologií UDM). */
export function markUdmObjekty(objekty: readonly ObjektovyTyp[]): void {
  for (const ot of objekty) udmTypes.add(ot);
}

/** Kreslí se daný objektový typ symbologií UDM? */
export function isUdmStyled(ot: ObjektovyTyp): boolean {
  return udmTypes.has(ot);
}

function styleFor(ot: ObjektovyTyp): UdmObjectStyle | undefined {
  return UDM_STYLES[`${ot.codeBase}-${ot.codeSuffix}`];
}

/**
 * Vzhled záznamu: základní vzhled objektu + složky z pravidel podle hodnot
 * atributů (číselníků). Bez záznamu jen základní vzhled. `undefined` pokud
 * objekt v tabulce UDM není.
 */
export function resolveUdmAppearance(
  ot: ObjektovyTyp,
  zaznam?: ZaznamObjektu,
): UdmAppearance | undefined {
  const style = styleFor(ot);
  if (!style) return undefined;
  const app: UdmAppearance = { ...style.base };
  if (zaznam && style.rules) {
    for (const rule of style.rules) {
      const raw = zaznam.attributes?.[rule.attr];
      if (raw === undefined || raw === null) continue;
      Object.assign(app, rule.values[String(raw)]);
    }
  }
  return app;
}

/**
 * Reprezentativní vzhled pro legendu / panel vrstev: složky, které objekt
 * přebírá z číselníku, se vezmou z první položky, která je má.
 */
export function resolveUdmRepresentativeAppearance(ot: ObjektovyTyp): UdmAppearance | undefined {
  const style = styleFor(ot);
  if (!style) return undefined;
  const app: UdmAppearance = { ...style.base };
  for (const rule of style.rules ?? []) {
    for (const value of Object.values(rule.values)) {
      for (const [k, v] of Object.entries(value) as [keyof UdmAppearance, never][]) {
        if (app[k] === undefined) app[k] = v;
      }
    }
  }
  return app;
}

/** Cesta k SVG symbolu UDM (relativně k `public/symboly/`) v dané barvě. */
export function udmSymbolPath(symbol: string, color: string): string {
  return `udm/${symbol}_${color.replace('#', '').toLowerCase()}.svg`;
}

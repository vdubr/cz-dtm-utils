/**
 * Řešení vzhledu objektu z tabulky stylů dialektu (UDM, ŽXML) a registr
 * tabulek podle verze datového modelu.
 */
import { dialectOf } from 'jvf-dtm-types';
import type { ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';
import { UDM_STYLES } from '../udm-2.1.1/generated/styles.js';
import { ZXML_JVF_EXTENSIONS, ZXML_STYLES } from '../zxml-1.5.1.6/generated/styles.js';
import type { Appearance, CaseRule, ObjectStyle, StyleTable } from './types.js';

type CodeKey = Pick<ObjektovyTyp, 'codeBase' | 'codeSuffix'>;

/**
 * Tabulky stylů podle dialektu. Kódy objektů ŽXML jsou v 1.4.2.1 i 1.5.1.6
 * stejné, sdílí se tedy jedna tabulka (styly SLD z LDM 1.5.0.2).
 */
const STYLES_BY_DIALECT: Readonly<Record<string, StyleTable>> = {
  udm: UDM_STYLES,
  zxml: ZXML_STYLES,
};

/** Tabulka stylů pro verzi datového modelu, nebo `undefined` (čisté JVF DTM). */
export function getStyleTable(version: string): StyleTable | undefined {
  const d = dialectOf(version);
  return d ? STYLES_BY_DIALECT[d.id] : undefined;
}

/**
 * Rozšíření číselníků dialektu u objektů JVF (ŽXML: hodnoty, které SŽ přidala
 * k číselníkům JVF nebo atributy SŽ u objektů JVF) — jen v souborech dialektu.
 */
const EXTENSIONS_BY_DIALECT: Readonly<Record<string, StyleTable>> = {
  zxml: ZXML_JVF_EXTENSIONS,
};

/** Tabulka rozšíření číselníků u objektů JVF pro verzi, nebo `undefined`. */
export function getExtensionTable(version: string): StyleTable | undefined {
  const d = dialectOf(version);
  return d ? EXTENSIONS_BY_DIALECT[d.id] : undefined;
}

/**
 * Vzhled záznamu objektu JVF podle rozšíření číselníku dialektu: úplný vzhled
 * položky, jejíž hodnoty záznam má (složená pravidla mají přednost), jinak
 * `undefined` — záznam se kreslí Katalogem DTM ČR.
 */
export function resolveExtensionAppearance(
  extensions: StyleTable,
  ot: CodeKey,
  zaznam: ZaznamObjektu
): Appearance | undefined {
  const style = getObjectStyle(extensions, ot);
  if (!style) return undefined;
  const hit = style.cases?.find((c) => caseMatches(c, zaznam));
  if (hit) return { ...hit.app };
  for (const rule of style.rules ?? []) {
    const raw = zaznam.attributes?.[rule.attr];
    const app = raw === undefined || raw === null ? undefined : rule.values[String(raw)];
    if (app) return { ...app };
  }
  return undefined;
}

/** Styl objektového typu (klíč `<code_base>-<suffix>`), nebo `undefined`. */
export function getObjectStyle(styles: StyleTable, ot: CodeKey): ObjectStyle | undefined {
  return styles[`${ot.codeBase}-${ot.codeSuffix}`];
}

/**
 * Kreslí se objektový typ souboru dané verze vzhledem dialektu (jinak
 * Katalogem DTM ČR)? Jediné rozhodnutí pro viewer i export do CAD.
 *
 * UDM pokrývá všechny objekty. ŽXML (styly SLD SŽ) jen objekty SŽ (`999…`)
 * — objekty JVF kreslí ISTEM stejně jako Katalog ČÚZK.
 */
export function usesDialectStyle(version: string, ot: CodeKey): boolean {
  const styles = getStyleTable(version);
  return Boolean(styles && getObjectStyle(styles, ot));
}

/**
 * Vzhled záznamu: základní vzhled objektu + složky z pravidel podle hodnot
 * atributů (číselníků). Bez záznamu jen základní vzhled. `undefined` pokud
 * objekt v tabulce není.
 */
export function resolveAppearance(
  styles: StyleTable,
  ot: CodeKey,
  zaznam?: ZaznamObjektu
): Appearance | undefined {
  const style = getObjectStyle(styles, ot);
  if (!style) return undefined;
  const app: Appearance = { ...style.base };
  if (zaznam && style.rules) {
    for (const rule of style.rules) {
      const raw = zaznam.attributes?.[rule.attr];
      if (raw === undefined || raw === null) continue;
      Object.assign(app, rule.values[String(raw)]);
    }
  }
  const hit = zaznam && style.cases?.find((c) => caseMatches(c, zaznam));
  if (hit) Object.assign(app, hit.app);
  return app;
}

function caseMatches(c: CaseRule, zaznam: ZaznamObjektu): boolean {
  const value = (attr: string): string | undefined => {
    const raw = zaznam.attributes?.[attr];
    return raw === undefined || raw === null ? undefined : String(raw);
  };
  return (
    Object.entries(c.when).every(([attr, v]) => value(attr) === v) &&
    !Object.entries(c.unless ?? {}).some(([attr, v]) => value(attr) === v)
  );
}

/**
 * Reprezentativní vzhled (legenda, panel vrstev, hladina v CAD): složky,
 * které objekt přebírá z číselníku, se vezmou z první položky, která je má.
 */
export function resolveRepresentativeAppearance(
  styles: StyleTable,
  ot: CodeKey
): Appearance | undefined {
  const style = getObjectStyle(styles, ot);
  if (!style) return undefined;
  const app: Appearance = { ...style.base };
  const items = [
    ...(style.rules ?? []).flatMap((rule) => Object.values(rule.values)),
    ...(style.cases ?? []).map((c) => c.app),
  ];
  for (const value of items) {
    for (const [k, v] of Object.entries(value) as [keyof Appearance, never][]) {
      if (app[k] === undefined) app[k] = v;
    }
  }
  return app;
}

/**
 * Natočení symbolu záznamu ve stupních podle `rotationAttr` vzhledu,
 * nebo `undefined`.
 */
export function resolveRotationDeg(app: Appearance | undefined, zaznam?: ZaznamObjektu): number | undefined {
  if (!app?.rotationAttr || !zaznam) return undefined;
  const raw = Number(zaznam.attributes?.[app.rotationAttr]);
  return Number.isFinite(raw) ? raw : undefined;
}

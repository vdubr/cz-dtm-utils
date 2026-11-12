import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Feature, { type FeatureLike } from 'ol/Feature.js';
import OlPoint from 'ol/geom/Point.js';
import OlLineString from 'ol/geom/LineString.js';
import OlMultiLineString from 'ol/geom/MultiLineString.js';
import type OlGeometry from 'ol/geom/Geometry.js';
import OlPolygon from 'ol/geom/Polygon.js';
import Style from 'ol/style/Style.js';
import CircleStyle from 'ol/style/Circle.js';
import IconStyle from 'ol/style/Icon.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import { extend, createEmpty } from 'ol/extent.js';
import type { Extent } from 'ol/extent.js';
import type OlMap from 'ol/Map.js';
import type { ObjektovyTyp, ZaznamObjektu, Geometry, GmlPolygon } from 'jvf-parser';
import { endConnectors, offsetPolyline } from 'jvf-parser';
import {
  KATALOG_DEFAULT_COLOR as DEFAULT_COLOR,
  KATALOG_FALLBACK_COLORS as FALLBACK_COLORS,
  parseKatalogLineStyle,
  resolveKatalogLook,
  resolveKatalogRepresentativeLook,
  resolveKatalogVariantLooks,
  resolveKatalogVariantValue,
  type KatalogLook,
} from 'jvf-parser';
import {
  isDialectStyled,
  resolveDialectLook,
  resolveDialectRepresentativeLook,
  resolveDialectVariantLooks,
  type DialectLook,
} from './dialectStyle.js';
import {
  isShowZapis,
  isHighlightZapis,
  isChangesetZapis,
  type ChangesetZapisType,
} from '../state/changesetToggle.js';
import { dtmIdOf, resolveZaznamId } from '../state/zaznamId.js';
import { getLineSymbol, loadLineSymbol } from './lineSymbolShapes.js';
import { drawLineSymbols } from './lineSymbolRenderer.js';
import { drawRepeatSymbols, getRepeatImage, loadRepeatImage } from './repeatSymbol.js';
import {
  isContentPartVisible,
  isLevelVisible,
  isProjectVisible,
  resolveLevelKey,
  type LevelKey,
} from '../state/featureFilter.js';
import { resolveProjectKey } from '../state/projects.js';

// Barvy obsahových částí (náhradní barva objektů mimo Katalog)
export { KATALOG_FALLBACK_COLORS as LAYER_COLORS } from 'jvf-parser';

/**
 * Barvy pro vizualizaci changeset záznamů podle `ZapisObjektu`:
 *   'i' — nové (zeleně), 'u' — editované (oranžově), 'd' — mazané (červeně).
 * Záměrně syté, aby šly typy změn na první pohled odlišit. Barvy odpovídají
 * badge barvám I/U/D v Přehledu prvků (style.css). Kreslí se jako průsvitný
 * lem POD prvkem — prvek sám si ponechá styl Katalogu (jako v legendě).
 */
export const ZAPIS_HIGHLIGHT_COLORS: Record<
  ChangesetZapisType,
  { stroke: string; fill: string }
> = {
  i: { stroke: '#2da44e', fill: '#2da44e33' },
  u: { stroke: '#bf8700', fill: '#bf870033' },
  d: { stroke: '#e02020', fill: '#e0202033' },
};

/** Base path for SVG symbols served from public/symboly/ */
const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

/**
 * Referenční měřítko pro převod mm (papírová velikost v katalogu) na metry
 * v terénu. 1:500 znamená, že 1 mm na papíře = 0,5 m v terénu.
 */
const REFERENCE_SCALE = 500;
const MM_TO_METERS = 0.001;
/** Kolik metrů v terénu odpovídá 1 mm v katalogu. */
const MM_TO_MAP_METERS = MM_TO_METERS * REFERENCE_SCALE;

/**
 * Bodové SVG symboly mají velikost definovanou ve světových souřadnicích
 * (terénu), ne v pixelech obrazovky. Konvence ČÚZK Katalogu kartografických
 * symbolů: 1 SVG-px = 0,01 mm na papíře. Při referenčním měřítku 1:500 to
 * znamená:
 *
 *   1 SVG-px = 0,01 mm × 500 = 5 mm = 0,005 m v terénu
 *
 * Symbol se tedy v mapě chová jako reálný objekt — při přiblížení se
 * zvětšuje, při oddálení zmenšuje stejně jako linie/plochy. OL `Icon.scale`
 * násobí nativní pixelovou šířku SVG, takže scale potřebný pro
 * "1 SVG-px = SVG_PX_TO_METERS metrů" je čistě `SVG_PX_TO_METERS / resolution`
 * (nezávisle na velikosti konkrétního SVG).
 */
const SVG_PX_TO_METERS = 0.005;

/**
 * Nad touto resolution mapy se SVG symboly nahrazují malou barevnou tečkou
 * (CircleStyle). Důvod: při velkém oddálení by symbol byl menší než pixel
 * a nečitelný; jednotná tečka je rozeznatelnější.
 *
 * Při resolution = 4 m/px má 1 SVG-px = 0,005 m / 4 m/px = 0,00125 px,
 * takže 200 SVG-px symbol má ~0,25 px na obrazovce — neviditelný.
 */
const HIDE_ICON_RESOLUTION = 4.0;

/**
 * Vypočítá `IconStyle.scale` pro aktuální resolution mapy. Vrací `null`
 * pokud je mapa příliš oddálená — volající má místo SVG vykreslit tečku.
 */
function adaptiveIconScale(resolution: number): number | null {
  if (resolution <= 0) return SVG_PX_TO_METERS;
  if (resolution >= HIDE_ICON_RESOLUTION) return null;
  return SVG_PX_TO_METERS / resolution;
}

function flatCoordsToRing(flat: number[], dim: number): number[][] {
  const ring: number[][] = [];
  for (let i = 0; i + 1 < flat.length; i += dim) {
    const x = flat[i];
    const y = flat[i + 1];
    if (x === undefined || y === undefined) continue;
    ring.push([x, y]);
  }
  return ring;
}

function buildPolygonRings(poly: GmlPolygon): number[][][] {
  const dim = poly.srsDimension > 0 ? poly.srsDimension : 2;
  const rings: number[][][] = [flatCoordsToRing(poly.exterior, dim)];
  for (const interior of poly.interiors) {
    rings.push(flatCoordsToRing(interior, dim));
  }
  return rings;
}

/** Resolve pixel stroke width from katalog mm value (1mm ≈ 3.78px at 96dpi, scale for screen legibility) */
function mmToPx(mm: number): number {
  return Math.max(1, mm * 3.78);
}

/** Čárkování z popisu typu čáry Katalogu (mm papíru) — viz `parseKatalogLineStyle`. */
export const parseLineStyle = parseKatalogLineStyle;

/**
 * Convert dash pattern from mm (on paper at REFERENCE_SCALE) to px on screen
 * at the given map resolution. Zoom-dependent — dash grows/shrinks with zoom.
 */
function dashMmToPx(dashMm: number[], resolution: number): number[] {
  if (resolution <= 0) return dashMm;
  return dashMm.map((mm) => {
    const meters = mm * MM_TO_MAP_METERS;
    const px = meters / resolution;
    return Math.max(2, px);
  });
}

export interface ResolvedStyle {
  fillColor: string;
  strokeColor: string;
  strokeWidthPx: number;
  /** Dash pattern in mm (paper units), converted to px per zoom in style fn. */
  lineDashMm?: number[];
  /** SVG filename for point symbol, if available */
  pointSvg?: string;
  /** Natočení symbolu bodu ve stupních (proti směru hodinových ručiček, jako v CAD). */
  pointRotationDeg?: number;
  /** Značka vložená do linie (`*_l_*.svg`, Katalog) — mapa, legenda a náhledy. */
  lineSymbolSvg?: string;
  /** Příčky na plné čáře [tloušťka, rozestup] v mm papíru (plot). */
  lineTicksMm?: number[];
  /** Další čáry linie (ŽXML) — souběžné s osou (odsazení v mm papíru, kladně vlevo). */
  lineStrokes?: ResolvedLineStroke[];
  /** Osa linie se nekreslí, jen `lineStrokes` / `lineRepeat` (ŽXML, např. brzda). */
  lineNoAxis?: boolean;
  /** Značka opakovaná podél linie (ŽXML GraphicStroke): SVG a rozestupy v mm papíru. */
  lineRepeat?: { svg: string; intervalMm: number; startMm: number };
}

export interface ResolvedLineStroke {
  color: string;
  widthPx: number;
  dashMm?: number[];
  offsetMm: number;
  /** Konce spojit s osou kolmou úsečkou (izolovaná kolejnice). */
  endTicks: boolean;
}

/** Příčka je oproti linii širší tah (jako ČÚZK: ~2,5× tloušťka čáry, nejméně 3 px). */
export function tickWidthPx(lineWidthPx: number): number {
  return Math.max(3, lineWidthPx * 2.5);
}
/** Hustší příčky nekreslit (px mezi příčkami) — při oddálení by splynuly s čarou. */
const MIN_TICK_GAP_PX = 6;

/** Příčky na plné čáře (plot): širší čárkovaný tah přes linii, nebo `null`. */
function createTickStyle(s: ResolvedStyle, resolution: number): Style | null {
  if (!s.lineTicksMm) return null;
  // Příčka je tenká (1 px), ne krátký úsek čáry (min. 2 px u čárkování).
  const px = s.lineTicksMm.map((mm, i) => (i % 2 === 0 ? 1 : (mm * MM_TO_MAP_METERS) / resolution));
  if (Math.min(...px.filter((_, i) => i % 2 === 1)) < MIN_TICK_GAP_PX) return null;
  // Příčka na začátku linie by splynula s koncem — posun o půl rozestupu.
  const offset = -(px[1] ?? 0) / 2;
  return new Style({
    stroke: new Stroke({
      color: s.strokeColor,
      width: tickWidthPx(s.strokeWidthPx),
      lineDash: px,
      lineDashOffset: offset,
      lineCap: 'butt',
    }),
  });
}

/** Nejmenší mezera čárkování (mm papíru), do které se značka kreslí; menší = tečkování. */
const LINE_SYMBOL_MIN_GAP_MM = 4;
/** Rozestup značek na linii bez čárkování (zábradlí, lanové dráhy), mm papíru. */
const LINE_SYMBOL_INTERVAL_MM = 20;
/**
 * Užší značku nekreslit (px obrazovky) — při oddálení by byla nečitelná;
 * mezery čárkování zůstanou prázdné (jako mapa ČÚZK v menším měřítku).
 */
const LINE_SYMBOL_MIN_WIDTH_PX = 12;

/**
 * Styl značek vložených do linie (vlastní renderer — map/lineSymbolRenderer):
 * do mezer čárkování, nebo v pravidelném rozestupu. `null`, dokud se SVG
 * značky nenačte (vrstvu pak překreslí `buildJvfLayers`).
 */
function createLineSymbolStyle(s: ResolvedStyle, resolution: number): Style | null {
  const shape = s.lineSymbolSvg ? getLineSymbol(s.lineSymbolSvg) : undefined;
  if (!shape) return null;
  const toPx = (mm: number): number => (mm * MM_TO_MAP_METERS) / resolution;
  // Nativní velikost značky (1 SVG jednotka = 0,01 mm papíru, jako body).
  const widthPx = (shape.viewBox[2] * SVG_PX_TO_METERS) / resolution;
  const maxGapMm = s.lineDashMm ? Math.max(...s.lineDashMm.filter((_, i) => i % 2 === 1)) : 0;
  const dashPx = s.lineDashMm && maxGapMm >= LINE_SYMBOL_MIN_GAP_MM ? dashMmToPx(s.lineDashMm, resolution) : undefined;
  return new Style({
    renderer: (coords, state) => {
      const pr = state.pixelRatio;
      drawLineSymbols(state.context, coords as number[][], {
        shape,
        linePx: s.strokeWidthPx * pr,
        ...(dashPx ? { dashPx: dashPx.map((v) => v * pr) } : {}),
        intervalPx: toPx(LINE_SYMBOL_INTERVAL_MM) * pr,
        widthPx: widthPx * pr,
        minWidthPx: LINE_SYMBOL_MIN_WIDTH_PX * pr,
      });
    },
  });
}

/**
 * Odvozené geometrie linie (souběžné čáry) — geometrie prvku se nemění,
 * počítají se jednou na prvek a odsazení.
 */
const derivedGeometry = new WeakMap<FeatureLike, Map<string, OlGeometry>>();

function derived(feature: FeatureLike, key: string, build: (coords: number[][]) => OlGeometry): OlGeometry | undefined {
  let cache = derivedGeometry.get(feature);
  if (!cache) {
    cache = new Map();
    derivedGeometry.set(feature, cache);
  }
  let g = cache.get(key);
  if (!g) {
    const geom = feature.getGeometry();
    if (!(geom instanceof OlLineString)) return undefined;
    g = build(geom.getCoordinates());
    cache.set(key, g);
  }
  return g;
}

/** Další čáry linie (ŽXML): souběžné s osou v odsazení (mm papíru → m), s případnými spojkami na koncích. */
function createLineStrokeStyles(s: ResolvedStyle, resolution: number): Style[] {
  return (s.lineStrokes ?? []).map((ls) => {
    const d = ls.offsetMm * MM_TO_MAP_METERS;
    return new Style({
      geometry: (f) =>
        derived(f, `${d}${ls.endTicks ? 't' : ''}`, (coords) => {
          const off = offsetPolyline(coords, d);
          return ls.endTicks ? new OlMultiLineString([off, ...endConnectors(coords, off)]) : new OlLineString(off);
        }),
      stroke: new Stroke({
        color: ls.color,
        width: ls.widthPx,
        ...(ls.dashMm ? { lineDash: dashMmToPx(ls.dashMm, resolution) } : {}),
        lineCap: 'butt',
      }),
    });
  });
}

/** Značka opakovaná podél linie (ŽXML GraphicStroke), nebo `null`, dokud se SVG nenačte. */
function createRepeatStyle(s: ResolvedStyle, resolution: number): Style | null {
  const r = s.lineRepeat;
  const image = r ? getRepeatImage(r.svg) : undefined;
  if (!r || !image) return null;
  const toPx = (mm: number): number => (mm * MM_TO_MAP_METERS) / resolution;
  return new Style({
    renderer: (coords, state) => {
      const pr = state.pixelRatio;
      drawRepeatSymbols(state.context, coords as number[][], {
        image,
        pxPerUnit: (SVG_PX_TO_METERS / resolution) * pr,
        intervalPx: toPx(r.intervalMm) * pr,
        startPx: toPx(r.startMm) * pr,
      });
    },
  });
}

/**
 * ResolvedStyle ze vzhledu Katalogu DTM ČR (`resolveKatalogLook` — podle typu
 * geometrie a hodnot atributů). Plocha bez výplně (ochranná pásma, záměry)
 * dostane jen průsvitný nádech barvy obrysu; linie a obrys bez barvy přebírá
 * barvu výplně; objekt bez barvy náhradní barvu obsahové části.
 */
function buildKatalogResolvedStyle(look: KatalogLook, obsahovaCast: string): ResolvedStyle {
  const fallback = FALLBACK_COLORS[obsahovaCast] ?? DEFAULT_COLOR;
  const stroke = look.color ?? look.fill ?? fallback;
  return {
    fillColor: look.fill ?? stroke + '1a',
    strokeColor: stroke,
    strokeWidthPx: look.widthMm != null ? mmToPx(look.widthMm) : 1.5,
    ...(look.dashMm ? { lineDashMm: look.dashMm } : {}),
    ...(look.lineSvg ? { lineSymbolSvg: look.lineSvg } : {}),
    ...(look.ticksMm ? { lineTicksMm: look.ticksMm } : {}),
    ...(look.svg ? { pointSvg: look.svg } : {}),
  };
}

/**
 * ResolvedStyle ze vzhledu dialektu (UDM, ŽXML). Plocha bez výplně (UDM)
 * dostane jen průsvitný nádech barvy objektu; symbol bodu je SVG v barvě
 * objektu / položky číselníku.
 */
function buildDialectResolvedStyle(look: DialectLook): ResolvedStyle {
  const app = look.appearance;
  const color = app.color ?? '#000000';
  return {
    fillColor: app.fill ?? color + '1a',
    strokeColor: color,
    strokeWidthPx: mmToPx(app.widthMm ?? 0.25),
    lineDashMm: app.dashMm,
    pointSvg: look.symbolPath,
    ...(app.ticksMm ? { lineTicksMm: app.ticksMm } : {}),
    ...(look.rotationDeg ? { pointRotationDeg: look.rotationDeg } : {}),
    ...(app.lines
      ? {
          lineStrokes: app.lines.map((l) => ({
            color: l.color ?? color,
            widthPx: mmToPx(l.widthMm ?? app.widthMm ?? 0.25),
            ...(l.dashMm ? { dashMm: l.dashMm } : {}),
            offsetMm: l.offsetMm ?? 0,
            endTicks: Boolean(l.endTicks),
          })),
        }
      : {}),
    ...(app.axis === false ? { lineNoAxis: true } : {}),
    ...(app.lineSymbol && look.lineSymbolPath
      ? { lineRepeat: { svg: look.lineSymbolPath, intervalMm: app.lineSymbol.intervalMm, startMm: app.lineSymbol.startMm } }
      : {}),
  };
}

/**
 * Resolve style for an ObjektovyTyp (vzhled objektu a geometrie, bez
 * záznamu). Exported so threeScene.ts can use the same logic.
 */
export function resolveStyle(ot: ObjektovyTyp): ResolvedStyle {
  const dialect = resolveDialectLook(ot);
  if (dialect) return buildDialectResolvedStyle(dialect);
  const look = resolveKatalogLook(ot);
  if (look) return buildKatalogResolvedStyle(look, ot.obsahovaCast);
  const fallback = FALLBACK_COLORS[ot.obsahovaCast] ?? DEFAULT_COLOR;
  return { fillColor: fallback + '33', strokeColor: fallback, strokeWidthPx: 1.5 };
}

/**
 * Reprezentativní styl objektového typu pro base-only kontexty (legenda,
 * vrstvový panel). Když objekt nemá barvu v základu ani ve variantě
 * geometrie, ale nese ji některá varianta atributu (typicky trasy sítí),
 * vezme se z ní — aby swatch odpovídal tomu, jak se prvek reálně vykreslí.
 */
export function resolveRepresentativeStyle(ot: ObjektovyTyp): ResolvedStyle {
  const dialect = resolveDialectRepresentativeLook(ot);
  if (dialect) return buildDialectResolvedStyle(dialect);
  const look = resolveKatalogRepresentativeLook(ot);
  return look ? buildKatalogResolvedStyle(look, ot.obsahovaCast) : resolveStyle(ot);
}

/** Styl jedné hodnoty atributu (dlaždice legendy). */
export interface VariantStyle {
  /** Hodnota atributu z Katalogu („nástěnná konzola", „NN", …). */
  value: string;
  style: ResolvedStyle;
}

/**
 * Styly objektu podle hodnoty atributu — legenda ukáže dlaždici pro každou,
 * aby odpovídala mapě: Katalog DTM ČR, u dialektů (UDM, ŽXML) pravidla
 * stylů dialektu; u objektů JVF v souboru ŽXML navíc hodnoty z rozšíření
 * číselníků SŽ. Prázdné u objektů s jedním vzhledem.
 */
export function resolveVariantStyles(ot: ObjektovyTyp): VariantStyle[] {
  const dialect = resolveDialectVariantLooks(ot).map((v) => ({
    value: v.value,
    style: buildDialectResolvedStyle(v.look),
  }));
  if (isDialectStyled(ot)) return dialect;
  // Katalog je statický — styly variant stačí spočítat jednou na kód.
  const key = `${ot.codeBase}-${ot.codeSuffix}-${ot.obsahovaCast}`;
  let styles = variantStyleCache.get(key);
  if (!styles) {
    styles = resolveKatalogVariantLooks(ot).map((v) => ({
      value: v.value,
      style: buildKatalogResolvedStyle(v.look, ot.obsahovaCast),
    }));
    variantStyleCache.set(key, styles);
  }
  // Rozšíření číselníků SŽ (jen v souboru ŽXML) za variantami Katalogu;
  // objekt s jediným vzhledem Katalogu ho má jako „ostatní hodnoty".
  if (dialect.length === 0) return styles;
  const katalog = styles.length > 0 ? styles : [{ value: 'ostatní hodnoty', style: resolveRepresentativeStyle(ot) }];
  return [...katalog, ...dialect];
}
const variantStyleCache = new Map<string, VariantStyle[]>();

/** Styl podle načtených dat a počty hodnot atributu, podle kterých se vzhled liší. */
export interface DataStyle {
  style: ResolvedStyle;
  /** Hodnoty atributu s vlastním vzhledem a jejich počet záznamů (sestupně). */
  variants: { value: string; count: number }[];
}

/**
 * Značka objektového typu podle načtených záznamů (panel vrstev, Přehled
 * prvků): u objektů, jejichž vzhled závisí na atributu (podpěrné zařízení,
 * trasy sítí, …), vzhled nejčastější hodnoty v datech — ne první varianty
 * Katalogu, kterou kreslí legenda bez dat. Jinak reprezentativní styl.
 */
export function resolveDataStyle(ot: ObjektovyTyp): DataStyle {
  // Záznamy se po načtení nemění — panel vrstev i Přehled prvků (překreslují
  // se často) sdílí jeden výpočet na objektový typ.
  let ds = dataStyleCache.get(ot);
  if (!ds) {
    ds = computeDataStyle(ot);
    dataStyleCache.set(ot, ds);
  }
  return ds;
}
const dataStyleCache = new WeakMap<ObjektovyTyp, DataStyle>();

function computeDataStyle(ot: ObjektovyTyp): DataStyle {
  // Jen objekty, které mají v Katalogu víc vzhledů (jako dlaždice legendy);
  // hodnoty podle Katalogu — u dialektů reprezentativní styl.
  if (ot.zaznamy.length > 0 && !isDialectStyled(ot) && resolveVariantStyles(ot).length > 0) {
    const counts = new Map<string, { count: number; first: ZaznamObjektu }>();
    for (const z of ot.zaznamy) {
      const value = resolveKatalogVariantValue(ot, z);
      if (value === undefined) continue;
      const entry = counts.get(value);
      if (entry) entry.count++;
      else counts.set(value, { count: 1, first: z });
    }
    if (counts.size > 0) {
      const sorted = [...counts.entries()].sort((a, b) => b[1].count - a[1].count);
      return {
        style: resolveStyleForZaznam(ot, sorted[0]![1].first),
        variants: sorted.map(([value, { count }]) => ({ value, count })),
      };
    }
  }
  return { style: resolveRepresentativeStyle(ot), variants: [] };
}

/**
 * Styl záznamu: vzhled Katalogu podle typu geometrie objektu a hodnoty
 * atributu (varianta pro bod nese značku, pro plochu obrys a výplň).
 */
export function resolveStyleForZaznam(
  ot: ObjektovyTyp,
  zaznam: ZaznamObjektu,
): ResolvedStyle {
  const dialect = resolveDialectLook(ot, zaznam);
  if (dialect) return buildDialectResolvedStyle(dialect);
  const look = resolveKatalogLook(ot, zaznam);
  return look ? buildKatalogResolvedStyle(look, ot.obsahovaCast) : resolveStyle(ot);
}

/**
 * Build OL Style for a given geometry type from a ResolvedStyle. When the
 * style carries a dash pattern, it must be resolved per frame using the
 * current map resolution (hence `resolution` param).
 */
function createStyleForGeom(
  geomType: Geometry['type'],
  s: ResolvedStyle,
  resolution: number,
): Style | Style[] {
  const dashPx = s.lineDashMm ? dashMmToPx(s.lineDashMm, resolution) : undefined;
  switch (geomType) {
    case 'Point': {
      // Při velkém oddálení nahradíme SVG ikonu malou barevnou tečkou —
      // jinak se symboly překrývají a mapa je nepřehledná.
      const iconScale = s.pointSvg ? adaptiveIconScale(resolution) : null;
      if (s.pointSvg && iconScale !== null) {
        return new Style({
          image: new IconStyle({
            src: SVG_BASE + s.pointSvg,
            scale: iconScale,
            // OL otáčí po směru hodinových ručiček, natočení v DTM je proti.
            ...(s.pointRotationDeg ? { rotation: (-s.pointRotationDeg * Math.PI) / 180 } : {}),
          }),
        });
      }
      // Tečka — buď fallback (žádné SVG), nebo příliš oddálené.
      const dotRadius = s.pointSvg ? 2 : 4;
      return new Style({
        image: new CircleStyle({
          radius: dotRadius,
          fill: new Fill({ color: s.strokeColor }),
          stroke: new Stroke({ color: s.strokeColor, width: 1 }),
        }),
      });
    }
    case 'LineString':
    case 'MultiCurve': {
      const line = new Style({
        stroke: new Stroke({
          color: s.strokeColor,
          width: s.strokeWidthPx,
          lineDash: dashPx,
        }),
      });
      // Značka vložená do linie (blesk vedení, třída silnice, …) nad čarou,
      // příčky plotu přes čáru.
      const extra = s.lineSymbolSvg ? createLineSymbolStyle(s, resolution) : createTickStyle(s, resolution);
      // ŽXML: souběžné čáry, značka opakovaná podél linie, linie bez osy.
      if (!s.lineStrokes && !s.lineRepeat && !s.lineNoAxis) return extra ? [line, extra] : line;
      const repeat = createRepeatStyle(s, resolution);
      return [
        ...(s.lineNoAxis ? [] : [line]),
        ...(extra ? [extra] : []),
        ...createLineStrokeStyles(s, resolution),
        ...(repeat ? [repeat] : []),
      ];
    }
    case 'Polygon':
      return new Style({
        fill: new Fill({ color: s.fillColor }),
        stroke: new Stroke({
          color: s.strokeColor,
          width: Math.max(1, s.strokeWidthPx * 0.5),
          lineDash: dashPx,
        }),
      });
    default:
      return new Style({
        stroke: new Stroke({
          color: s.strokeColor,
          width: s.strokeWidthPx,
          lineDash: dashPx,
        }),
      });
  }
}

/**
 * Lem changeset záznamu (pod prvkem): u linií a obrysů ploch široká
 * průsvitná čára, u bodů průsvitný kruh pod symbolem. Barva = typ změny.
 */
function createZapisHaloStyle(geomType: Geometry['type'], s: ResolvedStyle, color: string): Style {
  const halo = color + '80';
  if (geomType === 'Point') {
    return new Style({
      image: new CircleStyle({ radius: 9, fill: new Fill({ color: halo }) }),
    });
  }
  const width = (geomType === 'Polygon' ? Math.max(1, s.strokeWidthPx * 0.5) : s.strokeWidthPx) + 6;
  return new Style({ stroke: new Stroke({ color: halo, width }) });
}

export interface JvfVectorLayer {
  olLayer: VectorLayer;
  /** Lemy changeset záznamů (pod daty, neklikatelné). */
  haloLayer: VectorLayer;
  objektovyTyp: ObjektovyTyp;
  featureCount: number;
  /** Id projektu, ze kterého vrstva pochází (null bez provenience). */
  projectId: string | null;
}

/**
 * Kreslí se prvek JVF vrstvy? Filtr prvků (úroveň umístění, projekt,
 * obsahová část) a filtr typů změn (karta „Změny": Nové / Editované / Mazané).
 * Jediné místo rozhodnutí — používá ho style funkce vrstev i přichytávání
 * při měření (map/measure.ts), aby se neměřilo ke skrytým prvkům.
 * Viditelnost celé vrstvy (panel vrstev) sem nepatří — tu nese vrstva.
 */
export function isJvfFeatureDisplayed(feature: FeatureLike): boolean {
  if (!isLevelVisible(feature.get('jvfLevel') as LevelKey | undefined)) return false;
  if (!isProjectVisible(feature.get('jvfProjectId') as string | null | undefined)) return false;
  if (!isContentPartVisible(feature.get('jvfPart') as string | undefined)) return false;
  const zo = feature.get('jvfZapisObjektu') as string | undefined;
  return !isChangesetZapis(zo) || isShowZapis(zo);
}

export function buildJvfLayers(objekty: ObjektovyTyp[]): {
  layers: JvfVectorLayer[];
  extent: Extent;
} {
  const layers: JvfVectorLayer[] = [];
  const totalExtent = createEmpty();

  for (const ot of objekty) {
    const features: Feature[] = [];
    // Provenience: id projektu, ze kterého objektový typ pochází — dimenze
    // filtru prvků (state/featureFilter.ts) při více načtených projektech.
    const projectId = resolveProjectKey(ot);
    // Obsahová část — dimenze filtru prvků (tlačítka v Přehledu prvků).
    const part = String(ot.obsahovaCast);

    for (const zaznam of ot.zaznamy) {
      const sFeature = resolveStyleForZaznam(ot, zaznam);
      // Identifikace záznamu: DTM ID, nebo interní UUID pro záznamy bez ID
      // (nové prvky `ZapisObjektu='i'`) a s duplicitním ID — viz state/zaznamId.ts.
      const objectId = resolveZaznamId(zaznam, ot.zaznamy);
      // Holé DTM ID (bez prefixu projektu a rozlišení duplicit) — podle něj
      // hledá prvek panel chyb (`TopologyError.objectId`).
      const dtmId = dtmIdOf(zaznam);
      // Úroveň umístění (LEVEL) — klíč pro filtr prvků (state/featureFilter.ts).
      const levelKey = resolveLevelKey(zaznam);
      for (const geom of zaznam.geometrie) {
        let feature: Feature | null = null;

        switch (geom.type) {
          case 'Point': {
            const coords = geom.data.coordinates;
            const x = coords[0];
            const y = coords[1];
            if (x === undefined || y === undefined) break;
            feature = new Feature({
              geometry: new OlPoint([x, y]),
            });
            break;
          }
          case 'LineString': {
            const dim = geom.data.srsDimension > 0 ? geom.data.srsDimension : 2;
            const coords = flatCoordsToRing(geom.data.coordinates, dim);
            if (coords.length >= 2) {
              feature = new Feature({ geometry: new OlLineString(coords) });
            }
            break;
          }
          case 'Polygon': {
            const rings = buildPolygonRings(geom.data);
            if (rings[0] && rings[0].length >= 3) {
              feature = new Feature({ geometry: new OlPolygon(rings) });
            }
            break;
          }
          case 'MultiCurve': {
            for (const curve of geom.data.curves) {
              const dim = curve.srsDimension > 0 ? curve.srsDimension : 2;
              const coords = flatCoordsToRing(curve.coordinates, dim);
              if (coords.length >= 2) {
                const mcFeature = new Feature({
                  geometry: new OlLineString(coords),
                });
                mcFeature.set('jvfResolvedStyle', sFeature);
                mcFeature.set('jvfGeomType', 'LineString');
                mcFeature.set('jvfElementName', ot.elementName);
                mcFeature.set('jvfObjectId', objectId);
                mcFeature.set('jvfDtmId', dtmId);
                mcFeature.set('jvfZapisObjektu', zaznam.zapisObjektu);
                mcFeature.set('jvfLevel', levelKey);
                mcFeature.set('jvfProjectId', projectId);
                mcFeature.set('jvfPart', part);
                features.push(mcFeature);
              }
            }
            break;
          }
        }

        if (feature) {
          feature.set('jvfResolvedStyle', sFeature);
          feature.set('jvfGeomType', geom.type);
          feature.set('jvfElementName', ot.elementName);
          feature.set('jvfObjectId', objectId);
          feature.set('jvfDtmId', dtmId);
          feature.set('jvfZapisObjektu', zaznam.zapisObjektu);
          feature.set('jvfLevel', levelKey);
          feature.set('jvfProjectId', projectId);
          feature.set('jvfPart', part);
          features.push(feature);
        }
      }
    }

    if (features.length === 0) continue;

    const source = new VectorSource({ features });
    const layerExtent = source.getExtent();
    if (layerExtent) extend(totalExtent, layerExtent);

    // Dynamická style function — dash závisí na resolution (zoom-dependent).
    // Feature si nese svůj ResolvedStyle v property; styl se buduje per frame.
    //
    // `updateWhileInteracting` + `updateWhileAnimating`: defaultně OL během
    // pan/zoom interakce použije rastrově roztažený canvas z posledního
    // renderu (rychlé, ale style fn se nepřepočítává — symboly skáčou na
    // novou velikost teprve po dokončení gesta). S těmito flagy se style
    // fn volá každý frame, takže škálování bodových symbolů a dash patternu
    // linií je plynulé i během zoomu. Trade-off: vyšší CPU zátěž při velkých
    // datasetech.
    const olLayer = new VectorLayer({
      source,
      updateWhileInteracting: true,
      updateWhileAnimating: true,
      style: (feature, resolution) => {
        const s = feature.get('jvfResolvedStyle') as ResolvedStyle | undefined;
        const geomType = feature.get('jvfGeomType') as Geometry['type'] | undefined;
        if (!s || !geomType) return undefined;
        // Filtr prvků a changeset přepínače — odfiltrované záznamy se nekreslí.
        if (!isJvfFeatureDisplayed(feature)) return undefined;
        // Changeset záznamy se kreslí ve vlastním stylu (jako v legendě);
        // typ změny ukazuje lem ve vrstvě `haloLayer` pod daty.
        return createStyleForGeom(geomType, s, resolution);
      },
    });

    // Lemy changeset záznamů (nové / editované / mazané): samostatná vrstva
    // nad stejným zdrojem, pod vrstvami dat — lemy leží pod všemi prvky
    // a nezachytávají klik (výběr prvku ji vyřazuje, viz `isJvfHaloLayer`).
    // Viditelnost i překreslení (`olLayer.changed()` po změně filtrů
    // a přepínačů) přebírá od vrstvy dat.
    const haloLayer = new VectorLayer({
      source,
      updateWhileInteracting: true,
      updateWhileAnimating: true,
      properties: { [HALO_LAYER_PROP]: true },
      style: (feature) => {
        const s = feature.get('jvfResolvedStyle') as ResolvedStyle | undefined;
        const geomType = feature.get('jvfGeomType') as Geometry['type'] | undefined;
        const zo = feature.get('jvfZapisObjektu') as string | undefined;
        if (!s || !geomType || !isChangesetZapis(zo) || !isHighlightZapis()) return undefined;
        if (!isJvfFeatureDisplayed(feature)) return undefined;
        return createZapisHaloStyle(geomType, s, ZAPIS_HIGHLIGHT_COLORS[zo].stroke);
      },
    });
    olLayer.on('change', () => haloLayer.changed());

    // Značky vložené do linií se kreslí z tvarů SVG — po načtení překreslit.
    const lineSymbolFiles = new Set<string>();
    for (const f of features) {
      const file = (f.get('jvfResolvedStyle') as ResolvedStyle | undefined)?.lineSymbolSvg;
      if (file) lineSymbolFiles.add(file);
    }
    if (lineSymbolFiles.size > 0) {
      void Promise.all([...lineSymbolFiles].map(loadLineSymbol)).then(() => olLayer.changed());
    }
    const repeatFiles = new Set<string>();
    for (const f of features) {
      const svg = (f.get('jvfResolvedStyle') as ResolvedStyle | undefined)?.lineRepeat?.svg;
      if (svg) repeatFiles.add(svg);
    }
    if (repeatFiles.size > 0) {
      void Promise.all([...repeatFiles].map(loadRepeatImage)).then(() => olLayer.changed());
    }
    olLayer.on('change:visible', () => haloLayer.setVisible(olLayer.getVisible()));

    olLayer.set('jvfNazev', ot.nazev);
    olLayer.set('jvfObsahova', ot.obsahovaCast);

    layers.push({ olLayer, haloLayer, objektovyTyp: ot, featureCount: features.length, projectId });
  }

  return { layers, extent: totalExtent };
}

/** Pořadí vrstev JVF v mapě: nad podkladem (0) a překryvy DTM / KN (1–8). */
export const JVF_LAYER_Z_INDEX = 10;
/** Lemy changeset záznamů — pod daty JVF, nad překryvy. */
const JVF_HALO_Z_INDEX = JVF_LAYER_Z_INDEX - 1;
const HALO_LAYER_PROP = 'jvfHalo';

/** Je vrstva lemů changeset záznamů? (Výběr prvku klikem ji přeskakuje.) */
export function isJvfHaloLayer(layer: { get(key: string): unknown }): boolean {
  return layer.get(HALO_LAYER_PROP) === true;
}

export function addJvfLayersToMap(map: OlMap, layers: JvfVectorLayer[]): void {
  for (const { olLayer, haloLayer } of layers) {
    haloLayer.setZIndex(JVF_HALO_Z_INDEX);
    map.addLayer(haloLayer);
    olLayer.setZIndex(JVF_LAYER_Z_INDEX);
    map.addLayer(olLayer);
  }
}

export function removeJvfLayersFromMap(map: OlMap, layers: JvfVectorLayer[]): void {
  for (const { olLayer, haloLayer } of layers) {
    map.removeLayer(haloLayer);
    map.removeLayer(olLayer);
  }
}

/**
 * Find the first OL Feature matching elementName + objectId across all JVF layers.
 * Returns null if not found.
 */
export function findFeature(
  layers: JvfVectorLayer[],
  elementName: string,
  objectId: string,
): Feature | null {
  // 1. přesná shoda klíče vieweru; 2. holé DTM ID (panel chyb zná jen to —
  // bez prefixu projektu a bez rozlišení duplicitních ID).
  for (const key of ['jvfObjectId', 'jvfDtmId'] as const) {
    for (const { olLayer } of layers) {
      const source = olLayer.getSource();
      if (!source) continue;
      const found = source.getFeatures().find(
        (f) => f.get('jvfElementName') === elementName && f.get(key) === objectId,
      );
      if (found) return found;
    }
  }
  return null;
}

/**
 * Export JVF DTM a dialektů do DXF ve vzhledu datového modelu: čisté JVF DTM
 * → Katalog kartografických symbolů DTM ČR (ČÚZK, stejně jako viewer),
 * UDM → vzhled UDM (knihovna ČKZ), ŽXML → symbologie SŽ (styly SLD z LDM DTMŽ).
 *
 * - hladina = obsahová část + objektový typ (`ZPS_HraniceBudovy`, mazané
 *   záznamy `…_DEL`), barva / tloušťka / typ čáry hladiny = vzhled objektu;
 *   vzhled podle hodnot číselníků se zapisuje jako přepis na entitě,
 * - linie → LWPOLYLINE (konstantní výška) / 3D POLYLINE, plochy → uzavřené
 *   obvody, u Katalogu DTM ČR navíc plná výplň (HATCH pod obrysy; UDM a ŽXML
 *   plochy nevyplňují), body → blok symbolu / POINT,
 *   popisy a názvy → TEXT s `PopisObjektu`,
 * - XDATA aplikace „UDM": objektový typ, kód, ID, druh záznamu a atributy
 *   (`Název=kód (popisek)`).
 *
 * Souřadnice beze změny (EPSG:5514, metry), měřítko symbolů a textů 1:500.
 */
import {
  getStyleTable,
  usesDialectStyle,
  labelForAttribute,
  resolveAppearance,
  resolveKatalogAppearance,
  resolveKatalogRepresentativeAppearance,
  resolveRepresentativeAppearance,
  type Appearance,
  type StyleTable,
} from 'jvf-parser';
import type { Geometry, GmlPolygon, JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';
import { DxfDocument, type DxfVersion, type EntityStyle, type Vertex2 } from './dxf/document.js';
import { CAD_SYMBOLS, blockNameFor, symbolColorFor, type CadSymbolPrimitive } from './symbols.js';
import { textHeightFor, isTextObject } from './text.js';

export interface ExportDxfOptions {
  /** Verze DXF: `R2013` (true color, UTF-8; výchozí) nebo `R2000` (ACI, pro starší CAD). */
  version?: DxfVersion;
  /** Zahrnout mazané záznamy (Del) na hladiny `…_DEL` (výchozí `false`). */
  includeDeleted?: boolean;
  /** Zapsat geometrii ve 2D (výška 0) místo 3D (výchozí `false`). */
  flatten2D?: boolean;
  /**
   * Tabulka vzhledu (výchozí podle `dtm.verze`: dialekt → jeho styly,
   * čisté JVF DTM → Katalog DTM ČR).
   */
  styles?: StyleTable;
  /** Vyplnit plochy, které mají ve vzhledu výplň (Katalog DTM ČR; výchozí `true`). */
  fillAreas?: boolean;
}

/** Statistika exportu (pro UI / testy). */
export interface ExportDxfResult {
  dxf: string;
  layers: number;
  entities: number;
  blocks: number;
  skipped: number;
}

const BLACK = '#000000';
/** Tloušťky DXF (setiny mm) — povolené hodnoty AutoCADu. */
const LINEWEIGHTS = [0, 5, 9, 13, 15, 18, 20, 25, 30, 35, 40, 50, 53, 60, 70, 80, 90, 100, 106, 120, 140, 158, 200, 211];
/** 1 mm papíru = 0,5 m při 1:500. */
const MM_TO_M = 0.5;
/** Kurzíva symbolů jako sklon písma. */
const ITALIC_OBLIQUE = 15;

function isWhite(hex: string): boolean {
  return /^#?f{6}$/i.test(hex) || /^#?f{3}$/i.test(hex);
}

function lineweight(widthMm: number | undefined): number {
  const target = Math.round((widthMm ?? 0.25) * 100);
  return LINEWEIGHTS.reduce((best, v) => (Math.abs(v - target) < Math.abs(best - target) ? v : best), 25);
}

/** Název typu čáry z čárkování (mm papíru), např. `UDM_3-0p5-0p2-0p5` (Katalog DTM ČR `DTM_…`). */
function linetypeName(dashMm: readonly number[], prefix: string): string {
  return prefix + dashMm.map((d) => String(d).replace('.', 'p')).join('-');
}

/** Bezpečný název hladiny / bloku (ASCII, bez znaků zakázaných v AutoCADu). */
function safeName(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[<>/\\":;?*|=`,]/g, '_');
}

function layerName(ot: ObjektovyTyp, zaznam: ZaznamObjektu): string {
  const base = safeName(`${ot.obsahovaCast || 'X'}_${ot.elementName}`);
  return zaznam.zapisObjektu === 'd' ? `${base}_DEL` : base;
}

/** XDATA: identita objektu + atributy s popisky číselníků. */
function xdataFor(ot: ObjektovyTyp, zaznam: ZaznamObjektu, version: string): string[] {
  const c = zaznam.commonAttributes;
  const out = [
    `ObjektovyTyp=${ot.elementName}`,
    `Kod=${ot.codeBase}-${ot.codeSuffix}`,
    `Nazev=${ot.nazev}`,
    `Zaznam=${zaznam.recordKind ?? zaznam.zapisObjektu}`,
  ];
  if (c.id) out.push(`ID=${c.id}`);
  if (c.idZmeny) out.push(`IDZmeny=${c.idZmeny}`);
  if (c.popisObjektu) out.push(`PopisObjektu=${c.popisObjektu}`);
  for (const [k, v] of Object.entries(zaznam.attributes)) {
    if (v === null || v === '') continue;
    const label = labelForAttribute(k, v, version);
    out.push(label !== undefined ? `${k}=${v} (${label})` : `${k}=${v}`);
  }
  return out;
}

/** Souřadnice GML (ploché pole) → vrcholy [x, y, z]. */
function toPoints(flat: readonly number[], dim: number, flatten: boolean): [number, number, number][] {
  const d = dim > 0 ? dim : 2;
  const pts: [number, number, number][] = [];
  for (let i = 0; i + 1 < flat.length; i += d) {
    const z = d >= 3 && !flatten ? (flat[i + 2] ?? 0) : 0;
    pts.push([flat[i]!, flat[i + 1]!, z]);
  }
  return pts;
}

export function exportDxf(dtm: JvfDtm, options: ExportDxfOptions = {}): ExportDxfResult {
  const version = options.version ?? 'R2013';
  const flatten = options.flatten2D ?? false;
  const doc = new DxfDocument(version);
  const fillAreas = options.fillAreas ?? true;
  // Dialekt (nebo zadaná tabulka) → jeho styly, čisté JVF DTM → Katalog DTM ČR.
  // ŽXML: objekty JVF bez vlastního vzhledu Katalogem — stejně jako viewer.
  const styles = options.styles ?? getStyleTable(dtm.verze);
  const dialectFor = (ot: ObjektovyTyp): boolean =>
    Boolean(styles) && (options.styles !== undefined || usesDialectStyle(dtm.verze, ot));
  const representative = (ot: ObjektovyTyp): Appearance | undefined =>
    dialectFor(ot) ? resolveRepresentativeAppearance(styles!, ot) : resolveKatalogRepresentativeAppearance(ot);
  const appearance = (ot: ObjektovyTyp, zaznam: ZaznamObjektu): Appearance | undefined =>
    dialectFor(ot) ? resolveAppearance(styles!, ot, zaznam) : resolveKatalogAppearance(ot, zaznam);
  let entities = 0;
  let skipped = 0;

  const ensureLinetype = (dashMm: readonly number[] | undefined): string | undefined => {
    if (!dashMm?.length) return undefined;
    const name = linetypeName(dashMm, styles ? 'UDM_' : 'DTM_');
    if (!doc.hasLinetype(name)) {
      doc.addLinetype(name, `${dashMm.join(' ')} mm (1:500)`, dashMm.map((d) => d * MM_TO_M));
    }
    return name;
  };

  const ensureBlock = (symbol: string): string | undefined => {
    const prims = CAD_SYMBOLS[symbol];
    if (!prims) return undefined;
    const name = safeName(blockNameFor(symbol));
    if (!doc.hasBlock(name)) doc.addBlock(name, (owner) => blockEntities(doc, prims, owner));
    return name;
  };

  for (const ot of dtm.objekty) {
    const rep: Appearance = representative(ot) ?? {};
    const layerColor = rep.color ?? BLACK;
    const layerLw = lineweight(rep.widthMm);
    const layerLt = ensureLinetype(rep.dashMm) ?? 'Continuous';
    const textObject = isTextObject(ot.elementName);

    for (const zaznam of ot.zaznamy) {
      if (zaznam.zapisObjektu === 'd' && !options.includeDeleted) continue;
      const layer = layerName(ot, zaznam);
      doc.addLayer(layer, layerColor, layerLw, layerLt);

      // Vzhled záznamu (pravidla podle číselníků) jako přepis hladiny.
      const app = appearance(ot, zaznam) ?? {};
      const style: EntityStyle = { layer, xdata: xdataFor(ot, zaznam, dtm.verze) };
      const color = app.color ?? layerColor;
      if (color !== layerColor) style.color = color;
      const lw = lineweight(app.widthMm ?? rep.widthMm);
      if (lw !== layerLw) style.lineweight = lw;
      const lt = ensureLinetype(app.dashMm) ?? layerLt;
      if (lt !== layerLt) style.linetype = lt;

      // Natočení symbolu/textu: atribut ze stylu (ŽXML), jinak `Natoceni` (UDM).
      const rotation = Number(zaznam.attributes[app.rotationAttr ?? 'Natoceni'] ?? 0) || 0;
      const block = !textObject && app.symbol ? ensureBlock(app.symbol) : undefined;
      for (const geom of zaznam.geometrie) {
        // Bílá výplň = barva papíru; v CAD (tmavé pozadí) by jen zakrývala výkres.
        if (fillAreas && app.fill && !isWhite(app.fill) && geom.type === 'Polygon') {
          writeFill(doc, geom.data, app.fill, style);
        }
        const n = writeGeometry(doc, geom, style, {
          flatten,
          rotation,
          // Značky Katalogu mají vlastní barvu (jako ve vieweru).
          color: (block && app.symbol && symbolColorFor(app.symbol)) || color,
          text: textObject ? zaznam.commonAttributes.popisObjektu : undefined,
          textHeight: textObject ? textHeightFor(ot.elementName, zaznam) : 0,
          block,
        });
        if (n === 0) skipped++;
        entities += n;
      }
    }
  }

  return {
    dxf: doc.toString(),
    layers: doc.layerCount,
    entities,
    blocks: doc.blockCount,
    skipped,
  };
}

interface GeometryContext {
  flatten: boolean;
  rotation: number;
  color: string;
  text: string | undefined;
  textHeight: number;
  block: string | undefined;
}

/** Zapíše geometrii záznamu; vrací počet entit. */
function writeGeometry(doc: DxfDocument, geom: Geometry, style: EntityStyle, ctx: GeometryContext): number {
  switch (geom.type) {
    case 'Point': {
      const [x, y, z = 0] = geom.data.coordinates;
      const zz = ctx.flatten ? 0 : z;
      if (ctx.text) {
        doc.text(x!, y!, zz, ctx.textHeight, ctx.rotation, ctx.text, 'left', style);
      } else if (ctx.block) {
        // Barva symbolu = barva objektu (geometrie bloku je ByBlock).
        doc.insert(ctx.block, x!, y!, zz, ctx.rotation, { ...style, color: ctx.color });
      } else {
        doc.point(x!, y!, zz, style);
      }
      return 1;
    }
    case 'LineString':
      return writeLine(doc, toPoints(geom.data.coordinates, geom.data.srsDimension, ctx.flatten), false, style);
    case 'MultiCurve':
      return geom.data.curves.reduce(
        (n, c) => n + writeLine(doc, toPoints(c.coordinates, c.srsDimension, ctx.flatten), false, style),
        0,
      );
    case 'Polygon': {
      const dim = geom.data.srsDimension;
      let n = writeLine(doc, toPoints(geom.data.exterior, dim, ctx.flatten), true, style);
      for (const ring of geom.data.interiors) n += writeLine(doc, toPoints(ring, dim, ctx.flatten), true, style);
      return n;
    }
    default:
      return 0;
  }
}

/**
 * Výplň plochy (HATCH SOLID pod obrysy) — vnější obrys + otvory, ve 2D
 * (polygon plochy je v JVF půdorys). Barva výplně je přepis na entitě.
 */
function writeFill(doc: DxfDocument, poly: GmlPolygon, fill: string, style: EntityStyle): void {
  const ring = (flat: readonly number[]): Vertex2[] => {
    const pts = toPoints(flat, poly.srsDimension, true).map(([x, y]) => [x, y] as Vertex2);
    const [a, b] = [pts[0], pts[pts.length - 1]];
    if (a && b && pts.length > 3 && a[0] === b[0] && a[1] === b[1]) pts.pop();
    return pts;
  };
  const outer = ring(poly.exterior);
  if (outer.length < 3) return;
  const holes = poly.interiors.map(ring).filter((r) => r.length >= 3);
  doc.areaHatch([outer, ...holes], 0, { layer: style.layer, color: fill });
}

/** Linie / obvod: konstantní výška → LWPOLYLINE, jinak 3D POLYLINE. */
function writeLine(doc: DxfDocument, pts: [number, number, number][], closed: boolean, style: EntityStyle): number {
  if (pts.length < 2) return 0;
  // Uzavřený prstenec GML končí opakováním prvního bodu — v DXF stačí příznak.
  if (closed && pts.length > 2) {
    const [a, b] = [pts[0]!, pts[pts.length - 1]!];
    if (a[0] === b[0] && a[1] === b[1]) pts = pts.slice(0, -1);
  }
  const z0 = pts[0]![2];
  if (pts.every((p) => p[2] === z0)) {
    doc.lwpolyline(pts.map(([x, y]) => [x, y] as Vertex2), closed, z0, style);
  } else {
    doc.polyline3d(pts, closed, style);
  }
  return 1;
}

/** Entity bloku symbolu (barva i tloušťka ByBlock → převezme INSERT). */
function blockEntities(doc: DxfDocument, prims: readonly CadSymbolPrimitive[], owner: string): string[] {
  const style: EntityStyle = { layer: '0', color: 'byblock', lineweight: -2 };
  const out: string[] = [];
  for (const p of prims) {
    switch (p[0]) {
      case 'p': {
        const [, closed, fill, flat] = p;
        const verts: Vertex2[] = [];
        for (let i = 0; i + 2 < flat.length; i += 3) verts.push([flat[i]!, flat[i + 1]!, flat[i + 2]!]);
        if (verts.length >= 2) out.push(doc.lwpolyline(verts, closed === 1, 0, style, owner));
        if (fill && verts.length >= 3) out.push(doc.solidHatch(verts, style, owner));
        break;
      }
      case 'c': {
        const [, x, y, r, fill] = p;
        out.push(doc.circle(x, y, r, style, owner));
        if (fill) out.push(doc.solidHatch([[x - r, y, 1], [x + r, y, 1]], style, owner));
        break;
      }
      case 'e': {
        const [, x, y, rx, ry, rot] = p;
        out.push(doc.ellipse(x, y, rx, ry, rot, style, owner));
        break;
      }
      case 't': {
        const [, x, y, h, rot, value, italic] = p;
        out.push(doc.text(x, y, 0, h, rot, value, 'center', style, owner, italic ? ITALIC_OBLIQUE : 0));
        break;
      }
    }
  }
  return out;
}

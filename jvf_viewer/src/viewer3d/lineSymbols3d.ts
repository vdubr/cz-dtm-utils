/**
 * Značky vložené do linií (Katalog DTM ČR — blesk elektrického vedení, zub
 * plynovodu, třída silnice, puntík zábradlí) ve 3D scéně. Stejné pravidlo jako
 * 2D mapa (map/lineSymbolRenderer): linie s čárkováním má značku do středu
 * každé mezery, linie bez čárkování v pravidelném rozestupu.
 *
 * Ve 3D se pracuje v metrech terénu (Katalog je v mm papíru na 1 : 500, tj.
 * 1 mm = 0,5 m; 1 jednotka SVG = 0,01 mm = 0,005 m). Značka je vektorová,
 * položená vodorovně na linii, natočená podle úseku a posazená na úroveň
 * čáry: tahy SVG jako `THREE.Line` (stejně tenké jako linie v každé
 * vzdálenosti), výplně (text třídy silnice, puntík) jako plochy. Linie
 * dostane čárkování (`LineDashedMaterial`), aby značka seděla v mezeře.
 */
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import type { ResolvedStyle } from '../map/jvfLayers.js';
import { LINE_SYMBOLS, type LineSymbolMetrics } from '../map/lineSymbols.generated.js';

/** Metry terénu na 1 mm papíru (1 : 500). */
const MM_TO_M = 0.5;
/** Metry terénu na 1 jednotku SVG (0,01 mm papíru). */
const SVG_UNIT_TO_M = 0.005;
/** Nejmenší mezera čárkování (mm), do které se značka kreslí — jako 2D. */
const MIN_GAP_MM = 4;
/** Rozestup značek na linii bez čárkování (mm papíru) — jako 2D. */
const INTERVAL_MM = 20;
/** Nejvýš tolik mezery značka vyplní. */
const MAX_GAP_FILL = 0.9;
/** Výška značky nad linií (m) — proti prolínání s čarou a terénem. */
const LIFT_M = 0.03;

const SYMBOL_TAG = 'jvfLineSymbol';
const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

/** Počet značek v liniích ve scéně (ladění, e2e). */
export function countLineSymbols3d(root: THREE.Object3D): number {
  let n = 0;
  root.traverse((o) => {
    if (o.userData[SYMBOL_TAG] === true) n++;
  });
  return n;
}

/**
 * Vzor značky: geometrie v jednotkách SVG posunutá tak, aby počátek ležel
 * ve vodorovném středu značky na úrovni její čáry; osa x = směr linie,
 * osa z = dolů v obrázku (jih — jako obrazovka 2D mapy).
 */
const templates = new Map<string, Promise<THREE.Group | null>>();

function loadTemplate(file: string, m: LineSymbolMetrics): Promise<THREE.Group | null> {
  let t = templates.get(file);
  if (!t) {
    t = fetch(SVG_BASE + file)
      .then((r) => (r.ok ? r.text() : ''))
      .then((text) => (text ? buildTemplate(text, m) : null))
      .catch(() => null);
    templates.set(file, t);
  }
  return t;
}

function buildTemplate(text: string, m: LineSymbolMetrics): THREE.Group {
  const data = new SVGLoader().parse(text);
  const vb = (data.xml as unknown as Element).getAttribute('viewBox')?.split(/[\s,]+/).map(Number) ?? [0, 0, m.width, m.width / m.aspect];
  const [vx, vy, vw, vh] = vb as [number, number, number, number];
  const ox = vx + vw / 2;
  const oy = vy + m.baseline * vh;
  const group = new THREE.Group();
  for (const path of data.paths) {
    const style = path.userData?.['style'] as { fill?: string; stroke?: string } | undefined;
    if (style?.fill && style.fill !== 'none') {
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color().setStyle(style.fill), side: THREE.DoubleSide });
      for (const shape of SVGLoader.createShapes(path)) {
        const g = new THREE.ShapeGeometry(shape);
        // Rovina obrázku (x, y dolů) → vodorovná rovina (x, z).
        g.translate(-ox, -oy, 0).rotateX(Math.PI / 2);
        group.add(new THREE.Mesh(g, mat));
      }
    }
    if (style?.stroke && style.stroke !== 'none') {
      const mat = new THREE.LineBasicMaterial({ color: new THREE.Color().setStyle(style.stroke) });
      for (const sub of path.subPaths) {
        const pts = sub.getPoints().map((p) => new THREE.Vector3(p.x - ox, 0, p.y - oy));
        if (pts.length >= 2) group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
      }
    }
  }
  return group;
}

/** Vzdálenosti po 3D délce linie (`pts` = x, y, z, …) — kumulativně od začátku. */
function cumulativeLengths(pts: number[]): number[] {
  const n = pts.length / 3;
  const out = [0];
  for (let i = 1; i < n; i++) {
    const dx = pts[i * 3]! - pts[(i - 1) * 3]!;
    const dy = pts[i * 3 + 1]! - pts[(i - 1) * 3 + 1]!;
    const dz = pts[i * 3 + 2]! - pts[(i - 1) * 3 + 2]!;
    out.push(out[i - 1]! + Math.hypot(dx, dy, dz));
  }
  return out;
}

const repeatTemplates = new Map<string, Promise<{ group: THREE.Group; scale: number } | null>>();

/** Vzor značky ŽXML (vkládací bod = střed viewBoxu) a měřítko SVG jednotka → metry. */
function loadRepeatTemplate(svg: string): Promise<{ group: THREE.Group; scale: number } | null> {
  let t = repeatTemplates.get(svg);
  if (!t) {
    t = fetch(SVG_BASE + svg)
      .then((r) => (r.ok ? r.text() : ''))
      .then((text) => {
        if (!text) return null;
        const root = new DOMParser().parseFromString(text, 'image/svg+xml').documentElement;
        const vb = (root.getAttribute('viewBox') ?? '').split(/[\s,]+/).map(Number);
        const width = Number(root.getAttribute('width'));
        const [vw, vh] = [vb[2] ?? 0, vb[3] ?? 0];
        if (!(vw > 0 && vh > 0 && width > 0)) return null;
        const group = buildTemplate(text, { aspect: vw / vh, baseline: 0.5, stroke: 1, width: vw });
        return { group, scale: (width * SVG_UNIT_TO_M) / vw };
      })
      .catch(() => null);
    repeatTemplates.set(svg, t);
  }
  return t;
}

/**
 * ŽXML: značka opakovaná podél linie (GraphicStroke SLD — příčky plotu,
 * tečky zábradlí) ve vodorovné rovině, natočená podle úseku, v rozestupu
 * a od začátku podle stylu (mm papíru → m terénu).
 */
export function addRepeatSymbols3d(line: THREE.Object3D, s: ResolvedStyle, pts: number[]): void {
  const r = s.lineRepeat;
  const n = pts.length / 3;
  if (!r || n < 2 || r.intervalMm <= 0) return;
  const cumulative = cumulativeLengths(pts);
  const total = cumulative[n - 1]!;
  const groups: THREE.Group[] = [];
  let seg = 1;
  for (let d = r.startMm * MM_TO_M; d <= total; d += r.intervalMm * MM_TO_M) {
    while (seg < n - 1 && cumulative[seg]! < d) seg++;
    const a = (seg - 1) * 3;
    const b = seg * 3;
    const segLen = cumulative[seg]! - cumulative[seg - 1]!;
    if (segLen <= 0) continue;
    const t = (d - cumulative[seg - 1]!) / segLen;
    const group = new THREE.Group();
    group.position.set(
      pts[a]! + (pts[b]! - pts[a]!) * t,
      pts[a + 1]! + (pts[b + 1]! - pts[a + 1]!) * t + LIFT_M,
      pts[a + 2]! + (pts[b + 2]! - pts[a + 2]!) * t,
    );
    group.rotation.y = -Math.atan2(pts[b + 2]! - pts[a + 2]!, pts[b]! - pts[a]!);
    group.userData[SYMBOL_TAG] = true;
    line.add(group);
    groups.push(group);
  }
  if (groups.length === 0) return;
  void loadRepeatTemplate(r.svg).then((tpl) => {
    if (!tpl) return;
    for (const g of groups) {
      g.scale.setScalar(tpl.scale);
      g.add(tpl.group.clone());
    }
  });
}

/** Linie se značkou: čárkování v metrech (pro `LineDashedMaterial`), jinak `null`. */
export function lineSymbolDash3d(s: ResolvedStyle): { dash: number; gap: number } | null {
  if (!s.lineSymbolSvg || !s.lineDashMm || s.lineDashMm.length < 2) return null;
  const gaps = s.lineDashMm.filter((_, i) => i % 2 === 1);
  const gap = Math.max(...gaps);
  if (gap < MIN_GAP_MM) return null;
  const dash = s.lineDashMm.reduce((a, v) => a + v, 0) - gap;
  return { dash: dash * MM_TO_M, gap: gap * MM_TO_M };
}

/**
 * Přidá k linii (potomci — viditelnost a filtry dědí) značky podle stylu.
 * `pts` = souřadnice linie ve scéně (x, y, z, x, y, z, …), stejné jako
 * geometrie linie — vzdálenosti po 3D délce, jako `computeLineDistances`.
 * Geometrie značek se doplní po načtení SVG (sdílená mezi všemi výskyty).
 */
export function addLineSymbols3d(line: THREE.Object3D, s: ResolvedStyle, pts: number[]): void {
  const file = s.lineSymbolSvg;
  const m = file ? LINE_SYMBOLS[file] : undefined;
  if (!file || !m) return;
  const n = pts.length / 3;
  if (n < 2) return;
  const cumulative = [0];
  for (let i = 1; i < n; i++) {
    const dx = pts[i * 3]! - pts[(i - 1) * 3]!;
    const dy = pts[i * 3 + 1]! - pts[(i - 1) * 3 + 1]!;
    const dz = pts[i * 3 + 2]! - pts[(i - 1) * 3 + 2]!;
    cumulative.push(cumulative[i - 1]! + Math.hypot(dx, dy, dz));
  }
  const total = cumulative[n - 1]!;

  let width = m.width * SVG_UNIT_TO_M;
  let offset: number;
  let period: number;
  const dash = lineSymbolDash3d(s);
  if (dash) {
    period = dash.dash + dash.gap;
    offset = dash.dash + dash.gap / 2;
    width = Math.min(width, dash.gap * MAX_GAP_FILL);
  } else {
    period = INTERVAL_MM * MM_TO_M;
    offset = period / 2;
  }
  const scale = width / m.width;
  // Text třídy silnice / puntík (bez vlastní čáry) drží hlavou na sever.
  const upright = m.stroke === 0;

  const groups: THREE.Group[] = [];
  let seg = 1;
  for (let d = offset; d < total; d += period) {
    while (seg < n - 1 && cumulative[seg]! < d) seg++;
    const a = (seg - 1) * 3;
    const b = seg * 3;
    const segLen = cumulative[seg]! - cumulative[seg - 1]!;
    if (segLen <= 0) continue;
    const t = (d - cumulative[seg - 1]!) / segLen;
    // Směr ve vodorovné rovině (X východ, Z jih — jako osy obrazovky 2D mapy).
    let angle = Math.atan2(pts[b + 2]! - pts[a + 2]!, pts[b]! - pts[a]!);
    if (upright && Math.abs(angle) > Math.PI / 2) angle += Math.PI;
    const group = new THREE.Group();
    group.position.set(
      pts[a]! + (pts[b]! - pts[a]!) * t,
      pts[a + 1]! + (pts[b + 1]! - pts[a + 1]!) * t + LIFT_M,
      pts[a + 2]! + (pts[b + 2]! - pts[a + 2]!) * t,
    );
    group.rotation.y = -angle;
    group.scale.setScalar(scale);
    group.userData[SYMBOL_TAG] = true;
    line.add(group);
    groups.push(group);
  }
  if (groups.length === 0) return;
  void loadTemplate(file, m).then((template) => {
    if (!template) return;
    for (const g of groups) g.add(template.clone());
  });
}

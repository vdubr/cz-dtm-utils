/**
 * Nízkoúrovňový zápis DXF (R2013 / R2000) nad šablonou prázdného výkresu.
 *
 * Kostru (hlavička, tabulky, layouty, slovníky) dodává šablona z ezdxf
 * (`generated/templates.ts`), kterou AutoCAD spolehlivě otevírá. Tato třída do
 * ní doplňuje záznamy tabulek LAYER / LTYPE / BLOCK_RECORD, definice bloků
 * a entity modelového prostoru; přiděluje handly od `$HANDSEED` šablony.
 */
import { DXF_TEMPLATES } from '../generated/templates.js';

export type DxfVersion = 'R2013' | 'R2000';

/** Skupinový kód + hodnota. */
type Pair = readonly [number, string | number];

/** Vzhled entity — vynechané složky = ByLayer. */
export interface EntityStyle {
  layer: string;
  /** Barva `#rrggbb`; `'byblock'` = převzít z bloku (geometrie uvnitř bloků). */
  color?: string | 'byblock';
  /** Tloušťka čáry v setinách mm (370), `-2` = ByBlock. */
  lineweight?: number;
  /** Typ čáry (název LTYPE). */
  linetype?: string;
  /** XDATA aplikace „UDM" (řetězce, max 255 znaků). */
  xdata?: readonly string[];
}

/** Vrchol polylinie: x, y, volitelně bulge (oblouk k dalšímu vrcholu). */
export type Vertex2 = readonly [number, number, number?];

const XDATA_APP = 'UDM';
const MAX_XDATA_STRING = 255;

/** Formát čísla pro DXF (bez exponentu, max. 6 desetinných míst). */
function num(v: number): string {
  if (!Number.isFinite(v)) return '0';
  const s = v.toFixed(6).replace(/\.?0+$/, '');
  return s === '-0' ? '0' : s;
}

/** Barva `#rrggbb` → 24bit true color (skupina 420). */
function trueColor(hex: string): number {
  return parseInt(hex.slice(1), 16);
}

/** Paleta AutoCAD Color Index 1–255 (RGB) pro R2000 (bez true color). */
const ACI_RGB: [number, number, number][] = (() => {
  const base: [number, number, number][] = [
    [255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255],
    [255, 255, 255], [128, 128, 128], [192, 192, 192],
  ];
  const out: [number, number, number][] = [...base];
  // 10–249: 24 odstínů × 10 (jas/sytost dle standardní palety AutoCADu).
  const levels: [number, number][] = [
    [1, 1], [1, 0.5], [0.65, 0.65], [0.65, 0.325], [0.5, 0.5], [0.5, 0.25], [0.3, 0.3], [0.3, 0.15],
    [0.15, 0.15], [0.15, 0.075],
  ];
  for (let h = 0; h < 24; h++) {
    for (const [v, low] of levels) {
      const hue = (h * 15) / 60;
      const sector = Math.floor(hue) % 6;
      const f = hue - Math.floor(hue);
      const hi = v * 255;
      const lo = (v === low ? 0 : low) * 255;
      const mix = lo + (hi - lo) * (sector % 2 === 0 ? f : 1 - f);
      const rgb: [number, number, number][] = [
        [hi, mix, lo], [mix, hi, lo], [lo, hi, mix], [lo, mix, hi], [mix, lo, hi], [hi, lo, mix],
      ];
      out.push(rgb[sector]!.map(Math.round) as [number, number, number]);
    }
  }
  for (let g = 0; g < 6; g++) {
    const c = Math.round(51 + g * 40.8);
    out.push([c, c, c]);
  }
  return out;
})();

/** Nejbližší barva ACI (1–255) k `#rrggbb` — R2000 nezná true color. */
export function nearestAci(hex: string): number {
  const v = trueColor(hex);
  const r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
  if (r === 0 && g === 0 && b === 0) return 7; // černá/bílá dle pozadí
  let best = 7, bestD = Infinity;
  ACI_RGB.forEach(([cr, cg, cb], i) => {
    const d = (cr - r) ** 2 + (cg - g) ** 2 + (cb - b) ** 2;
    if (d < bestD) {
      bestD = d;
      best = i + 1;
    }
  });
  return best;
}

/**
 * R2000 DXF používá kódovou stránku (ANSI_1250); znaky mimo ASCII se zapisují
 * jako `\U+XXXX`, které AutoCAD dekóduje. R2013 DXF je UTF-8.
 */
function encodeText(s: string, version: DxfVersion): string {
  const clean = s.replace(/[\r\n]+/g, ' ');
  if (version === 'R2013') return clean;
  return clean.replace(/[^\x20-\x7e]/g, (ch) => `\\U+${ch.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0')}`);
}

function pairsToString(pairs: readonly Pair[]): string {
  let out = '';
  for (const [code, value] of pairs) out += `${String(code).padStart(3)}\n${value}\n`;
  return out;
}

/** Index hodnoty proměnné hlavičky (`9\n$NAME`) — řádek s první hodnotou. */
function headerValueIndex(lines: string[], name: string): number {
  const i = lines.indexOf(name);
  if (i < 0 || lines[i - 1]?.trim() !== '9') throw new Error(`DXF šablona: chybí ${name}`);
  return i + 2;
}

export class DxfDocument {
  private readonly lines: string[];
  private handleSeed: number;
  private readonly layerChunks: string[] = [];
  private readonly ltypeChunks: string[] = [];
  private readonly blockRecordChunks: string[] = [];
  private readonly blockChunks: string[] = [];
  private readonly entityChunks: string[] = [];
  /** Výplně ploch — v ENTITIES před ostatními entitami (kreslí se pod nimi). */
  private readonly fillChunks: string[] = [];
  private readonly layerNames = new Set<string>();
  private readonly ltypeNames = new Set<string>();
  private readonly blockNames = new Set<string>();
  private readonly ext = { minX: Infinity, minY: Infinity, minZ: Infinity, maxX: -Infinity, maxY: -Infinity, maxZ: -Infinity };

  /** Handly z šablony. */
  private readonly modelSpace: string;
  private readonly layerTable: string;
  private readonly ltypeTable: string;
  private readonly blockRecordTable: string;
  private readonly plotStyle: string;
  private readonly material: string;

  constructor(readonly version: DxfVersion) {
    this.lines = DXF_TEMPLATES[version].split('\n');
    const seed = this.lines[headerValueIndex(this.lines, '$HANDSEED')]!;
    this.handleSeed = parseInt(seed, 16);
    this.modelSpace = this.recordHandle('BLOCK_RECORD', '*Model_Space');
    this.layerTable = this.tableHandle('LAYER');
    this.ltypeTable = this.tableHandle('LTYPE');
    this.blockRecordTable = this.tableHandle('BLOCK_RECORD');
    // Hladina „0" nese odkazy na styl tisku (390) a materiál (347) — nové
    // hladiny je přebírají (R2000+ je AutoCAD vyžaduje).
    const layer0 = this.recordStart('LAYER', '0');
    this.plotStyle = this.valueAfter(layer0, 390);
    this.material = this.version === 'R2013' ? this.valueAfter(layer0, 347) : '';
  }

  // --- šablona ------------------------------------------------------------

  /** Index řádku s kódem `  0` a hodnotou `type`, kde následuje `2\nname`. */
  private findRecord(type: string, name: string, from = 0): number {
    for (let i = from; i < this.lines.length - 3; i += 2) {
      if (this.lines[i]!.trim() === '0' && this.lines[i + 1] === type) {
        // název (kód 2) bývá do ~8 párů za začátkem záznamu
        for (let j = i + 2; j < i + 20 && j < this.lines.length - 1; j += 2) {
          if (this.lines[j]!.trim() === '2' && this.lines[j + 1] === name) return i;
          if (this.lines[j]!.trim() === '0') break;
        }
      }
    }
    throw new Error(`DXF šablona: chybí ${type} ${name}`);
  }

  private recordStart(type: string, name: string): number {
    return this.findRecord(type, name);
  }

  private valueAfter(start: number, code: number): string {
    for (let j = start + 2; j < this.lines.length - 1; j += 2) {
      const c = this.lines[j]!.trim();
      if (c === '0') break;
      if (c === String(code)) return this.lines[j + 1]!;
    }
    throw new Error(`DXF šablona: chybí kód ${code}`);
  }

  private tableHandle(table: string): string {
    return this.valueAfter(this.findRecord('TABLE', table), 5);
  }

  private recordHandle(type: string, name: string): string {
    return this.valueAfter(this.findRecord(type, name), 5);
  }

  // --- handly a obálka ----------------------------------------------------

  private handle(): string {
    return (this.handleSeed++).toString(16).toUpperCase();
  }

  private extend(x: number, y: number, z = 0): void {
    const e = this.ext;
    if (x < e.minX) e.minX = x;
    if (y < e.minY) e.minY = y;
    if (z < e.minZ) e.minZ = z;
    if (x > e.maxX) e.maxX = x;
    if (y > e.maxY) e.maxY = y;
    if (z > e.maxZ) e.maxZ = z;
  }

  // --- tabulky ------------------------------------------------------------

  /** Počet přidaných hladin / bloků (bez záznamů šablony). */
  get layerCount(): number {
    return this.layerNames.size;
  }

  get blockCount(): number {
    return this.blockNames.size;
  }

  hasLayer(name: string): boolean {
    return this.layerNames.has(name);
  }

  addLayer(name: string, color: string, lineweight: number, linetype = 'Continuous'): void {
    if (this.layerNames.has(name)) return;
    this.layerNames.add(name);
    const pairs: Pair[] = [
      [0, 'LAYER'], [5, this.handle()], [330, this.layerTable],
      [100, 'AcDbSymbolTableRecord'], [100, 'AcDbLayerTableRecord'],
      [2, name], [70, 0], [62, nearestAci(color)],
    ];
    if (this.version === 'R2013') pairs.push([420, trueColor(color)]);
    pairs.push([6, linetype], [370, lineweight], [390, this.plotStyle]);
    if (this.material) pairs.push([347, this.material]);
    this.layerChunks.push(pairsToString(pairs));
  }

  hasLinetype(name: string): boolean {
    return this.ltypeNames.has(name);
  }

  /** Typ čáry: střídání čárek a mezer (metry výkresu), první prvek = čárka. */
  addLinetype(name: string, description: string, pattern: readonly number[]): void {
    if (this.ltypeNames.has(name)) return;
    this.ltypeNames.add(name);
    const total = pattern.reduce((a, b) => a + b, 0);
    const pairs: Pair[] = [
      [0, 'LTYPE'], [5, this.handle()], [330, this.ltypeTable],
      [100, 'AcDbSymbolTableRecord'], [100, 'AcDbLinetypeTableRecord'],
      [2, name], [70, 0], [3, encodeText(description, this.version)], [72, 65],
      [73, pattern.length], [40, num(total)],
    ];
    pattern.forEach((len, i) => pairs.push([49, num(i % 2 === 0 ? len : -len)], [74, 0]));
    this.ltypeChunks.push(pairsToString(pairs));
  }

  hasBlock(name: string): boolean {
    return this.blockNames.has(name);
  }

  /**
   * Definice bloku. `build` dostane vlastníka (handle záznamu bloku) a vrací
   * entity uvnitř bloku (přes `entity*` metody s parametrem `owner`).
   */
  addBlock(name: string, build: (owner: string) => string[]): void {
    if (this.blockNames.has(name)) return;
    this.blockNames.add(name);
    const record = this.handle();
    this.blockRecordChunks.push(pairsToString([
      [0, 'BLOCK_RECORD'], [5, record], [330, this.blockRecordTable],
      [100, 'AcDbSymbolTableRecord'], [100, 'AcDbBlockTableRecord'],
      [2, name], [340, 0], [70, 0], [280, 1], [281, 0],
    ]));
    const begin = pairsToString([
      [0, 'BLOCK'], [5, this.handle()], [330, record], [100, 'AcDbEntity'], [8, '0'],
      [100, 'AcDbBlockBegin'], [2, name], [70, 0], [10, 0], [20, 0], [30, 0], [3, name], [1, ''],
    ]);
    const body = build(record).join('');
    const end = pairsToString([
      [0, 'ENDBLK'], [5, this.handle()], [330, record], [100, 'AcDbEntity'], [8, '0'],
      [100, 'AcDbBlockEnd'],
    ]);
    this.blockChunks.push(begin + body + end);
  }

  // --- entity -------------------------------------------------------------

  private common(type: string, owner: string, style: EntityStyle): Pair[] {
    return [[0, type], [5, this.handle()], [330, owner], [100, 'AcDbEntity'], [8, style.layer], ...this.styleExtras(style)];
  }

  /** Volitelné složky vzhledu entity (typ čáry, barva, tloušťka). */
  private styleExtras(style: EntityStyle): Pair[] {
    const pairs: Pair[] = [];
    if (style.linetype) pairs.push([6, style.linetype]);
    if (style.color === 'byblock') {
      pairs.push([62, 0]);
    } else if (style.color) {
      pairs.push([62, nearestAci(style.color)]);
      if (this.version === 'R2013') pairs.push([420, trueColor(style.color)]);
    }
    if (style.lineweight !== undefined) pairs.push([370, style.lineweight]);
    return pairs;
  }

  private xdata(style: EntityStyle): Pair[] {
    if (!style.xdata?.length) return [];
    const pairs: Pair[] = [[1001, XDATA_APP]];
    for (const s of style.xdata) {
      const enc = encodeText(s, this.version);
      for (let i = 0; i < enc.length || i === 0; i += MAX_XDATA_STRING) {
        pairs.push([1000, enc.slice(i, i + MAX_XDATA_STRING)]);
      }
    }
    return pairs;
  }

  private emit(owner: string | undefined, pairs: Pair[]): string {
    const s = pairsToString(pairs);
    if (owner === undefined) this.entityChunks.push(s);
    return s;
  }

  /** Vlastník: handle záznamu bloku, nebo `undefined` = modelový prostor. */
  private ownerOf(owner: string | undefined): string {
    return owner ?? this.modelSpace;
  }

  point(x: number, y: number, z: number, style: EntityStyle, owner?: string): string {
    if (!owner) this.extend(x, y, z);
    return this.emit(owner, [
      ...this.common('POINT', this.ownerOf(owner), style),
      [100, 'AcDbPoint'], [10, num(x)], [20, num(y)], [30, num(z)],
      ...this.xdata(style),
    ]);
  }

  /** 2D polylinie s konstantní výškou (LWPOLYLINE), vrcholy s bulge. */
  lwpolyline(vertices: readonly Vertex2[], closed: boolean, elevation: number, style: EntityStyle, owner?: string): string {
    const pairs: Pair[] = [
      ...this.common('LWPOLYLINE', this.ownerOf(owner), style),
      [100, 'AcDbPolyline'], [90, vertices.length], [70, (closed ? 1 : 0) | 128], [38, num(elevation)],
    ];
    for (const [x, y, bulge] of vertices) {
      if (!owner) this.extend(x, y, elevation);
      pairs.push([10, num(x)], [20, num(y)]);
      if (bulge) pairs.push([42, num(bulge)]);
    }
    return this.emit(owner, [...pairs, ...this.xdata(style)]);
  }

  /** 3D polylinie (POLYLINE + VERTEX + SEQEND) — proměnná výška. */
  polyline3d(vertices: readonly (readonly [number, number, number])[], closed: boolean, style: EntityStyle): void {
    const head = this.handle();
    const parts: Pair[] = [
      [0, 'POLYLINE'], [5, head], [330, this.modelSpace], [100, 'AcDbEntity'], [8, style.layer],
      ...this.styleExtras(style),
      [100, 'AcDb3dPolyline'], [66, 1], [10, 0], [20, 0], [30, 0], [70, 8 | (closed ? 1 : 0)],
      ...this.xdata(style),
    ];
    let s = pairsToString(parts);
    for (const [x, y, z] of vertices) {
      this.extend(x, y, z);
      s += pairsToString([
        [0, 'VERTEX'], [5, this.handle()], [330, head], [100, 'AcDbEntity'], [8, style.layer],
        [100, 'AcDbVertex'], [100, 'AcDb3dPolylineVertex'], [10, num(x)], [20, num(y)], [30, num(z)], [70, 32],
      ]);
    }
    s += pairsToString([[0, 'SEQEND'], [5, this.handle()], [330, head], [100, 'AcDbEntity'], [8, style.layer]]);
    this.entityChunks.push(s);
  }

  circle(x: number, y: number, r: number, style: EntityStyle, owner?: string): string {
    return this.emit(owner, [
      ...this.common('CIRCLE', this.ownerOf(owner), style),
      [100, 'AcDbCircle'], [10, num(x)], [20, num(y)], [30, 0], [40, num(r)],
      ...this.xdata(style),
    ]);
  }

  ellipse(x: number, y: number, rx: number, ry: number, rotDeg: number, style: EntityStyle, owner?: string): string {
    const a = (rotDeg * Math.PI) / 180;
    const [major, minor, angle] = rx >= ry ? [rx, ry, a] : [ry, rx, a + Math.PI / 2];
    return this.emit(owner, [
      ...this.common('ELLIPSE', this.ownerOf(owner), style),
      [100, 'AcDbEllipse'], [10, num(x)], [20, num(y)], [30, 0],
      [11, num(major * Math.cos(angle))], [21, num(major * Math.sin(angle))], [31, 0],
      [40, num(major > 0 ? minor / major : 1)], [41, 0], [42, num(2 * Math.PI)],
      ...this.xdata(style),
    ]);
  }

  /**
   * Text. `align: 'left'` = vkládací bod vlevo na účaří (popisy UDM),
   * `'center'` = střed na účaří (texty v symbolech).
   */
  text(
    x: number, y: number, z: number, height: number, rotDeg: number, value: string,
    align: 'left' | 'center', style: EntityStyle, owner?: string, oblique = 0,
  ): string {
    if (!owner) this.extend(x, y, z);
    const pairs: Pair[] = [
      ...this.common('TEXT', this.ownerOf(owner), style),
      [100, 'AcDbText'], [10, num(x)], [20, num(y)], [30, num(z)], [40, num(height)],
      [1, encodeText(value, this.version)], [50, num(rotDeg)], [7, 'UDM'],
    ];
    if (oblique) pairs.push([51, num(oblique)]);
    if (align === 'center') pairs.push([72, 1], [11, num(x)], [21, num(y)], [31, num(z)]);
    pairs.push([100, 'AcDbText']);
    return this.emit(owner, [...pairs, ...this.xdata(style)]);
  }

  insert(block: string, x: number, y: number, z: number, rotDeg: number, style: EntityStyle): string {
    this.extend(x, y, z);
    return this.emit(undefined, [
      ...this.common('INSERT', this.modelSpace, style),
      [100, 'AcDbBlockReference'], [2, block], [10, num(x)], [20, num(y)], [30, num(z)], [50, num(rotDeg)],
      ...this.xdata(style),
    ]);
  }

  /** Plná výplň (HATCH SOLID) uzavřené hranice s bulge — jen uvnitř bloků. */
  solidHatch(boundary: readonly Vertex2[], style: EntityStyle, owner: string): string {
    return this.emit(owner, this.hatchPairs([boundary], 0, style, owner));
  }

  /**
   * Plná výplň plochy v modelovém prostoru: první obrys vnější, další otvory
   * (styl normal = sudá/lichá parita). Zapisuje se před ostatní entity, aby
   * výplň ležela pod obrysy a symboly.
   */
  areaHatch(loops: readonly (readonly Vertex2[])[], elevation: number, style: EntityStyle): string {
    for (const loop of loops) for (const [x, y] of loop) this.extend(x, y, elevation);
    const s = pairsToString([...this.hatchPairs(loops, elevation, style, this.modelSpace), ...this.xdata(style)]);
    this.fillChunks.push(s);
    return s;
  }

  private hatchPairs(loops: readonly (readonly Vertex2[])[], elevation: number, style: EntityStyle, owner: string): Pair[] {
    const pairs: Pair[] = [
      ...this.common('HATCH', owner, style),
      [100, 'AcDbHatch'], [10, 0], [20, 0], [30, num(elevation)], [210, 0], [220, 0], [230, 1],
      [2, 'SOLID'], [70, 1], [71, 0], [91, loops.length],
    ];
    loops.forEach((boundary, i) => {
      const hasBulge = boundary.some((v) => v[2]);
      // 2 = polylinie, +1 = vnější obrys
      pairs.push([92, i === 0 ? 3 : 2], [72, hasBulge ? 1 : 0], [73, 1], [93, boundary.length]);
      for (const [x, y, bulge] of boundary) {
        pairs.push([10, num(x)], [20, num(y)]);
        if (hasBulge) pairs.push([42, num(bulge ?? 0)]);
      }
      pairs.push([97, 0]);
    });
    pairs.push([75, 0], [76, 1], [98, 0]);
    return pairs;
  }

  // --- výstup -------------------------------------------------------------

  /** Celý výkres jako text DXF. */
  toString(): string {
    let lines = [...this.lines];
    const insertBefore = (index: number, chunks: string[]): void => {
      if (!chunks.length) return;
      // concat místo splice(...) — velké výkresy mají statisíce řádků a spread
      // do argumentů funkce by přetekl zásobník.
      const added = chunks.join('').replace(/\n$/, '').split('\n');
      lines = lines.slice(0, index).concat(added, lines.slice(index));
    };
    // Řádky jdou po dvojicích (kód, hodnota): kódy na sudých indexech.
    const tableEnd = (table: string): { countIdx: number; endIdx: number } => {
      let start = -1;
      for (let i = 0; i < lines.length - 3; i += 2) {
        if (lines[i]!.trim() === '0' && lines[i + 1] === 'TABLE' && lines[i + 3] === table) {
          start = i;
          break;
        }
      }
      if (start < 0) throw new Error(`DXF šablona: chybí tabulka ${table}`);
      let countIdx = -1;
      for (let j = start + 2; j < lines.length - 1; j += 2) {
        const code = lines[j]!.trim();
        if (code === '0' && countIdx < 0) countIdx = -2; // počet je jen v hlavičce tabulky
        if (code === '70' && countIdx === -1) countIdx = j + 1;
        if (code === '0' && lines[j + 1] === 'ENDTAB') {
          if (countIdx < 0) throw new Error(`DXF šablona: tabulka ${table} bez počtu (70)`);
          return { countIdx, endIdx: j };
        }
      }
      throw new Error(`DXF šablona: tabulka ${table} bez ENDTAB`);
    };
    const sectionEnd = (section: string): number => {
      let inSection = false;
      for (let i = 0; i < lines.length - 1; i += 2) {
        if (lines[i]!.trim() !== '0') continue;
        if (lines[i + 1] === 'SECTION' && lines[i + 3] === section) inSection = true;
        else if (inSection && lines[i + 1] === 'ENDSEC') return i;
      }
      throw new Error(`DXF šablona: sekce ${section} bez ENDSEC`);
    };
    // Odzadu (ENTITIES → BLOCKS → TABLES), ať vložení neposune dřívější indexy.
    insertBefore(sectionEnd('ENTITIES'), [...this.fillChunks, ...this.entityChunks]);
    insertBefore(sectionEnd('BLOCKS'), this.blockChunks);
    for (const [table, chunks] of [
      ['BLOCK_RECORD', this.blockRecordChunks],
      ['LAYER', this.layerChunks],
      ['LTYPE', this.ltypeChunks],
    ] as const) {
      const { countIdx, endIdx } = tableEnd(table);
      insertBefore(endIdx, chunks);
      lines[countIdx] = String(Number(lines[countIdx]) + chunks.length);
    }
    // Hlavička: další volný handle a obálka výkresu.
    lines[headerValueIndex(lines, '$HANDSEED')] = this.handleSeed.toString(16).toUpperCase();
    const e = this.ext;
    if (Number.isFinite(e.minX)) {
      const setPoint = (name: string, x: number, y: number, z: number): void => {
        const i = headerValueIndex(lines, name);
        lines[i] = num(x);
        lines[i + 2] = num(y);
        lines[i + 4] = num(z);
      };
      setPoint('$EXTMIN', e.minX, e.minY, Number.isFinite(e.minZ) ? e.minZ : 0);
      setPoint('$EXTMAX', e.maxX, e.maxY, Number.isFinite(e.maxZ) ? e.maxZ : 0);
    }
    return lines.join('\n');
  }
}

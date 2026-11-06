/**
 * Zkušební kresba značek vložených do linií (dev/line-symbols.html): skutečná
 * cesta aplikace — syntetické záznamy JVF → `buildJvfLayers` → OL mapa —
 * pro několik typů linií a rozlišení mapy. Počty nakreslených značek
 * (volání `fill`/`stroke` s `Path2D`, jen ty kreslí značky) jsou v
 * `window.__lineSymbols` pro e2e test.
 */
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import type { ObjektovyTyp } from 'jvf-parser';
import { buildJvfLayers } from '../src/map/jvfLayers.js';

interface Case {
  label: string;
  codeBase: string;
  obsahovaCast: string;
  attributes: Record<string, string>;
}

const CASES: Case[] = [
  { label: 'elektřina NN', codeBase: '0100000098', obsahovaCast: 'TI', attributes: { MaximalniNapetovaHladina: '1' } },
  { label: 'elektřina ZVN', codeBase: '0100000098', obsahovaCast: 'TI', attributes: { MaximalniNapetovaHladina: '4' } },
  { label: 'plynovod VTL', codeBase: '0100000109', obsahovaCast: 'TI', attributes: { TlakovaHladinaPlynovodniSite: '3' } },
  { label: 'plynovod VVTL', codeBase: '0100000109', obsahovaCast: 'TI', attributes: { TlakovaHladinaPlynovodniSite: '4' } },
  { label: 'vodovod rozváděcí', codeBase: '0100000113', obsahovaCast: 'TI', attributes: { TypTrasyVodovodniSite: '2' } },
  { label: 'kanalizace jednotná', codeBase: '0100000121', obsahovaCast: 'TI', attributes: { TypTrasyStokoveSite: '1' } },
  { label: 'teplovod primární', codeBase: '0100000130', obsahovaCast: 'TI', attributes: { TypTrasyTeplovodniSite: '1' } },
  { label: 'silnice I. třídy', codeBase: '0100000004', obsahovaCast: 'DI', attributes: { KategoriePozemniKomunikace: '3' } },
  { label: 'MK II. třídy', codeBase: '0100000004', obsahovaCast: 'DI', attributes: { KategoriePozemniKomunikace: '7' } },
  { label: 'zábradlí', codeBase: '0100000199', obsahovaCast: 'ZPS', attributes: {} },
  { label: 'plot', codeBase: '0100000162', obsahovaCast: 'ZPS', attributes: {} },
];

/** Rozlišení mapy (m/px); měřítko obrazovky ≈ rozlišení / 0,00028 m. */
const RESOLUTIONS = [0.05, 0.14, 0.4, 1, 2.5];

const W = 300;
const H = 150;
/** Tři linie v px buňky: rovná, klikatá, zprava doleva. */
const LINES_PX = [
  [[16, 24], [284, 24]],
  [[16, 110], [70, 62], [130, 112], [190, 58], [236, 100], [284, 70]],
  [[284, 132], [150, 132], [16, 126]],
];

function objektovyTyp(c: Case, resolution: number): ObjektovyTyp {
  // Buňka je výřez kolem [0, 0]: px → metry podle rozlišení (y nahoru).
  const toWorld = ([x, y]: number[]): number[] => [(x! - W / 2) * resolution, (H / 2 - y!) * resolution];
  return {
    elementName: `Test${c.codeBase}`,
    nazev: c.label,
    codeBase: c.codeBase,
    codeSuffix: '02',
    kategorieObjektu: '',
    skupinaObjektu: '',
    obsahovaCast: c.obsahovaCast,
    zaznamy: LINES_PX.map((line, i) => ({
      id: `${c.codeBase}-${i}`,
      commonAttributes: { id: `${c.codeBase}-${i}` },
      attributes: c.attributes,
      geometrie: [{ type: 'LineString', data: { srsDimension: 2, coordinates: line.flatMap(toWorld) } }],
    })),
  } as unknown as ObjektovyTyp;
}

// Počítání značek: renderer kreslí značky jako Path2D (OL čáru bez argumentu).
const counts: Record<string, number> = {};
for (const method of ['fill', 'stroke'] as const) {
  const orig = CanvasRenderingContext2D.prototype[method] as (this: CanvasRenderingContext2D, ...a: unknown[]) => void;
  CanvasRenderingContext2D.prototype[method] = function (this: CanvasRenderingContext2D, ...args: unknown[]) {
    const cell = (this.canvas as HTMLCanvasElement).closest?.('[data-cell]')?.getAttribute('data-cell');
    if (cell && args[0] instanceof Path2D) counts[cell] = (counts[cell] ?? 0) + 1;
    return orig.apply(this, args);
  } as never;
}

const grid = document.getElementById('grid')!;
grid.innerHTML = `<tr><th></th>${RESOLUTIONS.map((r) => `<th>${r} m/px (≈ 1 : ${Math.round(r / 0.00028)})</th>`).join('')}</tr>`;
const maps: Map[] = [];
for (const c of CASES) {
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>${c.label}</th>`;
  for (const r of RESOLUTIONS) {
    const td = document.createElement('td');
    const id = `${c.label}@${r}`;
    td.innerHTML = `<span class="count"></span><div class="map" data-cell="${id}"></div>`;
    tr.appendChild(td);
    const { layers } = buildJvfLayers([objektovyTyp(c, r)]);
    maps.push(new Map({
      target: td.querySelector<HTMLElement>('.map')!,
      controls: [],
      interactions: [],
      layers: layers.map((l) => l.olLayer),
      view: new View({ center: [0, 0], resolution: r }),
    }));
  }
  grid.appendChild(tr);
}

/** Po načtení SVG značek a dokreslení map: počty značek na buňku. */
async function settle(): Promise<Record<string, number>> {
  await new Promise((r) => setTimeout(r, 600));
  for (const k of Object.keys(counts)) delete counts[k];
  await Promise.all(maps.map((m) => new Promise<void>((res) => { m.once('rendercomplete', () => res()); m.render(); })));
  document.querySelectorAll<HTMLElement>('[data-cell]').forEach((el) => {
    const label = el.previousElementSibling as HTMLElement;
    label.textContent = String(counts[el.dataset['cell']!] ?? 0);
  });
  return { ...counts };
}

(window as unknown as { __lineSymbols: Promise<Record<string, number>> }).__lineSymbols = settle();

/**
 * Značka opakovaná podél linie (ŽXML: GraphicStroke SLD — příčky plotu, tečky
 * zábradlí, značky sítí): SVG v nativní velikosti (1 jednotka = 0,01 mm
 * papíru, jako body), natočená ve směru linie, v rozestupu `intervalMm`.
 * Kreslí se vlastním rendererem stylu OL do pixelových souřadnic linie.
 */
import { pointsAlongLine } from 'jvf-parser';

const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

const loading = new Map<string, Promise<HTMLImageElement | null>>();
const loaded = new Map<string, HTMLImageElement | null>();

/** Načíst SVG značky (jednou); po načtení je dostupné přes `getRepeatImage`. */
export function loadRepeatImage(svg: string): Promise<HTMLImageElement | null> {
  let p = loading.get(svg);
  if (!p) {
    const img = new Image();
    img.src = SVG_BASE + svg;
    p = img
      .decode()
      .then(() => img)
      .catch(() => null)
      .then((res) => {
        loaded.set(svg, res);
        return res;
      });
    loading.set(svg, p);
  }
  return p;
}

/** Už načtená značka (synchronně, pro kreslení), jinak `undefined`. */
export function getRepeatImage(svg: string): HTMLImageElement | null | undefined {
  return loaded.get(svg);
}

export interface RepeatOptions {
  image: HTMLImageElement;
  /** Kolik px obrazovky (× pixelRatio) odpovídá 1 jednotce SVG. */
  pxPerUnit: number;
  intervalPx: number;
  startPx: number;
}

/** Nejmenší rozestup / šířka značky v px — při oddálení se značky vynechají. */
const MIN_INTERVAL_PX = 4;
const MIN_WIDTH_PX = 1.5;

/** Nakreslit značky podél linie v pixelových souřadnicích (osa Y dolů). */
export function drawRepeatSymbols(
  ctx: CanvasRenderingContext2D,
  coords: readonly (readonly number[])[],
  o: RepeatOptions,
): void {
  const w = o.image.naturalWidth * o.pxPerUnit;
  const h = o.image.naturalHeight * o.pxPerUnit;
  if (o.intervalPx < MIN_INTERVAL_PX || w < MIN_WIDTH_PX) return;
  for (const p of pointsAlongLine(coords, o.startPx, o.intervalPx)) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.drawImage(o.image, -w / 2, -h / 2, w, h);
    ctx.restore();
  }
}

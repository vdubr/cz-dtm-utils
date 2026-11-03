/**
 * Výpočty a formátování pro měření v mapě. Mapa je v S-JTSK (EPSG:5514,
 * metry), takže délka i plocha se počítají rovinně přímo ze souřadnic —
 * stejně jako v geodetické praxi nad JVF daty (zkreslení Křovákova
 * zobrazení ~1e-4 se zanedbává).
 */
export type Coord = readonly number[];

/** Délka úsečky v metrech (XY). */
export function segmentLength(a: Coord, b: Coord): number {
  return Math.hypot((b[0] ?? 0) - (a[0] ?? 0), (b[1] ?? 0) - (a[1] ?? 0));
}

/** Celková délka lomené čáry v metrech. */
export function polylineLength(coords: readonly Coord[]): number {
  let sum = 0;
  for (let i = 1; i < coords.length; i++) sum += segmentLength(coords[i - 1]!, coords[i]!);
  return sum;
}

/**
 * Plocha mnohoúhelníku uzavřeného z bodů (Gaussova / shoelace formule),
 * v m². Pod 3 body 0. Uzavírací bod se nepřidává — první a poslední bod
 * spojí vzorec sám.
 */
export function polygonArea(coords: readonly Coord[]): number {
  if (coords.length < 3) return 0;
  let twice = 0;
  for (let i = 0; i < coords.length; i++) {
    const a = coords[i]!;
    const b = coords[(i + 1) % coords.length]!;
    twice += (a[0] ?? 0) * (b[1] ?? 0) - (b[0] ?? 0) * (a[1] ?? 0);
  }
  return Math.abs(twice) / 2;
}

/** Odstraní po sobě jdoucí shodné body (dvojklik, přichycení na týž vrchol). */
export function dedupeConsecutive(coords: readonly Coord[]): Coord[] {
  const out: Coord[] = [];
  for (const c of coords) {
    const last = out[out.length - 1];
    if (!last || last[0] !== c[0] || last[1] !== c[1]) out.push(c);
  }
  return out;
}

const fmt = (n: number, digits: number): string =>
  n.toLocaleString('cs-CZ', { minimumFractionDigits: digits, maximumFractionDigits: digits });

/** Vzdálenost: do 1 km v metrech na cm, jinak v km na metry. */
export function formatLength(m: number): string {
  return m < 1000 ? `${fmt(m, 2)} m` : `${fmt(m / 1000, 3)} km`;
}

/** Plocha: m² (na 2 desetinná místa); od 1 ha navíc v ha, od 1 km² v km². */
export function formatArea(m2: number): string {
  if (m2 >= 1_000_000) return `${fmt(m2 / 1_000_000, 3)} km²`;
  if (m2 >= 10_000) return `${fmt(m2, 0)} m² (${fmt(m2 / 10_000, 2)} ha)`;
  return `${fmt(m2, 2)} m²`;
}

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

/** Shodné body (XY, s tolerancí na zaokrouhlení). */
export function samePoint(a: Coord | undefined, b: Coord | undefined): boolean {
  if (!a || !b) return false;
  return Math.abs((a[0] ?? 0) - (b[0] ?? 0)) < 1e-6 && Math.abs((a[1] ?? 0) - (b[1] ?? 0)) < 1e-6;
}

/**
 * Uzavřený polygon: měření skončilo kliknutím na první bod (poslední bod
 * = první, aspoň 3 různé body).
 */
export function isClosedRing(coords: readonly Coord[]): boolean {
  return coords.length >= 4 && samePoint(coords[0], coords[coords.length - 1]);
}

/** Body bez uzavíracího (opakovaného prvního) bodu. */
export function openRing(coords: readonly Coord[]): Coord[] {
  return isClosedRing(coords) ? coords.slice(0, -1) : [...coords];
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

/** Šikmá (prostorová) délka lomené čáry v metrech — body s výškou Z. */
export function polylineLength3d(coords: readonly Coord[]): number {
  let sum = 0;
  for (let i = 1; i < coords.length; i++) {
    const a = coords[i - 1]!;
    const b = coords[i]!;
    sum += Math.hypot((b[0] ?? 0) - (a[0] ?? 0), (b[1] ?? 0) - (a[1] ?? 0), (b[2] ?? 0) - (a[2] ?? 0));
  }
  return sum;
}

/** Převýšení posledního bodu proti prvnímu (Z), v metrech. */
export function heightDelta(coords: readonly Coord[]): number {
  if (coords.length < 2) return 0;
  return (coords[coords.length - 1]![2] ?? 0) - (coords[0]![2] ?? 0);
}

/** Převýšení se znaménkem, např. +1,23 m nebo −0,50 m. */
export function formatHeightDelta(m: number): string {
  const abs = fmt(Math.abs(m), 2);
  if (Math.abs(m) < 0.005) return `${abs} m`;
  return `${m > 0 ? '+' : '−'}${abs} m`;
}

/** Plocha: m² (na 2 desetinná místa); od 1 ha navíc v ha, od 1 km² v km². */
export function formatArea(m2: number): string {
  if (m2 >= 1_000_000) return `${fmt(m2 / 1_000_000, 3)} km²`;
  if (m2 >= 10_000) return `${fmt(m2, 0)} m² (${fmt(m2 / 10_000, 2)} ha)`;
  return `${fmt(m2, 2)} m²`;
}

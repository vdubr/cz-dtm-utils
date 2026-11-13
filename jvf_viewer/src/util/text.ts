/** Výčet česky: „A", „A a B", „A, B a C" (spojka posledního členu volitelná, např. „ i "). */
export function joinCs(items: readonly string[], last = ' a '): string {
  if (items.length < 2) return items[0] ?? '';
  return `${items.slice(0, -1).join(', ')}${last}${items[items.length - 1]}`;
}

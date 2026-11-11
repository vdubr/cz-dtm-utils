/**
 * Obsahové části (`ObjektovyTyp.obsahovaCast`) napříč datovými modely —
 * jednotné pořadí a české názvy pro legendu a filtr Přehledu prvků.
 *
 * JVF DTM: ZPS, TI, DI, GAD, OPL, PSPI; UDM navíc ZPSUDM, TIUDM, DIUDM, OST;
 * ŽXML navíc ZDT, ZDD, H3D, ODSZ, SKLEP. Neznámé části se řadí na konec
 * abecedně a jako název mají svůj kód.
 */
export const CONTENT_PART_ORDER: readonly string[] = [
  'ZPS', 'TI', 'DI', 'GAD', 'OPL', 'PSPI',
  'ZPSUDM', 'TIUDM', 'DIUDM', 'OST',
  'ZDT', 'ZDD', 'H3D', 'ODSZ', 'SKLEP',
];

const CONTENT_PART_TITLES: Record<string, string> = {
  ZPS: 'Základní prostorová situace',
  TI: 'Technická infrastruktura',
  DI: 'Dopravní infrastruktura',
  GAD: 'Geodetické a administrativní údaje',
  OPL: 'Ostatní prvky a linie',
  ZPSUDM: 'ZPS nad rámec DTM (UDM)',
  TIUDM: 'TI nad rámec DTM (UDM)',
  DIUDM: 'DI nad rámec DTM (UDM)',
  OST: 'Ostatní objekty (UDM)',
  ZDT: 'Železniční technická infrastruktura (SŽ)',
  ZDD: 'Železniční dopravní infrastruktura (SŽ)',
  H3D: 'Hrany 3D doplňující kresbu ZPS (SŽ)',
  ODSZ: 'Ostatní data SŽ',
  SKLEP: 'Data ze starších dokumentací (SŽ)',
};

/** Český název obsahové části (neznámá část = kód). */
export function contentPartTitle(part: string): string {
  return CONTENT_PART_TITLES[part] ?? part;
}

/** Komparátor obsahových částí podle `CONTENT_PART_ORDER`. */
export function compareContentParts(a: string, b: string): number {
  const ai = CONTENT_PART_ORDER.indexOf(a);
  const bi = CONTENT_PART_ORDER.indexOf(b);
  if (ai !== -1 && bi !== -1) return ai - bi;
  if (ai !== -1) return -1;
  if (bi !== -1) return 1;
  return a.localeCompare(b, 'cs');
}

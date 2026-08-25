import type { JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-parser';

/**
 * Kolekce načtených projektů (JVF souborů) — viewer umí zobrazit více
 * navazujících projektů v jedné mapě naráz.
 *
 * Každý projekt = jeden načtený JVF soubor: `{ id, nazev, dtm, color }`.
 * Modul zároveň drží **provenienci** — mapování `ObjektovyTyp` / `ZaznamObjektu`
 * → id projektu přes `WeakMap`. Díky tomu ostatní části vieweru (2D style fn,
 * 3D visibility, filtr prvků, syntetické klíče záznamů) zjistí projekt
 * záznamu bez změny doménových typů z `jvf-dtm-types`.
 *
 * **Kvalifikace klíčů**: při ≥2 projektech se identifikátory záznamů
 * (`resolveZaznamId`) a klíče vrstev (`resolveLayerKey`) prefixují
 * `{projectId}:` — stejné DTM ID či stejný `elementName` ve dvou projektech
 * tak nekolidují. Při 0–1 projektu je prefix **prázdný**, takže se chování
 * i formát klíčů vůči single-souborovému režimu nijak nemění.
 *
 * Stav je modul-level singleton, konzistentní se vzorem
 * `state/featureFilter.ts` / `state/changesetToggle.ts`. Orchestraci
 * (rebuild vrstev, panelů, 3D) řídí `main.ts` — modul samotný žádné
 * posluchače nepotřebuje.
 */

export interface JvfProject {
  /** Stabilní id v rámci session (P1, P2, …). */
  id: string;
  /** Název souboru (zobrazuje se v UI). */
  nazev: string;
  dtm: JvfDtm;
  /** Barva pro odlišení projektu v UI (tečka/proužek, chips). */
  color: string;
}

/** Maximální počet současně načtených projektů. */
export const MAX_PROJECTS = 8;

/**
 * Paleta barev pro odlišení projektů v UI. Barvy jsou čistě identifikační
 * (neodpovídají žádné specifikaci) a nepromítají se do stylování geometrií
 * v mapě — tam platí Katalog kartografických symbolů DTM.
 */
const PROJECT_COLORS = [
  '#58a6ff', // modrá
  '#f78166', // lososová
  '#3fb950', // zelená
  '#d2a8ff', // fialová
  '#f2cc60', // žlutá
  '#76e3ea', // tyrkysová
  '#ff7b72', // červená
  '#7ee787', // světle zelená
];

let seq = 0;
const projects: JvfProject[] = [];

/** Provenience: ObjektovyTyp i ZaznamObjektu → id projektu. */
const provenance = new WeakMap<object, string>();

/** Je načteno více projektů naráz? */
export function isMultiProject(): boolean {
  return projects.length >= 2;
}

export function getProjects(): readonly JvfProject[] {
  return projects;
}

export function getProjectCount(): number {
  return projects.length;
}

export function getProject(id: string): JvfProject | undefined {
  return projects.find((p) => p.id === id);
}

/** První nepoužitá barva z palety (po odebrání projektu se barva uvolní). */
function pickColor(): string {
  const used = new Set(projects.map((p) => p.color));
  return PROJECT_COLORS.find((c) => !used.has(c)) ?? PROJECT_COLORS[0]!;
}

/**
 * Přidá projekt do kolekce a zaregistruje provenienci všech jeho
 * `ObjektovyTyp` a `ZaznamObjektu`. Vrací `null`, pokud je dosažen
 * `MAX_PROJECTS` — volající zobrazí upozornění.
 */
export function addProject(nazev: string, dtm: JvfDtm): JvfProject | null {
  if (projects.length >= MAX_PROJECTS) return null;
  const project: JvfProject = {
    id: `P${++seq}`,
    nazev,
    dtm,
    color: pickColor(),
  };
  for (const ot of dtm.objekty) {
    provenance.set(ot, project.id);
    for (const zaznam of ot.zaznamy) provenance.set(zaznam, project.id);
  }
  projects.push(project);
  return project;
}

/** Odebere projekt podle id. Vrací true, pokud existoval. */
export function removeProject(id: string): boolean {
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  projects.splice(idx, 1);
  return true;
}

/** Odebere všechny projekty (např. při přepnutí verze JVF DTM). */
export function clearProjects(): void {
  projects.length = 0;
}

/**
 * Vrátí id projektu, ze kterého daný `ObjektovyTyp` / `ZaznamObjektu`
 * pochází, nebo `null` (objekt bez zaregistrované provenience).
 */
export function resolveProjectKey(
  x: ObjektovyTyp | ZaznamObjektu,
): string | null {
  return provenance.get(x) ?? null;
}

/**
 * Prefix pro kvalifikaci klíčů (id záznamů, klíče vrstev) projektem.
 * Při 0–1 projektu vrací prázdný string — klíče zůstávají beze změny,
 * takže single-souborový režim se chová identicky jako dřív.
 */
export function getProjectPrefix(x: ObjektovyTyp | ZaznamObjektu): string {
  if (!isMultiProject()) return '';
  const id = provenance.get(x);
  return id ? `${id}:` : '';
}

/**
 * Klíč vrstvy pro viditelnost ve 3D scéně (`hiddenLayers`): `elementName`
 * kvalifikovaný projektem. Při jednom projektu = čistý `elementName`
 * (beze změny chování), při více projektech `P2:BudovaPlocha` — skrytí
 * vrstvy jednoho projektu neskryje stejný typ v ostatních.
 */
export function resolveLayerKey(ot: ObjektovyTyp): string {
  return getProjectPrefix(ot) + ot.elementName;
}

/** Počet záznamů projektu (pro zobrazení v UI seznamu projektů). */
export function countZaznamy(dtm: JvfDtm): number {
  return dtm.objekty.reduce((sum, ot) => sum + ot.zaznamy.length, 0);
}

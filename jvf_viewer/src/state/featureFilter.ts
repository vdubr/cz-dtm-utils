import type { ZaznamObjektu } from 'jvf-parser';
import { resolveProjectKey } from './projects.js';

/**
 * Globální filtr prvků — jednotný stav filtrovacích dimenzí, které se
 * promítají do Přehledu prvků, 2D mapy (OL style function) i 3D scény
 * (visibility per objekt).
 *
 * Aktuální dimenze:
 *   - **úroveň umístění (LEVEL)** — hodnoty −3..+3 z atributů
 *     `UrovenUmisteniObjektuZPS/TI/DI` + skupina „bez úrovně" pro záznamy,
 *     které atribut nemají,
 *   - **projekt** — při ≥2 načtených JVF souborech lze skrýt záznamy
 *     jednotlivých projektů (chips v Přehledu prvků). Klíčem je id
 *     projektu (`state/projects.ts`).
 *
 * Architektura: filtr je průnik (AND) dimenzí, `matchesFeatureFilter` je
 * jediné místo, kde se dimenze vyhodnocují. Nové dimenze přidají vlastní
 * stav + podmínku tamtéž — konzumenti (style fn, 3D visibility, tabulka)
 * se nemění.
 *
 * Stav je modul-level singleton (jeden viewer = jedna sada filtrů),
 * konzistentní se vzorem `state/changesetToggle.ts`. Reprezentace přes
 * **množinu skrytých hodnot**: prázdná množina = filtr neaktivní = vše
 * viditelné. Tím je garantováno, že při neaktivním filtru se chování
 * vieweru nijak nemění.
 *
 * **Vztah k ostatním přepínačům** (všechno se kombinuje jako AND):
 *   - viditelnost vrstev (layer panel / `hiddenLayers` ve 3D),
 *   - changeset přepínače (`state/changesetToggle.ts`),
 *   - tento filtr prvků.
 */

/**
 * Klíč úrovně umístění: dekadický zápis čísla (`'-3'`..`'3'`), nebo
 * `LEVEL_NONE` pro záznamy bez atributu úrovně.
 */
export type LevelKey = string;

/** Klíč skupiny záznamů bez atributu úrovně umístění. */
export const LEVEL_NONE: LevelKey = 'none';

export type FeatureFilterListener = () => void;

/** Skryté úrovně. Prázdná množina = filtr neaktivní (vše viditelné). */
const hiddenLevels = new Set<LevelKey>();

/** Skryté projekty (id projektu). Prázdná množina = dimenze neaktivní. */
const hiddenProjects = new Set<string>();

const listeners = new Set<FeatureFilterListener>();

function notify(): void {
  for (const listener of listeners) listener();
}

/**
 * Vrátí úroveň umístění záznamu (LEVEL: −3 až +3) ze specifických atributů
 * `UrovenUmisteniObjektuZPS/TI/DI`, nebo `null` pokud atribut chybí či není
 * číslem. Obdoba `getLevel` z `jvf-topology` (ta není ve veřejném API
 * knihovny — viewer si ji drží lokálně).
 */
export function getZaznamLevel(zaznam: ZaznamObjektu): number | null {
  const a = zaznam.attributes ?? {};
  const v =
    a['UrovenUmisteniObjektuZPS'] ??
    a['UrovenUmisteniObjektuTI'] ??
    a['UrovenUmisteniObjektuDI'];
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  if (typeof v === 'string' && v !== '') {
    const n = Number(v);
    if (Number.isFinite(n)) return n;
  }
  return null;
}

/** Převede úroveň záznamu na klíč dimenze filtru. */
export function resolveLevelKey(zaznam: ZaznamObjektu): LevelKey {
  const level = getZaznamLevel(zaznam);
  return level === null ? LEVEL_NONE : String(level);
}

/** UI popisek úrovně: kladné s `+` (např. `+1`), `0`, záporné `−1`, bez úrovně česky. */
export function levelKeyLabel(key: LevelKey): string {
  if (key === LEVEL_NONE) return 'bez úrovně';
  const n = Number(key);
  if (Number.isFinite(n) && n > 0) return `+${n}`;
  return key;
}

/** Je daná úroveň viditelná (není odfiltrovaná)? */
export function isLevelVisible(key: LevelKey | undefined): boolean {
  if (hiddenLevels.size === 0) return true;
  return !hiddenLevels.has(key ?? LEVEL_NONE);
}

/** Zobrazit / skrýt danou úroveň. Notifikuje posluchače jen při změně. */
export function setLevelVisible(key: LevelKey, visible: boolean): void {
  const changed = visible ? hiddenLevels.delete(key) : !hiddenLevels.has(key);
  if (!visible) hiddenLevels.add(key);
  if (changed) notify();
}

/**
 * Je daný projekt viditelný (není odfiltrovaný)? Klíč `null` (záznam bez
 * zaregistrované provenience) se nikdy neskrývá.
 */
export function isProjectVisible(key: string | null | undefined): boolean {
  if (hiddenProjects.size === 0) return true;
  if (key == null) return true;
  return !hiddenProjects.has(key);
}

/** Zobrazit / skrýt daný projekt. Notifikuje posluchače jen při změně. */
export function setProjectVisible(key: string, visible: boolean): void {
  const changed = visible
    ? hiddenProjects.delete(key)
    : !hiddenProjects.has(key);
  if (!visible) hiddenProjects.add(key);
  if (changed) notify();
}

/**
 * Prochází záznam všemi dimenzemi filtru? Jediné místo vyhodnocení —
 * 2D style fn i 3D visibility používají per-feature uložené klíče
 * (viz `isLevelVisible` / `isProjectVisible`), tabulka Přehledu prvků
 * volá tuto funkci.
 */
export function matchesFeatureFilter(zaznam: ZaznamObjektu): boolean {
  return (
    isLevelVisible(resolveLevelKey(zaznam)) &&
    isProjectVisible(resolveProjectKey(zaznam))
  );
}

/** Je filtr aktivní (aspoň jedna hodnota skrytá)? */
export function isFeatureFilterActive(): boolean {
  return hiddenLevels.size > 0 || hiddenProjects.size > 0;
}

/**
 * Reset filtru do neaktivního stavu (vše viditelné). Volat při každé změně
 * načtených dat (přidání / odebrání projektu) — filtr z předchozích dat
 * nemá nová data ovlivňovat.
 */
export function resetFeatureFilter(): void {
  if (hiddenLevels.size === 0 && hiddenProjects.size === 0) return;
  hiddenLevels.clear();
  hiddenProjects.clear();
  notify();
}

export function subscribeFeatureFilter(
  listener: FeatureFilterListener,
): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

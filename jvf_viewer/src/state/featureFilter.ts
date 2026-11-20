import type { ObjektovyTyp, ZaznamObjektu } from 'jvf-parser';
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
 *   - **obsahová část** — výběr jedné části (ZPS, TI, ZPSUDM, ZDT, …)
 *     tlačítky v Přehledu prvků; `null` = všechny. Část je vlastnost
 *     objektového typu (`ObjektovyTyp.obsahovaCast`), proto ji 2D/3D nesou
 *     per prvek (`jvfPart`) a tabulka filtruje celé skupiny.
 *   - **hodnota atributu** — jeden zvolený atribut (např. `CisStaOb`, číslo
 *     stavebního objektu / provozního souboru SŽ) a množina zobrazených
 *     hodnot; `null` = dimenze neaktivní. 2D/3D nesou per prvek odkaz na
 *     `ZaznamObjektu.attributes` (`jvfAttrs`), ne kopii.
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

/** Zobrazené obsahové části (lze jich vybrat více); prázdná = všechny (dimenze neaktivní). */
const contentParts = new Set<string>();

/** Atributy záznamu tak, jak je drží `ZaznamObjektu.attributes`. */
export type RecordAttributes = ZaznamObjektu['attributes'];

/** Filtr podle hodnoty atributu: atribut + zobrazené hodnoty (klíče `attrValueKey`). */
export interface AttributeFilter {
  readonly name: string;
  readonly values: ReadonlySet<string>;
}

/** Aktivní filtr podle atributu, `null` = dimenze neaktivní. */
let attributeFilter: AttributeFilter | null = null;

/** Klíč hodnoty pro záznamy, které atribut nemají nebo ho mají prázdný. */
export const ATTR_EMPTY = '';

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

/** Vybrané obsahové části (prázdná množina = všechny). */
export function getContentPartFilter(): ReadonlySet<string> {
  return contentParts;
}

/** Vybrat obsahové části (prázdný seznam = všechny). Notifikuje jen při změně. */
export function setContentPartFilter(parts: readonly string[]): void {
  const next = new Set(parts);
  if (next.size === contentParts.size && [...next].every((p) => contentParts.has(p))) return;
  contentParts.clear();
  for (const p of next) contentParts.add(p);
  notify();
}

/** Je obsahová část viditelná? Prvek bez části se nikdy neskrývá. */
export function isContentPartVisible(part: string | null | undefined): boolean {
  if (contentParts.size === 0 || part == null) return true;
  return contentParts.has(part);
}

/**
 * Klíč hodnoty atributu pro filtr. Parser převádí čistě číselné hodnoty na
 * `number` (`1021193`), ostatní nechává jako text (`'PS 02-01-71'`) — u
 * téhož atributu se typy mohou míchat, proto se porovnává textově.
 * Chybějící / prázdná hodnota → `ATTR_EMPTY`.
 */
export function attrValueKey(value: RecordAttributes[string] | undefined): string {
  if (value === undefined || value === null) return ATTR_EMPTY;
  return String(value).trim();
}

/** Aktivní filtr podle atributu (`null` = neaktivní). */
export function getAttributeFilter(): AttributeFilter | null {
  return attributeFilter;
}

/**
 * Nastaví filtr podle atributu: zobrazit jen záznamy, jejichž hodnota
 * atributu `name` (klíč `attrValueKey`) je v `values`. Notifikuje jen při změně.
 */
export function setAttributeFilter(name: string, values: Iterable<string>): void {
  const next = new Set(values);
  const prev = attributeFilter;
  if (prev && prev.name === name && prev.values.size === next.size && [...next].every((v) => prev.values.has(v))) return;
  attributeFilter = { name, values: next };
  notify();
}

/** Zruší filtr podle atributu. */
export function clearAttributeFilter(): void {
  if (!attributeFilter) return;
  attributeFilter = null;
  notify();
}

/** Prochází záznam (jeho atributy) filtrem podle atributu? Bez filtru vždy. */
export function isAttributeVisible(attrs: RecordAttributes | null | undefined): boolean {
  if (!attributeFilter) return true;
  return attributeFilter.values.has(attrValueKey(attrs?.[attributeFilter.name]));
}

/**
 * Prochází záznam všemi dimenzemi filtru vázanými na záznam (úroveň,
 * projekt, atribut)? 2D style fn i 3D visibility používají per-feature
 * uložené klíče (`jvfLevel`, `jvfProjectId`, `jvfAttrs`), tabulka Přehledu
 * prvků volá tuto funkci. Obsahová část je vlastnost typu — viz
 * `isContentPartVisible`.
 */
export function matchesFeatureFilter(zaznam: ZaznamObjektu): boolean {
  return (
    isLevelVisible(resolveLevelKey(zaznam)) &&
    isProjectVisible(resolveProjectKey(zaznam)) &&
    isAttributeVisible(zaznam.attributes)
  );
}

/** Je filtr aktivní (aspoň jedna hodnota skrytá)? */
export function isFeatureFilterActive(): boolean {
  return hiddenLevels.size > 0 || hiddenProjects.size > 0 || contentParts.size > 0 || attributeFilter !== null;
}

/**
 * Kopie dat jen se záznamy, které projdou filtrem Přehledu prvků (včetně
 * obsahové části); typy bez záznamů vynechá. Pro export „jen podle filtru“.
 */
export function filterDtmForExport<T extends { objekty: ObjektovyTyp[] }>(dtm: T): T {
  const objekty: ObjektovyTyp[] = [];
  for (const ot of dtm.objekty) {
    if (!isContentPartVisible(String(ot.obsahovaCast))) continue;
    const zaznamy = ot.zaznamy.filter(matchesFeatureFilter);
    if (zaznamy.length > 0) objekty.push({ ...ot, zaznamy });
  }
  return { ...dtm, objekty };
}

/** Počet záznamů, které projdou filtrem (včetně obsahové části). */
export function countFilteredRecords(objekty: readonly ObjektovyTyp[]): number {
  let n = 0;
  for (const ot of objekty) {
    if (!isContentPartVisible(String(ot.obsahovaCast))) continue;
    for (const z of ot.zaznamy) if (matchesFeatureFilter(z)) n++;
  }
  return n;
}

/**
 * Reset filtru do neaktivního stavu (vše viditelné). Volat při každé změně
 * načtených dat (přidání / odebrání projektu) — filtr z předchozích dat
 * nemá nová data ovlivňovat.
 */
export function resetFeatureFilter(): void {
  if (!isFeatureFilterActive()) return;
  hiddenLevels.clear();
  hiddenProjects.clear();
  contentParts.clear();
  attributeFilter = null;
  notify();
}

export function subscribeFeatureFilter(
  listener: FeatureFilterListener,
): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

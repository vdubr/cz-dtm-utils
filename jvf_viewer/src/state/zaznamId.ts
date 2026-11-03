import type { ZaznamObjektu } from 'jvf-parser';
import { getProjectPrefix } from './projects.js';

/**
 * Identifikace záznamu napříč viewerem (2D vrstvy, 3D scéna, Přehled prvků).
 * Přes tento klíč se páruje klik do mapy s řádkem v Přehledu prvků, proto
 * musí být **vždy neprázdný a v rámci objektového typu jedinečný**.
 *
 * - Záznam s jedinečným DTM ID (`commonAttributes.id`) → klíč = DTM ID
 *   (čitelné, shodné s `TopologyError.objectId` pro panel chyb).
 * - Záznam **bez ID** (nový prvek `ZapisObjektu='i'`, element chybí nebo je
 *   prázdný `<ID/>`) nebo s DTM ID, které se v typu opakuje (chybný soubor)
 *   → **interní UUID** přidělené viewerem. Žije jen v paměti aplikace
 *   (WeakMap nad objektem záznamu), nezapisuje se do dat, exportu ani
 *   validace a uživateli se nezobrazuje (řádek ukazuje „bez ID“).
 *
 * Klíč je stabilní po dobu života načteného souboru — všechny části vieweru
 * pracují se stejnými objekty `ZaznamObjektu`, takže UUID je všude stejné
 * bez ohledu na pořadí iterace nebo filtry.
 *
 * **Více projektů**: při ≥2 načtených souborech se klíč kvalifikuje
 * prefixem `{projectId}:` (viz `state/projects.ts`) — stejné DTM ID ve dvou
 * projektech tak nekoliduje. Při jednom projektu je prefix prázdný.
 */

/** DTM ID záznamu, nebo `null`, když chybí (i prázdné `<ID/>`). */
export function dtmIdOf(zaznam: ZaznamObjektu): string | null {
  const id = zaznam.commonAttributes?.id?.trim();
  return id ? id : null;
}

/** Interní UUID záznamů bez použitelného DTM ID. */
const internalIds = new WeakMap<ZaznamObjektu, string>();
let fallbackCounter = 0;

function newUuid(): string {
  // `crypto.randomUUID` vyžaduje secure context (https / localhost).
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  fallbackCounter += 1;
  return `local-${Date.now().toString(36)}-${fallbackCounter.toString(36)}`;
}

/** Interní UUID záznamu (přidělí se při prvním dotazu). */
export function internalIdOf(zaznam: ZaznamObjektu): string {
  let id = internalIds.get(zaznam);
  if (!id) {
    id = `uuid:${newUuid()}`;
    internalIds.set(zaznam, id);
  }
  return id;
}

/** DTM ID, která se v poli záznamů vyskytují víckrát (cache per pole). */
const duplicateIdsCache = new WeakMap<readonly ZaznamObjektu[], ReadonlySet<string>>();

function duplicateIdsOf(zaznamy: readonly ZaznamObjektu[]): ReadonlySet<string> {
  let dup = duplicateIdsCache.get(zaznamy);
  if (!dup) {
    const seen = new Set<string>();
    const found = new Set<string>();
    for (const z of zaznamy) {
      const id = dtmIdOf(z);
      if (id === null) continue;
      if (seen.has(id)) found.add(id);
      else seen.add(id);
    }
    dup = found;
    duplicateIdsCache.set(zaznamy, dup);
  }
  return dup;
}

/**
 * Vrátí klíč záznamu: DTM ID, pokud existuje a je v typu jedinečné; jinak
 * interní UUID. Při více projektech s prefixem `{projectId}:`.
 *
 * @param zaznamy pole `ObjektovyTyp.zaznamy`, ze kterého záznam pochází
 *   (pro odhalení duplicitních DTM ID).
 */
export function resolveZaznamId(zaznam: ZaznamObjektu, zaznamy: readonly ZaznamObjektu[]): string {
  const id = dtmIdOf(zaznam);
  const base = id !== null && !duplicateIdsOf(zaznamy).has(id) ? id : internalIdOf(zaznam);
  return getProjectPrefix(zaznam) + base;
}

/** Je klíč interní (záznam bez jedinečného DTM ID)? */
export function isInternalZaznamId(id: string): boolean {
  return id.includes('uuid:');
}

/**
 * Aktivní verze JVF DTM v aplikaci.
 *
 * Podporované verze: JVF DTM (`JVF_VERSIONS`) a dialekty UDM / ŽXML (registr
 * `DIALECTS`).
 * Aktivní verze je **interní stav** (v UI se přímo nezobrazuje — verze
 * konkrétního souboru se ukazuje u projektu v panelu „Projekty") a řídí:
 *   1. Překlad číselníkových/boolean atributů v panelu prvku
 *      (`labelForAttribute`) a katalog entit v legendě.
 *   2. Při načtení souboru jiné **podporované** verze se aktivní verze
 *      automaticky přepne na verzi souboru (viz `fileUpload`).
 *      Nepodporovaná verze se odmítne blokujícím modalem.
 *
 * Stav je in-memory (žádný localStorage). Výchozí (prázdný stav i po reloadu)
 * je **nejnovější** podporovaná verze — ne globální `DEFAULT_VERSION`
 * (ta zůstává `1.4.3` jako fallback routeru parseru).
 */

import { LATEST_JVF_VERSION, type JvfVersion } from 'jvf-parser';

/** Nejnovější podporovaná verze JVF DTM (režim JVF; dialekty nastavuje main.ts). */
const NEWEST_VERSION: JvfVersion = LATEST_JVF_VERSION;

let activeVersion: JvfVersion = NEWEST_VERSION;

type Listener = (v: JvfVersion) => void;
const listeners: Set<Listener> = new Set();

export function getActiveVersion(): JvfVersion {
  return activeVersion;
}

export function setActiveVersion(v: JvfVersion): void {
  if (v === activeVersion) return;
  activeVersion = v;
  for (const fn of listeners) fn(v);
}

export function onActiveVersionChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

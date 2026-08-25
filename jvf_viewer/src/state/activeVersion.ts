/**
 * Aktivní verze JVF DTM v aplikaci.
 *
 * Podporované verze jsou `1.4.3` a `1.5.0.1` (viz `SUPPORTED_VERSIONS`).
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

import { SUPPORTED_VERSIONS, type JvfVersion } from 'jvf-parser';

/** Nejnovější podporovaná verze = poslední prvek `SUPPORTED_VERSIONS`. */
const NEWEST_VERSION = SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1] as JvfVersion;

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

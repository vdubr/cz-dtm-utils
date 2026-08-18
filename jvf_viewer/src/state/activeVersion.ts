/**
 * Aktivní verze JVF DTM v aplikaci.
 *
 * Podporované verze jsou `1.4.3` a `1.5.0.1` (viz `SUPPORTED_VERSIONS`).
 * Aktivní verze řídí:
 *   1. UI indikátor (version selector v hlavičce).
 *   2. Výchozí režim; při načtení souboru jiné **podporované** verze se
 *      aktivní verze automaticky přepne na verzi souboru (viz `fileUpload`).
 *      Nepodporovaná verze se odmítne blokujícím modalem.
 *
 * Stav je in-memory (žádný localStorage). Při reloadu se vrací k
 * `DEFAULT_VERSION`.
 */

import { DEFAULT_VERSION, type JvfVersion } from 'jvf-parser';

let activeVersion: JvfVersion = DEFAULT_VERSION;

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

/**
 * Aktivní verze JVF DTM v aplikaci.
 *
 * Aktuálně podporujeme jedinou verzi (1.4.3), ale UI je připravené na
 * víceverzní budoucnost. Aktivní verze řídí:
 *   1. Které soubory aplikace přijme (parser je tolerantní, ale UI
 *      odmítne soubor s `verze ≠ activeVersion`).
 *   2. UI label v hlavičce.
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

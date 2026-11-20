/**
 * Uložení klíče a stažených dat v `localStorage` prohlížeče. Úložiště může
 * chybět (anonymní okno, zakázaná data webu) — pak vše běží jen v paměti.
 */
import type { StoredData } from './sync.js';

const KEY = 'cz-dtm-analytics:key';
const DATA = 'cz-dtm-analytics:data:v2';
/** Starší formát (jen přístupy s daty) — při načtení se smaže, data se stáhnou znovu. */
const DATA_V1 = 'cz-dtm-analytics:data:v1';

export function loadKey(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function saveKey(key: string): void {
  try {
    localStorage.setItem(KEY, key);
  } catch {
    // bez úložiště se klíč zadává při každé návštěvě
  }
}

export function loadData(): StoredData | null {
  try {
    localStorage.removeItem(DATA_V1);
    const raw = localStorage.getItem(DATA);
    if (!raw) return null;
    const data = JSON.parse(raw) as StoredData;
    return data && data.version === 2 && data.visits ? data : null;
  } catch {
    return null;
  }
}

/** Uloží data; `false` = nepodařilo se (kvóta, zakázané úložiště). */
export function saveData(data: StoredData): boolean {
  try {
    localStorage.setItem(DATA, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

/** Odhlášení — smaže klíč i data. */
export function clearAll(): void {
  try {
    localStorage.removeItem(KEY);
    localStorage.removeItem(DATA);
    localStorage.removeItem(DATA_V1);
  } catch {
    // nic k mazání
  }
}

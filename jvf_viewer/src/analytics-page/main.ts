/**
 * /analytics — interní přehled používání JVF vieweru z dat PostHogu.
 *
 * Na úvod jen brána s polem pro osobní API klíč PostHogu. Platný klíč se uloží
 * do `localStorage` spolu se staženými daty; při další návštěvě se brána přeskočí,
 * uložená data se hned vykreslí a dotáhnou se jen novinky (`sync.ts`).
 * Stránka nemá měření (neimportuje `src/analytics.ts`).
 */
import './style.css';
import { renderApp } from './app.js';
import { POSTHOG_APP, PROJECT_ID, PostHogAuthError, hogql } from './posthog.js';
import { clearAll, loadData, loadKey, saveData, saveKey } from './store.js';
import { syncData, type StoredData } from './sync.js';

const $ = <T extends HTMLElement = HTMLElement>(id: string): T => document.getElementById(id) as T;

let key: string | null = null;
let data: StoredData | null = null;
let busy = false;

function showGate(message = ''): void {
  $('app').hidden = true;
  $('gate').hidden = false;
  const err = $('gate-error');
  err.textContent = message;
  err.hidden = !message;
  $<HTMLInputElement>('gate-key').focus();
}

function showApp(): void {
  $('gate').hidden = true;
  $('app').hidden = false;
}

function setStatus(text: string, isError = false): void {
  const el = $('status');
  el.textContent = text;
  el.classList.toggle('err-text', isError);
}

function renderSub(): void {
  $('sub').textContent =
    'Události z PostHogu (JVF viewer, produkce) po jednotlivých přístupech. Jeden přístup je jedno načtení stránky, ' +
    'tedy jeden anonymní návštěvník. Filtrem u grafu lze zobrazit jen přístupy, ve kterých uživatel načetl ukázku nebo vlastní data. ' +
    `Časy jsou v českém čase.${data?.lastEvent ? ` Data aktuální k ${data.lastEvent}.` : ''}`;
}

/** Stáhne novinky (bez dat vše) a překreslí přehled. */
async function refresh(): Promise<void> {
  if (busy || !key) return;
  busy = true;
  const btn = $<HTMLButtonElement>('btn-refresh');
  btn.disabled = true;
  try {
    const res = await syncData(key, data, (msg) => setStatus(msg));
    data = res.data;
    const saved = saveData(data);
    renderSub();
    renderApp(data);
    const n = (k: number, one: string, few: string, many: string): string => `${k} ${k === 1 ? one : k < 5 ? few : many}`;
    const what = res.added
      ? n(res.added, 'nová událost', 'nové události', 'nových událostí') +
        (res.newVisits ? `, ${n(res.newVisits, 'nový přístup', 'nové přístupy', 'nových přístupů')}` : '')
      : 'žádné novinky';
    setStatus(`Staženo ${new Date().toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' })}: ${what}.` +
      (saved ? '' : ' Data se nepodařilo uložit do prohlížeče, příště se stáhnou znovu.'), !saved);
  } catch (err) {
    console.error(err);
    if (err instanceof PostHogAuthError) {
      // zrušený klíč: data nechat, nový klíč pak stáhne jen novinky
      key = null;
      try {
        localStorage.removeItem('cz-dtm-analytics:key');
      } catch {
        // nic
      }
      showGate(err.message);
    } else {
      setStatus(err instanceof Error ? err.message : String(err), true);
    }
  } finally {
    busy = false;
    btn.disabled = false;
  }
}

async function onGateSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();
  const input = $<HTMLInputElement>('gate-key');
  const submit = $<HTMLButtonElement>('gate-submit');
  const candidate = input.value.trim();
  if (!candidate) return;
  submit.disabled = true;
  $('gate-error').hidden = true;
  submit.textContent = 'Ověřuji…';
  try {
    await hogql(candidate, 'SELECT 1');
    key = candidate;
    saveKey(candidate);
    input.value = '';
    showApp();
    renderSub();
    if (data) renderApp(data);
    await refresh();
  } catch (err) {
    showGate(err instanceof Error ? err.message : String(err));
  } finally {
    submit.disabled = false;
    submit.textContent = 'Načíst';
  }
}

function logout(): void {
  clearAll();
  key = null;
  data = null;
  location.hash = '';
  location.reload();
}

function main(): void {
  const link = $<HTMLAnchorElement>('gate-link');
  link.href = `${POSTHOG_APP}/project/${PROJECT_ID}/settings/user-api-keys`;
  $<HTMLFormElement>('gate-form').addEventListener('submit', (e) => void onGateSubmit(e));
  $('btn-refresh').addEventListener('click', () => void refresh());
  $('btn-logout').addEventListener('click', logout);

  key = loadKey();
  data = loadData();
  if (!key) {
    showGate();
    return;
  }
  showApp();
  renderSub();
  if (data) renderApp(data);
  void refresh();
}

main();

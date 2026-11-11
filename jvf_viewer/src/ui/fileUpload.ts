import {
  parseJvfDtm,
  isSupportedVersion,
  isErrorProtocolXml,
  parseErrorProtocol,
  allSupportedVersions,
  formatVersionLabel,
} from 'jvf-parser';
import type { JvfDtm, ErrorProtocol } from 'jvf-parser';
import { getActiveVersion, setActiveVersion } from '../state/activeVersion.js';
import { showConfirm } from './confirmModal.js';
import { ensureAppModeForFile } from './appModeSwitch.js';
import { getAppMode } from '../state/appMode.js';
import { clearProjects, getProjects } from '../state/projects.js';
import { sizeBucket, track } from '../analytics.js';

/**
 * Validace verze souboru (1.5.0.1+ chování):
 *   - shoda s aktivní verzí → načíst,
 *   - jiná **podporovaná** verze → **auto-přepnout** aktivní verzi na verzi
 *     souboru a načíst (`setActiveVersion`),
 *   - nedeklarovaná verze → tolerovat (router parseru ji vyřešil strukturně),
 *   - **nepodporovaná** verze → blokující modal a `false` (soubor se nenačte).
 *
 * `data.verze` je id vyřešené routerem (neznámou verzi JVF odhadne podle
 * struktury) — o odmítnutí čistého JVF proto rozhoduje surová hlavička
 * `verzeJvfDtm`. U dialektů (UDM, ŽXML) router neznámou verzi mapuje na
 * nejnovější verzi dialektu a soubor se načte.
 */
async function validateFileVersion(data: JvfDtm, sourceLabel: string): Promise<boolean> {
  const declared = data.verzeJvfDtm?.trim() ?? '';
  const fileVersion =
    !data.dialect && declared !== '' && !isSupportedVersion(declared) ? declared : data.verze.trim();
  const activeVersion = getActiveVersion();

  if (fileVersion === activeVersion) return true;

  // Podporovaná verze odlišná od aktivní → přepnout aplikaci na verzi souboru.
  if (fileVersion !== '' && isSupportedVersion(fileVersion)) {
    setActiveVersion(fileVersion);
    return true;
  }

  // Nedeklarovaná verze — parser router si poradil (strukturní sniff), načteme.
  if (fileVersion === '') return true;

  // Nepodporovaná verze → blokující modal.
  await showConfirm({
    title: 'Nepodporovaná verze datového modelu',
    bodyHtml: `
      <p>
        Soubor <strong>${escapeHtml(sourceLabel)}</strong> deklaruje verzi
        <strong>${escapeHtml(formatVersionLabel(fileVersion))}</strong>, kterou
        aplikace zatím nepodporuje.
      </p>
      <p>
        Podporované verze: <strong>${allSupportedVersions()
          .map(formatVersionLabel)
          .join(', ')}</strong>.
      </p>
    `,
    buttons: [{ label: 'Rozumím', variant: 'primary' }],
  });

  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Přidat soubor k načteným projektům, nebo jimi nahradit všechny načtené. */
export type AddMode = 'add' | 'replace';

/**
 * Před načtením souboru / ukázky: soubor se stejným názvem už je načtený →
 * upozornit a nenačíst (`null`); jsou-li načtené jiné projekty a režim není
 * daný (`preset`), zeptat se „Přidat / Nahradit" (zavření = `null`).
 */
async function chooseAddMode(name: string, preset: AddMode | undefined): Promise<AddMode | null> {
  const projects = getProjects();
  if (projects.some((p) => p.nazev === name)) {
    await showConfirm({
      title: 'Soubor už je načtený',
      bodyHtml: `<p>Soubor <strong>${escapeHtml(name)}</strong> je v aplikaci už načtený — znovu se nepřidá.</p>`,
      buttons: [{ label: 'Rozumím', variant: 'primary' }],
    });
    return null;
  }
  if (preset || projects.length === 0) return preset ?? 'add';
  const loaded = projects.length === 1
    ? `je načtený projekt <strong>${escapeHtml(projects[0]!.nazev)}</strong>`
    : `je načteno ${projects.length} projektů`;
  const choice = await showConfirm({
    title: 'Přidat, nebo nahradit?',
    bodyHtml: `<p>V aplikaci ${loaded}. Přidat soubor <strong>${escapeHtml(name)}</strong> jako další projekt, nebo jím načtená data nahradit?</p>`,
    buttons: [{ label: 'Nahradit' }, { label: 'Přidat', variant: 'primary' }],
  });
  return choice === 'Přidat' ? 'add' : choice === 'Nahradit' ? 'replace' : null;
}

/** Callback po úspěšném parsování — dostává i název souboru (nový projekt). */
export type JvfLoadCallback = (data: JvfDtm, fileName: string) => void;

/** Callback pro protokol chyb (ServisJVFDTM) — zobrazí se jako report, ne data. */
export type JvfErrorProtocolCallback = (proto: ErrorProtocol, fileName: string) => void;

/**
 * Zpracuje načtené XML — jediný postup pro lokální soubor i ukázku:
 * protokol chyb → report; jinak přidat / nahradit, parser, režim aplikace,
 * verze a teprve pak (u „Nahradit") smazání načtených dat. Vrací použitý
 * režim, nebo `null` (data se nenačetla). Výjimky parseru propouští volajícímu.
 */
async function ingestXml(
  xml: string,
  name: string,
  mode: AddMode | undefined,
  onLoad: JvfLoadCallback,
  onErrorProtocol?: JvfErrorProtocolCallback,
): Promise<{ mode: AddMode; data: JvfDtm } | null> {
  // Protokol chyb (ServisJVFDTM) není mapová data — zobraz jako report.
  if (onErrorProtocol && isErrorProtocolXml(xml)) {
    onErrorProtocol(parseErrorProtocol(xml), name);
    return null;
  }
  const chosen = await chooseAddMode(name, mode);
  if (!chosen) return null;
  const data = parseJvfDtm(xml);
  // Soubor jiného režimu (UDM v JVF a naopak) → nabídnout přepnutí.
  if (!(await ensureAppModeForFile(data, name))) return null;
  if (!(await validateFileVersion(data, name))) return null;
  // Nahradit až po úspěšném načtení — chybný soubor data nesmaže.
  if (chosen === 'replace') clearProjects();
  onLoad(data, name);
  return { mode: chosen, data };
}

/**
 * Načte lokální soubor (z file inputu nebo drag & drop) a zpracuje ho
 * parserem — jediný sdílený kód-path pro oba způsoby načtení. Vrací
 * Promise, aby šlo více souborů (multi-výběr / multi-drop) zpracovat
 * sekvenčně bez závodění o loading overlay. `mode` = přidat / nahradit bez
 * dotazu (další soubory dávky); výsledek je použitý režim, nebo `null`
 * (soubor se nenačetl).
 */
export function loadJvfFile(
  file: File,
  onLoad: JvfLoadCallback,
  onErrorProtocol?: JvfErrorProtocolCallback,
  mode?: AddMode,
): Promise<AddMode | null> {
  const loadingOverlay = document.getElementById('loading-overlay') as HTMLDivElement;
  loadingOverlay.style.display = 'flex';

  return new Promise<AddMode | null>((resolve) => {
    let used: AddMode | null = null;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const res = await ingestXml(e.target?.result as string, file.name, mode, onLoad, onErrorProtocol);
        if (!res) return;
        used = res.mode;
        // Bez názvu souboru — jen režim, verze a hrubá velikost.
        track('file_load', { mode: getAppMode(), version: res.data.verze, size: sizeBucket(file.size) });
      } catch (err) {
        console.error('Failed to parse JVF file:', err);
        alert(`Soubor „${file.name}“ se nepodařilo načíst. Zkontrolujte, že jde o platný JVF DTM soubor.`);
      } finally {
        loadingOverlay.style.display = 'none';
        resolve(used);
      }
    };

    reader.onerror = () => {
      loadingOverlay.style.display = 'none';
      alert('Chyba při čtení souboru.');
      resolve(null);
    };

    reader.readAsText(file, 'UTF-8');
  });
}

/**
 * Načte více souborů jako samostatné projekty (multi-výběr, multi-drop):
 * dotaz přidat / nahradit jen u prvního načteného, další se přidají.
 * Sekvenčně — loading overlay a případné modaly se nesmí překrývat.
 */
export async function loadJvfFiles(
  files: readonly File[],
  onLoad: JvfLoadCallback,
  onErrorProtocol?: JvfErrorProtocolCallback,
): Promise<void> {
  let mode: AddMode | undefined;
  for (const file of files) {
    if (await loadJvfFile(file, onLoad, onErrorProtocol, mode)) mode = 'add';
  }
}

export function setupFileUpload(
  onLoad: JvfLoadCallback,
  onErrorProtocol?: JvfErrorProtocolCallback
): void {
  const btnUpload = document.getElementById('btn-upload') as HTMLButtonElement;
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const loadingOverlay = document.getElementById('loading-overlay') as HTMLDivElement;
  const btnMenu = document.getElementById('btn-upload-menu') as HTMLButtonElement | null;
  const menu = document.getElementById('upload-menu') as HTMLDivElement | null;

  btnUpload.addEventListener('click', () => {
    fileInput.click();
  });
  // Další spouštěče nahrání — ikona ve vodotisku prázdného panelu vrstev
  // (překresluje se, proto delegovaně).
  document.addEventListener('click', (e) => {
    if ((e.target as Element | null)?.closest('[data-upload-trigger]')) fileInput.click();
  });

  fileInput.addEventListener('change', async () => {
    const files = Array.from(fileInput.files ?? []);
    // Reset hned, aby šel stejný soubor vybrat znovu
    fileInput.value = '';
    await loadJvfFiles(files, onLoad, onErrorProtocol);
  });

  // Dropdown s ukázkovými soubory (fixtures) — fetchne XML ze statického
  // `public/fixtures/` a předá ho parseru stejnou cestou jako file upload.
  if (btnMenu && menu) {
    const closeMenu = (): void => {
      menu.setAttribute('hidden', '');
      btnMenu.setAttribute('aria-expanded', 'false');
    };
    const openMenu = (): void => {
      menu.removeAttribute('hidden');
      btnMenu.setAttribute('aria-expanded', 'true');
    };

    btnMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.hasAttribute('hidden')) openMenu();
      else closeMenu();
    });

    // Zavřít při kliknutí mimo
    document.addEventListener('click', (e) => {
      if (menu.hasAttribute('hidden')) return;
      const target = e.target as Node | null;
      if (target && !menu.contains(target) && target !== btnMenu) {
        closeMenu();
      }
    });

    // Escape také zavře
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hasAttribute('hidden')) {
        closeMenu();
      }
    });

    const items = menu.querySelectorAll<HTMLButtonElement>('.upload-menu-item');
    items.forEach((item) => {
      item.addEventListener('click', async () => {
        const sample = item.dataset['sample'];
        if (!sample) return;
        closeMenu();
        await loadSample(sample, onLoad, loadingOverlay, onErrorProtocol);
      });
    });
  }
}

/**
 * Načte ukázkový JVF XML ze `public/fixtures/<name>` a zpracuje ho parserem.
 * Stejný kód-path jako `FileReader.onload` u lokálního file upload.
 */
async function loadSample(
  name: string,
  onLoad: JvfLoadCallback,
  loadingOverlay: HTMLDivElement,
  onErrorProtocol?: JvfErrorProtocolCallback
): Promise<void> {
  loadingOverlay.style.display = 'flex';
  try {
    // Absolutně od `BASE_URL` — stránka může být na /udm, /jzm.
    const resp = await fetch(`${import.meta.env.BASE_URL}fixtures/${name}`);
    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status} — soubor nenalezen`);
    }
    if (await ingestXml(await resp.text(), name, undefined, onLoad, onErrorProtocol)) {
      track('sample_load', { sample: name, mode: getAppMode() });
    }
  } catch (err) {
    console.error('Failed to load sample:', err);
    alert(`Ukázkový soubor „${name}“ se nepodařilo načíst.`);
  } finally {
    loadingOverlay.style.display = 'none';
  }
}

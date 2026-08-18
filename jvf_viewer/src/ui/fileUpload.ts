import { parseJvfDtm, isSupportedVersion } from 'jvf-parser';
import type { JvfDtm } from 'jvf-parser';
import { getActiveVersion, setActiveVersion } from '../state/activeVersion.js';
import { showConfirm } from './confirmModal.js';

/**
 * Validace verze souboru (1.5.0.1+ chování):
 *   - shoda s aktivní verzí → načíst,
 *   - jiná **podporovaná** verze → **auto-přepnout** aktivní verzi na verzi
 *     souboru a načíst (`setActiveVersion`),
 *   - nedeklarovaná verze → tolerovat (router parseru ji vyřešil strukturně),
 *   - **nepodporovaná** verze → blokující modal a `false` (soubor se nenačte).
 */
async function validateFileVersion(data: JvfDtm, sourceLabel: string): Promise<boolean> {
  const fileVersion = data.verze.trim();
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
    title: 'Nepodporovaná verze JVF DTM',
    bodyHtml: `
      <p>
        Soubor <strong>${escapeHtml(sourceLabel)}</strong> deklaruje verzi
        JVF DTM <strong>${escapeHtml(fileVersion)}</strong>, kterou aplikace
        zatím nepodporuje.
      </p>
      <p>
        Podporované verze: <strong>1.4.3</strong> a <strong>1.5.0.1</strong>.
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

/** Callback po úspěšném parsování — dostává i název souboru (nový projekt). */
export type JvfLoadCallback = (data: JvfDtm, fileName: string) => void;

/**
 * Načte lokální soubor (z file inputu nebo drag & drop) a zpracuje ho
 * parserem — jediný sdílený kód-path pro oba způsoby načtení. Vrací
 * Promise, aby šlo více souborů (multi-výběr / multi-drop) zpracovat
 * sekvenčně bez závodění o loading overlay.
 */
export function loadJvfFile(file: File, onLoad: JvfLoadCallback): Promise<void> {
  const loadingOverlay = document.getElementById('loading-overlay') as HTMLDivElement;
  loadingOverlay.style.display = 'flex';

  return new Promise<void>((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const xml = e.target?.result as string;
        const data = parseJvfDtm(xml);
        const ok = await validateFileVersion(data, file.name);
        if (!ok) return;
        onLoad(data, file.name);
      } catch (err) {
        console.error('Failed to parse JVF file:', err);
        alert(`Soubor „${file.name}“ se nepodařilo načíst. Zkontrolujte, že jde o platný JVF DTM soubor.`);
      } finally {
        loadingOverlay.style.display = 'none';
        resolve();
      }
    };

    reader.onerror = () => {
      loadingOverlay.style.display = 'none';
      alert('Chyba při čtení souboru.');
      resolve();
    };

    reader.readAsText(file, 'UTF-8');
  });
}

export function setupFileUpload(
  onLoad: JvfLoadCallback
): void {
  const btnUpload = document.getElementById('btn-upload') as HTMLButtonElement;
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const loadingOverlay = document.getElementById('loading-overlay') as HTMLDivElement;
  const btnMenu = document.getElementById('btn-upload-menu') as HTMLButtonElement | null;
  const menu = document.getElementById('upload-menu') as HTMLDivElement | null;

  btnUpload.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', async () => {
    // Multi-výběr: každý soubor se přidá jako samostatný projekt.
    // Sekvenčně — loading overlay a případné modaly se nesmí překrývat.
    const files = Array.from(fileInput.files ?? []);
    // Reset hned, aby šel stejný soubor vybrat znovu
    fileInput.value = '';
    for (const file of files) {
      await loadJvfFile(file, onLoad);
    }
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
        await loadSample(sample, onLoad, loadingOverlay);
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
  loadingOverlay: HTMLDivElement
): Promise<void> {
  loadingOverlay.style.display = 'flex';
  try {
    // `base` v Vite je '/jvf_viewer/', takže `./fixtures/...` je vůči HTML stránce
    const resp = await fetch(`./fixtures/${name}`);
    if (!resp.ok) {
      throw new Error(`HTTP ${resp.status} — soubor nenalezen`);
    }
    const xml = await resp.text();
    const data = parseJvfDtm(xml);
    const ok = await validateFileVersion(data, name);
    if (!ok) return;
    onLoad(data, name);
  } catch (err) {
    console.error('Failed to load sample:', err);
    alert(`Ukázkový soubor „${name}“ se nepodařilo načíst.`);
  } finally {
    loadingOverlay.style.display = 'none';
  }
}

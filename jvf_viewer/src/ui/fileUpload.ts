import { parseJvfDtm } from 'jvf-parser';
import type { JvfDtm } from 'jvf-parser';
import { getActiveVersion } from '../state/activeVersion.js';
import { showConfirm } from './confirmModal.js';

/**
 * Validace verze: pokud parsovaný soubor má `verze ≠ aktivní`, ukáže
 * blokující modal a vrátí `false`. Soubor se v tom případě nenačte.
 */
async function validateFileVersion(data: JvfDtm, sourceLabel: string): Promise<boolean> {
  const fileVersion = data.verze.trim();
  const activeVersion = getActiveVersion();

  if (fileVersion === activeVersion) return true;

  const fileVersionDisplay = fileVersion === '' ? '(nezadána)' : fileVersion;
  await showConfirm({
    title: 'Nesoulad verze JVF DTM',
    bodyHtml: `
      <p>
        Soubor <strong>${escapeHtml(sourceLabel)}</strong> deklaruje verzi
        JVF DTM <strong>${escapeHtml(fileVersionDisplay)}</strong>, ale
        aplikace je aktuálně v režimu verze <strong>${activeVersion}</strong>.
      </p>
      <p>
        Načítat lze pouze soubory odpovídající aktivní verzi. Přepněte
        aktivní verzi v hlavičce na <strong>${escapeHtml(fileVersionDisplay)}</strong>
        a načtěte soubor znovu.
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

export function setupFileUpload(
  onLoad: (data: JvfDtm) => void
): void {
  const btnUpload = document.getElementById('btn-upload') as HTMLButtonElement;
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const loadingOverlay = document.getElementById('loading-overlay') as HTMLDivElement;
  const btnMenu = document.getElementById('btn-upload-menu') as HTMLButtonElement | null;
  const menu = document.getElementById('upload-menu') as HTMLDivElement | null;

  btnUpload.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    loadingOverlay.style.display = 'flex';

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const xml = e.target?.result as string;
        const data = parseJvfDtm(xml);
        const ok = await validateFileVersion(data, file.name);
        if (!ok) return;
        onLoad(data);
      } catch (err) {
        console.error('Failed to parse JVF file:', err);
        alert(`Chyba při načtení souboru: ${String(err)}`);
      } finally {
        loadingOverlay.style.display = 'none';
        fileInput.value = '';
      }
    };

    reader.onerror = () => {
      loadingOverlay.style.display = 'none';
      alert('Chyba při čtení souboru.');
      fileInput.value = '';
    };

    reader.readAsText(file, 'UTF-8');
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
  onLoad: (data: JvfDtm) => void,
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
    onLoad(data);
  } catch (err) {
    console.error('Failed to load sample:', err);
    alert(`Chyba při načtení ukázky ${name}: ${String(err)}`);
  } finally {
    loadingOverlay.style.display = 'none';
  }
}

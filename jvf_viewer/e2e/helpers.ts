import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, type Page } from '@playwright/test';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** Absolutní cesta k ukázkovému JVF souboru v `public/fixtures/`. */
export function fixturePath(name: string): string {
  return path.join(dirname, '..', 'public', 'fixtures', name);
}

/**
 * Načte JVF soubor přes skrytý `#file-input` (stejná cesta, kterou používá
 * i tlačítko „Nahrát soubor") a počká, než dojede parsování a vykreslení.
 *
 * Signál dokončení: skryje se loading overlay, povolí se akční tlačítka
 * a v panelu vrstev zmizí prázdný stav a objeví se řádky vrstev.
 */
export async function loadSample(page: Page, name = 'ukazka_ZPS.xml'): Promise<void> {
  await page.setInputFiles('#file-input', fixturePath(name));

  await expect(page.locator('#loading-overlay')).toBeHidden();
  await expect(page.locator('#btn-validate')).toBeEnabled();
  await expect(page.locator('#jvf-layers-list .empty-hint')).toHaveCount(0);
  await expect(page.locator('#jvf-layers-list .layer-item').first()).toBeVisible();
}

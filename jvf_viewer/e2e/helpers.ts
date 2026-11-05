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

/** Otevře spouštěč nástrojů v hlavičce a klikne na dlaždici nástroje (dialog při načtených datech řeší test). */
export async function openTool(page: Page, mode: 'jvf' | 'udm' | 'jzm'): Promise<void> {
  await page.locator('#btn-app-launcher').click();
  await page.locator(`.app-launcher-tile[data-mode-btn="${mode}"]`).click();
}

/** Přepne nástroj spouštěčem v hlavičce (bez načtených dat — bez dialogu). */
export async function switchMode(page: Page, mode: 'jvf' | 'udm' | 'jzm'): Promise<void> {
  await openTool(page, mode);
  await expect(page.locator('html')).toHaveAttribute('data-app', mode);
}

/** Otevře kartu „Katastr" nad mapou (je-li zavřená) — přepínač a vrstvy katastru jsou v ní. */
export async function openKnCard(page: Page): Promise<void> {
  if (await page.locator('#kn-card').isHidden()) await page.locator('#btn-kn-menu').click();
}

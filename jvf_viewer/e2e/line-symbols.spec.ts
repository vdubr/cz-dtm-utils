import { test, expect } from '@playwright/test';
import { loadSample } from './helpers';

/**
 * Značky vložené do linií v 2D mapě (Katalog DTM ČR — blesk elektrického
 * vedení, zub plynovodu, třída silnice, puntík zábradlí): zkušební kresba
 * dev/line-symbols.html (skutečná cesta aplikace buildJvfLayers → OL mapa).
 * Počty = kreslení značek (Path2D) na buňku typ@rozlišení.
 */
test('značky v liniích: kreslí se v čitelném měřítku, při oddálení ne', async ({ page }, testInfo) => {
  await page.goto('/dev/line-symbols.html');
  const counts = await page.evaluate(() => (window as unknown as { __lineSymbols: Promise<Record<string, number>> }).__lineSymbols);

  // ≈ 1 : 500 — značky v mezerách čárkování i na nepřerušené čáře.
  for (const c of ['elektřina NN', 'plynovod VTL', 'kanalizace jednotná', 'silnice I. třídy', 'zábradlí']) {
    expect(counts[`${c}@0.14`] ?? 0, c).toBeGreaterThan(0);
  }
  // ≈ 1 : 3 600 a menší — značka by byla nečitelná, mezery zůstanou prázdné.
  for (const c of ['elektřina NN', 'silnice I. třídy', 'zábradlí']) {
    expect(counts[`${c}@1`] ?? 0, c).toBe(0);
  }

  // Snímek mřížky k ruční kontrole (příloha výsledku testu).
  await testInfo.attach('line-symbols.png', { body: await page.locator('#grid').screenshot(), contentType: 'image/png' });
});

test('značky v liniích ve 3D: trasa elektrické sítě má značky v mezerách', async ({ page }) => {
  await page.goto('/');
  await loadSample(page, 'ukazka_KI.xml');
  await page.locator('#btn-3d').click();
  await expect(page.locator('#three-canvas')).toBeVisible();
  // Trasa ~250 m, vzor 18 + 3,5 m → značka v každé mezeře (11).
  await expect.poll(() => page.evaluate(() =>
    (window as unknown as { __jvfDebug: { lineSymbols3d: () => number } }).__jvfDebug.lineSymbols3d())).toBeGreaterThan(5);
});

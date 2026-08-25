import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright konfigurace pro e2e (klikací) testy JVF DTM Prohlížeče.
 *
 * Testy si samy nastartují Vite dev server (`npm run dev`) na fixním portu
 * a jedou proti němu. Base `/jvf_viewer/` odpovídá `vite.config.ts`, takže
 * vstupní URL je `http://localhost:5173/jvf_viewer/`.
 *
 * Poznámka k síti: podkladové mapy (ČÚZK WMS) a 3D terén (DMR5G) vyžadují
 * externí síť přes dev proxy. Smoke testy níže na těchto externích zdrojích
 * ZÁMĚRNĚ nezávisí — ověřují jen chování aplikace (parsování souboru,
 * přepínání panelů, DOM stav), aby byly stabilní i v CI bez přístupu k ČÚZK.
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 1 : 0,
  workers: process.env['CI'] ? 1 : undefined,
  reporter: process.env['CI'] ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://localhost:5173/jvf_viewer/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run dev -- --port 5173 --strictPort',
    url: 'http://localhost:5173/jvf_viewer/',
    reuseExistingServer: !process.env['CI'],
    timeout: 120_000,
  },
});

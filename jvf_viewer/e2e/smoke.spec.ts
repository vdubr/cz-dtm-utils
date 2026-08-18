import { test, expect } from '@playwright/test';
import { loadSample, fixturePath } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto('./');
});

test.describe('Základní stav aplikace', () => {
  test('stránka se načte s hlavičkou a prázdným stavem', async ({ page }) => {
    await expect(page).toHaveTitle(/JVF DTM Prohlížeč/);
    await expect(page.locator('#app-header h1')).toHaveText('JVF DTM Prohlížeč');

    // Bez načtených dat jsou datové akce zakázané.
    await expect(page.locator('#btn-validate')).toBeDisabled();
    await expect(page.locator('#btn-features')).toBeDisabled();

    // Panel vrstev ukazuje výzvu k nahrání.
    await expect(page.locator('#jvf-layers-list .empty-hint')).toHaveText('Nahrajte JVF soubor');
  });

  test('nabídka ukázkových souborů se otevře a nabízí fixtures', async ({ page }) => {
    await expect(page.locator('#upload-menu')).toBeHidden();
    await page.locator('#btn-upload-menu').click();
    await expect(page.locator('#upload-menu')).toBeVisible();
    await expect(page.locator('.upload-menu-item[data-sample="ukazka_ZPS.xml"]')).toBeVisible();
    await expect(page.locator('.upload-menu-item')).toHaveCount(4);
  });
});

test.describe('Načtení JVF souboru', () => {
  test('načte ukázku ZPS a povolí akční tlačítka', async ({ page }) => {
    await loadSample(page, 'ukazka_ZPS.xml');

    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('#btn-features')).toBeEnabled();
    await expect(page.locator('#jvf-layers-list .layer-group').first()).toBeVisible();
  });

  test('načtení ukázky přes nabídku (fetch z fixtures) také funguje', async ({ page }) => {
    await page.locator('#btn-upload-menu').click();
    await page.locator('.upload-menu-item[data-sample="ukazka_DI.xml"]').click();

    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('#jvf-layers-list .layer-item').first()).toBeVisible();
  });

  test('soubor s nepodporovanou verzí (1.5.0) je odmítnut', async ({ page }) => {
    // Verze 1.5.0 není v SUPPORTED_VERSIONS (1.4.3, 1.5.0.1) → blokující modal
    // (#confirm-modal, ne nativní alert). Soubor se nenačte a tlačítka
    // zůstanou zakázaná.
    await page.setInputFiles('#file-input', fixturePath('test_verze_1.5.0.xml'));

    await expect(page.locator('#confirm-modal')).toBeVisible();
    await expect(page.locator('#confirm-modal-title')).toHaveText(/verze/i);
    await expect(page.locator('#confirm-modal-body')).toContainText('1.5.0');

    await page.locator('#confirm-modal-footer button').click();
    await expect(page.locator('#confirm-modal')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeDisabled();
  });

  test('soubor verze 1.5.0.1 se načte a aktivní verze se přepne', async ({ page }) => {
    // Podporovaná verze odlišná od výchozí (1.4.3) → auto-přepnutí bez modalu,
    // soubor se načte a version selector ukáže 1.5.0.1.
    await page.setInputFiles('#file-input', fixturePath('test_verze_1.5.0.1.xml'));

    await expect(page.locator('#confirm-modal')).toBeHidden();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('#jvf-layers-list .layer-item').first()).toBeVisible();
    await expect(page.locator('#version-select')).toHaveValue('1.5.0.1');
  });
});

test.describe('Sekce Projekty', () => {
  test('sekce se sbalí a rozbalí klikem na hlavičku', async ({ page }) => {
    await loadSample(page, 'ukazka_ZPS.xml');

    const section = page.locator('#projects-section');
    const header = page.locator('#projects-header');
    const list = page.locator('#projects-list');

    // Načtený projekt → sekce viditelná, seznam rozbalený, počet v hlavičce.
    await expect(section).toBeVisible();
    await expect(list).toBeVisible();
    await expect(page.locator('#projects-list .project-item')).toHaveCount(1);
    await expect(page.locator('#projects-header-count')).toHaveText('1');
    await expect(header).toHaveAttribute('aria-expanded', 'true');

    // Sbalení → seznam skrytý, počet v hlavičce zůstává vidět.
    await header.click();
    await expect(section).toHaveClass(/collapsed/);
    await expect(list).toBeHidden();
    await expect(header).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#projects-header-count')).toBeVisible();
    await expect(page.locator('#projects-header-count')).toHaveText('1');

    // Rozbalení zpět.
    await header.click();
    await expect(section).not.toHaveClass(/collapsed/);
    await expect(list).toBeVisible();
    await expect(header).toHaveAttribute('aria-expanded', 'true');
  });

  test('sekce Projekty neroztlačuje panel — vrstvy jdou hned pod ni', async ({ page }) => {
    await loadSample(page, 'ukazka_DI.xml');

    const projectsBox = await page.locator('#projects-section').boundingBox();
    const jvfBox = await page.locator('.panel-section-jvf').boundingBox();
    expect(projectsBox).not.toBeNull();
    expect(jvfBox).not.toBeNull();

    // Projekty se drží u obsahu (1 řádek + hlavička) — ne polovina panelu;
    // veškerý volný prostor si bere sekce JVF vrstev.
    expect(projectsBox!.height).toBeLessThan(120);
    expect(jvfBox!.height).toBeGreaterThan(projectsBox!.height * 2);

    // Vrstvy začínají těsně pod sekcí Projekty (žádná velká mezera).
    const gap = jvfBox!.y - (projectsBox!.y + projectsBox!.height);
    expect(gap).toBeLessThan(4);
  });
});

test.describe('Panely a validace', () => {
  test('tlačítko Zkontrolovat otevře panel topologické validace', async ({ page }) => {
    await loadSample(page);

    await expect(page.locator('#error-panel')).toBeHidden();
    await page.locator('#btn-validate').click();

    await expect(page.locator('#error-panel')).toBeVisible();
    await expect(page.locator('#btn-validate')).toHaveClass(/active/);
    await expect(page.locator('#error-summary')).not.toBeEmpty();

    // Přepnutí filtrů nálezů nemá spadnout.
    await page.locator('.filter-btn[data-filter="error"]').click();
    await expect(page.locator('.filter-btn[data-filter="error"]')).toHaveClass(/active/);
  });

  test('tlačítko Přehled prvků otevře panel s prvky', async ({ page }) => {
    await loadSample(page);

    await expect(page.locator('#features-panel')).toBeHidden();
    await page.locator('#btn-features').click();

    await expect(page.locator('#features-panel')).toBeVisible();
    await expect(page.locator('#btn-features')).toHaveClass(/active/);
    await expect(page.locator('#features-summary')).not.toBeEmpty();
  });
});

test.describe('Přepínání 2D / 3D', () => {
  test('3D tlačítko zobrazí Three.js plátno a zpět 2D mapu', async ({ page }) => {
    await loadSample(page);

    const canvas = page.locator('#three-canvas');
    const mapContainer = page.locator('#map-container');
    await expect(canvas).toBeHidden();

    await page.locator('#btn-3d').click();
    await expect(page.locator('#btn-3d')).toHaveClass(/active/);
    await expect(canvas).toBeVisible();
    await expect(mapContainer).toBeHidden();

    await page.locator('#btn-3d').click();
    await expect(page.locator('#btn-3d')).not.toHaveClass(/active/);
    await expect(canvas).toBeHidden();
    await expect(mapContainer).toBeVisible();
  });
});

test.describe('Modály a ovládání', () => {
  test('modal O aplikaci se otevře a zavře', async ({ page }) => {
    await expect(page.locator('#info-modal')).toBeHidden();
    await page.locator('#btn-info').click();
    await expect(page.locator('#info-modal')).toBeVisible();
    await expect(page.locator('#info-modal-body')).not.toBeEmpty();

    await page.locator('#info-modal-close').click();
    await expect(page.locator('#info-modal')).toBeHidden();
  });

  test('legenda DTM se otevře a filtruje se hledáním', async ({ page }) => {
    await page.locator('#btn-legend').click();
    await expect(page.locator('#legend-modal')).toBeVisible();
    await expect(page.locator('#legend-modal-body')).not.toBeEmpty();

    await page.locator('#legend-modal-search').fill('budova');
    // Hledání jen nesmí modal shodit a tělo zůstává vyplněné.
    await expect(page.locator('#legend-modal-body')).not.toBeEmpty();

    await page.locator('#legend-modal-close').click();
    await expect(page.locator('#legend-modal')).toBeHidden();
  });

  test('protokol chyb (ServisJVFDTM) se zobrazí jako report modal', async ({ page }) => {
    // Soubor s protokolem chyb není mapová data → otevře se modal s reportem
    // (sekce DTI/ZPS, seznam kontrol a chyb), ne mapová vrstva.
    await page.setInputFiles('#file-input', fixturePath('test_protokol_chyb.xml'));

    const modal = page.locator('#error-protocol-modal');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Protokol chyb');
    await expect(modal.locator('#error-protocol-modal-body')).toContainText('DTI');
    await expect(modal.locator('#error-protocol-modal-body')).toContainText('ZPS');
    // Konkrétní chyba z ukázky
    await expect(modal.locator('#error-protocol-modal-body')).toContainText('Volné konce linie');

    // Data se nenačetla jako mapová vrstva (žádný projekt).
    await expect(page.locator('#btn-validate')).toBeDisabled();
  });

  test('legenda po načtení 1.5.0.1 obsahuje sekci PSPI', async ({ page }) => {
    // Načtení 1.5.0.1 přepne aktivní verzi → legenda ukáže katalog 1.5.0.1
    // včetně sekce PSPI (plánované stavby infrastruktury).
    await page.setInputFiles('#file-input', fixturePath('test_verze_1.5.0.1.xml'));
    await expect(page.locator('#btn-validate')).toBeEnabled();

    await page.locator('#btn-legend').click();
    await expect(page.locator('#legend-modal')).toBeVisible();
    await expect(page.locator('.legend-cast-name', { hasText: 'PSPI' })).toBeVisible();

    await page.locator('#legend-modal-close').click();
  });

  test('přepínač světlého/tmavého režimu mění data-theme', async ({ page }) => {
    const btn = page.locator('#btn-theme');
    const before = await btn.getAttribute('data-theme');
    await btn.click();
    await expect.poll(async () => btn.getAttribute('data-theme')).not.toBe(before);
  });

  test('přepínání podkladových map přepíná aktivní tlačítko', async ({ page }) => {
    const zm = page.locator('.base-btn[data-layer="zm"]');
    const ortofoto = page.locator('.base-btn[data-layer="ortofoto"]');
    await expect(zm).toHaveClass(/active/);

    await ortofoto.click();
    await expect(ortofoto).toHaveClass(/active/);
    await expect(zm).not.toHaveClass(/active/);
  });
});

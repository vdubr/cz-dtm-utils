import { test, expect, type Page } from '@playwright/test';
import { loadSample, fixturePath, switchMode } from './helpers';

/**
 * Kolik prvků 2D mapy style funkce vrstev opravdu kreslí, seskupeno podle
 * vlastnosti prvku (`jvfPart`, `jvfLevel`, …). Odfiltrovaný prvek má styl
 * `undefined` → nepočítá se. Vyžaduje dev háček `window.__jvfDebug`.
 */
function drawnBy(page: Page, prop: string): Promise<Record<string, number>> {
  return page.evaluate((prop) => {
    const d = (window as unknown as { __jvfDebug: {
      olMap: import('ol/Map').default;
      getJvfLayers: () => Array<{ olLayer: import('ol/layer/Vector').default }>;
    } }).__jvfDebug;
    const res = d.olMap.getView().getResolution() ?? 1;
    const out: Record<string, number> = {};
    for (const { olLayer } of d.getJvfLayers()) {
      if (!olLayer.getVisible()) continue; // skrytá vrstva se nekreslí vůbec
      const fn = olLayer.getStyleFunction()!;
      for (const f of olLayer.getSource()!.getFeatures()) {
        const style = fn(f, res);
        if (Array.isArray(style) ? style.length > 0 : !!style) {
          const key = String(f.get(prop));
          out[key] = (out[key] ?? 0) + 1;
        }
      }
    }
    return out;
  }, prop);
}

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
    // Výchozí režim JVF: jen 4 ukázky JVF, ukázky UDM a ŽXML jsou skryté.
    await expect(page.locator('.upload-menu-item:visible')).toHaveCount(4);
    await expect(page.locator('.upload-menu-item[data-sample="udm_minimal.xml"]')).toBeHidden();
  });
});

test.describe('Režimy aplikace (JVF / UDM)', () => {
  test('výchozí režim je JVF; ?mode=udm otevře rovnou UDM', async ({ page }) => {
    await expect(page.locator('#app-mode-switch [data-mode-btn="jvf"]')).toHaveClass(/active/);
    await expect(page.locator('#app-mode-switch [data-mode-btn="udm"]')).not.toHaveClass(/active/);
    expect(new URL(page.url()).searchParams.get('mode')).toBeNull();

    await page.goto('./?mode=udm');
    await expect(page.locator('#app-mode-switch [data-mode-btn="udm"]')).toHaveClass(/active/);
    await page.locator('#btn-upload-menu').click();
    await expect(page.locator('.upload-menu-item:visible')).toHaveCount(3);
    await expect(page.locator('.upload-menu-item[data-sample="udm_minimal.xml"]')).toBeVisible();
  });

  test('přepnutí bez dat je okamžité a zapíše režim do URL', async ({ page }) => {
    await switchMode(page, 'udm');
    await expect(page.locator('#confirm-modal')).toBeHidden();
    expect(new URL(page.url()).searchParams.get('mode')).toBe('udm');
    await switchMode(page, 'jvf');
    expect(new URL(page.url()).searchParams.get('mode')).toBeNull();
  });

  test('soubor UDM v režimu JVF: Zrušit = nenačte se, Přepnout = načte se v UDM', async ({ page }) => {
    await page.setInputFiles('#file-input', fixturePath('udm_minimal.xml'));
    await expect(page.locator('#confirm-modal-title')).toHaveText(/režimu UDM/);
    await page.locator('#confirm-modal-footer button', { hasText: 'Zrušit' }).click();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeDisabled();
    await expect(page.locator('#app-mode-switch [data-mode-btn="jvf"]')).toHaveClass(/active/);

    await page.setInputFiles('#file-input', fixturePath('udm_minimal.xml'));
    await page.locator('#confirm-modal-footer button', { hasText: 'Přepnout do UDM' }).click();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#app-mode-switch [data-mode-btn="udm"]')).toHaveClass(/active/);
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute('title', /UDM 2\.1\.1/);
  });

  test('soubor JVF v režimu UDM nabídne přepnutí do JVF', async ({ page }) => {
    await switchMode(page, 'udm');
    await page.setInputFiles('#file-input', fixturePath('ukazka_ZPS.xml'));
    await expect(page.locator('#confirm-modal-title')).toHaveText(/režimu JVF/);
    await page.locator('#confirm-modal-footer button', { hasText: 'Přepnout do JVF' }).click();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#app-mode-switch [data-mode-btn="jvf"]')).toHaveClass(/active/);
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute('title', 'Verze JVF 1.4.3');
  });

  test('přepnutí s načtenými daty se ptá a zavře projekty', async ({ page }) => {
    await loadSample(page, 'ukazka_ZPS.xml');
    await page.locator('#app-mode-switch [data-mode-btn="udm"]').click();
    await expect(page.locator('#confirm-modal-body')).toContainText('zavře načtený soubor');
    // Zrušit → nic se nemění
    await page.locator('#confirm-modal-footer button', { hasText: 'Zrušit' }).click();
    await expect(page.locator('#projects-list .project-item')).toHaveCount(1);
    await expect(page.locator('#app-mode-switch [data-mode-btn="jvf"]')).toHaveClass(/active/);
    // Přepnout → projekty pryč, prázdný stav
    await page.locator('#app-mode-switch [data-mode-btn="udm"]').click();
    await page.locator('#confirm-modal-footer button', { hasText: 'Přepnout do UDM' }).click();
    await expect(page.locator('#app-mode-switch [data-mode-btn="udm"]')).toHaveClass(/active/);
    await expect(page.locator('#projects-section')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeDisabled();
  });
});

test.describe('Načtení JVF souboru', () => {
  test('načte ukázku ZPS a povolí akční tlačítka', async ({ page }) => {
    // Prázdný stav → sekce Projekty ještě není vidět.
    await expect(page.locator('#projects-section')).toBeHidden();

    await loadSample(page, 'ukazka_ZPS.xml');

    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('#btn-features')).toBeEnabled();
    await expect(page.locator('#jvf-layers-list .layer-group').first()).toBeVisible();
    // Verze souboru (1.4.3) se ukáže u projektu jako info ikona (hover title).
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute(
      'title',
      'Verze JVF 1.4.3',
    );
  });

  test('načtení ukázky přes nabídku (fetch z fixtures) také funguje', async ({ page }) => {
    await page.locator('#btn-upload-menu').click();
    await page.locator('.upload-menu-item[data-sample="ukazka_DI.xml"]').click();

    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('#jvf-layers-list .layer-item').first()).toBeVisible();
  });

  test('soubor s nepodporovanou verzí (1.5.0) je odmítnut', async ({ page }) => {
    // Verze 1.5.0 není mezi JVF_VERSIONS (1.4.3, 1.5.0.1, 1.5.0.2) → blokující modal
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

  test('soubor verze 1.5.0.1 se načte a info ikona projektu ukáže verzi 1.5.0.1', async ({ page }) => {
    // Auto-detekce bez modalu; verze souboru se ukáže u projektu (hover title).
    await page.setInputFiles('#file-input', fixturePath('test_verze_1.5.0.1.xml'));

    await expect(page.locator('#confirm-modal')).toBeHidden();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('#jvf-layers-list .layer-item').first()).toBeVisible();
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute(
      'title',
      'Verze JVF 1.5.0.1',
    );
  });

  test('soubor UDM 2.1.1 se v režimu UDM načte bez modalu, s verzí UDM a skupinami UDM', async ({ page }) => {
    // VerzeJVFDTM 1.5.0.2 + VerzeJVFUDM 2.1.1 → UDM (ne odmítnutá verze 1.5.0.2).
    // Body souboru UDM se kreslí SVG symboly UDM (public/symboly/udm/).
    await switchMode(page, 'udm');
    const udmSymbol = page.waitForRequest(/\/symboly\/udm\/[\d-]+_[0-9a-f]{6}\.svg$/);
    await page.locator('#btn-upload-menu').click();
    await page.locator('.upload-menu-item[data-sample="udm_minimal.xml"]').click();
    await udmSymbol;

    await expect(page.locator('#confirm-modal')).toBeHidden();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#btn-validate')).toBeEnabled();
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute(
      'title',
      'Verze UDM 2.1.1 (JVF 1.5.0.2)',
    );
    // Objekty nad rámec DTM tvoří vlastní obsahové části ve vrstvách.
    for (const cast of ['ZPSUDM', 'DIUDM', 'OST']) {
      await expect(page.locator('#jvf-layers-list')).toContainText(cast);
    }
    // UDM = data geodeta celá jako nová → zvýraznění změn barvou je vypnuté
    // (kreslí se vlastní symbologií), nové záznamy zůstávají viditelné.
    await expect(page.locator('#toggle-highlight-zapis')).not.toBeChecked();
    await expect(page.locator('#toggle-show-inserted')).toBeChecked();
  });

  test('Export do CAD (jen režim UDM) stáhne DXF ve vzhledu UDM', async ({ page }) => {
    // V režimu JVF tlačítko není, v UDM je (bez dat zakázané).
    await expect(page.locator('#btn-export-cad')).toBeHidden();
    await switchMode(page, 'udm');
    await expect(page.locator('#btn-export-cad')).toBeVisible();
    await expect(page.locator('#btn-export-cad')).toBeDisabled();
    await page.locator('#btn-upload-menu').click();
    await page.locator('.upload-menu-item[data-sample="udm_pontonovy_most.xml"]').click();
    await expect(page.locator('#btn-export-cad')).toBeEnabled();

    await page.locator('#btn-export-cad').click();
    await expect(page.locator('#confirm-modal-title')).toHaveText(/Export do CAD/);
    // DWG se neexportuje — dialog radí uložit DXF v AutoCADu jako DWG.
    await expect(page.locator('input[name="cad-format"]')).toHaveCount(2);
    await expect(page.locator('.cad-dwg')).toContainText('uložte jako DWG');

    const downloadPromise = page.waitForEvent('download');
    await page.locator('#confirm-modal-footer button', { hasText: 'Exportovat' }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('udm_pontonovy_most.dxf');
    const { readFile } = await import('node:fs/promises');
    const dxf = await readFile((await download.path())!, 'utf-8');
    expect(dxf).toContain('AC1027');
    expect(dxf).toContain('DI_ObvodMostu');
    expect(dxf).toContain('Upresneni=pontonový most');
  });

  test('ukázka UDM s pontonovým mostem se načte z nabídky', async ({ page }) => {
    await switchMode(page, 'udm');
    await page.locator('#btn-upload-menu').click();
    await page.locator('.upload-menu-item[data-sample="udm_pontonovy_most.xml"]').click();

    await expect(page.locator('#confirm-modal')).toBeHidden();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#jvf-layers-list')).toContainText('obvod mostu');
    await expect(page.locator('#jvf-layers-list')).toContainText('provozní plocha pozemní komunikace');
  });
});

test.describe('Režim JŽM (ŽXML Správy železnic)', () => {
  test('?mode=jzm: ukázky ŽXML v nabídce, Export do CAD a Legenda znaků viditelné', async ({ page }) => {
    await page.goto('./?mode=jzm');
    await expect(page.locator('#app-mode-switch [data-mode-btn="jzm"]')).toHaveClass(/active/);
    await page.locator('#btn-upload-menu').click();
    await expect(page.locator('.upload-menu-item:visible')).toHaveCount(3);
    await expect(page.locator('.upload-menu-item[data-sample="zxml_nadrazi.xml"]')).toBeVisible();
    await expect(page.locator('#btn-export-cad')).toBeVisible();
    await expect(page.locator('#btn-symbol-legend')).toBeVisible();
  });

  test('soubor ŽXML v režimu JVF nabídne přepnutí do JŽM', async ({ page }) => {
    await expect(page.locator('#btn-symbol-legend')).toBeHidden();
    await page.setInputFiles('#file-input', fixturePath('zxml-prvky-sz.xml'));
    await expect(page.locator('#confirm-modal-title')).toHaveText(/režimu JŽM/);
    await page.locator('#confirm-modal-footer button', { hasText: 'Přepnout do JŽM' }).click();
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('#app-mode-switch [data-mode-btn="jzm"]')).toHaveClass(/active/);
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute(
      'title',
      'Verze ŽXML 1.4.2.1 (JVF 1.4.3)',
    );
  });

  test('nádraží ŽXML 1.5.1.6: symboly SŽ, obsahové části SŽ, export DXF', async ({ page }) => {
    await switchMode(page, 'jzm');
    const szSymbol = page.waitForRequest(/\/symboly\/zxml\/sz-[0-9a-f]+_[0-9a-f]{6}\.svg$/);
    await page.locator('#btn-upload-menu').click();
    await page.locator('.upload-menu-item[data-sample="zxml_nadrazi.xml"]').click();
    await szSymbol;
    await expect(page.locator('#loading-overlay')).toBeHidden();
    await expect(page.locator('.project-item .project-version-info')).toHaveAttribute(
      'title',
      'Verze ŽXML 1.5.1.6 (JVF 1.5.0.2)',
    );
    for (const cast of ['ZDT', 'ZDD', 'H3D', 'ODSZ', 'SKLEP']) {
      await expect(page.locator('#jvf-layers-list')).toContainText(cast);
    }

    await page.locator('#btn-export-cad').click();
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#confirm-modal-footer button', { hasText: 'Exportovat' }).click();
    const download = await downloadPromise;
    const { readFile } = await import('node:fs/promises');
    const dxf = await readFile((await download.path())!, 'utf-8');
    expect(dxf).toContain('ZDT_Baliza');
    expect(dxf).toMatch(/SZ_[0-9a-f]{8}/);
  });

  test('Legenda znaků JŽM stáhne SVG v balíku ZIP', async ({ page }) => {
    await switchMode(page, 'jzm');
    await page.locator('#btn-symbol-legend').click();
    await expect(page.locator('#symbol-legend-modal')).toBeVisible();
    await expect(page.locator('#symbol-legend-modal-title')).toHaveText(/ŽXML 1\.5\.1\.6/);
    await expect(page.locator('.symbol-legend-item').first()).toBeVisible();
    await page.locator('#symbol-legend-modal-search').fill('balíza');
    await expect(page.locator('.symbol-legend-item').first()).toContainText(/Balíza/);
    await page.locator('#symbol-legend-modal-search').fill('');

    const downloadPromise = page.waitForEvent('download');
    await page.locator('#symbol-legend-download').click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('znaky-zxml-1.5.1.6.zip');
    const { readFile } = await import('node:fs/promises');
    const zip = await readFile((await download.path())!);
    expect(zip.subarray(0, 4).toString('hex')).toBe('504b0304');
    expect(zip.toString('utf-8')).toContain('znaky.csv');
    expect(zip.toString('utf-8')).toContain('<svg');
  });

  test('Legenda znaků UDM ukáže knihovnu znaků ČKZ', async ({ page }) => {
    await switchMode(page, 'udm');
    await page.locator('#btn-symbol-legend').click();
    await expect(page.locator('#symbol-legend-modal-title')).toHaveText(/UDM 2\.1\.1/);
    expect(await page.locator('.symbol-legend-item').count()).toBeGreaterThan(100);
  });
});

test.describe('Vzhled (Material Design 3)', () => {
  test('motiv se přepíná pro celou aplikaci (data-theme na <html>)', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.locator('#btn-theme').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const bg = await page.locator('#app-header').evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bg).toBe('rgb(30, 31, 37)'); // surface-container (tmavý)
  });

  test('zavírací tlačítko bočního panelu zavře Přehled prvků', async ({ page }) => {
    await loadSample(page, 'ukazka_ZPS.xml');
    await page.locator('#btn-features').click();
    await expect(page.locator('#features-panel')).toBeVisible();
    await page.locator('.sheet-close-btn[data-close-for="btn-features"]').click();
    await expect(page.locator('#features-panel')).toBeHidden();
    await expect(page.locator('#btn-features')).not.toHaveClass(/active/);
  });

  test('na mobilu je panel vrstev výsuvný (menu, scrim)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const panel = page.locator('#layer-panel');
    await expect(page.locator('#btn-drawer')).toBeVisible();
    await expect(panel).not.toBeInViewport();
    await page.locator('#btn-drawer').click();
    await expect(panel).toBeInViewport();
    await expect(page.locator('#app-mode-switch-drawer [data-mode-btn="jvf"]')).toHaveClass(/active/);
    await page.locator('#drawer-scrim').click({ position: { x: 370, y: 400 } });
    await expect(panel).not.toBeInViewport();
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

  test('legenda ukazuje reprezentativní barvu sítě z variant (elektro červená)', async ({ page }) => {
    // Trasa elektrické sítě nese barvu jen ve variantách (#e60000). Legenda
    // musí ukázat reprezentativní barvu z variant, ne jednotný TI fallback
    // (#ff9800).
    await page.locator('#btn-legend').click();
    await expect(page.locator('#legend-modal')).toBeVisible();
    await page.locator('#legend-modal-search').fill('trasa elektrické sítě');
    await expect(page.locator('.legend-item')).toHaveCount(1);

    // Swatch trasy elektrické sítě nese červenou (#e60000) z variant — ne
    // oranžový TI fallback. (#ff9800 zůstává jen barvou hlavičky obsahové části.)
    const swatchHtml = await page.locator('.legend-swatch').first().innerHTML();
    expect(swatchHtml.toLowerCase()).toContain('e60000');
    expect(swatchHtml.toLowerCase()).not.toContain('ff9800');

    await page.locator('#legend-modal-close').click();
  });

  test('klik na prvek v mapě otevře zavřený panel Přehled prvků', async ({ page }) => {
    // Fixture s jedním velkým polygonem → klik do středu mapy ho trefí.
    await page.setInputFiles('#file-input', fixturePath('test_klik_plocha.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled();
    // Počkat, až se vrstva vykreslí (fitView + render dat).
    await expect(page.locator('#jvf-layers-list .layer-item').first()).toBeVisible();
    await page.waitForTimeout(700);

    // Panel je ve výchozím stavu zavřený.
    await expect(page.locator('#features-panel')).toBeHidden();

    // Klik do středu 2D mapy na prvek → panel se automaticky otevře a vybere prvek.
    // OL emituje `singleclick` ~250 ms po pointerup; toBeVisible retry to pokryje.
    const map = page.locator('#map-container');
    const box = (await map.boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);

    await expect(page.locator('#features-panel')).toBeVisible();
    await expect(page.locator('#btn-features')).toHaveClass(/active/);
    await expect(page.locator('.feature-row.active')).toBeVisible();
  });

  test('filtr obsahových částí nabízí části z dat (UDM: ZPSUDM, DIUDM, OST) a filtruje', async ({ page }) => {
    await page.goto('./?mode=udm');
    await page.setInputFiles('#file-input', fixturePath('UDM_ukazka-1.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled({ timeout: 30_000 });
    await page.locator('#btn-features').click();

    const chips = page.locator('.features-filter-btn');
    await expect(chips).toHaveText(['Vše', 'ZPS', 'TI', 'ZPSUDM', 'DIUDM', 'OST']);
    await expect(page.locator('#features-summary')).toHaveText('30 typů, 821 záznamů');

    await page.locator('.features-filter-btn[data-filter="DIUDM"]').click();
    await expect(page.locator('.features-filter-btn.active')).toHaveText('DIUDM');
    await expect(page.locator('#features-summary')).toContainText('13 z 821 záznamů');
    // Zůstanou jen skupiny části DIUDM.
    const groups = page.locator('.feature-group-header');
    await expect(groups.first()).toBeVisible();
    expect(await groups.count()).toBe(await page.locator('.feature-group-header.part-DIUDM').count());

    await page.locator('.features-filter-btn[data-filter="ZPS"]').click();
    await expect(page.locator('#features-summary')).toContainText('642 z 821 záznamů');
    await expect(page.locator('.feature-group-header.part-ZPSUDM')).toHaveCount(0);

    await page.locator('.features-filter-btn[data-filter="all"]').click();
    await expect(page.locator('#features-summary')).toHaveText('30 typů, 821 záznamů');
  });

  test('filtr obsahových částí je i v režimu JVF (i s jedinou částí)', async ({ page }) => {
    await loadSample(page, 'ukazka_ZPS.xml');
    await page.locator('#btn-features').click();
    await expect(page.locator('#features-panel')).toBeVisible();
    await expect(page.locator('.features-filter-btn')).toHaveText(['Vše', 'ZPS']);
  });

  test('filtr úrovní umístění je vidět i s jedinou úrovní a filtruje tabulku i mapu', async ({ page }) => {
    // Ukázka ZPS: vše na úrovni 0 → řádek úrovní je vidět s jediným čipem.
    await loadSample(page, 'ukazka_ZPS.xml');
    await page.locator('#btn-features').click();
    await expect(page.locator('#features-level-filter .level-chip')).toHaveText(['0']);

    // Ukázka KI: úrovně 0 a -1 (podzemí).
    await page.goto('./');
    await loadSample(page, 'ukazka_KI.xml');
    await page.locator('#btn-features').click();
    const chips = page.locator('#features-level-filter .level-chip');
    await expect(chips).toHaveText(['-1', '0']);
    const all = await drawnBy(page, 'jvfLevel');
    expect(all['-1']).toBeGreaterThan(0);
    expect(all['0']).toBeGreaterThan(0);
    const rowsAll = await page.locator('.feature-row').count();

    // Skrýt úroveň -1 → zmizí z mapy i z tabulky.
    await chips.filter({ hasText: '-1' }).click();
    await expect(chips.filter({ hasText: '-1' })).not.toHaveClass(/active/);
    const filtered = await drawnBy(page, 'jvfLevel');
    expect(filtered['-1']).toBeUndefined();
    expect(filtered['0']).toBe(all['0']);
    expect(await page.locator('.feature-row').count()).toBeLessThan(rowsAll);

    await chips.filter({ hasText: '-1' }).click();
    expect(await drawnBy(page, 'jvfLevel')).toEqual(all);
  });

  test('oko u kategorie a panel vrstev sdílejí viditelnost (tabulka ↔ panel ↔ mapa)', async ({ page }) => {
    await loadSample(page, 'ukazka_DI.xml');
    await page.locator('#btn-features').click();
    const header = page.locator('.feature-group-header').first();
    await expect(header).toBeVisible();
    // Hlavička kategorie ve stylu položky legendy (náhled symbolu + název + meta).
    await expect(header.locator('.legend-swatch')).toHaveCount(1);
    await expect(header.locator('.legend-name')).not.toBeEmpty();
    const key = (await header.getAttribute('data-layer-key'))!;
    const element = (await header.getAttribute('data-element'))!;
    const panelItem = page.locator(`.layer-item[data-layer-key="${key}"]`);
    const drawn = async () => (await drawnBy(page, 'jvfElementName'))[element] ?? 0;
    expect(await drawn()).toBeGreaterThan(0);

    // Oko v tabulce → skryje kategorii v tabulce, v panelu vrstev i v mapě.
    await header.locator('.group-visibility-btn').click();
    await expect(page.locator(`.feature-group-header[data-layer-key="${key}"]`)).toHaveClass(/layer-hidden/);
    await expect(page.locator(`.feature-group-header[data-layer-key="${key}"] .group-visibility-btn`)).toHaveText('visibility_off');
    await expect(panelItem).toHaveClass(/inactive/);
    expect(await drawn()).toBe(0);

    // Panel vrstev → zpět viditelná i v tabulce.
    await panelItem.click();
    await expect(panelItem).toHaveClass(/active/);
    await expect(page.locator(`.feature-group-header[data-layer-key="${key}"]`)).not.toHaveClass(/layer-hidden/);
    expect(await drawn()).toBeGreaterThan(0);

    // Panel vrstev → skrytí se promítne do tabulky.
    await panelItem.click();
    await expect(page.locator(`.feature-group-header[data-layer-key="${key}"] .group-visibility-btn`)).toHaveText('visibility_off');
  });

  test('filtr obsahové části v tabulce ztlumí odfiltrované části v panelu vrstev', async ({ page }) => {
    await page.goto('./?mode=udm');
    await page.setInputFiles('#file-input', fixturePath('UDM_ukazka-1.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled({ timeout: 30_000 });
    await page.locator('#btn-features').click();
    await page.locator('.features-filter-btn[data-filter="TI"]').click();
    await expect(page.locator('.layer-group[data-part="ZPS"]')).toHaveClass(/filtered-out/);
    await expect(page.locator('.layer-group[data-part="TI"]')).not.toHaveClass(/filtered-out/);
    await page.locator('.features-filter-btn[data-filter="all"]').click();
    await expect(page.locator('.layer-group.filtered-out')).toHaveCount(0);
  });

  test('filtr obsahové části filtruje i mapu', async ({ page }) => {
    await page.goto('./?mode=udm');
    await page.setInputFiles('#file-input', fixturePath('UDM_ukazka-1.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled({ timeout: 30_000 });
    await page.locator('#btn-features').click();

    const drawnByPart = () => drawnBy(page, 'jvfPart');
    const all = await drawnByPart();
    expect(all['ZPS']).toBeGreaterThan(0);
    expect(all['DIUDM']).toBeGreaterThan(0);

    await page.locator('.features-filter-btn[data-filter="DIUDM"]').click();
    await expect(page.locator('.features-filter-btn.active')).toHaveText('DIUDM');
    const filtered = await drawnByPart();
    expect(Object.keys(filtered)).toEqual(['DIUDM']);
    expect(filtered['DIUDM']).toBe(all['DIUDM']);

    await page.locator('.features-filter-btn[data-filter="all"]').click();
    expect(await drawnByPart()).toEqual(all);
  });

  test('klik v mapě vybere správný řádek i u prvků bez ID a s duplicitním ID', async ({ page }) => {
    // 4 budovy vedle sebe: <ID/>, <ID></ID>, 2× stejné ID „DUP-0001".
    await page.setInputFiles('#file-input', fixturePath('test_klik_bez_id.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled();
    await page.locator('#btn-features').click();
    const rows = page.locator('.feature-row');
    await expect(rows).toHaveCount(4);

    // Každý řádek má neprázdný a jedinečný klíč; interní UUID se nezobrazuje.
    const ids = await rows.evaluateAll((els) => els.map((e) => (e as HTMLElement).dataset['id'] ?? ''));
    expect(ids.every((id) => id.length > 0)).toBe(true);
    expect(new Set(ids).size).toBe(4);
    await expect(rows.nth(0)).toContainText('bez ID');
    await expect(rows.nth(0)).not.toContainText('uuid');
    await expect(rows.nth(2)).toContainText('DUP-0001');

    const box = (await page.locator('#map-container').boundingBox())!;
    for (let n = 0; n < 4; n++) {
      // Vystředit mapu na n-tou budovu a kliknout doprostřed.
      await page.evaluate((n) => {
        const d = (window as unknown as { __jvfDebug: { olMap: import('ol/Map').default } }).__jvfDebug;
        d.olMap.getView().setCenter([-520790 + n * 40, -1164190]);
        d.olMap.renderSync();
      }, n);
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      await expect(page.locator(`.feature-row.active[data-id="${ids[n]}"]`)).toHaveCount(1);
      await page.waitForTimeout(350); // oddělit kliky (OL by je spojil v dvojklik)
    }
  });

  test('klik v mapě nascrolluje řádek v Přehledu prvků do 0,3 s', async ({ page }) => {
    await loadSample(page, 'ukazka_ZPS.xml');
    await page.locator('#btn-features').click();
    await expect(page.locator('#features-panel')).toBeVisible();
    // Poslední prvek souboru → jeho řádek je daleko dole v seznamu.
    const target = await page.evaluate(() => {
      const d = (window as unknown as { __jvfDebug: {
        olMap: import('ol/Map').default;
        getJvfLayers: () => Array<{ olLayer: import('ol/layer/Vector').default }>;
      } }).__jvfDebug;
      const feats = d.getJvfLayers().flatMap((l) => l.olLayer.getSource()!.getFeatures());
      // Linie (ne bod — SVG symbol nemusí být ještě načtený pro hit detection).
      const lines = feats.filter((x) => x.getGeometry()?.getType() === 'LineString');
      const f = lines[lines.length - 1]!;
      const g = f.getGeometry() as import('ol/geom/LineString').default;
      d.olMap.getView().setCenter(g.getCoordinateAt(0.5));
      d.olMap.getView().setZoom(22);
      d.olMap.renderSync();
      // Co OL vybere uprostřed mapy (stejná logika jako handler kliku).
      const size = d.olMap.getSize()!;
      let picked = { el: '', id: '' };
      d.olMap.forEachFeatureAtPixel([size[0]! / 2, size[1]! / 2], (x) => {
        const el = x.get('jvfElementName');
        const id = x.get('jvfObjectId');
        if (typeof el === 'string' && typeof id === 'string' && id) {
          picked = { el, id };
          return true;
        }
        return false;
      }, { hitTolerance: 4 });
      return picked;
    });
    expect(target.id).not.toBe('');
    // Měření ve stránce po snímcích: od označení řádku do konce scrollu.
    const measured = page.evaluate(({ el, id }) => new Promise<{ ms: number; visible: boolean }>((done) => {
      const list = document.getElementById('features-list')!;
      const sel = `.feature-row.active[data-element="${CSS.escape(el)}"][data-id="${CSS.escape(id)}"]`;
      let t0 = 0;
      let tLastMove = 0;
      let last = -1;
      let still = 0;
      const tick = (now: number): void => {
        const row = list.querySelector<HTMLElement>(sel);
        if (row && t0 === 0) {
          t0 = now;
          tLastMove = now;
          last = list.scrollTop;
        } else if (t0 > 0) {
          if (list.scrollTop !== last) {
            tLastMove = now;
            still = 0;
          } else {
            still += 1;
          }
          last = list.scrollTop;
          if (still >= 5) {
            const r = row!.getBoundingClientRect();
            const c = list.getBoundingClientRect();
            done({ ms: tLastMove - t0, visible: r.top >= c.top && r.bottom <= c.bottom });
            return;
          }
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), target);
    const box = (await page.locator('#map-container').boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    const { ms, visible } = await measured;
    expect(visible).toBe(true);
    // Animace je omezená na 300 ms; rezerva na nepřesnost snímků v headless.
    expect(ms).toBeLessThan(360);
  });

  test('panel prvku překládá číselníkové atributy (kód — text)', async ({ page }) => {
    // Minimální fixture s osou PK (KategoriePozemniKomunikace=2). Detail prvku
    // v sekci „Atributy objektu" doplní za kód český popisek z číselníku.
    await page.setInputFiles('#file-input', fixturePath('test_ciselnik.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled();
    await page.locator('#btn-features').click();
    await expect(page.locator('#features-panel')).toBeVisible();

    // Malý soubor → skupina auto-rozbalená; klik na prvek rozbalí detail.
    await page.locator('.feature-row').first().click();
    const detail = page.locator('.feature-detail').first();
    await expect(detail).toContainText('2 — dálnice II. třídy');
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

  test('měření: klikáním vzdálenost, od 3 bodů plocha, Backspace vrátí bod, Esc zavře', async ({ page }) => {
    const btn = page.locator('#btn-measure');
    const card = page.locator('#measure-card');
    await expect(btn).toBeVisible();
    await expect(card).toBeHidden();
    await btn.click();
    await expect(btn).toHaveAttribute('aria-pressed', 'true');
    await expect(card).toBeVisible();
    await expect(card.locator('[data-measure="area"]')).toHaveText('od 3 bodů');

    const box = (await page.locator('#map-container').boundingBox())!;
    const px = [
      [box.width * 0.4, box.height * 0.4],
      [box.width * 0.6, box.height * 0.4],
      [box.width * 0.6, box.height * 0.65],
      [box.width * 0.42, box.height * 0.6],
    ] as const;
    // Očekávané hodnoty ze stejných funkcí (modul načtený z dev serveru).
    const expected = (n: number) => page.evaluate(async ({ px, n }) => {
      const m = await import('/jvf_viewer/src/map/measureMath.ts');
      const d = (window as unknown as { __jvfDebug: { olMap: import('ol/Map').default } }).__jvfDebug;
      const coords = px.slice(0, n).map((p) => d.olMap.getCoordinateFromPixel([p[0], p[1]])!);
      return {
        length: m.formatLength(m.polylineLength(coords)),
        area: n >= 3 ? m.formatArea(m.polygonArea(coords)) : 'od 3 bodů',
      };
    }, { px: px.map((p) => [p[0], p[1]]), n });
    const click = async (i: number) => {
      await page.mouse.click(box.x + px[i]![0], box.y + px[i]![1]);
      await page.waitForTimeout(350);
    };

    await click(0);
    await click(1);
    let e = await expected(2);
    await expect(card.locator('[data-measure="length"]')).toHaveText(e.length);
    await expect(card.locator('[data-measure="area"]')).toHaveText('od 3 bodů');
    await expect(card.locator('[data-measure="points"]')).toHaveText('2');

    await click(2);
    e = await expected(3);
    await expect(card.locator('[data-measure="length"]')).toHaveText(e.length);
    await expect(card.locator('[data-measure="area"]')).toHaveText(e.area);

    // Dvojklik přidá 4. bod a měření ukončí.
    await page.mouse.dblclick(box.x + px[3]![0], box.y + px[3]![1]);
    e = await expected(4);
    await expect(card.locator('[data-measure="points"]')).toHaveText('4');
    await expect(card.locator('[data-measure="length"]')).toHaveText(e.length);
    await expect(card.locator('[data-measure="area"]')).toHaveText(e.area);

    await page.keyboard.press('Backspace');
    await expect(card.locator('[data-measure="points"]')).toHaveText('3');
    e = await expected(3);
    await expect(card.locator('[data-measure="area"]')).toHaveText(e.area);

    await page.keyboard.press('Escape');
    await expect(card).toBeHidden();
    await expect(btn).toHaveAttribute('aria-pressed', 'false');
  });

  test('měření: body se přichytí k vrcholu i hraně prvku JVF, ne ke skryté vrstvě', async ({ page }) => {
    // Budova 200×200 m, roh [-520800, -1164200], spodní hrana y = -1164200.
    await page.setInputFiles('#file-input', fixturePath('test_klik_plocha.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled();
    await page.waitForTimeout(700);
    type Dbg = { olMap: import('ol/Map').default; measurePoints: () => number[][] };
    const centerOn = (c: [number, number]) => page.evaluate((c) => {
      const d = (window as unknown as { __jvfDebug: Dbg }).__jvfDebug;
      d.olMap.getView().setCenter(c);
      d.olMap.getView().setResolution(0.5); // 0,5 m/px
      d.olMap.renderSync();
    }, c);
    const points = () => page.evaluate(() =>
      (window as unknown as { __jvfDebug: Dbg }).__jvfDebug.measurePoints());
    const box = (await page.locator('#map-container').boundingBox())!;
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    const snapEl = page.locator('#measure-card [data-measure="snap"]');

    await page.locator('#btn-measure').click();

    // Vrchol: kurzor 4 px vedle rohu → bod přesně v rohu.
    await centerOn([-520800, -1164200]);
    await page.mouse.move(cx + 4, cy - 3, { steps: 3 });
    await expect(snapEl).toHaveText('vrchol · BudovaPlocha');
    await page.mouse.click(cx + 4, cy - 3);
    await page.waitForTimeout(350);
    expect((await points())[0]).toEqual([-520800, -1164200]);

    // Hrana: kurzor 3 px nad středem spodní hrany → y přesně na hraně.
    await centerOn([-520700, -1164200]);
    await page.mouse.move(cx + 2, cy - 3, { steps: 3 });
    await expect(snapEl).toHaveText('hrana · BudovaPlocha');
    await page.mouse.click(cx + 2, cy - 3);
    await page.waitForTimeout(350);
    const p2 = (await points())[1]!;
    expect(p2[1]).toBeCloseTo(-1164200, 6);
    expect(Math.abs(p2[0]! - -520699)).toBeLessThan(0.5);

    // Skrytá vrstva (panel vrstev) → žádné přichycení.
    await page.keyboard.press('Escape');
    await page.locator('.layer-item').first().click();
    await page.locator('#btn-measure').click();
    await centerOn([-520800, -1164200]);
    await page.mouse.move(cx + 4, cy - 3, { steps: 3 });
    await page.mouse.click(cx + 4, cy - 3);
    await page.waitForTimeout(350);
    await expect(snapEl).toHaveText('—');
    expect((await points())[0]).not.toEqual([-520800, -1164200]);
  });

  test('měření: klik do mapy nevybírá prvek', async ({ page }) => {
    await page.setInputFiles('#file-input', fixturePath('test_klik_plocha.xml'));
    await expect(page.locator('#btn-features')).toBeEnabled();
    await page.waitForTimeout(700);
    await page.locator('#btn-measure').click();
    const box = (await page.locator('#map-container').boundingBox())!;
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(600);
    await expect(page.locator('#features-panel')).toBeHidden();
    await expect(page.locator('#measure-card [data-measure="points"]')).toHaveText('1');
  });

  test('přepínání podkladových map přepíná aktivní tlačítko', async ({ page }) => {
    const zm = page.locator('.base-btn[data-layer="zm"]');
    const ortofoto = page.locator('.base-btn[data-layer="ortofoto"]');
    await expect(zm).toHaveClass(/active/);

    await ortofoto.click();
    await expect(ortofoto).toHaveClass(/active/);
    await expect(zm).not.toHaveClass(/active/);
  });

  test('podklad „Prázdná" vypne podklad; pozadí je bílé, v tmavém motivu černé', async ({ page }) => {
    const prazdna = page.locator('.base-btn[data-layer="none"]');
    await expect(prazdna).toHaveText('Prázdná');
    await prazdna.click();
    await expect(prazdna).toHaveClass(/active/);
    await expect(page.locator('.base-btn[data-layer="zm"]')).not.toHaveClass(/active/);
    await expect(page.locator('#basemap-opacity')).toBeDisabled();

    // Žádná dlaždicová vrstva podkladu není viditelná.
    const visibleBase = await page.evaluate(() => {
      const d = (window as unknown as { __jvfDebug: { olMap: import('ol/Map').default } }).__jvfDebug;
      return d.olMap.getLayers().getArray()
        .filter((l) => ['zm', 'ortofoto'].includes(l.get('name')) && l.getVisible()).length;
    });
    expect(visibleBase).toBe(0);

    const bg = () => page.locator('#map-area').evaluate((el) => getComputedStyle(el).backgroundColor);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    expect(await bg()).toBe('rgb(255, 255, 255)');
    await page.locator('#btn-theme').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect(await bg()).toBe('rgb(0, 0, 0)');

    // Opakovaný klik na aktivní volbu nic nevypíná (segmentový přepínač).
    const zm = page.locator('.base-btn[data-layer="zm"]');
    await zm.click();
    await zm.click();
    await expect(zm).toHaveClass(/active/);
    await expect(page.locator('#basemap-opacity')).toBeEnabled();
  });
});

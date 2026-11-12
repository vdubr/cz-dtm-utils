import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
const buildTime = new Date().toISOString();

/**
 * Produkční build = vydaná verze: Vercel produkce (větev `main`), lokálně
 * `VITE_RELEASE_BUILD=1`. Má jen vydané nástroje a historie verzí v O aplikaci
 * nevypisuje `[Unreleased]`. Preview, lokální vývoj a testy mají vše.
 */
const releaseBuild = process.env['VERCEL_ENV'] === 'production' || process.env['VITE_RELEASE_BUILD'] === '1';

/**
 * Nástroje (režimy aplikace) zapnuté v buildu. Vydané JVF a JŽM (ŽXML
 * Správy železnic); UDM je hotové, ale nevydané. Ručně přepsat:
 * `VITE_APP_MODES=jvf,udm`. Vydání dalšího nástroje = přidat ho do
 * `RELEASED_APP_MODES`.
 */
const RELEASED_APP_MODES = ['jvf', 'jzm'];
const ALL_APP_MODES = ['jvf', 'udm', 'jzm'];
const appModes = process.env['VITE_APP_MODES']
  ? process.env['VITE_APP_MODES'].split(',').map((m) => m.trim()).filter(Boolean)
  : releaseBuild
    ? RELEASED_APP_MODES
    : ALL_APP_MODES;

export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __BUILD_TIME__: JSON.stringify(buildTime),
    __APP_MODES__: JSON.stringify(appModes),
    __RELEASE_BUILD__: JSON.stringify(releaseBuild),
  },
  // Nástroje na kořeni domény: / (JVF), /udm, /jzm (vercel.json přepisy).
  base: '/',
  optimizeDeps: {
    include: ['ol', 'proj4', 'three'],
    exclude: ['jvf-parser', 'jvf-cad', 'geotiff'],
  },
  build: {
    target: 'es2022',
    sourcemap: true,
  },
  resolve: {
    alias: {},
  },
  server: {
    proxy: {
      '/proxy/wms-zm': {
        target: 'https://geoportal.cuzk.cz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/wms-zm/, '/WMS_ZM/WMService.aspx'),
        headers: {
          Referer: 'https://geoportal.cuzk.cz/',
        },
      },
      '/proxy/wms-ortofoto': {
        target: 'https://geoportal.cuzk.cz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/wms-ortofoto/, '/WMS_ORTOFOTO/WMService.aspx'),
        headers: {
          Referer: 'https://geoportal.cuzk.cz/',
        },
      },
      // Dev-only proxy pro ČÚZK DMR5G ImageServer — v produkci běží Vercel
      // edge funkce `/api/dmr5g` (api/dmr5g.ts). Tohle slouží pro `vite dev`,
      // kde serverless funkce nejsou k dispozici.
      '/api/dmr5g': {
        target: 'https://ags.cuzk.cz',
        changeOrigin: true,
        rewrite: (urlPath) => {
          // urlPath vypadá jako "/api/dmr5g?bbox=...&size=..."
          const qs = urlPath.includes('?') ? urlPath.slice(urlPath.indexOf('?') + 1) : '';
          const sp = new URLSearchParams(qs);
          // Injektuj fixní ArcGIS parametry, aby klient musel posílat jen bbox+size
          sp.set('bboxSR', '5514');
          sp.set('imageSR', '5514');
          sp.set('format', 'tiff');
          sp.set('pixelType', 'F32');
          sp.set('f', 'image');
          sp.set('interpolation', 'RSP_BilinearInterpolation');
          sp.set('noData', '-9999');
          return `/arcgis/rest/services/3D/dmr5g/ImageServer/exportImage?${sp.toString()}`;
        },
        headers: {
          Referer: 'https://ags.cuzk.cz/',
        },
      },
    },
  },
});

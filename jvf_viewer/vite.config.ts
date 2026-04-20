import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
const buildTime = new Date().toISOString();

export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
  base: '/jvf_viewer/',
  optimizeDeps: {
    include: ['ol', 'proj4', 'three'],
    exclude: ['jvf-parser', 'geotiff'],
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

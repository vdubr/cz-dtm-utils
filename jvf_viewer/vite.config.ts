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
    exclude: ['jvf-parser'],
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
    },
  },
});

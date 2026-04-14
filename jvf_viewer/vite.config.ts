import { defineConfig } from 'vite';

export default defineConfig({
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

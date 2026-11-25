/**
 * Statická stránka `/about` pro vyhledávače (Google, Seznam).
 *
 * Text okna O aplikaci (`src/ui/infoModal.ts`, `INFO_CONTENT_HTML`) je ve
 * vieweru jen v dialogu skládaném JavaScriptem — vyhledávač ho nevidí. Plugin
 * ho při buildu vyrenderuje (Vite SSR, stejné `define` jako aplikace) do
 * samostatného HTML s vlastním titulkem, popisem a `canonical`; ve `vite dev`
 * renderuje stránku za běhu. Na Vercelu ji obslouží přepis ve `vercel.json`.
 */
import { createServer, type Connect, type Plugin, type ViteDevServer } from 'vite';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** Hlavní (kanonická) adresa aplikace. */
export const SITE_URL = 'https://superjvf.cz';
const PAGE_PATH = '/about';
const INFO_MODULE = '/src/ui/infoModal.ts';

async function renderWith(server: ViteDevServer): Promise<string> {
  const mod = (await server.ssrLoadModule(INFO_MODULE)) as { INFO_CONTENT_HTML: string };
  return renderAboutPage(mod.INFO_CONTENT_HTML);
}

/** Celé HTML stránky kolem obsahu O aplikaci. */
export function renderAboutPage(contentHtml: string): string {
  const title = 'O aplikaci — JVF DTM Prohlížeč | superjvf.cz';
  const description =
    'JVF DTM Prohlížeč (superjvf.cz) — zdarma online prohlížeč a kontrola souborů JVF Digitální technické mapy ČR: ' +
    '2D mapa, 3D s terénem ČÚZK, kontrola topologie podle IS DMVS, přehled atributů a export do DXF. ' +
    'Soubory zůstávají v prohlížeči.';
  return `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${SITE_URL}${PAGE_PATH}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${SITE_URL}${PAGE_PATH}" />
  <meta property="og:site_name" content="superjvf.cz" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${SITE_URL}/og-image.png" />
  <meta property="og:locale" content="cs_CZ" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
  <style>
    :root { --bg: #f9f9ff; --fg: #1a1b20; --muted: #44464f; --line: #c5c6d0; --accent: #3755c3; --code: #ededf4; color-scheme: light dark; }
    @media (prefers-color-scheme: dark) {
      :root { --bg: #121318; --fg: #e3e2e9; --muted: #c5c6d0; --line: #44464f; --accent: #b6c4ff; --code: #292a2f; }
    }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--fg); font: 400 16px/1.6 Roboto, system-ui, sans-serif; }
    header, main, footer { max-width: 860px; margin: 0 auto; padding: 0 16px; }
    header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding-top: 24px; }
    header .brand { color: var(--fg); text-decoration: none; font-weight: 500; }
    .open-app { display: inline-block; padding: 10px 20px; border-radius: 20px; background: var(--accent); color: var(--bg); text-decoration: none; font-weight: 500; }
    h1 { font-size: 32px; line-height: 1.25; margin: 32px 0 8px; }
    .lead { color: var(--muted); font-size: 18px; margin: 0 0 24px; }
    h2, h3 { line-height: 1.3; margin: 32px 0 8px; }
    h3 { font-size: 20px; }
    a { color: var(--accent); }
    code { background: var(--code); padding: 1px 4px; border-radius: 4px; font-size: 0.9em; }
    ul { padding-left: 24px; }
    details { margin: 8px 0; }
    hr { border: none; border-top: 1px solid var(--line); margin: 32px 0; }
    footer { color: var(--muted); font-size: 14px; padding-bottom: 32px; }
    img, table { max-width: 100%; }
  </style>
</head>
<body>
  <header>
    <a class="brand" href="/">superjvf.cz — JVF DTM Prohlížeč</a>
    <a class="open-app" href="/">Otevřít prohlížeč</a>
  </header>
  <main>
    <h1>JVF DTM Prohlížeč — prohlížeč a kontrola Digitální technické mapy ČR</h1>
    <p class="lead">
      Zdarma online nástroj pro soubory <strong>JVF DTM</strong> (Jednotný výměnný
      formát Digitální technické mapy ČR): zobrazení ve 2D i 3D, kontrola dat
      a topologie, přehled prvků a export do CAD. Soubory se zpracovávají
      lokálně ve vašem prohlížeči.
    </p>
    ${contentHtml}
    <hr />
    <p><a class="open-app" href="/">Otevřít JVF DTM Prohlížeč</a></p>
  </main>
  <footer>
    superjvf.cz — JVF DTM Prohlížeč · autor Vojtěch Dubrovský
  </footer>
</body>
</html>
`;
}

/** Plugin: `/about` ve `vite dev` (za běhu) a `about.html` v buildu. */
export function aboutPage(define: Record<string, string>): Plugin {
  let root = process.cwd();
  let outDir = 'dist';
  let isBuild = false;
  const isPage = (url: string | undefined): boolean => !!url && /^\/about\/?(?:[?#]|$)/.test(url);
  return {
    name: 'about-page',
    configResolved(config) {
      root = config.root;
      isBuild = config.command === 'build';
      outDir = resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      server.middlewares.use(((req, res, next) => {
        if (!isPage(req.url)) return next();
        renderWith(server)
          .then((html) => {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(html);
          })
          .catch(next);
      }) as Connect.NextHandleFunction);
    },
    configurePreviewServer(server) {
      server.middlewares.use(((req, _res, next) => {
        if (isPage(req.url)) req.url = '/about.html';
        next();
      }) as Connect.NextHandleFunction);
    },
    async closeBundle(error?: Error) {
      // `closeBundle` volá Vite i při ukončení dev serveru — soubor jen v buildu.
      // Po chybě buildu nic nepsat (jinak by chyba zakryla tu původní).
      if (!isBuild || error || process.env['VITEST']) return;
      // Samostatný SSR server bez konfiguračního souboru (jinak by se plugin
      // spustil znovu) — jen se stejnými konstantami buildu.
      const server = await createServer({
        configFile: false,
        root,
        logLevel: 'error',
        define,
        appType: 'custom',
        server: { middlewareMode: true, hmr: false, watch: null },
        optimizeDeps: { noDiscovery: true, include: [] },
      });
      try {
        writeFileSync(resolve(outDir, 'about.html'), await renderWith(server));
      } finally {
        await server.close();
      }
    },
  };
}

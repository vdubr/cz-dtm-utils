# Vydání nástrojů UDM a JŽM

Zapsáno 2026-11-11 při přípravě vydání 2026.11.11, které jde do produkce
**jen s JVF**. Nástroje UDM (Univerzální datový model ČKZ) a JŽM (ŽXML
Správy železnic) jsou hotové v kódu, ale v produkčním buildu vypnuté.

**Aktualizace 2026-11-12:** JŽM zpřístupněné ve větvi `feat/dtmz`
(`RELEASED_APP_MODES = ['jvf', 'jzm']`), čeká na vydání; UDM dál vypnuté.

## Kde je co uložené (nic se nemazalo)

- **Přepínač buildu** — `jvf_viewer/vite.config.ts`: `RELEASED_APP_MODES`
  (vydané `['jvf']`, ve `feat/dtmz` `['jvf', 'jzm']`), `releaseBuild` (Vercel produkce nebo
  `VITE_RELEASE_BUILD=1`), ruční přepis `VITE_APP_MODES=jvf,udm,jzm`.
  Do aplikace jde jako `__APP_MODES__` / `__RELEASE_BUILD__`.
- **Registr nástrojů** — `jvf_viewer/src/state/appMode.ts`: `ALL_APP_MODES`
  (všechny), `APP_MODES` (zapnuté), `isAppModeEnabled`. Vypnutý nástroj:
  chybí ve spouštěči (nabídka má jen popis, Legendu DTM a O aplikaci),
  `/udm` a `/jzm` vedou na `/`, soubor UDM / ŽXML se odmítne dialogem
  „Nepodporovaný formát" (`ensureAppModeForFile`, `ui/appModeSwitch.ts`).
- **Texty v O aplikaci** — `jvf_viewer/src/ui/infoModal.ts`: všechny pasáže
  o UDM a JŽM zůstávají v `INFO_CONTENT_HTML`, jen obalené
  `when(UDM | JZM | DIALECTS, …)`. Zapnutím nástroje se vrátí samy
  (úvod, ukázky, verze projektů, mobilní spouštěč, Změny, Export do CAD,
  legenda dialektu, obsahové části, odstavce UDM a ŽXML, sekce „Nástroje
  JVF / UDM / JŽM", měření používání, balíčky jvf-parser / jvf-cad).
- **CHANGELOG** — položky o UDM a JŽM zůstaly v `[Unreleased]` (s poznámkou
  „Hotové, zatím nevydané"); vydaná verze `[Unreleased]` v historii verzí
  nevypisuje (`ui/changelog.ts`, `__RELEASE_BUILD__`).
- Ukázky a další prvky s `data-mode="udm jzm"` se řídí
  aktivním režimem — beze změny.

## Postup vydání

Viz [TASKS.md](./TASKS.md).

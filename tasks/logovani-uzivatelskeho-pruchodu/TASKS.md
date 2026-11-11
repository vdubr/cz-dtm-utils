# Úkoly: Lepší logování uživatelského průchodu

Detaily v [`README.md`](./README.md). Rozhodnuto (2026-11-04): **PostHog
Cloud EU**, bez cookies a bez souhlasové lišty, měří se jen na produkci
(`cz-dtm-utils.vercel.app`, `VITE_POSTHOG_HOSTS`), klíč v
`jvf_viewer/.env.production`. Implementace: `jvf_viewer/src/analytics.ts`. Po úkolu: zaškrtnout, resume do
`../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [x] **T1 — Modul měření a katalog událostí** — README R1–R3
  - `jvf_viewer/src/analytics.ts`: `trackFeature(event, props?)` nad
    zvoleným nástrojem, typovaný výčet událostí, filtr vlastností (jen
    povolené agregované hodnoty), no-op v dev / e2e / při chybě.
  - **Akceptace:** unit testy (no-op, filtr), build zelený.

- [x] **T2 — Události použití funkcí** — README „Návrh směru"
  - Volání z míst spuštění: nahrání souboru / ukázky, přepnutí režimu,
    kontrola topologie, Přehled prvků, 3D, měření, překryvy DTM / KN,
    vlastník parcely, export do CAD, legenda, info modal.
  - **Závislosti:** T1. **Akceptace:** každá funkce právě jedna událost na
    akci; e2e zelené.

- [x] **T3 — Délka práce s aplikací**
  - Aktivní čas (viditelná stránka) a počet akcí za relaci, odeslání při
    `pagehide` (`sendBeacon`).
  - **Závislosti:** T1. **Akceptace:** ruční ověření na preview.

- [x] **T4 — Info modal (co se měří) + changelog** — README R1
  - **Závislosti:** T1–T3.

---

## Poznámky pro `/make-tasks`

- Nezačínat bez potvrzení nástroje a rozsahu (otevřené otázky v README).
- Nikdy neodesílat obsah souborů, souřadnice, ID prvků ani údaje o parcelách.

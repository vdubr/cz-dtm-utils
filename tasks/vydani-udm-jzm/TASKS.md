# Úkoly — vydání nástrojů UDM a JŽM

- [ ] **T1 — Zapnout nástroj v produkci** — přidat `udm` / `jzm` do
  `RELEASED_APP_MODES` (`jvf_viewer/vite.config.ts`); lze po jednom.
- [ ] **T2 — CHANGELOG** — přesunout odpovídající položky z `[Unreleased]`
  do sekce nové verze (zbylé nástroje nechat v `[Unreleased]`), smazat
  poznámku „Hotové, zatím nevydané", pokud nic nevydaného nezbude.
- [ ] **T3 — Ověřit O aplikaci** — `VITE_RELEASE_BUILD=1 npx vite` →
  texty vydaného nástroje jsou zpět, nevydaného ne; spouštěč má dlaždice.
- [ ] **T4 — e2e** — testy běží se všemi nástroji, projdou beze změny;
  doplnit kontrolu produkčního buildu, pokud se nástroje vydávají po jednom.
- [ ] **T5 — Release** dle CLAUDE.md (verze, tag, GitHub release).

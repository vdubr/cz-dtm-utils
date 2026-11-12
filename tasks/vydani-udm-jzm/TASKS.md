# Úkoly — vydání nástrojů UDM a JŽM

Stav 2026-11-12: **JŽM zpřístupněné** ve větvi `feat/dtmz` (worktree `dtmz`),
čeká na vydání; **UDM** zatím vypnuté.

- [~] **T1 — Zapnout nástroj v produkci** — přidat `udm` / `jzm` do
  `RELEASED_APP_MODES` (`jvf_viewer/vite.config.ts`); lze po jednom.
  - JŽM ✅ (`['jvf', 'jzm']`), UDM ⬜.
  - Texty O aplikaci a popisky spouštěče se skládají podle zapnutých
    nástrojů (`TOOLS`, `DIALECT_TOOLS`, `joinCs` v `ui/infoModal.ts`,
    popisky v `setupAppModeSwitch`), hláška o nepodporovaném formátu
    vyjmenuje zapnuté formáty.
- [~] **T2 — CHANGELOG** — `[Unreleased]` rozdělen: položky JŽM jako běžné
  nevydané změny, položky UDM v podsekci „Nevydané — UDM". Při vydání JŽM
  přesunout vše kromě této podsekce do sekce nové verze. UDM ⬜.
- [~] **T3 — Ověřit O aplikaci** — `VITE_RELEASE_BUILD=1 npx vite` → texty
  JŽM zpět, UDM ne; spouštěč má dlaždice JVF a JŽM. JŽM ✅, UDM ⬜.
- [~] **T4 — e2e** — testy běží se všemi nástroji; kontrola produkčního
  buildu (JVF + JŽM, bez UDM) skriptem při přípravě. UDM ⬜.
- [ ] **T5 — Release** dle CLAUDE.md (verze, tag, GitHub release) — JŽM na
  pokyn uživatele.

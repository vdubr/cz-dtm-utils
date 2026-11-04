# Úkoly: Školicí režim (průvodce aplikací)

Detaily v [`README.md`](./README.md). **Před T1 potvrdit otevřené otázky;
dělat až po zadání `ux-redesign-panelu` (R4).** Po úkolu: zaškrtnout,
resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [ ] **T1 — Engine průvodce** — README R1, R3
  - Overlay se zvýrazněním cíle, popover (text, Další / Zpět / Ukončit,
    klávesnice Esc / šipky), kroky jako data (`src/ui/tour/steps.ts`),
    kotvení přes `id` / `data-tour`.
  - **Akceptace:** funguje v obou motivech a na mobilu (výsuvný panel se
    otevře, je-li cíl v něm); a11y (focus, `aria-*`).

- [ ] **T2 — Kapitoly a texty** — README „Návrh směru", R2
  - Kapitoly nad ukázkovými daty aktivního režimu; texty sdílené s info
    modalem.
  - **Závislosti:** T1.

- [ ] **T3 — Spuštění a stav**
  - Nabídka při první návštěvě, tlačítko v hlavičce / info modalu, výběr
    kapitoly, stav dokončení v `localStorage` (try/catch).
  - **Závislosti:** T1.

- [ ] **T4 — e2e průchod průvodcem** — README R3
  - **Závislosti:** T2, T3.

- [ ] **T5 — Info modal + changelog**
  - **Závislosti:** T1–T4.

---

## Poznámky pro `/make-tasks`

- Nezačínat bez potvrzení podoby (otevřené otázky) a před dokončením #6.

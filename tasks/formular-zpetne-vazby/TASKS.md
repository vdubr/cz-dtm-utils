# Úkoly: Formulář pro zpětnou vazbu

Detaily v [`README.md`](./README.md). **Před T1 potvrdit cíl odesílání
(otevřené otázky).** Po úkolu: zaškrtnout, resume do `../finished/T<N>.md`,
commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [ ] **T1 — Dialog zpětné vazby** — README R1
  - Tlačítko + M3 dialog (typ, text, volitelný e-mail, volitelné technické
    údaje s náhledem), validace, honeypot.
  - **Akceptace:** obě témata, mobil, klávesnice; nic se neodešle bez
    potvrzení.

- [ ] **T2 — Odeslání** — README „Návrh směru", R2
  - Podle zvoleného cíle (Vercel Function / služba / mailto); limit
    četnosti, srozumitelné chybové hlášky.
  - **Závislosti:** T1. **Akceptace:** e2e se stubem, ruční ověření na
    preview.

- [ ] **T3 — Info modal + changelog** — README R3
  - **Závislosti:** T1–T2.

---

## Poznámky pro `/make-tasks`

- Nezačínat bez potvrzení cíle odesílání; tokeny jen v env proměnných
  Vercelu (nastavuje uživatel).

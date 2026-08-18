# pripnuta-hlavicka-kategorie — ✅ hotovo (T1 + T2; T3 volitelné, vynecháno)

> Pozn.: zadání bylo odbaveno ručně mimo `/make-tasks` (na přímý pokyn
> uživatele). Resume pojmenováno slugem zadání, ne `T<N>.md`, aby ve sdíleném
> `tasks/finished/` nekolidovalo s úkoly jiných zadání.

## Co se udělalo
- **T1 — Sticky hlavička (CSS)**: do `.feature-group-header`
  (`jvf_viewer/src/style.css`) přidáno `position: sticky; top: 0; z-index: 2`.
  Stávající neprůhledné pozadí `#1c2128` + `border-bottom` ponecháno. Žádná
  změna v `featuresPanel.ts` ani v DOM (hlavičky jsou ploché sourozence přímo
  ve scroll kontejneru `#features-list`, takže sticky funguje bez wrapperů).
- **T2 — CHANGELOG + info modal**: řádek v `CHANGELOG.md` `[Unreleased] →
  Změněno`; doplněna věta o přišpendlené hlavičce do popisu „Přehled prvků"
  v `jvf_viewer/src/ui/infoModal.ts` (`INFO_CONTENT_HTML`) — pravidlo CLAUDE.md.
- **T3 (volitelné)** — stín přišpendlené hlavičky (IntersectionObserver):
  vynecháno dle rozhodnutí R3, MVP je čistě CSS.

## Ověření (jak otestováno + výsledek)
- `npm run build -w jvf-viewer` — zelený.
- Cílený Playwright test (headless, po ověření smazán): hlavička má
  `position: sticky`, `top: 0px`, `z-index: 2`, pozadí `rgb(28,33,40)`
  (neprůhledné); po scrollu seznamu o 600 px zůstala hlavička na horní hraně
  seznamu (177 → 177 px) → přišpendlení potvrzeno.
- Celá smoke e2e sada (`npm run test:e2e -w jvf-viewer`): **14/14 zelené**,
  bez regrese.

## Další kroky
- Žádné povinné. Volitelně lze později doplnit T3 (jemný stín pod přišpendlenou
  hlavičkou přes IntersectionObserver + `.stuck` třídu).

## Dotčené soubory
- `jvf_viewer/src/style.css` (`.feature-group-header`)
- `jvf_viewer/src/ui/infoModal.ts` (`INFO_CONTENT_HTML`, popis „Přehled prvků")
- `CHANGELOG.md` (`[Unreleased] → Změněno`)

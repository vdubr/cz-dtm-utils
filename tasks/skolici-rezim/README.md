# Zadání: Školicí režim (průvodce aplikací)

Poznámka uživatele (2026-11-04): *„přidat školící mód, kde bude uživatel
proškolen, co aplikace nabízí"*.

Zaevidovaná poznámka — podobu potvrdit s uživatelem před implementací.

## Kontext — současný stav

- Popis funkcí je dnes jen v **info modalu** (`jvf_viewer/src/ui/infoModal.ts`,
  `INFO_CONTENT_HTML`) — dlouhý text, který nový uživatel nemusí najít ani
  přečíst. Ukázková data jsou v nabídce u „Nahrát soubor"
  (`index.html:86–95`, podle režimu).
- Funkcí přibývá (režimy JVF/UDM/JŽM, kontrola topologie, Přehled prvků,
  3D, měření, překryvy DTM ČR a katastru, vlastník parcely, export do CAD,
  legendy) — bez průvodce zůstávají neobjevené.

## Návrh směru (k potvrzení)

- **Průvodce krok za krokem** (tour): zvýrazní ovládací prvek, krátký text
  a tlačítka Další / Zpět / Ukončit; postup nad **ukázkovými daty**
  (automaticky načte ukázku aktivního režimu), aby šlo funkce hned zkusit.
- Kapitoly (lze spustit jednotlivě): Načtení dat a projekty · Mapa a vrstvy ·
  Přehled prvků · Kontrola topologie · 3D · Měření · Překryvy DTM / KN
  a vlastník parcely · Export do CAD · Režimy UDM / JŽM.
- Spuštění: při první návštěvě nabídka („Ukázat, co aplikace umí?"),
  jinak tlačítko v hlavičce / v info modalu. Stav dokončení jen
  v `localStorage` (per-viewer pohodlí, v try/catch).
- Vlastní lehká implementace (overlay + popover), nebo knihovna z povolené
  CDN / npm (např. driver.js) — rozhodnout v T1.

## Rozhodnutí (závazná)

- **R1** Průvodce nesmí měnit uživatelova data — při načtené vlastní práci
  se nejdřív zeptat (stejně jako přepnutí režimu).
- **R2** Texty česky, sdílené s info modalem tam, kde jde o stejný popis
  (jeden zdroj pravdy, aby se nerozcházely).
- **R3** Kotvení na stabilní selektory (`id` / `data-tour`), e2e test
  projde celým průvodcem — při změně UI se pozná rozbitý krok.
- **R4** Závisí na zadání `ux-redesign-panelu` (#6): dělat **po něm**, jinak
  se kroky přepisují dvakrát.

## Otevřené otázky (potvrdit před T1)

1. Interaktivní tour nad ukázkovými daty, nebo spíš krátká videa / GIFy
   v info modalu?
2. Které kapitoly jsou priorita?
3. Nabízet průvodce automaticky při první návštěvě?

## Verifikace

- e2e: průvodce projde všemi kroky (každý cíl existuje a je viditelný),
  ukončení vrátí aplikaci do původního stavu; snímky v obou motivech
  a na mobilu.

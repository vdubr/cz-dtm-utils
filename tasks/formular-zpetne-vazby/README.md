# Zadání: Formulář pro zpětnou vazbu

Poznámka uživatele (2026-11-04): *„přidat form pro zpětnou vazbu"*.

Zaevidovaná poznámka — kam se odpovědi ukládají, potvrdit s uživatelem
před implementací.

## Kontext — současný stav

- Viewer nemá žádný kanál pro zpětnou vazbu; kontakt je jen odkaz na
  LinkedIn autora v patičce panelu („Made by …").
- Aplikace je statický web na Vercelu (`vercel.json`, build
  `npm run build`); backend zatím není. Data uživatele se zpracovávají
  lokálně a nic se neodesílá — formulář bude první odesílání dat, proto
  musí být zřejmé, co se odesílá.

## Návrh směru (k potvrzení)

- Tlačítko „Zpětná vazba" (hlavička nebo patička panelu) otevře dialog
  (M3, vzor `ui/confirmModal.ts`): typ (chyba / návrh / pochvala / jiné),
  text, volitelně e-mail pro odpověď, volitelně technické údaje (verze
  aplikace, commit, režim, verze JVF, prohlížeč) — zaškrtávací, s náhledem
  toho, co se odešle.
- Cíl odeslání — varianty:
  - **Vercel Function** (`/api/feedback`) → e-mail nebo GitHub issue
    (token v env proměnné Vercelu, ne v repu),
  - služba formulářů (Formspree apod.),
  - jen `mailto:` s předvyplněným textem (bez backendu).
- Ochrana proti spamu: honeypot pole + limit četnosti na straně funkce.

## Rozhodnutí (závazná)

- **R1** Nikdy neodesílat obsah nahraných souborů, souřadnice ani ID prvků;
  technické údaje jen se souhlasem (zaškrtávací pole) a s náhledem.
- **R2** Žádné tokeny / klíče v repozitáři ani v klientském kódu.
- **R3** Info modal (zmínka o formuláři a co se odesílá) + CHANGELOG.

## Otevřené otázky (potvrdit před T1)

1. Kam mají odpovědi chodit (e-mail, GitHub issues, tabulka, služba
   formulářů)?
2. Povinný e-mail, nebo anonymní zpětná vazba?
3. Umístění tlačítka (hlavička, patička panelu, info modal)?

## Verifikace

- e2e: dialog se otevře, validace, odeslání se stubem (`page.route`),
  potvrzení / chybová hláška; bez sítě se aplikace nerozbije.

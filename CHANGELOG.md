# Changelog

Všechny významné změny tohoto projektu jsou dokumentovány v tomto souboru.

Formát vychází z [Keep a Changelog](https://keepachangelog.com/cs/1.1.0/),
verzování používá [CalVer](https://calver.org/) ve tvaru `YYYY.MM.DD`.

## [Unreleased]

### Přidáno

- Legenda všech ~360 objektových typů DTM 1.4.3 v novém modalu (ikona
  `legend_toggle` vedle nadpisu „JVF vrstvy" v levém panelu). Reprezentativní
  swatch pro každý typ (bod / linie / polygon), fulltext filtr podle názvu,
  kódu nebo kategorie.
- Klikatelný odkaz na LinkedIn v patičce levého panelu (jméno autora
  s ikonou v oficiální barvě).
- Sekce „Pro vývojáře" v modalu „O aplikaci" s odkazem na GitHub a popisem
  čtyř workspace balíčků (`jvf-dtm-types`, `jvf-parser`, `jvf-topology`,
  `jvf-viewer`).
- Sekce „Charakter projektu" v modalu „O aplikaci" — explicitní označení
  jako rekreačního projektu, který nenahrazuje oficiální přejímku v IS DMVS.
- Sekce „Verze JVF DTM" v modalu „O aplikaci" — popis přepínače verze,
  chování při neshodě verze souboru a při přepnutí nad načtenými daty.
- Přepínač aktivní verze JVF DTM v hlavičce. Po nahrání souboru se
  kontroluje shoda atributu `verze` s aktivní verzí; při neshodě se soubor
  nenačte a zobrazí se modal s nabídkou přepnutí verze nebo volby jiného
  souboru.
- Geodeticky korektní velikost SVG symbolů ve 2D i 3D — 1 SVG-pixel
  odpovídá 0,5 cm v terénu (referenční měřítko 1:500). Symboly se
  přibližují / oddalují s mapou jako linie a polygony. Při velkém oddálení
  (resolution > 4 m/px ve 2D, radius > 150 m ve 3D) se symbol nahrazuje
  malou tečkou, případně skrývá.
- LICENSE MIT v rootu repozitáře a `license` / `author` / `repository`
  pole ve všech `package.json`.

### Změněno

- Plynulé škálování symbolů během zoomu — `VectorLayer` má nyní zapnuté
  `updateWhileInteracting` a `updateWhileAnimating`, takže se velikost
  ikon mění během gesta, ne až po jeho dokončení.
- 3D sprite materiál má `depthTest: true` (předtím `false`) — sprity se
  korektně překrývají s ostatní 3D geometrií.
- Diakritika v UI textech (`Prohlížeč`, `Načítám…`, `Základní mapa` apod.).

### Opraveno

- Chyba v `symbology.ts`: `strokeWidth: 246236222.0` u typu `0100000009`
  (cyklostezka) opravena na `0.25` mm — outlier z původní extrakce
  Katalogu DTM.
- Detekce `DefinicniBod` v `jvf-parser` a duplicita bodů v `MultiCurve`
  geometriích.
- 3D canvas se po zavření error panelu / přepnutí 2D → 3D nyní správně
  roztáhne na celou plochu (sekvence resize událostí v `requestAnimationFrame`).
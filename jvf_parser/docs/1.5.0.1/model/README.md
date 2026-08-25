## Přehled

- Model JVF je strojově čitelný popis typů objektů JVF, který je možné využít pro automatizaci v oblasti tvorby / zpracování JVF
- Je definován sadou YAML souborů
- XSD JVF je automaticky odvozeno od tohoto modelu, díky čemuž je zajištěna jejich vzájemná konzistence

## Struktura modelu

- `jvf.yaml` – vstupní bod modelu - obsahuje seznamy všech atributů (`atributy`), sad atributů (`sadyAtributu`) a typů objektů (`typyObjektu`)
- `namespaces.yaml` – registr všech jmenných prostorů používaných typy a atributy
- `typy-prvku.yaml` – číselník kategorií a skupin prvků
- `atributy/*.yaml` – sdílená definice atributů objektů (např. `ID.yaml`, `Bod2D.yaml`, `TypUsekuPozemniKomunikace.yaml`)
- `sady-atributu/*.yaml` – opakovaně použitelné skupiny atributů (např. `SpolecneAtributyVsechObjektu.yaml`, `GeometrieObjektuLinie3D.yaml`)
- `typy-objektu/*.yaml` – definice jednotlivých typů objektů (např. `OsaPozemniKomunikace.yaml`)

## Namespaces (`namespaces.yaml`)

**Definice jmenných prostorů, do kterých je každý typ/atribut zařazen.** 

Záznam namespace se skládá z:

  - `id` – interní identifikátor  (např. `gml`)
  - `prefix` – textový prefix pro XML serializaci
  - `namespace` – název/prostor (u GML je to např. `http://www.opengis.net/gml/3.2`)

## Typy prvků (`typy-prvku.yaml`)

**Hiearchický číselník kategorií a skupin typů prvků.**

První úroveň obsahuje záznamy kategorií prvků složené z:

  - `id` – interní identifikátor
  - `nazev` - název kategorie prvků
  - `skupinyPrvku` - seznam podřízených skupin prvků:
    - `id` – interní identifikátor
    - `nazev` - název skupiny prvků

## Atributy (`atributy/*.yaml`)

**Sdílená definice atributu objektu.**

Záznam atributu se skládá z:
  - `id` – interní identifikátor atributu (např. `ICS`)
  - `namespace` – odkaz na záznam v `namespaces.yaml` (např. `atr`, `cmn`)
  - `popis` – popis atributu
  - `nillable` – zda je možné atribut zaslat prázdný/nevyplněný
  - `typ` – datový typ (`String`,`Integer`,`Boolean`,`Date`,`DateTime`,`Geometry`,`Vycet`)
  - Další parametry dle datového typu (viz. níže)

### Datové typy a parametry atributů:

- `String`
  - Textový řetězec
  - Parametry: 
    - `maxDelka` (maximální počet znaků)

- `Integer`
  - Celé číslo
  - Parametry: 
    - `min` (minimální povolená hodnota)
    - `max` (maximální povolená hodnota)

- `Boolean`
  - Logická hodnota `true/false`

- `Date`
  - Datum

- `DateTime`
  - Datum a čas

- `Geometry`
  - Geometrie
  - Parametry:
    - `typGeometrie` – (`pointProperty`,`curveProperty`,`surfaceProperty`,`LineString`,`Polygon`)
    - `dim` – rozměr souřadnic (2 nebo 3)

- `Vycet`
  - Výčtový typ s definovanými hodnotami
  - Parametry:
    - `polozky` – seznam položek, kde:
      - `hodnota` je kód (číslo) 
      - `popis` je popis položky.

## Sady atributů (`sady-atributu/*.yaml`)

**Sdílená definice sad atributů objektu.**
Umožňují opakovaně vkládat více atributů najednou do typů objektů.

Záznam sady atributů se skládá z:
  - `id` – interní identifikátor sady atributů (např. `SpolecneAtributyVsechObjektu`)
  - `namespace` - odkaz na záznam v `namespaces.yaml` (např. `atr`, `cmn`)
  - `popis` - popis atributu
  - `atributy` – seznam atributů s klíči:
    - `id`
    - `atribut` (odkaz na soubor v `atributy/`)
    - `volitelny` 
  - `kontexty` – definují, které položky obsahu se používají v konkrétních kontextech:
    - `Ref`, `RefV`, `RefN` – výstup
    - `Ins` – vklad
    - `Upd` – aktualizace
    - `Del` – mazání
    
    Každý kontext obsahuje `obsah` s jednotlivými položkami (a jejich povinnostmi).

## Typy objektů (`typy-objektu/*.yaml`)

**Definice typu objektu JVF.**

Záznam typu objektu se skládá z:
  - `id` - interní identifikátor typu objektu (např. `ChodnikPlocha`)
  - `namespace` - odkaz na záznam v `namespaces.yaml` (např. `chopol`)
  - `nazev` - název typu objektu
  - `skupinaPrvku` - odkaz na skupiny z `typy-prvku.yaml`
  - `obsahovaCast` (např. `DI`, `TI`, `ZPS`, `PSPI`).
  - `typGeometrie` (`Bod`, `Linie`, `Plocha`)
  - `dim` - 2D/3D
  - `code` - číselný kód typu prvku
  - `gia` - 1 pokud je prvek GIA
  - `obsah` je seznam atributů a sad atributů objektu:
    - `typ: sada` – odkaz na sadu atributů přes `sada: <id_sady>`
    - `typ: atribut` – přímé vložení atributu přes `atribut: <id_atributu>`
  - `kontexty` – definují, které položky obsahu se používají v konkrétních kontextech:
    - `Ref`, `RefV`, `RefN` – výstup
    - `Ins` – vklad
    - `Upd` – aktualizace
    - `Del` – mazání


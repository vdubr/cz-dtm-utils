// Auto-generated from „Struktura UDM 2.1.1.xlsx" (ČKZ) — DO NOT EDIT
// Regenerate: python3 jvf_viewer/scripts/build-udm-symbology.py
//
// Vzhled objektů UDM nad rámec DTM (code_base 94…). Barvy UDM jsou
// navržené pro tmavé pozadí — bílá → černá, světlé odstíny ztmavené.

import type { ObjectSymbology } from './symbology.js';
import type { VariantAttrMapEntry } from './variantAttrMap.js';

export const UDM_SYMBOLOGY: Record<string, ObjectSymbology> = {
  "9400001001": {
    "code": "9400001001",
    "objectType": "dopravní zařízení",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#00a6a6",
    "fillColor": "#00a6a633"
  },
  "9400001002": {
    "code": "9400001002",
    "objectType": "informační a telematické zařízení",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#a68c00",
    "fillColor": "#a68c0033"
  },
  "9400001003": {
    "code": "9400001003",
    "objectType": "objekt železniční dopravy",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#656ea6",
    "fillColor": "#656ea633"
  },
  "9400001004": {
    "code": "9400001004",
    "objectType": "odpočívka",
    "containsPart": "DIUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.25,
    "strokeColor": "#00a6a6",
    "fillColor": "#00a6a633"
  },
  "9400001005": {
    "code": "9400001005",
    "objectType": "osa jízdního pruhu",
    "containsPart": "DIUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.13,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001006": {
    "code": "9400001006",
    "objectType": "osa stavby",
    "containsPart": "DIUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.13,
    "strokeColor": "#a52a2a",
    "fillColor": "#a52a2a33"
  },
  "9400001007": {
    "code": "9400001007",
    "objectType": "popisy DI",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#00a6a6",
    "fillColor": "#00a6a633"
  },
  "9400001008": {
    "code": "9400001008",
    "objectType": "proměnné dopr. značky a zařízení provozních informací",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001009": {
    "code": "9400001009",
    "objectType": "SDZ - typ A - výstražné",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001010": {
    "code": "9400001010",
    "objectType": "SDZ - typ A-Z - výstražné-železnice",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001011": {
    "code": "9400001011",
    "objectType": "SDZ - typ C - příkazové",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001012": {
    "code": "9400001012",
    "objectType": "SDZ - typ E - dodatkové tabule",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001013": {
    "code": "9400001013",
    "objectType": "SDZ - typ IJ - informativní jiné",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001014": {
    "code": "9400001014",
    "objectType": "SDZ - typ IP - informativní provozní",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001015": {
    "code": "9400001015",
    "objectType": "SDZ - typ IP-P - informativní provozní-parkoviště",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001016": {
    "code": "9400001016",
    "objectType": "SDZ - typ IS-N - informativní směrové-návěsti",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001017": {
    "code": "9400001017",
    "objectType": "SDZ - typ IS - informativní směrové-ostatní",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001018": {
    "code": "9400001018",
    "objectType": "SDZ - typ IS-S - informativní směrové-směrovky",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001019": {
    "code": "9400001019",
    "objectType": "SDZ - typ IZ - informativní zónové",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001020": {
    "code": "9400001020",
    "objectType": "SDZ - typ P - přednosti",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001021": {
    "code": "9400001021",
    "objectType": "SDZ - typ B - zákazové",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001022": {
    "code": "9400001022",
    "objectType": "staničení",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001023": {
    "code": "9400001023",
    "objectType": "světelné a akustické signály",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#a68c00",
    "fillColor": "#a68c0033"
  },
  "9400001024": {
    "code": "9400001024",
    "objectType": "vodorovné dopravní značení",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#91a6a6",
    "fillColor": "#91a6a633"
  },
  "9400001026": {
    "code": "9400001026",
    "objectType": "doplněk katastru",
    "containsPart": "OST",
    "geometryType": "Linie",
    "variants": [
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "BEPJ",
        "strokeColor": "#a66b00",
        "fillColor": "#a66b0033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "dočasný zábor",
        "strokeColor": "#800080",
        "fillColor": "#80008033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "návrh hranice",
        "strokeColor": "#00a600",
        "fillColor": "#00a60033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "návrh VB",
        "strokeColor": "#a66b00",
        "fillColor": "#a66b0033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "PUPLF",
        "strokeColor": "#00a600",
        "fillColor": "#00a60033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "rušená hranice",
        "strokeColor": "#808080",
        "fillColor": "#80808033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "trvalý zábor",
        "strokeColor": "#9b549b",
        "fillColor": "#9b549b33"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "neurčeno",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypHraniceKatastru",
        "attrValue": "jiný",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      }
    ]
  },
  "9400001027": {
    "code": "9400001027",
    "objectType": "geodetické body",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#ff0000",
    "fillColor": "#ff000033"
  },
  "9400001028": {
    "code": "9400001028",
    "objectType": "katastr dle VFK",
    "containsPart": "OST",
    "geometryType": "Linie",
    "variants": [
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "parcelní hranice",
        "strokeColor": "#00a600",
        "fillColor": "#00a60033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "hranice katastrální",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "hranice krajská",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "hranice obecní",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "hranice okresní",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "hranice státní",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "hranice zjednodušené evidence",
        "strokeColor": "#00a6a6",
        "fillColor": "#00a6a633"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "vnitřní kresba",
        "strokeColor": "#a6a600",
        "fillColor": "#a6a60033"
      },
      {
        "attrKey": "TypKatastralniHranice",
        "attrValue": "nezjištěno",
        "strokeColor": "#00a600",
        "fillColor": "#00a60033"
      }
    ]
  },
  "9400001029": {
    "code": "9400001029",
    "objectType": "názvy",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "variants": [
      {
        "attrKey": "TypNazvu",
        "attrValue": "číslo evidenční",
        "strokeColor": "#ff7f00",
        "fillColor": "#ff7f0033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "číslo orientační",
        "strokeColor": "#00aaff",
        "fillColor": "#00aaff33"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "číslo popisné",
        "strokeColor": "#ff00dc",
        "fillColor": "#ff00dc33"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "číslo popisné/orientační",
        "strokeColor": "#ff00dc",
        "fillColor": "#ff00dc33"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "město, obec, čtvrť",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "místní název",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "název katastrálního území",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "název objektu",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "název přírodního objektu",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "název ulice, silnice",
        "strokeColor": "#00a6a6",
        "fillColor": "#00a6a633"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "název vodní plochy, toku",
        "strokeColor": "#5383a6",
        "fillColor": "#5383a633"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "název vrcholu",
        "strokeColor": "#d2691e",
        "fillColor": "#d2691e33"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "oblast",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "osada",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "parcelní číslo - pozemkové",
        "strokeColor": "#a6a600",
        "fillColor": "#a6a60033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "parcelní číslo - stavební",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "parcelní číslo - zjednodušená evidence",
        "strokeColor": "#00a6a6",
        "fillColor": "#00a6a633"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "pomístní název",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "popis objektu",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "popis plochy",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNazvu",
        "attrValue": "jiný",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      }
    ]
  },
  "9400001030": {
    "code": "9400001030",
    "objectType": "neviditelné hranice",
    "containsPart": "OST",
    "geometryType": "Linie",
    "strokeWidth": 0.13,
    "variants": [
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "bezpečnostní pásmo",
        "strokeColor": "#ff0000",
        "fillColor": "#ff000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "dobývací prostor",
        "strokeColor": "#a68c00",
        "fillColor": "#a68c0033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "evropsky významná lokalita",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "hranice údržby",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "hranice vodního zdroje",
        "strokeColor": "#0000ff",
        "fillColor": "#0000ff33"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "hranice zastavěného území",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "chráněná krajinná oblast",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "národní park",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "národní přírodní památka",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "nemovitá kulturní památka",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "nemovitá národní kulturní památka",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "ochranné pásmo I. stupně léčivých zdroj",
        "strokeColor": "#0000ff",
        "fillColor": "#0000ff33"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "ochranné pásmo II. stupně léčivých zdrojů",
        "strokeColor": "#0000ff",
        "fillColor": "#0000ff33"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "ochranné pásmo lesa",
        "strokeColor": "#00a65e",
        "fillColor": "#00a65e33"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "památková rezervace",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "památková zóna",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "pásmo hygienické ochrany",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "plocha meliorace (obvod)",
        "strokeColor": "#3da4ff",
        "fillColor": "#3da4ff33"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "přírodní památka",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "přírodní rezervace",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "ptačí oblast",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "zvláště chráněné území",
        "strokeColor": "#31a600",
        "fillColor": "#31a60033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "nezjištěno",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypNeviditelneHranice",
        "attrValue": "jiný",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      }
    ]
  },
  "9400001031": {
    "code": "9400001031",
    "objectType": "obecné poznámky",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001032": {
    "code": "9400001032",
    "objectType": "podrobný bod - číslo",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#800080",
    "fillColor": "#80008033"
  },
  "9400001033": {
    "code": "9400001033",
    "objectType": "podrobný bod - kód",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001034": {
    "code": "9400001034",
    "objectType": "podrobný bod - výška",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#d2691e",
    "fillColor": "#d2691e33"
  },
  "9400001035": {
    "code": "9400001035",
    "objectType": "popisy směrů",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001036": {
    "code": "9400001036",
    "objectType": "šrafy",
    "containsPart": "OST",
    "geometryType": "Linie",
    "strokeWidth": 0.13,
    "strokeColor": "#d2691e",
    "fillColor": "#d2691e33"
  },
  "9400001037": {
    "code": "9400001037",
    "objectType": "trojúhelníková síť",
    "containsPart": "OST",
    "geometryType": "Plocha",
    "strokeWidth": 0.13,
    "strokeColor": "#a6a285",
    "fillColor": "#a6a28533"
  },
  "9400001038": {
    "code": "9400001038",
    "objectType": "vrstevnice - popis",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#d2691e",
    "fillColor": "#d2691e33"
  },
  "9400001039": {
    "code": "9400001039",
    "objectType": "zájmová (pomocná) plocha",
    "containsPart": "OST",
    "geometryType": "Plocha",
    "strokeWidth": 0.5,
    "strokeColor": "#ff0000",
    "fillColor": "#ff000033"
  },
  "9400001040": {
    "code": "9400001040",
    "objectType": "objekt nad rámec DTM - EK",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#c500ff",
    "fillColor": "#c500ff33"
  },
  "9400001041": {
    "code": "9400001041",
    "objectType": "objekt nad rámec DTM - elektrické vedení",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#e60000",
    "fillColor": "#e6000033"
  },
  "9400001042": {
    "code": "9400001042",
    "objectType": "objekt nad rámec DTM - stoková síť",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#ff7f00",
    "fillColor": "#ff7f0033"
  },
  "9400001043": {
    "code": "9400001043",
    "objectType": "objekt nad rámec DTM - kolektory",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001044": {
    "code": "9400001044",
    "objectType": "objekt nad rámec DTM - plynovody",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#a6a600",
    "fillColor": "#a6a60033"
  },
  "9400001045": {
    "code": "9400001045",
    "objectType": "objekt nad rámec DTM - produktovody",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#9f9122",
    "fillColor": "#9f912233"
  },
  "9400001046": {
    "code": "9400001046",
    "objectType": "objekt nad rámec DTM - teplovody",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#ff006e",
    "fillColor": "#ff006e33"
  },
  "9400001047": {
    "code": "9400001047",
    "objectType": "objekt nad rámec DTM - vodovody",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#005ce6",
    "fillColor": "#005ce633"
  },
  "9400001048": {
    "code": "9400001048",
    "objectType": "objekt nad rámec DTM - zařízení staveb",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001049": {
    "code": "9400001049",
    "objectType": "objekt zabezpečení a požární ochrany",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#fa8072",
    "fillColor": "#fa807233"
  },
  "9400001050": {
    "code": "9400001050",
    "objectType": "obvod objektu TI",
    "containsPart": "TIUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001051": {
    "code": "9400001051",
    "objectType": "popisy TI",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001052": {
    "code": "9400001052",
    "objectType": "světelné místo",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#ed7694",
    "fillColor": "#ed769433"
  },
  "9400001053": {
    "code": "9400001053",
    "objectType": "trasa kynety",
    "containsPart": "TIUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.25,
    "strokeColor": "#a52a2a",
    "fillColor": "#a52a2a33"
  },
  "9400001054": {
    "code": "9400001054",
    "objectType": "bodový prvek na budově",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#9b549b",
    "fillColor": "#9b549b33"
  },
  "9400001055": {
    "code": "9400001055",
    "objectType": "důlní objekt",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#a68c00",
    "fillColor": "#a68c0033"
  },
  "9400001056": {
    "code": "9400001056",
    "objectType": "hrobové místo",
    "containsPart": "ZPSUDM",
    "geometryType": "Linie",
    "strokeColor": "#808000",
    "fillColor": "#80800033"
  },
  "9400001057": {
    "code": "9400001057",
    "objectType": "keř",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#00a600",
    "fillColor": "#00a60033"
  },
  "9400001058": {
    "code": "9400001058",
    "objectType": "komunální a tříděný odpad",
    "containsPart": "ZPSUDM",
    "geometryType": "Linie",
    "strokeColor": "#7b7746",
    "fillColor": "#7b774633"
  },
  "9400001059": {
    "code": "9400001059",
    "objectType": "liniový prvek zeleně",
    "containsPart": "ZPSUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.13,
    "strokeColor": "#00a600",
    "fillColor": "#00a60033"
  },
  "9400001060": {
    "code": "9400001060",
    "objectType": "mobiliář",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#9b549b",
    "fillColor": "#9b549b33"
  },
  "9400001062": {
    "code": "9400001062",
    "objectType": "ostatní mapové značky",
    "containsPart": "OST",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001063": {
    "code": "9400001063",
    "objectType": "popisy ZPS",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001064": {
    "code": "9400001064",
    "objectType": "průběh technologické konstrukce",
    "containsPart": "ZPSUDM",
    "geometryType": "Linie",
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  },
  "9400001065": {
    "code": "9400001065",
    "objectType": "schody (stupně)",
    "containsPart": "ZPSUDM",
    "geometryType": "Linie",
    "strokeWidth": 0.13,
    "strokeColor": "#a67c7c",
    "fillColor": "#a67c7c33"
  },
  "9400001066": {
    "code": "9400001066",
    "objectType": "strom",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#00a600",
    "fillColor": "#00a60033"
  },
  "9400001067": {
    "code": "9400001067",
    "objectType": "únikový východ",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#a68c00",
    "fillColor": "#a68c0033"
  },
  "9400001068": {
    "code": "9400001068",
    "objectType": "vodohospodářské stavby nad rámec DTM",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#0000ff",
    "fillColor": "#0000ff33"
  },
  "9400001069": {
    "code": "9400001069",
    "objectType": "podrobný geodetický bod DI",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#00a6a6",
    "fillColor": "#00a6a633"
  },
  "9400001070": {
    "code": "9400001070",
    "objectType": "podrobný geodetický bod TI",
    "containsPart": "TIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "variants": [
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - elektronická komunikace",
        "strokeColor": "#c500ff",
        "fillColor": "#c500ff33"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - elektrická síť",
        "strokeColor": "#e60000",
        "fillColor": "#e6000033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - kanalizace",
        "strokeColor": "#ff7f00",
        "fillColor": "#ff7f0033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - plynovod",
        "strokeColor": "#a6a600",
        "fillColor": "#a6a60033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - produktovod",
        "strokeColor": "#9f9122",
        "fillColor": "#9f912233"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - sdílená stavba",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - teplovod",
        "strokeColor": "#ff006e",
        "fillColor": "#ff006e33"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - vodovod",
        "strokeColor": "#005ce6",
        "fillColor": "#005ce633"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "TI - zařízení",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "nezjištěno",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "neurčeno",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      },
      {
        "attrKey": "TypPodrobnehoBoduTI",
        "attrValue": "jiný",
        "strokeColor": "#000000",
        "fillColor": "#00000033"
      }
    ]
  },
  "9400001071": {
    "code": "9400001071",
    "objectType": "podrobný geodetický bod ZPS nad rámec DTM",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#678ba6",
    "fillColor": "#678ba633"
  },
  "9400001072": {
    "code": "9400001072",
    "objectType": "objekt tramvajové dopravy",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#656ea6",
    "fillColor": "#656ea633"
  },
  "9400001073": {
    "code": "9400001073",
    "objectType": "objekt trolejbusové dopravy",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#656ea6",
    "fillColor": "#656ea633"
  },
  "9400001074": {
    "code": "9400001074",
    "objectType": "objekt lanove dopravy",
    "containsPart": "DIUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#656ea6",
    "fillColor": "#656ea633"
  },
  "9400001075": {
    "code": "9400001075",
    "objectType": "zakládání a sanace",
    "containsPart": "ZPSUDM",
    "geometryType": "Bod",
    "strokeWidth": 0.25,
    "strokeColor": "#000000",
    "fillColor": "#00000033"
  }
};

export const UDM_VARIANT_ATTR: Record<string, VariantAttrMapEntry> = {
  "9400001026": {
    "attrName": "TypHraniceKatastru",
    "valueToVariantIndex": {
      "500": 0,
      "501": 1,
      "502": 2,
      "503": 3,
      "504": 4,
      "505": 5,
      "506": 6,
      "901": 7,
      "902": 8
    }
  },
  "9400001028": {
    "attrName": "TypKatastralniHranice",
    "valueToVariantIndex": {
      "500": 0,
      "501": 1,
      "502": 2,
      "503": 3,
      "504": 4,
      "505": 5,
      "506": 6,
      "507": 7,
      "900": 8
    }
  },
  "9400001029": {
    "attrName": "TypNazvu",
    "valueToVariantIndex": {
      "500": 0,
      "501": 1,
      "502": 2,
      "503": 3,
      "504": 4,
      "505": 5,
      "506": 6,
      "507": 7,
      "508": 8,
      "509": 9,
      "510": 10,
      "511": 11,
      "512": 12,
      "513": 13,
      "514": 14,
      "515": 15,
      "516": 16,
      "517": 17,
      "518": 18,
      "519": 19,
      "902": 20
    }
  },
  "9400001030": {
    "attrName": "TypNeviditelneHranice",
    "valueToVariantIndex": {
      "500": 0,
      "501": 1,
      "502": 2,
      "503": 3,
      "504": 4,
      "505": 5,
      "506": 6,
      "507": 7,
      "508": 8,
      "509": 9,
      "510": 10,
      "511": 11,
      "512": 12,
      "513": 13,
      "514": 14,
      "515": 15,
      "516": 16,
      "517": 17,
      "518": 18,
      "519": 19,
      "520": 20,
      "521": 21,
      "900": 22,
      "902": 23
    }
  },
  "9400001070": {
    "attrName": "TypPodrobnehoBoduTI",
    "valueToVariantIndex": {
      "502": 0,
      "503": 1,
      "504": 2,
      "505": 3,
      "506": 4,
      "507": 5,
      "508": 6,
      "509": 7,
      "510": 8,
      "900": 9,
      "901": 10,
      "902": 11
    }
  }
};

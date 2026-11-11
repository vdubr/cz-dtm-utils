#!/usr/bin/env python3
"""
Výtah symbologie SŽ (SLD) z exportu logického datového modelu DTMŽ.

Zdroj: `istem_export_LDM_<verze>.sqlite` z balíku „Datový model DTMŽ" (web SŽ,
viz jvf_parser/docs/zxml-1.5.1.6/sld/README.md). Tabulka `CS_OBJEKT_DTM`
nese u každého objektu styl OGC SLD (`SLD_STYLE`, FeatureTypeStyle), jímž
objekty kreslí portál ISTEM — barvy, čárkování, značky jako inline SVG,
pravidla podle hodnot atributů (`PropertyName` = `CS_ATR_OBJEKT_DTM.KOD`,
`Literal` = kód hodnoty číselníku `CS_REFKODY_DOMEN.KOD`).

Ukládají se platné objekty SŽ (`999…`) a objekty JVF, jejichž styl má pravidla
na **rozšíření číselníků SŽ** — hodnoty, které JVF nezná (`JVF_XSD_KOD` chybí
nebo se liší od kódu v ŽXML `XSD_KOD`, např. kabelová rezerva u zařízení
elektrické sítě → JVF 98 „jiné"). Ostatní vzhled objektů JVF má ISTEM shodný
s Katalogem DTM ČR, viewer je kreslí Katalogem.

Výstup: jvf_parser/docs/zxml-1.5.1.6/sld/sld-styles.json
  {source,
   objects: {"<codeBase>-<geometrie>": {name, element, part, sld}},
   attributes: {"<KOD>": {xmlLeaf, name, dataType}},
   values: {"<KOD>": {xsd, jvf, name, valid}}   hodnoty z filtrů SLD
                                          (jvf ≠ xsd → rozšíření SŽ, valid = platná)}

Spuštění z rootu repa:
    python3 scripts/zxml/extract-sld.py <cesta>/istem_export_LDM_1502_V23.sqlite
"""
import json
import re
import sqlite3
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import DOCS  # noqa: E402

OUT = DOCS / 'sld' / 'sld-styles.json'
VALID = "PLATNOST_DO LIKE '3000%'"


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    db = sqlite3.connect(f'file:{src}?mode=ro', uri=True)
    values: dict[str, dict] = {}
    for kod, xsd, jvf, name, do in db.execute(
            "SELECT KOD, XSD_KOD, JVF_XSD_KOD, NAZEV, PLATNOST_DO FROM CS_REFKODY_DOMEN"):
        values[str(kod)] = {'xsd': str(xsd or ''), 'jvf': str(jvf or ''), 'name': name,
                            'valid': do.startswith('3000')}
    extension = {k for k, v in values.items() if v['valid'] and v['jvf'] != v['xsd']}

    objects: dict[str, dict] = {}
    props: set[str] = set()
    literals: set[str] = set()
    n_sz = n_jvf = 0
    for code, geom, name, element, part, sld in db.execute(
            "SELECT OBJEKT_KOD_NAZEV, GEOM_KOD, TYP, XML_ELEMENT_NAME, OBSAHOVA_CAST, SLD_STYLE "
            f"FROM CS_OBJEKT_DTM WHERE {VALID} AND SLD_STYLE <> '' ORDER BY OBJEKT_KOD_NAZEV, GEOM_KOD"):
        lits = set(re.findall(r'<Literal>([^<]*)</Literal>', sld))
        if not code.startswith('999'):
            if not code.startswith('0100') or not lits & extension:
                continue
            n_jvf += 1
        else:
            n_sz += 1
        key = f'{code}-{geom:02d}'
        if key in objects:
            sys.exit(f'duplicitní objekt {key}')
        objects[key] = {'name': name, 'element': element, 'part': part, 'sld': sld}
        props.update(re.findall(r'<PropertyName>(\d+)</PropertyName>', sld))
        literals.update(lits)
    attributes: dict[str, dict] = {}
    for kod, leaf, name, dtype in db.execute(
            f"SELECT KOD, XML_ELEMENT_NAME, ATRIBUT_NAZEV, DATA_TYPE FROM CS_ATR_OBJEKT_DTM "
            f"WHERE KOD IN ({','.join(sorted(props)) or 'NULL'})"):
        attributes[str(kod)] = {'xmlLeaf': (leaf or '').lstrip('/'), 'name': name, 'dataType': dtype}
    missing = props - set(attributes)
    if missing:
        print(f'  WARN: atributy v SLD bez záznamu v CS_ATR_OBJEKT_DTM: {sorted(missing)}', file=sys.stderr)
    used_values = {k: values[k] for k in sorted(literals & set(values), key=int)}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({'source': src.name, 'objects': objects,
                               'attributes': dict(sorted(attributes.items(), key=lambda kv: int(kv[0]))),
                               'values': used_values},
                              ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(f'{n_sz} objektů SŽ a {n_jvf} objektů JVF s rozšířením číselníků SŽ, {len(attributes)} atributů, '
          f'{len(used_values)} hodnot ({len(set(used_values) & extension)} rozšíření) → {OUT.relative_to(DOCS.parents[2])}')


if __name__ == '__main__':
    main()

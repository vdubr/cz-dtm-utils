#!/usr/bin/env python3
"""
Mapa atributů a hodnot číselníků z LDM DTMŽ (SZ_LDM_1.5.0.2_V23.xlsx, list `export`).

Styly SLD (export LDM) odkazují na atributy a hodnoty číselníků jejich interními
kódy IS DTMŽ (`PropertyName` 100447 = řádek atributu objektu, `Literal` 100159 =
kód hodnoty). Instance
ŽXML ale nesou název XML elementu (`TypKoleje`) a kód hodnoty dle XSD. Tato
mapa propojuje obojí:

  codeDtmz      OBJEKT_KOD (kód DTMŽ objektu, např. 21 nebo 100150)
  codeBase      OBJEKT_KOD_NAZEV doplněný na 10 číslic (kód JVF)
  suffix        01 Bod, 02 Linie, 03 Plocha, 04 Definiční bod, 05 Obvod (interní —
                3D obvod plochy, kód JVF shodný s plochou)
  attrCode      ATRIBUT_KOD
  xmlLeaf       poslední článek XML_ELEMENT_NAME (název elementu v AtributyObjektu)
  xmlPath       XML_ELEMENT_NAME
  urcujiciSymbol URCUJICI_SYMBOL (1 = atribut určuje symbol dle LDM)
  valueCode     HODNOTA_CISELNIKU_KOD (interní kód hodnoty — ten uvádí SLD)
  valueXml      kód hodnoty v ŽXML: HODNOTA_CISELNIK_KOD_XSD_CUSTOMER (ověřeno proti
                enumeracím common/atributy*.xsd ŽXML 1.5.1.6 — SŽ rozšíření JVF
                číselníků mají v ŽXML vlastní kód, např. 100346, zatímco
                HODNOTA_CISELNIK_KOD_XSD_JVF je převod do JVF pro IS DMVS, 98),
                jinak HODNOTA_CISELNIK_KOD_XSD_JVF, jinak HODNOTA_CISELNIKU_KOD
  valueName     HODNOTA_CISELNIK_NAZEV

Druhý výstup ldm/ldm-objects.csv je seznam všech objektů LDM (kód, název,
původ JVF/SŽ, obsahová část dle TYP_OBJEKTU) — základ klíčů ZXML_STYLES.

Do mapy jdou atributy s číselníkem (kromě společných `/Spolecne…` atributů, pokud
nejsou určující pro symbol) a atribut Natoceni.

Spuštění z rootu repa:
    python3 scripts/zxml/ldm-attributes.py <SZ_LDM_1.5.0.2_V23.xlsx>
"""
import csv
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import ATTR_MAP, LDM_OBJECTS, ROOT, SUFFIX, SUFFIX_ALL, pad_code, read_xlsx_sheet  # noqa: E402

OBJECT_COLUMNS = ['codeDtmz', 'codeBase', 'suffix', 'name', 'origin', 'obsahovaCast']
COLUMNS = ['codeDtmz', 'codeBase', 'suffix', 'attrCode', 'xmlLeaf', 'xmlPath',
           'urcujiciSymbol', 'valueCode', 'valueXml', 'valueName']


def main(xlsx: Path) -> None:
    rows = read_xlsx_sheet(xlsx, 'export')
    out: list[dict[str, str]] = []
    seen: set[tuple] = set()
    skipped_obvod = set()
    objects: dict[tuple[str, str], dict[str, str]] = {}
    for r in rows:
        geom = r.get('GEOMETRIE_NAZEV', '')
        if geom not in SUFFIX_ALL:
            skipped_obvod.add(r.get('OBJEKT_KOD'))
            continue
        okey = (pad_code(r.get('OBJEKT_KOD_NAZEV', '')), SUFFIX_ALL[geom])
        if geom in SUFFIX:
            objects.setdefault(okey, {
                'codeDtmz': r.get('OBJEKT_KOD', ''), 'codeBase': okey[0], 'suffix': okey[1],
                'name': r.get('OBJEKT_TYP', ''), 'origin': r.get('KATEGORIE_OBJEKTU', ''),
                'obsahovaCast': r.get('TYP_OBJEKTU', ''),
            })
        path = r.get('XML_ELEMENT_NAME', '')
        leaf = path.rstrip('/').rsplit('/', 1)[-1]
        urc = r.get('URCUJICI_SYMBOL', '0')
        has_value = bool(r.get('HODNOTA_CISELNIKU_KOD'))
        if leaf != 'Natoceni':
            if not has_value:
                continue
            if path.startswith('/Spolecne') and urc != '1':
                continue
        value_xml = (r.get('HODNOTA_CISELNIK_KOD_XSD_CUSTOMER') or r.get('HODNOTA_CISELNIK_KOD_XSD_JVF')
                     or r.get('HODNOTA_CISELNIKU_KOD') or '')
        row = {
            'codeDtmz': r.get('OBJEKT_KOD', ''),
            'codeBase': pad_code(r.get('OBJEKT_KOD_NAZEV', '')),
            'suffix': SUFFIX_ALL[geom],
            'attrCode': r.get('ATRIBUT_KOD', ''),
            'xmlLeaf': leaf,
            'xmlPath': path,
            'urcujiciSymbol': urc,
            'valueCode': r.get('HODNOTA_CISELNIKU_KOD', ''),
            'valueXml': value_xml if has_value else '',
            'valueName': r.get('HODNOTA_CISELNIK_NAZEV', '') if has_value else '',
        }
        key = tuple(row.values())
        if key in seen:
            continue
        seen.add(key)
        out.append(row)
    out.sort(key=lambda x: (x['codeBase'], x['suffix'], int(x['attrCode'] or 0),
                            int(x['valueCode']) if x['valueCode'].isdigit() else 0))
    ATTR_MAP.parent.mkdir(parents=True, exist_ok=True)
    with ATTR_MAP.open('w', encoding='utf-8', newline='') as f:
        w = csv.DictWriter(f, fieldnames=COLUMNS, lineterminator='\n')
        w.writeheader()
        w.writerows(out)
    with LDM_OBJECTS.open('w', encoding='utf-8', newline='') as f:
        w = csv.DictWriter(f, fieldnames=OBJECT_COLUMNS, lineterminator='\n')
        w.writeheader()
        w.writerows(sorted(objects.values(), key=lambda o: (o['codeBase'], o['suffix'])))
    print(f'{len(objects)} objektů (Bod/Linie/Plocha/Definiční bod) → {LDM_OBJECTS.relative_to(ROOT)}')
    objs = {(r['codeBase'], r['suffix']) for r in out}
    attrs = {(r['codeBase'], r['suffix'], r['attrCode']) for r in out}
    nat = {(r['codeBase'], r['suffix']) for r in out if r['xmlLeaf'] == 'Natoceni'}
    print(f'{len(rows)} řádků LDM → {len(out)} řádků mapy, {len(objs)} objektů, {len(attrs)} atributů, '
          f'Natoceni u {len(nat)} objektů; vynechané objekty s jinou geometrií: {len(skipped_obvod)}'
          f' → {ATTR_MAP.relative_to(ROOT)} ({ATTR_MAP.stat().st_size // 1024} kB)')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemExit('Použití: ldm-attributes.py <SZ_LDM_1.5.0.2_V23.xlsx>')
    main(Path(sys.argv[1]))

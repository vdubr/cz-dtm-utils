"""
Společné konstanty a pomocné funkce pro generátory symbologie ŽXML (DTMŽ).

Importují je skripty v scripts/zxml/ (ldm-attributes.py, extract-sld.py,
build-zxml-styles.py).
"""
import csv
import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = Path(__file__).resolve().parent
DOCS = ROOT / 'jvf_parser/docs/zxml-1.5.1.6'
LDM = DOCS / 'ldm'
ATTR_MAP = LDM / 'attribute-map.csv'
LDM_OBJECTS = LDM / 'ldm-objects.csv'

# Vstupy (xlsx a SQLite export LDM) nejsou v repozitáři — cesty se předávají
# parametrem příkazové řádky (viz sld/README.md).

# Typ geometrie → sufix kódu objektu (`<codeBase>-<suffix>`).
SUFFIX = {'Bod': '01', 'Linie': '02', 'Plocha': '03', 'Definiční bod': '04'}
GEOMETRY_BY_SUFFIX = {v: k for k, v in SUFFIX.items()}
# Objekty „Obvod" (3D obvod plochy, OBJEKT_GEOMETRIE_TYP 5) mají kód JVF shodný
# s plochou; v mapě atributů nesou interní sufix 05.
SUFFIX_OBVOD = '05'
SUFFIX_ALL = {**SUFFIX, 'Obvod': SUFFIX_OBVOD}

def read_xlsx_sheet(path: Path, sheet: str = 'export') -> list[dict[str, str]]:
    """List xlsx → seznam řádků {hlavička: hodnota} (hlavička = 1. řádek). Bez openpyxl."""
    ns = '{http://schemas.openxmlformats.org/spreadsheetml/2006/main}'
    with zipfile.ZipFile(path) as z:
        shared = [''.join(t.text or '' for t in si.iter(ns + 't'))
                  for si in ET.fromstring(z.read('xl/sharedStrings.xml')).iter(ns + 'si')]
        names = re.findall(r'<sheet [^>]*name="([^"]+)"', z.read('xl/workbook.xml').decode())
        idx = names.index(sheet) + 1
        rows: list[dict[str, str]] = []
        with z.open(f'xl/worksheets/sheet{idx}.xml') as f:
            for _ev, el in ET.iterparse(f):
                if el.tag != ns + 'row':
                    continue
                cells: dict[str, str] = {}
                for c in el.iter(ns + 'c'):
                    col = re.match(r'[A-Z]+', c.get('r')).group(0)
                    t = c.get('t')
                    if t == 'inlineStr':
                        cells[col] = ''.join(x.text or '' for x in c.iter(ns + 't'))
                        continue
                    v = c.find(ns + 'v')
                    if v is None:
                        continue
                    cells[col] = shared[int(v.text)] if t == 's' else v.text
                rows.append(cells)
                el.clear()
    header = rows[0]
    return [{header[c]: v.strip() for c, v in r.items() if c in header} for r in rows[1:]]


def pad_code(code: str) -> str:
    """Kód JVF objektu na 10 číslic (xlsx drží čísla bez úvodní nuly)."""
    return code.strip().zfill(10)


def load_json(path: Path):
    return json.loads(path.read_text(encoding='utf-8'))


def write_json(path: Path, data, indent: int | None = 1) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=indent) + '\n', encoding='utf-8')


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open(encoding='utf-8', newline='') as f:
        return list(csv.DictReader(f))

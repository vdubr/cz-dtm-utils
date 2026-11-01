"""
Společné konstanty a pomocné funkce pro generátory symbologie ŽXML (DTMŽ).

Importují je skripty v scripts/zxml/ (ldm-attributes.py, extract-mozek-symbols.py,
vectorize.py, extract-line-patterns.py, build-zxml-styles.py, review-sheet.py).
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
MOZEK = DOCS / 'mozek'
KNIHOVNY = DOCS / 'knihovny'
SVG_DIR = KNIHOVNY / 'SVG'
MANIFEST = MOZEK / 'manifest.json'
PNG_DIR = MOZEK / 'png'
ATTR_MAP = MOZEK / 'attribute-map.csv'
LDM_OBJECTS = MOZEK / 'ldm-objects.csv'
LINE_PATTERNS = KNIHOVNY / 'line-patterns.json'

# Vstupy (PDF fotokatalogu, xlsx LDM) nejsou v repozitáři — cesty se předávají
# parametrem příkazové řádky (viz knihovny/README.md).

# Typ geometrie → sufix kódu objektu (`<codeBase>-<suffix>`).
SUFFIX = {'Bod': '01', 'Linie': '02', 'Plocha': '03', 'Definiční bod': '04'}
GEOMETRY_BY_SUFFIX = {v: k for k, v in SUFFIX.items()}
# Objekty „Obvod" (3D obvod plochy, OBJEKT_GEOMETRIE_TYP 5) mají kód JVF shodný
# s plochou; v mapě atributů a manifestu nesou interní sufix 05 a jejich značky
# (vzorky linie) přebírá sourozenecká plocha (-03). Ve stylech se nevyskytují.
SUFFIX_OBVOD = '05'
SUFFIX_ALL = {**SUFFIX, 'Obvod': SUFFIX_OBVOD}

# 1 SVG jednotka = 0,01 mm papíru (konvence vieweru, viz scripts/udm/build-udm-styles.py).
SVG_UNITS_PER_MM = 100.0
# Výška inkoustu bodové značky ve standardním rámečku 190×120 px fotokatalogu.
STD_FRAME = (190, 120)
STD_INK_HEIGHT = 109
STD_INK_WIDTH = 179


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

#!/usr/bin/env python3
"""
Změří vzory linií UDM 2.1.1 z vektorového vzorníku ČKZ.

Zdroj: jvf_parser/docs/udm-2.1.1/knihovny/Vzory_symbolu_a_stylu_UDM.pdf,
list 4 „Vzhledy UDM verze 2.1 – vzory čar". Vzorník je vektorový export
z MicroStationu: každý vzor je nakreslený jako 60 pt dlouhá ukázka, čárkování
je rozložené na jednotlivé úseky (tahy), u vodorovného dopravního značení
(ckz005–014, skutečná šířka) na vyplněné obdélníky.

Měřítko: VDZ jsou podle UDM ve skutečné velikosti — „přerušovaná bez rozhledu"
(ckz012) má čárku 6 pt a mezeru 3 pt = 3 m / 1,5 m, čára 25 cm má 0,48 pt.
Tedy **1 pt = 0,5 m = 1 mm papíru při 1:500** → změřené hodnoty v pt jsou
přímo čárkování v mm papíru (jednotka `dashMm` ve vieweru i exportu DXF).

Názvy vzorů nejsou v PDF jako text (popisky jsou křivky); pořadí řádků je dané
vzorníkem (3 sloupce: n0.01–n6.37, n6.51–n6.82, ckz001–ckz014) a skript
kontroluje počty řádků. Vložené značky (ploty, sítě TI, alej, kynety) se
neměří — vzor popisuje jen čárkování základní čáry, `markers: true` značí, že
vzor značky obsahuje.

Výstup: scripts/udm/line-patterns.json (commitnuto; build-udm-styles.py z něj
čte bez závislosti na PyMuPDF).

Vyžaduje PyMuPDF (jen pro vývojáře):
    python3 -m venv .venv && .venv/bin/pip install pymupdf
    .venv/bin/python scripts/udm/extract-line-patterns.py
"""
import collections
import json
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[2]
PDF = ROOT / 'jvf_parser/docs/udm-2.1.1/knihovny/Vzory_symbolu_a_stylu_UDM.pdf'
OUT = Path(__file__).resolve().parent / 'line-patterns.json'

COLUMNS = [
    # (rozsah x vzorku v pt, názvy řádků shora dolů)
    ((90, 300), ['n0.01', 'n0.03', 'n0.05', 'n0.09', 'n0.12', 'n0.13', 'n0.16', 'n0.17',
                 'n2.01', 'n2.03', 'n2.04', 'n2.05', 'n2.06', 'n2.07', 'n2.09', 'n2.10', 'n2.11',
                 'n2.12', 'n2.13', 'n2.14', 'n2.15', 'n2.16', 'n2.17', 'n2.23', 'n2.24', 'n2.25',
                 'n2.26', 'n4.22', 'n5.02', 'n5.21', 'n5.22', 'n5.290', 'n5.291', 'n5.30', 'n6.05',
                 'n6.06', 'n6.15', 'n6.16', 'n6.17', 'n6.23', 'n6.24', 'n6.26', 'n6.27', 'n6.28',
                 'n6.32', 'n6.33', 'n6.34', 'n6.35', 'n6.36', 'n6.37']),
    ((420, 520), ['n6.51', 'n6.52', 'n6.55', 'n6.59', 'n6.60', 'n6.61', 'n6.62', 'n6.63', 'n6.74',
                  'n6.80', 'n6.82']),
    ((755, 830), [f'ckz{i:03d}' for i in range(1, 15)]),
]
FIRST_ROW_Y = 252.0
ROW_STEP = 40.0
SAMPLE_LEN = 60.0
TOL = 0.25  # pt — rozlišení vzorníku je 0,12 pt


def q(v: float) -> float:
    """Zaokrouhlení na 0,1 mm (vzorník kreslí v krocích 0,12 pt)."""
    return round(v * 10) / 10


def axis_runs(drawings, xa, xb, yc):
    """
    Úseky základní čáry vzorku: vodorovné tahy na nejčastější ose y a vyplněné
    tvary (VDZ). Vrací (start vzorku, seznam (x0, x1)) a příznak vložených značek.
    """
    near = [d for d in drawings if xa <= d['rect'].x0 and d['rect'].x1 <= xb + 10
            and abs((d['rect'].y0 + d['rect'].y1) / 2 - yc) < 8]
    horiz, fills, other = [], [], 0
    for d in near:
        if d.get('fill') is not None and d.get('color') is None:
            fills.append(d['rect'])
            continue
        for it in d['items']:
            if it[0] == 'l' and abs(it[1].y - it[2].y) < 0.01:
                horiz.append((round(it[1].y, 2), min(it[1].x, it[2].x), max(it[1].x, it[2].x)))
            else:
                other += 1
    if horiz:
        # osa = výška s největší celkovou délkou tahů (ne počtem — zoubky plotů
        # a zdí jsou krátké, ale četné)
        total = collections.Counter()
        for y, a, b in horiz:
            total[y] += b - a
        axis = total.most_common(1)[0][0]
        runs = sorted((a, b) for y, a, b in horiz if y == axis)
        other += sum(1 for y, _, _ in horiz if y != axis)
    else:
        # VDZ: vyplněné obdélníky; dvojité čáry → bereme jednu (nejnižší) osu
        ys = collections.Counter(round(r.y0, 1) for r in fills)
        axis = max(ys) if ys else None
        runs = sorted((r.x0, r.x1) for r in fills if round(r.y0, 1) == axis)
        other += sum(1 for r in fills if round(r.y0, 1) != axis and r.width < SAMPLE_LEN - 1)
    return runs, other > 0


def merge(runs):
    """Spojí navazující úseky (mezera ≈ 0)."""
    out = []
    for a, b in runs:
        if out and a - out[-1][1] <= TOL:
            out[-1] = (out[-1][0], max(out[-1][1], b))
        elif not out or b > out[-1][1]:
            out.append((a, b))
    return out


def pattern(runs, start, end):
    """Čárkování [čárka, mezera, …] z úseků jedné ukázky (perioda vzoru)."""
    runs = merge(runs)
    if not runs:
        return None
    if len(runs) == 1 and runs[0][1] - runs[0][0] >= SAMPLE_LEN - 1:
        return None  # plná
    lead = runs[0][0] - start
    tail = end - runs[-1][1]
    pairs = [(runs[i][1] - runs[i][0], runs[i + 1][0] - runs[i][1]) for i in range(len(runs) - 1)]
    if not pairs:  # jediná čárka uprostřed (přerušená čára)
        return [q(runs[0][1] - runs[0][0]), q(lead + tail)]
    full = pairs
    # Poslední úsek je oříznutý koncem ukázky (a MicroStation kreslí na konec
    # krátký „uzávěr") → pro hledání periody poslední dvojici vynechat.
    if len(pairs) > 2:
        pairs = pairs[:-1]

    def same(a, b):
        return abs(a[0] - b[0]) <= TOL and abs(a[1] - b[1]) <= TOL

    # Nejkratší perioda, která se v ukázce skutečně ZOPAKUJE (aspoň 2×);
    # ukázka smí začínat zkrácenou první čárkou (offset 1, např. n5.02).
    period = None
    for offset in (0, 1):
        seq = pairs[offset:]
        for p in range(1, len(seq) // 2 + 1):
            if all(same(seq[i], seq[i + p]) for i in range(len(seq) - p)):
                period = seq[:p]
                break
        if period:
            break
    # Bez opakování (vzory se značkou mají periodu delší než ukázka) → celá
    # změřená sekvence: čárky + mezera se značkou + čárky.
    if period is None:
        period = full
        # Ukázka obsahuje přesně 2 celé periody → polovina (čárky i mezery
        # obou polovin se musí shodovat).
        half = len(period) // 2
        if len(period) % 2 == 0 and half and all(same(period[i], period[i + half]) for i in range(half)):
            period = period[:half]
    return [q(v) for pair in period for v in pair]


def main() -> None:
    page = pymupdf.open(PDF)[3]
    drawings = page.get_drawings()
    result = {}
    for (xa, xb), names in COLUMNS:
        for i, name in enumerate(names):
            yc = FIRST_ROW_Y + i * ROW_STEP
            runs, markers = axis_runs(drawings, xa, xb, yc)
            if not runs:
                raise SystemExit(f'{name}: v PDF nenalezen vzorek (y≈{yc})')
            # začátek ukázky = levý okraj sloupce (všechny ukázky začínají stejně)
            col_start = min(a for (a, _) in axis_runs(drawings, xa, xb, FIRST_ROW_Y)[0])
            dash = pattern(runs, col_start, col_start + SAMPLE_LEN)
            result[name] = {'dashMm': dash, 'markers': markers}
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    solid = sum(1 for v in result.values() if v['dashMm'] is None)
    print(f'{len(result)} vzorů (plných {solid}, se značkami {sum(v["markers"] for v in result.values())}) → {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()

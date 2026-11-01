#!/usr/bin/env python3
"""
Změří vzory linií (čárkování) ze vzorků linií fotokatalogu MOZeK.

Vstup: mozek/manifest.json + mozek/png/<id>.png (značky typu `line`, typicky
737×93 nebo 737×41 px — vodorovný vzorek linie, viz extract-mozek-symbols.py).

Postup:
  - osa vzorku = řádek s největším počtem pixelů inkoustu; šířka čáry = počet
    sousedních řádků s ≥ 50 % inkoustu osy (1 px → 0,25 mm, ≥ 2 px → 0,5 mm),
  - úseky (čárky) = souvislé běhy sloupců s inkoustem v pásu osy,
  - perioda čárkování: merge()/pattern() převzaté ze scripts/udm/extract-line-patterns.py
    (tolerance TOL v px místo pt); u vzorů s vloženými značkami, jejichž perioda
    je delší než ukázka (sítě TI), se bere převládající dvojice čárka/mezera,
  - px → mm papíru: LINE_PX_PER_MM (5,5 px/mm, odhad měřítka obrázků
    fotokatalogu; parametr --px-per-mm),
  - `parallel`: další plnohodnotná čára mimo pás osy (dvojčára, plot…),
  - `markers`: inkoust mimo pás osy a mimo souběžné čáry (vložené značky,
    zoubky) — styl popisuje jen čárkování osy, značky se nekreslí.

Výstup: jvf_parser/docs/zxml-1.5.1.6/knihovny/line-patterns.json
  {id: {dashMm: [čárka, mezera, …] | null (plná), widthMm, markers, parallel,
        px: {axis, width, runs}}}

Spuštění z rootu repa:
    python3 scripts/zxml/extract-line-patterns.py [--px-per-mm 5.5]
"""
import argparse
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import LINE_PATTERNS, MANIFEST, MOZEK, ROOT, load_json  # noqa: E402

LINE_PX_PER_MM = 5.5
TOL = 1.5           # px — rozlišení vzorků (antialiasing, zaokrouhlení)
BAND = 2            # px — pás kolem osy, který ještě patří k čáře
MARKER_MIN_PX = 12  # min. počet pixelů mimo pás → vložené značky


def q(v: float) -> float:
    """Zaokrouhlení na 0,1 mm, nejméně 0,1 mm."""
    return max(0.1, round(v * 10) / 10)


def merge(runs):
    """Spojí navazující úseky (mezera ≤ TOL)."""
    out = []
    for a, b in runs:
        if out and a - out[-1][1] <= TOL:
            out[-1] = (out[-1][0], max(out[-1][1], b))
        elif not out or b > out[-1][1]:
            out.append((a, b))
    return out


def pattern(runs, start, end):
    """Čárkování [čárka, mezera, …] v px z úseků jedné ukázky (perioda vzoru)."""
    runs = merge(runs)
    sample_len = end - start
    if not runs:
        return None
    if len(runs) == 1 and runs[0][1] - runs[0][0] >= sample_len - 1:
        return None  # plná
    lead = runs[0][0] - start
    tail = end - runs[-1][1]
    pairs = [(runs[i][1] - runs[i][0], runs[i + 1][0] - runs[i][1]) for i in range(len(runs) - 1)]
    if not pairs:
        return [runs[0][1] - runs[0][0], lead + tail]
    full = pairs
    # Poslední úsek bývá oříznutý koncem ukázky → pro hledání periody vynechat.
    if len(pairs) > 2:
        pairs = pairs[:-1]

    def same(a, b):
        return abs(a[0] - b[0]) <= TOL and abs(a[1] - b[1]) <= TOL

    period = None
    for offset in (0, 1):
        seq = pairs[offset:]
        for p in range(1, len(seq) // 2 + 1):
            if all(same(seq[i], seq[i + p]) for i in range(len(seq) - p)):
                period = seq[:p]
                break
        if period:
            break
    if period is None:
        period = full
        half = len(period) // 2
        if len(period) % 2 == 0 and half and all(same(period[i], period[i + half]) for i in range(half)):
            period = period[:half]
    # průměr opakování periody (přesnější než první výskyt)
    p = len(period)
    seq = pairs if len(pairs) >= p else full
    reps = [seq[i:i + p] for i in range(0, len(seq) - p + 1, p)
            if all(same(seq[i + k], period[k]) for k in range(p))] or [period]
    return [float(np.mean([r[k][j] for r in reps])) for k in range(p) for j in (0, 1)]


def dominant(runs) -> list[float] | None:
    """
    Převládající dvojice (čárka, mezera) — pro vzory s vloženými značkami (sítě TI),
    jejichž perioda je delší než ukázka: značka leží na ose a rozbíjí čárkování.
    Vybírá shluk dvojic s největší celkovou délkou.
    """
    runs = merge(runs)
    pairs = [(runs[i][1] - runs[i][0], runs[i + 1][0] - runs[i][1]) for i in range(len(runs) - 1)]
    if not pairs:
        return None
    best, best_len = None, -1.0
    for a in pairs:
        group = [b for b in pairs if abs(a[0] - b[0]) <= 2 * TOL and abs(a[1] - b[1]) <= 2 * TOL]
        total = sum(d + g for d, g in group)
        if total > best_len:
            best, best_len = group, total
    return [float(np.mean([g[0] for g in best])), float(np.mean([g[1] for g in best]))]


def runs_of(mask: np.ndarray) -> list[tuple[int, int]]:
    d = np.diff(np.concatenate([[0], mask.astype(np.int8), [0]]))
    return list(zip(np.nonzero(d == 1)[0].tolist(), np.nonzero(d == -1)[0].tolist()))


def measure(ink: np.ndarray, px_per_mm: float) -> dict:
    h, w = ink.shape
    rows = ink.sum(axis=1)
    axis = int(np.argmax(rows))
    strong = rows >= 0.5 * rows[axis]
    lo = hi = axis
    while lo - 1 >= 0 and strong[lo - 1]:
        lo -= 1
    while hi + 1 < h and strong[hi + 1]:
        hi += 1
    width_px = hi - lo + 1
    band = np.zeros(h, dtype=bool)
    band[max(0, lo - BAND):min(h, hi + BAND + 1)] = True
    col = ink[band].any(axis=0)
    runs = runs_of(col)
    # souběžné čáry: řádky mimo pás s výrazným podílem inkoustu
    par_rows = np.nonzero(~band & (rows >= max(0.25 * rows[axis], 0.15 * w)))[0]
    parallel = bool(len(par_rows))
    off = ink & ~band[:, None]
    for r in par_rows:
        off[max(0, r - BAND):r + BAND + 1] = False
    markers = bool(off.sum() >= MARKER_MIN_PX)
    if not runs:
        return {'dashMm': None, 'widthMm': 0.25, 'markers': markers, 'parallel': parallel,
                'px': {'axis': axis, 'width': width_px, 'runs': []}}
    start, end = runs[0][0], runs[-1][1]
    dash = pattern(runs, start, end)
    if dash and markers and len(dash) > 4:
        dash = dominant(runs)
    longest = max(b - a for a, b in runs)
    return {
        'dashMm': [q(v / px_per_mm) for v in dash] if dash else None,
        # tečkované čáry (krátké úseky) mají 2px tečky — tloušťku podle nich neurčovat
        'widthMm': 0.5 if width_px >= 2 and longest > 10 else 0.25,
        'markers': markers,
        'parallel': parallel,
        'px': {'axis': axis, 'width': width_px, 'runs': [list(r) for r in runs]},
    }


def main() -> None:
    ap = argparse.ArgumentParser(description='Vzory linií z fotokatalogu MOZeK')
    ap.add_argument('--px-per-mm', type=float, default=LINE_PX_PER_MM,
                    help='měřítko vzorků linií [px na mm papíru]')
    args = ap.parse_args()
    manifest = load_json(MANIFEST)
    result = {}
    for sid, sym in manifest['symbols'].items():
        if sym['kind'] != 'line' or not sym['png']:
            continue
        ink = ~np.asarray(Image.open(MOZEK / sym['png']).convert('1'))
        result[sid] = measure(ink, args.px_per_mm)
    # jeden vzor na řádek (čitelné diffy)
    text = '{\n' + ',\n'.join(
        f' "{k}": ' + json.dumps(v, ensure_ascii=False, separators=(',', ':'))
        for k, v in sorted(result.items())) + '\n}\n'
    LINE_PATTERNS.write_text(text, encoding='utf-8')
    solid = sum(1 for v in result.values() if v['dashMm'] is None)
    print(f'{len(result)} vzorů (plných {solid}, se značkami {sum(v["markers"] for v in result.values())}, '
          f'souběžných {sum(v["parallel"] for v in result.values())}, tlustých '
          f'{sum(v["widthMm"] == 0.5 for v in result.values())}), {args.px_per_mm} px/mm '
          f'→ {LINE_PATTERNS.relative_to(ROOT)}')


if __name__ == '__main__':
    main()

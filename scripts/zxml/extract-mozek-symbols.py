#!/usr/bin/env python3
"""
Vytěžení značek (symbolů) z fotokatalogu MOZeK (SŽ M20/MP014).

Zdroj: MOZeK_fotokatalog_20250601.pdf (2076 stran, ŽXML 1.4.2.1). PDF není
v repozitáři (238 MB) — cesta se předává parametrem.

Struktura PDF (změřená):
  - průběžné záhlaví (y < 40): „Verze ŽXML 1.4.2.1" + `<kód DTMŽ>: <název>
    [SŽ-<OC>|JVF-<OC>] <Bod|Linie|Plocha|Definiční bod>`; strany obsahu
    (začínají „Obsah") se přeskakují,
  - první strana objektu: `Kód DTMŽ`, `Kód JVF` (10 číslic), `Obsahová část`,
    `Geometrie`,
  - 11 pt DejaVuSans-Bold `Atribut <kód>: <název>` → kontext atributu,
  - 11 pt regular `<kód>: <hodnota>[ [SŽ]]` → kontext hodnoty číselníku,
  - 10 pt DejaVuSans-BoldOblique `Fotografie|Značky|Zákresy` → oddíl,
  - 14/16 pt nadpisy kontext ruší (16 pt = úroveň objektu),
  - obrázky v oddílu `Značky` (do dalšího oddílu/nadpisu, i přes konec strany)
    patří aktuálnímu kontextu.

Výstupy (jvf_parser/docs/zxml-1.5.1.6/mozek/):
  - manifest.json — symbols{id: kind, png, width, height, inkBbox, flags, uses[]},
    objects{<codeBase>-<suffix>: …}, review[] (podezřelé případy),
  - png/<id>.png — binarizované značky (1 bit), bez fotografických (photoLike),
  - extract.log — průběh a varování.

Id značky: `sz-` + 8 hex SHA-1 binarizovaných bitů a rozměrů → stejné obrázky
na různých místech katalogu mají stejné id.

Spuštění z rootu repa (vyžaduje PyMuPDF, numpy, Pillow):
    python3 scripts/zxml/extract-mozek-symbols.py <MOZeK_fotokatalog_20250601.pdf>
"""
import hashlib
import re
import shutil
import sys
from pathlib import Path

import numpy as np
import pymupdf
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import MANIFEST, MOZEK, PNG_DIR, ROOT, SUFFIX_ALL, write_json  # noqa: E402

# Záhlaví může být na konci oříznuté (dlouhé názvy) → povinný je jen kód DTMŽ.
HDR_RE = re.compile(r'^(\d+): (.+?)(?: \[(SŽ|JVF)-(\w+)\]\s*(Bod|Linie|Plocha|Definiční bod|Obvod)?)?$')
ATTR_RE = re.compile(r'^Atribut (\d+): (.+?)(?: \[SŽ\])?$')
VALUE_RE = re.compile(r'^(\d+): (.+?)( \[SŽ\])?$')
SECTIONS = ('Fotografie', 'Značky', 'Zákresy')
INK_LUMA = 140          # práh binarizace (JPEG artefakty kolem tenkých čar)
PHOTO_COLORS = 256      # více unikátních barev → fotografie / barevný zákres
PHOTO_AREA = 250_000    # obří obrázek → zákres, ne značka
COLOR_INK_FRACTION = 0.2  # podíl barevných (nešedých) pixelů inkoustu


class Log:
    def __init__(self, path: Path):
        self.path = path
        self.lines: list[str] = []

    def __call__(self, msg: str) -> None:
        self.lines.append(msg)

    def save(self) -> None:
        self.path.write_text('\n'.join(self.lines) + '\n', encoding='utf-8')


def load_image(doc, xref: int) -> np.ndarray:
    """Obrázek z PDF → RGB uint8 (H, W, 3); průhlednost na bílé pozadí."""
    pix = pymupdf.Pixmap(doc, xref)
    if pix.colorspace is None or pix.colorspace.n != 3 or pix.alpha:
        if pix.alpha:
            rgba = pymupdf.Pixmap(pymupdf.csRGB, pix) if pix.colorspace and pix.colorspace.n != 3 else pix
            a = np.frombuffer(rgba.samples, dtype=np.uint8).reshape(rgba.height, rgba.width, rgba.n)
            alpha = a[..., -1:].astype(np.float32) / 255
            rgb = a[..., :3].astype(np.float32) * alpha + 255 * (1 - alpha)
            return rgb.astype(np.uint8)
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    return np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)[..., :3].copy()


def classify(rgb: np.ndarray) -> tuple[np.ndarray, list[str]]:
    """RGB → (binární inkoust, příznaky). photoLike = fotografie/barevný zákres."""
    h, w, _ = rgb.shape
    luma = rgb[..., 0] * 0.299 + rgb[..., 1] * 0.587 + rgb[..., 2] * 0.114
    ink = luma < INK_LUMA
    flags = []
    colors = len(np.unique(rgb.reshape(-1, 3), axis=0))
    chroma = rgb.max(axis=2).astype(int) - rgb.min(axis=2).astype(int)
    colored = (chroma > 60) & (luma < 230)
    ink_or_col = ink | colored
    if colors > PHOTO_COLORS or w * h > PHOTO_AREA or (
            ink_or_col.sum() and colored.sum() / ink_or_col.sum() > COLOR_INK_FRACTION):
        flags.append('photoLike')
    elif colors > 8:
        flags.append('antialiased')
    if not ink.any():
        flags.append('empty')
    return ink, flags


def symbol_id(ink: np.ndarray) -> str:
    h, w = ink.shape
    digest = hashlib.sha1(f'{w}x{h}:'.encode() + np.packbits(ink).tobytes()).hexdigest()
    return 'sz-' + digest[:8]


def ink_bbox(ink: np.ndarray) -> list[int] | None:
    ys, xs = np.nonzero(ink)
    if not len(xs):
        return None
    return [int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1]


def kind_of(w: int, h: int) -> str:
    """Vzorek linie je široký nízký pruh (737×93, 737×41, 571×68, 476×21)."""
    return 'line' if w >= 3 * h and w >= 300 else 'point'


def parse_first_page(spans) -> dict[str, str]:
    """Pole první strany objektu: popisek (regular) → hodnota (bold vpravo)."""
    fields = {}
    labels = {'Kód DTMŽ:': 'codeDtmz', 'Kód JVF:': 'codeBase', 'Obsahová část:': 'obsahovaCast',
              'Geometrie:': 'geometry', 'Původ:': 'origin'}
    for i, s in enumerate(spans):
        key = labels.get(s[4].strip())
        if not key:
            continue
        same_row = [t for t in spans if abs(t[1] - s[1]) < 1 and t[0] > s[0] and 'Bold' in t[2]]
        if same_row:
            fields[key] = min(same_row, key=lambda t: t[0])[4].strip()
    return fields


def main(pdf: Path) -> None:
    log = Log(MOZEK / 'extract.log')
    doc = pymupdf.open(pdf)
    log(f'PDF {pdf.name}: {doc.page_count} stran')
    if PNG_DIR.exists():
        shutil.rmtree(PNG_DIR)
    PNG_DIR.mkdir(parents=True)

    objects: dict[str, dict] = {}       # klíč <codeBase>-<suffix>
    by_dtmz: dict[str, str] = {}        # kód DTMŽ → klíč
    symbols: dict[str, dict] = {}
    review: list[dict] = []
    xref_cache: dict[int, tuple[str, dict]] = {}

    cur = None          # klíč aktuálního objektu
    attr = None         # (kód, název)
    value = None        # (kód, název)
    section = None
    variant = 0
    placements = 0

    for pno in range(doc.page_count):
        page = doc[pno]
        spans = []
        for blk in page.get_text('dict', flags=pymupdf.TEXTFLAGS_TEXT)['blocks']:
            for ln in blk.get('lines', []):
                for sp in ln['spans']:
                    if sp['text'].strip():
                        spans.append((sp['bbox'][0], sp['bbox'][1], sp['font'], round(sp['size'], 1), sp['text']))
        if not spans:
            continue
        first = min(spans, key=lambda s: (s[1], s[0]))
        if first[4].strip().startswith('Obsah'):
            continue
        head = ' '.join(s[4].strip() for s in sorted(spans, key=lambda s: (round(s[1]), s[0]))
                        if s[1] < 40 and s[2].startswith('DejaVu') and not s[4].startswith('Verze ŽXML'))
        m = HDR_RE.match(head)
        if not m:
            if cur is not None:
                log(f'str. {pno + 1}: bez záhlaví objektu → konec objektů ({head[:60]!r})')
            cur = None
            continue
        code_dtmz = m.group(1)
        if any(s[4].strip() == 'Kód DTMŽ:' for s in spans):
            f = parse_first_page(spans)
            geometry = f.get('geometry') or m.group(5)
            if geometry not in SUFFIX_ALL:
                log(f'str. {pno + 1}: neznámá geometrie {geometry!r} objektu {code_dtmz}')
                cur = None
                by_dtmz[code_dtmz] = None
                continue
            title = [s[4].strip() for s in spans if s[3] >= 15.5 and s[1] > 100]
            name = m.group(2) if m.group(3) else (title[0] if title else m.group(2))
            origin = m.group(3) or ('SŽ' if 'Správa železnic' in f.get('origin', '') else 'JVF')
            code_base = f.get('codeBase', '')
            if not re.fullmatch(r'\d{10}', code_base):
                log(f'str. {pno + 1}: objekt {code_dtmz} bez kódu JVF ({code_base!r})')
            key = f'{code_base}-{SUFFIX_ALL[geometry]}'
            if key in objects:
                log(f'str. {pno + 1}: duplicitní objekt {key} (kód DTMŽ {code_dtmz})')
            objects[key] = {
                'codeDtmz': f.get('codeDtmz', code_dtmz), 'name': name, 'origin': origin,
                'obsahovaCast': f.get('obsahovaCast') or m.group(4), 'geometry': geometry,
                'firstPage': pno + 1, 'hasZnacky': False,
            }
            by_dtmz[code_dtmz] = key
            cur, attr, value, section = key, None, None, None
        elif code_dtmz in by_dtmz and by_dtmz[code_dtmz] is None:
            cur = None  # pokračování objektu s neznámou geometrií
        elif by_dtmz.get(code_dtmz) != cur:
            log(f'str. {pno + 1}: záhlaví {code_dtmz} nenavazuje na objekt {cur}')
            cur = by_dtmz.get(code_dtmz)
        if cur is None:
            continue

        items = [(s[1], 0, s) for s in spans if s[1] >= 40]
        for ii in page.get_image_info(xrefs=True):
            items.append((ii['bbox'][1], 1, ii))
        items.sort(key=lambda t: (round(t[0]), t[1], t[2][0] if t[1] == 0 else t[2]['bbox'][0]))
        for _y, kind, it in items:
            if kind == 0:
                x, y, font, size, text = it
                text = text.strip()
                if 'BoldOblique' in font and text in SECTIONS:
                    if text != section:
                        variant = 0
                    section = text
                elif size >= 15.5:
                    attr, value, section = None, None, None
                elif size >= 13.5:
                    attr, value, section = None, None, None
                elif abs(size - 11) < 0.3:
                    ma = ATTR_RE.match(text)
                    mv = VALUE_RE.match(text)
                    if 'Bold' in font and ma:
                        attr, value, section = (ma.group(1), ma.group(2)), None, None
                    elif 'Bold' not in font and mv:
                        value, section = (mv.group(1), mv.group(2)), None
                continue
            if section != 'Značky':
                continue
            xref = it['xref']
            if not xref:
                continue
            placements += 1
            if xref not in xref_cache:
                rgb = load_image(doc, xref)
                ink, flags = classify(rgb)
                sid = symbol_id(ink)
                h, w = ink.shape
                if sid not in symbols:
                    k = kind_of(w, h)
                    sym = {'kind': k, 'png': None, 'width': w, 'height': h, 'inkBbox': ink_bbox(ink),
                           'flags': sorted(set(flags)), 'uses': []}
                    if 'photoLike' not in flags and 'empty' not in flags:
                        sym['png'] = f'png/{sid}.png'
                        Image.fromarray(~ink).convert('1').save(PNG_DIR / f'{sid}.png', optimize=True)
                    if k == 'point' and (w, h) != (190, 120):
                        sym['flags'] = sorted(set(sym['flags']) | {'oddSize'})
                    symbols[sid] = sym
                xref_cache[xref] = (sid, symbols[sid])
            sid, sym = xref_cache[xref]
            obj = objects[cur]
            obj['hasZnacky'] = True
            use = {
                'codeDtmz': obj['codeDtmz'], 'codeBase': cur[:10], 'suffix': cur[11:],
                'geometry': obj['geometry'], 'origin': obj['origin'], 'obsahovaCast': obj['obsahovaCast'],
                'objectName': obj['name'],
                'context': 'value' if value else ('attribute' if attr else 'object'),
                'attrCode': attr[0] if attr else None, 'attrName': attr[1] if attr else None,
                'valueCode': value[0] if value else None, 'valueName': value[1] if value else None,
                'variant': variant, 'page': pno + 1,
            }
            variant += 1
            sym['uses'].append(use)
            if use['context'] == 'attribute':
                review.append({'symbol': sid, 'page': pno + 1, 'issue': 'značka u atributu bez hodnoty'})
            if sym['kind'] == 'line' and obj['geometry'] == 'Bod':
                sym['flags'] = sorted(set(sym['flags']) | {'lineOnPoint'})
                review.append({'symbol': sid, 'page': pno + 1, 'issue': f'vzorek linie u bodového objektu {cur}'})
            if sym['kind'] == 'point' and obj['geometry'] == 'Linie':
                review.append({'symbol': sid, 'page': pno + 1, 'issue': f'bodová značka u liniového objektu {cur}'})

    # --- kontroly ----------------------------------------------------------------
    origins = {o: sum(1 for v in objects.values() if v['origin'] == o) for o in ('SŽ', 'JVF')}
    no_code = [k for k in objects if not re.fullmatch(r'\d{10}-\d{2}', k)]
    n_obvod = sum(1 for v in objects.values() if v['geometry'] == 'Obvod')
    log(f'objektů: {len(objects)} (SŽ {origins["SŽ"]}, JVF {origins["JVF"]}; z toho Obvod {n_obvod}), '
        f'bez kódu JVF: {no_code}')
    assert 400 <= len(objects) - n_obvod <= 460, f'neočekávaný počet objektů {len(objects)}'
    assert not no_code, f'objekty bez kódu JVF: {no_code}'

    def stat(pred):
        return sum(1 for s in symbols.values() if pred(s))

    by_origin = {o: stat(lambda s, o=o: any(u['origin'] == o for u in s['uses'])) for o in ('SŽ', 'JVF')}
    summary = (f'umístění značek: {placements}, unikátních: {len(symbols)} (SŽ {by_origin["SŽ"]}, '
               f'JVF {by_origin["JVF"]}), bodových {stat(lambda s: s["kind"] == "point")}, '
               f'linií {stat(lambda s: s["kind"] == "line")}, photoLike {stat(lambda s: "photoLike" in s["flags"])}, '
               f'oddSize {stat(lambda s: "oddSize" in s["flags"])}, k revizi {len(review)}')
    log(summary)
    for r in review:
        log(f'REVIZE str. {r["page"]}: {r["symbol"]} — {r["issue"]}')
    write_json(MANIFEST, {
        'source': pdf.name,
        'symbols': dict(sorted(symbols.items())),
        'objects': dict(sorted(objects.items())),
        'review': review,
    })
    log.save()
    print(summary)
    print(f'→ {MANIFEST.relative_to(ROOT)}, {PNG_DIR.relative_to(ROOT)}/ ({stat(lambda s: s["png"])} PNG)')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemExit('Použití: extract-mozek-symbols.py <MOZeK_fotokatalog_20250601.pdf>')
    main(Path(sys.argv[1]))

#!/usr/bin/env python3
"""
Generátor symbologie ŽXML (DTMŽ, Správa železnic) z fotokatalogu MOZeK.

Vstupy (vše v repozitáři, generují je ostatní skripty v scripts/zxml/):
  - jvf_parser/docs/zxml-1.5.1.6/mozek/ldm-objects.csv   objekty LDM (klíče stylů)
  - jvf_parser/docs/zxml-1.5.1.6/mozek/attribute-map.csv atributy/hodnoty LDM ↔ ŽXML
  - jvf_parser/docs/zxml-1.5.1.6/mozek/manifest.json     značky a jejich použití
  - jvf_parser/docs/zxml-1.5.1.6/knihovny/SVG/<id>.svg   vektorizované bodové značky
  - jvf_parser/docs/zxml-1.5.1.6/knihovny/line-patterns.json  vzory linií
  - scripts/zxml/colors.json                              barvy dle obsahové části

Výstupy:
  - jvf_parser/src/zxml-1.5.1.6/generated/styles.ts a (shodný)
    jvf_parser/src/zxml-1.4.2.1/generated/styles.ts — ZXML_STYLES:
    `<codeBase>-<suffix>` → {base, rules[{attr: XML element, values{kód ŽXML: vzhled}}]}
  - jvf_viewer/public/symboly/zxml/<id>_<barva>.svg — značky přebarvené barvou
    objektu (a černé `_000000`)

Pravidla přiřazení (viz manifest.uses):
  - značka u objektu → base, u hodnoty číselníku → pravidlo atributu,
  - bodová značka → `symbol`, vzorek linie → `dashMm` (+ `widthMm` 0,5 u tlustých),
  - vzorek linie u definičního bodu (-04) nebo obvodu (-05) → sourozenecká
    plocha (-03), pokud ta pro stejný kontext vlastní nemá,
  - vzorek linie u bodu (-01) a bodová značka u linie (-02) se nepoužijí,
  - více značek pro stejný kontext → první (varianta 0); ostatní jen v manifestu,
  - atribut `Natoceni` v LDM → `rotationAttr: 'Natoceni'`,
  - kód atributu z fotokatalogu (ŽXML 1.4.2.1) se hledá v LDM 1.5.0.2; když se
    změnil, dohledá se atribut podle kódu hodnoty číselníku.

Spuštění z rootu repa:
    python3 scripts/zxml/build-zxml-styles.py
"""
import json
import re
import shutil
import sys
from collections import Counter, defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import (ATTR_MAP, LDM_OBJECTS, LINE_PATTERNS, MANIFEST, ROOT, SCRIPTS,  # noqa: E402
                         SVG_DIR, load_json, read_csv)

OUT_TS = [ROOT / 'jvf_parser/src/zxml-1.5.1.6/generated/styles.ts',
          ROOT / 'jvf_parser/src/zxml-1.4.2.1/generated/styles.ts']
OUT_SVG = ROOT / 'jvf_viewer/public/symboly/zxml'
SYMBOLOGY_TS = ROOT / 'jvf_viewer/src/map/symbology.ts'
COLORS = SCRIPTS / 'colors.json'
BLACK = '#000000'
BASE_WIDTH = 0.25
# Objekty JVF, jejichž značka ve fotokatalogu MOZeK je jen kopií oficiální
# značky Katalogu DTM ČR (porovnáno vizuálně 2026-11-06) — vektorizace z PNG
# se pro ně nepoužije, kreslí se oficiálním SVG ČÚZK (viz `usesDialectStyle`).
# Objekty, které SŽ kreslí jinak (podrobný bod, výškový bod, zařízení sítí…),
# si značku MOZeK ponechávají.
PREFER_KATALOG = {
    '0100000084': 'studna na veřejném prostranství',
    '0100000139': 'jiné zařízení staveb TI',
    '0100000154': 'drobná sakrální stavba',
    '0100000177': 'komín',
    '0100000191': 'vrt',
}


def warn(msg: str) -> None:
    print(f'  WARN: {msg}', file=sys.stderr)


def load_colors() -> dict:
    """colors.json; části JVF obnovit z FALLBACK_COLORS vieweru (je-li k dispozici)."""
    cfg = load_json(COLORS)
    src = SYMBOLOGY_TS.read_text(encoding='utf-8') if SYMBOLOGY_TS.exists() else ''
    m = re.search(r'FALLBACK_COLORS[^=]*=\s*\{(.*?)\n\};', src, re.S)
    if m:
        fb = dict(re.findall(r'^\s*(\w+)\s*:\s*[\'"](#[0-9a-fA-F]{6})[\'"]', m.group(1), re.M))
        changed = False
        for part in cfg['jvfParts']:
            if part in fb and cfg['byObsahovaCast'].get(part) != fb[part].lower():
                cfg['byObsahovaCast'][part] = fb[part].lower()
                changed = True
        if changed:
            COLORS.write_text(json.dumps(cfg, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
            print('  colors.json: barvy částí JVF obnoveny z FALLBACK_COLORS')
    else:
        warn('FALLBACK_COLORS v jvf_viewer/src/map/symbology.ts nenalezeno — barvy JVF z colors.json')
    return cfg


def color_for(cfg: dict, part: str) -> str:
    part = cfg['aliases'].get(part, part)
    return cfg['byObsahovaCast'].get(part, cfg['default']).lower()


def main() -> None:
    cfg = load_colors()
    objects = {f'{o["codeBase"]}-{o["suffix"]}': o for o in read_csv(LDM_OBJECTS)}
    amap = read_csv(ATTR_MAP)
    manifest = load_json(MANIFEST)
    patterns = load_json(LINE_PATTERNS)

    by_obj: dict[str, list[dict]] = defaultdict(list)
    for r in amap:
        by_obj[f'{r["codeBase"]}-{r["suffix"]}'].append(r)

    def resolve_value(src: str, tgt: str, attr_code: str, value_code: str):
        """(XML element, kód hodnoty v ŽXML) nebo (None, důvod)."""
        rows = by_obj.get(src, [])
        attr_rows = [r for r in rows if r['attrCode'] == attr_code]
        if not attr_rows:
            attr_rows = [r for r in rows if r['valueCode'] == value_code]
            if attr_rows:
                stats['attrByValue'] += 1
        if not attr_rows:
            return None, f'atribut {attr_code} ani hodnota {value_code} v LDM objektu {src} není'
        leaf = attr_rows[0]['xmlLeaf']
        trows = by_obj.get(tgt, [])
        hit = [r for r in trows if r['xmlLeaf'] == leaf and r['valueCode'] == value_code]
        if not hit:
            hit = [r for r in trows if r['valueCode'] == value_code]
        if not hit:
            src_hit = [r for r in attr_rows if r['valueCode'] == value_code]
            if src_hit and any(r['xmlLeaf'] == leaf for r in trows):
                hit = src_hit
        if not hit:
            return None, f'hodnota {value_code} atributu {leaf} v LDM objektu {tgt} není'
        return hit[0]['xmlLeaf'], hit[0]['valueXml']

    stats: Counter = Counter()
    # (cíl, kontext) → [(priorita, varianta, strana, symbol, vzhled)]
    assign: dict[tuple, list] = defaultdict(list)
    for sid, sym in manifest['symbols'].items():
        if not sym['png'] or 'photoLike' in sym['flags']:
            stats['photoLike'] += len(sym['uses'])
            continue
        if sym['kind'] == 'point':
            if not sym.get('svg'):
                warn(f'{sid}: chybí SVG (spusťte vectorize.py)')
                continue
            app = {'symbol': sid}
        else:
            lp = patterns.get(sid)
            if lp is None:
                warn(f'{sid}: chybí vzor linie (spusťte extract-line-patterns.py)')
                continue
            app = {}
            if lp['dashMm']:
                app['dashMm'] = lp['dashMm']
            if lp['widthMm'] != BASE_WIDTH:
                app['widthMm'] = lp['widthMm']
        for u in sym['uses']:
            src = f'{u["codeBase"]}-{u["suffix"]}'
            tgt, prio = src, 0
            if sym['kind'] == 'line':
                if u['suffix'] == '01':
                    stats['lineOnPoint'] += 1
                    continue
                if u['suffix'] in ('04', '05'):
                    tgt, prio = f'{u["codeBase"]}-03', 1
            elif u['suffix'] == '02':
                stats['pointOnLine'] += 1
                continue
            elif u['suffix'] == '05':
                stats['pointOnObvod'] += 1
                continue
            if tgt not in objects:
                warn(f'{sid} str. {u["page"]}: objekt {tgt} ({u["objectName"]}) v LDM 1.5.0.2 není')
                stats['unknownObject'] += 1
                continue
            if u['context'] == 'value':
                leaf, val = resolve_value(src, tgt, u['attrCode'], u['valueCode'])
                if leaf is None:
                    warn(f'{sid} str. {u["page"]}: {val} ({u["attrName"]} = {u["valueName"]})')
                    stats['unmappedValue'] += 1
                    continue
                ctx = (leaf, val)
            else:
                ctx = None
            if not app:
                stats['solidNoop'] += 1
                if ctx is None:
                    continue
            assign[(tgt, sym['kind'], ctx)].append((prio, u['variant'], u['page'], sid, app))

    styles: dict[str, dict] = {}
    natoceni = {f'{r["codeBase"]}-{r["suffix"]}' for r in amap if r['xmlLeaf'] == 'Natoceni'}
    for key in sorted(objects):
        o = objects[key]
        base = {'color': color_for(cfg, o['obsahovaCast']), 'widthMm': BASE_WIDTH}
        if key in natoceni:
            base['rotationAttr'] = 'Natoceni'
        styles[key] = {'base': base}
    for (tgt, kind, ctx), cands in sorted(assign.items(), key=lambda kv: str(kv[0])):
        cands.sort(key=lambda c: c[:3])
        best_prio = cands[0][0]
        if best_prio == 1 and any(k[0] == tgt and k[1] == kind and k[2] == ctx and v[0][0] == 0
                                  for k, v in assign.items()):
            continue
        prio, _var, _page, sid, app = cands[0]
        if prio:
            stats['reassignedTo03'] += 1
        if len({c[3] for c in cands}) > 1:
            stats['variantsDropped'] += len({c[3] for c in cands}) - 1
        st = styles[tgt]
        if ctx is None:
            st['base'].update(app)
        else:
            leaf, val = ctx
            rules = st.setdefault('rules', {})
            if app:
                rules.setdefault(leaf, {})[val] = dict(app)

    # pravidla do výsledného tvaru + kontroly
    urc = {(f'{r["codeBase"]}-{r["suffix"]}', r['xmlLeaf']) for r in amap if r['urcujiciSymbol'] == '1'}
    ldm_values: dict[tuple[str, str], set[str]] = defaultdict(set)
    for r in amap:
        if r['valueXml']:
            ldm_values[(f'{r["codeBase"]}-{r["suffix"]}', r['xmlLeaf'])].add(r['valueXml'])
    not_urc = []
    for key, st in styles.items():
        rules = st.pop('rules', None)
        if rules:
            # Pravidlo podle atributu, který LDM nemá jako určující symbol (např.
            # umístění návěstidla), koliduje s pravidlem určujícího atributu téže
            # složky vzhledu → vynechat (zůstane jen v manifestu).
            urc_aspects = {asp for a, v in rules.items() if (key, a) in urc
                           for app in v.values() for asp in app}
            for a in [a for a in rules if (key, a) not in urc]:
                if {asp for app in rules[a].values() for asp in app} & urc_aspects:
                    warn(f'{key}: pravidlo podle {a} (není URCUJICI_SYMBOL) vynecháno — koliduje '
                         f's určujícím atributem')
                    stats['droppedNonUrcRule'] += 1
                    del rules[a]
            # Všechny (nebo aspoň 3) hodnoty číselníku se stejným vzhledem → vzhled
            # na atributu nezávisí → základní vzhled.
            for a in list(rules):
                apps = list(rules[a].values())
                same = all(app == apps[0] for app in apps)
                covers = set(rules[a]) >= ldm_values.get((key, a), {None}) or len(apps) >= 3
                if (same and covers and len(rules) == 1
                        and not set(apps[0]) & set(st['base']) - {'widthMm'}):
                    st['base'].update(apps[0])
                    stats['promotedToBase'] += 1
                    del rules[a]
        if rules:
            st['rules'] = [{'attr': a, 'values': dict(sorted(v.items(), key=lambda kv: (len(kv[0]), kv[0])))}
                           for a, v in sorted(rules.items())]
            for a in rules:
                if (key, a) not in urc:
                    not_urc.append(f'{key}:{a}')
            if 'dashMm' in st['base'] and any('dashMm' not in v for r in st['rules'] for v in r['values'].values()):
                warn(f'{key}: základní vzhled čárkovaný, některá hodnota plná — pravidlo plnou čáru nevyjádří')
    # Shodné značky s Katalogem ČÚZK → bez značky MOZeK (kreslí se oficiální SVG).
    for key, st in styles.items():
        if key.split('-')[0] not in PREFER_KATALOG:
            continue
        st['base'].pop('symbol', None)
        for r in st.get('rules', []):
            for v in r['values'].values():
                v.pop('symbol', None)
            r['values'] = {k: v for k, v in r['values'].items() if v}
        st['rules'] = [r for r in st.get('rules', []) if r['values']]
        if not st['rules']:
            del st['rules']
        stats['preferKatalog'] += 1
    with_rules = {k for k, s in styles.items() if 'rules' in s}
    urc_objects = {k for k, a in urc if a != 'Natoceni'}
    urc_without = sorted(urc_objects - with_rules - {k for k, s in styles.items()
                                                     if 'symbol' in s['base'] or 'dashMm' in s['base']})
    if not_urc:
        warn(f'pravidla podle atributů, které LDM nemá jako URCUJICI_SYMBOL: {not_urc}')

    # Kombinace značka × barva, které se mohou v mapě objevit (barva objektu + černá).
    combos: set[tuple[str, str]] = set()
    for st in styles.values():
        apps = [st['base']] + [a for r in st.get('rules', []) for a in r['values'].values()]
        for app in apps:
            if 'symbol' in app:
                combos.update({(app['symbol'], st['base']['color']), (app['symbol'], BLACK)})

    # --- SVG pro viewer ----------------------------------------------------------
    if OUT_SVG.exists():
        shutil.rmtree(OUT_SVG)
    OUT_SVG.mkdir(parents=True)
    for sid, c in sorted(combos):
        svg = (SVG_DIR / f'{sid}.svg').read_text(encoding='utf-8')
        svg = re.sub(r'#000000\b', c, svg, flags=re.I)
        (OUT_SVG / f'{sid}_{c[1:].lower()}.svg').write_text(svg, encoding='utf-8')

    # --- TS ------------------------------------------------------------------------
    lines = [
        '// Generováno skriptem scripts/zxml/build-zxml-styles.py — NEEDITOVAT ručně.',
        f'// Zdroj: fotokatalog MOZeK (SŽ M20/MP014, {manifest.get("source", "MOZeK_fotokatalog_20250601.pdf")}),',
        '// LDM DTMŽ 1.5.0.2 V23 (SZ_LDM_1.5.0.2_V23.xlsx); značky vektorizované z obrázků fotokatalogu',
        '// (jvf_parser/docs/zxml-1.5.1.6/knihovny), barvy dle obsahové části (scripts/zxml/colors.json).',
        '// Klíč `<codeBase>-<suffix>` (01 Bod, 02 Linie, 03 Plocha, 04 Definiční bod); pravidla podle',
        '// XML elementu v AtributyObjektu a kódu hodnoty číselníku v ŽXML.',
        '',
        "import type { ObjectStyle } from '../../styles/types.js';",
        '',
        'export const ZXML_STYLES: Record<string, ObjectStyle> = {',
    ]
    for key, entry in styles.items():
        lines.append(f'  {json.dumps(key)}: {json.dumps(entry, ensure_ascii=False, separators=(",", ":"))},')
    lines += ['};', '']
    for out in OUT_TS:
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text('\n'.join(lines), encoding='utf-8')

    n_rules = sum(len(s.get('rules', [])) for s in styles.values())
    n_values = sum(len(r['values']) for s in styles.values() for r in s.get('rules', []))
    used_symbols = {sid for sid, _ in combos}
    print(f'{len(styles)} objektů, {len(with_rules)} s pravidly ({n_rules} atributů, {n_values} hodnot), '
          f'se symbolem v base {sum("symbol" in s["base"] for s in styles.values())}, '
          f's čárkováním v base {sum("dashMm" in s["base"] for s in styles.values())}, '
          f'Natoceni {len(natoceni & set(styles))}')
    print(f'{len(used_symbols)} použitých bodových značek, {len(combos)} SVG → {OUT_SVG.relative_to(ROOT)}')
    print(f'statistika: {dict(sorted(stats.items()))}')
    print(f'objekty s určujícím atributem (LDM) bez značky z fotokatalogu: {len(urc_without)}')
    print('→ ' + ', '.join(str(p.relative_to(ROOT)) for p in OUT_TS))


if __name__ == '__main__':
    main()

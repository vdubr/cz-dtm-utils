#!/usr/bin/env python3
"""
Hlídání nových verzí datových modelů u správců (ČÚZK, SŽ, ČKZ).

Stáhne stránky správců, vytáhne z nich čísla verzí regexem a porovná je
s verzemi podporovanými monorepem (registr v `jvf_dtm_types/src/versions.ts`
a `jvf_dtm_types/src/dialects.ts`). Vypíše neznámé (novější) verze s odkazem.

Použití:  npm run check:upstream      (exit 1 = nalezena nepodporovaná verze)

Postup při nové verzi je popsaný v CLAUDE.md („Aktualizace verze datového
modelu"). Stránky SŽ odmítají výchozí User-Agent (403) — posílá se UA prohlížeče.
"""
from __future__ import annotations

import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

SOURCES = [
    # (model, URL, regex verze, prefix id v registru)
    ('JVF DTM', 'https://cuzk.gov.cz/DMVS/JVF-DTM/Budouci-verze.aspx',
     r'JVF[ _]DTM[ _]?(1\.\d+(?:\.\d+){1,2})', ''),
    ('JVF DTM', 'https://cuzk.gov.cz/DMVS/JVF-DTM.aspx',
     r'JVF[ _]DTM[ _]?(1\.\d+(?:\.\d+){1,2})', ''),
    ('ŽXML', 'https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/'
             'digitalne-technicka-mapa-zeleznice-technicke-standardy/datovy-model-dtmz',
     r'ŽXML\s+(1\.\d+\.\d+\.\d+)', 'zxml-'),
    ('UDM', 'https://www.ckz.cz/udm',
     r'UDM\s+(?:verze\s+)?(\d+\.\d+\.\d+)', 'udm-'),
]


def supported_versions() -> set[str]:
    """Id verzí z registru (`'1.4.3'`, `'udm-2.1.1'`, `'zxml-1.5.1.6'` …)."""
    text = (ROOT / 'jvf_dtm_types/src/versions.ts').read_text(encoding='utf-8')
    text += (ROOT / 'jvf_dtm_types/src/dialects.ts').read_text(encoding='utf-8')
    ids: set[str] = set()
    for arr in re.findall(r"_VERSIONS = \[([^\]]*)\] as const", text):
        ids.update(re.findall(r"'([^']+)'", arr))
    return ids


def key(v: str) -> tuple[int, ...]:
    return tuple(int(x) for x in v.split('.'))


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'cs'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode('utf-8', 'replace')


def main() -> int:
    known = supported_versions()
    print('Podporované verze:', ', '.join(sorted(known)))
    newer: list[str] = []
    for model, url, pattern, prefix in SOURCES:
        try:
            html = fetch(url)
        except Exception as e:  # noqa: BLE001 — síťová chyba nesmí shodit kontrolu ostatních zdrojů
            print(f'  ! {model}: {url} — nelze stáhnout ({e})')
            continue
        found = sorted(set(re.findall(pattern, html)), key=key)
        ours = [key(v[len(prefix):]) for v in known if v.startswith(prefix) and v[len(prefix):][:1].isdigit()]
        latest_ours = max(ours) if ours else (0,)
        unknown = [v for v in found if f'{prefix}{v}' not in known and key(v) > latest_ours]
        print(f'  {model}: na stránce {", ".join(found) or "—"}')
        for v in unknown:
            newer.append(f'{model} {v} — {url}')
    if newer:
        print('\nNOVÉ verze, které monorepo nepodporuje:')
        for n in newer:
            print('  •', n)
        return 1
    print('\nŽádná novější verze.')
    return 0


if __name__ == '__main__':
    sys.exit(main())

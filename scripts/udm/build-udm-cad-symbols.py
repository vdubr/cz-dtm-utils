#!/usr/bin/env python3
"""
Generátor geometrie symbolů UDM pro export do CAD (balíček jvf-cad).

Tenký obal nad scripts/cad/build-cad-symbols.py s profilem `udm`
(knihovna symbolů ČKZ → jvf_cad/src/generated/symbols.ts, UDM_CAD_SYMBOLS).
Popis formátu primitiv a podporovaného SVG viz tamtéž.

Spuštění z rootu repa:  python3 scripts/udm/build-udm-cad-symbols.py
"""
import runpy
import sys
from pathlib import Path

if __name__ == '__main__':
    sys.argv = [sys.argv[0], '--profile', 'udm']
    runpy.run_path(str(Path(__file__).resolve().parents[1] / 'cad/build-cad-symbols.py'), run_name='__main__')

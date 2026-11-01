#!/usr/bin/env python3
"""
Generátor ukázkových souborů ŽXML 1.5.1.6 z XSD (bez externích závislostí).

Záznam objektu se sestaví z XSD objektu: povinné elementy `AtributyObjektu`
(i uvnitř sdílených skupin `SpolecneAtributy…`) dostanou vzorovou hodnotu —
první položku číselníku, jinak hodnotu podle datového typu — pokud ji
specifikace ukázky nepřepíše. Geometrie podle typu `cmn:GeometrieObjektu…`.

Použití (z kořene repa):
    python3 scripts/zxml/samplegen.py                # obě ukázky
    xmllint --noout --schema jvf_parser/docs/zxml-1.5.1.6/xsd/index/index_data.xsd <soubor>

Ukázky jsou smyšlená data — viz `SAMPLES` níže.
"""
from __future__ import annotations

import math
import xml.etree.ElementTree as ET
from dataclasses import dataclass, field
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[2]
XSD = ROOT / 'jvf_parser/docs/zxml-1.5.1.6/xsd'
OUT_DIR = ROOT / 'jvf_parser/samples/zxml-1.5.1.6'
XS = '{http://www.w3.org/2001/XMLSchema}'
GML = 'http://www.opengis.net/gml/3.2'


# ---------------------------------------------------------------------------
# Index schémat
# ---------------------------------------------------------------------------

class Schema:
    """Jeden XSD soubor: targetNamespace + top-level elementy a typy."""

    def __init__(self, path: Path):
        self.path = path
        self.root = ET.parse(path).getroot()
        self.tns = self.root.get('targetNamespace', '')
        self.elements = {e.get('name'): e for e in self.root.findall(f'{XS}element')}
        self.complex = {e.get('name'): e for e in self.root.findall(f'{XS}complexType')}
        self.simple = {e.get('name'): e for e in self.root.findall(f'{XS}simpleType')}


COMMON = {s.tns: s for s in (Schema(XSD / 'common' / f) for f in ('atributy.xsd', 'atributy_sz.xsd', 'common.xsd'))}


def split_qname(q: str, default_ns: str) -> tuple[str, str]:
    """`atr:X` → (`atr`, `X`); bez prefixu → výchozí jmenný prostor (= prefix, URI jsou krátká)."""
    return tuple(q.split(':', 1)) if ':' in q else (default_ns, q)  # type: ignore[return-value]


def object_index() -> dict[str, Path]:
    """Název kořenového elementu objektu → XSD soubor."""
    idx = {}
    for sub in ('objekty', 'objekty_sz'):
        for p in sorted((XSD / sub).glob('*.xsd')):
            el = ET.parse(p).getroot().find(f'{XS}element')
            if el is not None:
                idx[el.get('name')] = p
    return idx


OBJECTS = object_index()


# ---------------------------------------------------------------------------
# Hodnoty atributů
# ---------------------------------------------------------------------------

def sample_for_simple(st: ET.Element, schema: Schema) -> str:
    restr = st.find(f'{XS}restriction')
    if restr is None:
        return 'ukázka'
    enums = restr.findall(f'{XS}enumeration')
    if enums:
        return enums[0].get('value', '')
    return sample_for_type(restr.get('base', 'xs:string'), schema, restr)


def sample_for_type(t: str, schema: Schema, restr: ET.Element | None = None) -> str:
    ns, name = split_qname(t, schema.tns)
    if ns == 'xs':
        if name in ('integer', 'int', 'long', 'short', 'nonNegativeInteger', 'positiveInteger'):
            return '1'
        if name in ('decimal', 'double', 'float'):
            return '1.0'
        if name == 'boolean':
            return 'false'
        if name == 'dateTime':
            return '2026-11-01T10:00:00'
        if name == 'date':
            return '2026-11-01'
        max_len = restr.find(f'{XS}maxLength') if restr is not None else None
        text = 'ukázka'
        return text[: int(max_len.get('value'))] if max_len is not None else text
    sch = COMMON.get(ns, schema)
    if name in sch.simple:
        return sample_for_simple(sch.simple[name], sch)
    return 'ukázka'


#: Realistické výchozí hodnoty (místo první položky číselníku).
PREFERRED = {
    'UrovenUmisteniObjektuZPS': '0',  # na povrchu
    'UrovenUmisteniObjektuTI': '0',
    'UrovenUmisteniObjektuDI': '0',
    'TridaPresnostiPoloha': '3',
    'TridaPresnostiVyska': '3',
    'NeuplnaData': 'false',
}


def sample_value(ns: str, name: str) -> str:
    if name in PREFERRED:
        return PREFERRED[name]
    sch = COMMON[ns]
    el = sch.elements.get(name)
    if el is None:
        return 'ukázka'
    st = el.find(f'{XS}simpleType')
    if st is not None:
        return sample_for_simple(st, sch)
    return sample_for_type(el.get('type', 'xs:string'), sch)


# ---------------------------------------------------------------------------
# Geometrie
# ---------------------------------------------------------------------------

Coord = tuple[float, float, float]


class Ids:
    n = 0

    @classmethod
    def next(cls) -> str:
        cls.n += 1
        return f'ID{cls.n:05d}'


def fmt(c: Coord, dim: int) -> str:
    return ' '.join(f'{v:.2f}' for v in c[:dim])


def poslist(cs: list[Coord], dim: int) -> str:
    return ' '.join(fmt(c, dim) for c in cs)


def gml_point(c: Coord, dim: int) -> str:
    return (f'<gml:Point gml:id="{Ids.next()}" srsName="EPSG:5514" srsDimension="{dim}">'
            f'<gml:pos>{fmt(c, dim)}</gml:pos></gml:Point>')


def gml_line(cs: list[Coord], dim: int) -> str:
    return (f'<gml:LineString gml:id="{Ids.next()}" srsName="EPSG:5514" srsDimension="{dim}">'
            f'<gml:posList>{poslist(cs, dim)}</gml:posList></gml:LineString>')


def gml_polygon(ring: list[Coord], dim: int) -> str:
    return (f'<gml:Polygon gml:id="{Ids.next()}" srsName="EPSG:5514" srsDimension="{dim}"><gml:exterior>'
            f'<gml:LinearRing><gml:posList>{poslist(ring, dim)}</gml:posList></gml:LinearRing>'
            f'</gml:exterior></gml:Polygon>')


def geometry_xml(geom_type: str, coords: list[Coord]) -> str:
    """Obsah `GeometrieObjektu` podle `cmn:GeometrieObjektu…Type` (lokální elementy v ns cmn)."""
    t = geom_type.split(':')[-1].removeprefix('GeometrieObjektu').removesuffix('Type')
    if t in ('Bod2D', 'Bod3D'):
        dim = 3 if t.endswith('3D') else 2
        return f'<cmn:{t}><gml:pointProperty>{gml_point(coords[0], dim)}</gml:pointProperty></cmn:{t}>'
    if t in ('Linie2D', 'Linie3D'):
        dim = 3 if t.endswith('3D') else 2
        return f'<cmn:{t}><gml:curveProperty>{gml_line(coords, dim)}</gml:curveProperty></cmn:{t}>'
    ring = coords if coords[0] == coords[-1] else coords + [coords[0]]
    if t == 'Plocha2DDTI':
        return f'<cmn:Plocha2D><gml:surfaceProperty>{gml_polygon(ring, 2)}</gml:surfaceProperty></cmn:Plocha2D>'
    if t == 'Plocha3DDTI':
        return f'<cmn:Plocha3D><gml:surfaceProperty>{gml_polygon(ring, 3)}</gml:surfaceProperty></cmn:Plocha3D>'
    if t == 'PlochaZPS':
        return (f'<cmn:Plocha2D>{gml_polygon(ring, 2)}</cmn:Plocha2D>'
                f'<cmn:Obvod3D>{gml_line(ring, 3)}</cmn:Obvod3D>')
    raise ValueError(f'neznámý typ geometrie {geom_type}')


# ---------------------------------------------------------------------------
# Záznamy a objekty
# ---------------------------------------------------------------------------

@dataclass
class Rec:
    kind: str  # Ins / Upd / Del / RefN / RefV
    coords: list[Coord] = field(default_factory=list)
    attrs: dict[str, object] = field(default_factory=dict)


def required(el: ET.Element) -> bool:
    return el.get('minOccurs', '1') != '0'


def emit_group(ct: ET.Element, sch: Schema, attrs: dict[str, object], used: set[str]) -> list[str]:
    """Obsah sdílené skupiny (complexType) — povinné a přepsané prvky."""
    out = []
    container = ct.find(f'{XS}all')
    if container is None:
        container = ct.find(f'{XS}sequence')
    for el in container.findall(f'{XS}element') if container is not None else []:
        ref = el.get('ref')
        if ref:
            ns, name = split_qname(ref, sch.tns)
        else:
            ns, name = sch.tns, el.get('name')
        if name in attrs:
            value = attrs[name]
        elif required(el):
            value = sample_value(ns, name) if ref else sample_for_type(el.get('type', 'xs:string'), sch)
        else:
            continue
        used.add(name)
        out.append(f'<{ns}:{name}>{escape(str(value))}</{ns}:{name}>')
    return out


def emit_record(p: str, schema: Schema, rec: Rec) -> str:
    rt = schema.complex.get(rec.kind)
    if rt is None:
        raise ValueError(f'{schema.path.name}: chybí druh záznamu {rec.kind}')
    parts = [f'<{p}:ZaznamObjektu{rec.kind}>']
    used: set[str] = set()
    for el in rt.find(f'{XS}sequence').findall(f'{XS}element'):
        name = el.get('name')
        if name == 'AtributyObjektu':
            parts.append(f'<{p}:AtributyObjektu>')
            for a in el.find(f'{XS}complexType').find(f'{XS}all').findall(f'{XS}element'):
                if a.get('name'):  # sdílená skupina: name + type
                    ns, tname = split_qname(a.get('type'), schema.tns)
                    inner = emit_group(COMMON[ns].complex[tname], COMMON[ns], rec.attrs, used)
                    if inner or required(a):
                        parts.append(f'<{p}:{a.get("name")}>' + ''.join(inner) + f'</{p}:{a.get("name")}>')
                else:
                    ns, aname = split_qname(a.get('ref'), schema.tns)
                    if aname in rec.attrs:
                        value = rec.attrs[aname]
                    elif required(a):
                        value = sample_value(ns, aname)
                    else:
                        continue
                    used.add(aname)
                    parts.append(f'<{ns}:{aname}>{escape(str(value))}</{ns}:{aname}>')
            parts.append(f'</{p}:AtributyObjektu>')
        elif name == 'GeometrieObjektu':
            if not rec.coords:
                if required(el):
                    raise ValueError(f'{schema.path.name} {rec.kind}: chybí geometrie')
                continue
            parts.append(f'<{p}:GeometrieObjektu>{geometry_xml(el.get("type"), rec.coords)}</{p}:GeometrieObjektu>')
    unknown = set(rec.attrs) - used
    if unknown:
        raise ValueError(f'{schema.path.name} {rec.kind}: atributy mimo XSD {sorted(unknown)}')
    parts.append(f'</{p}:ZaznamObjektu{rec.kind}>')
    return ''.join(parts)


def emit_object(element: str, records: list[Rec]) -> tuple[str, str]:
    """XML objektového typu + jeho prefix (= targetNamespace)."""
    schema = Schema(OBJECTS[element])
    p = schema.tns
    main = schema.complex[schema.elements[element].get('type').split(':')[-1]]
    head = []
    for el in main.iter(f'{XS}element'):
        name, fixed = el.get('name'), el.get('fixed')
        if name == 'ObjektovyKod':
            head.append(f'<{p}:ObjektovyKod>{fixed}</{p}:ObjektovyKod>')
        elif name == 'ObjektovyTypNazev':
            attrs = {a.get('name'): a.get('fixed') for a in el.iter(f'{XS}attribute') if a.get('use') == 'required'}
            attr_xml = ''.join(f' {k}="{v}"' for k, v in attrs.items())
            head.append(f'<{p}:ObjektovyTypNazev{attr_xml}>{escape(fixed)}</{p}:ObjektovyTypNazev>')
        elif name in ('KategorieObjektu', 'SkupinaObjektu', 'ObsahovaCast'):
            head.append(f'<{p}:{name}>{escape(fixed)}</{p}:{name}>')
    body = ''.join(emit_record(p, schema, r) for r in records)
    xml = (f'<objtyp:{element}>' + ''.join(head) +
           f'<{p}:ZaznamyObjektu>{body}</{p}:ZaznamyObjektu></objtyp:{element}>')
    return xml, p


@dataclass
class Staniceni:
    id: str
    bod: Coord
    tudu: str
    km: float
    typ: int = 1


def emit_staniceni(items: list[Staniceni]) -> str:
    out = ['<cmn:StaniceniData>']
    for s in items:
        out.append(
            f'<cmn:StaniceniInfo><cmn:ID>{s.id}</cmn:ID><cmn:Staniceni>'
            f'<cmn:TypStaniceni>{s.typ}</cmn:TypStaniceni><cmn:ZpusobVypoctu>0</cmn:ZpusobVypoctu>'
            f'<cmn:GeometrieObjektu>{geometry_xml("GeometrieObjektuBod3DType", [s.bod])}</cmn:GeometrieObjektu>'
            f'<cmn:TUDU>{s.tudu}</cmn:TUDU><cmn:Staniceni>{s.km:.3f}</cmn:Staniceni>'
            f'<cmn:DatumVypoctu>2026-11-01T10:00:00</cmn:DatumVypoctu>'
            f'<cmn:DatumPlatnostiOd>2026-11-23T00:00:00</cmn:DatumPlatnostiOd>'
            f'<cmn:DatumPlatnostiDo>9999-12-31T00:00:00</cmn:DatumPlatnostiDo>'
            f'</cmn:Staniceni></cmn:StaniceniInfo>'
        )
    out.append('</cmn:StaniceniData>')
    return ''.join(out)


def document(comment: str, objects: list[tuple[str, list[Rec]]], typ_zapisu: str,
             staniceni: list[Staniceni] | None = None) -> str:
    Ids.n = 0
    parts, prefixes = [], []
    # `objtyp:Data` = sekvence ObjektJVFDTM* a teprve pak ObjektSZ* (index_data.xsd).
    ordered = sorted(objects, key=lambda o: OBJECTS[o[0]].parent.name == 'objekty_sz')
    for element, recs in ordered:
        xml, p = emit_object(element, recs)
        parts.append(xml)
        prefixes.append(p)
    ns = ''.join(f' xmlns:{p}="{p}"' for p in sorted(set(prefixes)))
    body = ''.join(parts)
    stan = emit_staniceni(staniceni) if staniceni else ''
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<!-- {comment} -->\n'
        f'<objtyp:JVFDTM xmlns:objtyp="objtyp" xmlns:cmn="cmn" xmlns:atr="atr" xmlns:atrsz="atrsz"'
        f' xmlns:gml="{GML}"{ns}>'
        '<objtyp:DataJVFDTM>'
        '<cmn:VerzeJVFDTM>1.5.0.2</cmn:VerzeJVFDTM><cmn:VerzeZXML>1.5.1.6</cmn:VerzeZXML>'
        f'<cmn:DatumZapisu>2026-11-01T10:00:00</cmn:DatumZapisu><cmn:TypZapisu>{typ_zapisu}</cmn:TypZapisu>'
        f'<objtyp:Data>{body}</objtyp:Data>{stan}'
        '</objtyp:DataJVFDTM></objtyp:JVFDTM>\n'
    )
    return pretty(xml)


def pretty(xml: str) -> str:
    """Odsazení pro čitelnost (zachová deklaraci a komentář)."""
    head, rest = xml.split('\n', 1)
    comment, body = rest.split('\n', 1)
    for prefix, uri in [('objtyp', 'objtyp'), ('cmn', 'cmn'), ('atr', 'atr'), ('atrsz', 'atrsz'), ('gml', GML)]:
        ET.register_namespace(prefix, uri)
    import re
    for p in set(re.findall(r'xmlns:(\w+)="', body)):
        ET.register_namespace(p, p)
    tree = ET.ElementTree(ET.fromstring(body))
    ET.indent(tree, space='  ')
    return head + '\n' + comment + '\n' + ET.tostring(tree.getroot(), encoding='unicode') + '\n'


# ---------------------------------------------------------------------------
# Geometrie ukázkového nádraží (schematicky, osa kolejí ve směru stanice Řevnice)
# ---------------------------------------------------------------------------

# Kotevní bod: stanice Řevnice (WGS84 49.91355 N, 14.23636 E → S-JTSK cs2cs).
ORIGIN = (-758598.90, -1060348.42)
Z0 = 213.40
# Směr kolejí (jednotkový vektor podél trati, z bodu stanice k severovýchodu).
_d = (263.17, 97.89)
_n = math.hypot(*_d)
U = (_d[0] / _n, _d[1] / _n)
V = (-U[1], U[0])  # kolmice (vlevo)


def P(s: float, t: float, dz: float = 0.0) -> Coord:
    """Bod v místní soustavě stanice: s = podél trati [m], t = napříč [m]."""
    return (ORIGIN[0] + s * U[0] + t * V[0], ORIGIN[1] + s * U[1] + t * V[1], Z0 + dz + 0.002 * s)


def rect(s0: float, s1: float, t0: float, t1: float) -> list[Coord]:
    return [P(s0, t0), P(s1, t0), P(s1, t1), P(s0, t1), P(s0, t0)]


def angle_along(deg_offset: float = 0.0) -> int:
    """Natočení symbolu ve stupních (od osy X proti směru hodin) — podél trati."""
    return int(round(math.degrees(math.atan2(U[1], U[0])) + deg_offset)) % 360


def minimal() -> str:
    return document(
        'Ukázka ŽXML 1.5.1.6 — minimální (smyšlená data, generuje scripts/zxml/samplegen.py)',
        [
            ('NastupistePlocha', [Rec('Ins', rect(-60, 60, 4.0, 7.0))]),
            ('Baliza', [Rec('Ins', [P(-80, 0.0)], {'Natoceni': angle_along()})]),
            ('Brzda', [Rec('Upd', [P(120, 0), P(150, 0)], {'ID': '900000001'})]),
            ('SklepBod', [Rec('Del', [], {'ID': '900000002'})]),
        ],
        'změnové věty',
        [Staniceni('900000001', P(120, 0), '351102', 22.418)],
    )


def nadrazi() -> str:
    koleje = [-2.25, 2.25]  # dvě hlavní koleje, osa trati v t = 0
    objs: list[tuple[str, list[Rec]]] = []
    objs.append(('OsaKolejeZeleznicniTrate', [Rec('Ins', [P(-300, t), P(300, t)]) for t in koleje]))
    objs.append(('ObvodDrahy', [Rec('Ins', rect(-300, 300, -12, 12))]))
    objs.append(('NastupistePlocha', [Rec('Ins', rect(-80, 80, 4.0, 7.5)), Rec('Ins', rect(-80, 80, -7.5, -4.0))]))
    objs.append(('NastupisteDefinicniBod', [Rec('Ins', [P(0, 5.75)]), Rec('Ins', [P(0, -5.75)])]))
    objs.append(('NastupisteNastupniPlocha', [Rec('Ins', [P(-80, t), P(80, t)]) for t in (4.0, -4.0)]))
    objs.append(('BudovaPlocha', [Rec('Ins', rect(-20, 20, 12, 24))]))
    objs.append(('BudovaDefinicniBod', [Rec('Ins', [P(0, 18)])]))
    objs.append(('BodVyhybky', [Rec('Ins', [P(s, t)]) for s, t in ((-200, -2.25), (200, 2.25))]))
    objs.append(('NavestidloSvetelne', [
        Rec('Ins', [P(-230, -5.0)], {'Natoceni': angle_along()}),
        Rec('Ins', [P(230, 5.0)], {'Natoceni': angle_along(180)}),
    ]))
    objs.append(('Baliza', [Rec('Ins', [P(-215, -2.25)], {'Natoceni': angle_along()}),
                            Rec('Ins', [P(215, 2.25)], {'Natoceni': angle_along(180)})]))
    objs.append(('Stanicnik', [Rec('Ins', [P(s, -8.0)], {'Natoceni': angle_along(90)}) for s in (-100, 0, 100)]))
    objs.append(('PodperneZarizeniSZ', [Rec('Ins', [P(s, t)]) for s in range(-250, 251, 60) for t in (-9.0, 9.0)]))
    objs.append(('TrasaNeurceneKabeloveSite', [Rec('Ins', [P(-300, -10.5), P(300, -10.5)])]))
    objs.append(('ZeleznicniPrejezd', [Rec('Ins', rect(268, 280, -11, 11))]))
    objs.append(('VystraznikPZS', [Rec('Ins', [P(266, -10)], {'Natoceni': angle_along(90)}),
                                   Rec('Ins', [P(282, 10)], {'Natoceni': angle_along(270)})]))
    objs.append(('ZeleznicniPrejezdOstatniKresba', [Rec('Ins', [P(268, t), P(280, t)]) for t in (-11, 11)]))
    objs.append(('ZabradliHorniHrana', [Rec('Ins', [P(-80, 7.5, 1.1), P(80, 7.5, 1.1)])]))
    objs.append(('SklepBod', [Rec('Ins', [P(-150, 15)])]))
    stan = [Staniceni(f'90000{i:04d}', P(s, -2.25), '351102', 22.300 + s / 1000) for i, s in enumerate((-100, 0, 100))]
    return document(
        'Ukázka ŽXML 1.5.1.6 — schematické nádraží v místě stanice Řevnice (smyšlená data, '
        'generuje scripts/zxml/samplegen.py)',
        objs,
        'kompletní zápis',
        stan,
    )


SAMPLES = {'zxml_minimal.xml': minimal, 'zxml_nadrazi.xml': nadrazi}


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, fn in SAMPLES.items():
        (OUT_DIR / name).write_text(fn(), encoding='utf-8')
        print('zapsáno', OUT_DIR / name)


if __name__ == '__main__':
    main()

export function getSharedAttrNames(group: string | null): Set<string> {
  const names = new Set<string>();
  switch (group) {
    case 'SpolecneAtributyObjektuZPS':
      names.add('UrovenUmisteniObjektuZPS');
      names.add('TridaPresnostiPoloha');
      names.add('TridaPresnostiVyska');
      names.add('ZpusobPorizeniZPS');
      names.add('ICS');
      break;
    case 'SpolecneAtributyObjektuDefinicnichBodu':
      names.add('UrovenUmisteniObjektuZPS');
      names.add('ICS');
      break;
    case 'SpolecneAtributyObjektuTI':
      for (const n of [
        'IDVlastnika', 'IDProvozovateleZeZakona', 'IDSpravce', 'IDProvozovatele',
        'IDExterni', 'NeuplnaData', 'UrovenUmisteniObjektuTI', 'TridaPresnostiPoloha',
        'TridaPresnostiVyska', 'ZpusobPorizeniTI', 'EvidencniCisloObjektu', 'ICS', 'KritickaTI',
      ]) names.add(n);
      break;
    case 'SpolecneAtributyObjektuPasemTI':
      for (const n of [
        'IDVlastnika', 'IDProvozovateleZeZakona', 'IDSpravce', 'IDProvozovatele',
        'IDExterni', 'NeuplnaData', 'UrovenUmisteniObjektuTI', 'TridaPresnostiPoloha',
        'ZpusobPorizeniTI', 'EvidencniCisloObjektu', 'KritickaTI',
      ]) names.add(n);
      break;
    case 'SpolecneAtributyObjektuZPS_TI':
      for (const n of [
        'UrovenUmisteniObjektuTI', 'TridaPresnostiPoloha', 'TridaPresnostiVyska',
        'ZpusobPorizeniTI', 'StavObjektu', 'ICS',
      ]) names.add(n);
      break;
    case 'SpolecneAtributyObjektuDI':
      for (const n of [
        'IDVlastnika', 'IDSpravce', 'IDProvozovatele', 'IDExterni',
        'NeuplnaData', 'UrovenUmisteniObjektuDI', 'TridaPresnostiPoloha',
        'TridaPresnostiVyska', 'ZpusobPorizeniDI', 'EvidencniCisloObjektu', 'ICS',
      ]) names.add(n);
      break;
    case 'SpolecneAtributyObjektuPasemDI':
      for (const n of [
        'IDVlastnika', 'IDSpravce', 'IDProvozovatele', 'IDExterni',
        'NeuplnaData', 'UrovenUmisteniObjektuDI', 'TridaPresnostiPoloha',
        'ZpusobPorizeniDI', 'EvidencniCisloObjektu',
      ]) names.add(n);
      break;
    case 'SpolecneAtributyObjektuZameru':
      for (const n of [
        'IDVlastnika', 'IDSpravce', 'IDProvozovatele', 'IDExterni', 'EvidencniCisloObjektu',
      ]) names.add(n);
      break;
    case null:
      // PodrobnyBodZPS and similar — attrs are listed as specificAttrs
      break;
  }
  return names;
}

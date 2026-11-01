// Auto-generated from ŽXML 1.5.1.6 XSD — DO NOT EDIT

import type { CommonAttributes } from '../types.js';

export interface SharedAttrsZPS {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
}

export interface SharedAttrsDefBod {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
}

export interface SharedAttrsTI {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDRDTI?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
}

export interface SharedAttrsPasemTI {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDRDTI?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
}

export interface SharedAttrsZPS_TI {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
}

export interface SharedAttrsDI {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDRDTI?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
}

export interface SharedAttrsPasemDI {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDRDTI?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
}

export interface SharedAttrsZameru {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDRDTI?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
}

export interface SharedAttrsPSPI {
  IDBS?: string;
  IDPSPI?: string;
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  ICS?: string;
}

export interface SharedAttrsDISZ {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
}

export interface SharedAttrsDefinicnichBoduSZ {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface SharedAttrsH3DSZ {
  ZpusobPorizeniZPSSZ?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface SharedAttrsODSZSZ {
  ZpusobPorizeniZPSSZ?: number;
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
}

export interface SharedAttrsPasemTISZ {
  SpravceTI?: number;
  SpravceTISZ?: number;
  SpravceTINazev?: string;
}

export interface SharedAttrsSKLEPSZ {
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniZPSSZ?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  KonsolidacniText?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface SharedAttrsTISZ {
  SpravceTI?: number;
  SpravceTINazev?: string;
  SpravceTISZ?: number;
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatTI?: number;
  StatusHarmonizaceDatTI?: number;
}

export interface SharedAttrsZDDSZ {
  ZpusobPorizeniDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UrovenUmisteniObjektuDI?: number;
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
}

export interface SharedAttrsZDTSZ {
  ZpusobPorizeniTI?: number;
  StavObjektu?: number;
  SpravceTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UrovenUmisteniObjektuTI?: number;
  SpravceTISZ?: number;
  PrvekM20ZKonsolidace?: number;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatTI?: number;
  StatusHarmonizaceDatTI?: number;
}

export interface SharedAttrsZPSSZ {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export type { CommonAttributes };

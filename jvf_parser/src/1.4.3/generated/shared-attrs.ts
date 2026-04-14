// Auto-generated from JVF DTM 1.4.3 XSD — DO NOT EDIT

import type { CommonAttributes } from '../types.js';

export interface SharedAttrsZPS {
  UrovenUmisteniObjektuZPS: number;
  TridaPresnostiPoloha: number;
  TridaPresnostiVyska: number;
  ZpusobPorizeniZPS: number;
  ICS?: string;
}

export interface SharedAttrsDefBod {
  UrovenUmisteniObjektuZPS: number;
  ICS?: string;
}

export interface SharedAttrsTI {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData: boolean;
  UrovenUmisteniObjektuTI: number;
  TridaPresnostiPoloha: number;
  TridaPresnostiVyska: number;
  ZpusobPorizeniTI: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  KritickaTI?: boolean;
}

export interface SharedAttrsPasemTI {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData: boolean;
  UrovenUmisteniObjektuTI: number;
  TridaPresnostiPoloha: number;
  ZpusobPorizeniTI: number;
  EvidencniCisloObjektu?: string;
  KritickaTI?: boolean;
}

export interface SharedAttrsZPS_TI {
  UrovenUmisteniObjektuTI: number;
  TridaPresnostiPoloha: number;
  TridaPresnostiVyska: number;
  ZpusobPorizeniTI: number;
  StavObjektu: number;
  ICS?: string;
}

export interface SharedAttrsDI {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData: boolean;
  UrovenUmisteniObjektuDI: number;
  TridaPresnostiPoloha: number;
  TridaPresnostiVyska: number;
  ZpusobPorizeniDI: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
}

export interface SharedAttrsPasemDI {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData: boolean;
  UrovenUmisteniObjektuDI: number;
  TridaPresnostiPoloha: number;
  ZpusobPorizeniDI: number;
  EvidencniCisloObjektu?: string;
}

export interface SharedAttrsZameru {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
}

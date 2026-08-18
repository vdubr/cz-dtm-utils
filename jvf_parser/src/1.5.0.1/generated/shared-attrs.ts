// Auto-generated from JVF DTM 1.5.0.1 XSD — DO NOT EDIT

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

export type { CommonAttributes };

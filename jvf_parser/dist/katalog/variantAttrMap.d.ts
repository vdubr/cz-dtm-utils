export interface VariantAttrMapEntry {
    attrName: string;
    /** String representation of attribute value → index into SYMBOLOGY[code].variants */
    valueToVariantIndex: Record<string, number>;
}
export declare const VARIANT_ATTR: Record<string, VariantAttrMapEntry>;
//# sourceMappingURL=variantAttrMap.d.ts.map
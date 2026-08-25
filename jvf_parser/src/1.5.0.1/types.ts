/**
 * Doménové typy JVF DTM 1.5.0.1.
 *
 * Autoritativní definice žije v balíčku `jvf-dtm-types` (sdíleno napříč
 * verzemi — model je jednotný, 1.5.0.1 ho jen rozšiřuje aditivně, viz R1/R2).
 * Tento modul je jen re-export, aby interní importy parseru
 * (`from '../types.js'`) i generovaných souborů nemusely znát balíček.
 */
export * from 'jvf-dtm-types';

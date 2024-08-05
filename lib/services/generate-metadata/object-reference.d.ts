import type { DataPageDetails } from '../../common.types';
interface ReferenceDependencies {
    field: {
        name: string;
        label: string;
        type: 'Pega-Fields-Complex-Page' | 'Pega-Fields-Complex-List';
        /** The class of the target object that is referenced */
        targetObjectClass: string;
        targetObjectType: 'case' | 'data' | 'user' | 'rule';
        aliasKey?: string;
    };
    classKeys?: string[];
    isEditable: boolean;
    fieldForDisplay?: {
        name: string;
        label?: string;
        type?: string;
    };
    /** The list data page source for the records of target object type */
    listDataPage: DataPageDetails;
}
export default function generate(dependencies: ReferenceDependencies): {
    type: string;
    config: {
        parameters?: Record<string, any> | undefined;
        label: string;
        displayField: string;
        componentType: string;
        referenceList: string;
        contextPage: string;
        secondaryField?: string | undefined;
        previewKey?: string | undefined;
        value: string;
        mode: string;
        targetObjectClass: string;
        targetObjectType: "data" | "case" | "user" | "rule";
    };
};
export {};
//# sourceMappingURL=object-reference.d.ts.map
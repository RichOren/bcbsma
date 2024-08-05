import type { ReactNode, SetStateAction } from 'react';
import type { Column, DisplayFieldMetaProps } from '../AutoComplete/types';
import { DataApi } from '../../../utils/components/picklist-utils-types';
import type { Parameters } from './types';
export declare const setDefaultValue: (dropdownOptions: {
    key: string;
    props: {
        value: string;
    };
}[], pConnect: any, propName: string) => void;
export declare const pushPlaceholderOption: (placeholder: string, listSourceItems: any, items: ReactNode[], pConnect: any) => void;
export declare const buildListSourceItems: (deferDatasource: boolean, isSourceDatapage: boolean, listItems: any, pConnect: any, datasource: any) => any;
export declare const setItems: (response: {
    data: any;
}, displayFieldMeta: DisplayFieldMetaProps, setListItems: (value: SetStateAction<never[]>) => void, dataApiObj: DataApi) => void;
export declare const useDropdownInitialProcessing: (deferDatasource: boolean, isTableTypeDataPage: boolean, isReferenceField: boolean, datasourceMetadata: any, listType: string, columns: Column[], datasource: any, parameters: Parameters, descriptors: string[], extractFieldMetadata: (datasourceMetadata: any) => {
    datasource: any;
    parameters: Parameters;
    columns: Column[];
}, dataRelationshipContext: string, contextClass: string, compositeKeys: string[]) => any[];
//# sourceMappingURL=utils.d.ts.map
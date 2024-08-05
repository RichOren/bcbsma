export function throttle(cb: any, waitTime: any): (...args: any[]) => void;
export function flattenParameters(parameters?: {}): {};
export function removeDuplicates(arrayOne: any, arrayTwo: any): any[];
export function buildColumnForDisplayValue(dataObj: any): void;
export function extractFieldMetadata(datasourceMetadata: any): {
    datasource: any;
    parameters: {};
    columns: ({
        key: string;
        setProperty: string;
        value: any;
        display?: undefined;
        primary?: undefined;
        useForSearch?: undefined;
    } | {
        display: string;
        primary: string;
        useForSearch: boolean;
        value: any;
        key?: undefined;
        setProperty?: undefined;
    })[];
};
export function preProcessColumns(columns: any): any;
export function getDisplayFieldsMetaData(columns: any): {
    key: string;
    primary: string;
    secondary: never[];
    hidden: never[];
};
export function generateAdditionalColumns(existingColumns: any, extraOptions: any): any[];
//# sourceMappingURL=picklist-utils.d.ts.map
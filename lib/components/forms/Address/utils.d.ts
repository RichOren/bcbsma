export function useDeepMemo(memoFn: any, key: any): any;
export function preProcessColumns(columns: any): any;
export function prepareDataConfig(countryAutocompletePConn: any): {
    datasource?: undefined;
    parameters?: undefined;
    columns?: undefined;
} | {
    datasource: any;
    parameters: {};
    columns: ({
        key: string;
        setProperty: string;
        value: any;
        useForSearch: boolean;
        display?: undefined;
        primary?: undefined;
    } | {
        display: string;
        primary: string;
        useForSearch: boolean;
        value: any;
        key?: undefined;
        setProperty?: undefined;
    })[];
};
export function resolveDeeplyNestedAssociatedProps(getPConnect: any, fieldConfig: any, ownProps: any): string;
//# sourceMappingURL=utils.d.ts.map
export default function getContext(componentConfig: any): Promise<{
    dataViewParameters: {};
    apiContext: any;
    promisesResponseArray: any[];
    updatePromotedFilters: ((promotedFilters: any, formatRequired: any) => void) | ((promotedFiltersAsObject: any) => void);
    refresh: ((options?: {}) => void) | ((options?: {}) => void);
    setPropertyMaps: ((originalToMappedPropertyObj?: {}, mappedToOriginalPropertyObj?: {}) => void) | ((originalToMappedPropertyObj?: {}, mappedToOriginalPropertyObj?: {}) => void);
    getMappedProperty: ((propertyName: any) => any) | ((propertyName: any) => any);
    getOriginalProperty: ((propertyName: any) => any) | ((propertyName: any) => any);
    setFieldsMeta: ((fieldsMeta?: any[]) => void) | ((fieldsMeta?: any[]) => void);
    setShowRecords: ((showRecords: any) => void) | ((showRecords: any) => void);
}>;
//# sourceMappingURL=DataApi.d.ts.map
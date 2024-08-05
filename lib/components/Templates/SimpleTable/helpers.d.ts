export function getNormalizedProperty(field: any): any;
export function updateAuthoredFieldFromFieldMeta(configFields: any, pageClass: any): any;
export const TABLE_CELL: "NebulaRenderer";
export const DELETE_ICON: "DeleteIcon";
export const DELETE_COLUMN_ID: "DeleteColumnId";
export const PRIMARY_FIELDS: "pyPrimaryFields";
export function getContext(getPConnect: any): {
    contextName: any;
    referenceListStr: any;
    pageReferenceForRows: any;
    viewName: any;
};
export function populateRowKey(rawData: any, uniqueField: any): any;
export function getApiContext(processedData: any, pConnect: any, uniqueField: any): {
    fetchData: () => Promise<any>;
    fetchPersonalizations: () => Promise<{}>;
    applyRowReorder: (sourceKey: any, destinationKey: any) => Promise<any>;
};
export function buildMetaForListView(fieldMetadata: any, fields: any, type: any, ruleClass: any, name: any, propertyLabel: any, parameters: any): {
    name: any;
    config: {
        type: any;
        referenceList: any;
        parameters: any;
        isParametersOverride: boolean;
        personalization: boolean;
        grouping: boolean;
        globalSearch: boolean;
        reorderFields: boolean;
        toggleFieldVisibility: boolean;
        title: any;
        personalizationId: string;
        template: string;
        presets: {
            name: string;
            template: string;
            config: {};
            children: {
                name: string;
                type: string;
                children: any;
            }[];
            label: any;
            id: string;
        }[];
        ruleClass: any;
    };
};
export function buildFieldsForTable(configFields: any, fieldsLabels: any, pConnect: any, uniqueField?: undefined, options?: {}): any;
export function createMetaForTable(fields: any, isReadOnlyMode: any, title: string | undefined, isDisplayModeEnabled: any, options: {} | undefined, required: any, allowEditingInModal: boolean | undefined, multiRecordDisplayAs: any, displayAs: any, tableFormat: any, uniqueField: any): {
    title: string;
    footer: any;
    filterExpression: null;
    editing: boolean;
    basicMode: any;
    timezone: any;
    requiredOnLoad: any;
    defaultFieldDef?: {
        noContextMenu: boolean;
        reorderFields: boolean;
        showMenu: boolean;
        sort: boolean;
    } | undefined;
    height: {
        minHeight: string;
        fitHeightToElement: string;
        deltaAdjustment: string;
        autoSize: boolean;
    };
    fieldDefs: any;
    itemKey: any;
    dateFunctions: {
        DATE_TIME: string[];
        DATE_ONLY: string[];
    };
    relativeDates: boolean;
    grouping: any;
    reorderFields: any;
    reorderItems: unknown;
    dragHandle: unknown;
    globalSearch: any;
    personalization: boolean;
    toggleFieldVisibility: any;
    toolbar: any;
    showCount: any;
};
export function getAddRowCallback(pConnect: object, index: number, classID: number, viewName: any, allowEditingInModal: any, referenceListStr: any, uniqueField: any, targetClassLabel: any): () => void;
export function createPConnect(contextName: string, referenceList: string, pageReference: string, viewName: string): any;
export function getConfigFields(rawFields: any[], contextClass: string, primaryFieldsViewIndex: any): any[];
export function updateFieldLabels(fields: any[], configFields: any[], primaryFieldsViewIndex: any, pConnect: any, options?: {}): any[];
export function populateDefaultConfigForFields(fields: any): any;
export function updateStateCallback(setTableModel: any, disableDragDrop: any, cosmosTableRef: any): (newModel: any) => void;
//# sourceMappingURL=helpers.d.ts.map
export namespace duplicateCreateStageView {
    const name: string;
    const type: string;
    namespace config {
        export { title };
        const type_1: string;
        export { type_1 as type };
        export const referenceList: string;
        export namespace parameters {
            const key: string;
        }
        export const personalization: boolean;
        export const grouping: boolean;
        export const globalSearch: boolean;
        export const reorderFields: boolean;
        export const toggleFieldVisibility: boolean;
        export const personalizationId: string;
        export const caseTypeReference: string;
        export const template: string;
        export const presets: {
            name: string;
            template: string;
            config: {};
            label: string;
            id: string;
            children: {
                name: string;
                type: string;
                children: ({
                    type: string;
                    config: {
                        value: string;
                        label: string;
                        readOnly: boolean;
                        additionalDetails: {
                            type: string;
                            params: {};
                        };
                    };
                } | {
                    type: string;
                    config: {
                        value: string;
                        label: string;
                        readOnly: boolean;
                        additionalDetails?: undefined;
                    };
                })[];
            }[];
        }[];
        export const ruleClass: string;
        export const localeReference: string;
        export const inheritedProps: {
            prop: string;
            value: string;
        }[];
        export const referenceType: string;
    }
    const classID: string;
}
export namespace listViewProps {
    export namespace additionalProps {
        const pageReference: null;
    }
    export const additionalTableConfig: {};
    export const allowAddingNewRecords: boolean;
    export const allowBulkActions: boolean;
    export const allowMovingRecords: boolean;
    export const apiContext: {};
    export const basicMode: boolean;
    export const caseInfo: undefined;
    const caseTypeReference_1: string;
    export { caseTypeReference_1 as caseTypeReference };
    export const children: never[];
    export const compositeKeys: never[];
    export const disabled: boolean;
    export const displayMode: null;
    export const editing: boolean;
    export const expandGroups: boolean;
    const globalSearch_1: boolean;
    export { globalSearch_1 as globalSearch };
    const grouping_1: boolean;
    export { grouping_1 as grouping };
    export const icon: undefined;
    const inheritedProps_1: {
        prop: string;
        value: string;
    }[];
    export { inheritedProps_1 as inheritedProps };
    export const isParametersOverride: undefined;
    export const isSearchable: boolean;
    const name_1: undefined;
    export { name_1 as name };
    export const numberOfRows: undefined;
    export const openCaseViewAfterCreate: boolean;
    const parameters_1: {};
    export { parameters_1 as parameters };
    const personalization_1: boolean;
    export { personalization_1 as personalization };
    const personalizationId_1: string;
    export { personalizationId_1 as personalizationId };
    export const readOnly: undefined;
    const referenceList_1: string;
    export { referenceList_1 as referenceList };
    const referenceType_1: string;
    export { referenceType_1 as referenceType };
    const reorderFields_1: boolean;
    export { reorderFields_1 as reorderFields };
    export const required: boolean;
    const ruleClass_1: string;
    export { ruleClass_1 as ruleClass };
    export const selectionMode: null;
    export const showHeaderIcons: boolean;
    export namespace tableDisplay {
        const placeHolder: string;
        const show: boolean;
    }
    const template_1: string;
    export { template_1 as template };
    export { title };
    const toggleFieldVisibility_1: boolean;
    export { toggleFieldVisibility_1 as toggleFieldVisibility };
    const type_2: string;
    export { type_2 as type };
    export const validatemessage: string;
    export const viewName: undefined;
    export const visibility: undefined;
    export const _inheritedProps: never[];
}
export namespace duplicateNonCreateStageView {
    const name_2: string;
    export { name_2 as name };
    const type_3: string;
    export { type_3 as type };
    export namespace config_1 {
        const template_2: string;
        export { template_2 as template };
        const referenceList_2: string;
        export { referenceList_2 as referenceList };
        const name_3: string;
        export { name_3 as name };
        export const mode: string;
        export const contextClass: string;
        const ruleClass_2: string;
        export { ruleClass_2 as ruleClass };
        const selectionMode_1: string;
        export { selectionMode_1 as selectionMode };
        export const classKeys: {
            name: string;
        }[];
        export const displayAs: string;
        export namespace parameters_2 {
            const key_1: string;
            export { key_1 as key };
        }
        export { parameters_2 as parameters };
        const inheritedProps_2: {
            prop: string;
            value: string;
        }[];
        export { inheritedProps_2 as inheritedProps };
        export const authorContext: string;
        const referenceType_2: string;
        export { referenceType_2 as referenceType };
    }
    export { config_1 as config };
    const children_1: ({
        type: string;
        config: {
            label: string;
            selectionKey: string;
            value: string;
            contextPage: string;
            previewKey: string;
            referenceList: string;
            selectionMode: string;
            primaryField: string;
            promotedFilters: never[];
            presets: {
                name: string;
                template: string;
                config: {};
                label: string;
                id: string;
                children: {
                    name: string;
                    type: string;
                    children: ({
                        type: string;
                        config: {
                            value: string;
                            label: string;
                            readOnly: boolean;
                            additionalDetails: {
                                type: string;
                                params: {};
                            };
                        };
                    } | {
                        type: string;
                        config: {
                            value: string;
                            label: string;
                            readOnly: boolean;
                            additionalDetails?: undefined;
                        };
                    })[];
                }[];
            }[];
        };
        name?: undefined;
        children?: undefined;
    } | {
        name: string;
        type: string;
        children: never[];
        config?: undefined;
    })[];
    export { children_1 as children };
    const classID_1: string;
    export { classID_1 as classID };
}
export namespace dataReferenceProps {
    export namespace additionalProps_1 {
        const pageReference_1: null;
        export { pageReference_1 as pageReference };
    }
    export { additionalProps_1 as additionalProps };
    export const allowAndPersistChangesInReviewMode: boolean;
    const authorContext_1: string;
    export { authorContext_1 as authorContext };
    const caseInfo_1: undefined;
    export { caseInfo_1 as caseInfo };
    const classKeys_1: {
        name: string;
    }[];
    export { classKeys_1 as classKeys };
    const contextClass_1: string;
    export { contextClass_1 as contextClass };
    const displayAs_1: string;
    export { displayAs_1 as displayAs };
    const displayMode_1: undefined;
    export { displayMode_1 as displayMode };
    export const hideLabel: boolean;
    const inheritedProps_3: {
        prop: string;
        value: string;
    }[];
    export { inheritedProps_3 as inheritedProps };
    export const label: undefined;
    const mode_1: string;
    export { mode_1 as mode };
    const name_4: string;
    export { name_4 as name };
    const parameters_3: {};
    export { parameters_3 as parameters };
    const readOnly_1: undefined;
    export { readOnly_1 as readOnly };
    const referenceList_3: string;
    export { referenceList_3 as referenceList };
    const referenceType_3: string;
    export { referenceType_3 as referenceType };
    const ruleClass_3: string;
    export { ruleClass_3 as ruleClass };
    const selectionMode_2: string;
    export { selectionMode_2 as selectionMode };
    export const showLabel: undefined;
    const template_3: string;
    export { template_3 as template };
    const title_1: undefined;
    export { title_1 as title };
    const type_4: undefined;
    export { type_4 as type };
    const validatemessage_1: string;
    export { validatemessage_1 as validatemessage };
    const visibility_1: undefined;
    export { visibility_1 as visibility };
    const _inheritedProps_1: never[];
    export { _inheritedProps_1 as _inheritedProps };
}
declare const title: "Potential duplicate cases:";
export {};
//# sourceMappingURL=duplicateSearchView.d.ts.map
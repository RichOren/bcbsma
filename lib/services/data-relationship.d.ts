export function getFirstNonSysScalarField(contextClass: any): Promise<any>;
export function buildSemanticLinkForCaseTypeRelationship(templateSubtype: any, record: any, actionType: any, dispatch: any, payloadProps: any, ruleClass: any): Promise<void>;
export function buildViewForDataRelationship(templateSubtype: any, record: any, actionType: any, dispatch: any, payloadProps: any, ruleClass: any): Promise<void>;
export function buildMultiRecordDataRelationshipView(record: any, actionType: any, dispatch: any, payloadProps: any): Promise<void>;
export function buildAutocompleteVMD(defaultProps: any, label: any, dataSource: any, displayField: any, contextName: any, keyName: any, classKey: any, targetType: any): {
    type: string;
    config: any;
};
export function buildDropdownVMD(defaultProps: any, label: any, dataSource: any, displayField: any, contextName: any, keyName: any, classKey: any): {
    type: string;
    config: any;
};
export function buildCheckboxGroupVMD(selectFieldLabel: any, classKey: any, mode: any, fieldName: any, activeView: any, selectionList: any, selectionMode: any, targetType: any, displayField: any, fieldInRelevantRecords: any, dataSource: any, keyField: any): {
    type: string;
    config: {
        label: string;
        selectionKey: string;
        referenceList: string;
        readonlyContextList: string;
        selectionList: any;
        contextClass: string;
        selectionMode: any;
        referenceType: any;
        renderMode: string;
        primaryField: string;
        detailsDisplay: ({
            type: any;
            config: {
                value: string;
                label: string;
                previewKey?: undefined;
                additionalDetails?: undefined;
            };
        } | {
            type: string;
            config: {
                value: string;
                label: string;
                previewKey: string;
                additionalDetails: {
                    type: string;
                    params: {};
                };
            };
        })[];
        datasource: {
            source: string;
            fields: {
                value: string;
                key: string;
                text: string;
            };
        };
    };
};
export function buildSemanticLinkVMD(isWorkClass: any, label: any, classKey: any, activeViewRuleClass: any, contextName: any): {
    type: string;
    config: {
        label: string;
        caseClass: any;
        text: string;
        caseID: string;
        caseLabel: string;
        contextPage: string;
        previewKey: string;
        resourceParams: {
            workID: string;
        };
        resourcePayload: {
            caseClassName: any;
        };
        referenceType?: undefined;
    };
} | {
    type: string;
    config: {
        referenceType: string;
        contextPage: string;
        label: string;
        caseClass: any;
        text: string;
        previewKey: string;
        caseID?: undefined;
        caseLabel?: undefined;
        resourceParams?: undefined;
        resourcePayload?: undefined;
    };
};
export function buildViewForDataReference(templateSubtype: any, record: any, actionType: any, dispatch: any, payloadProps: any, ruleClass: any): void;
export function createSingleRecordQueryView({ fieldId, fieldLabel, targetObjectClass, ruleNamespace, ruleClassNamespace, parentViewName, }: {
    fieldId: any;
    fieldLabel: any;
    targetObjectClass: any;
    ruleNamespace: any;
    ruleClassNamespace: any;
    parentViewName: any;
}): Promise<any>;
export function createSingleRecordEmbeddedView({ fieldId, fieldLabel, targetObjectClass, ruleNamespace, ruleClassNamespace, parentViewName, }: {
    fieldId: any;
    fieldLabel: any;
    targetObjectClass: any;
    ruleNamespace: any;
    ruleClassNamespace: any;
    parentViewName: any;
}): Promise<any>;
//# sourceMappingURL=data-relationship.d.ts.map
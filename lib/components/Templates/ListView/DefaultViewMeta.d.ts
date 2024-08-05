export default function getDefaultViewMeta(fieldMeta: any, classID: any, showField: any, isQueryableDataPage: any): {
    type: string;
    config: {
        trueLabel: string;
        falseLabel: string;
        caption: string;
        label: undefined;
        associationID: any;
        associationLabel?: string | undefined;
        value: string;
        fieldType: any;
        propertyType: any;
        classID: any;
        displayAs: any;
        additionalDetails: any;
        category: any;
        show: any;
    };
} | {
    type: string;
    config: {
        datasource: {
            source: string;
            fields: {
                value: string;
            };
        };
        associationID: any;
        associationLabel?: string | undefined;
        value: string;
        label: string;
        fieldType: any;
        propertyType: any;
        classID: any;
        displayAs: any;
        additionalDetails: any;
        category: any;
        show: any;
    };
} | {
    type: string;
    config: {
        value: string;
        placeholder: string;
        displayAs: string;
        associationID: any;
        associationLabel: undefined;
        label: string;
        fieldType: any;
        propertyType: any;
        classID: any;
        additionalDetails: any;
        category: any;
        show: any;
    };
} | {
    type: string;
    config: {
        placeholder: string;
        listType: string;
        datasource: string;
        deferDatasource: boolean;
        associationID: any;
        associationLabel?: string | undefined;
        value: string;
        label: string;
        fieldType: any;
        propertyType: any;
        classID: any;
        displayAs: any;
        additionalDetails: any;
        category: any;
        show: any;
    };
} | {
    type: any;
    config: {
        associationID: any;
        associationLabel?: string | undefined;
        value: string;
        label: string;
        fieldType: any;
        propertyType: any;
        classID: any;
        displayAs: any;
        additionalDetails: any;
        category: any;
        show: any;
    };
};
//# sourceMappingURL=DefaultViewMeta.d.ts.map
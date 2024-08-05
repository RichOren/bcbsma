export default function reducer(draftState: any, action: any): any;
export function refreshFieldsAndViewsRecords(currentStore: any): Promise<{
    type: string;
    payload: {
        newRelevantRecords: any;
    };
}>;
export function refreshAuthoringRecords(currentView: any, templateDefinition: any, isInWorkClass: any, newReferenceList: any, advancedMode: any, viewAuthoringContext: any): Promise<{
    type: string;
    payload: {
        freshAuthoringRecords: any;
        advancedMode: any;
        newReferenceList: any;
    };
}>;
export function paragraphUpdated({ id, content }: {
    id: any;
    content: any;
}): {
    type: string;
    payload: {
        id: any;
        content: any;
    };
};
export function errorBannerUpdate(messageOrError: any): {
    type: string;
    payload: any;
};
//# sourceMappingURL=common.ducks.d.ts.map
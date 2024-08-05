/**
 * Given the PConnect object of a Template component, retrieve the children
 * metadata of all regions.
 * @param {Function} pConnect PConnect of a Template component.
 */
export function getAllFields(pConnect: Function): any;
/**
 * A helper function to create an object consisting react component as per the type.
 * This is used by CaseSummary template.
 * @param {object} pConnectMeta Object containing meta information for the particular field authored
 * @param {Function} getPConnect PConnect function passed along to other components.
 * @param {string} displayMode displayMode string contains information about the layout of component in review mode.
 */
export function prepareComponentInCaseSummary(pConnectMeta: object, getPConnect: Function): {
    name: any;
    simpleValue: any;
    variant: string;
    value: any;
};
export function prepareCaseSummaryData(caseSummaryRegion: any): {
    primarySummaryFields: any;
    secondarySummaryFields: any;
};
export function filterSummaryFields(getPConnect: any): any[];
/**
 * Returns ConfigurableLayout mapped content. With pre-populated default layout configs.
 * @param {object[]} regionData template children item.
 * @returns {object[]} ConfigurableLayout content.
 */
export function getLayoutDataFromRegion(regionData: object[]): object[];
/**
 * Determine if the current view is the view of the case step/assignment.
 * @param {Function} pConnect PConnect object for the component
 */
export function getIsAssignmentView(pConnect: Function): boolean;
/**
 * Determine if the current view is the view of the case-wide action.
 * @param {Function} pConnect PConnect object for the component
 */
export function getIsCaseWideActionView(pConnect: Function): any;
/**
 * A hook that gets the instructions content for a view.
 * @param {Function} pConnect PConnect object for the component
 * @param {string} [instructions="casestep"] 'casestep', 'none', or the html content of a Rule-UI-Paragraph rule (processed via core's paragraph annotation handler)
 */
export function getInstructions(pConnect: Function, instructions?: string | undefined): any;
export function renderActions(actions: any[] | undefined, flowActions: any[] | undefined, processes: any[] | undefined, caseLinks: any[] | undefined, actionsAPI: any, localeUtils: any, localeKey: any, pConnect: any, customActions: any[] | undefined, isDataObject: any): {
    promotedAction: {
        text: any;
        id: any;
        onClick: () => void;
    }[];
    optionalActions: any[];
    editAction: any;
    shouldDisableMenu: boolean;
    onClick: () => any;
};
/**
 * Updates insights props if single insight is present in region
 * @param {object[]} regionData template children item.
 */
export function handleInsightsFitToScreen(regionsData: any): void;
export function resolveReferencedPConnect(pConnect: any): any;
export function hasAny(pConn: any, cb: any): any;
//# sourceMappingURL=utils.d.ts.map
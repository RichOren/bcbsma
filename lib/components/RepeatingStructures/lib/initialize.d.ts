export function getNebulaTypes(fieldType: any): any;
export function initializeColumns(fields: any[] | undefined, editViewContent: {} | undefined, actionsApi: any, pConnect: any, getMappedProperty: any, getOriginalProperty: any): any[];
export function getComponent(getPConnect: any, classID: any, nebulaRenderer: any, type: any): {
    component: any;
    props: any;
};
/** Its a render factory function that is used by RepeatingStructures currently to get components to be rendered in a cell/view.(cellRenderer)
 * @param  {object} getPConnect - a function that should give pConnect object to access c11n information within the cell renderer.
 * It will send as props to cell renderer.
 * @param  {string} classID - classID will be sent as props to IDRenderer.
 * @param  {object} nebulaRenderer - It is an object that accepts 3 properties
 * * component - the nebulaRenderer component function
 * * props - the props that you want to send to nebulaRenderer,
 * * force - a boolean that will let getComponentWhenDisplayModeEnabled decide whether nebulaRenderer should be returned or not if there is no other cell renderer matched for a given type. (Default for this parameter is false.) This force variable is currently used for
 * date, datetime, time, Integer, decimal, percentage, currency type cells. If nebulaRenderer is not forced then no component is returned for these types and formatters will be used to render the correct value.
 * @param  {string} type - A string parameter that is used to find a cellRenderer for a given type. Eg - for type == 'WorkLink' -> IdRenderer is returned.
 * @return {object} It returns an object that contains 2 properties:
 * * component -  a react function that should be used to render in the cell.
 * * props -  extraProps that should be stamped to cellRenderer that is required by cellRenderer for its execution.
 */
export function getComponentWhenDisplayModeEnabled(getPConnect: object, classID: string, nebulaRenderer: object, type: string): object;
export function handleDotFieldRecursivelyMutatively(obj: any, getMappedProperty: any): any;
export function getItemKey(fields: any): any;
export function getItemKeyForDataTypesWithDefaultDataSources(): string;
export function getToolBarActions(getPConnect: any, openCaseViewAfterCreate: any, enableGetNextWork: any, create: any, ref: any): {
    id: any;
    text: any;
    tooltip: any;
    onClick: any;
}[];
export function getPersonalizationChangeAction(apiContext: any): () => void;
export function initializeTableConfig(config: any, fields: any, getPConnect: any, apiContext: any, cosmosTableRef: any, options?: {}): any;
//# sourceMappingURL=initialize.d.ts.map
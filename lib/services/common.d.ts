/**
 * Common functions used by services. Relocate functions here when there are circular dependencies
 * between service files.
 */
export function removeAnnotation(prop: any): any;
export function removeAnnotationAndDot(prop: any): any;
export function interpolate(value: any, data?: {}): any;
/**
 * Helper function that checks if a given item type can be added to a region of a given template defintion
 * @param {import('../component-definition.types').TemplateDefinition} definition The template definition to check
 * @param {string} type The addable item type
 */
export function typeIsAddableToTemplate(definition: z.infer<any>, type: string): any;
/** Helper function to recalculate group and sort priorities for List view in case of deletion of any column.
 * @param  {Array} items meta array of all columns
 * @param  {Object} deletedItem deletedItem  meta object
 * @param  {string} propertyName sortPriority or groupOrder(which one to recalculate pass it)
 */
export function recalculateSortOrGroupPriorities(items: any[], deletedItem: Object, propertyName: string): void;
/**
 * Helper function to determine if platform name is launchpad
 * @returns boolean - true if platform is launchpad
 */
export function isLaunchpad(): boolean;
/**
 * Helper function to determine if the current platform Infinity
 * @returns boolean - true if platform is Infinity
 */
export function isInfinity(): boolean;
/**
 * @param {'properties'|'views'|'classes'|'dataPages'} type Type of the rule
 * @param {string} name Name of the rule
 */
export function getRuleIdentifier(type: 'properties' | 'views' | 'classes' | 'dataPages', name: string): any;
/**
 *
 * @param {string} name key for the dataPage in map
 * @returns info for the datapage requested as an object
 */
export function getDataPageInfo(name: string): any;
export function getUniversalPubSub(): {
    subscribe: (eventName: any, callback: any) => {
        unsubscribe: () => any;
    };
    unsubscribe: () => any;
    publish: (eventName: any) => any;
    publishSync?: undefined;
} | {
    subscribe: (eventName: any, callback: any) => {
        unsubscribe: () => any;
    };
    unsubscribe: () => any;
    publish: (eventName: any, data: any) => any;
    publishSync: (eventName: any) => any;
};
export function isViewsListStale(viewsList: any): boolean;
export function flatten(data: any, path: string | undefined, resultObj: any): void;
//# sourceMappingURL=common.d.ts.map
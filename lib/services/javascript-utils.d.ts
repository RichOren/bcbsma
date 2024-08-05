/**
 * Utility function for waiting. Optionally can be used as a "wait at least x millis" if provided an array of promise(s).
 * Example wait at least 1sec: wait(1000, [getViewData(viewName, viewClass)]).then((data) => {...})
 * @param {number} millis Number of milliseconds to wait.
 * @param {Array<Promise>} [promises=[]] An array of promises to also wait for. Use this if you want to wait a minimum number of millis.
 */
export function wait(millis: number, promises?: Promise<any>[] | undefined): Promise<any>;
export function makeCancelable(promise: any): {
    promise: Promise<any>;
    cancel: () => void;
};
export function wordToNumber(word: any): any;
/**
 * Returns out the singular-form of a plural word
 * @param {string} word - the word to 'unpluralize'
 * @returns the 'unpluralized' word
 */
export function unpluralize(word: string): string;
export function isObject(variable: any): boolean;
export function isEmpty(obj: any): any;
export function hasProp(obj: any, prop: any): boolean;
export function removeWrappingQuotes(str: any): any;
/**
 * This function deep search a given key in object where predicate evaluates to true.
 *
 * returns object where predicate evaluates true for given key.
 *
 * @param {*} object - Object to look into
 * @param {*} key - search for given key
 * @param {*} predicate - where this function return true.
 */
export function deepSearch(object: any, key: any, predicate: any): any;
/**
 * Given an object/array and a `path` to an item that's in a nested array, remove (mutate) item at
 * `path` from it's containing array.
 * @param {*} object
 * @param {string} path
 */
export function getContainingObjectAndIndex(object: any, path: string): any[];
/**
 * Take a string and expand it to an array of intermediate segments.
 * @example
 * // returns ['Contact', 'Contact.Address', 'Contact.Address.State']
 * expandToIntermediates('Contact.Address.State');
 * @param {string} input The input string to expand
 * @param {string} separator The separator for splitting the string
 */
export function expandToIntermediates(input: string, separator?: string): any;
//# sourceMappingURL=javascript-utils.d.ts.map
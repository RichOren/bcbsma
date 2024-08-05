/**
 * Function that accepts array of messages as input and group them by their type and returns the resulting object
 * @param {Array} inputMessages
 * Eg: [
 * {message: 'First Name is required', type: 'error'},
 * {message: 'Last Name is required', type: 'error'},
 * {message: 'Address field should be clear and precise', type: 'info'}
 * ]
 *
 * @returns {object}
 *
 * Eg: {
 *  error: ['First Name is required', 'Last Name is required'],
 *  info: ['Address field should be clear and precise']
 * }
 */
export function getMessagesGrouped(inputMessages: any[]): object;
/**
 * Function accepts a error type and variant of the banner
 * @param {string} type
 * Eg: 'error'
 * @returns {string}
 * Eg: 'urgent'
 */
export function getVariant(type: string): string;
export function getBanners(config: any): import("react/jsx-runtime").JSX.Element[];
export function getBannerMessages(config: any): any[];
export function getStatusVariant(value: any): string;
export function getMessagesGroupedByVariant(messages: any): {};
//# sourceMappingURL=case-utils.d.ts.map
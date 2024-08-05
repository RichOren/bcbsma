/**
 * Function to invoke action based on the item clicked
 *
 * @param {any} id Recent item key that is clicked
 * @param {any} actionsAPI Action API
 */
export function onRecentClickHandler(id: any, actionsAPI: any): void;
/**
 * To build the items as per Cosmos expectation
 *
 * @param {Array} recents items to be iterated and set as what Cosmos expects
 */
export function buildRecentList(recents: any[]): {
    id: any;
    className: any;
    primary: any;
    secondary: any[];
    type: any;
    href: any;
}[];
//# sourceMappingURL=utils.d.ts.map
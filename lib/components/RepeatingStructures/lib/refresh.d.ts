/**
 * Handles comparing old and new models and returning whether to do a full data refetch for additional columns.
 * As of writing this comment, the optimization is as follows:
 * 1. If any column is visible or used in filter,group,sort(even if hidden),then, refresh call is fired
 * 2. IF any type of field is removed as a column, group, sort, or filter
 *    - THEN don't refetch anything, we're just hiding something
 *
 * @param {object} oldModel - The existing capture of the insight model
 * @param {object} newModel - The potentially new version of of the insight model
 * @returns {boolean} Whether to refetch the data for the new join column
 */
export default function isServerRefreshNeeded(oldModel: object, newModel: object): boolean;
//# sourceMappingURL=refresh.d.ts.map
/**
 * Gets the filters in the structure that the BI Insight expects
 * @param {string} parameter Value for the RHS of the filter (from UI Authoring)
 * @param {string} filter Property name for the LHS of the filter (from UI Authoring)
 * @param {object} dashboardFilters Any dashboard filters, if this Insight is currently being rendered on a dashboard
 * @returns {Array} The filters in a structure that the BI repo expects
 */
export function getFiltersPreparedForInsight(parameter: string, filter: string, dashboardFilters: object): any[];
export function createFilter(value: any, fieldId: any, comparator?: string): {
    condition: {
        lhs: {
            field: any;
        };
        comparator: string;
        rhs: {
            value: any;
        };
    };
};
export function combineFilters(filterList: any, existingFilters: any): any;
//# sourceMappingURL=filters.d.ts.map
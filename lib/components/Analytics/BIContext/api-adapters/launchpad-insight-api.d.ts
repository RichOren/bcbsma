/**
 * Fetches the metadata of an Insight
 * @param {string} insightID - UUID for the Insight to be fetched from the server
 * @returns {object} metadata object for the Insight
 */
export function getInsightByID(insightID: string): object;
/**
 * Fetches the metadata of the Insights
 * @param {string[]} insightIDs - UUID for the Insights to be fetched from the server
 * @returns {object} metadata object for the Insight
 */
export function getInsightsByID(): object;
/**
 * gets the sample data values for all fields in given data view name
 * @param {object} dataObjectMeta metadata object for the Insight
 * @param {string} dataViewName data view name
 * @returns {object} sample values
 */
export function getSampleDataValues(): object;
export function createInsight(): Promise<void>;
export function updateInsight(): Promise<void>;
export function deleteInsight(): Promise<void>;
/**
 * Fetches metadata for all Insights available to the current operator.
 * Returns the queried subset of properties on each returned insight.
 */
export function readAllInsights(): Promise<void>;
//# sourceMappingURL=launchpad-insight-api.d.ts.map
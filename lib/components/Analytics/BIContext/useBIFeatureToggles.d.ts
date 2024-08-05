/**
 * Feature toggle flags used by BI components.
 * @typedef {Object} BIFeatureToggles
 * @property {boolean} isGenerativeAIEnabled
 * @property {boolean} isNonQueryableAFEnabled
 * @property {boolean} enableExperimentalFeatures
 */
/**
 * Fetches values of relevant BI Feature-toggles/When-rules.
 * Performs a setState with the fetched values.
 * Also, caches the values to sessionStorage.
 *
 * @returns {BIFeatureToggles}
 */
export default function useBIFeatureToggles(): BIFeatureToggles;
/**
 * Feature toggle flags used by BI components.
 */
export type BIFeatureToggles = {
    isGenerativeAIEnabled: boolean;
    isNonQueryableAFEnabled: boolean;
    enableExperimentalFeatures: boolean;
};
//# sourceMappingURL=useBIFeatureToggles.d.ts.map
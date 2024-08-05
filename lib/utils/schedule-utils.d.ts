export default scheduleInsightAPIs;
declare namespace scheduleInsightAPIs {
    export { scheduleInsight };
    export { updateScheduledInsight };
    export { deleteScheduledInsight };
    export { getScheduleListForInsight };
}
declare function scheduleInsight(className: any, name: any, dataViewName: any, config: any, toasterContext: any, translate: any, scheduleInfo: any, insightID: any, itemId?: string, dataViewParameters?: {}): Promise<any>;
declare function updateScheduledInsight(className: any, name: any, dataViewName: any, config: any, toasterContext: any, translate: any, scheduleInfo: any, insightID: any, itemId?: string, dataViewParameters?: {}): Promise<any>;
declare function deleteScheduledInsight(toasterContext: any, translate: any, itemId: any, insightID: any): Promise<any>;
/**
 * Fetches schedules for an insight using the D_pxGetScheduledInsights data page
 * @param {string} insightId - the id of the insight to get schedules for
 * @returns {Array} list of schedule objects
 */
declare function getScheduleListForInsight(insightId: string): any[];
//# sourceMappingURL=schedule-utils.d.ts.map
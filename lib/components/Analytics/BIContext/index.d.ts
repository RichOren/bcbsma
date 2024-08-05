export function useBIProviderProps(getPConnect: Function): {
    renderingContext: {
        applicationLabel: any;
        applicationAlias: any;
        isAppStudioX: any;
        isHybrid: boolean;
        isOnBranch: () => any;
        isSRSEnabled: any;
        isUsingAppStudio: boolean;
        renderingMode: any;
        toggles: {
            enableExperimentalFeatures: boolean;
            isGPTEnabled: boolean;
            enableGenAIChatWidget: any;
            isNonQueryableAFEnabled: boolean;
        };
        featureFlags: {
            readonly exploreData: {
                readonly showInsightList: boolean;
                readonly showScheduleInsightButton: boolean;
                readonly showQueryInfoOption: boolean;
                readonly showVisibilityDropdown: boolean;
            };
            readonly fieldPicker: {
                readonly showSampleValues: boolean;
            };
            readonly insight: {
                readonly shouldUpdateDocumentTitle: boolean;
                readonly useFullMetaInRuntimeInsights: any;
                readonly useDefaultRDColumnsAsPrimaryFields: boolean;
            };
            readonly insightPanel: {
                readonly allowGroupingByEmbeds: boolean;
                readonly showCustomFunctionMenuItems: boolean;
            };
            readonly showNQItems: any;
            readonly allowSaveInsight: any;
            readonly showImportData: any;
            readonly showExportToExcelOption: any;
            readonly showExportToCSVOption: any;
            readonly showPossibleValuesRHSConditions: boolean;
            readonly isUrlRoutingUnavailable: any;
        };
    };
    translate: (token: any, localePath: any, isGeneric?: any) => any;
    getPrimaryFieldsForDataSource: any;
    getPrimaryFieldsForInsights: any;
    getDefaultRDColumns: any;
    getInsightData: any;
    getSampleData: any;
    getUniqueValuesForField: any;
    getOperatorsList: any;
    getWorkGroupsList: any;
    getWorkQueuesList: any;
    exportToExcel: typeof exportToExcel;
    scheduleInsightAPIs: {
        scheduleInsight: (className: any, name: any, dataViewName: any, config: any, toasterContext: any, translate: any, scheduleInfo: any, insightID: any, itemId?: string, dataViewParameters?: {}) => Promise<any>;
        updateScheduledInsight: (className: any, name: any, dataViewName: any, config: any, toasterContext: any, translate: any, scheduleInfo: any, insightID: any, itemId?: string, dataViewParameters?: {}) => Promise<any>;
        deleteScheduledInsight: (toasterContext: any, translate: any, itemId: any, insightID: any) => Promise<any>;
        getScheduleListForInsight: (insightId: string) => any[];
    };
    getPersonalizationUtils: any;
    cacheInsightContent: boolean;
    insightAPIs: {
        create: any;
        readByID: any;
        readAllByIDs: any;
        readAll: any;
        update: any;
        delete: any;
    };
    dashboardAPIs: {
        create: (...args: any[]) => any;
        read: (...args: any[]) => any;
        update: (...args: any[]) => any;
        delete: (...args: any[]) => any;
    };
    dashboardTemplates: {
        config: {
            name: string;
            label: string;
            description: string;
            type: string;
            subtype: string;
            icon: string;
            hideViewLabelInput: boolean;
            properties: ({
                format: string;
                name: string;
                label: string;
                defaultValue: string;
                source: {
                    name: string;
                    valueProp: string;
                    displayProp: string;
                };
                visibility?: undefined;
                hideModifyIcons?: undefined;
                addTypeList?: undefined;
                helperText?: undefined;
                helperTextVisibility?: undefined;
                modifyPanelOverride?: undefined;
            } | {
                format: string;
                name: string;
                label: string;
                visibility: string;
                defaultValue: string;
                source: {
                    name: string;
                    valueProp: string;
                    displayProp: string;
                };
                hideModifyIcons?: undefined;
                addTypeList?: undefined;
                helperText?: undefined;
                helperTextVisibility?: undefined;
                modifyPanelOverride?: undefined;
            } | {
                name: string;
                label: string;
                format: string;
                hideModifyIcons: boolean;
                addTypeList: string[];
                defaultValue?: undefined;
                source?: undefined;
                visibility?: undefined;
                helperText?: undefined;
                helperTextVisibility?: undefined;
                modifyPanelOverride?: undefined;
            } | {
                name: string;
                label: string;
                format: string;
                defaultValue: string;
                helperText: string;
                helperTextVisibility: string;
                source: {
                    key: string;
                    value: string;
                }[];
                visibility?: undefined;
                hideModifyIcons?: undefined;
                addTypeList?: undefined;
                modifyPanelOverride?: undefined;
            } | {
                name: string;
                label: string;
                format: string;
                modifyPanelOverride: string;
                addTypeList: string[];
                defaultValue?: undefined;
                source?: undefined;
                visibility?: undefined;
                hideModifyIcons?: undefined;
                helperText?: undefined;
                helperTextVisibility?: undefined;
            })[];
        };
        defaultMetadata: {
            name: string;
            type: string;
            config: {
                type: string;
                template: string;
                icon: string;
                label: string;
                title: string;
                ruleClass: string;
                transientVisibility: string;
                transientAccessGroup: undefined;
                filterPosition: string;
            };
            children: {
                name: string;
                type: string;
                children: never[];
            }[];
        };
    }[];
    queryGPT: any;
    queryGPTForSingleShotUX: any;
    getFieldWiseMeta: any;
    dashboardClassID: string;
    navigation: {};
    getDataObjects: () => any;
    getDataObjectMeta: any;
    getTableSpecWrapper: (args: any) => TableSpecWrapper;
    getPConnect: Function;
};
import { isHybrid } from "./utils";
import { isUsingAppStudio } from "./utils";
import exportToExcel from "../../../utils/export-utils";
import TableSpecWrapper from "./TableSpecWrapper";
export { isHybrid, isUsingAppStudio };
//# sourceMappingURL=index.d.ts.map
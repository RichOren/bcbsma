export default class DataClientApi {
    constructor(data?: any[]);
    data: any[];
    fetchData(stateFromTable: any, meta: any): any;
    fetchUniqueColValues(stateFromTable: any, meta: any, colId: any): any;
    fetchGroupedInfo(stateFromTable: any, meta: any): any;
    fetchAggregatedValues(stateFromTable: any, meta: any): any;
    fetchPersonalizations(): Promise<void>;
    callbacks: {};
    addCallbacks({ setRecordCount, dispatchAction, forceRefresh }: {
        setRecordCount: any;
        dispatchAction: any;
        forceRefresh: any;
    }): void;
    clientApi: ClientApi;
    fetchRowActionDetails(rowItemKey: any): Promise<{
        text: string;
        id: string;
        onClick: {};
    }[] | undefined>;
    getContext(data: any, apiOptions: any): {
        fetchData: (stateFromTable: any, meta: any) => any;
        fetchUniqueColValues: (stateFromTable: any, meta: any, colId: any) => any;
        fetchGroupedInfo: (stateFromTable: any, meta: any) => any;
        fetchAggregatedValues: (stateFromTable: any, meta: any) => any;
        fetchPersonalizations: () => Promise<void>;
        addCallbacks: ({ setRecordCount, dispatchAction, forceRefresh }: {
            setRecordCount: any;
            dispatchAction: any;
            forceRefresh: any;
        }) => void;
        fetchRowActionDetails: (rowItemKey: any) => Promise<{
            text: string;
            id: string;
            onClick: {};
        }[] | undefined>;
    };
    apiOptions: any;
}
import ClientApi from "./ClientApi";
//# sourceMappingURL=DataClientApi.d.ts.map
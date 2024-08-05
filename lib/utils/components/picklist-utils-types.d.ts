import type { Column } from '../../components/forms/AutoComplete/types';
export declare class DataApi {
    isInitialised: boolean;
    isQueryable: boolean;
    nonQueryableData: object[];
    fetchedNQData: boolean;
    previousSearchText: null | string;
    totalRecordCount: number;
    fetchedRecordCount: number;
    pageNumber: number;
    parameters?: {
        [param: string]: string;
    };
    enablePagination?: boolean;
    columns?: Column[];
    pageSize?: string | number;
    maxResultsDisplay?: string;
    matchPosition?: string;
    ignoreCase?: boolean;
    cache: object;
    dataSourceMetaData: {
        structure?: string;
        isQueryable?: boolean;
    };
    isNQDataFetchInProgress: boolean;
    fetchNQDataPromise: Promise<{
        data: object[];
    }> | null;
    dataSource: string;
    context?: string;
    associationFilter?: string[];
    listType?: string;
    bufferInitialized: boolean;
    constructor(config?: Config, context?: string);
    static readonly _searchResultsCache: {
        [context: string]: {
            [uniqueDataApiKey: string]: DataApi;
        };
    };
    static init(config: Config, context: string): Promise<DataApi>;
    static readonly bufferedDataView: BufferedDataView<DataViewCall>;
    registerForBufferedCall(bufferedCallParams: {
        combiner?: DataViewCallCombiner;
        comparator?: DataViewCallComparator;
        separator?: DataViewCallSeparator;
        waitTime?: number;
        maxSize?: number;
        maxTime?: number;
    }): this;
    static clearContextedCache(context: string): void;
    static initializeCache(context: string, config: Config, uniqueDataApiKey: string, dataApiObj: DataApi): void;
    fetchMetaData(context: string): any;
    initializeBufferCallsForDataPage(bufferedCallParams: {
        combiner: DataViewCallCombiner;
        comparator: DataViewCallComparator;
        separator: DataViewCallSeparator;
        waitTime?: number;
        maxSize?: number;
    }): void;
    buildSchemaForQueryableBufferDP(searchText: string): DataViewCall;
    getData(searchText: string): Promise<any>;
    memoizedGetData(searchText: string): Promise<any>;
    fetchData(searchText: string, isPaginated?: boolean): Promise<any>;
    fetchPaginatedData(searchText: string): Promise<any>;
    fetchNonQueryableResults(searchText: string): Promise<unknown>;
    filterDataOnClient(searchText: string, clientSideData: {
        [key: string]: string;
    }[]): {
        [key: string]: string;
    }[];
    positionMatches(text: string, searchText: string): boolean;
    buildSelect(): {
        field: string;
    }[];
    buildFilters(searchText: string): Filter;
    buildQuery(searchText: string): Query;
    buildPageOptions(): Paging;
    buildSchemaForQueryableDP(searchText: string): {
        dataViewParameters: {
            [param: string]: string;
        };
        query: Query;
        paging: {
            pageNumber?: number;
            pageSize?: string | number;
            maxResultsToFetch?: string;
        };
    };
    buildSchemaForNonQueryableDP(): {
        dataViewParameters: {
            [param: string]: string;
        };
    };
    isValidDatasource(): boolean;
}
interface Config {
    deferDatasource: boolean;
    dataSourceMetaData: {
        structure?: string;
        isQueryable: boolean;
    };
    associationFilter: string[] | undefined;
    matchPosition: string | undefined;
    ignoreCase: boolean | undefined;
    maxResultsDisplay?: string;
    enablePagination: boolean;
    dataSource: string;
    parameters: {
        [param: string]: string;
    };
    columns: Column[];
    cacheLifeSpan?: string;
    listType?: string;
    pageSize?: string | number;
}
declare class BufferedDataView<T> {
    private bufferedDataQueues;
    constructor();
    getBufferedDataQueueForDataPage(dataSource: string): BufferedDataQueue<T>;
    addBufferedDataQueueForDataPage(dataSource: string, finalDataViewCall: (arg: T) => Promise<unknown>, combiner: (dataViewCallA: T, dataViewCallB: T) => void, separator: (combinedDataViewCall: T & {
        dataViewCallMap: {
            [identifier: string]: {
                promise: Promise<unknown>;
                resolve: (value: unknown) => void;
            };
        };
    }, data: unknown) => void, comparator: (dataViewCallA: T, dataViewCallB: T) => boolean, maxtime?: number, maxsize?: number): BufferedDataQueue<T>;
}
declare class BufferedDataQueue<T> {
    private readonly finalDataViewCall;
    private readonly combiner;
    private readonly comparator;
    private readonly separator;
    private readonly maxtime;
    private readonly maxsize;
    private readonly groupedDataViewArray;
    private timeoutId?;
    constructor(finalDataViewCall: (arg: T) => Promise<unknown>, combiner: (dataViewCallA: T, dataViewCallB: T) => void, comparator: (dataViewCallA: T, dataViewCallB: T) => boolean, separator: (combinedDataViewCall: T & {
        dataViewCallMap: {
            [identifier: string]: {
                promise: Promise<unknown>;
                resolve: (value: unknown) => void;
            };
        };
    }, data: unknown) => void, maxtime?: number, maxsize?: number);
    findCombinableDataViewCall(newDataViewCall: T): T & {
        dataViewCallMap: {
            [identifier: string]: {
                promise: Promise<unknown>;
                resolve: (value: unknown) => void;
            };
        };
    };
    dequeueAllDataViewCalls(): void;
    dequeueDataViewCallOnSizeExceed(dataViewCall: (typeof this.groupedDataViewArray)[number]): void;
    queueDataViewCall(newDataViewCall: T, identifier: string): Promise<unknown>;
}
type Filter = {
    filterConditions: {
        [k: string]: {
            lhs: {
                field: string;
            };
            rhs: {
                value?: string;
                values?: string[];
            };
            comparator: string;
            ignoreCase?: string;
        };
    };
    logic: string;
};
type Query = {
    [key: string]: string | number | boolean;
} | {
    distinctResultsOnly?: string;
    select: {
        field: string;
    }[];
    filter?: Filter;
} | null | undefined;
type Paging = {
    pageNumber?: number;
    pageSize?: string | number;
    maxResultsToFetch?: string;
} | null | undefined;
type DataViewCall = {
    paging: undefined;
    filterDataOnClient: (searchText: string, clientSideData: {
        [key: string]: string;
    }[]) => {
        [key: string]: string;
    }[];
    dataViewParameters: {
        [param: string]: string;
    } | undefined;
    query: Query;
};
type DataViewCallCombiner = (dataViewCallA: DataViewCall, dataViewCallB: DataViewCall) => void;
type DataViewCallComparator = (promise: DataViewCall, newDataViewCall: DataViewCall) => boolean;
type DataViewCallSeparator = (combinedDataViewCall: DataViewCall & {
    dataViewCallMap: {
        [identifier: string]: {
            promise: Promise<unknown>;
            resolve: (value: unknown) => void;
        };
    };
}, data: unknown) => void;
export {};
//# sourceMappingURL=picklist-utils-types.d.ts.map
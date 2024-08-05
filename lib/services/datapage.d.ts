import type { DataSource } from '../common.types';
type DataPageType = 'list' | 'page';
/**
 * Fetch the available data sources
 */
export declare function getDataSources({ type }: {
    type: DataPageType;
}): Promise<DataSource[]>;
export declare const makeDataSourcesQueryKey: ({ type }: {
    type: DataPageType;
}) => string[];
export declare const makeListDataSourcesByClassQueryKey: (datapageClass: string) => string[];
export {};
//# sourceMappingURL=datapage.d.ts.map
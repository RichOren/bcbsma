import type { Condition } from '@pega/cosmos-react-condition-builder';
import type { RSTypes } from 'pega-ui-list-views';
export interface TableMeta extends RSTypes.Meta {
    isAnalyticsTable: boolean;
    isListViewOrListPage: boolean;
}
export interface ExportConfig {
    state: RSTypes.State;
    meta: TableMeta;
}
export interface ExportOptions {
    className: string;
    name: string;
    dataViewName: string;
    config: ExportConfig;
    dataViewParameters: Record<string, any>;
    pageContextFilters: Condition | undefined;
    dataObjectMeta: Record<string, any>;
}
export default function exportToExcel({ className, name, dataViewName, config, dataViewParameters, pageContextFilters, dataObjectMeta }: ExportOptions): Promise<any>;
export declare function exportToCSV({ className, name, dataViewName, config, dataViewParameters, pageContextFilters, dataObjectMeta }: ExportOptions): Promise<any>;
//# sourceMappingURL=export-utils.d.ts.map
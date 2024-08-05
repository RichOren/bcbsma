import type { ViewMetadata } from '../common.types';
export interface GetViewPromiseResult {
    className: string;
    description?: string;
    label: string;
    metadata: ViewMetadata;
}
interface UpdateViewOptions {
    description?: string;
    label: string;
    viewMetadata: ViewMetadata;
    isDebouncedCall?: boolean;
}
interface UpdateViewPromiseResult {
    updateDateTime: string;
}
interface DeleteViewPromiseResult {
    status: string;
}
declare const ViewCRUDAPI: {
    getView: (viewName: string, viewClass: string) => Promise<GetViewPromiseResult>;
    updateView: (viewName: string, viewClass: string, options: UpdateViewOptions) => Promise<UpdateViewPromiseResult>;
    deleteView: (viewName: string, viewClass: string) => Promise<DeleteViewPromiseResult>;
};
export default ViewCRUDAPI;
//# sourceMappingURL=viewAPI.d.ts.map
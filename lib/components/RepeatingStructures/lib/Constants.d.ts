export namespace apiRetryConfig {
    namespace TIMEOUT {
        const numberOfRetries: number;
        function retryOnCondition(serverApiResponse: any): boolean;
        namespace retryWithOptions {
            const useExtendedTimeout: boolean;
        }
    }
}
export namespace confirmationModalLabels {
    export namespace TIMEOUT_1 {
        const heading: string;
        const genericDescription: string;
        const tableNameMessagePrefix: string;
        const tableNameMessageSuffix: string;
        const cancelButtonLabel: string;
        const submitButtonLabel: string;
    }
    export { TIMEOUT_1 as TIMEOUT };
}
export const SEARCH_AND_SELECT_AS_EXTERNAL_FILTERS: "SEARCH_AND_SELECT_AS_EXTERNAL_FILTERS";
export const CREATE_ACTION_INITIATOR: "createActionInitiator";
export namespace uploadRecordsModalLabels {
    const MODAL_HEADER: string;
    const FILE_INPUT_LABEL: string;
    const IMPORT_INFO: string;
    const IMPORT_ADDITIONAL_INFO: string;
    const DOWNLOAD_BUTTON: string;
    const DOWNLOAD_ERROR_INFO: string;
    const IMPORT_HELPER_TEXT: string;
    const UPLOAD_LOADER_TEXT: string;
    const FILE_ERROR: string;
}
//# sourceMappingURL=Constants.d.ts.map
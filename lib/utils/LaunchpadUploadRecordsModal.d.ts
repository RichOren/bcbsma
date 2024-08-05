export declare const uploadRecordsModalLabels: {
    readonly MODAL_HEADER: "Import";
    readonly FILE_INPUT_LABEL: "Upload file";
    readonly FILE_UPLOAD_ERROR: "An error occurred while uploading the file";
    readonly IMPORT_INFO: "Import records by uploading an existing CSV file or download the template to add records and upload.";
    readonly IMPORT_ADDITIONAL_INFO: "Records cannot be deleted or checked for duplicates after they are imported.";
    readonly DOWNLOAD_BUTTON: "Download template";
    readonly DOWNLOAD_ERROR_INFO: "Unexpected error. Please contact the administrator.";
    readonly IMPORT_HELPER_TEXT: "File format: CSV. Maximum file size: 10MB.";
    readonly UPLOAD_LOADER_TEXT: "Uploading...";
    readonly FILE_ERROR: "Please select a .csv file to upload";
};
export declare const getUploadRecordsModalTestIds: (testIdProp?: string | null | undefined) => import("@pega/cosmos-react-core").TestIdsRecord<readonly ["upload-modal-cancel-button", "upload-modal-submit-button", "import-modal-info", "import-additional-info", "download-template-button", "download-error-info", "upload-modal-file-input", "upload-modal-file-input-helper-text"]>;
interface UploadRecordsModalProps {
    getPConnect: any;
    classId: string;
}
declare const _default: (({ getPConnect, classId }: UploadRecordsModalProps) => import("react/jsx-runtime").JSX.Element) & {
    getTestIds: (testIdProp?: string | null | undefined) => import("@pega/cosmos-react-core").TestIdsRecord<readonly ["upload-modal-cancel-button", "upload-modal-submit-button", "import-modal-info", "import-additional-info", "download-template-button", "download-error-info", "upload-modal-file-input", "upload-modal-file-input-helper-text"]>;
};
export default _default;
//# sourceMappingURL=LaunchpadUploadRecordsModal.d.ts.map
export function binaryToArrayBuffer(binaryString: any): Uint8Array;
export function base64ToArrayBuffer(base64: any): Uint8Array;
export function isContentBinary(headers: any): any;
export function isContentBase64(headers: any): any;
export function isAttachmentPreviewable(type: any): boolean;
export function validateMaxSize(fileObj: any, maxSizeInMB: any): boolean;
export function validateFileExtension(fileObj: any, allowedExtensions: any): any;
export function fileDownload(data: any, fileName: any, ext: any, headers: any): void;
export function transformImageData(data: any, type: any): Blob | undefined;
export function getIconFromFileType(fileType: any): string;
export function fileDownloadVar(content: any, type: any, name: any, extension: any): void;
export function useFileDownload(context: any): ({ ID, name, extension, type, category, responseType }: any) => void;
export function useOpenFile(context: any): (att: any, downloadFile: any, getPConnect: any) => void;
export function useOpenLightbox(context: any): (files: any, idx: any, setDefaultLightboxIndex: any, setLightboxItems: any) => void;
export function getSrcURL(att: any, getPConnect: any, context: any): Promise<any>;
export function isFileUploadedToServer(file: any): any;
export function LightboxComponent(props: any): import("react/jsx-runtime").JSX.Element;
export function isUnsupportedFeaturesDisabled(): any;
//# sourceMappingURL=AttachmentUtils.d.ts.map
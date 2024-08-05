export default EditPopover;
declare function EditPopover({ fileID, fileName, nameWithExt, fileType, fileCategory, description, getPConnect, updateFileDetails, closePopover, popoverTarget, getAttachmentCategories, showCategory, showImgDescription }: {
    fileID: any;
    fileName: any;
    nameWithExt: any;
    fileType: any;
    fileCategory: any;
    description: any;
    getPConnect: any;
    updateFileDetails: any;
    closePopover: any;
    popoverTarget: any;
    getAttachmentCategories: any;
    showCategory?: boolean | undefined;
    showImgDescription: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace EditPopover {
    namespace propTypes {
        const fileID: PropTypes.Validator<string>;
        const fileName: PropTypes.Validator<string>;
        const fileType: PropTypes.Requireable<string>;
        const fileCategory: PropTypes.Requireable<string>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const updateFileDetails: PropTypes.Validator<(...args: any[]) => any>;
        const closePopover: PropTypes.Validator<(...args: any[]) => any>;
        const popoverTarget: PropTypes.Validator<object>;
        const getAttachmentCategories: PropTypes.Validator<(...args: any[]) => any>;
        const showCategory: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        export { DEFAULT_ATTACHMENT_TYPE as fileType };
        export { DEFAULT_ATTACHMENT_CATEGORY as fileCategory };
    }
}
import PropTypes from "prop-types";
declare const DEFAULT_ATTACHMENT_TYPE: "File";
declare const DEFAULT_ATTACHMENT_CATEGORY: "File";
//# sourceMappingURL=EditPopover.d.ts.map
declare function SemanticLink(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SemanticLink {
    namespace defaultProps {
        const onClick: undefined;
        const testId: null;
        const resourceParams: {};
        const previewable: boolean;
        const dataRelationshipContext: null;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const text: PropTypes.Validator<string>;
        const resourceParams_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { resourceParams_1 as resourceParams };
        export const resourcePayload: PropTypes.Validator<{
            [x: string]: any;
        }>;
        export const previewKey: PropTypes.Validator<string>;
        const onClick_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onClick_1 as onClick };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const previewable_1: PropTypes.Requireable<boolean>;
        export { previewable_1 as previewable };
        const dataRelationshipContext_1: PropTypes.Requireable<string>;
        export { dataRelationshipContext_1 as dataRelationshipContext };
    }
}
export default SemanticLink;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
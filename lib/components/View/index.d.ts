declare function View(props: any): import("react/jsx-runtime").JSX.Element | "";
declare namespace View {
    namespace defaultProps {
        const type: undefined;
        const title: undefined;
        const template: undefined;
        const visibility: undefined;
        const caseInfo: undefined;
        const name: undefined;
    }
    namespace propTypes {
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        const template_1: PropTypes.Requireable<string>;
        export { template_1 as template };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const type_1: PropTypes.Requireable<string>;
        export { type_1 as type };
        const title_1: PropTypes.Requireable<string>;
        export { title_1 as title };
        const visibility_1: PropTypes.Requireable<boolean>;
        export { visibility_1 as visibility };
        const caseInfo_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { caseInfo_1 as caseInfo };
        const name_1: PropTypes.Requireable<string>;
        export { name_1 as name };
    }
    function additionalProps(state: any, getPconnect: any): any;
}
export default View;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
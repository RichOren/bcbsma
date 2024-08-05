declare function DashboardFilter(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace DashboardFilter {
    namespace defaultProps {
        const label: null;
        const children: null;
        const type: null;
        const metadata: null;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const children_1: PropTypes.Requireable<any[]>;
        export { children_1 as children };
        export const name: PropTypes.Validator<string>;
        export const filterProp: PropTypes.Validator<string>;
        const type_1: PropTypes.Requireable<string>;
        export { type_1 as type };
        const metadata_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { metadata_1 as metadata };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
    }
}
export default DashboardFilter;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
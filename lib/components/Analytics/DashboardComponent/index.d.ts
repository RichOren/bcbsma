declare function DashboardComponent(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace DashboardComponent {
    namespace defaultProps {
        const apiContext: null;
        const useSearchAndSelect: boolean;
        const dataApiRef: null;
    }
    namespace propTypes {
        const apiContext_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { apiContext_1 as apiContext };
        export const componentType: PropTypes.Validator<string>;
        const dataApiRef_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { dataApiRef_1 as dataApiRef };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const tableRef: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            current: PropTypes.Requireable<Element>;
        }>>>;
        const useSearchAndSelect_1: PropTypes.Requireable<boolean>;
        export { useSearchAndSelect_1 as useSearchAndSelect };
    }
}
export default DashboardComponent;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
declare function Insight({ getPConnect, id, parameter, filter, dataViewParameters, customHeight, dashboardFilters, fitToViewport }: {
    getPConnect: any;
    id: any;
    parameter: any;
    filter: any;
    dataViewParameters: any;
    customHeight: any;
    dashboardFilters: any;
    fitToViewport: any;
}): import("react/jsx-runtime").JSX.Element | null;
declare namespace Insight {
    namespace defaultProps {
        const parameter: null;
        const fitToViewport: boolean;
        const filter: null;
        const dashboardFilters: null;
    }
    namespace propTypes {
        export const id: PropTypes.Validator<string>;
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const parameter_1: PropTypes.Requireable<string>;
        export { parameter_1 as parameter };
        const fitToViewport_1: PropTypes.Requireable<boolean>;
        export { fitToViewport_1 as fitToViewport };
        const filter_1: PropTypes.Requireable<string>;
        export { filter_1 as filter };
        const dashboardFilters_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { dashboardFilters_1 as dashboardFilters };
    }
}
export default Insight;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
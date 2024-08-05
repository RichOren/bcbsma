export default QuickCreate;
declare function QuickCreate(props: any): import("react/jsx-runtime").JSX.Element | null;
declare namespace QuickCreate {
    namespace propTypes {
        const heading: PropTypes.Requireable<string>;
        const classFilter: PropTypes.Requireable<Object>;
        const showCaseIcons: PropTypes.Requireable<boolean>;
        const backgroundColor: PropTypes.Requireable<string>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const heading_1: string;
        export { heading_1 as heading };
        const classFilter_1: never[];
        export { classFilter_1 as classFilter };
        const showCaseIcons_1: boolean;
        export { showCaseIcons_1 as showCaseIcons };
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
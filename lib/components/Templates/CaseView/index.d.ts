export const UtilityContext: import("react").Context<{
    setUtilitySummaryDetails: () => void;
}>;
export default CaseView;
declare function CaseView(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace CaseView {
    namespace defaultProps {
        const icon: string;
        const children: never[];
        const caseInfo: {};
        const showIconInHeader: boolean;
        const showCaseLifecycle: boolean;
        const showPromotedAction: boolean;
        const getPConnect: null;
        const defaultCollapsedUtilities: boolean;
    }
    namespace propTypes {
        const icon_1: PropTypes.Requireable<string>;
        export { icon_1 as icon };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        export { children_1 as children };
        export const subheader: PropTypes.Validator<string>;
        export const header: PropTypes.Validator<string>;
        const showIconInHeader_1: PropTypes.Requireable<boolean>;
        export { showIconInHeader_1 as showIconInHeader };
        const showCaseLifecycle_1: PropTypes.Requireable<boolean>;
        export { showCaseLifecycle_1 as showCaseLifecycle };
        const showPromotedAction_1: PropTypes.Requireable<boolean>;
        export { showPromotedAction_1 as showPromotedAction };
        const caseInfo_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { caseInfo_1 as caseInfo };
        const getPConnect_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { getPConnect_1 as getPConnect };
        const defaultCollapsedUtilities_1: PropTypes.Requireable<boolean>;
        export { defaultCollapsedUtilities_1 as defaultCollapsedUtilities };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
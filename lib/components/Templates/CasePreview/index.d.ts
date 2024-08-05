export default CasePreview;
declare function CasePreview(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace CasePreview {
    namespace defaultProps {
        const icon: string;
        const children: never[];
        const caseInfo: {};
        const allowFollowing: boolean;
        const showCaseSummary: boolean;
        const showCaseLifecycle: boolean;
        const showAssignments: boolean;
        const getPConnect: null;
        const pageMessages: never[];
        const httpMessages: never[];
    }
    namespace propTypes {
        const icon_1: PropTypes.Requireable<string>;
        export { icon_1 as icon };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        export { children_1 as children };
        export const subtitle: PropTypes.Validator<string>;
        export const title: PropTypes.Validator<string>;
        const allowFollowing_1: PropTypes.Requireable<boolean>;
        export { allowFollowing_1 as allowFollowing };
        const showCaseSummary_1: PropTypes.Requireable<boolean>;
        export { showCaseSummary_1 as showCaseSummary };
        const showCaseLifecycle_1: PropTypes.Requireable<boolean>;
        export { showCaseLifecycle_1 as showCaseLifecycle };
        const showAssignments_1: PropTypes.Requireable<boolean>;
        export { showAssignments_1 as showAssignments };
        const caseInfo_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { caseInfo_1 as caseInfo };
        const getPConnect_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { getPConnect_1 as getPConnect };
        const pageMessages_1: PropTypes.Requireable<any[]>;
        export { pageMessages_1 as pageMessages };
        const httpMessages_1: PropTypes.Requireable<any[]>;
        export { httpMessages_1 as httpMessages };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
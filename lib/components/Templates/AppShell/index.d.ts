declare function AppShell(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace AppShell {
    namespace defaultProps {
        const pages: never[];
        const caseTypes: never[];
        const children: never[];
        const httpMessages: never[];
        const errorDetails: undefined;
        const activeCases: null;
        const showAppHeaderBar: boolean;
        const portalTemplate: string;
        namespace navDisplayOptions {
            const alignment: string;
            const position: string;
            const disableNotifications: boolean;
            const disableRecents: boolean;
            const disableSearch: boolean;
            const portalUtilViewName: string;
        }
    }
    namespace propTypes {
        export const portalName: PropTypes.Validator<string>;
        export const portalLogo: PropTypes.Validator<string>;
        export const showAppName: PropTypes.Validator<boolean>;
        const showAppHeaderBar_1: PropTypes.Requireable<boolean>;
        export { showAppHeaderBar_1 as showAppHeaderBar };
        const pages_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { pages_1 as pages };
        const caseTypes_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { caseTypes_1 as caseTypes };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        export { children_1 as children };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const httpMessages_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { httpMessages_1 as httpMessages };
        const errorDetails_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { errorDetails_1 as errorDetails };
        const activeCases_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { activeCases_1 as activeCases };
        export const portalDocMode: PropTypes.Validator<string>;
        const portalTemplate_1: PropTypes.Requireable<string>;
        export { portalTemplate_1 as portalTemplate };
        const navDisplayOptions_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { navDisplayOptions_1 as navDisplayOptions };
        const portalUtilViewName_1: PropTypes.Requireable<string>;
        export { portalUtilViewName_1 as portalUtilViewName };
    }
}
export default AppShell;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
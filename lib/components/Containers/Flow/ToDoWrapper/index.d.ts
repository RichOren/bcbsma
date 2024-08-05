export default ToDoWrapper;
declare function ToDoWrapper(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace ToDoWrapper {
    namespace defaultProps {
        const rootViewElement: null;
        const pageMessages: never[];
        const hasError: boolean;
        const renderTodoInConfirm: boolean;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        export const activeContainerItemID: PropTypes.Validator<string>;
        const rootViewElement_1: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export { rootViewElement_1 as rootViewElement };
        const pageMessages_1: PropTypes.Requireable<any[]>;
        export { pageMessages_1 as pageMessages };
        const hasError_1: PropTypes.Requireable<boolean>;
        export { hasError_1 as hasError };
        const renderTodoInConfirm_1: PropTypes.Requireable<boolean>;
        export { renderTodoInConfirm_1 as renderTodoInConfirm };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
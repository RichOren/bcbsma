export default AddPopover;
declare function AddPopover({ getPConnect, onAddRelatedCases, setAllRelatedCases, popoverTarget, setPopoverTarget }: {
    getPConnect: any;
    onAddRelatedCases: any;
    setAllRelatedCases: any;
    popoverTarget: any;
    setPopoverTarget: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace AddPopover {
    namespace propTypes {
        const onAddRelatedCases: PropTypes.Validator<(...args: any[]) => any>;
        const setAllRelatedCases: PropTypes.Requireable<(...args: any[]) => any>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const popoverTarget: PropTypes.Validator<object>;
        const setPopoverTarget: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const setAllRelatedCases_1: undefined;
        export { setAllRelatedCases_1 as setAllRelatedCases };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=AddPopover.d.ts.map
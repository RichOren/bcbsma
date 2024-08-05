export default FollowersPopover;
declare function FollowersPopover({ getPConnect, onAddFollowers, setAllFollowers, popoverTarget, setPopoverTarget }: {
    getPConnect: any;
    onAddFollowers: any;
    setAllFollowers: any;
    popoverTarget: any;
    setPopoverTarget: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace FollowersPopover {
    namespace propTypes {
        const onAddFollowers: PropTypes.Validator<(...args: any[]) => any>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const setAllFollowers: PropTypes.Requireable<(...args: any[]) => any>;
        const popoverTarget: PropTypes.Validator<object>;
        const setPopoverTarget: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const setAllFollowers_1: null;
        export { setAllFollowers_1 as setAllFollowers };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=FollowersPopover.d.ts.map
export default FollowersModal;
declare function FollowersModal({ users, deleteFollower, getPConnect, onAddFollowers, label }: {
    users: any;
    deleteFollower: any;
    getPConnect: any;
    onAddFollowers: any;
    label: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace FollowersModal {
    namespace propTypes {
        const onAddFollowers: PropTypes.Validator<(...args: any[]) => any>;
        const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const users: PropTypes.Requireable<(object | null | undefined)[]>;
        const deleteFollower: PropTypes.Requireable<(...args: any[]) => any>;
        const label: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const users_1: never[];
        export { users_1 as users };
        const deleteFollower_1: null;
        export { deleteFollower_1 as deleteFollower };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=FollowersModal.d.ts.map
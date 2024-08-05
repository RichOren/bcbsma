export default ModalViewContainer;
declare function ModalViewContainer(props: any): null;
declare namespace ModalViewContainer {
    namespace defaultProps {
        const getPConnect: null;
        const name: string;
        const loadingInfo: boolean;
        const routingInfo: null;
        const pageMessages: undefined;
        const httpMessages: undefined;
    }
    namespace propTypes {
        const getPConnect_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { getPConnect_1 as getPConnect };
        const name_1: PropTypes.Requireable<string>;
        export { name_1 as name };
        const loadingInfo_1: PropTypes.Requireable<boolean>;
        export { loadingInfo_1 as loadingInfo };
        const routingInfo_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { routingInfo_1 as routingInfo };
        const pageMessages_1: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        export { pageMessages_1 as pageMessages };
        const httpMessages_1: PropTypes.Requireable<string>;
        export { httpMessages_1 as httpMessages };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
export default PConnectLazyHOC;
declare class PConnectLazyHOC extends Component<any, any, any> {
    static propTypes: {
        getPConnect: PropTypes.Validator<(...args: any[]) => any>;
    };
    constructor(props: any);
    state: {
        componentLoaded: boolean;
    };
    render(): import("react").CElement<any, import("./react_pconnect").PConnect> | import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | null;
}
import { Component } from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=react_lazyPConnect.d.ts.map
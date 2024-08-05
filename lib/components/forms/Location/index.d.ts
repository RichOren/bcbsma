declare function Location(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace Location {
    namespace defaultProps {
        const value: string;
        const placeholder: string;
        const validatemessage: string;
        const helperText: string;
        const hideLabel: boolean;
        const disabled: boolean;
        const readOnly: boolean;
        const required: boolean;
        const testId: null;
        const showMap: boolean;
        const showMapReadOnly: boolean;
        const coordinates: string;
        const displayMode: null;
        const additionalProps: {};
    }
    namespace propTypes {
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        export const label: PropTypes.Validator<string>;
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const helperText_1: PropTypes.Requireable<string>;
        export { helperText_1 as helperText };
        const showMap_1: PropTypes.Requireable<boolean>;
        export { showMap_1 as showMap };
        const showMapReadOnly_1: PropTypes.Requireable<boolean>;
        export { showMapReadOnly_1 as showMapReadOnly };
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        const readOnly_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { readOnly_1 as readOnly };
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const coordinates_1: PropTypes.Requireable<string>;
        export { coordinates_1 as coordinates };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const additionalProps_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { additionalProps_1 as additionalProps };
    }
}
export default Location;
export function isValidCoordinates(latLang: any): boolean;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map
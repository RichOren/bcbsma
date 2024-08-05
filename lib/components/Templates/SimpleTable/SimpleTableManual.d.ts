/**
 * SimpleTable react component
 * @param {*} props - props
 */
declare function SimpleTableManual(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace SimpleTableManual {
    namespace defaultProps {
        const presets: never[];
        const contextClass: null;
        const displayMode: null;
        const hideDeleteRow: boolean;
        const hideAddRow: boolean;
        const referenceList: never[];
        const hideEditRow: boolean;
        const disableDragDrop: boolean;
        const classId: null;
        const required: boolean;
        const validatemessage: string;
        const uniqueField: undefined;
    }
    namespace propTypes {
        export const label: PropTypes.Validator<string>;
        const contextClass_1: PropTypes.Requireable<string>;
        export { contextClass_1 as contextClass };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const referenceList_1: PropTypes.Requireable<(object | null | undefined)[]>;
        export { referenceList_1 as referenceList };
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        export const renderMode: PropTypes.Validator<string>;
        const presets_1: PropTypes.Requireable<any[]>;
        export { presets_1 as presets };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const hideDeleteRow_1: PropTypes.Requireable<boolean>;
        export { hideDeleteRow_1 as hideDeleteRow };
        const hideAddRow_1: PropTypes.Requireable<boolean>;
        export { hideAddRow_1 as hideAddRow };
        const hideEditRow_1: PropTypes.Requireable<boolean>;
        export { hideEditRow_1 as hideEditRow };
        const disableDragDrop_1: PropTypes.Requireable<boolean>;
        export { disableDragDrop_1 as disableDragDrop };
        const classId_1: PropTypes.Requireable<string>;
        export { classId_1 as classId };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        export const defaultRowHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        export const addAndEditRowsWithin: PropTypes.Requireable<string>;
        export const viewForAddAndEditModal: PropTypes.Requireable<string>;
        export const useSeparateViewForEdit: PropTypes.Requireable<boolean>;
        export const viewForEditModal: PropTypes.Requireable<string>;
        export const editMode: PropTypes.Requireable<string>;
        export const editModeConfig: PropTypes.Requireable<object>;
        const uniqueField_1: PropTypes.Requireable<string>;
        export { uniqueField_1 as uniqueField };
    }
}
export default SimpleTableManual;
import PropTypes from "prop-types";
//# sourceMappingURL=SimpleTableManual.d.ts.map
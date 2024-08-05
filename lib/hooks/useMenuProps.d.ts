/**
 * A custom hook that handles the complexity of building menu props for the Cosmos Menu and ComboBox
 * components.
 * @param {Array<object> | object} originalItems The input items to be mapped to to menuItems.
 * @param {object} [parameters]
 * @param {string} [parameters.mode='single-select'] 'multi-select' or 'single-select'
 * @param {string | Array<string>} [parameters.currentSelections] The current selection(s) of the menu items.
 * @param {boolean} [parameters.filterCurrentSelections] Whether to filter out current selections from the menu items
 * @param {boolean} [parameters.required] For use with single-select ComboBox to not allow clearing selection
 * @param {ItemType} [parameters.itemTypes] One more item types describing how to treat the input items
 * @returns Several menu props and more
 */
export default function useMenuProps(originalItems: Array<object> | object, parameters?: {
    mode?: string | undefined;
    currentSelections?: string | string[] | undefined;
    filterCurrentSelections?: boolean | undefined;
    required?: boolean | undefined;
    itemTypes?: any;
} | undefined): {
    initialize: () => void;
    errorInfo: undefined;
    loading: boolean;
    loadingInitialSelections: boolean;
    selections: {
        primary: string;
        secondary?: import("react").ReactNode[] | undefined;
        visual?: import("react").ReactNode;
        count?: number | undefined;
        ancestors?: (import("@pega/cosmos-react-core").MenuItemProps | import("@pega/cosmos-react-core").MenuGroupProps)[] | undefined;
        items?: (import("@pega/cosmos-react-core").MenuItemProps | import("@pega/cosmos-react-core").MenuGroupProps)[] | undefined;
        selected?: boolean | undefined;
        partial?: boolean | undefined;
        href?: string | undefined;
        tooltip?: string | undefined;
        onClick?: ((id: string, e: import("react").MouseEvent<import("@pega/cosmos-react-core/lib/components/Menu/Menu.types").AcceptedMouseEventElement, MouseEvent>) => void) | undefined;
        onExpand?: ((id: string, e: import("react").MouseEvent<import("@pega/cosmos-react-core/lib/components/Menu/Menu.types").AcceptedMouseEventElement, MouseEvent>) => void) | undefined;
        disabled?: boolean | undefined;
        role?: "menuitem" | "option" | undefined;
        id: string;
        testId?: string | null | undefined;
        text: string;
    } | {
        primary: string;
        secondary?: import("react").ReactNode[] | undefined;
        visual?: import("react").ReactNode;
        count?: number | undefined;
        ancestors?: (import("@pega/cosmos-react-core").MenuItemProps | import("@pega/cosmos-react-core").MenuGroupProps)[] | undefined;
        items?: (import("@pega/cosmos-react-core").MenuItemProps | import("@pega/cosmos-react-core").MenuGroupProps)[] | undefined;
        selected?: boolean | undefined;
        partial?: boolean | undefined;
        href?: string | undefined;
        tooltip?: string | undefined;
        onClick?: ((id: string, e: import("react").MouseEvent<import("@pega/cosmos-react-core/lib/components/Menu/Menu.types").AcceptedMouseEventElement, MouseEvent>) => void) | undefined;
        onExpand?: ((id: string, e: import("react").MouseEvent<import("@pega/cosmos-react-core/lib/components/Menu/Menu.types").AcceptedMouseEventElement, MouseEvent>) => void) | undefined;
        disabled?: boolean | undefined;
        role?: "menuitem" | "option" | undefined;
        id: string;
        testId?: string | null | undefined;
        text: string;
    }[];
    items: any;
    onItemExpand: any;
    onItemClick: (id: any) => undefined;
    onItemCollapse: () => void;
    filterValue: undefined;
    changeFilterValue: (newValue: any) => boolean;
    onBlur: () => void;
};
//# sourceMappingURL=useMenuProps.d.ts.map
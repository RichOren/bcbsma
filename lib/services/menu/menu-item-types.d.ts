/**
 * @file This file contains the logic for defining item types needed for the Combobox and Menu (Cosmos components).
 * @author Andrew Lewis (lewia1)
 */
import type { MenuItemProps } from '@pega/cosmos-react-core/lib/components/Menu/Menu.types';
/**
 * A function for converting an item
 * @callback ConvertToMenuItem
 * @param {unknown} item The item to be converted to a menu item
 * @param {import('@pega/cosmos-react-core').MenuItemProps} parentItem The parent menu item
 * @param {unknown | Array<unknown>} [currentSelections] When used for Combobox or Menu, this should
 *   be is used to determine if the given item is selected. If an array, then assume it's for multi-select
 * @returns {import('@pega/cosmos-react-core').MenuItemProps}
 */
/**
 * An object that provides info and helper functions for handling converting items to (Cosmos) menu
 * items. See MenuItemProps interface. Refer to the services/build-items function that utilizes
 * the itemType object, as well as the hooks/useMenuProps custom hook.
 * @typedef {object} ItemType
 * @property {string} name The name of the item type. Should be lowercase. This is set on the `type`
 *   prop of the menu item by buildMenuItems
 * @property {string} [subItemsKey] (Optional) Used by buildMenuItems to recursively build menu items
 * @property {ConvertToMenuItem} convertToMenuItem Given an item, create a menuItem object from it. This shouldn't handle subitems
 * @property {function} [fetchItems] (Optional) Used to dynamically fetch subitems (used by
 *   useMenuProps onItemExpand function). Should return a Promise that resolves to an array of the items
 * @property {function} [getItems] (Optional) Used to get items from a cache synchronously. Returns undefined/null if
 *   there are not any cached items.
 * @property {function} [filter] (Optional) A function that, if evaluated to true for a given item, that item will not
 *   be included in the menu items tree (used by buildMenuItems)
 */
interface FieldItem {
    name: string;
    label: string;
    typeKey: string;
}
type ComplexFieldItem = FieldItem & {
    targetObjectClass?: string;
    contextClass: string;
    ruleClass: string;
    ruleClassNamespace: string;
};
type MenuItem = MenuItemProps & {
    originalItem: FieldItem;
};
type AuthoringRecordsResponse = {
    Fields: FieldItem[];
};
interface DefaultItem {
    name: string;
    label: string;
    text?: string;
}
interface ParentItem {
    parentId?: string;
}
type CurrentSelections = string[] | string;
export interface FieldItemTypeDefinition {
    name: 'field' | 'page' | 'object';
    subItemsKey: 'Fields';
    expandable: (menuItem: MenuItem) => boolean;
    selectable: (menuItem: MenuItem) => boolean;
    convertToMenuItem: (field: FieldItem, parentItem: MenuItemProps, currentSelections: CurrentSelections, currentType: FieldItemTypeDefinition) => MenuItemProps;
    fetchItems: (field: ComplexFieldItem) => Promise<FieldItem[]>;
    getItems: (field: ComplexFieldItem) => AuthoringRecordsResponse['Fields'] | undefined;
    filter: (fieldMenuItem: MenuItem) => boolean;
}
export default function getItemTypes<T>(types: T | T[]): FieldItemTypeDefinition | {
    name: string;
    subItemsKey: "items";
    convertToMenuItem: (item: MenuItemProps & DefaultItem, parentItem: (MenuItemProps | Record<string, never>) & ParentItem, currentSelections?: CurrentSelections | undefined) => MenuItemProps;
} | (FieldItemTypeDefinition | {
    name: string;
    subItemsKey: "items";
    convertToMenuItem: (item: MenuItemProps & DefaultItem, parentItem: (MenuItemProps | Record<string, never>) & ParentItem, currentSelections?: CurrentSelections | undefined) => MenuItemProps;
})[];
export {};
//# sourceMappingURL=menu-item-types.d.ts.map
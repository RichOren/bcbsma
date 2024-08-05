export function makeItemTypes(itemTypes: any, options?: {}): any;
export namespace ViewItemType {
    const name: string;
    const category: string;
    function isType(item: any, dependencies: any): any;
    function convertToContentItem(item: any, itemPath: any, dependencies: any, itemData: any): {
        primary: any;
        secondary: string;
        status: {
            type: string;
            message: string;
        } | undefined;
        onConfigure: ((id: any, e: any) => void) | null;
    };
}
export namespace FieldItemType {
    const name_1: string;
    export { name_1 as name };
    const category_1: string;
    export { category_1 as category };
    export { fieldSubtypes as subtypes };
    export function isType_1(item: any, dependencies: any): any;
    export { isType_1 as isType };
    export function getItemData(item: any, dependencies: any): any;
    export function convertToContentItem_1(item: any, itemPath: any, dependencies: any, itemData: any): {
        type: any;
        primary: any;
        secondary: any;
        fieldReference: any;
    };
    export { convertToContentItem_1 as convertToContentItem };
}
export namespace GroupItemType {
    const name_2: string;
    export { name_2 as name };
    export const subItemsKey: string;
    export function isType_2(item: any): boolean;
    export { isType_2 as isType };
    export function acceptedItemTypes(item: any): string[];
    export function convertToContentItem_2(item: any, itemPath: any, dependencies: any): {
        primary: any;
        secondary: string;
        onRemove: () => void;
        onConfigure: (id: any, e: any) => any;
        onAddTo: (id: any, e: any) => void;
    };
    export { convertToContentItem_2 as convertToContentItem };
}
export namespace SearchGroupItemType {
    const name_3: string;
    export { name_3 as name };
    const subItemsKey_1: string;
    export { subItemsKey_1 as subItemsKey };
    export function isType_3(item: any): boolean;
    export { isType_3 as isType };
    export function acceptedItemTypes_1(): string[];
    export { acceptedItemTypes_1 as acceptedItemTypes };
    export function convertToContentItem_3(item: any, itemPath: any, dependencies: any): {
        primary: any;
        secondary: string;
        onRemove: () => void;
        onConfigure: (id: any, e: any) => any;
        onAddTo: (id: any, e: any) => void;
    };
    export { convertToContentItem_3 as convertToContentItem };
}
export namespace TabItemType {
    const name_4: string;
    export { name_4 as name };
    export function isType_4(item: any): boolean;
    export { isType_4 as isType };
    export function convertToContentItem_4(item: any, itemPath: any, dependencies: any): {
        primary: {
            text: any;
            onClick: () => any;
        };
        secondary: string;
        onConfigure: (id: any, e: any) => void;
    };
    export { convertToContentItem_4 as convertToContentItem };
}
export namespace FormGroupsItemType {
    const name_5: string;
    export { name_5 as name };
    export function isType_5(item: any): boolean;
    export { isType_5 as isType };
    export function convertToContentItem_5(item: any, itemPath: any, dependencies: any): {
        primary: {
            text: any;
            onClick: () => any;
        };
        onConfigure: (id: any, e: any) => void;
    };
    export { convertToContentItem_5 as convertToContentItem };
}
export namespace WidgetItemType {
    const name_6: string;
    export { name_6 as name };
    const category_2: string;
    export { category_2 as category };
    export function isType_6(item: any, dependencies: any): any;
    export { isType_6 as isType };
    export function convertToContentItem_6(item: any, itemPath: any, dependencies: any): {
        onConfigure: ((id: any, e: any) => any) | undefined;
        status?: {
            type: string;
            message: string;
        } | undefined;
        primary: any;
        secondary: string | undefined;
    };
    export { convertToContentItem_6 as convertToContentItem };
}
export namespace InsightItemType {
    const name_7: string;
    export { name_7 as name };
    const category_3: string;
    export { category_3 as category };
    export function isType_7(item: any): boolean;
    export { isType_7 as isType };
    export function getItemData_1(item: any, dependencies: any): any;
    export { getItemData_1 as getItemData };
    export function convertToContentItem_7(item: any, itemPath: any, dependencies: any, itemData: any): {
        primary: any;
        secondary: any;
        status: any;
        onConfigure: (id: any, e: any) => any;
    };
    export { convertToContentItem_7 as convertToContentItem };
}
export namespace AssociationItemType {
    const name_8: string;
    export { name_8 as name };
    const category_4: string;
    export { category_4 as category };
    export function isType_8(item: any): any;
    export { isType_8 as isType };
    export function convertToContentItem_8(item: any, itemPath: any, dependencies: any): {
        primary: any;
        status: {
            type: string;
            message: string;
        } | undefined;
        fieldReference: any;
        onConfigure: (id: any, e: any) => any;
    };
    export { convertToContentItem_8 as convertToContentItem };
}
export namespace StringItemType {
    const name_9: string;
    export { name_9 as name };
    export function convertToContentItem_9(item: any): {
        primary: any;
    };
    export { convertToContentItem_9 as convertToContentItem };
}
export namespace DefaultItemType {
    const name_10: string;
    export { name_10 as name };
    export function convertToContentItem_10(item: any, itemPath: any, dependencies: any): {
        primary: any;
        secondary: any;
        onConfigure(id: any, e: any): any;
        status: {
            type: string;
            message: string;
        };
    } | {
        onConfigure: ((id: any, e: any) => any) | undefined;
        status?: {
            type: string;
            message: string;
        } | undefined;
        primary: any;
        secondary: string | undefined;
    };
    export { convertToContentItem_10 as convertToContentItem };
}
export namespace addTypeListTypeMap {
    export { FieldItemType as Fields };
    export { ViewItemType as Views };
    export { TabItemType as Tabs };
    export { TabItemType as DeferLoad };
    export { InsightItemType as Insights };
    export { WidgetItemType as Widgets };
    export { AssociationItemType as Associations };
    export { StringItemType as Strings };
    export { FieldItemType as DashboardFilters };
    export { FormGroupsItemType as FormGroups };
}
export namespace itemTypeMap {
    export { FieldItemType as field };
    export { ViewItemType as view };
    export { TabItemType as tab };
    export { InsightItemType as insight };
    export { WidgetItemType as widget };
}
declare const fieldSubtypes: string[];
export {};
//# sourceMappingURL=content-item-types.d.ts.map
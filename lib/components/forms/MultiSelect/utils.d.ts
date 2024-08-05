export function updatePropertiesForNewRecord(dataConfig: any, contextName: any, dataApiObj: any, setNewRecordCreated: any, displayFieldMeta: any, newCaseId: any): void;
declare namespace _default {
    export { useDeepMemo };
    export { preProcessColumns };
    export { getDisplayFieldsMetaData };
    export { doSearch };
    export { setValuesToPropertyList };
    export { getGroupDataForItemsTree };
    export { updateNewInstructions };
    export { insertInstruction };
    export { deleteInstruction };
    export { updatePropertiesForNewRecord };
}
export default _default;
declare function useDeepMemo(memoFn: any, key: any): any;
declare function preProcessColumns(columns: any): any;
declare function getDisplayFieldsMetaData(columns: any): {
    key: string;
    primary: string;
    secondary: never[];
    hidden: never[];
};
declare function doSearch(searchText: any, clickedGroup: any, initialCaseClass: any, displayFieldMeta: any, dataApiObj: any, itemsTree: any, isGroupData: any, showSecondaryInSearchOnly: any, selected: any): Promise<any>;
declare function setValuesToPropertyList(searchText: any, assocProp: any, items: any, columns: any, actions: any, updatePropertyInRedux?: boolean): any[];
declare function getGroupDataForItemsTree(groupDataSource: any, groupsDisplayFieldMeta: any, showSecondaryInSearchOnly: any): any;
import { updateNewInstructions } from "../../../utils/instructions-utils";
import { insertInstruction } from "../../../utils/instructions-utils";
import { deleteInstruction } from "../../../utils/instructions-utils";
//# sourceMappingURL=utils.d.ts.map
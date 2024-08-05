import type { OmitStrict } from '@pega/cosmos-react-core';
import type { DataSource } from '../../../common.types';
import type { ViewDependencies } from '../common';
interface SearchViewDependencies extends OmitStrict<ViewDependencies, 'template'> {
    targetObjectClass: string;
    referenceList: string;
    parameters: DataSource['parameters'];
    selectionMode: string;
    referenceType: string;
}
export default function generate({ ruleId, ruleClass, ruleNamespace, ruleClassNamespace, targetObjectClass, referenceList, parameters, selectionMode, referenceType, }: SearchViewDependencies): z.infer<any>;
export {};
//# sourceMappingURL=advanced-search.d.ts.map
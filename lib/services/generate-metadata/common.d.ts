/**
 * Common metadata generation functions used by other metadata generation functions.
 */
import type { ViewMetadata } from '../../common.types';
export interface ViewDependencies {
    ruleId: string;
    ruleClass: string;
    template: string;
    ruleNamespace?: string;
    ruleClassNamespace?: string;
}
export declare function generateViewMetadataChild(type: string): {
    type: string;
    config: {};
};
export declare function generateInitialViewMetadata(ruleId: string, ruleClass: string, template: string, ruleNamespace?: string, ruleClassNamespace?: string): {
    name: string;
    type: string;
    config: {
        ruleClassNamespace?: string | undefined;
        ruleNamespace?: string | undefined;
        ruleClass: string;
        template: string;
    };
    children: never[];
};
export declare function generateRegion(name: string, children?: never[]): {
    name: string;
    type: string;
    children: never[];
};
/**
 * Generate form or details view metadata
 */
export declare function generateGenericViewMetadata(params: {
    ruleId: string;
    ruleNamespace?: string;
    ruleClass: string;
    ruleClassNamespace: string;
    template?: string;
    regionName?: string;
    mode?: 'editable' | 'display';
    includePrimaryFields?: boolean;
}): ViewMetadata;
//# sourceMappingURL=common.d.ts.map
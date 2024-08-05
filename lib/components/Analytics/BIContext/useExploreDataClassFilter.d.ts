export type ClassFilter = {
    type: 'ExploreDataObject';
    config: {
        class: string;
        label: string;
        associations: string[] | null;
    };
};
export type ClassFilterList = ClassFilter[] | string[];
export default function useExploreDataClassFilter(isSRSEnabled: boolean, isAppStudioX: boolean): ClassFilterList | null;
//# sourceMappingURL=useExploreDataClassFilter.d.ts.map
export function onEmailSearchChange({ value, setSearchInputValue, setSearchInfo, setLoading, debouncedEmailSearch }: {
    value: any;
    setSearchInputValue: any;
    setSearchInfo: any;
    setLoading: any;
    debouncedEmailSearch: any;
}): void;
export function onEmailSearchSubmit({ value, setSearchInfo, setProgress, setSearchResults }: {
    value: any;
    setSearchInfo: any;
    setProgress: any;
    setSearchResults: any;
}): void;
export function showEmailSearchResults({ searchString, setLoading, abortConRef, setSearchInputValue, setSearchResults, localeUtils, setSearchInfo }: {
    searchString: any;
    setLoading: any;
    abortConRef: any;
    setSearchInputValue: any;
    setSearchResults: any;
    localeUtils: any;
    setSearchInfo: any;
}): Promise<void>;
//# sourceMappingURL=emailSearchUtils.d.ts.map
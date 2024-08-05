import type { Ref, FC } from 'react';
import type { SearchInputProps } from '../SearchInput';
import type { ForwardProps } from '../../types';
import type { SummaryListProps } from './SummaryList';
export interface ViewAllProps extends Pick<SummaryListProps, 'loading' | 'actions' | 'items'> {
    searchInputProps?: SearchInputProps;
    ref?: Ref<HTMLDivElement>;
}
export declare const StyledViewAll: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    loading: ViewAllProps['loading'];
}, never>;
declare const SearchableList: FC<ViewAllProps & ForwardProps>;
export default SearchableList;
//# sourceMappingURL=ViewAll.d.ts.map
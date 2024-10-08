import type { Ref, FC } from 'react';
import type { ActionsProps } from '../Actions';
import type { EmptyStateProps } from '../EmptyState';
import type { ForwardProps, NoChildrenProp, OmitStrict, Action, HeadingTag } from '../../types';
import SummaryItem from '../SummaryItem';
import type { SummaryItemProps } from '../SummaryItem';
import type { ErrorStateProps } from '../ErrorState';
export interface SummaryListProps extends NoChildrenProp {
    /** Name of the utility to be used as its heading along with associated actions and aria attributes. */
    name?: string;
    /**
     * The heading tag to render the provided name as with.
     * @default 'h2'
     */
    headingTag?: HeadingTag;
    /** Identifier for the icon within Pega icons. */
    icon?: string;
    /** Integer representing the total count of items for a list utility dataset. */
    count?: number;
    /** Top level actions for the utility. If more than one action is passed a consolidated ActionMenu will be generated. */
    actions?: Action[];
    /** If the utility is in a state of fetching data. */
    loading?: boolean | string;
    /** An array of SummaryListItem objects to render. Pass an appropriately limited length array with a desired sort order based on design system defaults or config. */
    items: SummaryListItem[];
    /** User click initiated callback for when to show view all modal. List lengths less than the count prop will display a "View all" button with this function is bound to. */
    onViewAll?: (callback: Function) => void;
    /** A simple message to display when there are no items. */
    noItemsText?: EmptyStateProps['message'];
    /**
     * Indicate an error occurred while acquiring data for the list.
     * The default error state may be overridden with custom props.
     */
    error?: boolean | ErrorStateProps;
    /** Ref for the SummaryList's root element. */
    ref?: Ref<HTMLElement>;
}
export interface SummaryListItem extends OmitStrict<SummaryItemProps, 'actions'>, Pick<ActionsProps, 'contextualLabel'>, ForwardProps {
    /** A unique id to represent the item. */
    id: string;
    /** A set of Actions to render alongside the item. If more than one action is passed a consolidated ActionMenu will be generated. */
    actions?: Action[];
}
export declare const StyledSummaryListHeader: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, object, string | number | symbol>;
export declare const StyledSummaryListContent: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, {
    loading?: boolean | undefined;
}, string | number | symbol>;
export declare const StyledSummaryListItem: typeof SummaryItem;
export declare const SummaryListItems: ({ name, items }: Pick<SummaryListProps, 'items' | 'name'>) => import("react/jsx-runtime").JSX.Element;
declare const SummaryList: FC<SummaryListProps & ForwardProps>;
export default SummaryList;
//# sourceMappingURL=SummaryList.d.ts.map
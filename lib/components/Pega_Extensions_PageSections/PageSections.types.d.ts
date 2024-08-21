import type { SummaryListProps, ForwardProps, NoChildrenProp, SummaryListItem } from '@pega/cosmos-react-core';
import { ReactNode } from 'react';
export type FieldGroupHeader = {
    name: string;
};
/** A simple extension of a SummaryListItem. Pass onEdit and or onRemove to render either action for a pagesection. */
export interface PageSection extends SummaryListItem, ForwardProps {
    onEdit?: () => void;
    onRemove?: () => void;
}
export interface Item {
    authorityKey: string;
    authority: string;
    fileName: string;
    pageSection: string;
}
export interface FileData {
    id: string;
    fileName: string;
    pageSection: string;
}
export interface JsonObject {
    fieldGroupHeader: string;
    filedata: FileData[];
}
export interface PageListItem {
    id: string;
    primary: NonNullable<ReactNode>;
    secondary: ReactNode;
    visual: ReactNode;
    data?: {
        [key: string]: unknown;
    };
    [key: string]: unknown;
}
export interface PageSectionsProps extends NoChildrenProp, Pick<SummaryListProps, 'count' | 'loading' | 'error' | 'ref'> {
    /**
     * The initial array of pagesection presented in the default state of the widget.
     * This array will be sliced internally to the first three items but recommend only passing up to that length as a best practice.
     */
    items: PageSection[];
    dataPage: string | undefined;
    /** Called when a user opens the add form. */
    onExpandAll?: () => void;
    /** Called when a user opens the view all modal. */
    onViewAll?: () => void;
    /** A props object that will be passed to the form renderer. */
    rendererProps?: {
        [key: string]: unknown;
    };
    viewAll: {
        /** Indicates the view all list is in a loading state while data is fetched. */
        loading?: boolean;
        /** Pass a full or filtered list of pagesection items. Filter based on search input. */
        items: PageSectionsProps['items'];
        /** Called when a user enters a view all search. Return a filtered array to viewAll['items'] with matching pagesections. */
        onSearch?: (value: string) => void;
        /** Called after the modal or popover transitions and un-mounts as a result of a closeForm call or user dismissal. */
        onAfterClose?: () => void;
    };
}
//# sourceMappingURL=PageSections.types.d.ts.map
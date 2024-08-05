import type { ComponentType } from 'react';

import type {
  SummaryListProps,
  ForwardProps,
  NoChildrenProp,
  SummaryListItem
} from '@pega/cosmos-react-core';

export type Role = {
  name: string;
  description: string;
};

/** A simple extension of a SummaryListItem. Pass onEdit and or onRemove to render either action for a pagesection. */
export interface PageSection extends SummaryListItem, ForwardProps {
  onEdit?: () => void;
  onRemove?: () => void;
}

export interface PageSectionsProps
  extends NoChildrenProp,
    Pick<SummaryListProps, 'count' | 'loading' | 'error' | 'ref'> {
  /**
   * The initial array of pagesection presented in the default state of the widget.
   * This array will be sliced internally to the first three items but recommend only passing up to that length as a best practice.
   */
  items: PageSection[];
  /** Called when a user opens the add form. */
  onAddNew?: () => void;
  /**
   * Data and a component required to render a form for both add and edit.
   * If there are roles, the renderer is passed the currently selected role.
   */
  form: {
    /** Indicates the form is in a loading state either initially or after add/edit is submitted. */
    loading?: boolean;
    /** An array of available roles a pagesection may be assigned. */
    roles?: Role[];
    /** Use this when onAdd or onEdit is invoked to indicate to the component which role option to select. */
    currentRole?: Role;
    /**
     * A component to render the main portion of the add/edit pagesection form.
     * This may be a simple function and will be pass a prop when the selected role changes.
     */
    renderer: ComponentType<{ selectedRoleName?: Role['name'] }>;
    /** A props object that will be passed to the form renderer. */
    rendererProps?: {
      [key: string]: unknown;
    };
    /**
     * Called when a user submits the form.
     * The name of the currently selected role will be passed along with a function to close the form on an arg object.
     * closeForm will close the modal or popover the form is preseneted in.
     * closeForm can be call once validations and requests have resolved.
     */
    onSubmit: ({
      selectedRoleName,
      closeForm
    }: {
      selectedRoleName: Role['name'] | undefined;
      closeForm: () => void;
    }) => void;
    /**
     * Called when a user cancels a form.
     * A function to close the form will be passed on an arg object.
     */
    onDismiss: ({ closeForm }: { closeForm: () => void }) => void;
    /** Called after the modal or popover transitions and un-mounts as a result of a closeForm call or user dismissal. */
    onAfterClose?: () => void;
  };
  /** Called when a user opens the view all modal. */
  onViewAll?: () => void;
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

import { useCallback, useEffect, useMemo, useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';

import {
  Configuration,
  createStringMatcher,
  ModalManager,
  PopoverManager,
  Toaster
} from '@pega/cosmos-react-core';
import PageSections from '../PageSections';
import type { PageSectionsProps, PageSection } from '../PageSections.types';

import {
  AddAndEditForm,
  mockNetworkReq,
  mockRoles,
  useMockPageSections
} from './PageSections.mocks';

export default {
  title: 'Work/PageSections',
  component: PageSections
} as Meta;

interface PageSectionsStoryProps {
  hideAddNew?: boolean;
}

export const PageSectionsDemo: StoryFn<PageSectionsStoryProps> = (args: PageSectionsStoryProps) => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<undefined | 'add' | 'viewAll'>();
  const [editing, setEditing] = useState<PageSection['id'] | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [viewAllLoading, setViewAllLoading] = useState(false);
  const [viewAllSearchValue, setViewAllSearchValue] = useState('');

  // Grab some mock data...
  const [mockPageSections, setMockPageSections] = useMockPageSections(() => {
    setLoading(false);
  });

  const [editData, setEditData] = useState<
    PageSectionsProps['form']['rendererProps'] | undefined
  >();

  // Merges built-in available actions with stakeholder objects.
  const addActions = useCallback(
    (items: PageSection[]) => {
      return items.map(pageSection => {
        return {
          ...pageSection,
          onEdit: () => {
            setFormLoading(true);
            setEditing(pageSection.id);
            setEditData(mockPageSections.find(ms => ms.id === pageSection.id)?.data);
            mockNetworkReq().then(() => setFormLoading(false));
          },
          onRemove: () => {
            setMockPageSections(cur => cur.filter(({ id }) => id !== pageSection.id));
          }
        };
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mockPageSections]
  );

  const form: PageSectionsProps['form'] = useMemo(() => {
    return {
      // Set this to true when fetching view metadata for the form or during submit validation.
      loading: formLoading,
      // Represents "available" roles for a stakeholder. Set to undefined when choosing not to present them as options.
      roles: mode === 'add' ? mockRoles : undefined,
      // Represents the current role of a stakeholder if they have one. When undefined the first role in the roles array with be selected in the UI.
      currentRole: editing ? mockPageSections.find(({ id }) => id === editing)?.role : undefined,
      /**
       * A function that will be invoked by React's createElement. If only a simple function is needed then an inline arrow is ok.
       * If local state(hooks) is desired best to define a stable component definition outside of the parent component's function body.
       */
      renderer: AddAndEditForm,
      rendererProps: editData,
      onSubmit: ({ selectedRoleName, closeForm }) => {
        setFormLoading(true);
        action(`The selected role is: ${selectedRoleName}`);
        // Create or update the stakeholder resource.
        mockNetworkReq().then(closeForm);
      },
      onDismiss: ({ closeForm }) => {
        closeForm();
      },
      onAfterClose: () => {
        // Clean up loading state when the form is closed.
        setFormLoading(false);
        setEditing(null);
        setEditData(undefined);
        setMode(undefined);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, formLoading, mockRoles, editing, editData]);

  const viewAll: PageSectionsProps['viewAll'] = useMemo(() => {
    let viewAllItems = mockPageSections;

    // When the user has entered a search value we can filter the array or api request.
    if (viewAllSearchValue) {
      // For client side searches cosmos offers utils such as createStringMatcher for creating RegExp with params.
      const filterRegex = createStringMatcher(viewAllSearchValue, 'boundary');
      // Asserting as string since, in this demo, primary is a string. But type is a non nullable ReactNode.
      viewAllItems = mockPageSections.filter(({ primary }) => filterRegex.test(primary as string));
    }

    return {
      // Set this to true when fetching data for the view all modal.
      loading: viewAllLoading,
      // Even when loading is true this must be an array, empty or not.
      items: addActions(viewAllItems),
      // The search string will be handed back as the arg, pass a state setter and filter off of that.
      onSearch: setViewAllSearchValue,
      onAfterClose: () => {
        // Clean up loading state when the modal is closed.
        if (viewAllLoading) setViewAllLoading(false);
        setViewAllSearchValue('');
      }
    };
  }, [viewAllLoading, mockPageSections, viewAllSearchValue, addActions]);

  useEffect(() => {
    // Orchestrate based on mode state if needed.
  }, [mode]);

  useEffect(() => {
    // Orchestrate based on editing state if needed.
  }, [editing]);

  return (
    <Configuration id='Preview'>
      <PopoverManager>
        <Toaster dismissAfter={5000}>
          <ModalManager>
            <PageSections
              loading={loading}
              items={useMemo(
                () => addActions(mockPageSections.slice(0, 3)),
                [addActions, mockPageSections]
              )}
              count={loading ? undefined : mockPageSections.length}
              onAddNew={
                args.hideAddNew
                  ? undefined
                  : () => {
                      setMode('add');
                      setFormLoading(true);
                      mockNetworkReq().then(() => setFormLoading(false));
                    }
              }
              form={form}
              onViewAll={() => {
                setMode('viewAll');
                setViewAllLoading(true);
                mockNetworkReq().then(() => setViewAllLoading(false));
              }}
              viewAll={viewAll}
            />
          </ModalManager>
        </Toaster>
      </PopoverManager>
    </Configuration>
  );
};

PageSectionsDemo.args = {
  hideAddNew: false
};

PageSectionsDemo.argTypes = {
  hideAddNew: { control: { type: 'boolean' }, table: { disable: true } }
};

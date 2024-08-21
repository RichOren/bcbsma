import { useEffect, useMemo, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import {
  Configuration,
  createStringMatcher,
  ModalManager,
  PopoverManager,
  Toaster
} from '@pega/cosmos-react-core';
import PageSections from '../PageSections';
import type { PageSectionsProps } from '../PageSections.types';

import { mockNetworkReq, useMockPageSections } from './PageSections.mocks';

export default {
  title: 'Work/PageSections',
  component: PageSections
} as Meta;

interface PageSectionsStoryProps {
  hideAddNew?: boolean;
}

export const PageSectionsDemo: StoryFn<PageSectionsStoryProps> = () => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<undefined | 'add' | 'viewAll'>();
  const [viewAllLoading, setViewAllLoading] = useState(false);
  const [viewAllSearchValue, setViewAllSearchValue] = useState('');

  // Grab some mock data...
  const [mockPageSections] = useMockPageSections(() => {
    setLoading(false);
  });

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
      items: viewAllItems,
      // The search string will be handed back as the arg, pass a state setter and filter off of that.
      onSearch: setViewAllSearchValue,
      onAfterClose: () => {
        // Clean up loading state when the modal is closed.
        if (viewAllLoading) setViewAllLoading(false);
        setViewAllSearchValue('');
      }
    };
  }, [viewAllLoading, mockPageSections, viewAllSearchValue]);

  useEffect(() => {
    // Orchestrate based on mode state if needed.
  }, [mode]);

  return (
    <Configuration id='Preview'>
      <PopoverManager>
        <Toaster dismissAfter={5000}>
          <ModalManager>
            <PageSections
              loading={loading}
              dataPage={undefined}
              items={useMemo(() => mockPageSections.slice(0, 3), [mockPageSections])}
              count={loading ? undefined : mockPageSections.length}
              onExpandAll={undefined}
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

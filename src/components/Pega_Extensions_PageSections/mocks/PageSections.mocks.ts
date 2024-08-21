import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import type { PageSectionsProps, PageSection } from '../PageSections.types';

import { useMockListData } from '../../SummaryList/mocks/SummaryListFG.mocks';

interface MockPageSectionObject extends PageSection {
  data?: PageSectionsProps['rendererProps'];
}

export const mockNetworkReq = () =>
  new Promise(resolve => {
    setTimeout(resolve, 2000);
  });

// Mock total count of Stakeholder resource.
const count = 20;

export const useMockPageSections = (
  cb: () => void
): [MockPageSectionObject[], Dispatch<SetStateAction<MockPageSectionObject[]>>] => {
  const [mockPageSections, setMockPageSections] = useState<MockPageSectionObject[]>([]);
  // Grab some mock data...
  const [mockListData] = useMockListData(
    () => {
      setMockPageSections(mockListData);
      cb();
    },
    { count }
  );

  return [
    mockPageSections.map(pagesection => {
      return { ...pagesection };
    }),
    setMockPageSections
  ];
};

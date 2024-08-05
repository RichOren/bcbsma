import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { Input, Grid, FieldGroup } from '@pega/cosmos-react-core';
import type { Role, PageSectionsProps, PageSection } from '../PageSections.types';

import { useMockListData } from './../../SummaryList/mocks/SummaryList.mocks';

interface MockPageSectionObject extends PageSection {
  role?: Role;
  data?: PageSectionsProps['form']['rendererProps'];
}

export const mockNetworkReq = () =>
  new Promise(resolve => {
    setTimeout(resolve, 2000);
  });

// Mock total count of Stakeholder resource.
const count = 20;

// Mock stakeholder roles.
export const mockRoles: NonNullable<PageSectionsProps['form']>['roles'] = Array.from(
  { length: 3 },
  (_, i) => ({
    name: `Role-${i + 1}`,
    description: `This is a description of Role-${
      i + 1
    }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dolor a mauris imperdiet convallis.`
  })
);

/**
 * A component that will be rendered internally by PageSections when adding or editing.
 * If roles exists, the component will be passed the selected role as a prop.
 * The return content of this will likely be a dynamically rendered view.
 */
export const AddAndEditForm = ({
  selectedRoleName,
  firstName,
  lastName,
  email
}: {
  // Cosmos will pass the selectedRoleName
  selectedRoleName?: Role['name'];
  // Any prop passed to rendererProps will be forwarded here
  firstName?: string;
  lastName?: string;
  email?: string;
}) => {
  const inputs = (
    <Grid container={{ cols: '1fr', gap: 2 }}>
      <Input label='First name' required defaultValue={firstName} />
      <Input label='Last name' required defaultValue={lastName} />
      <Input type='email' label='Email' required defaultValue={email} />
      <Input label='Job title' defaultValue={firstName ? 'Vice president' : undefined} />
    </Grid>
  );

  return selectedRoleName ? (
    <FieldGroup name={`Fields for: ${selectedRoleName}`} headingTag='h3'>
      {inputs}
    </FieldGroup>
  ) : (
    inputs
  );
};

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
      return { ...pagesection, role: pagesection.role ?? mockRoles[0] };
    }),
    setMockPageSections
  ];
};

import { useEffect, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { Table, FieldGroup, Grid, useAfterInitialEffect } from '@pega/cosmos-react-core';

import mockPageSection from './mockPageSections';
import type { MockPageSection } from './mockPageSections';

export interface MockListItem {
  id: string;
  primary: NonNullable<ReactNode>;
  secondary: ReactNode;
  visual: ReactNode;
  data?: {
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

const columnNames = [
  { renderer: 'fileName', label: 'File Name' },
  { renderer: 'pageSection', label: 'Page/Section' }
];

export interface MockPageSectionAPIResponse {
  results: MockPageSection[];
}

export const getMockUsers = async (limit: number = 3): Promise<MockPageSectionAPIResponse> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ results: mockPageSection.slice(0, limit) });
    }, 500);
  });
};

const getMockListItem = ({
  fieldGroupHeader,
  filedata
}: {
  fieldGroupHeader: string;
  filedata: {
    id: string;
    fileName: string;
    pageSection: string;
  }[];
}): MockListItem => {
  return {
    data: {
      id: filedata,
      fieldGroupHeader,
      columnNames,
      filedata
    },
    id: '1',
    primary: (
      <div>
        <FieldGroup collapsed={false} name={fieldGroupHeader} headingTag='h3'>
          <Grid container={{ cols: '1fr', gap: 2 }}>
            <Table
              title={undefined}
              hoverHighlight={false}
              loading={false}
              loadingMessage='Loading data'
              data={filedata}
              // @ts-ignore
              columns={columnNames}
            />
          </Grid>
        </FieldGroup>
      </div>
    ),
    contextualLabel: '',
    secondary: undefined,
    visual: undefined,
    actions: undefined
  };
};

export const useMockListData = (
  cb: () => void,
  { count }: { count?: number } = { count: undefined }
): [MockListItem[], Dispatch<SetStateAction<MockListItem[]>>] => {
  const [items, setItems] = useState<MockListItem[]>([]);
  useEffect(() => {
    let mounted = true;

    (async () => {
      const { results } = await getMockUsers(count);

      // Avoids: Warning: Can't perform a React state update on an unmounted component.
      if (mounted) {
        setItems(results.map(getMockListItem));
      }
    })();

    return () => {
      mounted = false;
    };
  }, [count]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useAfterInitialEffect(cb, [items]);

  return [items, setItems];
};

import { useEffect, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { Avatar, EmailDisplay, useAfterInitialEffect } from '@pega/cosmos-react-core';

import mockUsers from './mockUsers';
import type { MockUser } from './mockUsers';

export interface MockListItem {
  id: string;
  primary: string;
  secondary: ReactNode;
  visual: ReactNode;
  data?: {
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface MockUserAPIResponse {
  results: MockUser[];
}

export const getMockUsers = async (limit: number = 3): Promise<MockUserAPIResponse> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ results: mockUsers.slice(0, limit) });
    }, 500);
  });
};

const getMockListItem = ({
  name: { first: firstName, last: lastName },
  email,
  picture: { thumbnail }
}: {
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}): MockListItem => {
  const fullName = `${firstName} ${lastName}`;
  return {
    data: {
      id: email,
      firstName,
      lastName,
      email,
      thumbnail
    },
    id: email,
    primary: fullName,
    contextualLabel: fullName,
    secondary: (
      <div>
        <EmailDisplay value={email} />
      </div>
    ),
    visual: <Avatar size='l' name={fullName} imageSrc={thumbnail} />,
    actions: [{ id: '11', text: 'Delete', icon: 'trash' }]
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

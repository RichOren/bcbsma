import type { Dispatch, ReactNode, SetStateAction } from 'react';
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
export declare const getMockUsers: (limit?: number) => Promise<MockUserAPIResponse>;
export declare const useMockListData: (cb: () => void, { count }?: {
    count?: number | undefined;
}) => [MockListItem[], Dispatch<SetStateAction<MockListItem[]>>];
//# sourceMappingURL=SummaryList.mocks.d.ts.map
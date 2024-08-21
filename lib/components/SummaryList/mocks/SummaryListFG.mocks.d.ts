import type { Dispatch, ReactNode, SetStateAction } from 'react';
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
export interface MockPageSectionAPIResponse {
    results: MockPageSection[];
}
export declare const getMockUsers: (limit?: number) => Promise<MockPageSectionAPIResponse>;
export declare const useMockListData: (cb: () => void, { count }?: {
    count?: number | undefined;
}) => [MockListItem[], Dispatch<SetStateAction<MockListItem[]>>];
//# sourceMappingURL=SummaryListFG.mocks.d.ts.map
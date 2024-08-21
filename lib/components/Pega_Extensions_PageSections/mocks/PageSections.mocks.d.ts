import type { Dispatch, SetStateAction } from 'react';
import type { PageSectionsProps, PageSection } from '../PageSections.types';
interface MockPageSectionObject extends PageSection {
    data?: PageSectionsProps['rendererProps'];
}
export declare const mockNetworkReq: () => Promise<unknown>;
export declare const useMockPageSections: (cb: () => void) => [MockPageSectionObject[], Dispatch<SetStateAction<MockPageSectionObject[]>>];
export {};
//# sourceMappingURL=PageSections.mocks.d.ts.map
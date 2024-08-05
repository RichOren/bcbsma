import type { Dispatch, SetStateAction } from 'react';
import type { Role, PageSectionsProps, PageSection } from '../PageSections.types';
interface MockPageSectionObject extends PageSection {
    role?: Role;
    data?: PageSectionsProps['form']['rendererProps'];
}
export declare const mockNetworkReq: () => Promise<unknown>;
export declare const mockRoles: NonNullable<PageSectionsProps['form']>['roles'];
/**
 * A component that will be rendered internally by PageSections when adding or editing.
 * If roles exists, the component will be passed the selected role as a prop.
 * The return content of this will likely be a dynamically rendered view.
 */
export declare const AddAndEditForm: ({ selectedRoleName, firstName, lastName, email }: {
    selectedRoleName?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useMockPageSections: (cb: () => void) => [MockPageSectionObject[], Dispatch<SetStateAction<MockPageSectionObject[]>>];
export {};
//# sourceMappingURL=PageSections.mocks.d.ts.map
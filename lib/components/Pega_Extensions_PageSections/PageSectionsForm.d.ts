import type { PageSectionsProps } from './PageSections.types';
interface FormProps extends Pick<PageSectionsProps['form'], 'roles' | 'currentRole' | 'renderer' | 'rendererProps'> {
    setSelectedRoleNameRef: (selectedRoleName?: string | undefined) => void;
}
declare const _default: ({ roles, currentRole, renderer: Renderer, rendererProps, setSelectedRoleNameRef }: FormProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
//# sourceMappingURL=PageSectionsForm.d.ts.map
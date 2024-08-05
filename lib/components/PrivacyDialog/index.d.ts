import type { TestIdProp } from '@pega/cosmos-react-core';
interface PrivacyDialogProps extends TestIdProp {
    getPConnect: any;
    allowCookiesUsage: (isCookiesUsageAllowed: boolean) => void;
}
declare const _default: (({ getPConnect, testId, allowCookiesUsage }: PrivacyDialogProps) => null) & {
    getTestIds: (testIdProp?: string | null | undefined) => import("@pega/cosmos-react-core").TestIdsRecord<readonly ["log-off", "accept", "message"]>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map
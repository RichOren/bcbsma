import type { ConfigurationProps } from '../components/Configuration';
type Features = NonNullable<ConfigurationProps['features']>;
declare const useFeature: <C extends string | number | symbol>(name: C) => any;
export default useFeature;
//# sourceMappingURL=useFeature.d.ts.map
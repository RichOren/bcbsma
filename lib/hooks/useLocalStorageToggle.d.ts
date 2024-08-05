/**
 * A hook for retrieving a value from local storage that is togglable from a window api.
 * @param name The name/key to set the local storage value
 * @param windowPath The path from the window object to set the toggle function on
 */
declare function useLocalStorageToggle(name: string, windowPath: string): [boolean, () => void];
export default useLocalStorageToggle;
//# sourceMappingURL=useLocalStorageToggle.d.ts.map
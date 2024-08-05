export interface MockUser {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
declare const mockUsers: MockUser[];
export default mockUsers;
//# sourceMappingURL=mockUsers.d.ts.map
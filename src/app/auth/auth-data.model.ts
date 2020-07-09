export interface AuthData {
  email: string;
  password: string;
}
export interface USER {
    _id: string;
    clientName?: string;
    email: string;
    firstName: string;
    lastName: string;
    isEnabled: boolean;
    phoneNumber: string;
    roleList: Array<{roleName: string; clientName: string}>;
    userId: string;
    userStatus: string;
    accessToken: string;
}

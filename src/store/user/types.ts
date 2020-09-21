export const AUTHENTICATE = "AUTHENTICATE";
export type AUTHENTICATE = typeof AUTHENTICATE;
export const UNAUTHENTICATE = "UNAUTHENTICATE";
export type UNAUTHENTICATE = typeof UNAUTHENTICATE;

export interface IUser {
  isAuthenticated: boolean | null;
  uuid: string | null;
}

export interface IUserState {
  user: IUser
}
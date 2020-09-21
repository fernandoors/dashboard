import { push } from "connected-react-router";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import * as constants from "./types";

export interface IAuthenticate {
  type: constants.AUTHENTICATE;
}

function authenticate(): IAuthenticate {
  return {
    type: constants.AUTHENTICATE,
  };
}

export interface IUnauthenticate {
  type: constants.UNAUTHENTICATE;
}

function unauthenticate(): IUnauthenticate {
  return {
    type: constants.UNAUTHENTICATE,
  };
}

export type AuthenticationAction = IAuthenticate | IUnauthenticate;

export function logIn({ email = '', password = '' }) {
  const user = JSON.stringify({ email, password })
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem('state', user);
    dispatch(authenticate());
    dispatch(push('/home'));
  };
}

export function logOut() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem("authenticated", "false");
    dispatch(unauthenticate());
  };
}

export function checkAuthentication() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const auth = await window.localStorage.getItem("authenticated");
    const formattedAuth = typeof auth === "string" ?
      JSON.parse(auth) :
      null;

    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
  };
}
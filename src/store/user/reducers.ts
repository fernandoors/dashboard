import { IAuthenticate, IUnauthenticate } from "./actions";
import { AUTHENTICATE, UNAUTHENTICATE } from "./types";
import { IUser } from "./types";

const INITIAL_STATE: IUser = {
  uuid: null,
  isAuthenticated: false,
}

type ACTIONS = IAuthenticate | IUnauthenticate

export default function currentReducer(
  state: IUser = INITIAL_STATE,
  action: ACTIONS,
): IUser {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, uuid: "placeholder-uuid", isAuthenticated: true };
    case UNAUTHENTICATE:
      return { uuid: null, isAuthenticated: false }
    default:
      return {...state}
  }
}
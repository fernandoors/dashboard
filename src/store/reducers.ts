
import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { IUser } from './user/types'

import userReducers from "./user/reducers";

export interface IStoreTypes {
  user: IUser
  router: RouterState
}

const createRootReducer = (history: History) => combineReducers<IStoreTypes>({
  user: userReducers,
  router: connectRouter(history),
})


export default createRootReducer

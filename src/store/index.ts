import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from 'connected-react-router'
import history from "../routes/history";
import createRootReducer from "./reducers";
import { loadState } from "./localStorage";

export default function configureStore() {
  const persistedState = loadState();
  const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = [routerMiddleware(history), thunk]
  const store = createStore(
    createRootReducer(history),
    persistedState,
    composeEnhancers(
      applyMiddleware(
        ...middleware
      ),
    ),
  )
  return store
}

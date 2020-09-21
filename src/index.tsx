import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import configureStore from "./store";
import { saveState } from "./store/localStorage";
import { IStoreTypes } from "./store/reducers";

const store = configureStore();

store.subscribe(() => {
  const state: IStoreTypes = store.getState();
  saveState(state);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

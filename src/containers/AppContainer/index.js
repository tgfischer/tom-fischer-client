import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "../../components/App";
import theme from "../../themes/default";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

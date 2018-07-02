import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "../../components/App";
import theme from "../../themes/default";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

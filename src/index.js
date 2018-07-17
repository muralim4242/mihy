import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import store from './stores';
import registerServiceWorker from "./registerServiceWorker";
import "./assets/css/material-dashboard-react.css";
import App from "./containers/App";

//theme provider
import { MuiThemeProvider} from 'material-ui/styles';
import theme from "./config/theme";



ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider { ...store }>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();

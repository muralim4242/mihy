import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import store from './stores';
import registerServiceWorker from "./registerServiceWorker";
import "./assets/css/material-dashboard-react.css";
import App from "./containers/App";


ReactDOM.render(
  <Provider { ...store }>
    <App/>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

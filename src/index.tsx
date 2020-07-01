import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { muiTheme } from "./theme/muiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
      <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

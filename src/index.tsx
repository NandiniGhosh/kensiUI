import React from "react";
import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  Theme,
} from "@material-ui/core/styles";

import App from "./App";
import kentosoTheme from './themes/kentoso';
import reportWebVitals from "./reportWebVitals";

// Create link and append font styles
const icons: HTMLLinkElement = document.createElement("link");
icons.rel = "stylesheet";
icons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(icons);

// Setup material-ui theme
const theme: Theme = createMuiTheme(kentosoTheme);

// Create root element and attach react
const root: HTMLDivElement = document.createElement("div");
root.id = "app";
document.body.appendChild(root);

// Mount app
render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

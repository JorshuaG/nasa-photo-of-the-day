import { ThemeProvider } from "styled-components";
import themeObj from "./theme";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
export const BASE_URL = "https://api.nasa.gov";
export const API_Key = "DEMO_KEY";

ReactDOM.render(
  <ThemeProvider theme={themeObj}>
    <App />{" "}
  </ThemeProvider>,
  document.getElementById("root")
);

import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

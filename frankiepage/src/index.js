import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Favicon from "react-favicon";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Favicon url="https://i.imgur.com/qcpkZ5R.jpg" />
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

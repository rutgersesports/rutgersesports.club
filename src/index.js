import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import "./index.css";
import Apply from "./pages/Apply";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/apply" component={Apply} />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

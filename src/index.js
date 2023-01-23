import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import "./index.css";
import Apply from "./pages/Apply";


function App() {
  const pathname = useLocation().pathname

  /*
   * Yes, this is the most shittest way of handling multiple
   * pages in React. Does it work? Yes it does.
   */
  if (pathname === "/") {
    return <HomePage/>
  }
  else if (pathname === "/apply") {
    return <Apply/>
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

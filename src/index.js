import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import './index.css';
import Apply from './pages/Apply';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/apply" exact component={Apply}/>
    </Switch>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

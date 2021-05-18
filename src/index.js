import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './index.css';
import App from './App';
import Login from './pages/login.js'
import Homepage from './pages/homepage.js'
import Reports from './pages/reports.js'
import ReportsMonthly from './pages/reports_monthly.js'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>  
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/billing" component={Homepage} />
        <Route path="/reports" component={Reports} />
        <Route path="/reports_monthly" component={ReportsMonthly} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

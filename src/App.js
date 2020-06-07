import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import './App.css';
import {LoginPage} from "./components/Login-Page/login-page.component"
import {LoggedInPage} from "./components/LoggedIn-Page/LoggedIn-Page.component"
import {CalendarModule} from "./components/Calendar/calendar-module/calendar-module.component"


export const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Admin" component={LoggedInPage} />
          <Route path="/calendar" component={CalendarModule} />
        </Switch>
      </div>
    </Router>
  )
}



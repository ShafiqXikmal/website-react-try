import "../styles/style.css";
import React from "react";
import NavBar from "./navBar";
import Home from "../pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

module.exports = App;

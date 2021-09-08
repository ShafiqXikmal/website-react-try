import "./style.css";
import React from "react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/menu" exact component={Menu}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

module.exports = App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Solutions from "./views/Solutions";
import Technology from "./views/Technology";
import Header from "./views/Header";
import Footer from "./views/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="main--wrapper">
        <Header />
        <Switch className="body--wrapper">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/solutions">
            <Solutions />
          </Route>
          <Route exact path="/technology">
            <Technology />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

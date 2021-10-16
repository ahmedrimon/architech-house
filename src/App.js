import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About/About";
import Contact from "./Components/Contact/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import Project from "./Components/Projects/project/Project";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

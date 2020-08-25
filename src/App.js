import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Resources from "./pages/resources"
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
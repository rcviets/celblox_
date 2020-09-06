import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import NavTop from "./components/navTop/index";
import Navigation from "./components/nav";
import Home from "./pages/home";
import Products from "./pages/products";
import Resources from "./pages/resources";
import Login from "./pages/login";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
    <NavTop />
    <Navigation />
      <Router>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
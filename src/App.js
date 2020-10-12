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
import Contact from "./pages/contact";
import NotFound from "./pages/404";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <NavTop />
      <Navigation />
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/resources">
              <NotFound />
            </Route>
            <Route path="/login">
              <NotFound />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
};

export default App;
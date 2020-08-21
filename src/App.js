import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/home";
import Products from "./pages/products";
import "./App.css";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
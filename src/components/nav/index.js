import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  return (
    <Router>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="https://rcviets.github.io/celblox_/#/">
          <img
            src={require("../../images/CelBlox_Logo.png")}
            width="400"
            height="50"
            className="d-inline-block align-top"
            alt="Celblox logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-button" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <h5 className="brand-text">The Future Is Coming Together</h5>
          </Nav>
          <Nav>
            <Nav.Link style={{ color: "#451F55" }} className="nav-links" href="#deets">Log In</Nav.Link>
            <Nav.Link eventKey={2} style={{ color: "#451F55" }} className="nav-links" href="https://rcviets.github.io/celblox_/#/products">
              Products
          </Nav.Link>
            <Nav.Link eventKey={2} style={{ color: "#451F55" }} className="nav-links" href="https://rcviets.github.io/celblox_/#/resources">
              Resources
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
};

export default Navigation;
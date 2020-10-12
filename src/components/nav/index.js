import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  return (
    <Router>
      <Navbar className="main-nav" sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="https://rcviets.github.io/celblox_/#/">
          <img
            src={require("../../images/navImages/CelBlox_Logo.png")}
            width="400"
            height="50"
            className="main-nav-logo d-inline-block align-top"
            alt="Celblox logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-button" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <h5 className="main-brand-text">The Future Is Coming Together</h5>
          </Nav>
          <Nav>
          <Nav>
          <Nav.Link style={{ color: "#451F55" }} className="phone-number" href="https://www.google.com/maps/place/CelBlox/@43.5229283,-89.9883583,15z/data=!4m2!3m1!1s0x0:0xd90cdce3f617b66d?sa=X&ved=2ahUKEwjLnJCmmKTsAhXBGDQIHYxoDyIQ_BIwDHoECBQQBQ" target="_blank">
            +1 (608) 616-2015
          </Nav.Link>
          </Nav>
            <Nav.Link eventKey={2} style={{ color: "#451F55" }} className="nav-links" href="https://rcviets.github.io/celblox_/#/products">
              Products
          </Nav.Link>
            <Nav.Link eventKey={2} style={{ color: "#451F55" }} className="nav-links" href="https://rcviets.github.io/celblox_/#/resources">
              Resources
          </Nav.Link>
          <Nav.Link style={{ color: "#451F55" }} className="nav-links" href="https://rcviets.github.io/celblox_/#/login">
              Partners
            </Nav.Link>
            <Nav.Link style={{ color: "#451F55" }} className="nav-links" href="https://rcviets.github.io/celblox_/#/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
};

export default Navigation;
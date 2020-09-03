import React from "react";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const NavTop = () => {
    return (
        <Navbar className="top-nav" fluid>
            <Col className="top-nav-column" md={12} sm={12} xs={12}>
                <Navbar.Brand className="mini-logo" href="/">
                    <img
                        src={require("../../images/CelBlox_Logo_mini.png")}
                        width="30"
                        height="30"
                        className="top-nav-icon d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    <p className="top-nav-text">SUSTAINABLE. DURABLE. COST EFFECTIVE.</p>
                </Navbar.Brand>
            </Col>
        </Navbar>
    );
};

export default NavTop;
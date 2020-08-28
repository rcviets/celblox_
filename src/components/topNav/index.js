import React from "react";
import { Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const TopNav = () => {
    return (
        <Navbar>
            <Col md={4}></Col>
            <Col md={8}>
                <Navbar.Brand className="mini-logo" href="/">
                    <img
                        src={require("../../images/CelBlox_Logo_mini.png")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    <p className="topnav-text">SUSTAINABLE. DURABLE. COST EFFECTIVE.</p>
                </Navbar.Brand>
            </Col>
        </Navbar>
    );
};

export default TopNav;
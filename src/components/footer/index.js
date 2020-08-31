import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const Footer = () => {
    return (
        <Container className="footer" fluid>
            <Row>
                <Col md={3}>
                    <p className="footer-text">
                        <b>CelBlox Performance Wall Systems</b><br />
                        1405 Laukant St.<br />
                        Reedsburg WI 53959<br />
                        (608) 616-2015<br />
                        support@celblox.com
                    </p>
                </Col>
                <Col md={9}>
                    <p className="footer-copyright">
                        CelBlox Performance Wall Systems &copy; Copyright 2016 All Rights Reserved
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
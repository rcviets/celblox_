import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../components/contactForm/index";

class Contact extends Component {
    render() {
        return (
            <>
                <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <ContactForm />
                </Col>
                </Row>
            </>
        );
    };
};

export default Contact;
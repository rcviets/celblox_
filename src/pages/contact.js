import React, { Component } from "react";
import { Col } from "react-bootstrap";
import ContactForm from "../components/contactForm/index";

class Contact extends Component {
    render() {
        return (
            <>
                <Col md={12}>
                    <ContactForm />
                </Col>
            </>
        );
    };
};

export default Contact;
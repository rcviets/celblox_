import React, { Component } from "react";
import { Col } from "react-bootstrap";
import NotFoundHero from "../components/404/index";


class NotFound extends Component {
    render() {
        return (
            <>
                <Col md={12}>
                    <NotFoundHero />
                </Col>
            </>
        );
    }
};

export default NotFound;
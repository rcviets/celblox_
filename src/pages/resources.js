import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceHero from "../components/splashResources";

class Resources extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <ResourceHero />
                    </Col>
                </Row>
            </Container>
            </>
        );
    };
};

export default Resources;
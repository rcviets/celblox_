import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/nav/index";
import Footer from "../components/footer/index";
import ResourceHero from "../components/splashResources";

class Resources extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12}>
                        <Navigation />
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <ResourceHero />
                    </Col>
                </Row>
            </Container>
            <Footer />
            </>
        );
    };
};

export default Resources;
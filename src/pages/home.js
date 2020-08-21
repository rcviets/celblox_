import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/nav/index";
import SplashHero from "../components/splashHero/index";
import InfoCards from "../components/splashInfo/index";

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Navigation />
                        <SplashHero />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <InfoCards />
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Home;
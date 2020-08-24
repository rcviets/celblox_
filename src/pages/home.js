import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/nav/index";
import SplashHero from "../components/splashHero/index";
import InfoCards from "../components/splashInfo/index";
import Footer from "../components/footer/index";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Navigation />
                        <SplashHero className="jumbotron"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <InfoCards />
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
};

export default Home;
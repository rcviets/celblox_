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
            <>
                    <Row>
                        <Col lg={12} md={12}>
                            <Navigation />
                        </Col>
                    </Row>
                    <Row>
                    <Col xl={12} lg={12} md={12}>
                            <SplashHero className="jumbotron" />
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={12} md={12}>
                            <InfoCards />
                        </Col>
                    </Row>
                <Footer />
            </>
        );
    }
};

export default Home;
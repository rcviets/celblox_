import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/nav/index";
import SplashHero from "../components/splashHero/index";
import InfoCards from "../components/splashInfo/index";
import SplashBanner from "../components/splashBanner/index";
import Footer from "../components/footer/index";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
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
                <Row>
                    <Col lg={12} md={12}>
                        <SplashBanner />
                    </Col>
                </Row>
            </>
        );
    }
};

export default Home;
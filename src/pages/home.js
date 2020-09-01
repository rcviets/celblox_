import React, { Component } from "react";
import { Col } from "react-bootstrap";
import SplashHero from "../components/splashHero/index";
import InfoCards from "../components/splashInfo/index";
import SplashBanner from "../components/splashBanner/index";
import ServiceCards from "../components/splashServices/index";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
                <Col xl={12} lg={12} md={12}>
                    <SplashHero className="jumbotron" fluid/>
                </Col>
                <Col lg={12} md={12}>
                    <InfoCards />
                </Col>
                <Col lg={12} md={12}>
                    <SplashBanner />
                </Col>
                <Col lg={12} md={12}>
                    <ServiceCards />
                </Col>
            </>
        );
    }
};

export default Home;
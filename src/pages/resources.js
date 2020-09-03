import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceHero from "../components/resourceHero";
import ResourceCards from "../components/resourceCards";

class Resources extends Component {
    render() {
        return (
            <>
                <Col md={12}>
                    <ResourceHero />
                </Col>
                <Col md={2}></Col>
                <Col md={8}>
                    <ResourceCards />
                </Col>
                <Col md={2}></Col>
            </>
        );
    };
};

export default Resources;
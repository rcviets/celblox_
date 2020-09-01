import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceHero from "../components/resourcesHero";

class Resources extends Component {
    render() {
        return (
            <>
                <Col xl={12} lg={12} md={12}>
                    <ResourceHero />
                </Col>
            </>
        );
    };
};

export default Resources;
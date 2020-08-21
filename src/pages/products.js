import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/nav/index";
import ProductHero from "../components/splashProduct";

class Products extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Navigation />
                        <ProductHero />
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Products;
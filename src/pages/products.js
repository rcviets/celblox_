import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/nav/index";
import ProductHero from "../components/splashProduct/index";
import Footer from "../components/footer/index";

class Products extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                <Col lg={12} md={12}>
                        <Navigation />
                    </Col>
                    </Row>
                    <Row>
                    <Col xl={12} lg={12} md={12}>
                        <ProductHero />
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    };
};

export default Products;
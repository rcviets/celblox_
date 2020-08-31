import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductHero from "../components/productSplash/index";
import ProductCard from "../components/productCard/index";

class Products extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <ProductHero />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <ProductCard />
                    </Col>
                </Row>
            </Container>
            </>
        );
    };
};

export default Products;
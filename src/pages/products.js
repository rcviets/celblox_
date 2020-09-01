import React, { Component } from "react";
import { Col } from "react-bootstrap";
import ProductHero from "../components/productSplash/index";
import ProductCard from "../components/productCard/index";

class Products extends Component {
    render() {
        return (
            <>
                <Col xl={12} lg={12} md={12}>
                    <ProductHero />
                </Col>
                <Col lg={12} md={12}>
                    <ProductCard />
                </Col>
            </>
        );
    };
};

export default Products;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

const ProductHero = () => {
    return (
        <>
            <Col md={12}>
                <Jumbotron className="products-hero" fluid>
                    <h1 className="products-headline">Browse Products</h1>
                    <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Jumbotron>
            </Col>
            <Col md={12}>
                <Jumbotron className="products-header">
                    <Col md={9}>
                        <p className="all-product-description">
                            All Blocks come with 4", 6", 8", 10", or 12" Cores
                                </p>
                    </Col>
                    <hr className="line-break-one"></hr>
                </Jumbotron>
            </Col>
        </>
    );
};

export default ProductHero;
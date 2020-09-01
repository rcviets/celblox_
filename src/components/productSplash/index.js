import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

const ProductHero = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <Jumbotron className="products-hero" fluid>

                    </Jumbotron>
                </Col>
            </Row>
                <Row>
                    <Col md={12}>
            <Jumbotron className="products-header">
                <Row>
                    <Col md={9}>
                        <h1 className="products-headline">Dimensions</h1>
                    </Col>
                    <Col md={3}>
                        <Button className="product-button rounded-0" size="lg" block>Request A Quote</Button>
                    </Col>
                    </Row>
            <hr className="line-break-one"></hr>
            <p className="all-product-description">All Blocks come with 4", 6", 8", 10", or 12" Cores</p>
            </Jumbotron>
            </Col>
                    </Row>
        </>
    );
};

export default ProductHero;
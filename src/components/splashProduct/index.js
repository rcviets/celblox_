import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

const ProductHero = () => {
    return (
        <Container className="products-container">
                <Row>
                    <Col md={12}>
            <Jumbotron className="products-hero">
                <Row>
                    <Col md={9}>
                        <h1 className="products-headline">Dimensions</h1>
                    </Col>
                    <Col md={3}>
                        <Button className="rounded-0"  block>Request A Quote</Button>
                    </Col>
                    </Row>
            <hr className="line-break-one"></hr>
            </Jumbotron>
            </Col>
                    </Row>
        </Container>
    );
};

export default ProductHero;
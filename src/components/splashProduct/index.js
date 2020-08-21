import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

const ProductHero = () => {
    return (
        <Container fluid>
            <Jumbotron className="products-jumbotron" fluid>
                <Row>
                    <Col md={9}>
                        <h1 className="products-headline">Block Dimensions</h1>
                    </Col>
                    <Col md={3}>
                        <Button className="rounded-0" size="lg" block>Request A Quote</Button>
                    </Col>
                </Row>
                <hr className="line-break-one"></hr>
            </Jumbotron>
        </Container>
    );
};

export default ProductHero;
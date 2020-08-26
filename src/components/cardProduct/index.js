import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const ProductCard = () => {
    return (
        <Container className="product-card-container">
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card>
                        <Card.Body className="product-card-info">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card>
                        <Card.Body className="product-card-info">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card>
                        <Card.Body className="product-card-info">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card>
                        <Card.Body className="product-card-info">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card>
                        <Card.Body className="product-card-info">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
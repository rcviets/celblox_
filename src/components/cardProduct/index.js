import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";

const ProductCard = () => {
    return (
        <Container className="product-card-container">
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                This is some text within a card body.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                This is some text within a card body.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                This is some text within a card body.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                This is some text within a card body.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                This is some text within a card body.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                This is some text within a card body.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
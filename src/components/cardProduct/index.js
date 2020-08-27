import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";

const ProductCard = () => {
    return (
        <Container className="product-card-container">
            <Row className="product-card-deck">
                <Col md={6}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                Standard 4' Straight Block
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/singleTaper.png")} thumbnail />
                            90° Corner Block
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={6}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                            45° Corner Block
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                            Single Taper Top Block
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={6}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                            Double Taper Top Block
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                            Ledge Brick Block   
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
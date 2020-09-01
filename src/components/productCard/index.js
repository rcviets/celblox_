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
                                <p className="product-text">Standard 4'<br />
                                Straight Block</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/singleTaper.png")} thumbnail />
                                <p className="product-text">90°<br />
                                Corner Block</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                <p className="product-text">45°<br />
                                Corner Block</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                <p className="product-text">Single Taper<br />
                                Top Block</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                <p className="product-text">Double Taper<br />
                                Top Block</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/straightBlock.png")} thumbnail />
                                <p className="product-text">Ledge<br />
                                Brick Block</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
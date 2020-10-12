import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";

const ProductCard = () => {
    return (
        <Container className="product-card-container" fluid>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/productPage/renderStraight.png")} thumbnail />
                                <p className="product-text">Standard 4'<br />
                                Straight Block</p>
                                <hr className="product-card-break"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/productPage/render90Corner.png")} thumbnail />
                                <p className="product-text">90°<br />
                                Corner Block</p>
                                <hr className="product-card-break"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="product-card-deck">
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/productPage/render45Corner.png")} thumbnail />
                                <p className="product-text">45°<br />
                                Corner Block</p>
                                <hr className="product-card-break"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/productPage/renderTaper.png")} thumbnail />
                                <p className="product-text">Single and Double Taper<br />
                                Top Block</p>
                                <hr className="product-card-break"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="product-card-body">
                        <Card.Body className="product-card-info">
                            <Image className="product-image" src={require("../../images/productPage/renderLedge.png")} thumbnail />
                                <p className="product-text">Ledge<br />
                                Brick Block</p>
                                <hr className="product-card-break"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
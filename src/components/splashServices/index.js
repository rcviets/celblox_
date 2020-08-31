import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import "./style.css";

const ServiceCards = () => {
    return (
        <Container className="splash-services">
                <h2 className="services-header">CelBlox Services</h2>
            <Row>
                <CardDeck className="services-deck">
                <Col lg={1} md={12}></Col>
                    <Col lg={4} md={12}>
                    <Card className="services-card">
                        <Card.Img variant="top" className="pt-0" src={require("../../images/splashResourceCard.svg")} />
                        <Card.Body>
                            <Card.Title className="services-title">Resources</Card.Title>
                            <Card.Text>
                                    <hr />
                                    <p className="services-text">
                                        <Button className="services-button rounded-0" size="lg">
                                            Download Now
                                        </Button>
                                    </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={2} md={12}></Col>
                    <Col lg={4} md={12}>
                    <Card className="services-card">
                        <Card.Img variant="top" className="pt-5 pb-4" src={require("../../images/splashProductCard.svg")} />
                        <Card.Body>
                            <Card.Title className="services-title pt-5">Products</Card.Title>
                            <Card.Text>
                                    <hr />
                                    <p className="services-text">
                                        <Button className="services-button rounded-0" size="lg">
                                            Request Quote
                                        </Button>
                                    </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={1} md={12}></Col>
                </CardDeck>
            </Row>
        </Container>
    );
};

export default ServiceCards;

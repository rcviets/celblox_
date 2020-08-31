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
                <CardDeck className="pt-5 services-deck">
                <Col lg={1} md={12}></Col>
                    <Col lg={4} md={12}>
                    <Card className="services-card">
                        <Card.Img variant="top" className="pt-0" src={require("../../images/splashResourceCard.svg")} />
                        <Card.Body>

                            <Card.Text>
                                    <p className="services-text">
                                        Spec Sheets<br />
                                        CAD Downloads
                                    <hr />
                                        <Button className="services-button rounded-0" size="lg">
                                            Download Resources
                                        </Button>
                                    </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={2} md={12}></Col>
                    <Col lg={4} md={12}>
                    <Card className="services-card">
                        <Card.Img variant="top" className="pt-5 pb-5" src={require("../../images/splashProductCard.svg")} />
                        <Card.Body>
                            <Card.Text>
                                    <p className="services-text pt-4">
                                        Block Dimensions<br />
                                        Core Widths
                                    <hr />
                                        <Button className="services-button rounded-0" size="lg">
                                            Request Product Quote
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

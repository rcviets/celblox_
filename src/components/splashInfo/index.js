import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import "./style.css";

const InfoCards = () => {
    return (
        <Container className="splash-info">
            <Row>
                <CardDeck className="info-deck">
                    <Col lg={4} md={12}>
                        <Card className="info-card">
                            <Card.Img variant="top" className="pt-5" src={require("../../images/contractorCard.svg")} />
                            <Card.Body>
                                <Card.Title className="card-title">For Your Business</Card.Title>
                                <Card.Text>
                                    <p className="info-text">&#10003;    Speed of Construction<br />
                                        &#10003;   Consolidation of Trades<br />
                                        &#10003;   Site Contention<br />
                                        &#10003;   Prescriptive Method<br />
                                        &#10003;   Risk Mitigation<br />
                                        <hr />
                                        <Button className="rounded-0" size="sm">
                                            Team Up
                                        </Button>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card className="info-card">
                            <Card.Img variant="top" className="pt-2" src={require("../../images/customerCard1.svg")} />
                            <Card.Body>
                                <Card.Title className="card-title">For Your World</Card.Title>
                                <Card.Text>
                                    <p className="info-text">&#10003;    100% Recyclable Blox<br />
                                        &#10003;   Chemical Free<br />
                                        &#10003;   Active C02 Reduction<br />
                                        &#10003;   Energy Efficient<br />
                                        &#10003;   Forest Conservation<br />
                                        <hr />
                                        <Button className="rounded-0" size="sm">
                                            Get Started
                                        </Button>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card className="info-card">
                            <Card.Img variant="top" className="pt-2" src={require("../../images/customerCard2.svg")} />
                            <Card.Body className="pt-3">
                                <Card.Title className="card-title">For Your Home</Card.Title>
                                <Card.Text>
                                    <p className="info-text">
                                        &#10003;Safety and Durability<br />
                                        &#10003;   Fire Resistant<br />
                                        &#10003;   Earthquake Resistant<br />
                                        &#10003;   Hurricane Resistant<br />
                                        &#10003;   Tornado Resistant
                                        <hr />
                                        <Button className="rounded-0" size="sm">
                                            Join Us
                                        </Button>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardDeck>
            </Row>
        </Container>
    );
}

export default InfoCards;
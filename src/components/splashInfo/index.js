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
                <CardDeck>
                    <Col lg={4} md={12}>
                        <Card className='pt-5'>
                            <Card.Img variant="top" src={require("../../images/contractorCard.svg")} />
                            <Card.Body>
                                <Card.Title className="card-title">For Your Business</Card.Title>
                                <Card.Text>
                                    <p>&#10003;    Speed of Construction<br />
                                        &#10003;   Consolidation of Trades<br />
                                        &#10003;   HVAC Reduction<br />
                                        &#10003;   Site Contention<br />
                                        &#10003;   Prescriptive Method<br />
                                        &#10003;   Risk Mitigation<br /></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="rounded-0" size="lg" block>
                                    Team Up
                                    </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card className='pt-2'>
                            <Card.Img variant="top" src={require("../../images/customerCard1.svg")} />
                            <Card.Body>
                                <Card.Title className="card-title">For Your World</Card.Title>
                                <Card.Text>
                                    <p>&#10003;    100% Recyclable Blox<br />
                                        &#10003;   Chemical Free<br />
                                        &#10003;   Active C02 Reduction<br />
                                        &#10003;   Energy Efficient<br />
                                        &#10003;   Forest Conservation<br /></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="rounded-0" size="lg" block>
                                    Get Started
                                    </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card className="pt-1">
                            <Card.Img variant="top" src={require("../../images/customerCard2.svg")} />
                            <Card.Body className="pt-3">
                                <Card.Title className="card-title">For Your Home</Card.Title>
                                <Card.Text>
                                    <p>&#10003;    Noise Reduction<br />
                                        &#10003;   Save Up To 50% On Utilities<br />
                                        &#10003;   Lower Insurance Premiums<br />
                                        <br />
                                        <div className="card-description-2">Resistant To:<br />
                                        &#10003;   Fires<br />
                                        &#10003;   Earthquakes<br />
                                        &#10003;   Hurricanes<br />
                                        &#10003;   Tornadoes
                                        </div></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="rounded-0" size="lg" block>
                                    Join Us
                                    </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </CardDeck>
            </Row>
        </Container>
    );
}

export default InfoCards;
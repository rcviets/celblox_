import React from "react";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AdvantagePDF from "../resources/advantages";
import "./style.css";

const ResourceCards = () => {
    return (
        <Container className="resource-card-container">
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard1.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard2.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard3.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard4.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard5.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard6.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourcePage/resourceCard7.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}<br />
                            <hr />
                            <Button className="download-button rounded-0" size="sm">
                                Download Now
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    );
};

export default ResourceCards;
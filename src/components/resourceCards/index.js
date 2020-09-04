import React from "react";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import "./style.css";

const ResourceCards = () => {
    return (
        <Container className="resource-card-container">
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard1.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard2.svg")} />
                    <Card.Body>
                        <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard3.svg")} />
                    <Card.Body>
                    <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard4.svg")} />
                    <Card.Body>
                    <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard5.svg")} />
                    <Card.Body>
                    <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard6.svg")} />
                    <Card.Body>
                    <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../images/resourceCard7.svg")} />
                    <Card.Body>
                    <Card.Title className="resource-card-title">Spec Sheet</Card.Title>
                        <Card.Text className="resource-card-info">
                            Some text to describe what is being downloaded{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardColumns>
        </Container>
    );
};

export default ResourceCards;
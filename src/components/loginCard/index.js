import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

const LoginCard = () => {
    return (
        <Container className="login-container">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Card className="login-card">
                        <Card.Img variant="top" className="pt-5" src={require("../../images/loginCard.svg")} />
                        <Card.Body>
                            <Card.Title className="login-title">Login Now</Card.Title>
                            <Card.Text>
                                <p className="login-text"> Login
                                    <Button className="info-button rounded-0" size="sm">
                                        Login
                                    </Button>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
                </Row>
                </Container>
    );
};

export default LoginCard;
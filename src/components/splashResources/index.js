import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

const ResourceHero = () => {
    return (
        <Container className="resources-container">
                <Row>
                    <Col md={12}>
            <Jumbotron className="resources-hero">
                <Row>
                    <Col md={9}>
                        <h1 className="resources-headline">Download Center</h1>
                    </Col>
                </Row>
            <hr className="line-break-one"></hr>
            </Jumbotron>
            </Col>
                    </Row>
        </Container>
    );
};

export default ResourceHero;
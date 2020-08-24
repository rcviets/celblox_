import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

const SplashHero = () => {
  return (
          <Jumbotron className="splash-hero" fluid>
            <Container fluid>
              <Row>
              <Col md={4}></Col>
                <Col md={5}>
                  <h1>Sustainable. Durable. Cost Effective.</h1>
                </Col>
                <Col md={3}></Col>
              </Row>
            </Container>
          </Jumbotron>
  );
};

export default SplashHero;
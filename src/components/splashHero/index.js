import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

const SplashHero = () => {
  return (
    <Container className="hero-container">
          <Jumbotron className="splash-hero vw-100" />
    </Container>
  );
};

export default SplashHero;
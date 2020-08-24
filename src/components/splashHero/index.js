import React from "react";
import Container from "react-bootstrap/Container";
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
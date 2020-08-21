import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Angle from "../getWaves";
import "./style.css"

const SplashHero = () => {
  return (
    <Container fluid>
      <Jumbotron className="splash-hero" fluid />
      <Angle />
    </Container>
  );
};


export default SplashHero;
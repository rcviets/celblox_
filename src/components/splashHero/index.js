import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

const SplashHero = () => {
  return (
          <Jumbotron className="splash-hero" fluid>
          <h1>Sustainable. Durable. Cost Effective.</h1>
          </Jumbotron>
  );
};

export default SplashHero;
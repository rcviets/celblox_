import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

const SplashBanner = () => {
  return (
    <Jumbotron className="splash-banner" fluid>
        <h1 className="splash-banner-text">Something About How Kewl Celblox Are</h1>
    </Jumbotron>
  );
};

export default SplashBanner;
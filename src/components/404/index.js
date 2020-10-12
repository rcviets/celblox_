import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

const NotFoundHero = () => {
    return (
        <Jumbotron className="notfound-hero" fluid>
            <h1 className="notfound-header">This Page Is Still Under Construction</h1>
            <h2 className="notfound-header">Check Back Later!</h2>
        </Jumbotron>
    );
};

export default NotFoundHero;
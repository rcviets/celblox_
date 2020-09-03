import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

const ResourceHero = () => {
    return (
        <Jumbotron className="resource-hero" fluid>
            <h1 className="resource-headline">DOWNLOAD CENTER</h1>
                <div class="resource-arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </Jumbotron>
    );
};

export default ResourceHero;
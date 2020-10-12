import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./style.css";

const QuoteButton = () => {
    return (
        <>
            <Container className="quote-button">
                <Button className="product-button rounded-0" size="lg" href="https://rcviets.github.io/celblox_/#/contact" block>
                    Request A Quote
                </Button>
            </Container>
        </>
    );
};

export default QuoteButton;
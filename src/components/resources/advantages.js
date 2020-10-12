import React, { Component } from "react";
import Container from "react-bootstrap/Container"

class AdvantagePDF extends Component {
    render() {
        return (
            <Container>
                <a href={require("../../pdfs/celbloxAdvantages.pdf")} target="_blank">Download Celblox Advantages PDF</a>
            </Container>
        );
    };
};

export default AdvantagePDF;
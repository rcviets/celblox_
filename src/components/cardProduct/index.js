import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const ProductCard = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Body className="product-card">This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductCard;
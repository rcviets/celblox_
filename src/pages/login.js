import React, { Component } from "react";
import { Col } from "react-bootstrap";
import LoginCard from "../components/loginCard";
import "./style.css";

class Login extends Component {
    render() {
        return(
            <>
                <LoginCard />
            </>
        );
    };
};

export default Login;
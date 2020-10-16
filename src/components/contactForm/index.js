import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyName: "",
            contactName: "",
            email: "",
            number: "",
            zip: "",
            message: ""
            /*distributor: false,
            installer: false*/
        };
    }

    handleFormSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3000/contact",
            data: this.state
        }).then((response) => {
            if (response.data.status === "success") {
                alert("Message Sent");
            } else if (response.data.status === "fail") {
                alert("Message Not Sent");
            };
        });
    };

    render() {
        console.log("state:", this.state.companyName);
         return (
            <>
                <div className="fluid-container contact-form-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card contact-form-card mx-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Contact Us</h5>
                                    <form>
                                        <div className="form-group company-name">
                                            <input
                                                type="name"
                                                name="companyName"
                                                className="form-control"
                                                id="companyName"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="form-group contact-name">
                                            <input
                                                type="name"
                                                name="contactName"
                                                className="form-control"
                                                id="contactName"
                                                placeholder="Contact Name"
                                            />
                                        </div>
                                        <div className="form-group contact-email">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="contactEmail"
                                                placeholder="johnDoe@company.com"
                                            />
                                        </div>
                                        <div className="form-group contact-number">
                                            <input
                                                name="number"
                                                type="number"
                                                className="form-control"
                                                id="contactNumber"
                                                placeholder="(123) 456-7890"
                                            />
                                        </div>
                                        <div className="form-group contact-zip">
                                            <input
                                                name="zip"
                                                type="number"
                                                className="form-control"
                                                id="contactZip"
                                            />
                                        </div>
                                        <div className="form-group contact-message">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            id="contactMessage"
                                            rows="3"
                                            placeholder="Enter Message"
                                        />
                                        </div>
                                        <button
                                            onClick={this.handleFormSubmit}
                                            className="btn btn-primary submit-button"
                                            type="submit"
                                            value="Submit">Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    /*Will condense later; just work first plzzzz */
    onCompanyNameChange(event) {
        this.setState({companyName: event.target.value});
    };
    onContactNameChange(event) {
        this.setState({contactName: event.target.value});
    };
    onEmailChange(event) {
        this.setState({email: event.target.value});
    };
    onNumberChange(event) {
        this.setState({number: event.target.value});
    };
    onZipChange(event) {
        this.setState({zip: event.target.value});
    };
    onMessageChange(event) {
        this.setState({message: event.target.value});
    };
};

export default ContactForm;
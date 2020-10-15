import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

class ContactForm extends Component {
        state = {
            companyName: "",
            contactName: "",
            email: "",
            number: "",
            zip: "",
            message: "",
            distributor: false,
            installer: false
        };

    handleFormSubmit(e) {
        e.preventDefault();

        const contactData = {
            companyName: this.state.companyName,
            contactName: this.state.contactName,
            email: this.state.email,
            number: this.state.number,
            zip: this.state.zip,
            message: this.state.message,
            distributor: this.state.distributor,
            installer: this.state.installer
        };

        axios({
            method: "POST",
            url: "http://localhost:3000/contact",
            data: this.state
        }).then((response) => {
            if (response.data.status === "success") {
                alert("Message Sent");
                this.resetForm()
            } else if (response.data.status === "fail") {
                alert("Message Not Sent");
            };
        });

        this.setState({
            companyName: "",
            contactName: "",
            email: "",
            number: "",
            zip: "",
            message: "",
            distributor: "",
            installer: ""
        });
    };

    handleInputChange = e => {
        let name = e.target.name;

        this.setState({
            [name]: e.target.value
        });
    };

    resetForm() {
        this.state({
            companyName: "",
            contactName: "",
            email: "",
            number: "",
            zip: "",
            message: "",
            distributor: false,
            installer: false
        });
    };

    render() {
        console.log("state:", this.state.companyName);
         return (
            <>
                <div class="fluid-container contact-form-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card contact-form-card mx-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Contact Us</h5>
                                    <form>
                                        <div className="form-group company-name">
                                            <input
                                                onChange={this.handleInputChange}
                                                type="name"
                                                name="companyName"
                                                class="form-control"
                                                id="companyName"
                                                placeHolder="Company Name"
                                            />
                                        </div>
                                        <div className="form-group contact-name">
                                            <input
                                                onChange={this.handleInputChange}
                                                type="name"
                                                name="contactName"
                                                className="form-control"
                                                id="contactName"
                                                placeHolder="Contact Name"
                                            />
                                        </div>
                                        <div className="form-group contact-email">
                                            <input
                                                onChange={this.handleInputChange}
                                                type="email"
                                                name="email"
                                                class="form-control"
                                                id="contactEmail"
                                                placeHolder="johnDoe@company.com"
                                            />
                                        </div>
                                        <div className="form-group contact-number">
                                            <input
                                                onChange={this.handleInputChange}
                                                name="number"
                                                type="number"
                                                class="form-control"
                                                id="contactNumber"
                                                placeholder="(123) 456-7890"
                                            />
                                        </div>
                                        <div className="form-group contact-zip">
                                            <label for="zip">Zip Code</label>
                                            <input
                                                onChange={this.handleInputChange}
                                                name="zip"
                                                type="number"
                                                class="form-control"
                                                id="contactZip"
                                            />
                                        </div>
                                        <div className="form-group contact-message">
                                        <textarea
                                            onChange={this.handleInputChange}
                                            name="message"
                                            class="form-control"
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
};

export default ContactForm;
import React, { Component, useState } from "react";
import { API } from "../../config";

var Recaptcha = require("react-recaptcha");
let recaptchaInstance;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      isVerified: false,
      isSent: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.recaptchaloaded = this.recaptchaloaded.bind(this);
    this.verifyCaptch = this.verifyCaptch.bind(this);
    this.resetRecaptcha = this.resetRecaptcha.bind(this);
  }

  recaptchaloaded() {
    console.log("captcha loaded");
  }

  validate() {
    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "please fill the name";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      if (this.state.isVerified) {
        fetch(`${API}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
          }),

          data: this.state,
        })
          .then((result) => {
            this.setState({
              mailSent: result.data.sent,
            });
          })
          .catch((err) => {
            console.log(err);
          });

        this.setState({
          name: "",
          email: "",
          message: "",
          nameError: "",
          emailError: "",
          isValid: false,
          isSent: true,
        });
      } else {
        alert("please verify you are a human");
      }
    }
  };

  checkSent() {
    let sentSucess = "";

    if (this.state.isSent) {
      sentSucess = "sent Scuess!";
    }

    if (sentSucess) {
      this.setState({ sentSucess: true });
    }
  }

  verifyCaptch(response) {
    if (response) {
      this.setState({
        isVerified: true,
        // isSent: true,
      });
    }
  }

  resetRecaptcha() {
    recaptchaInstance.reset();
  }

  componentDidMount() {
    window.setTimeout(() => this.setState({ renderRecaptcha: true }), 1000);
  }

  render() {
    return (
      <section className="contact-our-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading-2 text-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <h4>Sponsor Us</h4>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col-12 col-sm-3">
              <div className="contact-information mb-100">
                <div
                  className="single-contact-info wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <p>Email:</p>
                  <h6>
                    {" "}
                    <a href="mailto:tejakummarikuntla@gmail.com">
                      {" "}
                      teja.kummarikuntla@gmail.com{" "}
                    </a>
                  </h6>
                </div>
                <div
                  className="single-contact-info wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <p>Website:</p>
                  <h6>
                    <a
                      href="https://tejakummarikuntla.github.io"
                      target="_blank"
                    >
                      {" "}
                      tejakummarikuntla.github.io{" "}
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-8">
              <div
                className="contact_from_area mb-100 clearfix wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="contact_form">
                  <form method="POST" id="main_contact_form">
                    <div className="contact_input_area">
                      <div id="success_fail_info"></div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control mb-30"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div style={{ color: "red" }}>
                          {this.state.nameError}
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control mb-30"
                              name="email"
                              id="email"
                              placeholder="E-mail"
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div style={{ color: "red" }}>
                          {this.state.emailError}
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control mb-30"
                              id="message"
                              cols="30"
                              rows="6"
                              placeholder="Your Message *"
                              value={this.state.message}
                              onChange={(e) =>
                                this.setState({ message: e.target.value })
                              }
                            ></textarea>
                            {this.state.renderRecaptcha ? (
                              <Recaptcha
                                sitekey="6LcpobgZAAAAAB9wc2oT0p9cTpyTw0HbFEFIure9"
                                render="explicit"
                                theme="light"
                                onChange={this.resetRecaptcha}
                                verifyCallback={this.verifyCaptch}
                                onloadCallback={this.recaptchaloaded}
                                ref={(e) => (recaptchaInstance = e)}
                              />
                            ) : null}
                          </div>
                        </div>
                        <div></div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn confer-btn"
                            disabled={
                              this.state.email.length < 10 ||
                              this.state.message.length < 1
                            }
                            onClick={(e) => this.handleFormSubmit(e)}
                          >
                            SEND MESSAGE
                            <i className="zmdi zmdi-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

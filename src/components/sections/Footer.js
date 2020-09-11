import React, { Component } from "react";
import { API } from "../../config";
import "../../css/indeStyle.css";
import tw from "twin.macro";
import { PrimaryButton } from "../../components/misc/Buttons.js";
import notify from "./notify";
import Button from "@material-ui/core/Button";
require("es6-promise").polyfill();
require("isomorphic-fetch");
const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`;
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-gray-600 tracking-wider font-bold border border-gray-600 focus:border-gray-300 focus:outline-none sm:rounded-r-none hover:bg-gray-500 transition duration-300 text-gray-200`;
// const Button = tw(
//   PrimaryButton
// )`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-blue-500 text-gray-100 hocus:bg-blue-700 hocus:text-gray-300 border border-blue-500 hocus:border-blue-700`;

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleOnChangeEmail = (name, email) => {
    this.setState({
      name: name,
      email: email,
    });
  };

  validation() {
    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "please fill the name";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (nameError || emailError) {
      this.setState({ nameError, emailError });
      return false;
    }

    return true;
  }
  handleSubscribe(event) {
    const isValid = this.validation();
    if (isValid) {
      event.preventDefault();
      fetch(`${API}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
        }),
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          return console.log(JSON.stringify(res));
        })
        .then(function (res) {
          console.log(JSON.stringify(res));
        })
        .catch((res) => {
          console.log(JSON.stringify(res.data));
        });
      this.setState({
        name: "",
        email: "",
      });
    }
  }

  render() {
    return (
      <>
        <footer
          className="footer-area bg-img bg-overlay-2 section-padding-100-0"
          // style={{ backgroundColor: "#151853", marginTop: "10px" }}
          id="footer"
        >
          <div className="main-footer-area">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="single-footer-widget mb-60 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <a href="#" className="footer-logo">
                      <img
                        src="/img/core-img/Exploiting_logo.png"
                        height="100"
                        width="200"
                        alt=""
                      />
                    </a>

                    <div className="social-info">
                      <a
                        href="https://www.instagram.com/exploit.chat"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-instagram"></i>
                      </a>
                      <a
                        href="https://www.twitter.com/tejakkuntla"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/tejakummarikuntla"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="single-footer-widget mb-60 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <h5 className="widget-title">Contact</h5>

                    <div className="footer-contact-info">
                      <p>
                        <i className="zmdi zmdi-email"></i>{" "}
                        <a
                          href="mailto:tejakummarikuntla@gmail.com"
                          style={{ color: "#9293BC" }}
                        >
                          teja.kummarikuntla@gmail.com{" "}
                        </a>
                      </p>
                      <p>
                        <i className="zmdi zmdi-globe"></i>{" "}
                        <a
                          href="https://tejakummarikuntla.github.io"
                          style={{ color: "#9293BC" }}
                        >
                          {" "}
                          www.tejakummarikuntla.github.io{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-6">
                  <SubscribeNewsletterContainer>
                    <Form method="get" action="#">
                      <div
                        className="single-footer-widget mb-60 wow fadeInUp"
                        data-wow-delay="300ms"
                      >
                        <h5 className="widget-title" style={{ color: "white" }}>
                          {" "}
                          Subscribe Here !
                        </h5>
                        <Input
                          value={this.state.name}
                          type="email"
                          placeholder="Enter Name"
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                        <p style={{ color: "red" }}>{this.state.nameError}</p>
                        <Input
                          value={this.state.email}
                          type="email"
                          placeholder="Email Address"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <p style={{ color: "red" }}>{this.state.emailError}</p>
                        <Button
                          className="btn confer-btn"
                          variant="contained"
                          color="white"
                          disabled={this.state.email.length < 10}
                          onClick={(e) => this.handleSubscribe(e)}
                          type="submit"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </Form>
                  </SubscribeNewsletterContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copywrite-content">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="copywrite-text">
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="footer-menu">
                    <ul className="nav">
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-circle"></i> Terms of Service
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-circle"></i> Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

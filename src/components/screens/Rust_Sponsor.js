import React from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import { Helmet } from "react-helmet";

const Rust = () => {
  return (
    <>
      <Helmet>
        <title>Rust Conference | Manning</title>
        <meta content=""></meta>
      </Helmet>
      <Navbar />
      <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="page-title">MANNING PUBLICATIONS</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/episodes/all">Sponsors</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Manning
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-12 col-lg-8 col-xl-9">
              <div class="pr-lg-4 mb-100">
                <div class="post-details-content">
                  <div class="post-blog-thumbnail mb-30">
                    <img src="../img/rust_conf/4.jpg" alt="" />
                  </div>

                  <h4 class="post-title">
                    <a href="https://http://mng.bz/1g9X">
                      Rust: live@Manning conferences{" "}
                    </a>
                  </h4>

                  <p> </p>
                  <h4></h4>

                  <p>
                    Let’s talk about <i>#Rust</i>! <b>Sep 15</b> , at the{" "}
                    <a href="http://mng.bz/1g9X">live@Manning</a> conference in
                    one Rust-full day go from ways to learn it, to where and how
                    to use it from game-dev to aerospace and beyond, right from
                    the pincers of expert Rustaceans.
                    <br />
                    Finding Rustaceans weird but intriguing? Secretly wanting to
                    become one? Tune-in, <b>Sep 15</b>, to the{" "}
                    <a href="http://mng.bz/1g9X">live@Manning</a> <i>#Rust</i>{" "}
                    conference to find your <i> #Rustlang </i>
                    pincers! Striving to build reliable and efficient software,
                    but finding your language of choice lacking in some key
                    departments? Find the solution with Ferris the crab and the
                    Rustacean tribe. When? <b>Sep 15</b>, at the{" "}
                    <a href="http://mng.bz/1g9X">live@Manning</a> Rust
                    conference!
                    <br />
                    <i>
                      <b>#Rust #Rustlang #Rustacean</b>
                    </i>
                  </p>
                  <div className="col-12">
                    <div
                      className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <a
                        className="btn confer-btn"
                        href="http://mng.bz/1g9X"
                        target="_blank"
                      >
                        Register Here{" "}
                        <i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <p>
                    {" "}
                    <i>
                      <a target="_blank" href="https://www.manning.com/">
                        Manning publications
                      </a>
                    </i>{" "}
                    is offering a complete 40% off on applying{" "}
                    <b>
                      <i>“podexploit20”</i>
                    </b>{" "}
                    coupon code during the purchase of any Books at
                    <a href="https://www.manning.com/?utm_source=affiliates&utm_medium=affiliates&a_aid=exploitchat">
                      <b>Manning.com</b>
                    </a>{" "}
                    Know more about giveaways at{" "}
                    <a href="https://www.instagram.com/exploit.chat">
                      @exploit.chat
                    </a>
                  </p>
                </div>

                <div class="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rust;

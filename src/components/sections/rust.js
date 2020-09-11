import React from "react";

const Rustconf = () => {
  return (
    <section
      className="about-us-countdown-area section-padding-100-0"
      id="about"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="about-content-text mb-80">
              <h6 className="wow fadeInUp" data-wow-delay="300ms">
                {" "}
              </h6>
              <h3
                className="wow fadeInUp"
                data-wow-delay="300ms"
                // style={{ fontFamily: "Carter One", fontSize: "30px" }}
              >
                Rust: live@Manning conferences
              </h3>
              <p className="wow fadeInUp" data-wow-delay="300ms">
                Let’s talk about #Rust! Sep 15 , at the live@Manning conference
                in one Rust-full day go from ways to learn it, to where and how
                to use it from game-dev to aerospace and beyond, right from the
                pincers of expert Rustaceans.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="about-thumb mb-80 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <img
                src="../img/rust_conf/4.jpg"
                alt=""
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <a className="btn confer-btn" href="/rust">
                Know more <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rustconf;

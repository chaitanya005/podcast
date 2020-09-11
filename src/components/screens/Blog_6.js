import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_6 from "../sections/Episodes/BreadCrumbEp_6";
import Ep_6 from "../sections/Episodes/Episode_6";
import Sidebar_6 from "../sections/Episodes/Sidebar_6";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep6 : Teja Kummarikuntla </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_6 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_6 />
            <Sidebar_6 />
          </div>
          <MyComment />
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
};

export default Blogarea;

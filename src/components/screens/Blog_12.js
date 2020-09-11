import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_12 from "../sections/Episodes/BreadCrumbEp_12";
import Ep_12 from "../sections/Episodes/Episode_12";
import Sidebar_12 from "../sections/Episodes/Sidebar_12";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Unicast: On Chasing Grit With Transformation</title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_12 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_12 />
            <Sidebar_12 />
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

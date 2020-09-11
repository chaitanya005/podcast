import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_5 from "../sections/Episodes/BreadCrumbEp_5";
import Ep_5 from "../sections/Episodes/Episode_5";
import Sidebar_5 from "../sections/Episodes/Sidebar_5";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep5 : Frank Kane </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_5 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_5 />
            <Sidebar_5 />
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

import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_7 from "../sections/Episodes/BreadCrumbEp_7";
import Ep_7 from "../sections/Episodes/Episode_7";
import Sidebar_7 from "../sections/Episodes/Sidebar_7";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep7 : Josh Starmer </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_7 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_7 />
            <Sidebar_7 />
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

import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_9 from "../sections/Episodes/BreadCrumbEp_9";
import Ep_9 from "../sections/Episodes/Episode_9";
import Sidebar_9 from "../sections/Episodes/Sidebar_9";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep9 : Michael Kennedy </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_9 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_9 />
            <Sidebar_9 />
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

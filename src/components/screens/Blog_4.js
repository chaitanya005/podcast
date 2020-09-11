import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_4 from "../sections/Episodes/BreadCrumbEp_4";
import Ep_4 from "../sections/Episodes/Episode_4";
import Sidebar_4 from "../sections/Episodes/Sidebar_4";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep4 : Luis Serrano </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_4 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_4 />
            <Sidebar_4 />
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

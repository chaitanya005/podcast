import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_11 from "../sections/Episodes/BreadCrumbEp_11";
import Ep_11 from "../sections/Episodes/Episode_11";
import Sidebar_11 from "../sections/Episodes/Sidebar_11";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Miguel Morales: On How Reinforcement Learning Aligned With Human
            Learnings </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_11 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_11 />
            <Sidebar_11 />
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

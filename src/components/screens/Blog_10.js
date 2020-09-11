import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_10 from "../sections/Episodes/BreadCrumbEp_10";
import Ep_10 from "../sections/Episodes/Episode_10";
import Sidebar_10 from "../sections/Episodes/Sidebar_10";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep10 : Teja Kummarikuntla </title>{" "}
        <meta property="og:title" content="Ep10: Teja Kummarikuntla" />
        <meta
          property="og:description"
          content="On Killing ANTs, Automatic Negative Thoughts"
        />
        <meta
          property="og:image"
          content="../img/Podcast/Exploiting_v2_400s.png"
        />
        <meta property="og:url" content="https://exploit.chat/ep10" />
      </Helmet>
      <Navbar />
      <BlogBread_10 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_10 />
            <Sidebar_10 />
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

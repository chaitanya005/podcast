import React from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import Team from "../sections/TeamTest";
import { Helmet } from "react-helmet";

const crew = () => {
  return (
    <>
      <Helmet>
        <title>Exploiting | Crew</title>{" "}
      </Helmet>
      <Navbar />
      <Team />
      <Footer />
    </>
  );
};

export default crew;

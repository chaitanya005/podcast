import React from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import Sponsors from "../sections/Sponsor";

const Sponsor = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#151853" }}>
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
};

export default Sponsor;

import React from "react";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";

const Ama = ({ ama }) => {
  console.log(ama);
  return (
    <div>
      <Helmet>
        <title>{ama.title} -Ask Me Anything</title>
      </Helmet>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src={ama.embeddedlink}
        width="100%"
        height="1180"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="AMA Bob"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Ama;

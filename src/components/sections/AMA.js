import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Ama = () => {
  return (
    <div>
      <Helmet>
        <title>Bob Belderbos -Ask Me Anything</title>
        {/*Twitter Meta Tags: */}
        <meta
          name="twitter:title"
          content="Ask Bob Belderbos, The Exploiting Podcast"
        />
        <meta
          name="twitter:description"
          content="Ask Bob about Python, Software, Career, Coaching, and self-improvement"
        />
        <meta name="twitter:url" content="http://exploit.chat/AskBob" />
        <meta
          name="twitter:image"
          content="https://lh4.googleusercontent.com/jYRBOpLNj01kC8KTyeftGvZRobHP_Dk4Rigi89OgYrJbxyV0PGV_XrqxADih-bmrFbA4EqpQTZjaMhoRvpgaW_ujFqVfCF7hZ7jhrPwNnoxQQeJXX_nRfo45uQnv=w1920"
        />

        {/*Facebook Meta Tags: */}
        <meta
          property="og:image"
          content="https://lh4.googleusercontent.com/jYRBOpLNj01kC8KTyeftGvZRobHP_Dk4Rigi89OgYrJbxyV0PGV_XrqxADih-bmrFbA4EqpQTZjaMhoRvpgaW_ujFqVfCF7hZ7jhrPwNnoxQQeJXX_nRfo45uQnv=w1920"
        />
        <meta
          property="og:description"
          content="Ask Bob about Python, Software, Career, Coaching, and self-improvement"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://exploit.chat/AskBob" />

        <meta
          property="og:title"
          content="Ask Bob Belderbos, The Exploiting Podcast"
        />
      </Helmet>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSco7mqMUGYpRiwxoGoineGOMCr7pZ6twgE9jMVV--_jc648PA/viewform?embedded=true"
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

import React from "react";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Podcast from "../sections/Podcast";
import Navbar from "../sections/Navbar";
import Testimonal from "../sections/Testimonals";
import Rustconf from "../sections/rust";
import CarouselPage from "../sections/ListnersTestimonials";
import Sponsors from "../sections/Sponsor";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Exploiting with Teja Kummarikuntla</title>{" "}
        <meta
          name="description"
          content="The Exploiting Podcast is a weekly show with Conversations and Unicasts, Hosted by Teja Kummarikuntla. We resonate by diving deep into the exploiting actions by the incredible Technical, and Business leaders. With Unicasts we amplify the wisdom in the world that could help us to transform. Sounds exciting? Come exploit with us at: exploit.chat."
        ></meta>
        <meta
          name="keywords"
          content="Exploiting, Exploit chat, exploit.chat, podcast, Exploiting with Teja Kummarikuntla, Exploiting Podcast, exploiting podcast, the exploiting podcast"
        ></meta>
      </Helmet>
      <Navbar />
      <About />
      <Podcast />
      <Rustconf />
      <section
        class="testimonial text-center"
        style={{ backgroundColor: "#151853", textAlign: "center" }}
      >
        <Testimonal />
        <CarouselPage />
        <div className="container" style={{ backgroundColor: "#151853" }}>
          <Sponsors />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

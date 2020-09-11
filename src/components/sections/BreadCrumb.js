import React from "react";

const EpBreadCrumb = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_4/LuisSerrano_WideBanner.png"
              alt=""
            />
          </div>

          <h4 className="post-title">
            Luis Serrano: On Unlocking The Intuition Behind Math and Machine
            Learning
          </h4>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> July 6, 2019
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/luisgserrano/"
            >
              <i className="zmdi zmdi-account"></i> Luis Serrano
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/2CITL9oJJYtJVSIDR22VNr"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Guest Introduction:</h4>
          <p>
            Luis is a Data Scientist, Quantum AI Research Scientist, an
            Incredible Teacher, YouTuber, and an amazing Author. In the past,
            Luis had worked for Apple and Google where he was on creating and
            maintaining the YouTube recommendation algorithms. He was the
            content lead of AI at Udacity as well. He creates and maintains the
            serrano.academy, which aims to make the math and machine learning
            easy for every single data science aspirants in the world. Before
            His life into technology, he was a research mathematician and Ph.D.
            person from the University of Michigan. On top of all of that, he’s
            the author of <b>Grooking Machine Learning</b>. Currently, Luis is a
            Quantum AI Research scientist at Zapata computing.{" "}
          </p>
          <p>Thank you so much for joining us Luis.</p>
          <h4>Episode Highlights</h4>

          <blockquote className="confer-blockquote">
            <h5>
              The question that I would like to ask myself all the time is, that
              was once asked to me, what would you do if all the jobs paid the
              same and ther's something in your mind and that's your passion.
            </h5>
          </blockquote>

          <h5>Luis answered questions like:</h5>
          <div className="ticket-pricing-table-details">
            <p>
              <i className="zmdi zmdi-check"></i> How to not start learning
              Machine Learning?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> When did your passion for
              teaching has started?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How did he Join Google,
              Udacity, and Apple in Data Science?{" "}
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How Machine learning distorts
              from academics to the industry?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How to understand the research
              papers better?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> What is his brain tattoo
              before learning anything?
            </p>
          </div>
          <p>
            <b>
              <a
                target="_blank"
                href="https://www.manning.com/books/grokking-machine-learning"
              >
                “Grokking Machine Learning”
              </a>
            </b>
            published by{" "}
            <i>
              <a target="_blank" href="https://www.manning.com/">
                Manning publications
              </a>
            </i>{" "}
            is offering a complete 40% off on applying{" "}
            <b>
              <i>“podexploit20”</i>
            </b>{" "}
            coupon code during the purchase. On top of that Luis is Giving Away
            5 Ebooks for completely free. Join the Giveaway challenge and get a
            chance to win a free copy of “Grokking Machine Learning”.
          </p>
          <p>
            Join the Giveaway challenge at
            <a target="_balnk" href="https://www.instagram.com/p/CCSnx-3nIjo/">
              Instagram
            </a>{" "}
            or
            <a
              target="_balnk"
              href="https://www.linkedin.com/feed/update/urn:li:activity:6685820107257716736/"
            >
              LinkedIn
            </a>
          </p>
          <div className="row">
            <div className="col-6">
              <img
                className="mb-30"
                src="../img/Podcast/episodes/ep_4/giveaway/LinkedinGiveaway.png"
                alt=""
              />
            </div>
            <div className="col-6">
              <img
                className="mb-30"
                src="../img/Podcast/episodes/ep_4/giveaway/SwipeSegment.png"
                alt=""
              />
            </div>
          </div>

          <h5>Congratulations to the winners of the Giveaway</h5>
          <img src="../img/Podcast/episodes/ep_4/giveaway/Winners.png" alt="" />
          <p> </p>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:6689424121648033792"
            height="763"
            width="380"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>

          <p>
            Thank you so much for making this happen &amp; Special thanks to{" "}
            <i>
              <a target="_blank" href="https://www.manning.com/">
                Manning publications
              </a>
            </i>{" "}
            (Radmila Ercegovac) for continuous support{" "}
          </p>
        </div>

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
      </div>
    </div>
  );
};

export default EpBreadCrumb;

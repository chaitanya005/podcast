import React from "react";

const ep_6 = () => {
  return (
    <div class="col-12 col-lg-8 col-xl-9">
      <div class="pr-lg-4 mb-100">
        <div class="post-details-content">
          <div class="post-blog-thumbnail mb-30">
            <img src="../img/Podcast/episodes/ep_6/YouTube_Banner.png" alt="" />
          </div>

          <h4 class="post-title">
            On How to Transform Your Actions with One Percent Rule
          </h4>

          <div class="post-meta">
            <a class="post-date">
              <i class="zmdi zmdi-alarm-check"></i> July 27, 2020
            </a>
            <a
              class="post-author"
              href="https://www.linkedin.com/in/tejakummarikuntla/"
            >
              <i class="zmdi zmdi-account"></i> Teja Kummarikuntla
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/4dqM19MPjhkfOXAgnSAikD"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Introduction:</h4>
          <p>
            On this Unicast, I’ve shared one of the most powerful ideas that I
            ever learned, an Idea called one percent rule. By the time you are
            in mid of any of your work by hardworking, there’s a high
            possibility that we lose our intention, it’s maybe you couldn’t find
            any results or maybe you were overspending your time. Applying one
            percent rule on your work and making an insightful progress every
            single day could make a lot of difference.
          </p>
          <p>
            {" "}
            Join us in Instagram
            <a href="https://www.instagram.com/exploit.chat">
              @exploit.chat
            </a>{" "}
            Find me in Instagram{" "}
            <a href="https://www.instagram.com/tejakummarikuntla">
              @tejakummarikuntla
            </a>
          </p>
          <h4>Episode Highlights</h4>

          <blockquote class="confer-blockquote">
            <h5>
              maybe it’s about writing a new book or about staring a new
              project. But, once you are on it for a couple of months, Now the
              challenging part we all face is to stick with it longer and saying
              ourselves not to give up.
            </h5>
          </blockquote>

          <p>
            {" "}
            <i>
              <a target="_blank" href="https://www.manning.com/">
                Manning publications
              </a>
            </i>{" "}
            is offering a complete 40% off on applying{" "}
            <b>
              <i>“podexploit20”</i>
            </b>{" "}
            coupon code during the purchase of any Manning Books. Know more
            about giveaways at{" "}
            <a href="https://www.instagram.com/exploit.chat">@exploit.chat</a>
          </p>
        </div>

        <div class="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep_5">
                <img
                  src="../img/Podcast/episodes/ep_5/guest/dp_FrankKane.png"
                  alt=""
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_5" className="post-title">
                Frank Kane
              </a>
              <span>Previous Post</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep7">
                <img
                  src="../img/Podcast/episodes/ep_7/guest/Joshua.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep7" className="post-title">
                Josh Starmer
              </a>
              <span>Next Post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_6;

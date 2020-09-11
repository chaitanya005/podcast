import React from "react";

const ep_6 = () => {
  return (
    <div class="col-12 col-lg-8 col-xl-9">
      <div class="pr-lg-4 mb-100">
        <div class="post-details-content">
          <div class="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_8/Unicast_YTBanner.png"
              alt=""
            />
          </div>

          <h4 class="post-title">Unicast: On Hiking Your On Hike</h4>

          <div class="post-meta">
            <a class="post-date">
              <i class="zmdi zmdi-alarm-check"></i> Aug 10, 2020
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
              src="https://open.spotify.com/embed-podcast/episode/3ov9iobaiesvLyUw6Ya90f"
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
            On this Unicast, I’ve shared one of the most powerful sayings on the
            “Pacific Crest Trail” it’s called “Hike your own Hike”, this is a
            phenomenon and a basic concept among hikers, explorers, and
            travelers, which means to work and focus on yourself, intersecting
            the phenomenon, a few segments form the past conversations are
            included to express how impactful they can be in real life.
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
              Don’t worry about the people around you. They may grow faster than
              you, they may earn more than you do, they may get greater
              positions than you and they may have more expensive and luxury
              lives than you, but they may not be happy with that, so do you?
            </h5>
          </blockquote>
        </div>

        <div class="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep_7">
                <img
                  src="../img/Podcast/episodes/ep_7/guest/Joshua.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_7" className="post-title">
                Josh Starmer
              </a>
              <span>Previous Post</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep_9">
                <img
                  src="../img/Podcast/episodes/ep_9/guest/Michael.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_9" className="post-title">
                Michael Kennedy
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

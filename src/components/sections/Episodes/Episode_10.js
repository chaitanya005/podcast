import React from "react";

const ep_10 = () => {
  return (
    <div class="col-12 col-lg-8 col-xl-9">
      <div class="pr-lg-4 mb-100">
        <div class="post-details-content">
          <div class="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_10/Unicast_3_YTBanner.png"
              alt=""
            />
          </div>

          <h4 class="post-title">Unicast: On Hiking Your On Hike</h4>

          <div class="post-meta">
            <a class="post-date">
              <i class="zmdi zmdi-alarm-check"></i> Aug 24, 2020
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
              src="https://open.spotify.com/embed-podcast/episode/4p0BkFGr4tuLWZ0Q7ERxH6"
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
            Moving forward in life, the one thing that always stays with us is
            Negative thoughts, Research shows that 85% of our whole thoughts of
            a day are negative and having them every day and having them every
            day and expecting a positive life is paradoxical. In this Unicast,
            I’ve shared a practical todo that could transform and help you with
            Killing Automatic Negative Thoughts using Spot, Stop, and Swap
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
              Look at this, what you do every single is what you become right?,
              You do Programming every day you become an amazing programmer, You
              play every day, you become an amazing player, You write every day,
              you become an amazing writer. But, if you do all of that with
              negative thoughts every day, then how you could have a positive
              life?
            </h5>
          </blockquote>
        </div>

        <div class="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep9">
                <img
                  src="../img/Podcast/episodes/ep_9/guest/Michael.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep9" className="post-title">
                Michael Kennedy
              </a>
              <span>Previous Post</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep11">
                <img
                  src="../img/Podcast/episodes/ep_11/guest/Morales_Miguel.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep11" className="post-title">
                {" "}
                Miguel Morales
              </a>
              <span>Next Post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_10;

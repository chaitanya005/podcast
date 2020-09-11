import React from "react";

const ep_9 = () => {
  return (
    <div class="col-12 col-lg-8 col-xl-9">
      <div class="pr-lg-4 mb-100">
        <div class="post-details-content">
          <div class="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_9/YouTube_Banner_se.png"
              alt=""
            />
          </div>

          <h4 class="post-title">
            Michael Kennedy: On Building a Successful Podcast in Technology |
            Self-employment
          </h4>

          <div class="post-meta">
            <a class="post-date">
              <i class="zmdi zmdi-alarm-check"></i> August 17, 2020
            </a>
            <a class="post-author" href="https://www.linkedin.com/in/mkennedy/">
              <i class="zmdi zmdi-account"></i> Michael Kennedy
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/0A0n4MmmR7ybo30Pl5ZmLU"
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
            Micheal is an amazing mentor, teacher and a software developer with
            over 20 years of experience he has taught over 100s of week-long
            training courses to professional software development teams
            throughout the world across 4 continents and has spoken at a number
            of US and International conferences including NDC, DevWeek and many
            others. On top of all of that, He’s Founder and Host of the top
            Python Podcast “Talk Python to me” and he’s also the Founder and
            host of another successful podcast called “Python Bytes”, this is
            phenomenal, he hosted over 280 guests and I’ve been following his
            work for quite a long time from my 1st year in engineering and he
            had interviewed many creators in the python community and incredible
            technical leaders on the planet. I highly recommend checking out
            “Talk Python to me” Podcast at Talkpython.fm. Besides that, Micheal
            is deeply connected and so much involved with communities where he's
            a Python Software Foundation fellow, and he’s an Author at Manning
            Publication, who connected us today and a MongoDB Master handling
            millions of requests per month.
          </p>
          <p>Thank you so much for joining us Michael.</p>
          <h4>Episode Highlights</h4>

          <blockquote class="confer-blockquote">
            <h5>
              That will stick with you for years, even though five people said
              it was great, one person doesn't like it, and all of a sudden
              they're gone right? one person is like dark clouds raining on you,
              and you're like "come on man, traveled like 8 times to be here"
              are you kidding me? you gotta remember that fear and that negative
              feedback, you gotta keep them in check, right? because we feel it
              stronger than it deserves to be.
            </h5>
          </blockquote>

          <p>
            {" "}
            Check out his course giveaway from Manning Publications on “Building
            Data-Driven Web Apps with Flask and SQLAlchemy”, join the challenge
            at :
            <a href="https://linktr.ee/tejakummarikuntla">
              linktr.ee/tejakummarikuntla
            </a>
            , you can be lucky.
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="mb-30"
              src="/img/Podcast/episodes/ep_9/giveaway/GiveAway_Banner.png"
              alt=""
            />
          </div>
        </div>

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
          coupon code during the purchase of any Manning Books. Know more about
          giveaways at{" "}
          <a href="https://www.instagram.com/exploit.chat">@exploit.chat</a>
        </p>

        <div class="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep_8">
                <img src="../img/Podcast/Exploiting_v2_400s.png" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_8" className="post-title">
                Teja Kummarikuntla
              </a>
              <span>Previous Post</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep_10">
                <img src="../img/Podcast/Exploiting_v2_400s.png" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_10" className="post-title">
                Teja Kummarikuntla
              </a>
              <span>Next Post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_9;

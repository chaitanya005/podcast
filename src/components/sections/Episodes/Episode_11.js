import React from "react";

const ep_11 = () => {
  return (
    <div class="col-12 col-lg-8 col-xl-9">
      <div class="pr-lg-4 mb-100">
        <div class="post-details-content">
          <div class="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_11/youtube_banner_s.jpg"
              alt=""
            />
          </div>

          <h4 class="post-title">
            Miguel Morales: On How Reinforcement Learning Aligned With Human
            Learnings
          </h4>

          <div class="post-meta">
            <a class="post-date">
              <i class="zmdi zmdi-alarm-check"></i> August 31, 2020
            </a>
            <a class="post-author" href="https://www.linkedin.com/in/mimoralea">
              <i class="zmdi zmdi-account"></i> Miguel Morales
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/5e13nDd91PTOycmR1LCACd"
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
            Miguel is the staff software engineer at Lockheed Martin and works
            on Reinforcement learning, Missiles, Fire control, and Autonomous
            Systems in Denver. He is a part-time Instructional Associate at
            Georgia Institute of Technology for the course in Reinforcement
            Learning and Decision Making. He developed the Actor-critic lectures
            for Udacity Deep Reinforcement learning Nanodegree. Miguel holds a
            Master’s degree in computer science specializing in interactive
            intelligence. On top of all of that, he’s the author of the
            incredible book “Grokking Deep Reinforcement Learning’. If you are
            the one looking to adopt self-learning and Reinforcement learning,
            this episode will definitely help you
          </p>
          <p>Thank you so much for joining us Miguel.</p>
          <h4>Episode Highlights</h4>

          <blockquote class="confer-blockquote">
            <h5>
              You wanna write a blog post, the challenging part is to get your
              computer, right the first few words, once you beat that, that's it
              you're hooked, you're writing, you're writing horribly and then
              you're writing better and then you're writing awesome, right. So,
              it is very interesting because the challenge is not to write, the
              problem is like you go like, "Oh, but I need to go write this
              whole book", don't do that, don't write the whole book, just write
              three words.
            </h5>
          </blockquote>
          <h4>Give Away</h4>
          <div>
            <p>
              {" "}
              Get a chance to grab Miguel’s Book{" "}
              <a href="https://bit.ly/3hHbNjz">
                <b>“Grokking Deep Reinforcement Learning”</b>
              </a>{" "}
              from Manning Publications by joining in the Giveaway. Join the
              giveaway at{" "}
              <a href="https://linktr.ee/tejakummarikuntla">
                <i>linktr.ee/tejakummarikuntla</i>
              </a>{" "}
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <img
              className="mb-30"
              src="/img/Podcast/episodes/ep_11/giveaway/giveaway_banner.jpg"
              alt=""
              style={{ borderRadius: "10px" }}
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
              <a href="/episodes/ep_10">
                <img src="../img/Podcast/Exploiting_v2_400s.png" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_10" className="post-title">
                Teja Kummarikuntla
              </a>
              <span>Previous Post</span>
            </div>
          </div>
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep_12">
                <img src="../img/Podcast/Exploiting_v2_400s.png" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep_12" className="post-title">
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

export default ep_11;

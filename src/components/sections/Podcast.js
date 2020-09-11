import React from "react";

const Podcast = () => {
  return (
    <>
      <a name="podcast"></a>
      <section
        className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60"
        id="our-blog-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading text-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <p>Latest</p>
                <h4>Episodes</h4>
              </div>
            </div>
            <div class="single-blog-area wow fadeInUp">
              <div class="card" data-wow-delay="300ms">
                <div class="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/68j3t4eHwWY9GBaXPzoWR0"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a
                      class="blog-title"
                      href="/episodes/ep_12"
                      target="_blank"
                    >
                      Unicast: On Chasing Grit With Transformation
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> Aug 24, 2020
                      </a>
                      <a
                        class="post-author"
                        href="https://www.linkedin.com/in/tejakummarikuntla/"
                        target="_blank"
                      >
                        <i class="zmdi zmdi-account"></i> Teja Kummarikuntla
                      </a>
                    </div>
                    <p>
                      Angela Duckworth defines, Grit is a passion and sustained
                      persistence applied towards long-term achievement, the
                      secret to that outstanding achievement is not talent but
                      grit, it’s a special blend of passion and persistence
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_12" target="_blank">
                    <i class="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="single-blog-area wow fadeInUp">
              <div class="card" data-wow-delay="300ms">
                <div class="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/5e13nDd91PTOycmR1LCACd                      "
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a
                      class="blog-title"
                      href="/episodes/ep_11"
                      target="_blank"
                    >
                      Miguel Morales: On How Reinforcement Learning Aligned With
                      Human Learnings
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> Aug 31, 2020
                      </a>
                      <a
                        class="post-author"
                        href="https://www.linkedin.com/in/mimoralea"
                        target="_blank"
                      >
                        <i class="zmdi zmdi-account"></i> Miguel Morales
                      </a>
                    </div>
                    <p>
                      Miguel is the staff software engineer at Lockheed Martin
                      and works on Reinforcement learning, Missiles, Fire
                      control, and Autonomous Systems in Denver. He is a
                      part-time Instructional Associate at Georgia Institute of
                      Technology for the course in Reinforcement Learning and
                      Decision Making
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_11" target="_blank">
                    <i class="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div
            className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <a
              className="btn confer-btn-white"
              href="/episodes/all"
              target="_self"
            >
              View all <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;

import React from "react";
import MyComment from "../DisqusCom";

const sidebar_4 = () => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className="confer-sidebar-area mb-100">
          <div className="single-widget-area">
            <div className="post-author-widget">
              <div className="post-author-avatar">
                <img
                  src="../img/Podcast/episodes/ep_2/guest/saikiran.jpg"
                  alt=""
                />
              </div>
              <div className="post-author-content">
                <h5>Sai Kiran</h5>
                <span>Founder and Director, LetsUpgrade</span>
                <a target="_blank" href="http://letsupgrade.in/">
                  LetsUpgrade
                </a>
              </div>
              <div className="author-social-info">
                <a
                  target="_balnk"
                  href="https://twitter.com/sai_sondarkar?lang=en"
                >
                  <i className="zmdi zmdi-twitter"></i>
                </a>
                <a target="_balnk" href="https://www.linkedin.com/in/saisdkr/">
                  <i className="zmdi zmdi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="single-widget-area">
            <h5 className="widget-title mb-30">Listen on:</h5>

            <ul className="tag-cloud">
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=Bkj8U-4Fm-M&t=105s"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://open.spotify.com/episode/5tcTFKP4R3ZJbi9vDZ4htG"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://podcasts.apple.com/us/podcast/saikiran-sondarkar-on-disrupting-education-letsupgrade/id1517209695?i=1000477973991"
                >
                  Apple Podcast
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/ZjllYjk5MjQtZjJjMy00NzAwLWIwNDQtYjRlMzcwOTkzMjZk?sa=X&ved=2ahUKEwiv4OyfzITrAhXSpekKHb8aC-YQkfYCegQIARAF"
                >
                  Google Podcast
                </a>
              </li>
            </ul>
          </div>

          <div className="single-widget-area">
            <h5 className="widget-title mb-30">Categories</h5>
            <ul className="categories-list">
              <li>
                <a href="#">
                  Technology <span></span>
                </a>
              </li>
              <li>
                <a href="#">
                  Startups <span></span>
                </a>
              </li>
              <li>
                <a href="#">
                  Community <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar_4;

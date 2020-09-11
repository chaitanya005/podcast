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
                  src="../img/Podcast/episodes/ep_4/guest/luisserrano.jpg"
                  alt=""
                />
              </div>
              <div className="post-author-content">
                <h5>Luis Serrano</h5>
                <span>Quantam AI Research Scientist, Zapata Computing</span>
                <a target="_blank" href="https://serrano.academy/">
                  Serrano Academy
                </a>
              </div>
              <div className="author-social-info">
                <a target="_balnk" href="https://twitter.com/luis_likes_math">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
                <a
                  target="_balnk"
                  href="https://www.linkedin.com/in/luisgserrano/"
                >
                  <i className="zmdi zmdi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="single-widget-area">
            <h5 className="widget-title mb-30">Listen on:</h5>

            <ul className="tag-cloud">
              <li>
                <a target="_blank" href="https://youtu.be/PLs8ih-FwjU">
                  YouTube
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://open.spotify.com/episode/2CITL9oJJYtJVSIDR22VNr"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://podcasts.apple.com/us/podcast/exploiting-with-teja-kummarikuntla/id1517209695"
                >
                  Apple Podcast
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/YjNiY2VjYjAtYjliOS00ZmJjLTljNWEtMDVlOGYyZTlmOTY4?ved=2ahUKEwi326Clt9LqAhXFDrcAHVLRD7gQkfYCegQIARAF"
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

          <div className="single-widget-area">
            <h5 className="widget-title mb-30">Gallery</h5>

            <div className="sidebar-gallery">
              <div className="row">
                <div className="col-4">
                  <a
                    href="../img/Podcast/episodes/ep_4/LuisSerrano_EpisodeArt.png"
                    className="single-gallery-item"
                  >
                    <img
                      src="../img/Podcast/episodes/ep_4/LuisSerrano_EpisodeArt.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="../img/Podcast/episodes/ep_4/giveaway/LinkedinGiveaway.png"
                    className="single-gallery-item"
                  >
                    <img
                      src="../img/Podcast/episodes/ep_4/giveaway/LinkedinGiveaway.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="../img/Podcast/episodes/ep_4/giveaway/SwipeSegment.png"
                    className="single-gallery-item"
                  >
                    <img
                      src="../img/Podcast/episodes/ep_4/giveaway/SwipeSegment.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="../img/Podcast/episodes/ep_4/giveaway/Winners.png"
                    className="single-gallery-item"
                  >
                    <img
                      src="../img/Podcast/episodes/ep_4/giveaway/Winners.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="../img/Podcast/episodes/ep_4/LuisSerrano_WideBanner.png"
                    className="single-gallery-item"
                  >
                    <img
                      src="../img/Podcast/episodes/ep_4/LuisSerrano_WideBanner.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="../img/Podcast/episodes/ep_4/LuisSerrano_AMA.png"
                    className="single-gallery-item"
                  >
                    <img
                      src="../img/Podcast/episodes/ep_4/LuisSerrano_AMA.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar_4;

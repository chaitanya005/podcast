import React from "react";

const Discuss = () => {
  return (
    <>
      <div className="comment-area mb-80">
        <div className="comment_area clearfix">
          <h4 className="mb-30">Comments</h4>

          <ol>
            <li className="single_comment_area">
              <div className="comment-content d-flex">
                <div className="comment-author">
                  <img src="img/bg-img/56.jpg" alt="author" />
                </div>
                <div className="comment-meta">
                  <div className="comment-meta-data">
                    <a href="#">Beverly Price</a>
                    <span>
                      <i className="zmdi zmdi-calendar-check"></i> June 28, 2019
                      at 3:18 pm
                    </span>
                  </div>
                  <p>
                    Just practicing yoga for more than 3 months, I dropped from
                    64 kg to 58 kg. I have used many weight loss measures such
                    as medication, diet, but the effects are slow and low.
                  </p>
                  <a href="#" className="reply">
                    <i className="zmdi zmdi-mail-reply"></i> Reply
                  </a>
                </div>
              </div>

              <ol className="children">
                <li className="single_comment_area">
                  <div className="comment-content d-flex">
                    <div className="comment-author">
                      <img src="img/bg-img/57.jpg" alt="author" />
                    </div>
                    <div className="comment-meta">
                      <div className="comment-meta-data">
                        <a href="#">Jacqueline Watkins</a>
                        <span>
                          <i className="zmdi zmdi-calendar-check"></i> June 28,
                          2019 at 3:18 pm
                        </span>
                      </div>
                      <p>
                        Familiar with yoga for more than 4 years, now for me,
                        yoga is like the flesh and blood, so I don't want to
                        miss any practice.
                      </p>
                      <a href="#" className="reply">
                        <i className="zmdi zmdi-mail-reply"></i> Reply
                      </a>
                    </div>
                  </div>
                </li>
              </ol>
            </li>

            <li className="single_comment_area">
              <div className="comment-content d-flex">
                <div className="comment-author">
                  <img src="img/bg-img/58.jpg" alt="author" />
                </div>
                <div className="comment-meta">
                  <div className="comment-meta-data">
                    <a href="#">Lori Gonzales</a>
                    <span>
                      <i className="zmdi zmdi-calendar-check"></i> June 28, 2019
                      at 3:18 pm
                    </span>
                  </div>
                  <p>
                    Yoga gives me inner calm, controls emotions, escapes anger,
                    especially stamina, strong physical strength from the
                    inside.
                  </p>
                  <a href="#" className="reply">
                    <i className="zmdi zmdi-mail-reply"></i> Reply
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="confer-leave-a-reply-form clearfix">
        <h4 className="mb-30">Leave A Comment</h4>

        <div className="contact_form">
          <form action="#" method="post">
            <div className="contact_input_area">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-30"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-30"
                      name="name"
                      id="name-2"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control mb-30"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-30"
                      name="subject"
                      id="subject"
                      placeholder="Your Number"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control mb-30"
                      id="message"
                      cols="30"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn confer-btn">
                    Send Message <i className="zmdi zmdi-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Discuss;

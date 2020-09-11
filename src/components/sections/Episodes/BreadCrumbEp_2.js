import React from "react";

const BlogBreadEp_2 = () => {
  return (
    <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="page-title">Episode #2</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/episodes/all">Episodes</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Ep:2
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBreadEp_2;

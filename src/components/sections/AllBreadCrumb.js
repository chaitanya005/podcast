import React from "react";

const BreadCrumb = () => {
  return (
    <section
      class="breadcrumb-area bg-img bg-gradient-overlay jarallax"
      id="breadcrumb-area"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="page-title">All Episodes</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Episodes
                  </li>
                </ol>
              </nav>
              <a
                class="blog-title"
                style={{ color: "white", fontSize: "large" }}
              >
                Exploiting with Teja Kummarikuntla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;

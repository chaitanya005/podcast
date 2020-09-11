import React from "react";
import Team from "./Team";
import Advisory from "./Advisory.js";

const TeamTest = () => {
  return (
    <>
      <section
        class="breadcrumb-area bg-img bg-gradient-overlay jarallax"
        id="breadcrumb-area"
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="breadcrumb-content">
                <h2 class="page-title">Team</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      team
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="our-schedule-area section-padding-100"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/*Tab Switch*/}
              <div class="schedule-tab">
                <ul
                  class="nav nav-tabs wow fadeInUp"
                  data-wow-delay="300ms"
                  id="conferScheduleTab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="monday-tab"
                      data-toggle="tab"
                      href="#step-one"
                      role="tab"
                      aria-controls="step-one"
                      aria-expanded="true"
                    >
                      Technical
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="tuesday-tab"
                      data-toggle="tab"
                      href="#step-two"
                      role="tab"
                      aria-controls="step-two"
                      aria-expanded="true"
                    >
                      Advisory
                    </a>
                  </li>
                </ul>
              </div>

              {/*Tab Content */}

              <div class="tab-content" id="conferScheduleTabContent">
                {/*Team Tab */}
                <div
                  class="tab-pane fade show active"
                  id="step-one"
                  role="tabpanel"
                  aria-labelledby="monday-tab"
                >
                  <div class="single-tab-content">
                    <div class="row">
                      <div class="col-12">
                        <Team />
                      </div>
                    </div>
                  </div>
                </div>

                {/*Adivsory Tab */}
                <div
                  class="tab-pane fade"
                  id="step-two"
                  role="tabpanel"
                  aria-labelledby="tuesday-tab"
                >
                  <div class="single-tab-content">
                    <div class="row">
                      <div class="col-12">
                        <Advisory />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamTest;

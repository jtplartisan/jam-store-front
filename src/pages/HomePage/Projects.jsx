import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Projects = () => {
  return (
    <>
      <section class="sectionProject section-no-border section-angled section-dark pb-0 m-0">
        <div
          class="section-angled-layer-top section-angled-layer-increase-angle bg-color-grey"
          style={{ padding: "4rem 0;" }}
        ></div>
        <div class="spacer py-md-4 my-md-5"></div>
        <div class="container pt-5 mt-5">
          <div class="row align-items-center pt-md-5 mt-5">
            <div class="col-lg-6 offset-lg-1 position-relative mb-5">
              <div
                class="appear-animation animated fadeIn appear-animation-visible"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="500"
              >
                {/* <img src="img/landing/porto_dots.png" data-src="img/landing/porto_dots.png" width="154" height="146" class="position-absolute top-auto ls-is-cached lazyloaded" alt="6 reasons" data-plugin-float-element="" data-plugin-options="{'startPos': 'none', 'speed': 3, 'transition': true}" style="bottom: 184px; left: 70px; transition: transform 500ms ease-out 0ms; transform: translate3d(0px, 11.4013%, 0px);"> */}
              </div>
              {/* <div class="text-reasons">
                <label
                  class="text-color-light appear-animation z-index-1 animated blurIn appear-animation-visible"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="250"
                  data-appear-animation-duration="750"
                >
                  6
                </label>
                <div className="text-reasons-headings">
                  <h3
                    class="text-4 text-md-6 appear-animation animated fadeInRightShorter appear-animation-visible"
                    data-appear-animation="fadeInRightShorter"
                    data-appear-animation-delay="450"
                    data-appear-animation-duration="750"
                  >
                    Reasons
                  </h3>
                  <h3
                    class="text-4 text-md-6 appear-animation animated fadeInRightShorter appear-animation-visible"
                    data-appear-animation="fadeInRightShorter"
                    data-appear-animation-delay="750"
                    data-appear-animation-duration="750"
                  >
                    Why you should choose
                  </h3>
                  <h3
                    class="text-4 text-md-6 appear-animation animated fadeInRightShorter appear-animation-visible"
                    data-appear-animation="fadeInRightShorter"
                    data-appear-animation-delay="950"
                    data-appear-animation-duration="750"
                  >
                    <span class="highlight-word light">Porto</span>
                  </h3>
                </div>
              </div> */}
            </div>
            <div class="col-lg-5 col-xl-4 ps-lg-4 ps-xl-5 mb-5">
              <h2
                class="text-6 font-weight-semibold line-height-2 mb-2 appear-animation animated fadeInRightShorter appear-animation-visible"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="1150"
                data-appear-animation-duration="750"
              >
                With Porto your satisfaction is guaranteed.
              </h2>
              <p
                class="custom-text-color-1 line-height-5 appear-animation animated fadeInRightShorter appear-animation-visible"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="1350"
                data-appear-animation-duration="750"
              >
                We have selected the 6 top reasons to choose Porto. Check below:
              </p>
            </div>
          </div>
          <div class="row justify-content-center mt-md-5 mb-4 pt-lg-4">
            <div class="col-lg-11">
              <div class="row justify-content-center">
                <div
                  class="col-10 col-sm-6 mt-3 col-lg-4 image-box appear-animation animated fadeInUpShorter appear-animation-visible"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="600"
                  data-appear-animation-duration="750"
                >
                  <MDBCard>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                        fluid
                        alt="..."
                      />
                      <a>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <span className="text-white">project name</span>
                      <h2 className="text-white" style={{letterSpacing:'2px'}}>Card title</h2>
                      <MDBCardText className="text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </div>
                <div
                  class="col-10 mt-3 col-sm-6 col-lg-4 image-box appear-animation animated fadeInUpShorter appear-animation-visible"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="600"
                  data-appear-animation-duration="750"
                >
                  <MDBCard>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                        fluid
                        alt="..."
                      />
                      <a>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <span className="text-white">project name</span>
                      <h2 className="text-white" style={{letterSpacing:'2px'}}>Card title</h2>
                      <MDBCardText className="text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </div>
                <div
                  class="col-10 mt-3 col-sm-6 col-lg-4 image-box appear-animation animated fadeInUpShorter appear-animation-visible"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="600"
                  data-appear-animation-duration="750"
                >
                  <MDBCard>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                        fluid
                        alt="..."
                      />
                      <a>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <span className="text-white">project name</span>
                      <h2 className="text-white" style={{letterSpacing:'2px'}}>Card title</h2>
                      <MDBCardText className="text-white">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center pb-5">
            <a
              href="https://themeforest.net/checkout/from_item/4106987?license=regular&amp;support=bundle_6month&amp;ref=Okler"
              class="btn btn-dark btn-rounded btn-modern btn-px-5 text-3 appear-animation animated fadeIn appear-animation-visible"
              data-appear-animation="fadeIn"
              data-appear-animation-delay="300"
              target="_blank"
            >
              BUY PORTO NOW!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

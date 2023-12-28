import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from "mdb-react-ui-kit";

const Landing = () => {
  return (
    <>
    <div className="container-fluid landingPage">
      <div className="row align-items-center  justify-content-around">
        <div className="col-md-5 landingSideLeft ">
          <h6>PORTO HTML5 TEMPLATE</h6>
          <h1 className="display-3 landingHeading ">
            Multipurpose Website Template
          </h1>
          <p className="text-muted mt-3 ">
            Porto is simply the best choice for your new website. <br />
            The template is several years among the most popular in the world.
          </p>
          <div className="landingCount">
            <div className="landCount">
              <h1 className="display-3 landingHeading ">85+</h1>
              <p
                className="text-muted"
                style={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  letterSpacing: "2px",
                }}
                >
                PREBUILT WEBSITES
              </p>
            </div>
            <div className="landCount">
              <h1 className="display-3 landingHeading ">45+</h1>
              <p
                className="text-muted"
                style={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  letterSpacing: "2px",
                }}
                >
                PREBUILT WEBSITES
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-3">

          <MDBCard className="position-relative">
            <MDBCardBody>
              <MDBCarousel fade>
                <MDBCarouselItem itemId={1}>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    className="d-block w-100"
                    alt="..."
                    />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    className="d-block w-100"
                    alt="..."
                    />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    className="d-block w-100"
                    alt="..."
                    />
                </MDBCarouselItem>
              </MDBCarousel>
              <div className="carauselDiv">
<div className="item1">  <h6> <MDBIcon style={{fontSize:'22px',marginRight:'3px'}} fab icon="bootstrap" /> Bootstrap</h6></div>
<div className="item1"> <h6> <MDBIcon style={{fontSize:'22px',marginRight:'3px'}} fab icon="bootstrap" /> Bootstrap</h6></div>
<div className="item1"> <h6> <MDBIcon style={{fontSize:'22px',marginRight:'3px'}} fab icon="bootstrap" /> Bootstrap</h6></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        
        </div>
      </div>
    </div>
    <div class="container-fluid position-relative">
						<div class="row justify-content-center  stickyDown">
							<div class="col-md-8  custom-header-bar position-relative py-4 pe-5 z-index-2">
								<div >
									<div class="star-rating-wrap d-flex align-items-center justify-content-center position-relative text-dark text-5 py-2 mb-2">
										<i class="fas fa-star"></i><i class="fas fa-star ms-1"></i><i class="fas fa-star ms-1"></i><i class="fas fa-star ms-1"></i><i class="fas fa-star ms-1"></i>
									</div>

									<h3 class="position-relative text-center font-weight-bold text-7  text-white fw-bold line-height-2 mb-0">Popular HTML5 Site Template</h3>

									<p class="position-relative text-center  mb-1">* 45K+ Trust Porto - Since 2013</p>
								</div>
							</div>
						</div>
					</div>
                    </>
  );
};

export default Landing;

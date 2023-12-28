import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import Projects from "./Projects";
import Introduction from "./Introduction";
import Speciality from "./Speciality";

const SectionCustom = () => {
  return (
    <div className="sectionCustom">
      <div className="container-fluid mt-5 ">
        <div className="container section pt-5 sectionOne">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-4">
              <h2 class="text-7 font-weight-semibold line-height-2 mb-2">
                The new generation of website templates is here.
              </h2>
              <p className="text-muted fw-semibold mt-4">
                A complete suite of tools designed to make life easier with a
                top quality website templates.
              </p>
            </div>
            <div class="col-sm-4 col-lg-auto icon-box text-center mb-4">
              <MDBIcon
                style={{ fontSize: "64px" }}
                className="mb-3"
                fas
                icon="tachometer-alt"
              />
              <h4 class="font-weight-bold  custom-font-size-2 line-height-3 mb-0">
                Super High
                <br />
                Performance
              </h4>
            </div>
            <div class="col-sm-4 col-lg-auto icon-box text-center mb-4">
              <MDBIcon
                style={{ fontSize: "64px" }}
                className="mb-3"
                fas
                icon="desktop"
              />
              <h4 class="font-weight-bold custom-font-size-2 line-height-3 mb-0">
                Created with Top
                <br />
                Plugins and Extensions
              </h4>
            </div>
            <div class="col-sm-4 col-lg-auto icon-box text-center mb-4">
              <MDBIcon
                style={{ fontSize: "64px" }}
                className="mb-3"
                fas
                icon="desktop"
              />
              <h4 class="font-weight-bold custom-font-size-2 line-height-3 mb-0">
                Extremely Easy
                <br />
                to Customize
              </h4>
            </div>
            <div class="col-sm-12">
              <hr class="my-5" />
              <h1 class="font-weight-bold text-center text-10 pt-3 mb-4">
                The Most Customizable + Solid and Tested Base
              </h1>
            </div>
            <div class="col-lg-8 offset-lg-2 px-lg-0 text-center">
              <p class="text-4 text-center text-muted font-weight-bold">
                Porto has a huge variety of options and features to create your
                site, it has also a very solid based that is being improved and
                tested by professional developers since 2013.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          className="row justify-content-center mt-5"
        >
          <div
            className="col-md-11"
            style={{
              position: "absolute",
              zIndex: "100",
              top: "-85px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="images/theme.png"
              style={{ width: "900px" }}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      <Projects />
      <Introduction />
      <Speciality />
    </div>
  );
};

export default SectionCustom;

import React from "react";

const Layouts = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h1 className="headingCommon">Layouts</h1>
        <span className="subHeadingCommon my-3">
          {" "}
          GIANT LIBRARY OF VARIATIONS
        </span>
        <p className="text-center text-muted paragraph mb-3">
          Giant variety of layouts to create your site with unlimited
          possibilities.
        </p>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <img src="images/portoLayout.png" alt="" />
              </div>
              <h4 className="text-center my-3 fw-bold">Layouts </h4>
              <p className="text-center text-muted">
                Max Width 1200px, 1170px, 1024px, full width, etc...
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <img src="images/portoLayout.png" alt="" />
              </div>
              <h4 className="text-center my-3 fw-bold">Layouts </h4>
              <p className="text-center text-muted">
                Max Width 1200px, 1170px, 1024px, full width, etc...
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <img src="images/portoLayout.png" alt="" />
              </div>
              <h4 className="text-center my-3 fw-bold">Layouts </h4>
              <p className="text-center text-muted">
                Max Width 1200px, 1170px, 1024px, full width, etc...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;

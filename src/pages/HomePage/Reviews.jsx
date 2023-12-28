import React from "react";

const Reviews = () => {
  return (
    <div className="container-fluid mt-4 py-4 reviewContainer">
      <div className="row">
      <h1
        className="text-center"
        style={{ fontWeight: "800", fontSize: "74px" }}
      >
        45K+
      </h1>
      <h1
        className="text-center"
        style={{ fontSize: "32px", fontWeight: "700" }}
      >
        People Already Using Porto
      </h1>
      <p className="fw-bold text-center text-muted">
        100K+ IN ALL PORTO VERSIONS
      </p>
      <span className="subHeading"></span>
      <p className="text-center text-muted">
        Real people, real stories. Hear from our community.
      </p>

        <button className="btnBuyNow ">Buy Now </button>

      </div>
    </div>
  );
};

export default Reviews;

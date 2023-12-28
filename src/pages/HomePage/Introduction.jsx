import React from "react";

const Introduction = () => {
  return (
    <div className="container introduction mt-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-6">
          <h1 className="text-center subHeadingCommon">Introducing Porto Admin</h1>
          <h4 className="text-center headingCommon">ADMIN WITH SAME LOOK FEEL AS THE FRONT-END</h4>
          <p className="text-center text-muted mt-4">
            Porto Admin integration give you a package of new features to add in
            the front-end template, such as advanced tables, advanced forms,
            etc... Also allows you to create the back-end of your site using the
            same design.
          </p>
          <button className="introBtn">View porto Admin</button>
        </div>
          <div className="col-md-5">
            <img
              src="https://www.okler.net/previews/porto/10.0.0/img/landing/porto_admin.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
      </div>
    </div>
  );
};

export default Introduction;

import React from "react";
import yahoo_new from "../assets/image/png/Yahoo_news.png";
import yahoo_life from "../assets/image/png/yahoo_life.png";
import yahool_finance from "../assets/image/png/yahool_finance.png";
import trending from "../assets/image/png/trending.png";

function FeaturedOn() {
  return (
    <>
      <section className="bg_blur_white py-lg-5">
        <div className="container py-4 py-sm-5">
          <h2 className="mb-0 ff_kon fw_400 fs_2xl"> Featured on</h2>
          <div className="row align-items-center justify-content-center  mt-5">
            <div className="my-3 my-lg-0 col-6 col-md-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-center justify-content-xxl-start">
                <a href="#">
                  <img className="w-75 " src={yahoo_new} alt="yahoo_new" />
                </a>
              </div>
            </div>
            <div className="my-3 my-lg-0 col-6 col-md-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-center justify-content-xxl-start">
                <a href="#">
                  <img
                    className="w-75 "
                    src={yahool_finance}
                    alt="yahool_finance"
                  />
                </a>
              </div>
            </div>
            <div className="my-3 my-lg-0 col-6 col-md-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-center justify-content-xxl-start">
                <a href="#">
                  <img className="w-75 " src={yahoo_new} alt="yahoo_new" />
                </a>
              </div>
            </div>
            <div className="my-3 my-lg-0 col-6 col-md-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-center justify-content-xxl-start">
                <a href="#">
                  <img className="w-75 " src={trending} alt="trending" />
                </a>
              </div>
            </div>
            <div className="my-3 my-lg-0 col-6 col-md-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-center justify-content-xxl-start">
                <a href="#">
                  <img className="w-75 " src={yahoo_life} alt="yahoo_life" />
                </a>
              </div>
            </div>
            <div className="my-3 my-lg-0 col-6 col-md-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-center justify-content-xxl-start">
                <a href="#">
                  <img className="w-75 " src={trending} alt="trending" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedOn;

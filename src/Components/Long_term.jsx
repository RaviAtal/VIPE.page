import React from "react";
import ciela from "../assets/image/svg/ciela.svg";
import propy from "../assets/image/svg/propy.svg";
import ravuele from "../assets/image/svg/revuele.svg";
import spark from "../assets/image/svg/spark.svg";

function Long_term() {
  return (
    <section>
      <div className="bg_white">
        <div className=" container py-4 py-sm-5">
          <div className="col-xl-7">
            <h3 className="fs_2xl fw_400 ff_kon text-center text-sm-start">
              Long Term WordPress Partner
            </h3>
            <p className="fs_xsm fw_400 ff_gil clr_darklight mb-0 mt-3 text-center text-sm-start">
              Our motto is the long-term partnership – we will not only develop
              your perfect website, but will be behind you through the whole
              process. They already trusted us:
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-sm-start my-4 my-xl-5">
              <img className="w-75" src={propy} alt="logo" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-sm-start my-4 my-xl-5">
              <img className="w-75" src={ciela} alt="logo" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-sm-start my-4 my-xl-5">
              <img className="w-75" src={ravuele} alt="logo" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-sm-start my-4 my-xl-5">
              <img className="w-75" src={ciela} alt="logo" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-sm-start my-4 my-xl-5">
              <img className="w-75" src={spark} alt="logo" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center justify-content-sm-start my-4 my-xl-5">
              <img className="w-75" src={ciela} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Long_term;

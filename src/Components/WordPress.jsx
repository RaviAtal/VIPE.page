import React from "react";
import img1 from "../assets/image/png/img1.png";

function WordPress() {
  return (
    <section className="bg-white">
      <div className="container py-4 py-sm-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-5">
            <img className="w-100" src={img1} alt="business_people" />
          </div>
          <div className="col-lg-6 col-xl-7">
            <h6 className="fs_2xl fw_400 ff_kon mt-3 my-xl-0">
              <span className="clr_blue">Agile WordPress </span>
              Development Project management
            </h6>
            <p className="clr_lightgrey fs_xsm fw_400 ff_gil mb-4 pt-2 mw_572">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>
            <button className="btn text-white ff_gil fs_sm fw_600 button_cont rounded-5 px-4">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WordPress;

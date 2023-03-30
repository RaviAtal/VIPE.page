import React from "react";
import business_people from "../assets/image/png/business_people.png";

function Team() {
  return (
    <section className="bg_white h_480 align-items-center d-flex">
      <div className="container py-4 py-sm-5">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fs_2xl fw_400 ff_kon">Team Full of Stars</h5>
            <p className="fs_xsm fw_400 ff_gil mw_476">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>
            <button className="btn text-white ff_gil fs_sm fw_600 button_cont rounded-5 d-inline-block mt-4 px-4">
              Explore
            </button>
          </div>
          <div className="col-md-6 position-relative">
            <img
              className="w-100 position-absolute top_10"
              src={business_people}
              alt="business_people"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

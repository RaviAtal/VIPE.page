import React from "react";
import tick from "../assets/image/svg/tick.svg";
import tick_1 from "../assets/image/svg/tick1.svg";
import girl from "../assets/image/png/girl.png";

export default function VipeStudio() {
  return (
    <>
      <section className="bg-black">
        <div className="container py-4 py-sm-5 ">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <h2 className="ff_kon fw_400 fs_xl text-white">
                All Vipe Studio WordPress services include:
              </h2>
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <h4 className="ff_gil fw_600 fs_md text-white mb-4">
                By Industry
              </h4>
              <ul className="p-0 m-0">
                <li>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Lorem in elementum pellentesque
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Molestie cursus praesent mi
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Leo sed viverra cras
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Laoreet feugiat ut at
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Risus aliquam molestie viverra
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Diam enim pulvinar velit
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <h4 className="ff_gil fw_600 fs_md text-white mb-4">
                By Services
              </h4>
              <ul className="p-0 m-0">
                <li>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Accumsan, dui a semper
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Interdum malesuada vulputate neque
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Nullam non a, morbi
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Arcu morbi leo eu
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Viverra venenatis, in ornare
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={tick} alt="tick" />
                    <p className="mb-0 ff_gil fw_400 fs_xsm text-white ps-3">
                      Erat id aliquam habitant
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="blk_box mt-4 mt-sm-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4">
                <h3 className="ff_kon fw_400 fs_lg text-white mw_324 mb-4">
                  Not Sure which service you need yet?
                </h3>
                <a
                  href="#"
                  className="ff_gil fw_600 fs_xsm button_cont px-4 py-2 text-white rounded-4 mt-3 d-inline-block"
                >
                  Schedule An Appointment
                </a>
              </div>
              <div className="col-md-6 col-lg-4 my-4 mt-lg-0">
                <p className="ff_gil fw_700 fs_md text-white mb-4">
                  20-m free consultation that will help us identifyif you need
                </p>
                <div className="d-flex align-items-center mb-3">
                  <img src={tick_1} alt="tick_1" />
                  <p className="ff_gil fw_400 fs_xsm text-white ps-2 mb-0">
                    Technical Description & Discovery
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src={tick_1} alt="tick_1" />
                  <p className="ff_gil fw_400 fs_xsm text-white ps-2 mb-0">
                    Custom WordPress Development
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src={tick_1} alt="tick_1" />
                  <p className="ff_gil fw_400 fs_xsm text-white ps-2 mb-0">
                    Support & Maintenance
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src={tick_1} alt="tick_1" />
                  <p className="ff_gil fw_400 fs_xsm text-white ps-2 mb-0">
                    Other WordPress Service
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-lg-end">
                <img className="w_100 w_90" src={girl} alt="girl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

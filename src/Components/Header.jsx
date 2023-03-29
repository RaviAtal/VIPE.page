import React from "react";
import Nav_bar from "./Nav_bar";
import team_img from "../assets/image/png/Hero_img.png";
import play from "../assets/image/svg/play_hero.svg";

function Header() {
  return (
    <>
      <section className="bg-black d-flex flex-column min-vh-100">
        <Nav_bar />
        <div className="container py-4 py-lg-5 flex-grow-1">
          <div className="row justify-content-between flex-column-reverse flex-lg-row">
            {/* text_part */}
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="text-white ff_kon fs_3xl mb-0">
                  WordPress Development Agency
                </h1>
                <p className="ff_gil fw_700 fs_md text-white mb-0 pt-4">
                  for Enterprise + Friendly Team
                </p>
                <p className="ff_gil fw_700 fs_xsm text-white mb-0 pt-3 opacity-75">
                  Vipe Studio is a WordPress Agency for development - a
                  long-term partner for any WordPress service. Websites
                  and,online shops development, maintenance and customization is
                  what we do best.
                </p>
                <div className="d-flex align-items-center pt-4 gap-4">
                  <button className="btn text-white ff_gil fs_sm fw_600 button_cont rounded-5 px-4 py-2 mb-0">
                    Get Started
                  </button>
                  <p className="mb-0 ff_gil fw_400 fs_xsm text-white opacity-75">
                    <img className="pe-3" src={play} alt="play" />
                    What is Vipe? (1min)
                  </p>
                </div>
              </div>
            </div>

            {/* img */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <img className="w-100" src={team_img} alt="team_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

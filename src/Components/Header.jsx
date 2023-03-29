import React from "react";
import Nav_bar from "./Nav_bar";

function Header() {
  return (
    <>
      <section className="bg-black min-vh-100">
        <Nav_bar />
        <div className="container py-4 py-lg-5">
          <div className="row">
            {/* text_part */}
            <div className="col-6">
              <div className="align-items-center">
                <h1 className="text-white ff_kon">
                  WordPress Development Agency
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

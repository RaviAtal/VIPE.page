import React, { useState } from "react";
import Logo from "../assets/image/svj/Logo.svg";
import glob from "../assets/image/png/global_img.png";
import menu from "../assets/image/png/menu.png";

function Nav_bar() {
  return (
    <>
      <nav>
        <div className="container py-4 py-lg-5">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-lg-none">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="d-none d-lg-flex align-items-center gap-4">
              <img src={Logo} alt="Logo" />
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white ff_gil fs_xsm fw_400"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WordPress Solution
                </a>
                <ul class="dropdown-menu bg_drop ms-1">
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white ff_gil fs_xsm fw_400"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu bg_drop ms-1">
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="text-white ff_gil fs_xsm fw_400" href="/">
                  Portfolio
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white ff_gil fs_xsm fw_400"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu bg_drop ms-1">
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-black ff_gil fs_xsm fw_400"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="text-white ff_gil fs_xsm fw_400" href="/">
                  Blog
                </a>
              </li>
            </div>
            <div className="d-xxl-none">
              <img className="w_40" src={menu} alt="menu" />
            </div>
            <div className="d-none d-xxl-flex">
              <ul className="d-flex align-items-center gap-4 mb-0">
                <li>
                  <a className="text-white ff_gil fs_xsm fw_400" href="/">
                    1 888 266-6917 (eu?)
                  </a>
                </li>
                <button className="btn text-white ff_gil fs_sm fw_600 button_cont rounded-5 px-4">
                  Contact Us
                </button>
                <hr className="line_after" />
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white ff_gil fs_xsm fw_400"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img className="me-1" src={glob} alt="glob" /> Eng
                  </a>
                  <ul class="dropdown-menu bg_drop ms-1">
                    <li>
                      <a
                        class="dropdown-item text-black ff_gil fs_xsm fw_400"
                        href="#"
                      >
                        Hindi
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-black ff_gil fs_xsm fw_400"
                        href="#"
                      >
                        French
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-black ff_gil fs_xsm fw_400"
                        href="#"
                      >
                        Mandarin Chinese
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav_bar;

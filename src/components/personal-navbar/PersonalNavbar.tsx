import React from "react";
import { NavHashLink } from "react-router-hash-link";
// import { ScrollspyNav } from "react-scrollspy-nav";

import "./PersonalNavbar.scss";

const PersonalNavbar = () => {
  return (
    <header className="d-flex align-items-center sticky-top header-nav border-bottom">
      <div className="container d-flex align-items-center justify-content-center">
        {/* <div className="logo"></div> */}
        <nav id="navbar" className="navbar navbar-expand">
          <ul className="nav justify-content-center">
            {/* <li className="nav-item">
              <NavHashLink
                smooth
                to="/#"
                className="nav-link scrollto"
                activeClassName=""
              >
                Home
              </NavHashLink>
            </li> */}
            <li className="nav-item">
              <NavHashLink smooth to="#about" className="nav-link scrollto">
                About
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink smooth to="#skills" className="nav-link scrollto">
                Skills
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink smooth to="#resume" className="nav-link scrollto">
                Resume
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink smooth to="/#projects" className="nav-link scrollto">
                Projects
              </NavHashLink>
            </li>
          </ul>
          {/* <List className="mobile-nav-toggle" /> */}
        </nav>
      </div>
    </header>
  );
};

export default PersonalNavbar;

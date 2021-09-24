import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { Navbar, Container, NavDropdown } from "react-bootstrap";

import "./PersonalNavbar.scss";
import { List } from "react-bootstrap-icons";

const PersonalNavbar = () => {
  return (
    <header className="d-flex align-items-center sticky-top header-nav border-bottom">
      <div className="container d-flex align-items-center justify-content-center">
        {/* <div className="logo"></div> */}
        <nav id="navbar" className="navbar navbar-expand">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavHashLink
                smooth
                to="/#"
                className="nav-link scrollto"
                activeClassName="active"
              >
                Home
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to="/#about"
                className="nav-link scrollto"
                activeClassName="active"
              >
                About
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to="/#skills"
                className="nav-link scrollto"
                activeClassName="active"
              >
                Skills
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to="/#resume"
                className="nav-link scrollto"
                activeClassName="active"
              >
                Resume
              </NavHashLink>
            </li>

            {/* <li className="nav-item">
              <NavHashLink
                smooth
                to="/#portfolio"
                className="nav-link scrollto"
                activeClassName="active"
              >
                Portfolio
              </NavHashLink>
            </li> */}
          </ul>
          <List className="mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default PersonalNavbar;

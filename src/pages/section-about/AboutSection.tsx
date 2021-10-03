import React from "react";

import TitlelessSection from "components/section-no-title/TitlelessSection";

import "./AboutSection.scss";
import {
  EnvelopeFill,
  Facebook,
  GeoFill,
  Github,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

const AboutSection = () => {
  return (
    <TitlelessSection id="about">
      <div className="container">
        <div className="row no-gutters">
          <div className="about-image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="about-content d-flex flex-column justify-content-center">
              <div>
                <h2>About Me</h2>
              </div>
              <div className="row">
                <p>
                  I'm studying Computer Science so I can pursue a career in CS
                  and robotics to make people's lives easier and automate work
                  that is dangerous or tedious for humans to do.
                </p>
              </div>

              <div className="row justify-content-center">
                <div className="col-auto social-links">
                  <a
                    href="https://github.com/plusparth"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Github />
                  </a>
                </div>
                <div className="col-auto social-links">
                  <a
                    href="https://www.linkedin.com/in/parth-o-5b1263126/"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Linkedin />
                  </a>
                </div>
                {/* <div className="col-2 social-links">
                  <a
                    href="https://twitter.com/plusparth"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Twitter />
                  </a>
                </div> */}
                <div className="col-auto social-links">
                  <a
                    href="mailto:plusparth.website@gmail.com"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <EnvelopeFill />
                  </a>
                </div>
                {/* <div className="col-6 my-auto">
                  <div className="row contact-info">
                    <div className="d-flex align-items-center">
                      <i className="contact-logo-container d-flex align-self-center align-items-center justify-content-center">
                        <GeoFill />
                      </i>
                      <p>College Park, MD</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="contact-logo-container d-flex align-self-center align-items-center justify-content-center">
                        <EnvelopeFill />
                      </i>
                      <p>oza[at]umd[dot]edu</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TitlelessSection>
  );
};

export default AboutSection;

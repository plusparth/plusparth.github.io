import React from "react";

import TitlelessSection from "components/section-no-title/TitlelessSection";

import "./AboutSection.scss";

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
              <p>
                I'm studying Computer Science so I can pursue a career in CS and
                robotics to make people's lives easier and automate work that is
                dangerous or tedious for humans to do.
              </p>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TitlelessSection>
  );
};

export default AboutSection;

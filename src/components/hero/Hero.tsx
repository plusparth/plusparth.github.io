import React from "react";
import { HashLink } from "react-router-hash-link";
import { ChevronDown } from "react-bootstrap-icons";

import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center">
      <h1>Parth Oza</h1>
      <h2>Autonomy Products Software Engineer @ Skydio</h2>
      <HashLink to="/#about" className="btn-get-started scrollto">
        <ChevronDown />
      </HashLink>
    </section>
  );
};

export default Hero;

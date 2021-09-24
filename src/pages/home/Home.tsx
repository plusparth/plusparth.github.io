import React from "react";

import Hero from "components/hero/Hero";
import PersonalNavbar from "components/personal-navbar/PersonalNavbar";
import Section from "components/section/Section";
import AboutSection from "pages/section-about/AboutSection";
import ResumeSection from "pages/section-resume/ResumeSection";
import SkillsSection from "pages/section-skills/SkillsSection";

const Home = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0">
      <Hero></Hero>
      <PersonalNavbar></PersonalNavbar>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ResumeSection></ResumeSection>
    </div>
  );
};

export default Home;

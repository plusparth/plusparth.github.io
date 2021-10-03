import React from "react";

import Hero from "components/hero/Hero";
import PersonalNavbar from "components/personal-navbar/PersonalNavbar";
import AboutSection from "pages/section-about/AboutSection";
import ResumeSection from "pages/section-resume/ResumeSection";
import SkillsSection from "pages/section-skills/SkillsSection";
import { Waypoint } from "react-waypoint";
import ProjectsSection from "pages/section-projects/ProjectsSection";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Waypoint />
        <Hero></Hero>
        <PersonalNavbar></PersonalNavbar>
        <Waypoint />
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ResumeSection></ResumeSection>
        <ProjectsSection></ProjectsSection>
      </div>
    );
  }
}

export default Home;

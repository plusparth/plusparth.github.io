import React from "react";

import Section from "components/section/Section";
import SkillBar from "components/skill-bar/SkillBar";

import "./SkillsSection.scss";

type Skill = {
  name: string;
  percentage: number;
};

const skills: Array<Skill> = [
  {
    name: "Python (including numpy, pandas)",
    percentage: 100,
  },
  {
    name: "Java/Kotlin",
    percentage: 100,
  },
  {
    name: "C (including embedded)",
    percentage: 100,
  },
  {
    name: "React/Node.JS/JavaScript/TypeScript",
    percentage: 100,
  },
  {
    name: "HTML/CSS",
    percentage: 100,
  },
  {
    name: "Git",
    percentage: 100,
  },
  {
    name: "Bash scripting",
    percentage: 90,
  },
  {
    name: "OpenCV",
    percentage: 90,
  },
  {
    name: "PostgreSQL",
    percentage: 75,
  },
  {
    name: "Rust",
    percentage: 75,
  },
  {
    name: "Swift",
    percentage: 75,
  },
  {
    name: "TensorFlow",
    percentage: 60,
  },
];

const skillsDescription =
  "I've listed some technical skills which I have the most experience with. For reference, I've been using Java and Python at an advanced level (including developing multi-page web app backends) since the middle of high school.";

const SkillsSection = () => {
  const pairs = skills.reduce(
    (res, val, i, src) => (i % 2 === 0 ? [...res, src.slice(i, i + 2)] : res),
    [] as Skill[][]
  );

  return (
    <Section id="skills" title="Skills" description={skillsDescription} dark>
      <div className="skills-content">
        {pairs.map((pair) => (
          <div className="row">
            {pair.map((skill) => (
              <div className="col-lg-6">
                <SkillBar
                  key={skill.name}
                  title={skill.name}
                  percentage={skill.percentage}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;

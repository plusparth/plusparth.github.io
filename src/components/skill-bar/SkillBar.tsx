import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./SkillBar.scss";

type SkillBarProps = {
  title: string;
  percentage: number;
  showNumber?: boolean;
};

const SkillBar = (props: SkillBarProps) => {
  return (
    <div className="skill-bar">
      <span className="skill">
        {props.title}{" "}
        {props.showNumber && (
          <span className="number">{props.percentage}%</span>
        )}
      </span>
      <ProgressBar now={props.percentage} />
    </div>
  );
};

export default SkillBar;

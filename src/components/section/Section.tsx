import React, { PropsWithChildren } from "react";
import TitlelessSection from "../section-no-title/TitlelessSection";

import "./Section.scss";

type SectionProps = {
  id: string;
  title?: string;
  description?: string;
  dark?: boolean;
};

const Section = (props: PropsWithChildren<SectionProps>) => {
  return (
    <TitlelessSection id={props.id} dark={props.dark}>
      {props.title && (
        <div className="section-title">
          <h2>{props.title}</h2>
          {props.description && <p>{props.description}</p>}
        </div>
      )}

      {props.children}
    </TitlelessSection>
  );
};

export default Section;

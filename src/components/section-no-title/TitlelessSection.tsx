import React, { PropsWithChildren } from "react";

import "components/section/Section.scss";
import "./TitlelessSection.scss";

type TitlelessSectionProps = {
  id: string;
  dark?: boolean;
};

const TitlelessSection = (props: PropsWithChildren<TitlelessSectionProps>) => {
  return (
    <section
      id={props.id}
      className={
        props.id + " section section-" + (props.dark ? "dark" : "light")
      }
    >
      <div className="container">{props.children}</div>
    </section>
  );
};

export default TitlelessSection;

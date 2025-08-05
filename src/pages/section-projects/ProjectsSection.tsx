import Section from "components/section/Section";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Github, Link45deg, Youtube } from "react-bootstrap-icons";

import "./ProjectsSection.scss";

enum LinkType {
  Youtube,
  Github,
  Other,
}

type ProjectLink = {
  linkType: LinkType;
  url: string;
  title: string;
};

type Project = {
  title: string;
  description: string;
  imageURL: string;
  links: Array<ProjectLink>;
};

const projectList: Array<Project> = [
  {
    title: "Pairwise",
    description:
      "Developed a tool to rank movies, tv shows, and books based on repeated pairwise comparisons. Used AI to learn (and re-learn) NextJS and React.",
    imageURL: "/public_img_optimized/projects/pairwise.png",
    links: [
      {
        linkType: LinkType.Other,
        url: "https://plusparth.github.io/pairwise/",
        title: "Try it out",
      },
      {
        linkType: LinkType.Github,
        url: "https://github.com/plusparth/pairwise",
        title: "GitHub",
      },
    ],
  },
  {
    title: "Swerve Module",
    description:
      "Designed, built, wired, and wrote software for drive pod for a personal robot. The pod is one of four that allows the robot to translate and rotate simultaneously.",
    imageURL: "/public_img_optimized/projects/swerve.jpg",
    links: [
      {
        linkType: LinkType.Other,
        url: "https://cad.onshape.com/documents/e4a58a90fa9a7fe94fdd1dcc/w/37a5e11e88d0abadb2a8e6e5/e/c7b9c91bb9e4af2be3ffe939?renderMode=0&uiState=615928afb573e85220890ce1",
        title: "See CAD",
      },
      {
        linkType: LinkType.Youtube,
        url: "https://www.youtube.com/watch?v=on2P20unFDg",
        title: "Demo",
      },
    ],
  },
  {
    title: "2021 Team 4099 Robot",
    description:
      "Mentored and coached high school robotics team to build and program a high-level competitive robot while remaining socially distanced through the COVID-19 pandemic. Personally manufactured over 80% of the parts on the robot.",
    imageURL: "/public_img_optimized/projects/robot-2021.jpg",
    links: [
      {
        linkType: LinkType.Other,
        url: "https://cad.onshape.com/documents/e4a58a90fa9a7fe94fdd1dcc/w/37a5e11e88d0abadb2a8e6e5/e/c7b9c91bb9e4af2be3ffe939?renderMode=0&uiState=615928afb573e85220890ce1",
        title: "See CAD",
      },
      {
        linkType: LinkType.Github,
        url: "",
        title: "Robot Code",
      },
    ],
  },
  {
    title: "COVID-19 Testing Data Science",
    description:
      "Trained a model on publicly available COVID-19 data to predict a potential mortality rate in the US had we had more testing.",
    imageURL: "/public_img_optimized/projects/coviddata.png",
    links: [
      {
        linkType: LinkType.Other,
        url: "https://plusparth.github.io/covid19-datascience-tutorial/",
        title: "See Analysis",
      },
    ],
  },
  {
    title: "Telemetry Data Plotter",
    description:
      "Wrote an Electron app to allow FIRST Robotics teams to visualize telemetry data from a competition robot to make it easier to diagnose problems.",
    imageURL: "/public_img_optimized/projects/plotter-img.png",
    links: [
      {
        linkType: LinkType.Github,
        url: "https://github.com/plusparth/plotter",
        title: "Project Page",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      // description="Here are some of the most recent projects I've worked on."
      dark
    >
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projectList.map((project, _) => (
          <Col>
            <Card className="project-card">
              <Card.Img variant="top" src={project.imageURL} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              {project.links.length > 0 && (
                <Card.Footer className="text-center">
                  {project.links.map((link, _) => {
                    switch (link.linkType) {
                      case LinkType.Github:
                        return (
                          <span className="project-link" key={link.url}>
                            <Github className="project-link-icon" />{" "}
                            <Card.Link href={link.url}>{link.title}</Card.Link>
                          </span>
                        );
                      case LinkType.Youtube:
                        return (
                          <span className="project-link" key={link.url}>
                            <Youtube className="project-link-icon" />{" "}
                            <Card.Link href={link.url}>{link.title}</Card.Link>
                          </span>
                        );
                      case LinkType.Other:
                        return (
                          <span className="project-link" key={link.url}>
                            <Link45deg className="project-link-icon" />
                            <Card.Link href={link.url}>{link.title}</Card.Link>
                          </span>
                        );
                      default:
                        return null;
                    }
                  })}
                </Card.Footer>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default ProjectsSection;

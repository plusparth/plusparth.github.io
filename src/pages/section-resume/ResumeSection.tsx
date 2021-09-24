import React from "react";

import Section from "components/section/Section";

import "./ResumeSection.scss";

type ResumeEntry = {
  title: string;
  startDate: string;
  endDate: string;
  subtitle: string;
  content: JSX.Element;
};

const educationList: Array<ResumeEntry> = [
  {
    title: "Bachelor of Science, Computer Science",
    startDate: "August 2018",
    endDate: "May 2022",
    subtitle: "University of Maryland, College Park (3.55/4.00 GPA)",
    content: (
      <div>
        <p>
          <em>
            Concentration in Mechanical Engineering, Minor in Philosophy,
            Cybersecurity LLP
          </em>
        </p>
        <h6>Relevant Coursework</h6>
        <ul>
          <li>
            <span className="badge">CMSC451</span> Design and Analysis of
            Computer Algorithms
          </li>
          <li>
            <span className="badge">CMSC412</span> Operating Systems
          </li>
          <li>
            <span className="badge">CMSC424</span> Database Design
          </li>
          <li>
            <span className="badge">CMSC416</span> Parallel Computing
          </li>
          <li>
            <span className="badge">CMSC426</span> Computer Vision
          </li>
          <li>
            <span className="badge">MATH246</span> Differential Equations
          </li>
          <li>
            <span className="badge">ENME361</span> Vibrations, Controls,
            Optimization
          </li>
          <li>
            <span className="badge">ENME351</span> Electronics and
            Instrumentation
          </li>
        </ul>
      </div>
    ),
  },
];

const experienceList: Array<ResumeEntry> = [
  {
    title: "Software Development Intern",
    startDate: "June 2021",
    endDate: "August 2021",
    subtitle: "Leidos @ Columbia, MD",
    content: (
      <ul>
        <li>
          Created simulated robot swarm in Gazebo for displaying robot simuation
          over network
        </li>
        <li>
          Developed ROS2 based software for robot swarm to test sending large
          amounts of data through DDS to compare existing network technologies
          to 5G edge computing capabilities
        </li>
        <li>
          Engineered statistics collection system to compare swarm performance
          with varying network conditions
        </li>
      </ul>
    ),
  },
  {
    title: "Data Science/Software Development Intern",
    startDate: "June 2020",
    endDate: "September 2020",
    subtitle: "Leidos @ Columbia, MD",
    content: (
      <ul>
        <li>
          Developed frontend for cyber security teaching platform using React,
          NodeJS, and TypeScript and integrated with AWS
          Lambda/CloudFormation/DynamoDB backend
        </li>
        <li>
          Wrote Prometheus exporter to provide ZFS status metrics to allow
          customer to know when to replace disks to avoid failures
        </li>
        <li>
          Replicated malware feature extraction researchpaper to demonstrate
          capabiliteis of cyber security platform
        </li>
      </ul>
    ),
  },
  {
    title: "Lead Mentor",
    startDate: "June 2018",
    endDate: "Present",
    subtitle: "FIRST Robotics Competition Team 4099 @ Poolesville, MD",
    content: (
      <ul>
        <li>
          Led restructuring of team and approach to competition, leading to over
          50% higher win rate
        </li>
        <li>
          Incorporated project management techniques including Kanban boards,
          Agile meeting structure, and overarching Gantt chart for scheduling
        </li>
        <li>
          Mentor high school students for programming and mechanical design
          skills throughout year, in parallel with own schoolwork and
          internships
        </li>
        <li>
          Manage $30,000 annual budget and direct purchasing decisions to
          maximize long-term student benefit
        </li>
      </ul>
    ),
  },
];

const ResumeSection = () => {
  return (
    <Section
      id="resume"
      title="Resume"
      description="I've highlighted some of my most recent education and work experience."
    >
      <div className="row resume-content">
        <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          {educationList.map((resumeEntry, index) => (
            <div className="resume-item" key={"resume-" + index}>
              <h5>{resumeEntry.title}</h5>
              {/* <p> */}
              <span className="badge badge-dates">
                {resumeEntry.startDate} - {resumeEntry.endDate}
              </span>
              {/* </p> */}
              <span>
                <em>{resumeEntry.subtitle}</em>
              </span>
              {resumeEntry.content}
            </div>
          ))}
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Experience</h3>
          {experienceList.map((resumeEntry, index) => (
            <div className="resume-item" key={"resume-" + index}>
              <h5>{resumeEntry.title}</h5>
              {/* <p> */}
              <span className="badge badge-dates">
                {resumeEntry.startDate} - {resumeEntry.endDate}
              </span>
              {/* </p> */}
              <p>
                <em>{resumeEntry.subtitle}</em>
              </p>
              {resumeEntry.content}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;

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
    subtitle: "University of Maryland, College Park",
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
    title: "Autonomy Products Software Engineer",
    startDate: "July 2022",
    endDate: "Present",
    subtitle: "Skydio @ San Mateo, CA",
    content: (
      <ul>
        <li>
          Led autonomy development for next-generation X10 dock system from
          ground up, including API design, detection algorithms, and hardware
          feedback
        </li>
        <li>
          Achieved 99.9% landing success rate in realistic 12 m/s wind
          conditions through novel planning algorithms that account for vehicle
          leg positions
        </li>
        <li>
          Developed automated testing infrastructure from fully manual process
          to 5,000 flights per week through automation of flight operations and
          wind control systems
        </li>
        <li>
          Reduced propeller folding system failure rates from 5% to 0.5% for
          customers through seasonal failure analysis
        </li>
        <li>
          Delivered critical battery swap feature for public safety customers on
          one-week timeline, including robust height estimation system that
          survives vehicle and dock reboots
        </li>
        <li>
          Created tools for manual and automated failure analysis, including
          LLM-based log analysis tools and Streamlit log visualization tools for
          customer support to diagnose and triage failures
        </li>
        <li>
          Initiated technical onboarding and mentoring for expanding team
          members and interns
        </li>
      </ul>
    ),
  },
  {
    title: "Software Development Intern",
    startDate: "June 2021",
    endDate: "August 2021",
    subtitle: "Leidos @ Columbia, MD",
    content: (
      <ul>
        <li>
          Created simulated robot swarm in Gazebo to display robot simulation
          over network
        </li>
        <li>
          Developed ROS2 based software for robot swarm to test sending large
          amounts of data through DDS to compare existing network technologies
          to 5G edge computing capabilities
        </li>
        <li>
          Engineered statistics collection system to analyze swarm performance
          in varying network conditions
        </li>
      </ul>
    ),
  },
  {
    title: "Lead Mentor",
    startDate: "June 2018",
    endDate: "July 2023",
    subtitle: "FIRST Robotics Competition Team 4099 @ Poolesville, MD",
    content: (
      <ul>
        <li>
          Led restructuring of team and approach to competition, leading to over
          50% higher win rate
        </li>
        <li>
          Incorporated agile project management techniques to plan team progress
          for each year
        </li>
        <li>
          Mentored high school students for programming and mechanical design
          skills throughout year, in parallel with own schoolwork and
          internships
        </li>
        <li>
          Managed $30,000 annual budget and directed purchasing decisions to
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

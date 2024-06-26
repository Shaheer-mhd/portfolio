import React from "react";
import { MdBugReport } from "react-icons/md";
// import { FiCode } from "react-icons/fi";
import { DiNodejs, DiPython } from "react-icons/di";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">experience</span>
        </h4>
        <h1>Professional Experience</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdBugReport}
            title={"Test Automation Trainee"}
            subtitle={"nucore software solutions | Jul 2022 - Jan 2023"}
            disc={`Automated various test scenarios using python robotframework
                    with selenium.
                    Used Docker for an enhanced development environment. Proficient in utilizing Git for version control and collaborative
                    software development`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={DiPython}
            title={"Test Automation Engineer"}
            subtitle={"nucore software solutions | Feb 2023 - Dec 2023"}
            disc={`Spearheaded the development and implementation of UI
                    automation frameworks utilizing tools such as [python
                    robotframework, playwright, selenium]. Successfully conducted API testing using Postman, ensuring the
                    seamless integration and functionality of backend services`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={DiNodejs}
            title={"Graduate Specialist - Development"}
            subtitle={"nucore software solutions | Jan 2024 - Jun 2024"}
            disc={`1.Customer Email Management Application (CRM). 
                    2.Accounting Application. 
                    a.Cloud Saas product to manage customer emails for travel
                    agencies. 
                    b.Azure blob storage to store data’s
                    c.Multi Tenant
                    d.Using AWS to send and receive emails
                    e.Swagger for API Documenta`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

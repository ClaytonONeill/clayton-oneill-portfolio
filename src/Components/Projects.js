// Modules:
import React from "react";

// Components:
import ProjectTemplate from "./ProjectTemplate";

// Styles:
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

// Config:
import config from "../config/config";

const Projects = () => {
  return (
    <Container fluid className="projects-main-container">
      <CardGroup>
        {config.projects
          ? config.projects.map((project) => (
              <ProjectTemplate project={project} key={project.id} />
            ))
          : null}
      </CardGroup>
    </Container>
  );
};

export default Projects;

// Modules:
import React from "react";

// Style:
import Container from "react-bootstrap/Container";

// Components:
import Project from "./Project";

// Config:
import projectConfig from "../config/projectConfig";

const Projects = () => {
  return (
    <>
      <Container>
        <h1>This is where the projects will live.</h1>
        {projectConfig.map(
          ({ id, title, imageLink, description, technologies }) => (
            <Project
              key={id}
              title={title}
              imageLink={imageLink}
              description={description}
              technologies={technologies}
            />
          )
        )}
      </Container>
    </>
  );
};

export default Projects;

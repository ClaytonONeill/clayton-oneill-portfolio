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
      <Container className="all-projects-container">
        {projectConfig.map(
          ({
            id,
            title,
            imageLink,
            description,
            technologies,
            publicFacing,
            siteUrl,
          }) => (
            <Project
              key={id}
              title={title}
              imageLink={imageLink}
              description={description}
              technologies={technologies}
              publicFacing={publicFacing}
              siteUrl={siteUrl}
            />
          )
        )}
      </Container>
    </>
  );
};

export default Projects;

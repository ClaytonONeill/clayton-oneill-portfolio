// Modules:
import React from "react";

// Styles:
import Card from "react-bootstrap/Card";

const ProjectTemplate = ({ project }) => {
  return (
    <Card>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.about}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {project.publicFacing ? (
          project.url
        ) : (
          <div className="public-facing-disclaimer">
            This is not a public facing project.
          </div>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ProjectTemplate;

// Modules:
import React from "react";
// Style:
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Project = ({ title, imageLink, description, technologies }) => {
  return (
    <>
      <Card className="project-card-container">
        <Card.Img variant="top" src={imageLink} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {technologies.map(({ type }) => (
            <ListGroup.Item key={type}>{type}</ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Take me to the Site!</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Project;

// Modules:
import React from "react";

// Style:
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";

import Button from "react-bootstrap/Button";

const Project = ({
  title,
  imageLink,
  description,
  technologies,
  publicFacing,
  siteUrl,
}) => {
  return (
    <>
      <Card className="project-card-container">
        <Card.Img className="project-image" variant="top" src={imageLink} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Technologies Used</Accordion.Header>
            <Accordion.Body>
              <ListGroup className="list-group-flush">
                {technologies.map(({ type }) => (
                  <ListGroup.Item key={type}>{type}</ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Card.Body>
          {publicFacing ? (
            <Card.Link href={siteUrl}>
              <Button className="external-button">Take me to the Site!</Button>
            </Card.Link>
          ) : (
            <Button className="external-button" variant="secondary" disabled>
              This site is not public.
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Project;

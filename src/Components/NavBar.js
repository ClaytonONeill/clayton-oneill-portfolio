// Modules:
import React from "react";

// Components:
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Clayton O'Neill Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
            <Button variant="outline-primary">
              <a
                download
                href="../../Clayton_ONeill_Resume_2022.pdf"
                className="resume-download"
              >
                Download Resume
              </a>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

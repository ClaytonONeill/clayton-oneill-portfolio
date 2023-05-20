// Modules:
import React from "react";

// Style:
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container className="nav-container">
          <Navbar.Brand href="/">Clayton O'Neill Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
            <a
              download
              href="../../Clayton_ONeill_Resume_2023.pdf"
              className="resume-download"
            >
              <Button variant="outline-light">Download Resume</Button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

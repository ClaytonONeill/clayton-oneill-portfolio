// Modules:
import React from "react";

// Styles:
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const HomeContent = () => {
  return (
    <Container className="home-main-container">
      <Row>
        <Col md={6}>
          <div className="home-image-container">
            <div className="home-image"></div>
          </div>
        </Col>
        <Col md={6}>
          <div className="home-content-container">
            <div className="home-text">This is text</div>
            <div className="home-button-container">
              <div className="resume-container">
                <Button>Download Resum&#232;</Button>
              </div>
              <div className="social-button-container">
                <div className="social-icon">
                  <BsLinkedin size={30} />
                </div>
                <div>
                  <AiFillGithub size={30} />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;

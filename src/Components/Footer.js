// Modules:
import React from "react";

// Icons:
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-link">
        <AiFillLinkedin className="social-icon" size={30} />
        <a
          href="https://linkedin.com/in/clayton-d-oneill"
          className="social-href"
        >
          Linkedin
        </a>
      </p>
      <p className="footer-link">
        <GoMarkGithub className="social-icon" size={30} />
        <a href="https://github.com/ClaytonONeill" className="social-href">
          Github
        </a>
      </p>
    </div>
  );
};

export default Footer;

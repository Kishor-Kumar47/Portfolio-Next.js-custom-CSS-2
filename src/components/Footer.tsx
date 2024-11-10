import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import "../app/style/Footer.css"; // Correct path to the CSS file

const Footer = () => {
  return (
    <div className="footer-background">
      <footer className="footer">
        <div className="footer-container">
          <a className="footer-title">
            <span className="footer-brand">Jai dev</span>
          </a>
          <p className="footer-description">
            © 2024 Jai dev — ZoneXo Founder -
            <a
              href="https://twitter.com/knyttneve"
              className="footer-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Web Developer
            </a>
          </p>
          <span className="footer-icons">
            <a target="_blank" href="https://web.facebook.com/kkcodingg" className="footer-icon footer-facebook">
              <FaFacebookF />
            </a>
            <a target="_blank" href="" className="footer-icon footer-github">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.instagram.com/kishor_kumarrrr/?hl=en" className="footer-icon footer-instagram">
              <FaInstagram />
            </a>
            <a target="_blank" href="" className="footer-icon footer-youtube">
              <FaYoutube />
            </a>
            <a target="_blank" href="" className="footer-icon footer-tiktok">
              <FaTiktok />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

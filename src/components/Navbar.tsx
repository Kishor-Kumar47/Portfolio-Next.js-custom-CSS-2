import React from 'react';
import "../app/style/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a className="navbar-title">
          <span className="navbar-brand">Jai dev</span>
        </a>
        <nav className="navbar-links">
          <a href='#home' className="navbar-link">Home</a>
          <a href='#about' className="navbar-link">About</a>
          <a href='#skills' className="navbar-link">Skills</a>
          <a href='#projects' className="navbar-link">Projects</a>
          <a href='#contact' className="navbar-link">Contacts</a>
        </nav>
        <button className="navbar-button">
          <a href="#contact">Hire Me</a>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="navbar-icon"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

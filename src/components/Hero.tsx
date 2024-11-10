"use client";
import Image from 'next/image';
import profileImage from '../../public/imgs/profile1.png';
import React from "react";
import "../app/style/Hero.css"; // Correct path to the CSS file

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <span className="hero-title">
            <h1>I am <span className="hero-name">Jai dev</span></h1>
            <h1 className="hero-role">Web Developer</h1>
          </span>
          <p className="hero-description">
            Chillwave portland ugh knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato hella selvage wolf narwhal dreamcatcher.
          </p>
          <div className="hero-button-container">
            <button className="hero-button">
              <a href="#contact">Hire Me</a>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            alt="hero"
            src={profileImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

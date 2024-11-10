import React from 'react';
import "../app/style/About.css"; // Correct path to the CSS file

const About = () => {
  return (
    <div id='about'>
      <section className="about-section">
        <div className="about-container">
          <div className="about-text-container">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              I am a passionate full stack web developer with a knack for crafting clean
              responsive and dynamic applications. With expertise in both front end and back end
              technologies I bring ideas to life through code blending aesthetics with functionality
              to deliver seamless user experiences. I thrive on solving complex challenges and
              continuously expanding my skills to stay at the forefront of the tech landscape. Lets
              build something amazing together!
            </p>
            <p className="about-description">
              I completed my FSC in 2023 building a strong foundation in science and engineering
              principles. Currently I am pursuing my passion for engineering and technology having
              applied to university to further my studies. My academic background has equipped me
              with analytical skills and a problem solving mindset which I bring into my work as a
              developer.
            </p>
          </div>
          <div className="about-button-container">
            <button className="about-button">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import "../app/style/Skills.css"; // Import CSS styles

const skills = [
  { name: "HTML", proficiency: 100 },
  { name: "CSS", proficiency: 95 },
  { name: "JavaScript/TypeScript", proficiency: 90 },
  { name: "NEXT JS", proficiency: 80 },
  { name: "Tailwind CSS", proficiency: 95 },
  { name: "Figma", proficiency: 60 },
];

const Skill = () => {
  return (
    <div id="skills" className="skills-section">
      <section className="skills-container">
        <div className="skills-header">
          <h2 className="skills-subtitle">SKILLS</h2>
          <h1 className="skills-title">My Skills</h1>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                
                <h2 className="skill-name">{skill.name}</h2>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="proficiency">{`${skill.proficiency}%`}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;

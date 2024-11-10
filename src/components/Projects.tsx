import Link from 'next/link';
import React from 'react';
import "../app/style/Projects.css"; // Import the CSS file for this component

const Projects = () => {
  const projectList = [
    {
      title: 'My Todo List Project',
      name: 'Todo List',
      description: 'This is an app which helps to create todo lists.',
      link: '',
    },
    {
      title: 'My Weather App Project',
      name: 'Weather App',
      description: 'This is an app which helps to find weather information.',
      link: '',
    },
    {
      title: 'My Countdown Timer Project',
      name: 'Countdown Timer',
      description: 'This is an app which helps with counting down.',
      link: '',
    },
  ];

  return (
    <div id="projects" className="projects-section">
      <section className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
        </div>
        <div className="projects-list">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <h1 className="project-name">{project.name}</h1>
                <p className="project-description">{project.description}</p>
                <Link href={project.link}>
                  <p className="project-link">View Project</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

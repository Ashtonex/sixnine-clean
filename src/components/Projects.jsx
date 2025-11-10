// src/components/Projects.jsx
import React from 'react';

function Projects() {
  const projectList = [
    { title: 'Commercial Complex – Harare', image: '/src/assets/project-images/harare-complex.jpg' },
    { title: 'Luxury Villas – Kadoma', image: '/src/assets/project-images/kadoma-villas.jpg' },
    { title: 'School Renovation – Chinhoyi', image: '/src/assets/project-images/chinhoyi-school.jpg' },
    { title: 'Industrial Plant – Bulawayo', image: '/src/assets/project-images/bulawayo-plant.jpg' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Recent Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
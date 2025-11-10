import React from 'react';
import harareComplex from '../assets/project-images/harare-complex.jpg';
import kadomaVillas from '../assets/project-images/kadoma-villas.jpg';
import chinhoyiSchool from '../assets/project-images/chinhoyi-school.jpg';
import bulawayoPlant from '../assets/project-images/bulawayo-plant.jpg';

function Projects() {
  const projectList = [
    { title: 'Commercial Complex – Harare', image: harareComplex },
    { title: 'Luxury Villas – Kadoma', image: kadomaVillas },
    { title: 'School Renovation – Chinhoyi', image: chinhoyiSchool },
    { title: 'Industrial Plant – Bulawayo', image: bulawayoPlant },
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

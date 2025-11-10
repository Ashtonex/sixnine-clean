// src/components/Projects.jsx
import React from 'react';
import harareComplex from '../assets/project-images/harare-complex.jpg';
import kadomaVillas from '../assets/project-images/kadoma-villas.jpg';
import chinhoyiSchool from '../assets/project-images/chinhoyi-school.jpg';
import bulawayoPlant from '../assets/project-images/bulawayo-plant.jpg';

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

<img src={harareComplex} alt="Harare Complex" />
<img src={kadomaVillas} alt="Kadoma Villas" />
<img src={chinhoyiSchool} alt="Chinhoyi School" />
<img src={bulawayoPlant} alt="Bulawayo Plant" />
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

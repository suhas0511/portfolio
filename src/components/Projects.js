import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "🛒",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "📋",
      category: "frontend",
      technologies: ["React", "Redux", "Socket.io", "CSS3"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and responsive design for all devices.",
      image: "🌤️",
      category: "frontend",
      technologies: ["Vue.js", "API Integration", "Chart.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, post management, and real-time messaging capabilities.",
      image: "🔗",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
      image: "💼",
      category: "frontend",
      technologies: ["React", "CSS3", "Framer Motion"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization with real-time charts, filters, and export functionality.",
      image: "📊",
      category: "fullstack",
      technologies: ["React", "D3.js", "Python", "Flask"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="View on GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.live} className="project-link" aria-label="View Live Demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/ShreyasGowdaP" className="btn">View All Projects on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
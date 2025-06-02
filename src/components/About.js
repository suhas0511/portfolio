import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm a passionate Computer Science Engineering student with a love for creating 
              innovative web solutions and sustainable technology projects.
            </p>
            
            <p>
              I'm a 3rd year CSE student at Malnad College of Engineering. 
              I have a foundation in both frontend development and engineering design, with experience 
              in web development, UI/UX design, and sustainable technology projects.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              working on innovative projects like sand battery systems, 
              
            </p>
            
            <div className="stats">
              <div className="stat">
                <h3>4+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>Student</h3>
                <p>3rd Year CSE</p>
              </div>
              <div className="stat">
                <h3>7.5</h3>
                <p>Current GPA</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="profile-placeholder">
                <div className="avatar-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
              I'm a passionate full-stack developer with a love for creating 
              innovative web solutions that make a difference.
            </p>
            
            <p>
              Fresher out of college, I have a strong foundation in both frontend and backend technologies.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              blog posts and mentoring other developers.
            </p>
            
            <div className="stats">
              <div className="stat">
                <h3>2</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>Fresher</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>Interest</h3>
                <p>Eager to dive</p>
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
              <div className="floating-elements">
                <div className="element element-1">JS</div>
                <div className="element element-2">React</div>
                <div className="element element-3">Node</div>
                <div className="element element-4">CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
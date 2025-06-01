import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: "C for Beginners",
      organization: "Great Learning",
      year: "2023",
      icon: "🏆",
      link: "https://tinyurl.com/Shreyas-C",
      description: "Fundamental programming concepts in C language"
    },
    {
      title: "Web Development Workshop",
      organization: "IUCEE EWB MCE",
      year: "2023",
      icon: "🌐",
      link: "https://tinyurl.com/Shreyas-webdevelopment",
      description: "Frontend web development fundamentals"
    },
    {
      title: "Prastuthi",
      organization: "Me-risee Organisation",
      year: "2023",
      icon: "🎯",
      link: "https://tinyurl.com/Shreyas-Prastuti",
      description: "Project presentation and communication skills"
    },
    {
      title: "Python for Beginners",
      organization: "Infosys",
      year: "2023",
      icon: "🐍",
      link: "https://tinyurl.com/Shreyas-python",
      description: "Python programming fundamentals and applications"
    },
    {
      title: "IUCEE Annual Student Forum",
      organization: "IUCEE",
      year: "2024",
      icon: "🎓",
      link: "https://tinyurl.com/Shreyas-IASF",
      description: "Engineering education and student forum participation"
    },
    {
      title: "Soft Skill Development",
      organization: "Swayam, NPTEL",
      year: "2024",
      icon: "💡",
      link: "https://tinyurl.com/Shreyas-softskill",
      description: "Communication, leadership, and interpersonal skills"
    },
    {
      title: "Human Computer Interaction",
      organization: "Swayam, NPTEL",
      year: "2024",
      icon: "🖥️",
      link: "https://drive.google.com/file/d/1FkMI_r2Jwh6Nw5Pql_5zVX2-hLFt5pXz/view?usp=drive_link",
      description: "User interface design and human-centered computing"
    }
  ];

  return (
    <section id="certificates" className="certificates section-padding">
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications and recognitions earned through dedicated learning and skill development
        </p>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-year">{cert.year}</div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-organization">{cert.organization}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
              
              <div className="cert-footer">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="achievement-highlight">
          <div className="highlight-content">
            <div className="highlight-icon">🌟</div>
            <div className="highlight-text">
              <h3>Continuous Learning Journey</h3>
              <p>
                Committed to professional development through structured learning programs, 
                workshops, and industry-recognized certifications that enhance both technical 
                and soft skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
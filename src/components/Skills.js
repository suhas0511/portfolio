import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "React", level: 88, icon: "⚛️" },
        { name: "Vue.js", level: 75, icon: "💚" },
        { name: "TypeScript", level: 80, icon: "📘" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "PostgreSQL", level: 78, icon: "🐘" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92, icon: "📝" },
        { name: "Docker", level: 0, icon: "🐳" },
        { name: "AWS", level: 10, icon: "☁️" },
        { name: "Figma", level: 100, icon: "🎨" },
        { name: "Jest", level: 0, icon: "🧪" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-item">
            <div className="summary-icon">💻</div>
            <h4>Full Stack Development</h4>
            <p>End-to-end web application development with modern technologies</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Mobile-first approach ensuring great user experience on all devices</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">⚡</div>
            <h4>Performance Optimization</h4>
            <p>Fast, efficient applications with optimal loading times and smooth interactions</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🔧</div>
            <h4>Problem Solving</h4>
            <p>Creative solutions to complex technical challenges with clean, maintainable code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
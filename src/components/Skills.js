import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C Programming", level: 85, icon: "💻" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "HTML/CSS", level: 80, icon: "🌐" },
        { name: "JavaScript", level: 70, icon: "⚡" },
      ]
    },
    {
      title: "Design & Development",
      skills: [
        { name: "Figma", level: 90, icon: "🎨" },
        { name: "Frontend Web Dev", level: 75, icon: "🚀" },
        { name: "UI/UX Design", level: 85, icon: "📱" },
        { name: "Responsive Design", level: 80, icon: "📺" },
        { name: "Canva", level: 88, icon: "🖼️" }
      ]
    },
    {
      title: "Tools & Engineering",
      skills: [
        { name: "SolidWorks", level: 75, icon: "🔧" },
        { name: "Wokwi Simulator", level: 70, icon: "⚙️" },
        { name: "Git", level: 65, icon: "📝" },
        { name: "Problem Solving", level: 90, icon: "🧩" },
        { name: "Project Management", level: 85, icon: "📊" }
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
            <div className="summary-icon">🎓</div>
            <h4>Academic Excellence</h4>
            <p>Maintaining 9.1 GPA in Computer Science Engineering with strong foundation in programming</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🎨</div>
            <h4>Design & Innovation</h4>
            <p>Creating user-centric designs and innovative engineering solutions for real-world problems</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🌱</div>
            <h4>Sustainable Technology</h4>
            <p>Passionate about developing eco-friendly solutions and renewable energy systems</p>
          </div>
          <div className="summary-item">
            <div className="summary-icon">👥</div>
            <h4>Leadership & Collaboration</h4>
            <p>Active member and Digital/Media Head at IUCEE EWB MCE Student Chapter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
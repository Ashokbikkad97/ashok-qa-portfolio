import React from 'react';
import { Code, Cog, Database, GitBranch, Users, TestTube } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  const skillCategories = [
    {
      title: 'Automation & Testing',
      icon: <TestTube size={24} />,
      skills: ['Selenium WebDriver', 'TestNG', 'REST Assured', 'Postman', 'Swagger', 'Regression Testing', 'Smoke Testing', 'Integration Testing']
    },
    {
      title: 'Programming & Frameworks',
      icon: <Code size={24} />,
      skills: ['Java', 'Page Object Model (POM)', 'Data Driven Testing', 'Maven']
    },
    {
      title: 'CI/CD & Tools',
      icon: <GitBranch size={24} />,
      skills: ['Jenkins', 'Git', 'GitHub', 'JIRA']
    },
    {
      title: 'Database & Backend',
      icon: <Database size={24} />,
      skills: ['SQL', 'PostgreSQL', 'Backend Data Validation']
    },
    {
      title: 'Methodologies',
      icon: <Users size={24} />,
      skills: ['Agile / Scrum', 'Sprint Planning', 'UAT Support', 'Defect Tracking']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div 
          ref={ref}
          className={`grid grid-3 scroll-reveal ${isVisible ? 'revealed' : ''}`}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="card" style={{
              transition: `all 0.6s ease ${index * 0.1}s`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '0.5rem',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {category.title}
                </h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      padding: '0.5rem 1rem',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--primary-color)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'var(--bg-secondary)';
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
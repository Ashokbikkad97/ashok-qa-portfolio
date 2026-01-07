import React from 'react';
import { Code, Zap, CheckCircle, Settings, Users, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Automation Testing',
      icon: <Code size={28} />,
      color: '#3b82f6',
      skills: ['Selenium WebDriver', 'TestNG', 'Page Object Model', 'Java Automation Frameworks']
    },
    {
      title: 'API Testing',
      icon: <Zap size={28} />,
      color: '#10b981',
      skills: ['REST API Testing', 'Postman', 'REST Assured', 'Swagger', 'JSON Validation']
    },
    {
      title: 'Manual & Functional Testing',
      icon: <CheckCircle size={28} />,
      color: '#f59e0b',
      skills: ['Test Case Design', 'Regression Testing', 'Smoke & Sanity Testing', 'Defect Tracking (JIRA)']
    },
    {
      title: 'Tools & CI/CD',
      icon: <Settings size={28} />,
      color: '#8b5cf6',
      skills: ['Git & GitHub', 'Maven', 'Jenkins', 'SQL', 'PostgresSQL']
    },
    {
      title: 'Methodologies',
      icon: <Users size={28} />,
      color: '#ef4444',
      skills: ['Agile / Scrum', 'Sprint Planning', 'UAT Support', 'Defect Tracking']
    },
    {
      title: 'Database & Backend',
      icon: <Database size={28} />,
      color: '#06b6d4',
      skills: ['SQL', 'PostgresSQL', 'SQL Queries', 'Database Validation', 'API Data Verification', 'Backend Workflows', 'Log Analysis']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="section"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '40%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            Skills & Expertise
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Comprehensive QA expertise across automation, API testing, and modern development practices
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-3"
          style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Card gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`
              }} />
              
              {/* Icon and title */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <motion.div 
                  style={{
                    backgroundColor: `${category.color}15`,
                    borderRadius: '16px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: category.color
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: `${category.color}25`,
                    transition: { duration: 0.2 }
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>
              
              {/* Skills badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid var(--border-color)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                    whileHover={{
                      backgroundColor: category.color,
                      color: 'white',
                      scale: 1.05,
                      boxShadow: `0 4px 16px ${category.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style>
        {`
          [data-theme="dark"] .skills-card {
            background: rgba(31, 41, 55, 0.8) !important;
            border: 1px solid rgba(55, 65, 81, 0.3) !important;
          }
          
          @media (max-width: 768px) {
            .skills-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </motion.section>
  );
};

export default Skills;
import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior QA Engineer',
      company: 'Texala India Pvt. Ltd.',
      location: 'Pune, India',
      duration: 'Apr 2023 – Present',
      color: '#3b82f6',
      responsibilities: [
        'Architected and implemented Selenium-based automation frameworks using Java, TestNG, and POM, reducing regression time by 60%.',
        'Led end-to-end quality assurance for a CRM-based solar sales and order management platform serving 10,000+ users.',
        'Designed and executed comprehensive API test suites using REST Assured and Postman for third-party integrations.',
        'Tested integrations such as Twilio (SMS notifications) and Equifax Credit APIs.',
        'Performed SQL-based backend validation across PostgreSQL databases.',
        'Integrated automated tests with Jenkins CI/CD pipelines for continuous testing.',
        'Worked closely with cross-functional teams in Agile sprints and UAT cycles.'
      ]
    },
    {
      role: 'Software Test Engineer Trainee',
      company: 'ionidea Interactive Pvt. Ltd.',
      location: 'Pune / Bangalore, India',
      duration: 'Mar 2022 – Nov 2022',
      color: '#10b981',
      responsibilities: [
        'Worked on API-focused projects involving payment and billing systems.',
        'Performed API testing using Postman for Direct Carrier Billing (DCB) systems.',
        'Validated transaction workflows, error handling, and billing records.',
        'Conducted backend validation using SQL.',
        'Created test cases and tracked defects using JIRA.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="experience" 
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
            Professional Experience
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            4+ years driving quality across enterprise applications and payment systems
          </p>
        </motion.div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${exp.color}, ${exp.color}80)`
              }} />
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  {exp.role}
                </h3>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <motion.div 
                      style={{
                        backgroundColor: `${exp.color}15`,
                        borderRadius: '8px',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: exp.color
                      }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <Building size={16} />
                    </motion.div>
                    <span style={{ color: exp.color, fontWeight: '600', fontSize: '1rem' }}>
                      {exp.company}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} color="var(--text-secondary)" />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {exp.location}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} color="var(--text-secondary)" />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem'
                }}>
                  Key Responsibilities:
                </h4>
                
                <div style={{
                  display: 'grid',
                  gap: '1rem'
                }}>
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.div 
                      key={respIndex} 
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                      }}
                      whileHover={{
                        backgroundColor: `${exp.color}08`,
                        borderColor: `${exp.color}40`,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: exp.color,
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        fontSize: '0.95rem'
                      }}>
                        {responsibility}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
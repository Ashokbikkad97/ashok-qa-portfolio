import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { icon: <MapPin size={20} />, title: 'Location', desc: 'Pune, Maharashtra, India', color: '#3b82f6' },
    { icon: <Calendar size={20} />, title: 'Experience', desc: '4+ Years in QA Engineering', color: '#10b981' },
    { icon: <Award size={20} />, title: 'Specialization', desc: 'Automation & API Testing', color: '#f59e0b' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      id="about" 
      className="section" 
      style={{ 
        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
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
            About Me
          </h2>
        </motion.div>
        
        <motion.div 
          className="about-group"
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {/* Full-width About Me paragraph */}
          <motion.div 
            className="card"
            variants={cardVariants}
            style={{
              marginBottom: '2rem'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))'
            }} />
            
            <div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                I am a Senior QA Engineer based in Pune, India, with 4+ years of experience in Automation, API, and Manual Testing.
                I have worked on enterprise-scale applications involving CRM platforms, solar sales systems, inventory management,
                payment processing, and accounting workflows.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}>
                I specialize in building Selenium-based automation frameworks, designing robust API test suites,
                and ensuring backend data accuracy using SQL.
                I actively collaborate with developers, product owners, and stakeholders in Agile environments to deliver high-quality releases.
              </p>
            </div>
          </motion.div>
          
          {/* Info card - single row layout */}
          <motion.div 
            className="card about-info-row"
            variants={cardVariants}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))'
            }} />
            
            {highlights.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  flex: '1',
                  minWidth: '150px'
                }}
              >
                <motion.div 
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderRadius: '16px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    marginBottom: '1rem'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: `${item.color}25`,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.icon}
                </motion.div>
                
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
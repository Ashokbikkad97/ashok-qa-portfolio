import React, { useState, useEffect } from 'react';
import { Download, Mail, Code, Database, TestTube, GitBranch, User } from 'lucide-react';
import { motion } from 'framer-motion';
import getAssetPath from '../utils/getAssetPath';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Automation Testing',
    'API Testing', 
    'Selenium | REST Assured | Java',
    'CI/CD & Backend Validation'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillCards = [
    { icon: <TestTube size={24} />, title: 'Automation Testing', desc: 'Selenium WebDriver' },
    { icon: <Code size={24} />, title: 'API Testing', desc: 'REST Assured' },
    { icon: <Database size={24} />, title: 'Backend Testing', desc: 'SQL Validation' },
    { icon: <GitBranch size={24} />, title: 'CI/CD', desc: 'Jenkins Integration' }
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '5rem',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title" 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                lineHeight: '1.2'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Senior QA Engineer
            </motion.h1>
            
            <motion.div 
              className="hero-subtitle" 
              style={{
                fontSize: '1.5rem',
                color: 'var(--primary-color)',
                fontWeight: '600',
                marginBottom: '2rem',
                minHeight: '2rem',
                display: 'flex',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>{currentText}</span>
              <span style={{
                borderRight: '2px solid var(--primary-color)',
                animation: 'blink 1s step-end infinite',
                marginLeft: '2px'
              }}>|</span>
            </motion.div>
            
            <motion.p 
              className="hero-description" 
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                lineHeight: '1.8'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              4+ years of experience driving quality across enterprise-scale applications.
              Specialized in automation frameworks, API testing, and CI/CD integration.
              Strong background in CRM, Order Management, Inventory, Payment, and Accounting systems.
            </motion.p>
            
            <motion.div 
              className="hero-buttons" 
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#resume"
                className="btn btn-primary btn-ripple"
                style={{ textDecoration: 'none' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              <motion.button
                onClick={scrollToContact}
                className="btn btn-outline btn-ripple"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div 
            className="hero-image" 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="profile-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={getAssetPath('images/Profile.jpg')}
                alt="Ashok Bikkad - Senior QA Engineer"
                loading="lazy"
                className="profile-image"
                onError={(e) => {
                  e.target.src = getAssetPath('profile-dummy.svg');
                }}
              />
              <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, var(--primary-color), var(--accent-color))',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: '700',
                color: 'white',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
              }}>
                <User size={120} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Highlight Cards */}
        <motion.div 
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }} 
          className="skill-cards-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {skillCards.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 15px 35px rgba(37, 99, 235, 0.15)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.5rem'
              }}>
                <motion.div 
                  className="skill-card-icon" 
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.1, color: 'var(--primary-color)' }}
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {skill.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
              text-align: center;
            }
            
            .skill-cards-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
              gap: 1rem !important;
            }
            
            .profile-image {
              width: 250px !important;
              height: 250px !important;
            }
            
            .hero-buttons {
              justify-content: center;
            }
          }
          
          @media (max-width: 480px) {
            .skill-cards-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
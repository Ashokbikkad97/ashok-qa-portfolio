import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div 
          ref={ref}
          className={`grid grid-2 scroll-reveal ${isVisible ? 'revealed' : ''}`}
          style={{ alignItems: 'center' }}
        >
          <div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              I am a Senior QA Engineer based in Pune, India, with 4+ years of experience in Automation, API, and Manual Testing.
              I have worked on enterprise-scale applications involving CRM platforms, solar sales systems, inventory management,
              payment processing, and accounting workflows.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              I specialize in building Selenium-based automation frameworks, designing robust API test suites,
              and ensuring backend data accuracy using SQL.
              I actively collaborate with developers, product owners, and stakeholders in Agile environments to deliver high-quality releases.
            </p>
          </div>
          
          <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '50%',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Pune, Maharashtra, India</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '50%',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Calendar size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Experience</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>4+ Years in QA Engineering</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '50%',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={20} color="white" />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Specialization</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Automation & API Testing</p>
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
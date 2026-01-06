import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior QA Engineer',
      company: 'Texala India Pvt. Ltd.',
      location: 'Pune, India',
      duration: 'Apr 2023 – Present',
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
      responsibilities: [
        'Worked on API-focused projects involving payment and billing systems.',
        'Performed API testing using Postman for Direct Carrier Billing (DCB) systems.',
        'Validated transaction workflows, error handling, and billing records.',
        'Conducted backend validation using SQL.',
        'Created test cases and tracked defects using JIRA.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '2rem',
            top: '2rem',
            bottom: '2rem',
            width: '2px',
            backgroundColor: 'var(--primary-color)',
            display: 'none'
          }} className="timeline-line" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <div key={index} className="card" style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-3rem',
                  top: '2rem',
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '50%',
                  border: '3px solid var(--bg-primary)',
                  display: 'none'
                }} className="timeline-dot" />
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.role}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Building size={16} color="var(--primary-color)" />
                      <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
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
                    marginBottom: '1rem'
                  }}>
                    Key Responsibilities:
                  </h4>
                  
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--primary-color)',
                          borderRadius: '50%',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }} />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .timeline-line,
          .timeline-dot {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
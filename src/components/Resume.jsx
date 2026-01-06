import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{
              backgroundColor: 'var(--primary-color)',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem auto'
            }}>
              <FileText size={40} color="white" />
            </div>
            
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Download My Resume
            </h3>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Get a comprehensive overview of my experience, skills, and achievements in QA Engineering.
              Available in PDF format for easy viewing and printing.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <a
                href="#"
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <Download size={20} />
                Download PDF
              </a>
              <a
                href="#"
                className="btn btn-outline"
                style={{ textDecoration: 'none' }}
              >
                <Eye size={20} />
                Preview Resume
              </a>
            </div>
            
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              textAlign: 'left'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Resume Highlights
              </h4>
              
              <div className="grid grid-2" style={{ gap: '2rem' }}>
                <div>
                  <h5 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    Professional Summary
                  </h5>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      4+ years QA Engineering experience
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      Automation & API Testing Specialist
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      Enterprise-scale applications
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      CI/CD Integration expertise
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>
                    Key Achievements
                  </h5>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      60% reduction in regression time
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      10,000+ users platform testing
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      Third-party API integrations
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      Agile/Scrum methodologies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
import React from 'react';
import { ExternalLink, Github, Code, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SolarTopps CRM – Solar Sales, Inventory & Order Management Platform',
      description: 'Enterprise CRM platform managing solar sales, proposals, inventory, orders, payments, and accounting workflows.',
      contribution: [
        'End-to-end functional, regression, and API testing',
        'Third-party API testing (Twilio, Equifax Credit)',
        'Automation using Selenium WebDriver',
        'Backend SQL validation',
        'CI/CD integration testing'
      ],
      techStack: ['Selenium', 'Java', 'TestNG', 'REST Assured', 'Postman', 'Jenkins', 'SQL', 'JIRA'],
      type: 'Enterprise Application'
    },
    {
      title: 'Direct Carrier Billing (DCB)',
      description: 'Direct Carrier Billing is a mobile payment solution allowing users to make purchases by charging amounts directly to their mobile carrier bill.',
      contribution: [
        'API testing of payment initiation, confirmation, callbacks, and error scenarios',
        'Validation of request/response payloads and business rules',
        'Backend transaction and billing data validation using SQL'
      ],
      techStack: ['Postman', 'REST APIs', 'SQL', 'JIRA'],
      type: 'Payment System',
      client: 'Huawei Technologies'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <Code size={20} color="var(--primary-color)" />
                  <span style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {project.type}
                  </span>
                  {project.client && (
                    <span style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      border: '1px solid var(--border-color)'
                    }}>
                      {project.client}
                    </span>
                  )}
                </div>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  lineHeight: '1.4'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Database size={16} />
                  My Contribution:
                </h4>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {project.contribution.map((item, itemIndex) => (
                    <li key={itemIndex} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Tech Stack:
                </h4>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: 'var(--accent-color)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <a
                  href="#"
                  className="btn btn-outline"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    padding: '0.5rem 1rem'
                  }}
                >
                  <Github size={16} />
                  View Code
                </a>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    padding: '0.5rem 1rem'
                  }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <div className="card" style={{
            display: 'inline-block',
            padding: '2rem 3rem'
          }}>
            <Github size={48} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              GitHub Portfolio
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem'
            }}>
              Explore my automation frameworks and API testing collections
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                <Github size={16} />
                Selenium Framework
              </a>
              <a href="#" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                <Code size={16} />
                API Collections
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
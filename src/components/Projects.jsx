import React from 'react';
import { ExternalLink, Github, Code, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SolarTopps CRM – Solar Sales, Inventory & Order Management Platform',
      description: 'Enterprise CRM platform managing solar sales, proposals, inventory, orders, payments, and accounting workflows.',
      color: '#3b82f6',
      icon: <Code size={24} />,
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
      color: '#10b981',
      icon: <Zap size={24} />,
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
      id="projects" 
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
            Featured Projects
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Real-world QA projects showcasing automation, API testing, and enterprise application expertise
          </p>
        </motion.div>
        
        <div className="grid grid-2" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
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
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`
              }} />
              
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <motion.div 
                    style={{
                      backgroundColor: `${project.color}15`,
                      borderRadius: '12px',
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: project.color
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: `${project.color}25`,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      backgroundColor: project.color,
                      color: 'white',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {project.type}
                    </span>
                    {project.client && (
                      <span style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        border: '1px solid var(--border-color)'
                      }}>
                        {project.client}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '1.3rem',
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
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>
              </div>
              
              {/* Contribution */}
              <div style={{ marginBottom: '2rem', flex: 1 }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Database size={16} color={project.color} />
                  My Contribution:
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {project.contribution.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)'
                      }}
                      whileHover={{
                        backgroundColor: `${project.color}08`,
                        borderColor: `${project.color}40`,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: project.color,
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        margin: 0
                      }}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  Tech Stack:
                </h4>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        padding: '0.4rem 1rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        border: '1px solid var(--border-color)',
                        cursor: 'pointer'
                      }}
                      whileHover={{
                        backgroundColor: project.color,
                        color: 'white',
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <motion.a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: project.color,
                    border: `2px solid ${project.color}`,
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    backgroundColor: project.color,
                    color: 'white',
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  View Code
                </motion.a>
                <motion.a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: project.color,
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* GitHub Portfolio Section */}
        <motion.div 
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
          variants={cardVariants}
        >
          <motion.div 
            className="card"
            style={{
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
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
            
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Github size={48} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
            </motion.div>
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
              marginBottom: '2rem',
              maxWidth: '400px'
            }}>
              Explore my automation frameworks and API testing collections
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a 
                href="#" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Selenium Framework
              </motion.a>
              <motion.a 
                href="#" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: 'var(--primary-color)',
                  border: '2px solid var(--primary-color)',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
                whileHover={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={16} />
                API Collections
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
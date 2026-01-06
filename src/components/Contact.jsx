import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          {/* Contact Information */}
          <div>
            <div className="card">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem'
              }}>
                Contact Information
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
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
                    <h4 style={{
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                      fontWeight: '600'
                    }}>
                      Location
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '50%',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={20} color="white" />
                  </div>
                  <div>
                    <h4 style={{
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                      fontWeight: '600'
                    }}>
                      Email
                    </h4>
                    <a
                      href="mailto:bikkadashok97@gmail.com"
                      style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none'
                      }}
                    >
                      bikkadashok97@gmail.com
                    </a>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '50%',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={20} color="white" />
                  </div>
                  <div>
                    <h4 style={{
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                      fontWeight: '600'
                    }}>
                      Phone
                    </h4>
                    <a
                      href="tel:+919158464021"
                      style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none'
                      }}
                    >
                      +91-9158464021
                    </a>
                  </div>
                </div>
              </div>
              
              <div style={{
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <h4 style={{
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  Connect with me
                </h4>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <a
                    href="#"
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      borderRadius: '50%',
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <Linkedin size={20} color="white" />
                  </a>
                  <a
                    href="#"
                    style={{
                      backgroundColor: 'var(--text-primary)',
                      borderRadius: '50%',
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <Github size={20} color="var(--bg-primary)" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="card">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem'
              }}>
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    minWidth: '150px'
                  }}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
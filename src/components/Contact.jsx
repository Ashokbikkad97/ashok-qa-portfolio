import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

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
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <MapPin size={20} />, title: 'Location', desc: 'Pune, Maharashtra, India', color: '#3b82f6' },
    { icon: <Mail size={20} />, title: 'Email', desc: 'bikkadashok97@gmail.com', color: '#10b981', link: 'mailto:bikkadashok97@gmail.com' },
    { icon: <Phone size={20} />, title: 'Phone', desc: '+91-9158464021', color: '#f59e0b', link: 'tel:+919158464021' }
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
      id="contact" 
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
            Get In Touch
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to discuss QA opportunities or collaborate on testing projects
          </p>
        </motion.div>
        
        <div className="grid grid-3" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Contact Information Cards */}
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{
                textAlign: 'center',
                cursor: item.link ? 'pointer' : 'default'
              }}
              onClick={() => item.link && window.open(item.link, '_self')}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`
              }} />
              
              <motion.div 
                style={{
                  backgroundColor: `${item.color}15`,
                  borderRadius: '16px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  margin: '0 auto 1.5rem auto',
                  width: 'fit-content'
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
                fontSize: '1.2rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                {item.title}
              </h4>
              <p style={{
                color: item.link ? item.color : 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: item.link ? '600' : '400'
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Contact Form */}
          <motion.div 
            className="card"
            variants={cardVariants}
            style={{
              gridColumn: '1 / -1',
              maxWidth: '800px',
              margin: '0 auto'
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
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    fontSize: '0.9rem'
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
                      padding: '1rem',
                      border: '2px solid var(--border-color)',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    fontSize: '0.9rem'
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
                      padding: '1rem',
                      border: '2px solid var(--border-color)',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  fontSize: '0.9rem'
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
                    padding: '1rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  placeholder="Your message here..."
                />
              </div>
              
              <motion.button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: 'fit-content',
                  margin: '0 auto'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Social Links */}
        <motion.div 
          style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}
          variants={cardVariants}
        >
          <h4 style={{
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            Connect with me
          </h4>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <motion.a
              href="#"
              style={{
                backgroundColor: 'var(--primary-color)',
                borderRadius: '50%',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)'
              }}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} color="white" />
            </motion.a>
            <motion.a
              href="#"
              style={{
                backgroundColor: 'var(--text-primary)',
                borderRadius: '50%',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} color="var(--bg-primary)" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
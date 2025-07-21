import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    setFormSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <>
      <h3 className="form-title">Contact Us</h3>
      
      {formSubmitted && (
        <div className="form-success">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder="How can we help you?"
            rows={4}
            required
          />
        </div>
        
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
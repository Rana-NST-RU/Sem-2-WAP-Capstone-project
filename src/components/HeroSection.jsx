import React from 'react';
import ContactForm from './ContactForm';

const HeroSection = ({ 
  title, 
  subtitle, 
  showContactForm = true,
  backgroundImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400'
}) => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {!showContactForm && (
            <button className="card-button">
              Explore Properties
            </button>
          )}
        </div>
        
        {showContactForm && (
          <div className="hero-form">
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCompare from '../components/PropertyCompare';

const Services = ({ onNavigate }) => {
  return (
    <div>
      <HeroSection 
        title="Our Services" 
        subtitle="Discover how PropPal can help you find your perfect property."
        showContactForm={false}
        backgroundImage="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800"
      />
      
      <div className="services-content">
        <h2>Property Comparison Services</h2>
        <p>Compare properties side by side based on price, location, size, and more. Our detailed comparison tool helps you make informed decisions.</p>
        
        <PropertyCompare />
        
        <div className="services-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How do I compare properties?</h3>
            <p>Simply select the properties you want to compare and our tool will display them side by side with all relevant details.</p>
          </div>
          <div className="faq-item">
            <h3>Can I save my comparisons?</h3>
            <p>Yes, registered users can save their property comparisons for future reference.</p>
          </div>
          <div className="faq-item">
            <h3>How are property ratings calculated?</h3>
            <p>Property ratings are based on user reviews and ratings. Each user can rate a property from 1 to 5 stars.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
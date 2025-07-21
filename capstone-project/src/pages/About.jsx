import React from 'react';
import HeroSection from '../components/HeroSection';

const About = ({ onNavigate }) => {
  return (
    <div>
      <HeroSection 
        title="About PropPal" 
        subtitle="Learn about our mission to make property comparison easy and transparent."
        showContactForm={false}
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800"
      />
      
      <div className="about-content">
        <h2>Our History</h2>
        <p>PropPal was founded in 2023 with a simple mission: to make property comparison transparent and accessible to everyone. Our team of real estate experts and technology enthusiasts came together to create a platform that simplifies the process of finding the perfect home.</p>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To provide the most comprehensive property comparison tool that helps people make informed decisions when buying or renting property.</p>
        </div>
        
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>To become the leading property comparison platform that transforms how people find their dream homes.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
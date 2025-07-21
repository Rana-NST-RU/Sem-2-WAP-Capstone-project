import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCompare from '../components/PropertyCompare';

const Index = ({ onNavigate }) => {
  
  const featuredProperties = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
      title: "Modern Downtown Condo",
      description: "Beautiful 2-bedroom condo in the heart of downtown."
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
      title: "Suburban Family Home",
      description: "Spacious 4-bedroom home in a quiet suburban neighborhood."
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800",
      title: "Cozy Beach House",
      description: "Charming 3-bedroom beach house with ocean views."
    }
  ];
  
  
  const testimonials = [
    {
      id: "1",
      name: "John Smith",
      text: "PropPal helped me find the perfect home for my family. The comparison tool was invaluable!",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      text: "The property comparison feature saved me so much time! I could easily see all the differences at a glance.",
    },
    {
      id: "3",
      name: "Mike Wilson",
      text: "Best property website I've used. The ratings from other users helped me make my final decision.",
    }
  ];
  
  return (
    <div>
      <HeroSection 
        title="Find Your Dream Property" 
        subtitle="Compare properties side by side to find the perfect match for your needs."
      />
      
      <div className="carousel">
        <h2 className="carousel-title">Featured Properties</h2>
        <div className="carousel-container">
          {featuredProperties.map((property) => (
            <div key={property.id} className="card">
              <img src={property.image} alt={property.title} />
              <h3 className="card-title">{property.title}</h3>
              <p className="card-description">{property.description}</p>
              <button className="card-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="selling-points">
        <div className="selling-point">
          <div className="selling-point-text">
            <h2>Easy Property Comparison</h2>
            <p>Our side-by-side comparison tool lets you evaluate properties based on price, size, location, and more. Make informed decisions with all the information at your fingertips.</p>
          </div>
          <div className="selling-point-image">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800" alt="Property comparison" />
          </div>
        </div>
        
        <div className="selling-point selling-point-reverse">
          <div className="selling-point-text">
            <h2>User Ratings & Reviews</h2>
            <p>See what other users think about properties. Our rating system helps you understand the pros and cons of each property from real people who have visited them.</p>
          </div>
          <div className="selling-point-image">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800" alt="User ratings" />
          </div>
        </div>
      </div>
      
      <PropertyCompare />
      
      <div className="carousel">
        <h2 className="carousel-title">What Our Users Say</h2>
        <div className="carousel-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <p className="card-description">"{testimonial.text}"</p>
              <h3 className="card-title">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
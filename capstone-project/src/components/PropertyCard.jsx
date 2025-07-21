import React, { useState } from 'react';

const PropertyCard = ({
  id,
  image,
  title,
  price,
  address,
  bedrooms,
  bathrooms,
  area
}) => {
  const [rating, setRating] = useState(0);
  
  const handleRate = (value) => {
    setRating(value);
  };
  
  return (
    <div className="property-card">
      <img src={image} alt={title} className="property-image" />
      <div className="property-details">
        <div className="property-price">${price.toLocaleString()}</div>
        <h3 className="card-title">{title}</h3>
        <p className="property-address">{address}</p>
        
        <div className="property-features">
          <div className="property-feature">
            <div>{bedrooms}</div>
            <div>Beds</div>
          </div>
          <div className="property-feature">
            <div>{bathrooms}</div>
            <div>Baths</div>
          </div>
          <div className="property-feature">
            <div>{area}</div>
            <div>Sq Ft</div>
          </div>
        </div>
        
        <div className="property-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star} 
              className={`star ${star <= rating ? 'filled' : ''}`}
              onClick={() => handleRate(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
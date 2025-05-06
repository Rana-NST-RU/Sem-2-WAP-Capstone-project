import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

// Sample property data
const properties = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
    title: "Modern Downtown Condo",
    price: 350000,
    address: "123 Main St, Downtown",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
    title: "Suburban Family Home",
    price: 450000,
    address: "456 Oak Ave, Suburbia",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800",
    title: "Cozy Beach House",
    price: 550000,
    address: "789 Shore Dr, Beachville",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800
  }
];

const PropertyCompare = () => {
  const [selectedProperties, setSelectedProperties] = useState(properties);
  
  return (
    <div>
      <h2>Compare Properties</h2>
      <div className="property-compare">
        {selectedProperties.map(property => (
          <PropertyCard 
            key={property.id}
            id={property.id}
            image={property.image}
            title={property.title}
            price={property.price}
            address={property.address}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyCompare;
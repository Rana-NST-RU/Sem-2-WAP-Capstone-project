import React, { useEffect } from 'react';

const NotFound = ({ onNavigate }) => {
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <button 
          className="card-button" 
          onClick={() => onNavigate("home")}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
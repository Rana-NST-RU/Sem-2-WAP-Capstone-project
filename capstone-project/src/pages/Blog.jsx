import React from 'react';
import HeroSection from '../components/HeroSection';

const Blog = ({ onNavigate }) => {

  const blogPosts = [
    {
      id: "1",
      title: "How to Compare Properties Effectively",
      description: "Learn the key factors to consider when comparing properties for your next home purchase.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
      author: "Emily Johnson",
      date: "May 1, 2025"
    },
    {
      id: "2",
      title: "Understanding Property Valuations",
      description: "A comprehensive guide to understanding how properties are valued in today's market.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800",
      author: "Michael Smith",
      date: "April 24, 2025"
    },
    {
      id: "3",
      title: "Top 5 Neighborhoods for Families",
      description: "Discover the best family-friendly neighborhoods that offer great schools and amenities.",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800",
      author: "Sarah Davis",
      date: "April 15, 2025"
    }
  ];
  
  return (
    <div>
      <HeroSection 
        title="Property Insights Blog" 
        subtitle="Expert advice and tips on property comparison and real estate."
        showContactForm={false}
        backgroundImage="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800"
      />
      
      <div className="blog-content">
        <h2>Latest Articles</h2>
        
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-post-details">
                <h3>{post.title}</h3>
                <p className="blog-post-meta">By {post.author} on {post.date}</p>
                <p className="blog-post-description">{post.description}</p>
                <button className="card-button">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
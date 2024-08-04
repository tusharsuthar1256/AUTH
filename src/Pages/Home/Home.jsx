import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Code Saver</h1>
        <p>
          Code Saver is your go-to platform for managing and saving your coding solutions. 
          Whether you're a student or a developer, keep track of your progress and organize your code with ease.
        </p>
        <div className="cta-buttons">
          <a href="/signup" className="cta-button">Get Started</a>
          <a href="/about" className="cta-button secondary">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

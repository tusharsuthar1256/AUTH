import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>About CodeSaver</h1>
        <p>Discover how CodeSaver is revolutionizing the way you manage and store your code snippets.</p>
      </div>
      <div className="about-content">
        <section className="features">
          <div className="feature">
            <h2>Easy Code Management</h2>
            <p>Organize your code snippets with ease. Create, edit, and delete snippets in a user-friendly interface.</p>
          </div>
          <div className="feature">
            <h2>Cloud Storage</h2>
            <p>Access your code snippets from anywhere with our secure cloud storage. Never lose your important code again.</p>
          </div>
          <div className="feature">
            <h2>Collaborate with Teams</h2>
            <p>Share and collaborate on code with your team. Enhance productivity and streamline development workflows.</p>
          </div>
        </section>
        <a href="/signup" className="cta-button">Join Us Now</a>
      </div>
    </div>
  );
};

export default About;

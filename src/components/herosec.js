import React from 'react';
import './my-css/herosec.css';
import heroImage from './images/hero-image.png'; // Import the image

const HeroSection = ({ name, tagline, buttonText }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{name}</h1>
        <p>{tagline}</p>
        <a href="#about" className="btn">{buttonText}</a>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroSection;

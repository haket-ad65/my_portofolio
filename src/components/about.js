import React from 'react';
import './my-css/about.css';
import profilePic from './images/pro.png'; 

const About = ({ resumeLink, aboutText, highlights }) => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          {aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul className="highlights">
            {highlights.map((highlight, index) => (
              <li key={index} className="highlight">
                {highlight}
              </li>
            ))}
          </ul>
          <a 
            href={resumeLink} 
            className="resume-btn" 
            target="_blank" 
            rel="noopener noreferrer">
            Download My Resume
          </a>
        </div>
        <div className="about-img">
          <img src={profilePic} alt="Aditya Gupta" />
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosec';
import Services from './components/Services';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection 
        name="Aditya Gupta"
        tagline="Web developer and Data analyst, based in India."
        buttonText="My Story"
        imageUrl="/images/hero-image.png"  // Correct path for image
      />
      <Services />
      <About 
        profilePic="/images/pro.png"  // Correct path for profile picture
        resumeLink="/my-resume.pdf"    // Correct path for resume PDF
        aboutText={[
          "I am your friendly neighborhood FullStack Developer.",
          "With a strong foundation in front-end and back-end technologies, I enjoy crafting seamless user experiences and solving complex problems through code.",
          "My journey in web development has equipped me with the skills to work on diverse projects, from simple static websites to dynamic full-stack applications.",
          '"With great new tech comes great knowledge."'
        ]}
        highlights={[
          "Experienced in JavaScript, React, and Node.js",
          "Proficient in building RESTful APIs",
          "Strong debugging and problem-solving skills",
        ]}
      />
      <Work />
      <Contact 
        fields={[
          { name: 'name', type: 'text', placeholder: 'Your Name' },
          { name: 'email', type: 'email', placeholder: 'Your Email' },
          { name: 'message', type: 'textarea', placeholder: 'Your Message' },
        ]}
      />
      <Footer 
        footerText="AADI SPIDEY"
        socialLinks={[
          { platform: 'GitHub', url: 'https://github.com/haket-ad65' },
          { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-gupta-b31292242/' },
          { platform: 'Twitter', url: 'https://x.com/the_yagyasaini' },
        ]}
      />
    </div>
  );
}

export default App;

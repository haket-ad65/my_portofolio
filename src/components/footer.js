import React from 'react';
import './my-css/footer.css';

const Footer = ({ socialLinks, footerText }) => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {footerText}. All rights reserved.</p>
      <div className="social-links">
        {socialLinks.map(link => (
          <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.platform}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

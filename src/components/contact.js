import React from 'react';
import './my-css/contact.css';

const Contact = ({ fields }) => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let's get in touch and work on your next project!</p>
      <form>
        {fields.map(field => (
          <div key={field.name}>
            {field.type !== 'textarea' ? (
              <input type={field.type} placeholder={field.placeholder} required />
            ) : (
              <textarea placeholder={field.placeholder} required></textarea>
            )}
          </div>
        ))}
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

import React from 'react';
import './my-css/Services.css';

const SERVICES = [
    { id: 1, title: 'Web Designer', projects: 5 },
    { id: 2, title: 'Data Analyst', projects: 5 },
    { id: 3, title: 'Full Stack Developer', projects: 2 },
];

const Services = () => {
  return (
    <section id="services" className="services">
      {SERVICES.map(service => (
        <div key={service.id} className="service-card">
          <h2>{service.title}</h2>
          <p>{service.projects} Projects</p>
        </div>
      ))}
    </section>
  );
};

export default Services;

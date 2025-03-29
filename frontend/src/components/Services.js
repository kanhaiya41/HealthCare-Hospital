import React from 'react';
import { services } from '../data';
import '../styles/Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="symptoms">
                <h4>Common Symptoms:</h4>
                <ul>
                  {service.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
              <div className="opd-timing">
                <h4>OPD Timing:</h4>
                <p>{service.opdTiming}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
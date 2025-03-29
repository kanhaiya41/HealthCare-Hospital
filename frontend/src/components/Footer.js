import React from 'react';
import {} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapPin, faPhone, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="footer-content">
              <p>
                {/* <Phone /> */}
                <FontAwesomeIcon icon={faPhone} />
                7854123289
              </p>
              <p>
                {/* <Mail /> */}
                <FontAwesomeIcon icon={faEnvelope} />
                contact@healthcare.com
              </p>
              <p>
                {/* <MapPin /> */}
                <FontAwesomeIcon icon={faMapPin} />
                123 Hospital 12 street, kapasan, Rajsthan
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Appointments</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>OPD Timings</h3>
            <div className="footer-content">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 8:00 PM</p>
              <p>Emergency Services: 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
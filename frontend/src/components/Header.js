import React from 'react';
import { } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faPhone, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const controllMenu = () => {
    let option = document.getElementById('options');
    if (option.style.width === '0px') {
      option.style.width = '170px';
      // option.style.padding='10px';
    }
    else {
      option.style.width = '0';
      // option.style.padding='0px';
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">
            <FontAwesomeIcon icon={faStethoscope} />
            HealthCare Hospital
          </h1>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />

              <span>7854123289</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>contact@healthcare.com</span>
            </div>
            <div className="menu" >
              <FontAwesomeIcon icon={faBars} onClick={controllMenu} />
              <div className='options' id='options'>
                <p onClick={() => { navigate('/'); controllMenu() }}>Home</p>
                <p onClick={() => { navigate('/registration'); controllMenu() }}>Patient Registration</p>
                <p onClick={() => { navigate('/patients'); controllMenu() }}>Registered Patients</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
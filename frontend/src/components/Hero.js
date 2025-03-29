import React, { useState } from 'react';
import {} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faSearch, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { services } from '../data';
import '../styles/Hero.css';

const Hero = () => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (symptom) => {
    const matchedService = services.find(service =>
      service.symptoms.some(s => s.toLowerCase().includes(symptom.toLowerCase()))
    );
    setSearchResult(matchedService || null);
  };

  return (
    <div className="hero">
      <div className="container">
        <h2>Welcome to HealthCare Hospital</h2>
        <p>Providing Quality Healthcare Services Since 1995</p>
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Describe your symptoms..."
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="search-btn">
              
              <FontAwesomeIcon icon={faSearch} />
              Search
            </button>
          </div>
          {searchResult && (
            <div className="search-result">
              <h3>{searchResult.name}</h3>
              <p>{searchResult.description}</p>
              <p>OPD Timing: {searchResult.opdTiming}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
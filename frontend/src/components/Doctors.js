import React, { useState } from 'react';
import { doctors } from '../data';
import DoctorModal from './DoctorModal';
import '../styles/Doctors.css';

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section className="doctors">
      <div className="container">
        <h2>Our Doctors</h2>
        <div className="doctors-grid">
          {doctors.map(doctor => (
            <div
              key={doctor.id}
              className="doctor-card"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
                <p>Experience: {doctor.experience}</p>
                <button className="view-profile-btn">View Full Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedDoctor && (
        <DoctorModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </section>
  );
};

export default Doctors;
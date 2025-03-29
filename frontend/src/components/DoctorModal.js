import React from 'react';
// import { X } from 'lucide-react';
import '../styles/DoctorModal.css';

const DoctorModal = ({ doctor, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="doctor-profile">
          <div className="doctor-header">
            <img src={doctor.image} alt={doctor.name} />
            <div>
              <h2>{doctor.name}</h2>
              <p className="specialization">{doctor.specialization}</p>
              <p className="experience">{doctor.experience} Experience</p>
            </div>
          </div>
          <div className="doctor-details">
            <section>
              <h3>Education</h3>
              <p>{doctor.education}</p>
            </section>
            <section>
              <h3>Awards & Recognition</h3>
              <ul>
                {doctor.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Publications</h3>
              <ul>
                {doctor.publications.map((pub, index) => (
                  <li key={index}>{pub}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Languages</h3>
              <p>{doctor.languages.join(', ')}</p>
            </section>
            <section className="opd-schedule">
              <h3>OPD Schedule</h3>
              <p><strong>Days:</strong> {doctor.opdDays}</p>
              <p><strong>Timing:</strong> {doctor.opdTiming}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
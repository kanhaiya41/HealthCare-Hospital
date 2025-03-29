import React, { useState } from 'react';
// import { FileText } from 'lucide-react';
import { } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileText } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { services, URL } from '../data';
import '../styles/PatientForm.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    symptoms: ''
  });

  const [recommendedDept, setRecommendedDept] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'symptoms') {
      const matchedService = services.find(service =>
        service.symptoms.some(s => s.toLowerCase().includes(value.toLowerCase()))
      );
      setRecommendedDept(matchedService ? matchedService.name : '');
    }
  };
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setData({
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      phone: formData.phone,
      dept: recommendedDept
    })
    const res = await axios.post(`http://localhost:8000/api/register`,data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res?.data?.success) {
      toast.success(res?.data?.message);
      setFormData({
        name: '',
        age: 0,
        gender: '',
        phone: '',
        symptoms: ''
      });
      setRecommendedDept('');
    }
    else {
      toast.error(res?.data?.message);
    }
  };

  return (
    <section className="patient-form-section">
      <div className="container">
        <h2>Patient Registration Form</h2>
        <p className="section-desc">For Hospital Staff Use Only</p>
        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Patient Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" selected disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="symptoms">Symptoms</label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Recommended Department</label>
            <div className="recommended-dept">
              {recommendedDept || 'No department selected yet. Please enter symptoms above.'}
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {/* <FileText /> */}
              <FontAwesomeIcon icon={faFileText} />
              Register Patient
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PatientForm;
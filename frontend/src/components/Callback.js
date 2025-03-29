import { faFileText } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import axios from 'axios';
import { URL } from '../data';
import toast from 'react-hot-toast';

const Callback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dept: '',
        phone: '',
        msj: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));


    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const res = await axios.post(`https://healthcare-hospital.onrender.com/api/sendMail`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res?.data?.success) {
            toast.success(res?.data?.message);
            setFormData({
                name: '',
                age: '',
                gender: '',
                phone: '',
                symptoms: ''
            });
        }
        else {
            toast.error(res?.data?.message);
        }
    };
    return (
        <section className="patient-form-section">
            <div className="container">
                <h2>Request A Call Back</h2>
                <form onSubmit={handleSubmit} className="patient-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
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
                            <label htmlFor="email">Your Email Id</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData?.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dept">Department</label>
                            <select
                                id="dept"
                                name="dept"
                                value={formData?.dept}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" selected disabled>Select department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Neurology">Neurology
                                </option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Orthopedics">Orthopedics</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData?.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="msj">Your Message</label>
                        <textarea
                            id="msj"
                            name="msj"
                            value={formData?.msj}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Callback

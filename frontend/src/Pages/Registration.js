import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import PatientForm from '../components/PatientForm'

const Registration = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="container">
                    <h2>HealthCare Hospital</h2>
                    <p>Providing Quality Healthcare Services Since 1995</p>
                    <div className="search-container">
                    </div>
                </div>
            </div>

            <PatientForm/>

            <Footer />

        </>
    )
}

export default Registration

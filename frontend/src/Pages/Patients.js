import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { URL } from '../data';
import axios from 'axios';
import toast from 'react-hot-toast';

const Patients = () => {

    const [patient, setpatient] = useState([]);

    const getPatients = async () => {
        try {
            const res = await axios.get(`https://healthcare-hospital.onrender.com/api/patients`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res?.data?.success) {
                setpatient(res?.data?.allStock);
            }
            else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            console.log("while geting patients", error);
        }
    }

    useEffect(() => {
        getPatients();
    }, []);

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

            <div className='allitems'>
                <h1 className='avstock' >Main Stock Table</h1>
                <div className='tabled' style={{ height: '60vh' }} >

                    <table className='sotable'>
                        <thead>
                            <tr className='table-th'>
                                <th className='table-head'>S.N.</th>
                                <th className='table-head'>Patient name</th>
                                <th className='table-head'>Age</th>
                                <th className='table-head'>Gender</th>
                                <th className='table-head'>Phone number</th>
                                <th className='table-head'>Department</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                patient && patient.map((curElem, index) => (
                                    <tr className='table-row'>
                                        <td className='table-data'>{index + 1}</td>
                                        <td className='table-data'>{curElem?.name}</td>
                                        <td className='table-data'>{curElem?.age}</td>
                                        <td className='table-data'>{curElem?.gender}</td>
                                        <td className='table-data'>{curElem?.phone}</td>
                                        <td className='table-data'>{curElem?.dept}</td>

                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Patients

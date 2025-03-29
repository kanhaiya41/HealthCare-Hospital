import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import PatientForm from './components/PatientForm';
import Footer from './components/Footer';
import './styles/App.css';
import Callback from './components/Callback';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Callback />
      <Footer />
    </div>
  );
}

export default App;
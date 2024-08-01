import React from 'react';
import './App.css'; // You can customize the styles in this file
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
//import Testimonials from './components/Testimonials/Testimonials';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import SubmitMateSection from './components/SubmitMateSection/SubmitMateSection';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services/>
      <SubmitMateSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

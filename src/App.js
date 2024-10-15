import React from 'react';
import ReactGA from 'react-ga4';
import './App.css'; // You can customize the styles in this file
import TopBar from "./components/TopBar/TopBar";
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
//import Testimonials from './components/Testimonials/Testimonials';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import SubmitMateSection from './components/SubmitMateSection/SubmitMateSection';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  ReactGA.initialize('G-ZXMYGFTGG9');

  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home Page",
  });

  return (
    <div className="App">
      <TopBar />
      <HeroSection />
      <Services/>
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import ReactGA from 'react-ga4';
import './App.css';
import TopBar from "./components/TopBar/TopBar";
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy/Privacy';

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
      <Terms />
      <Privacy />
      <Footer />
    </div>
  );
}

export default App;

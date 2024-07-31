import React from 'react';
import './App.css'; // You can customize the styles in this file
import Header from './components/Header/Header';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import MissionVision from './components/MissionVision/MissionVision';
import CompanyOverview from './components/CompanyOverview/CompanyOverview';
import SubmitMateSection from './components/SubmitMateSection/SubmitMateSection';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeMessage />
      <CompanyOverview />
      <MissionVision/>
      <SubmitMateSection />
      <ContactUs />

      {/* Footer */}
      <footer>
        {/* Add social media links */}
        <p>&copy; 2023 Kingdom Software. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

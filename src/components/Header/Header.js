// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-and-title-container">
        <div className="logo-container">
          <img src="KingdomSoftwareLogo.svg" alt="Logo" className="logo" />
        </div>
        <div className="title-container">
          <h1>Kingdom Software</h1>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#submit-mate">SubmitMate</a>
        {/* Add other navigation links as needed */}
      </nav>
    </header>
  );
};

export default Header;

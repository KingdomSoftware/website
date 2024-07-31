// SubmitMateSection.js
import React from 'react';
import './SubmitMateSection.css'; // Import the CSS file for styling

const SubmitMateSection = () => {
  return (
    <div className="submitmate-section-container">
      <h2>SubmitMate - Competitions and Promotions Campaign Builder</h2>
      <p>
        Unlock the full potential of your campaigns with SubmitMate's powerful Competitions and Promotions Campaign Builder.
        Whether you're running contests, giveaways, or promotions, our intuitive tool streamlines the process from start to finish.
      </p>
      <p>
        **Key Features:**
      </p>
      <ul>
        <li>Effortlessly create engaging campaigns with our user-friendly builder.</li>
        <li>Accept and process form submissions with ease, capturing valuable user data.</li>
        <li>Gain insights into campaign performance with detailed reporting and analytics.</li>
        <li>Access and export data for a deeper understanding of participant demographics.</li>
      </ul>
      <p>
        At SubmitMate, we prioritize user privacy and data security. Rest assured that the information collected through your campaigns
        is handled with the utmost care, and our reporting features ensure compliance with data protection regulations.
      </p>
      <div className="cta-container">
        <a
          href="https://www.submitmate.com"  // Update with the actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Visit SubmitMate
        </a>
      </div>
    </div>
  );
};

export default SubmitMateSection;

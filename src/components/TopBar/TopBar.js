import React from 'react';
import logo from '../../images/KingdomSoftwareLogo.png';
import NavMobile from "../NavMobile/NavMobile";
import NavDesktop from "../NavDesktop/NavDesktop";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-900 border-b border-neutral-800 z-50">
      <nav className="container flex items-center justify-between py-1 lg:py-4">
        <span className="text-lg">
            <img
              className="h-14 w-auto"
              src={logo}
              alt="Kingdom Software Logo"
            />
        </span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default TopBar;

import React from 'react';
import logo from '../../images/KSLogo.png';
import NavMobile from "../NavMobile/NavMobile";
import NavDesktop from "../NavDesktop/NavDesktop";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-cyan-800 border-b border-neutral-700 z-50">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg">
            <img className="size-14" src={logo} alt="Kingdom Software Logo" />
        </span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default TopBar;
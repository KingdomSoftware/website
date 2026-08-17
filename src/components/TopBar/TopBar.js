import React from 'react';
import mark from '../../images/brand/mark.svg';
import NavMobile from "../NavMobile/NavMobile";
import NavDesktop from "../NavDesktop/NavDesktop";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-900 border-b border-neutral-800 z-50">
      <nav className="container flex items-center justify-between py-1 lg:py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img className="h-9 w-auto" src={mark} alt="" />
          <span className="text-white font-semibold tracking-wide text-base">
            Kingdom Software
          </span>
        </a>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default TopBar;

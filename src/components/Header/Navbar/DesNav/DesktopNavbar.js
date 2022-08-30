import React, { useState } from 'react';
import './desktopNavbar.css';

const DesktopNavbar = () => {
  // Y-axis Nav Scroll Animation
  // state is `navbar`
  const [desktopNav, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground, { passive: true });

  return (
    <div
      className={
        desktopNav
          ? 'desktopNav active text-blk bg-white dark:text-white dark:bg-blk'
          : 'desktopNav'
      }
    >
      <ul>
        <li className="hover:text-org dark:hover:text-pnk transition duration-150 ease-in-out">
          <a href="#header">home</a>
        </li>
        <li className="hover:text-org dark:hover:text-pnk transition duration-150 ease-in-out">
          <a href="#about">about</a>
        </li>
        <li className="text-org dark:text-pnk">
          <a href="#work">work</a>
        </li>
        <li className="hover:text-org dark:hover:text-pnk transition duration-150 ease-in-out">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavbar;

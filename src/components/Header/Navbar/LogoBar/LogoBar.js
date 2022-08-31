import React, { useState } from 'react';
import './logoBar.css';

// Component(s)
import Toggle from '../../Toggle';

const LogoBar = () => {
  // Y-axis Logo Bar Scroll Animation
  // state is `logoBar`
  const [logoWrapper, setLogoBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setLogoBar(true);
    } else {
      setLogoBar(false);
    }
  };

  window.addEventListener('scroll', changeBackground, { passive: true });

  return (
    <div
      className={
        logoWrapper ? 'logoWrapper active bg-white dark:bg-blk' : 'logoWrapper'
      }
    >
      {/* Logo */}
      <a href="#header">
        <div className="bg-logo-dark dark:bg-logo-light bg-cover object-cover bg-left logo-img"></div>
      </a>

      {/* Toggle */}
      <div className="toggle-container">
        <Toggle />
      </div>
    </div>
  );
};

export default LogoBar;

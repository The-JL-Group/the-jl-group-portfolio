import React, { useState } from 'react';
import './header.css';
import Toggle from '../../components/Header/Toggle';
import CardSlider from './CardSlider/CardSlider';

import { BsFillEyeFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header id="header" className="z-0 header font-['Major Mono Display']">
      {/* Logo + Day/Night Btn */}
      <div className="logo-wrapper">
        <a href="#header">
          <div className="bg-logo-dark dark:bg-logo-light bg-cover object-cover bg-left logo-img"></div>
        </a>
        <div className="toggle-container">
          <Toggle />
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        {/* Header Img */}

        <div className="header-image bg-header-dark dark:bg-header-light bg-cover object-cover bg-center h-56 w-full"></div>

        {/* Text */}
        <div className="text-wrapper">
          <div className="text-header-org dark:text-header-pnk text-header">
            <h1>THE</h1>
            <h1>JL</h1>
            <h1>GROUP</h1>
          </div>
          
          {/* Plain Text 'Carats' must be written as HTML entities */}
          <h5 className="dark:text-black">&lt;ux/ui developers/&gt;</h5>
          <p className="dark:text-white">
            Giving your website a more experienced{' '}
            <span className="dark:text-black">experience</span>
          </p>

          {/* Call-To-Action Btn */}
          <div className="cta-wrapper">
            <button>
              <span className="cta-icon-wrapper">
                <BsFillEyeFill size={'1.5rem'} />
              </span>
              <span className="cta-text">View Work</span>
            </button>
          </div>
        </div>

        {/* Work Preview Carousel */}
        <CardSlider />
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './header.css';
import Toggle from '../../components/Header/Toggle';
import CardSlider from './CardSlider/CardSlider';

const Header = () => {
  return (
    <header id="header" className="z-0 header font-['Major Mono Display']">
      {/* Logo + Day/Night Btn */}
      <div className="logo-wrapper">
        <a href="#header">
          <div className="bg-logo-dark dark:bg-logo-light bg-cover object-cover bg-left h-10 w-10"></div>
        </a>
        <div className="toggle-container">
          <Toggle />
        </div>
      </div>

      {/* Header Img + Main Text */}
      <div className="main-header">
        {/* Img */}
        <div className="header-img-wrapper bg-header-dark dark:bg-header-light bg-cover object-cover bg-center h-56 w-full header-image"></div>

        {/* Text */}
        <div className="text-wrapper">
          <div className="text-header-org dark:text-header-pnk">
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
                {/* <img
                  src={eyeIcon}
                  alt="View Work Button"
                  className="cta-icon"
                ></img> */}
                {/* <div className="bg-eye-light"></div> */}
              </span>
              <span className="cta-text dark:text-white">View Work</span>
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

import React, { useState } from 'react';
import './header.css';
import Toggle from '../../components/Header/Toggle';

import CardSlider from './CardSlider/CardSlider';

import logoDark from '../../assets/jl-logo-dark.svg';
import logoLight from '../../assets/jl-logo-light.svg';
import headerDark from '../../assets/header-image-dark.svg';
import headerLight from '../../assets/header-image-light.svg';

import eyeIcon from '../../assets/icons/eye-icon.svg';

const Header = () => {
  return (

    <header className="z-0 header font-['Major Mono Display']">


      {/* Logo + Day/Night Btn */}
      <div className="logo-wrapper">
        <a href="#">
          <img src={logoDark} alt="Dark logo"></img>
        </a>
      </div>

      {/* Header Img + Main Text */}
      <div className="main-header">
        {/* Img */}
        <div className="header-img-wrapper">
          <img
            src={headerDark}
            alt="Circular header images"
            className="header-image"
          ></img>
        </div>

        {/* Text */}
        <div className="text-wrapper">
          <h1>THE</h1>
          <h1>JL</h1>
          <h1>GROUP</h1>
          {/* Plain Text 'Carats' must be written as HTML entities */}

          <h5>&lt;ux/ui developers/&gt;</h5>
          <p>Giving your website a more experienced <span>experience</span></p>


          {/* Call-To-Action Btn */}
          <div className="cta-wrapper">
            <button>
              <span className="cta-icon-wrapper">
                <img
                  src={eyeIcon}
                  alt="View Work Button"
                  className="cta-icon"
                ></img>
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

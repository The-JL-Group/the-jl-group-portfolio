import React, { useState } from 'react';
import './header.css';

// Components
import LogoBar from './Navbar/LogoBar/LogoBar';
import Banner from './Banner/Banner';
import { HeaderMarquee } from './Banner/Banner';
import CardSlider from './CardSlider/CardSlider';
import { HeaderImageBlock, HeaderTxt } from '../Loader/Loader';

// Icon(s)
import { BsFillEyeFill } from 'react-icons/bs';

const Header = () => {

  return (
    <header id="header" className="z-0 header font-['Major Mono Display'] overflow-hidden">

      {/* Logo + Day/Night Btn */}
      <LogoBar />

      {/* Main Header */}
      <div className="main-header overflow-hidden">
        {/* Header Img */}

        {/* Framer Motion Header Img */}
        <HeaderImageBlock/>


        {/* Text */}
        <div className="text-wrapper">
          
          {/* Banner Txt */}
          <Banner/>

          {/* <HeaderMarquee/> */}

          {/* Plain Text 'Carats' must be written as HTML entities */}
          <h5 className="dark:text-black">&lt;ux/ui developers/&gt;</h5>
          <p className="dark:text-white">
            Giving your website a more experienced{' '}
            <span className="dark:text-black">experience.</span>
          </p>

          {/* Call-To-Action Btn */}
          <div className="cta-wrapper">
            <button>
              {/* Eye Icon */}
              <span className="cta-icon-wrapper">
                <BsFillEyeFill size={'1.5rem'} className="cta-icon" />
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

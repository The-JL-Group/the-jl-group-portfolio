import React, { useState } from 'react';
import './header.css';

import logoDark from '../../assets/jl-logo-dark.svg';
import logoLight from '../../assets/jl-logo-light.svg';
import headerDark from '../../assets/header-image-dark.svg';
import headerLight from '../../assets/header-image-light.svg';

const Header = () => {
  return (
    <header className="header font-['Major Mono Display']">
      {/* Logo + Day/Night Btn */}
      <div>
        <a href="#">
          <img src={logoDark} alt="Dark logo"></img>
        </a>
      </div>

      {/* Header Img + Main Text */}
      <div className="main-header">
        {/* Img */}
        <img src={headerDark} alt="Circular header images"></img>

        {/* Text */}
        <div>
          <h1>The</h1>
          <h1>JL</h1>
          <h1>Group</h1>
          <h5>UX/UI Developers</h5>
          <p>Giving your website a more experienced experience</p>
        </div>

        {/* Call-To-Action Btn */}
        <div>
          <a href="#">
            <img src=""></img>View Work
          </a>
        </div>

        {/* Work Preview Carousel */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './header.css';

import { regIcons, socialsIcons, ctaIcons } from '../Header/navIcons'

import logoDark from '../../assets/jl-logo-dark.svg'
import logoLight from '../../assets/jl-logo-light.svg'

import headerDark from '../../assets/header-image-dark.png'
import headerLight from '../../assets/header-image-light.png'

const Header = () => {

  return (
    <header className="header font-['Major Mono Display']">

      {/* Regular Navbar */}
      <div>

        {/* Logo + Day/Night Btn */}
        <div>
          <a href="#"><img src={logoDark} alt="Dark logo"></img></a>
        </div>

        {/* Regular Items */}
        <div className='reg-navbar'>
          <ul>
            {regIcons.map((nav, index) => (
              <a href={`${nav.pathway}`}>
                <li>
                  <span href={`${nav.pathway}`}>
                    <img src={nav.src} alt=""></img>
                  </span>
                  <span href={`${nav.pathway}`}>
                    {nav.title}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Socials Navbar */}
      <div>

        {/* Socials Icons */}
        <div className='socials-navbar'>
          <ul>
            {socialsIcons.map((nav, index) => (
              <a href={`${nav.pathway}`}>
                <li>
                  <span href={`${nav.pathway}`}>
                    <img src={nav.src} alt=""></img>
                  </span>
                  <span href={`${nav.pathway}`}>
                    {nav.title}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </div>

              {/* CENTER THIS OK ?!!!!!!!!!!!!!!!*/}
        {/* Header Img + Main Text */}
        <div className='main-header'>

          {/* Img */}
          <img src={headerDark} alt="Circular header images"></img>

          {/* Text */}
          <div>
            <h1>The JL Group</h1>
            <h5>UX/UI Developers</h5>
            <p>Giving your website a more experienced experience</p>
          </div>

          {/* Call-To-Action Btn */}
          <div>
            <a href="#"><img src=""></img>View Work</a>
          </div>

          {/* Work Preview Carousel */}
          <div>
            
          </div>
          
        </div>

      </div>
    </header>
  )
}

export default Header

import React, { useState } from 'react';
import { regIcons, socialsIcons } from './navIcons';

import './navbar.css';

const Navbar = () => {
  // Menu Slider
  const [open, setOpen] = useState(false);

  return (
    // Navbar
    <nav className="flex fixed w-full">
      {/* Nav Outer Container */}
      <div className="nav-outer w-full dark:nav-light">
        {/* Nav Inner Reg Container */}
        <div className="nav-inner-reg">
          {/* Nav List Container */}
          <div>
            <ul className="flex justify-around">
              {regIcons.map((nav, index) => (
                <a
                  href={nav.pathway}
                  className="nav-link justify-center text-center pt-2 pb-1 "
                >
                  {/* Nav List */}
                  <li key={index} className="nav-list dark:text-white">
                    <span>
                      <span className="reg-icon-images">{nav.icon}</span>
                      <span>{nav.title}</span>
                    </span>
                  </li>
                </a>
              ))}
              <div>
                <span
                  className="cursor-pointer nav-list"
                  onClick={() => setOpen(!open)}
                >
                  <i
                    className={`openCloseIcon ${
                      open
                        ? 'fa fa-times text-black text-lg dark:text-white'
                        : 'fa fa-list text-black text-lg dark:text-white'
                    }`}
                  ></i>
                </span>
              </div>
            </ul>
          </div>
        </div>

        {/* Nav Inner Socials Container */}
        <div className={`${open ? 'h-full' : 'h-0'} nav-inner-reg`}>
          {/* Nav List Container */}
          <div>
            <ul className="flex justify-around">
              {socialsIcons.map((nav, index) => (
                <a
                  href={nav.pathway}
                  className="nav-link  justify-center text-center"
                >
                  {/* Nav List */}
                  <li key={index} className={` ${!open && 'hidden'} nav-list`}>
                    <span>
                      <span className="social-icon-images dark:text-white">
                        {nav.icon}
                      </span>
                      <span className="dark:text-white">{nav.title}</span>
                    </span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// ${open ? 'h-full' : 'h-0'}

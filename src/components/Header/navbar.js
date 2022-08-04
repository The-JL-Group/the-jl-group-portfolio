import React, { useState } from 'react';
import { regIcons, socialsIcons, ctaIcons } from '../Header/navIcons'

const Navbar = () => {
  return (
    <nav>
       {/* Regular Navbar */}
       <div>

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
        </div>
    </nav>
  )
}

export default Navbar
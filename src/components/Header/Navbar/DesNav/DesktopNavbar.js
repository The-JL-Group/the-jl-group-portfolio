import React from 'react'
import './desktopNavbar.css';

const DesktopNavbar = () => {
  return (
    <div className='desktop-nav'>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Work</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default DesktopNavbar;
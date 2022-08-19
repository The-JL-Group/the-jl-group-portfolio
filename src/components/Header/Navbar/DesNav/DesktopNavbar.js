import React, { useState } from 'react';
import './desktopNavbar.css';

const DesktopNavbar = () => {

  // Y-axis Header Scroll Animation
  // state is `navbar`
  const [desktopNav, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={desktopNav ? 'desktopNav active dark:text-white dark:bg-blk' : 'desktopNav'}>
        <ul>
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
            <li className='text-org dark:text-pnk'>
                <a href="#">work</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
        </ul>
    </div>
  )
}

export default DesktopNavbar;
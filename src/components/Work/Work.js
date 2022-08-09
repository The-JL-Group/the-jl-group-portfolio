import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './work.css';

import desktopDark from '../../assets/work-desktop-dark.png';
import desktopLight from '../../assets/work-desktop-light.png';
import tabletDark from '../../assets/work-tablet-light.svg';
import tabletLight from '../../assets/work-tablet-light.svg';
import phoneDark from '../../assets/work-phone-light.svg';
import phoneLight from '../../assets/work-phone-light.svg';

const Work = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="work" className="work-container">
      {/* WORK HEADER */}

      <div className="work-header-main text-shadow-org dark:text-shadow-pnk">
        <h2>VIEW</h2>
        <h2>OUR</h2>
        <h2>WORK</h2>
      </div>

      {/* PROJECT 1 ON DESKTOP*/}
      <div className="work-tech">
        <img
          src={desktopDark}
          alt="Desktop Project 1"
          className="desktop-image"
        ></img>
        <div className="work-text">
          <h3>all american doors and windows, inc.</h3>
          <hr></hr>
          <p>
            A react-based, front-end, responsive website for a company centered
            around the refurbishing of doors, windows, molding, etc.
          </p>
          <hr></hr>
          <p>
            “best website i’ve ever had for my business! 10/10 recommend. will
            be a repeat customer”
          </p>
          <p>-Mr. P</p>
          {/* <a href="https://www.allamericandoorsandwindowsinc.com/">
            <img src={
              desktopDarkButton} alt="Desktop Button"></img>
          </a> */}
        </div>
      </div>

      {/* PROJECT 2 ON TABLET*/}
      <div className="work-tech">
        <img
          src={tabletDark}
          alt="Desktop Project 2"
          className="phone-image"
        ></img>
        <div className="work-text">
          <h3>medcare healthcert, llc.</h3>
          <hr></hr>
          <p>
            A react-based, front-end, and responsive website for a company
            centered around ccma certification.
          </p>
          <hr></hr>
          <p>“best website i’ve ever had for my business! 10/10 recommend.”</p>
          <p>-Mrs. H</p>
        </div>
      </div>

      {/* PROJECT 3 ON PHONE*/}
      <div className="work-tech">
        <img
          src={phoneDark}
          alt="Desktop Project 3"
          className="phone-image"
        ></img>
        <div className="work-text">
          <h3>coming soon.</h3>
        </div>
      </div>
    </section>
  );
};

export default Work;

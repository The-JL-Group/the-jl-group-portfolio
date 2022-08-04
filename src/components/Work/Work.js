import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './work.css';

import desktopDark from '../../assets/desktop-work-dark.svg';
import desktopLight from '../../assets/desktop-work-light.svg';
import tabletDark from '../../assets/tablet-work-light.svg';
import tabletLight from '../../assets/tablet-work-light.svg';
import phoneDark from '../../assets/phone-work-light.svg';
import phoneLight from '../../assets/phone-work-light.svg';

const Work = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="work-container">
      {/* WORK HEADER */}
      <div className="work-header">
        <h2>VIEW</h2>
        <h2>OUR</h2>
        <h2>WORK</h2>
      </div>

      {/* PROJECT 1 ON DESKTOP*/}
      <div className="work-deskop">
        <h3>all american doors and windows, inc.</h3>
        <p>
          A react-based, front-end, responsive website for a company centered
          around the refurbishing of doors, windows, molding, etc.
        </p>
        <p>
          “best website i’ve ever had for my business! 10/10 recommend. will be
          a repeat customer”
        </p>
        <p>-Mr. P</p>
        <button></button>
        <img src={desktopDark} alt="Desktop Project 1"></img>
      </div>

      {/* PROJECT 2 ON TABLET*/}
      <div className="work-tablet">
        <h3>medcare healthcert, llc.</h3>
        <p>
          A react-based, front-end, and responsive website for a company
          centered around ccma certification.
        </p>
        <p>“best website i’ve ever had for my business! 10/10 recommend.”</p>
        <p>-Mrs. H</p>
        <button></button>
        <img src={tabletDark} alt="Desktop Project 2"></img>
      </div>

      {/* PROJECT 3 ON PHONE*/}
      <div className="work-phone">
        <h3>coming soon.</h3>
        <button></button>
        <img src={phoneDark} alt="Desktop Project 3"></img>
      </div>
    </section>
  );
};

export default Work;

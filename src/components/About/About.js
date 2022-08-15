import React, { useState } from "react";

import './about.scss';

// The Cards
import AboutCards from './AboutCards/JamesCard/AboutCards'

const AboutJames = () => {

  return (
    <section>
      <div id="about" className="j-main-about">
        {/* Component Title */}
        <div className="text-shadow-org dark:text-shadow-pnk">
          <div className="about-text-container">
            <h2 className="about-about">ABOUT</h2>
          </div>
         
        </div>

        {/* Card Components */}
        <AboutCards/>
        {/* <LinaAboutCard /> */}
      </div>
    </section>
  );
};

export default AboutJames;
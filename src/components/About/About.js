import React, { useState } from "react";

import './about.css';

// The Cards
import AboutCards from './AboutCards/JamesCard/AboutCards'

const AboutJames = () => {

  return (
    <section>
      <div id="about" className="j-main-about">
        {/* Component Title */}
        <div className="text-shadow-org dark:text-shadow-pnk">
          <h2>ABOUT US</h2>
        </div>

        {/* Card Components */}
        <AboutCards/>
        {/* <LinaAboutCard /> */}
      </div>
    </section>
  );
};

export default AboutJames;
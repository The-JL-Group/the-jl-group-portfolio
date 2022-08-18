import React, { useState } from "react";

import './about.scss';

// The Cards
import AboutCards from './AboutCards/JamesCard/AboutCards'

const AboutJames = () => {

  return (
    <section id="about" className="j-main-about">
      <div className="j-card-flex">
        <h2 className="about-about text-shadow-org dark:text-shadow-pnk">ABOUT</h2>
        <AboutCards/>      
      </div>
    </section>
  );
};

export default AboutJames;
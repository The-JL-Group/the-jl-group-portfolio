import React from 'react';

import './about.scss';

// The Cards
import AboutCards from './AboutCards/JamesCard/AboutCards';

const AboutJames = () => {
  return (
    <div id="about" className="j-main-about">
      <div className="j-card-flex">
        <h2 className="about-about text-shadow-org dark:text-shadow-pnk">
          ABOUT
        </h2>
        <AboutCards />
      </div>
    </div>
  );
};

export default AboutJames;

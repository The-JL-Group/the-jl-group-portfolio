import React from 'react';

import './about.scss';

// The Cards
import LinaAboutCard from './AboutCards/LinaCard/linaAboutCard';

const AboutLina = () => {
  return (
    <div id="about-lina" className="l-main-about">
      <div className="l-card-flex">
        <h2 className="about-us text-shadow-org dark:text-shadow-pnk">US</h2>
        <LinaAboutCard />
      </div>
    </div>
  );
};

export default AboutLina;

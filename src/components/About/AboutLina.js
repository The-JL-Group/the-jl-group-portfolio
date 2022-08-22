import React, { useState } from 'react';

import './about.scss';

// The Cards
import LinaAboutCard from './AboutCards/LinaCard/linaAboutCard';

const AboutLina = () => {
  return (
    <section id="about" className="l-main-about">
      <div className="l-card-flex">
        <h2 className="about-us text-shadow-org dark:text-shadow-pnk">US</h2>
        <LinaAboutCard />
      </div>
    </section>
  );
};

export default AboutLina;

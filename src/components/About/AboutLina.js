import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './about.scss';

// The Cards
import LinaAboutCard from './AboutCards/LinaCard/linaAboutCard';

const AboutLina = () => {
  return (
    <div
      id="about-lina"
      className="l-main-about"
      // ref={ref}
    >
      <div
        className="l-card-flex"
        // animate={animation}
      >
        <h2 className="about-us text-shadow-org dark:text-shadow-pnk">US</h2>
        <LinaAboutCard />
      </div>
    </div>
  );
};

export default AboutLina;

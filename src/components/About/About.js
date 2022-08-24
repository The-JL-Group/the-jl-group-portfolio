import React, { useEffect } from "react";

// Framer Motion
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import './about.scss';

// The Cards
import AboutCards from './AboutCards/JamesCard/AboutCards'

const AboutJames = () => {


  return (
    <div 
      id="about" 
      className="j-main-about"
      // ref={ref}
      
    >
      <div 
        className="j-card-flex"
      >
        <h2 className="about-about text-shadow-org dark:text-shadow-pnk">ABOUT</h2>
        <AboutCards/>      
      </div>
    </div>
  );
};

export default AboutJames;
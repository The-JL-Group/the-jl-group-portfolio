import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Aos from 'aos';
import 'aos/dist/aos.css';

import './about.scss';

// The Cards
import AboutCards from './AboutCards/JamesCard/AboutCards'

const AboutJames = () => {

  // useInView hook will monitor where the ref is specified when the component is in view (works as a boolean)
  // const {ref, inView} = useInView({
    // 20% of div should be visible before setting inView boolean true
  //   threshold: 0.1
  // });
  // const animation = useAnimation();

  // useEffect hook function is called everytime component renders; When state in component changes
  // Updates data in component when component when isView is true || false
  // useEffect(() => {
  //   console.log("useEffect hook, inView = ", inView);
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: 'spring', duration: 2.5, bounce: 0.3
  //       }
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ x: '-100vw' })
  //   }
  // }, [inView]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div 
      id="about" 
      className="j-main-about"
      // ref={ref}
      // animate={animation}
      // data-aos="fade-up"
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
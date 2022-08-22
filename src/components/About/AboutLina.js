import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import './about.scss';

// The Cards
import LinaAboutCard from "./AboutCards/LinaCard/linaAboutCard";

const AboutLina = () => {

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
  // }, [inView])

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
        <LinaAboutCard/>
      </div>
    </div>
  );
};

export default AboutLina;
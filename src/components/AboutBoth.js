import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutJames from './About/About';
import AboutLina from './About/AboutLina';

const AboutBoth = () => {

  const {ref, inView} = useInView({
    // threshold: 0.1 
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("useEffect hook, inView = ", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 2.5, bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' })
    }
  }, [inView]);

  return (
    <motion.div
         ref={ref}
      animate={animation}
    >
        <AboutJames/>
        <AboutLina/>
    </motion.div>
  )
}

export default AboutBoth;
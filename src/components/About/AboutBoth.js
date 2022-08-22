<<<<<<< HEAD:src/components/AboutBoth.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutJames from './About/About';
import AboutLina from './About/AboutLina';
=======
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutJames from './About';
import AboutLina from './AboutLina';
>>>>>>> ee69b504c1da13472143d5c66390333e52c4d6eb:src/components/About/AboutBoth.js

const AboutBoth = () => {
  const { ref, inView } = useInView({
    // threshold: 0.1
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log('useEffect hook, inView = ', inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' });
    }
  }, [inView]);

  return (
<<<<<<< HEAD:src/components/AboutBoth.js
    <motion.div ref={ref} animate={animation}>
      <AboutJames />
      <AboutLina />
=======
    <motion.div
      className="overflow-hidden"
      ref={ref}
      animate={animation}
    >
        <AboutJames/>
        <AboutLina/>
>>>>>>> ee69b504c1da13472143d5c66390333e52c4d6eb:src/components/About/AboutBoth.js
    </motion.div>
  );
};

export default AboutBoth;

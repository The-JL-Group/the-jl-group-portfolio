import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutJames from './About';
import AboutLina from './AboutLina';

import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutBoth = () => {
  const { ref, inView } = useInView({
    // threshold: 0.1
  });
  const animation = useAnimation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    console.log('useEffect hook, inView = ', inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          // type: 'spring',
          duration: 2,
          // bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' });
    }
  }, [inView]);

  return (
    <motion.div 
      className="overflow-hidden" 
      // ref={ref} 
      // animate={animation}
      data-aos="fade-up-right"
    >
      <AboutJames />
      <AboutLina />
    </motion.div>
  );
};

export default AboutBoth;

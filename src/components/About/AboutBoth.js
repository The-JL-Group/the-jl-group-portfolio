import React, { useEffect } from 'react';

// Components
import AboutJames from './About';
import AboutLina from './AboutLina';

// Framer Motion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AboutBoth = () => {

  // Framer Motion Hook
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const motionVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    hidden: { opacity: 0, scale: 0.5 },
  };

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);


  return (
    <motion.div 
      className="overflow-hidden" 
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={motionVariants}
    >
      <AboutJames />
      <AboutLina />
    </motion.div>
  );
};

export default AboutBoth;

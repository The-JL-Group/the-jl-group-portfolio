import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './marquee.scss';

// Lines
const line1 = "THE";
const line2 = "JL";
const line3 = "GROUP";

// Variants
const text = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.4,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const Banner = () => {

  return (
    <motion.div 
      className="text-header-org dark:text-header-pnk text-header-div"
    >
      <motion.h1
         className="text-header"
         variants={text}
         initial="hidden"
         animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span 
              key={char + "-" + index} 
              variants={letter}
            >
              {char}
            </motion.span>
          )
        })}
     
      </motion.h1>

      <motion.h1
         className="text-header"
         variants={text}
         initial="hidden"
         animate="visible"
      >
        {line2.split("").map((char, index) => {
          return (
            <motion.span 
              key={char + "-" + index} 
              variants={letter}
            >
              {char}
            </motion.span>
          )
        })}
     
      </motion.h1>

      <motion.h1
         className="text-header"
         variants={text}
         initial="hidden"
         animate="visible"
      >
        {line3.split("").map((char, index) => {
          return (
            <motion.span 
              key={char + "-" + index} 
              variants={letter}
            >
              {char}
            </motion.span>
          )
        })}
     
      </motion.h1>

    </motion.div>
  )
}

export const HeaderMarquee = () => {

  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div>
      <MarqueeSubheading />
    </motion.div>
  )
}

const MarqueeSubheading = ({ playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
       initial={{ y: 310 }}
       animate={{ y: 0 }}
       transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
       className='marquee__inner'
      >
        <h3 disabled>experience</h3>
        <h3>experience</h3>
        <h3 disabled>experience</h3>
        <h3 disabled>experience</h3>
      </motion.div>
    </div>
  )
}


export default Banner;
import React, { useEffect } from 'react';
import './contact.css';
import InputBox from './InputBox';
import Copyright from '../Copyright/Copyright';

// Framer Motion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  // Framer Motion Hook
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  const titleVariants = {
    visible: {
      y: 0,

      transition: {
          type: 'spring', duration: 2, bounce: 0.3
      }
    },
    hidden: { y: '100vh'},
  }

  const imgVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
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
    <section id="contact" className="contact-container" ref={ref}>
      <motion.h2 
        className="contact-header text-shadow-org dark:text-shadow-pnk "
        animate={animation}
        initial="hidden"
        variants={titleVariants}
      >
        CONTACT
      </motion.h2>
      <motion.div
        animate={animation}
        initial="hidden"
        variants={imgVariants}
      >
        {/* IMAGE CONTAINER */}
        {/* ON SMALLER SCREEN | HIDDEN ON LARGE AND UP */}
        <div className="bg-contact-dark dark:bg-contact-light bg-cover object-cover contact-image lg:hidden"></div>

        {/* ON LARGER SCREEN | HIDDEN ON MEDIUM AND DOWN*/}
        <div className="bg-full-dark dark:bg-full-light bg-cover object-cover contact-image-large hidden lg:inline-flex"></div>
      </motion.div>

      {/* TEXT ON SMALLER SCREEN / HIDDEN ON LARGE */}
      <div className="contact-text lg:hidden">
        <p>
          Have any
          <span className="text-org dark:text-pnk"> QUESTIONS?</span>
        </p>
        <p>
          Hit our{' '}
          <a
            href="mailto:jameslinagroup@gmail.com"
            className="text-org dark:text-pnk"
          >
            EMAIL
          </a>{' '}
          or send us
        </p>
        <p>
          a <span className="text-org dark:text-pnk">MESSAGE</span> down below
        </p>
        <p>
          or find us on
          <a
            href="https://github.com/The-JL-Group"
            className="text-org dark:text-pnk"
          >
            {' '}
            GITHUB
          </a>
        </p>
        <p>
          and find us on
          <a
            href="https://www.fiverr.com/thejlgroup/design-and-create-your-custom-unique-website-using-react"
            className="text-org dark:text-pnk"
          >
            {' '}
            FIVERR
          </a>
        </p>
      </div>

      {/* EMAIL CONTAINER */}
      <div className="pb-6 lg:py-6">
        <a
          href="mailto:jameslinagroup@gmail.com"
          className="text-org dark:text-pnk lg:text-2xl"
        >
          jameslinagroup@gmail.com
        </a>
      </div>

      {/* EMAIL JS */}
      <div className="lg:p-8 mb-10">
        <InputBox />
      </div>

      <Copyright />
    </section>
  );
};

export default Contact;

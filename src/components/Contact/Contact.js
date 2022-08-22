import React, { useEffect } from 'react';
import './contact.css';
import InputBox from './InputBox';
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const blockVariants = {
    initial: {
      rotate: 0,
    },
    target: {
      rotate: 360,
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);

  // Framer Motion Hook
  // const { ref, inView } = useInView({
  //   threshold: 0.2,
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       style: {
  //         rotate,
  //         scale,
  //       },
  //       variants: { blockVariants },
  //       initial: 'initial',
  //       animate: 'target',
  //       transition: {
  //         ease: 'easeInOut',
  //         duration: 3,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ x: '-100vw' });
  //   }
  //   console.log('use effect hook, inView =', inView);
  // }, [inView]);

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-header text-shadow-org dark:text-shadow-pnk ">
        CONTACT
      </h2>
      <motion.div
        // animate={animation}
        // style={{
        //   rotate,
        //   scale,
        // }}
        // variants={blockVariants}
        // initial="initial"
        // animate="target"
        // transition={{
        //   ease: 'easeInOut',
        //   duration: 3,
        // }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: 'spring',
            damping: 8,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
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
    </section>
  );
};

export default Contact;

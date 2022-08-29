import React, { useEffect } from 'react';

// Styling
import './testimonials.css';

// Framer Motion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  // Framer Motion Hook
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  const titleVariants = {
    visible: {
      x: 0,

      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.3,
      },
    },
    hidden: { x: '100vw' },
  };

  const cardVariants = {
    visible: {
      x: 0,

      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.3,
      },
    },
    hidden: { x: '-100vw' },
  };

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <section className="testimonials-container body-font" ref={ref}>
      <motion.h1
        className="testimonials-header text-shadow-org dark:text-shadow-pnk"
        animate={animation}
        initial="hidden"
        variants={titleVariants}
      >
        Testimonials
      </motion.h1>
      <motion.div
        className="container px-5 py-6 mx-auto"
        animate={animation}
        initial="hidden"
        variants={cardVariants}
      >
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white dark:bg-blk p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-org dark:text-pnk mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 text-blk dark:text-white">
                I'm very impressed. they were open for feedback and really, at
                the end of the day, turned our antiquated website into something
                more modern.
              </p>
              <div className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-org dark:text-pnk title-font font-medium ">
                    pete ninatale
                  </span>
                  <span className="text-sm text-blk dark:text-white">
                    CEO - all american doors &#38; windows
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white dark:bg-blk p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-org dark:text-pnk mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>

              <p class="leading-relaxed mb-6 text-blk dark:text-white">
                We had some other offers to rebuild our site. it was incredibly
                antiquated. James and Lina rebuilt it from the ground up.
                They've been only helpful.
              </p>
              <div class="inline-flex items-center">
                <span class="flex-grow flex flex-col pl-4">
                  <span class="text-org dark:text-pnk title-font font-medium ">
                    susanna edwards
                  </span>
                  <span class="text-sm text-blk dark:text-white">
                    Co-CEO - all american doors &#38; windows
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

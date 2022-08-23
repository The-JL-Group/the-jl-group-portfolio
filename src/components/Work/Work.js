import React, { useState, useEffect } from 'react';
import './work.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  // ADD NEW PROJECTS HERE
  const workDetails = [
    {
      project: 'all american',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      image: 'work-card-1',
      className: 'object-top',
    },
    {
      project: 'medcare healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'work-card-2',
      className: 'object-left-top',
    },
    {
      project: 'the jl group portfolio',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'work-card-2',
      className: 'object-left-top',
    },
  ];

  const [workList, setWorkList] = useState(workDetails);

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
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: { type: 'spring', damping: 8, stiffness: 100, restDelta: 0.001 },
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
    <section className="work-container"
    id="work">
      {/* HEADER CONTAINER */}
      <motion.div
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={motionVariants}
      >
        <div className="work-container-header">
          <h2 className="work-header text-shadow-org dark:text-shadow-pnk">
            VIEW OUR WORK
          </h2>
        </div>

        {/* WORK CARD CONTAINER */}
        <div className="work-card-section">
          {workList.map((item, index) => (
            <a
              className="work-card dark:bg-ltPnk dark:before:bg-blk"
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.project}
            >
              <img
                src={require('../../assets/' + item.image + '.png')}
                alt={item.project}
                className={item.className}
              ></img>
              <h3 className="dark:text-white">{item.project}</h3>
              <div className="corner dark:bg-blk">
                <div className="arrow dark:text-ltPnk">→</div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;

import React, { useState, useEffect } from 'react';
import './work.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineFileExclamation } from 'react-icons/ai';

const Work = () => {
  // ADD NEW PROJECTS HERE
  const workDetails = [
    {
      project: 'all american',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      image: 'work-card-1',
      class: 'object-top',
    },
    {
      project: 'medcare healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'work-card-2',
      class: 'object-left-top',
    },
    {
      project: 'the jl group portfolio',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'work-card-2',
      class: 'object-left-top',
    },
  ];

  const [workList, setWorkList] = useState(workDetails);

  // Framer Motion Hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' });
    }
    console.log('use effect hook, inView =', inView);
  }, [inView]);

  return (
    <section className="work-container">
      {/* HEADER CONTAINER */}
      <div className="work-container-header">
        <h2 className="work-header text-shadow-org dark:text-shadow-pnk">
          VIEW OUR WORK
        </h2>
      </div>

      {/* WORK CARD CONTAINER */}
      <div ref={ref} className="work-card-section">
        {workList.map((item, index) => (
          <motion.div animate={animation}>
            <a
              className="work-card dark:bg-ltPnk dark:before:bg-blk"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require('../../assets/' + item.image + '.png')}
                alt={item.project}
                className={item.class}
              ></img>
              <h3 className="dark:text-white">{item.project}</h3>
              <div className="corner dark:bg-blk">
                <div className="arrow dark:text-ltPnk">→</div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;

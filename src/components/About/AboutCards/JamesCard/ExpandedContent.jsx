import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Close } from '../../../../assets/icons/x-icon-light.svg';
import {
  expandedVariants,
  contentBlockVariants,
  mainImageVariants,
} from './variants';
// Regular Card Data
import data from './data.js';

// Modal
import JModal from '../CardModals/CardModals';

export const ModalBtn = (props) => {
  console.log(props);

  // NEED THIS IN ABOUT.JS
  const [modal, setModal] = useState(false);
  // const [tempdata, setTempdata] = useState([])

  const getData = (jamesImgSrc, expandedTitle) => {
    let tempData = [jamesImgSrc, expandedTitle];
    // setTempdata(item => [1, ...])

    return setModal(true);
  };

  return (
    <div className='j-about-btn-container'>
      {/* Show Modal */}
      <button
        className="j-about-btn"
        onClick={() => getData(data.expandedTitle, data.jamesImgSrc)}
      >
        about me
      </button>
      {modal === true ? <JModal hide={() => setModal(false)} /> : ''}
    </div>
  );
};

const PortfolioBtn = () => {
  return (
    <div>
      <button className="j-portfolio-btn">my portfolio</button>
    </div>
  );
};

// Utility component to assist w/animations that will be repeated
const AnimatedContentBlock = ({ children }) => (
  <motion.div variants={contentBlockVariants}>{children}</motion.div>
);

// Main expanded content component
// James
const JamesExpandedContent = ({ data, onClick }) => (
  <motion.div
    // variants={expandedVariants}
    animate="active"
    initial="inactive"
    exit="exit"
  >
    <button className="j-expanded-close" onClick={() => onClick(false)}>
      <Close />
    </button>
    <motion.div className="card-content-flex j-float-container j-expanded-content j-float-child">
      <div className="j-inner-card">
        <div className="j-profile-sidebar">
          <img className="j-profile-img" src={data.jamesImgSrc}></img>
          <ul className="j-social-list">
            <li className="j-social-item">
              <a href="https://github.com/jimbolikesgithub" className="j-social-link" target="_blank" rel="noreferrer">
                {data.github}
              </a>
            </li>
            <li className="j-social-item">
              <a href="mailto:edwards.econn@gmail.com" className="j-social-link" target="_blank" rel="noreferrer">
                {data.email}
              </a>
            </li>
            <li className="j-social-item">
              <a href="https://www.linkedin.com/in/james-edwards-4b820422b/" className="j-social-link" target="_blank" rel="noreferrer">
                {data.linkedIn}
              </a>
            </li>
          </ul>
        </div>
        <div className="j-profile-main">
          <p className="j-profile-name">{data.expandedTitle}</p>
          <p className="j-profile-position">UX/UI Developer</p>
          <p className="j-profile-body">{data.longDescription}</p>
          <ModalBtn />
          {/* <PortfolioBtn/> */}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default JamesExpandedContent;



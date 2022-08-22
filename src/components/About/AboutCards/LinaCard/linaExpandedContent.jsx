import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Close } from '../../../../assets/icons/x-icon-light.svg';
import {
  expandedVariants,
  contentBlockVariants,
  mainImageVariants,
} from './linaVariants';
// Regular Card Data
import data from './linaData.js';

// Modal
import LModal from '../CardModals/linaCardModal';

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
    <div>
      {/* Show Modal */}
      <button
        className="l-about-btn"
        onClick={() => getData(data.expandedTitle, data.jamesImgSrc)}
      >
        about me
      </button>
      {modal === true ? <LModal hide={() => setModal(false)} /> : ''}
    </div>
  );
};

const PortfolioBtn = () => {
  return (
    <div>
      <button className="l-portfolio-btn">my portfolio</button>
    </div>
  );
};

// Utility component to assist w/animations that will be repeated
const AnimatedContentBlock = ({ children }) => (
  <motion.div variants={contentBlockVariants}>{children}</motion.div>
);

// Main expanded content component
// James
const LinaExpandedContent = ({ data, onClick }) => (
  <motion.div
    // variants={expandedVariants}
    animate="active"
    initial="inactive"
    exit="exit"
  >
    <button className="j-expanded-close" onClick={() => onClick(false)}>
      <Close />
    </button>
    <motion.div className="card-content-flex l-expanded-content">
      <div className="l-inner-card">
        <div className="l-profile-sidebar">
          <img className="l-profile-img" src={data.linaImgSrc}></img>
          <ul className="l-social-list">
            <li className="l-social-item">
              <a href="#" className="l-social-link"></a>
              {data.github}
            </li>
            <li className="l-social-item">
              <a href="#" className="l-social-link"></a>
              {data.email}
            </li>
            <li className="l-social-item">
              <a href="#" className="l-social-link"></a>
              {data.linkedIn}
            </li>
          </ul>
        </div>
        <div className="l-profile-main">
          <p className="l-profile-name">{data.expandedTitle}</p>
          <p className="l-profile-position">UX/UI Developer</p>
          <p className="l-profile-body">{data.longDescription}</p>
          <ModalBtn />
          {/* <PortfolioBtn/> */}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Main expanded content component
// Lina

export default LinaExpandedContent;

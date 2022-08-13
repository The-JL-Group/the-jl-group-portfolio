import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Close } from "../../../../assets/icons/x-icon-light.svg";
import {
  expandedVariants,
  contentBlockVariants,
  mainImageVariants
} from "./linaVariants";
// Regular Card Data
import data from "./linaData.js";

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
  }

  return (
    <div>
      {/* Show Modal */}
          <button 
          className="j-about-btn"
          onClick={() => getData(data.expandedTitle, data.jamesImgSrc)}
        >
          about me
        </button>
        {
          modal === true ? <LModal hide={() => setModal(false)} /> : ''
        }
    </div>
  )
};

// Lina Modal


// Utility component to assist w/animations that will be repeated
const AnimatedContentBlock = ({ children }) => (
    <motion.div 
    variants={contentBlockVariants}
    >
      {children}
    </motion.div>
  );
  
// Main expanded content component
// James 
const LinaExpandedContent = ({
    data,
    onClick,
  }) => (
    <motion.div 
        // variants={expandedVariants}
        animate="active"
        initial="inactive"
        exit="exit"
    >
      <button 
        className="j-expanded-close" 
        onClick={() => onClick(false)}
      >
        <Close />
      </button>
        <motion.div className="card-content-flex">
            <motion.div 
                className="jimbo-image-container"
                variants={mainImageVariants}
                >
                {/* <img
                src={data.jamesImgSrc}
                alt={data.imgAlt}
                className="james-main-image"
                /> */}
            </motion.div>
            {/* Expanded Content */}
            <motion.div className="j-expanded-content">
                <AnimatedContentBlock>
                    {/* <span className="title-large">{data.expandedTitle}</span> */}
                    <span className="location">{data.location}</span>
                    <span className="price">{data.price}</span>
                    <p>{data.longDescription}</p>
                </AnimatedContentBlock>
                <AnimatedContentBlock>
                    {/* <ul className="amenities-list card-content-flex">
                    {data.amenities.map((amenity) => (
                        <li key={amenity.name}>
                        <amenity.icon />
                        <span>{amenity.name}</span>
                        </li>
                    ))}
                    </ul> */}
                </AnimatedContentBlock>
                {/* <AnimatedContentBlock>
                    <button className="j-portfolio-btn">My Portfolio</button>
                </AnimatedContentBlock> */}
                <AnimatedContentBlock>
                  <ModalBtn/>
                </AnimatedContentBlock>
            </motion.div>
        </motion.div>
    </motion.div>
  );

// Main expanded content component
// Lina 

export default LinaExpandedContent;
import React from "react";
import { motion } from "framer-motion";
import {
  cardContentVariants,
  thumbnailVariants,
  contentVariants,
} from "./linaVariants";

const linaCardContent = ({
    data,
    onClick,
  }) => (
    <motion.div 
    className="l-card-content-flex"
    variants={cardContentVariants}
    exit="inactive"
    animate="active"
    initial="inactive"
    >
      <motion.div 
      className="thumbnail-container"
      // variants={thumbnailVariants}
      >
        <img
          src={data.imgSrc}
          alt={data.imgAlt}
          className="thumbnail"
        />
      </motion.div>
      <motion.div 
      className="initial-content"
      // variants={contentVariants}
      >
        <span className="l-title text-header-org dark:text-header-pnk">{data.contentTitle}</span>
        <span className="location">{data.location}</span>
        <span className="price">{data.price}</span>
        <p>{data.shortDescription}</p>
        <button className="l-info-btn" onClick={() => onClick(true)}>click me!</button>
      </motion.div>
    </motion.div>
  );
  
  export default linaCardContent;
  

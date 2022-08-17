import React from "react";
import { motion } from "framer-motion";
import {
  cardContentVariants,
  thumbnailVariants,
  contentVariants,
} from "./variants";

const CardContent = ({
    data,
    onClick,
  }) => (
    <motion.div 
    className="j-card-content-flex"
    variants={cardContentVariants}
    exit="inactive"
    animate="active"
    initial="inactive"

    // onClick={() => onClick(true)}
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
        {/* Name */}
        <span className="j-title text-header-org dark:text-header-pnk">{data.contentTitle}</span>
        <span className=""></span>
        <span className="price">{data.price}</span>
        <p>{data.shortDescription}</p>
        <button className="j-info-btn" 
        onClick={() => onClick(true)}
        >click me!</button>
      </motion.div>
    </motion.div>
  );
  
  export default CardContent;
  

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
    className="card-content-flex"
    variants={cardContentVariants}
    exit="inactive"
    animate="active"
    initial="inactive"
    >
      <motion.div 
      className="thumbnail-container"
      variants={thumbnailVariants}
      >
        <img
          src={data.imgSrc}
          alt={data.imgAlt}
          className="thumbnail"
        />
      </motion.div>
      <motion.div 
      className="initial-content"
      variants={contentVariants}
      >
        <span className="title">{data.title}</span>
        <span className="location">{data.location}</span>
        <span className="price">{data.price}</span>
        <p>{data.shortDescription}</p>
        <button className="info-btn" onClick={() => onClick(true)}>More Info</button>
      </motion.div>
    </motion.div>
  );
  
  export default CardContent;
  

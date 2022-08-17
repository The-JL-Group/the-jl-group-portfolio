// Packages
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import cardData from "./data";
import CardContent from "./CardContent";
import JamesExpandedContent from "./ExpandedContent";

// Stylesheet
import './aboutCard.css';

// Card Variants
import { cardVariants } from "./variants";

const RentalCard = () => {
	const [isExpanded, setIsExpanded] = useState();

	return (
    <div className="">
 
    {/* James's Card */}
    <motion.div 
      className={`j-card ${isExpanded ? 'expanded' : 'initial'}`}
      // Variants & Animations
      // Initial Animations  
      // variants={cardVariants}
      variants={cardVariants}

      animate={isExpanded ? 'active' : 'inactive'}
      // Required to prevent animations from running on page load
      initial="inactive"
      >
      <div className="j-content">
        <AnimatePresence
          initial={false}
          exitBeforeEnter
        >
         {!isExpanded ? (
        <CardContent
          data={cardData}
          onClick={setIsExpanded}
          key="content" // Children of AnimatePresence need a key
        />
        ) : (
        <JamesExpandedContent
          className="z-10"
          data={cardData}
          onClick={setIsExpanded}
          key="contentExpanded" // Children of AnimatePresence need a key
        />
        )}
        </AnimatePresence>
      </div>
    </motion.div>
    </div>
  );
}

export default RentalCard;
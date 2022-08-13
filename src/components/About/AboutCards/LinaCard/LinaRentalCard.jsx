// Packages
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import cardData from "./linaData";
import CardContent from "./linaCardContent";
import LinaExpandedContent from "./linaExpandedContent";

// Stylesheet
import './linaAboutCard.css'

// Card Variants
import { cardVariants } from "./linaVariants";

const LinaRentalCard = () => {
	const [isExpanded, setIsExpanded] = useState();

	return (
    <div className="">

    {/* James's Card */}
    <motion.div 
      className={`card ${isExpanded ? 'expanded' : 'initial'}`}
      // Variants & Animations
      // Initial Animations  
      // variants={cardVariants}
      variants={cardVariants}

      animate={isExpanded ? 'active' : 'inactive'}
      // Required to prevent animations from running on page load
      initial="inactive"
      >
      <div className="l-content">
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
        <LinaExpandedContent
         className="z-10"
          data={cardData}
          onClick={setIsExpanded}
          key="contentExpanded" // Children of AnimatePresence need a key
        />
        )}
        </AnimatePresence>
      </div>
    </motion.div>

  {/* Lina's Card */}
    {/* <motion.div className={`card ${isExpanded ? 'expanded' : 'initial'}`}>
      <div className="content">
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
  <ExpandedContent
    data={cardData}
    onClick={setIsExpanded}
    key="contentExpanded" // Children of AnimatePresence need a key
  />
)}
        </AnimatePresence>
      </div>
    </motion.div> */}
    </div>
  );
}

export default LinaRentalCard;
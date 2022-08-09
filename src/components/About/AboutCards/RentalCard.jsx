// Packages
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import cardData from "./data";
import CardContent from "./CardContent";
import JamesExpandedContent from "./ExpandedContent";

// Stylesheet
import "./aboutCard.css";

// Card Variants
import { cardVariants } from "./variants";

const RentalCard = () => {
	const [isExpanded, setIsExpanded] = useState();

	return (
    <div>

    {/* James's Card */}
    <motion.div 
      className={`card ${isExpanded ? 'expanded' : 'initial'}`}
      // Variants & Animations

      variants={cardVariants}
      animate={isExpanded ? 'active' : 'inactive'}
      // Required to prevent animations from running on page load
      initial="inactive"
      >
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
        <JamesExpandedContent
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

export default RentalCard;
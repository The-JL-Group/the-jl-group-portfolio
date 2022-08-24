// Packages
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import cardData from './linaData';
import CardContent from './linaCardContent';
import LinaExpandedContent from './linaExpandedContent';

// Stylesheet
import './linaAboutCard.css';

// Card Variants
import { cardVariants } from './linaVariants';

const LinaRentalCard = () => {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <div className="">
      {/* James's Card */}
      <motion.div
        className={`l-card ${isExpanded ? 'expanded' : 'initial'}`}
        // Variants & Animations
        // Initial Animations
        variants={cardVariants}
        animate={isExpanded ? 'active' : 'inactive'}
        // Required to prevent animations from running on page load
        initial="inactive"

        // onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="l-content">
          <AnimatePresence initial={false} mode="wait">
            {!isExpanded ? (
              <CardContent
                data={cardData}
                onClick={setIsExpanded}
                key="content" // Children of AnimatePresence need a key
              />
            ) : (
              <LinaExpandedContent
                className=""
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
};

export default LinaRentalCard;

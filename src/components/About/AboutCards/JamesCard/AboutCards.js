import React, { useState } from 'react';

// import RentalCard from './RentalCard';
import Test from './RentalCard.js';

const AboutCards = ({ children }) => {
  return (
    <div>
      <div className="pt-3 relative">
        {/* <RentalCard /> */}
        <Test />
      </div>
    </div>
  );
};

export default AboutCards;

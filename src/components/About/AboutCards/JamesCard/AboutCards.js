import React, { useState } from 'react';

import RentalCard from './RentalCard';

const AboutCards = ({ children }) => {

  return (
    <div>
      <div className='pt-3 relative'>
        <RentalCard/>
      </div>
   </div>
  )
}

export default AboutCards;
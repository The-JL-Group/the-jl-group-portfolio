import { useRef, useEffect, useState } from 'react'
import './cardSlider.css'
// Motion NPM Package
import { motion } from 'framer-motion';
import images from './images'

const CardSlider = () => {

  return (
    // CHANGE NAMES LATER
    
    <motion.div className='carousel'>
      <motion.div className='inner-carousel'>
        {images.map(image => {
          return (
            <motion.div className='item'>
              <img src={image} alt="looped carousel images"></img>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default CardSlider
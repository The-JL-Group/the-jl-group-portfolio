import { useState } from 'react'
import { motion } from 'framer-motion';
import RentalCard from './RentalCard'
// import './aboutCard.css';
import './card.css'

import kratos from '../../../assets/kratos.jpg'

const AboutCards = () => {

  return (
    <RentalCard/>
  )
}

export default AboutCards;

{/* <div className='blog-container'>
<div className='blog-post'>
    <div className='blog-post-img'>
      <img src={kratos}></img>
    </div>
    <div className='blog-post-info'>
      <div className='blog-post-date'>
        <span>Sunday</span>
        <span>October 27 2019</span>
      </div>
        <span className='blog-post-title'>The God of War</span>
        <span className='blog-post-text'>
          You will pay for this Zeus... be certain of that..! *dies*
        </span>
        <a href="#" className='blog-post-cta'>Learn More</a>
    </div>
</div>
</div> */}
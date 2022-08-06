import { useRef, useEffect, useState } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './cardSlider.css'
import images from './images'

const CardSlider = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    // Image Container
    <div className='image-container'>
      {/* Image Wrapper */}
      <Carousel
       responsive={responsive} 
       swipeable={true}
       draggable={true}
       ssr={true}
       infinite={true}
       autoPlaySpeed={1000}
       keyBoardControl={true}
       removeArrowOnDeviceType={["mobile"]}
       className='image-wrapper'
      >
        {images.map(image => {
          return (
            <div className='carousel-image'>
              <img src={image}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  )
}

export default CardSlider;
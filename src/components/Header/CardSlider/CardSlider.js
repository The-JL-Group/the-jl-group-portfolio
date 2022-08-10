import React from 'react';
import './cardSlider.css';

// https://www.npmjs.com/package/react-owl-carousel
import OwlCarousel from 'react-owl-carousel';
// importing this in from the node_modules folder from the npm package
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import project1 from '../../../assets/carousel1.png';
import project2 from '../../../assets/carousel2.png';

function CardSlider() {
  const settings = {
    loop: true,
    center: true,
    items: 2,
    margin: 0,
    autoplay: true,
    dots: false,
    merge: false,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 2,
      },
    },
  };

  return (
    <div>
      <OwlCarousel className="owl-theme project-carousel" {...settings}>
        <div class="item drop-shadow-xl p-2">
          <img src={project1} alt="project 1"></img>
        </div>
        <div class="item drop-shadow-xl p-2">
          <img src={project2} alt="project 2"></img>
        </div>
        <div class="item drop-shadow-xl p-2">
          <p>coming soon!</p>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default CardSlider;

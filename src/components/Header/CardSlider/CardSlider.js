import React, { useState } from 'react';
import './cardSlider.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaHandHoldingMedical } from 'react-icons/fa';
import { MdConstruction } from 'react-icons/md';

function CardSlider() {
  const cardSliderDetails = [
    {
      project: 'All American',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      image: 'card-slider-1',
      class: 'object-left-top',
      icon: <FaHandHoldingMedical size={'3rem'} />,
    },
    {
      project: 'Medcare Healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'card-slider-2',
      class: 'object-left-top',
      icon: <MdConstruction size={'3rem'} />,
    },
  ];

  const [workSliderList, setWorkSliderList] = useState(cardSliderDetails);

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
        {workSliderList.map((item, index) => (
          <div className="item drop-shadow-xl p-2">
            <a href={item.url} target="_blank" rel="noreferrer">
              <p>{item.icon}</p>
            </a>
          </div>
        ))}
        <div className="item drop-shadow-xl p-2">
          <p>COMING SOON!</p>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default CardSlider;

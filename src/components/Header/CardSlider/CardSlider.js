import React, { useState } from 'react';
import './cardSlider.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function CardSlider() {
  const cardSliderDetails = [
    {
      project: 'All American',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      image: 'card-slider-1',
      class: 'object-left-top',
    },
    {
      project: 'Medcare Healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'card-slider-2',
      class: 'object-left-top',
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
    <div className='owl-carousel-hide'>
      <OwlCarousel className="owl-theme project-carousel" {...settings}>
        {workSliderList.map((item, index) => (
          <div>
            <div className="item drop-shadow-xl p-2">
              <img
                src={require('../../../assets/' + item.image + '.png')}
                alt={item.project}
                className={item.class}
              ></img>
            </div>
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

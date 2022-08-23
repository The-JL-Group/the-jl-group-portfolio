import React, { useState } from 'react';
import './tabletSlider.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaHandHoldingMedical } from 'react-icons/fa';
import { MdConstruction, MdComputer } from 'react-icons/md';

function TabletSlider() {
  const cardSliderDetails = [
    {
      project: 'All American',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      icon: <FaHandHoldingMedical size={'3rem'} />,
    },
    {
      project: 'Medcare Healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      icon: <MdConstruction size={'3rem'} />,
    },
    {
      project: 'The-JL-Group-Portfolio',
      url: '',
      icon: <MdComputer size={'3rem'} />,
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
    <div className="tab-owl-carousel-hide">
      <OwlCarousel className="owl-theme tab-project-carousel" {...settings}>
        {workSliderList.map((item, index) => (
          <div className="item drop-shadow-xl p-2">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.project}
            >
              <p className="bg-white text-blk dark:bg-blk dark:text-white">
                {item.icon}
              </p>
            </a>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TabletSlider;

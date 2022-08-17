import React, { useState } from 'react';
import './work.css';

const Work = () => {
  const workDetails = [
    {
      project: 'all american',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      image: 'work-card-1',
      class: 'object-top',
    },
    {
      project: 'medcare healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'work-card-2',
      class: 'object-left-top',
    },
  ];

  const [workList, setWorkList] = useState(workDetails);

  return (
    <section className="work-container">
      {/* HEADER CONTAINER */}
      <div className="work-container-header">
        <h2 className="text-shadow-org dark:text-shadow-pnk">VIEW OUR WORK</h2>
      </div>

      {/* WORK CARD CONTAINER */}
      <div className="work-card-section">
        {workList.map((item, index) => (
          <a
            className="work-card dark:bg-ltPnk dark:before:bg-blk"
            href={item.url}
          >
            <img
              src={require('../../assets/' + item.image + '.png')}
              alt={item.project}
              className={item.class}
            ></img>
            <h3 className="dark:text-white">{item.project}</h3>
            <div className="corner dark:bg-blk">
              <div className="arrow dark:text-ltPnk">→</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;

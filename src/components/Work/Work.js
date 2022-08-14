import React, { useState } from 'react';
import './work.css';

const Work = () => {
  const workDetails = [
    {
      project: 'all american doors & windows',
      url: 'https://www.allamericandoorsandwindowsinc.com/',
      image: 'work-card-1',
    },
    {
      project: 'medcare healthcert',
      url: 'https://medcare-healthcert.herokuapp.com/',
      image: 'work-card-2',
    },
  ];

  const [workList, setWorkList] = useState(workDetails);

  return (
    <section className="work-container">
      {/* HEADER CONTAINER */}
      <div>
        <h2 className="text-shadow-org dark:text-shadow-pnk">VIEW OUR WORK</h2>
      </div>

      {/* WORK CARD CONTAINER */}
      <div class="work-card-section">
        {workList.map((item, index) => (
          <a class="work-card" href={item.url}>
            <img
              src={require('../../assets/' + item.image + '.png')}
              alt={item.project}
            ></img>
            <h3>{item.project}</h3>
            <div class="corner">
              <div class="arrow">→</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;

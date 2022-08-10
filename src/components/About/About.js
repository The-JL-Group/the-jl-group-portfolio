import React from 'react';

import './about.css';

import AboutCards from './AboutCards/AboutCards';

const About = () => {
  return (
    <section>
      <div id="about" className="main-about">
        {/* Component Title */}
        <div className="text-shadow-org dark:text-shadow-pnk">
          <h2>ABOUT US</h2>
        </div>

        {/* Card Components */}
        <AboutCards />
      </div>
    </section>
  );
};

export default About;

// {/* Flip Cards */}
// <div>
//   <img src={jimboCardDark}></img>
//   <img src={linaCardDark}></img>
// </div>

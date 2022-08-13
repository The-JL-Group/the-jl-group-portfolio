import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './work.css';
import test1 from '../../assets/test1.png';
import test2 from '../../assets/test2.png';

const Work = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="work" className="work-container">
      {/* WORK HEADER */}
      <div className="work-header">
        <h2 className="text-shadow-org dark:text-shadow-pnk">WORK</h2>
      </div>

      {/* ALL AMERICAN CONTAINER */}
      <div className="header-1 mb-5" data-aos="fade-right">
        <div>
          <a
            href="https://www.allamericandoorsandwindowsinc.com/"
            target="_blank"
            rel="noopener"
          >
            <img src={test1} alt="test"></img>
            <h2 className="text-header-org dark:text-header-pnk">
              ALL AMERICAN DOORS & WINDOWS
            </h2>
            <div class="relative marquee-container d-none d-sm-block">
              <div class="marquee d-flex justify-content-around">
                <span>react</span>
                <span>·front end</span>
                <span>·responsive</span>
                <span>·tailwind</span>
                <span>·bootstrap</span>
                <span>·aos animated scroll</span>
              </div>
              <div class="marquee marquee2 d-flex justify-content-around">
                <span>·react</span>
                <span>·front end</span>
                <span>·responsive</span>
                <span>·tailwind</span>
                <span>·bootstrap</span>
                <span>·aos animated scroll</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* MEDCARE CONTAINER */}
      <div className="header-1" data-aos="fade-left">
        <div className="test2">
          <img src={test2} alt="test"></img>
          <h2 className="text-header-org dark:text-header-pnk">
            MEDCARE HEALTHCERT
          </h2>
          <div class="relative marquee-container d-none d-sm-block">
            <div class="marquee d-flex justify-content-around">
              <span>react</span>
              <span>·front end</span>
              <span>·responsive</span>
              <span>·tailwind</span>
              <span>·react helmet</span>
              <span>·owl react carousel</span>
              <span>·aos animated scroll·</span>
            </div>
            <div class="marquee marquee2 d-flex justify-content-around">
              <span>·react</span>
              <span>·front end</span>
              <span>·responsive</span>
              <span>·tailwind</span>
              <span>·react helmet</span>
              <span>·owl react carousel</span>
              <span>·aos animated scroll·</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

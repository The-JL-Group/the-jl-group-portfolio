import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './work.css';

const Work = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="work-container">
      {/* WORK HEADER */}
      <div className="work-header-main text-shadow-org dark:text-shadow-pnk">
        <h2>VIEW</h2>
        <h2>OUR</h2>
        <h2>WORK</h2>
      </div>

      {/* PROJECT 1 ON DESKTOP*/}
      <div className="work-tech">
        <a href="https://www.allamericandoorsandwindowsinc.com/">
          <div className="bg-desktop-d dark:bg-desktop-l bg-contain bg-no-repeat bg-center inline-block w-full desktop-image"></div>
        </a>
        <div className="work-desktop-text">
          <h3>all american doors and windows, inc.</h3>
          <hr></hr>
          <p>
            a react-based, front-end, responsive website for a company centered
            around the refurbishing of doors, windows, molding, etc.
          </p>
          <hr></hr>
          <p>
            “best website i’ve ever had for my business! 10/10 recommend. will
            be a repeat customer”
          </p>
          <p>-Mr. P</p>
        </div>
      </div>

      {/* PROJECT 2 ON TABLET*/}
      <div className="work-tech">
        <a href="https://medcare-healthcert.herokuapp.com/">
          <div className="bg-tablet-dark dark:bg-tablet-light bg-contain bg-no-repeat bg-center inline-block w-full tablet-image"></div>
        </a>
        <div className="work-text">
          <h3>medcare healthcert, llc.</h3>
          <hr></hr>
          <p>
            A react-based, front-end, and responsive website for a company
            centered around ccma certification.
          </p>
          <hr></hr>
          <p>“best website i’ve ever had for my business! 10/10 recommend.”</p>
          <p>-Mrs. H</p>
        </div>
      </div>

      {/* PROJECT 3 ON PHONE*/}
      <div className="work-tech">
        <a href="https://medcare-healthcert.herokuapp.com/">
          <div className="bg-phone-dark dark:bg-phone-light bg-contain bg-no-repeat bg-center inline-block w-full phone-image"></div>
        </a>
        <div className="work-text">
          <h3>coming soon.</h3>
        </div>
      </div>
    </section>
  );
};

export default Work;

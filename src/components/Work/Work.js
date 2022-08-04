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
    <section>
      {/* WORK HEADER */}
      <div className="work-header">
        <h2>VIEW</h2>
        <h2>OUR</h2>
        <h2>WORK</h2>
      </div>

      {/* PROJECT 1 ON DESKTOP*/}
      <div className="work-deskop">
        <h3>all american doors and windows, inc.</h3>
        <p>
          A react-based, front-end, responsive website for a company centered
          around the refurbishing of doors, windows, molding, etc.
        </p>
        <p>
          “best website i’ve ever had for my business! 10/10 recommend. will be
          a repeat customer”
        </p>
        <p>-Mr. P</p>
        <button></button>
      </div>

      {/* PROJECT 2 ON TABLET*/}
      <div className="work-tablet">
        <h3>medcare healthcert, llc.</h3>
        <p>
          A react-based, front-end, and responsive website for a company
          centered around ccma certification.
        </p>
        <p>“best website i’ve ever had for my business! 10/10 recommend.”</p>
        <p>-Mrs. H</p>
        <button></button>
      </div>

      {/* PROJECT 3 ON PHONE*/}
      <div className="work-phone">
        <h3>coming soon.</h3>
        <button></button>
      </div>
    </section>
  );
};

export default Work;

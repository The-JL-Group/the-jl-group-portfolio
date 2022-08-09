import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import './InputBox';

import contactHeaderDark from '../../assets/contact-header-dark.svg';
// import contactHeaderLight from '../../assets/contact-header-light.svg';
import InputBox from './InputBox';

const Contact = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-header text-shadow-org dark:text-shadow-pnk ">
        CONTACT
      </h2>
      {/* <img
        src={contactHeaderDark}
        alt="Contact Header Dark"
        className="dark:color-blk"
      ></img> */}
      <div className="bg-contact-dark"></div>
      <div className="contact-text">
        <p>
          Have any{' '}
          <span className="contact-color dark:text-pnk">QUESTIONS?</span>
        </p>
        <p>
          Hit our <span className="contact-color dark:text-pnk">EMAIL</span> or
          send us
        </p>
        <p>
          a <span className="contact-color dark:text-pnk">MESSAGE</span> down
          below
        </p>
        <p>
          or find us on{' '}
          <span className="contact-color dark:text-pnk">GITHUB</span>{' '}
        </p>
        <p>
          and find us on{' '}
          <span className="contact-color dark:text-pnk">FIVERR</span>
        </p>
      </div>
      <div>
        <p className="contact-color dark:text-pnk">jameslinagroup@gmail.com</p>
      </div>

      <div>
        <InputBox />
      </div>
    </section>
  );
};

export default Contact;

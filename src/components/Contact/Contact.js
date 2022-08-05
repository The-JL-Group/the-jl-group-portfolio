import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import './InputBox';

import contactHeaderDark from '../../assets/contact-header-dark.svg';
import InputBox from './InputBox';

const Contact = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="contact-container">
      <h2 className="contact-header">CONTACT</h2>
      <img src={contactHeaderDark} alt="Contact Header Dark"></img>
      <div className="contact-text">
        <p>
          Have any <span className="contact-color">QUESTIONS?</span>
        </p>
        <p>
          Hit our <span className="contact-color">EMAIL</span> or send us
        </p>
        <p>
          a <span className="contact-color">MESSAGE</span> down below
        </p>
        <p>
          or find us on <span className="contact-color">GITHUB</span>{' '}
        </p>
        <p>
          and find us on <span className="contact-color">FIVERR</span>
        </p>
      </div>
      <div>
        <p className="contact-color">jameslinagroup@gmail.com</p>
      </div>

      <div>
        <InputBox />
      </div>
    </section>
  );
};

export default Contact;

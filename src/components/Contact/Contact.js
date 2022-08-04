import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';

import contactHeaderDark from '../../assets/contact-header-dark.svg';

const Contact = () => {
  // SCROLL ANIMATION
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="contact-container">
      <h2>CONTACT</h2>
      <img src={contactHeaderDark} alt="Contact Header Dark"></img>
      <div>
        <p>Have any QUESTIONS? </p>
        <p>Hit our EMAIL or send us a</p>
        <p>MESSAGE down below</p>
        <p>or find us on GITHUB </p>
        <p>and find us on FIVERR</p>
        <p>jameslinagroup@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;

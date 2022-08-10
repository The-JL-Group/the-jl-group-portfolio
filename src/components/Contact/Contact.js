import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import './InputBox';
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
      <div className="bg-contact-dark dark:bg-contact-light bg-cover object-cover h-64 contact-image"></div>
      <div className="contact-text">
        <p>
          Have any
          <span className="contact-color dark:text-pnk"> QUESTIONS?</span>
        </p>
        <p>
          Hit our{' '}
          <a
            href="mailto:jameslinagroup@gmail.com"
            className="contact-color dark:text-pnk"
          >
            EMAIL
          </a>{' '}
          or send us
        </p>
        <p>
          a <span className="contact-color dark:text-pnk">MESSAGE</span> down
          below
        </p>
        <p>
          or find us on
          <a
            href="https://github.com/The-JL-Group"
            className="contact-color dark:text-pnk"
          >
            {' '}
            GITHUB
          </a>
        </p>
        <p>
          and find us on
          <a
            href="https://www.fiverr.com/thejlgroup/design-and-create-your-custom-unique-website-using-react"
            className="contact-color dark:text-pnk"
          >
            {' '}
            FIVERR
          </a>
        </p>
      </div>
      <div>
        <a
          href="mailto:jameslinagroup@gmail.com"
          className="contact-color dark:text-pnk"
        >
          jameslinagroup@gmail.com
        </a>
      </div>

      <div>
        <InputBox />
      </div>
    </section>
  );
};

export default Contact;

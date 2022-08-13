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

      {/* IMAGE CONTAINER */}
      {/* ON SMALLER SCREEN | HIDDEN ON LARGE AND UP */}
      <div className="bg-contact-dark dark:bg-contact-light bg-cover object-cover contact-image lg:hidden"></div>

      {/* ON LARGER SCREEN | HIDDEN ON MEDIUM AND DOWN*/}
      <div className="bg-full-dark dark:bg-full-light bg-cover object-cover contact-image-large hidden lg:inline-flex"></div>

      {/* TEXT ON SMALLER SCREEN / HIDDEN ON LARGE */}
      <div className="contact-text lg:hidden">
        <p>
          Have any
          <span className="text-org dark:text-pnk"> QUESTIONS?</span>
        </p>
        <p>
          Hit our{' '}
          <a
            href="mailto:jameslinagroup@gmail.com"
            className="text-org dark:text-pnk"
          >
            EMAIL
          </a>{' '}
          or send us
        </p>
        <p>
          a <span className="text-org dark:text-pnk">MESSAGE</span> down below
        </p>
        <p>
          or find us on
          <a
            href="https://github.com/The-JL-Group"
            className="text-org dark:text-pnk"
          >
            {' '}
            GITHUB
          </a>
        </p>
        <p>
          and find us on
          <a
            href="https://www.fiverr.com/thejlgroup/design-and-create-your-custom-unique-website-using-react"
            className="text-org dark:text-pnk"
          >
            {' '}
            FIVERR
          </a>
        </p>
      </div>

      {/* EMAIL CONTAINER */}
      <div className="pb-6 lg:py-6">
        <a
          href="mailto:jameslinagroup@gmail.com"
          className="text-org dark:text-pnk lg:text-2xl"
        >
          jameslinagroup@gmail.com
        </a>
      </div>

      <div className="lg:p-8">
        <InputBox />
      </div>
    </section>
  );
};

export default Contact;

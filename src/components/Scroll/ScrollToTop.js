import React, { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import { classNames } from './classNames';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // window.scrollY - is user has scrolled down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // looking for scroll event, run toggleVisibility function
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    // need to move the toggleVisibility function when it's done
    return () => {
      window.removeEventListener('scroll', toggleVisibility, { passive: true });
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-5">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="to top"
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-org transition-opacity hover:bg-ltOrg focus:outline-none dark:bg-pnk dark:hover:bg-ltPnk'
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTop;

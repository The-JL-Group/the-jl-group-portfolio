import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-scroll-progress-bar';
import './progressBar.css';

const ProgressBarComponent = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener('scroll', progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  });

  return (
    <div id="progressBarContainer">
      <div
        id="progressBar"
        className="bg-gradient-to-r from-ltOrg to-org dark:bg-gradient-to-r dark:from-ltPnk dark:to-pnk"
        style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
      />
    </div>
  );
};

export default ProgressBarComponent;

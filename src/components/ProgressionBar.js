import React from 'react';
import './progressionBar.css';

const ProgressionBar = () => {
  function progressBarScroll() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  }

  window.onscroll = function () {
    progressBarScroll();
  };

  return (
    <div>
      <div id="progressBar" className="progression-bar"></div>
    </div>
  );
};

export default ProgressionBar;

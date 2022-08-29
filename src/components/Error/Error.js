import React from 'react';
import './error.scss';

// Path to Header from button
import { useNavigate } from 'react-router-dom';

const Error = () => {
  let navigate = useNavigate();

  function homeLink() {
    navigate('/');
  }

  return (
    <div>
      <div id="error" className="error-glitch">
        <span aria-hidden="true">Error 404</span>
        Error 404
        <span aria-hidden="true">Error 404</span>
      </div>
      <div className="error-btn-container">
        <button
          onClick={homeLink}
          class="btn-flip error-btn"
          data-back="Back"
          data-front="Go"
        ></button>
      </div>
    </div>
  );
};

export default Error;

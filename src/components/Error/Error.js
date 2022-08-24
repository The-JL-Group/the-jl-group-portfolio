import React from 'react';
import './error.scss';

// Funny
import bernie from '../../assets/videos/giphy-2.gif'

// Path to Header from button
import { useNavigate } from 'react-router-dom';

const Error = () => {
    let navigate = useNavigate();

  function homeLink() {
    navigate('/');
  }

  return (
    <div>
      <div id='error' className='error-glitch'>
        <span aria-hidden="true">Error 404</span>
        Error 404
        <span aria-hidden="true">Error 404</span>
        {/* <img className='bernie' src={bernie} alt="funny"></img> */}
      </div>
      <div className='error-btn-container'>
        <a href="#" onClick={homeLink} class="btn-flip error-btn" data-back="Back" data-front="Go"></a>
      </div>
    </div>
  )
}

export default Error;